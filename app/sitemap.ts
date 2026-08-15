import type { MetadataRoute } from 'next';
import { locales } from '@/lib/i18n/config';
import { getPath, routeKeys, type NavKey } from '@/lib/i18n/routes';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.robonino.com';
const allKeys: NavKey[] = ['home', ...routeKeys];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const key of allKeys) {
      entries.push({
        url: `${SITE_URL}${getPath(key, locale)}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        alternates: {
          languages: Object.fromEntries(locales.map((l) => [l, `${SITE_URL}${getPath(key, l)}`])),
        },
      });
    }
  }

  return entries;
}
