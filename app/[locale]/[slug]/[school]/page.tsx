import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isLocale, locales, type Locale } from '@/lib/i18n/config';
import { getRouteKeyFromSlug, getSlug } from '@/lib/i18n/routes';
import { getSchoolPage, schoolPages } from '@/lib/content/partnerSchools';
import { SchoolView, schoolMetadata } from '@/components/views/SchoolView';

/**
 * Partner school detail pages: /<locale>/<Study UK slug>/<school id>,
 * e.g. /en/study-uk/haileybury and /tr/ingilterede-egitim/haileybury.
 * Only the Study UK slug has children; anything else 404s.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    schoolPages.map((school) => ({ locale, slug: getSlug('studyUk', locale), school: school.id })),
  );
}

function resolve(locale: string, slug: string, schoolId: string) {
  if (!isLocale(locale) || getRouteKeyFromSlug(slug, locale) !== 'studyUk') return null;
  return getSchoolPage(schoolId) ?? null;
}

export async function generateMetadata({
  params: { locale, slug, school },
}: {
  params: { locale: string; slug: string; school: string };
}): Promise<Metadata> {
  const found = resolve(locale, slug, school);
  return found ? schoolMetadata(locale as Locale, found) : {};
}

export default function SchoolPage({ params: { locale, slug, school } }: { params: { locale: string; slug: string; school: string } }) {
  const found = resolve(locale, slug, school);
  if (!found) notFound();
  return <SchoolView locale={locale as Locale} school={found} />;
}
