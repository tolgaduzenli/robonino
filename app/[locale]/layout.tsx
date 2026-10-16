import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { locales, isLocale, type Locale } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SetHtmlLang } from '@/components/SetHtmlLang';
import { socials } from '@/lib/content/nav';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.robonino.com';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  if (!isLocale(locale)) return {};

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: 'Robonino',
      template: '%s | Robonino',
    },
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: '/en',
        tr: '/tr',
      },
    },
    openGraph: {
      siteName: 'Robonino',
      locale: locale === 'tr' ? 'tr_TR' : 'en_GB',
      type: 'website',
    },
  };
}

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!isLocale(locale)) notFound();

  const dict = getDictionary(locale as Locale);

  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'Robonino',
    url: `${SITE_URL}/${locale}`,
    description: dict.home.metaDescription,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '',
      addressLocality: 'London',
      postalCode: 'E4 7LG',
      addressCountry: 'GB',
    },
    telephone: '',
    sameAs: socials.map((s) => s.href),
  };

  return (
    <>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,500,1,0&display=block"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <SetHtmlLang locale={locale as Locale} />
      <Header locale={locale as Locale} nav={dict.nav} cta={dict.header.cta} />
      <main>{children}</main>
      <Footer locale={locale as Locale} dict={dict.footer} />
    </>
  );
}
