/**
 * UK partner schools, shown on the Study UK page (full cards) and the Home
 * page (compact strip). Both link out to each school's website.
 *
 * Order matches `partnerSchools.items` in messages/{en,tr}.json, which holds
 * each school's translated city/location line and description. School names
 * are proper nouns, so they live here rather than in the dictionaries.
 *
 * `logo` is a path under /public (e.g. '/images/partners/<id>.svg'); leave it
 * out to show a generic school icon instead.
 *
 * Entries with `placeholder: true` render in `npm run dev` only and are
 * dropped from production builds, so a half-filled entry can't go live by
 * accident.
 */
export type PartnerSchool = {
  id: string;
  name: string;
  website: string;
  logo?: string;
  placeholder?: boolean;
};

const allPartnerSchools: PartnerSchool[] = [
  { id: 'haileybury', name: 'Haileybury', website: 'https://www.haileybury.com/', logo: '/images/partners/haileybury.svg' },
  { id: 'mpw', name: 'MPW (Mander Portman Woodward)', website: 'https://www.mpw.ac.uk/', logo: '/images/partners/mpw.jpg' },
  { id: 'oisc', name: 'Oxford International Study Centre', website: 'https://www.oxintstudycentre.com/', logo: '/images/partners/oisc.svg' },
  { id: 'ef', name: 'EF Education First', website: 'https://www.ef.co.uk/', logo: '/images/partners/ef.svg' },
];

/** Each school paired with its index into `partnerSchools.items` in the dictionary. */
export const partnerSchools = allPartnerSchools
  .map((school, index) => ({ ...school, index }))
  .filter((school) => !school.placeholder || process.env.NODE_ENV !== 'production');
