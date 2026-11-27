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
 * Each school also has a detail page at /<locale>/<study-uk slug>/<id>
 * (see `getSchoolPath` in lib/i18n/routes.ts). Its copy lives under
 * `schoolPages.<id>` in messages/{en,tr}.json. The page renders in
 * `npm run dev` only until `detailPage: true` is set, so it can be built up
 * without going live half-finished. Photos go in public/images/schools/<id>/.
 *
 * Entries with `placeholder: true` render in `npm run dev` only and are
 * dropped from production builds, so a half-filled entry can't go live by
 * accident.
 */
export type PartnerSchool = {
  id: string;
  name: string;
  /** Shorter name used inside headings on the detail page (e.g. "MPW Programmes"). Defaults to `name`. */
  shortName?: string;
  website: string;
  logo?: string;
  /** White/transparent version of the logo, shown directly on the dark hero photo of the detail page.
   *  Without one, the hero shows `logo` on a small white card. */
  logoOnDark?: string;
  /** Large photo at the top of the detail page. Without one, the hero uses a brand-coloured background. */
  heroImage?: string;
  /** Extra photos shown as a gallery on the detail page. */
  gallery?: string[];
  /** Set to true once the detail page's copy is ready to go live. */
  detailPage?: boolean;
  placeholder?: boolean;
};

const allPartnerSchools: PartnerSchool[] = [
  {
    id: 'haileybury',
    name: 'Haileybury',
    website: 'https://www.haileybury.com/',
    logo: '/images/partners/haileybury.svg',
    logoOnDark: '/images/partners/haileybury-white.svg',
    heroImage: '/images/schools/haileybury/campus-aerial.jpg',
    gallery: [
      '/images/schools/haileybury/london-trip.jpg',
      '/images/schools/haileybury/science-lab.jpg',
      '/images/schools/haileybury/library.jpg',
      '/images/schools/haileybury/design-workshop.jpg',
      '/images/schools/haileybury/classroom.jpg',
      '/images/schools/haileybury/study-room.jpg',
      '/images/schools/haileybury/boarding-common-room.jpg',
      '/images/schools/haileybury/boarding-lounge.jpg',
    ],
    detailPage: true,
  },
  {
    id: 'mpw',
    name: 'MPW (Mander Portman Woodward)',
    shortName: 'MPW',
    website: 'https://www.mpw.ac.uk/',
    logo: '/images/partners/mpw.jpg',
    logoOnDark: '/images/partners/mpw-white.png',
    heroImage: '/images/schools/mpw/natural-history-museum.jpg',
    gallery: [
      '/images/schools/mpw/cambridge-punting.jpg',
      '/images/schools/mpw/robotics.jpg',
      '/images/schools/mpw/medicine-lab.jpg',
      '/images/schools/mpw/cambridge-college-tour.jpg',
      '/images/schools/mpw/london-eye.jpg',
      '/images/schools/mpw/life-skills-workshop.jpg',
      '/images/schools/mpw/computer-lab.jpg',
      '/images/schools/mpw/mock-trial.jpg',
      '/images/schools/mpw/celebration.jpg',
    ],
    detailPage: true,
  },
  { id: 'oisc', name: 'Oxford International Study Centre', website: 'https://www.oxintstudycentre.com/', logo: '/images/partners/oisc.svg', detailPage: false },
  { id: 'ef', name: 'EF Education First', website: 'https://www.ef.co.uk/', logo: '/images/partners/ef.svg', detailPage: false },
];

/** Each school paired with its index into `partnerSchools.items` in the dictionary. */
export const partnerSchools = allPartnerSchools
  .map((school, index) => ({ ...school, index }))
  .filter((school) => !school.placeholder || process.env.NODE_ENV !== 'production');

/** Schools whose detail page should exist in this build (all of them in dev). */
export const schoolPages = partnerSchools.filter((school) => school.detailPage || process.env.NODE_ENV !== 'production');

export function getSchoolPage(id: string) {
  return schoolPages.find((school) => school.id === id);
}
