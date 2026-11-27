import en from '@/messages/en.json';
import tr from '@/messages/tr.json';
import type { Locale } from './config';

/**
 * Copy for one partner school's detail page (`schoolPages.<id>` in the JSON).
 * Typed by hand instead of inferred from en.json because the arrays start out
 * empty while the copy is being written, and an inferred `never[]` would make
 * a filled tr.json fail the type check. Every field may be left empty: the
 * page falls back to the short card text and hides empty sections.
 */
export type SchoolPageCopy = {
  /** Short line under the school name in the hero. Falls back to `partnerSchools.items[i].desc`. */
  tagline: string;
  /** Overview paragraphs. */
  intro: string[];
  /** "At a glance" rows, e.g. { label: 'Ages', value: '11–18' }. Location is always shown first. */
  facts: { label: string; value: string }[];
  programmes: { title: string; ages?: string; desc: string }[];
  highlights: { title: string; desc: string }[];
  /** Optional summer school section. Hidden when absent or when it has no courses. */
  summerSchool?: {
    eyebrow: string;
    title: string;
    intro: string;
    courses: {
      title: string;
      /** Small badge on the card, e.g. "New for 2027". */
      badge?: string;
      ages: string;
      level?: string;
      length: string;
      dates: string;
      desc: string;
    }[];
    includesTitle: string;
    includes: string[];
  };
};

export type Dictionary = Omit<typeof en, 'schoolPages'> & {
  schoolPages: Record<string, SchoolPageCopy | undefined>;
};

const dictionaries: Record<Locale, Dictionary> = { en, tr };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.en;
}
