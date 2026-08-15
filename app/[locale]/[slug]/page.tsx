import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isLocale, locales, type Locale } from '@/lib/i18n/config';
import { routeKeys, getRouteKeyFromSlug, getSlug, type RouteKey } from '@/lib/i18n/routes';
import { StudyUkView, studyUkMetadata } from '@/components/views/StudyUkView';
import { RoboticsView, roboticsMetadata } from '@/components/views/RoboticsView';
import { EventsView, eventsMetadata } from '@/components/views/EventsView';
import { AboutView, aboutMetadata } from '@/components/views/AboutView';
import { ContactView, contactMetadata } from '@/components/views/ContactView';
import { PrivacyPolicyView, privacyMetadata } from '@/components/views/PrivacyPolicyView';
import { TermsView, termsMetadata } from '@/components/views/TermsView';

export function generateStaticParams() {
  const params: { locale: Locale; slug: string }[] = [];
  for (const locale of locales) {
    for (const key of routeKeys) {
      params.push({ locale, slug: getSlug(key, locale) });
    }
  }
  return params;
}

export async function generateMetadata({
  params: { locale, slug },
}: {
  params: { locale: string; slug: string };
}): Promise<Metadata> {
  if (!isLocale(locale)) return {};
  const key = getRouteKeyFromSlug(slug, locale);
  if (!key) return {};
  return metadataFor(key, locale);
}

function metadataFor(key: RouteKey, locale: Locale): Metadata {
  switch (key) {
    case 'studyUk':
      return studyUkMetadata(locale);
    case 'robotics':
      return roboticsMetadata(locale);
    case 'events':
      return eventsMetadata(locale);
    case 'about':
      return aboutMetadata(locale);
    case 'contact':
      return contactMetadata(locale);
    case 'privacy':
      return privacyMetadata(locale);
    case 'terms':
      return termsMetadata(locale);
  }
}

export default function LocalizedPage({
  params: { locale, slug },
}: {
  params: { locale: string; slug: string };
}) {
  if (!isLocale(locale)) return null;
  const key = getRouteKeyFromSlug(slug, locale);
  if (!key) notFound();

  switch (key) {
    case 'studyUk':
      return <StudyUkView locale={locale} />;
    case 'robotics':
      return <RoboticsView locale={locale} />;
    case 'events':
      return <EventsView locale={locale} />;
    case 'about':
      return <AboutView locale={locale} />;
    case 'contact':
      return <ContactView locale={locale} />;
    case 'privacy':
      return <PrivacyPolicyView locale={locale} />;
    case 'terms':
      return <TermsView locale={locale} />;
  }
}
