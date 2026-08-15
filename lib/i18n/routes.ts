import type { Locale } from './config';

/**
 * Translated URL slugs for every non-home page, per locale.
 * "home" has no slug -- it's always just `/${locale}`.
 */
export const routeKeys = ['studyUk', 'robotics', 'events', 'about', 'contact', 'privacy', 'terms'] as const;
export type RouteKey = (typeof routeKeys)[number];
export type NavKey = 'home' | RouteKey;

export const slugs: Record<RouteKey, Record<Locale, string>> = {
  studyUk: { en: 'study-uk', tr: 'ingilterede-egitim' },
  robotics: { en: 'robotics', tr: 'robotik-kodlama' },
  events: { en: 'events', tr: 'etkinlikler' },
  about: { en: 'about', tr: 'hakkimizda' },
  contact: { en: 'contact', tr: 'iletisim' },
  privacy: { en: 'privacy-policy', tr: 'gizlilik-politikasi' },
  terms: { en: 'terms-and-conditions', tr: 'kullanim-kosullari' },
};

export function getSlug(key: RouteKey, locale: Locale): string {
  return slugs[key][locale];
}

/** Full path for a nav key (including the "home" case) in a given locale. */
export function getPath(key: NavKey, locale: Locale): string {
  if (key === 'home') return `/${locale}`;
  return `/${locale}/${getSlug(key, locale)}`;
}

/** Reverse lookup: given a URL slug and locale, which page does it mean? */
export function getRouteKeyFromSlug(slug: string, locale: Locale): RouteKey | null {
  for (const key of routeKeys) {
    if (slugs[key][locale] === slug) return key;
  }
  return null;
}

/** Given the current page's route key ('home' included) and its own locale,
 * find the equivalent URL in the other locale -- used by the language switcher. */
export function getEquivalentPath(currentKey: NavKey, otherLocale: Locale): string {
  return getPath(currentKey, otherLocale);
}
