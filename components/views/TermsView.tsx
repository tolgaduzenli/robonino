import type { Metadata } from 'next';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { getPath } from '@/lib/i18n/routes';
import type { Locale } from '@/lib/i18n/config';
import { LegalContent } from '@/components/ui/LegalContent';

export function termsMetadata(locale: Locale): Metadata {
  const dict = getDictionary(locale);
  return {
    title: dict.terms.metaTitle,
    description: dict.terms.metaDescription,
    alternates: {
      canonical: getPath('terms', locale),
      languages: { en: getPath('terms', 'en'), tr: getPath('terms', 'tr') },
    },
  };
}

export function TermsView({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale).terms;
  return <LegalContent title={dict.title} lastUpdated={dict.lastUpdated} intro={dict.intro} sections={dict.sections} />;
}
