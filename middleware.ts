import { NextRequest, NextResponse } from 'next/server';
import { locales, defaultLocale, isLocale, type Locale } from '@/lib/i18n/config';

const LOCALE_COOKIE = 'NEXT_LOCALE';

/**
 * Parses an Accept-Language header (e.g. "tr-TR,tr;q=0.9,en-US;q=0.8")
 * and returns the first supported locale it can match, if any.
 */
function localeFromAcceptLanguage(header: string | null): Locale | null {
  if (!header) return null;
  const preferred = header
    .split(',')
    .map((part) => part.split(';')[0].trim().toLowerCase())
    .filter(Boolean);

  for (const tag of preferred) {
    const base = tag.split('-')[0];
    if (isLocale(base)) return base;
  }
  return null;
}

/**
 * Turkey country code -> Turkish locale. Extend this map if more
 * country-based overrides are needed later.
 */
function localeFromCountry(country: string | null): Locale | null {
  if (!country) return null;
  if (country.toUpperCase() === 'TR') return 'tr';
  return null;
}

export default function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  // Skip API routes, static files, and Next.js internals.
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.') // e.g. favicon.ico, sitemap.xml, robots.txt
  ) {
    return NextResponse.next();
  }

  const segments = pathname.split('/');
  const firstSegment = segments[1];

  if (isLocale(firstSegment)) {
    // Already locale-prefixed: just make sure the cookie reflects the
    // user's explicit choice so future root visits remember it.
    const response = NextResponse.next();
    response.cookies.set(LOCALE_COOKIE, firstSegment, {
      path: '/',
      maxAge: 60 * 60 * 24 * 365,
      sameSite: 'lax',
    });
    return response;
  }

  // No locale prefix present -- decide where to send the visitor.
  // Priority: explicit cookie choice > IP/country geolocation > browser
  // Accept-Language header > default locale.
  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value;
  let locale: Locale | null = cookieLocale && isLocale(cookieLocale) ? cookieLocale : null;

  if (!locale) {
    const country =
      request.headers.get('x-vercel-ip-country') ||
      (request as unknown as { geo?: { country?: string } }).geo?.country ||
      null;
    locale = localeFromCountry(country);
  }

  if (!locale) {
    locale = localeFromAcceptLanguage(request.headers.get('accept-language'));
  }

  if (!locale) {
    locale = defaultLocale;
  }

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === '/' ? '' : pathname}`;
  url.search = search;

  const response = NextResponse.redirect(url);
  response.cookies.set(LOCALE_COOKIE, locale, {
    path: '/',
    maxAge: 60 * 60 * 24 * 365,
    sameSite: 'lax',
  });
  return response;
}

export const config = {
  matcher: ['/((?!_next|api).*)'],
};

// Referenced so the `locales` import isn't flagged as unused when only
// the type is consumed above in some TS configurations.
void locales;
