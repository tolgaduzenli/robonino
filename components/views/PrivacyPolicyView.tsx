import type { Metadata } from 'next';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { getPath } from '@/lib/i18n/routes';
import type { Locale } from '@/lib/i18n/config';
import { LegalContent } from '@/components/ui/LegalContent';

export function privacyMetadata(locale: Locale): Metadata {
  const dict = getDictionary(locale);
  return {
    title: dict.privacy.metaTitle,
    description: dict.privacy.metaDescription,
    alternates: {
      canonical: getPath('privacy', locale),
      languages: { en: getPath('privacy', 'en'), tr: getPath('privacy', 'tr') },
    },
  };
}

export function PrivacyPolicyView({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale).privacy;
  return <LegalContent title={dict.title} lastUpdated={dict.lastUpdated} intro={dict.intro} sections={dict.sections} />;
}
