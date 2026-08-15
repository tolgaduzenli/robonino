'use client';

import { useEffect } from 'react';
import type { Locale } from '@/lib/i18n/config';

/** Root layout can't know the locale (it's above the [locale] segment), so it renders a static lang="en". This corrects it client-side once the actual locale is known. */
export function SetHtmlLang({ locale }: { locale: Locale }) {
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);
  return null;
}
