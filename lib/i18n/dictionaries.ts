import en from '@/messages/en.json';
import tr from '@/messages/tr.json';
import type { Locale } from './config';

export type Dictionary = typeof en;

const dictionaries: Record<Locale, Dictionary> = { en, tr };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.en;
}
