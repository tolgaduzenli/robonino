import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getDictionary, type SchoolPageCopy } from '@/lib/i18n/dictionaries';
import { getPath, getSchoolPath } from '@/lib/i18n/routes';
import type { Locale } from '@/lib/i18n/config';
import { schoolPages, type PartnerSchool } from '@/lib/content/partnerSchools';
import { colors, tint } from '@/lib/content/colors';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { IconTile } from '@/components/ui/IconTile';
import { CTABand } from '@/components/ui/CTABand';
import { PartnerSchoolChip, SchoolMark } from '@/components/ui/PartnerSchoolCard';

type School = PartnerSchool & { index: number };

const emptyCopy: SchoolPageCopy = { tagline: '', intro: [], facts: [], programmes: [], highlights: [] };
const isDev = process.env.NODE_ENV !== 'production';

function fill(template: string, school: School) {
  return template.replaceAll('{school}', school.shortName ?? school.name);
}

/** Copy for one school, with the short card text as fallback for the tagline. */
function schoolCopy(locale: Locale, school: School) {
  const dict = getDictionary(locale);
  const card = dict.partnerSchools.items[school.index] ?? { city: '', desc: '' };
  const page = dict.schoolPages[school.id] ?? emptyCopy;
  return { card, page, tagline: page.tagline || card.desc };
}

export function schoolMetadata(locale: Locale, school: School): Metadata {
  const dict = getDictionary(locale);
  const { tagline } = schoolCopy(locale, school);
  return {
    title: `${school.name} | ${dict.schoolPage.metaTitleSuffix}`,
    description: tagline,
    alternates: {
      canonical: getSchoolPath(school.id, locale),
      languages: { en: getSchoolPath(school.id, 'en'), tr: getSchoolPath(school.id, 'tr') },
    },
    openGraph: school.heroImage ? { images: [school.heroImage] } : undefined,
  };
}

/**
 * Gallery layout: the first photo is large (2×2 cells), the rest fill single
 * cells. If the last row would have gaps, the last photo stretches to fill
 * it, so any number of photos gives a clean grid at 2 and 4 columns.
 */
function galleryClass(i: number, count: number) {
  const classes: string[] = [];
  if (i === 0 && count > 2) classes.push('sm:col-span-2 sm:row-span-2 sm:!aspect-auto');
  if (i === count - 1 && count > 2) {
    const cells = count + 3;
    if (cells % 2) classes.push('sm:col-span-2 sm:!aspect-[8/3]');
    const lgSpan = cells % 4 ? 1 + (4 - (cells % 4)) : 1;
    classes.push({ 1: 'lg:col-span-1 lg:!aspect-[4/3]', 2: 'lg:col-span-2 lg:!aspect-[8/3]', 3: 'lg:col-span-3 lg:!aspect-[4/1]', 4: 'lg:col-span-4 lg:!aspect-[16/3]' }[lgSpan]!);
  }
  return classes.join(' ');
}

/** Dev-only reminder in place of a section that has no copy/photos yet. Never rendered in production. */
function DraftNote({ children }: { children: React.ReactNode }) {
  if (!isDev) return null;
  return (
    <div
      className="rounded-[14px] border-2 border-dashed px-5 py-4 text-[13.5px]"
      style={{ borderColor: 'oklch(80% 0.08 55)', background: 'oklch(98% 0.02 55)', color: colors.orangeDark2 }}
    >
      <strong>Draft (dev only):</strong> {children}
    </div>
  );
}

export function SchoolView({ locale, school }: { locale: Locale; school: School }) {
  const dict = getDictionary(locale);
  const t = dict.schoolPage;
  const { card, page, tagline } = schoolCopy(locale, school);
  const others = schoolPages.filter((s) => s.id !== school.id);
  const contactHref = getPath('contact', locale);

  return (
    <>
      {/* HERO: large photo when there is one, brand gradient otherwise */}
      <section
        className="relative flex min-h-[540px] items-end overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${colors.blueDeep}, ${colors.blueDeep2})` }}
      >
        {school.heroImage ? (
          <>
            <Image src={school.heroImage} alt={school.name} fill priority sizes="100vw" className="object-cover" />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(0deg, oklch(18% 0.05 258 / 0.92) 0%, oklch(18% 0.05 258 / 0.55) 45%, oklch(18% 0.05 258 / 0.1) 100%)' }}
            />
          </>
        ) : (
          <div
            className="absolute inset-0"
            style={{ backgroundImage: 'radial-gradient(oklch(100% 0 0 / 0.06) 1.5px, transparent 1.5px)', backgroundSize: '26px 26px' }}
          />
        )}

        <div className="relative mx-auto w-full max-w-[1280px] px-7 pb-16 pt-24">
          <nav className="mb-7 flex flex-wrap items-center gap-1.5 text-[13.5px] font-semibold" style={{ color: 'oklch(85% 0.02 258)' }}>
            <Link href={getPath('studyUk', locale)} className="text-inherit no-underline hover:underline">
              {dict.nav.studyUk}
            </Link>
            <span className="rn-icon" style={{ fontSize: 16 }}>chevron_right</span>
            <Link href={`${getPath('studyUk', locale)}#partner-schools`} className="text-inherit no-underline hover:underline">
              {t.allSchools}
            </Link>
            <span className="rn-icon" style={{ fontSize: 16 }}>chevron_right</span>
            <span className="text-white">{school.name}</span>
          </nav>

          {school.logoOnDark ? (
            <Image
              src={school.logoOnDark}
              alt={school.name}
              width={0}
              height={0}
              sizes="240px"
              priority
              className="mb-6 h-[64px] w-auto max-w-[240px] object-contain object-left"
              style={{ filter: 'drop-shadow(0 2px 8px oklch(10% 0.05 258 / 0.45))' }}
            />
          ) : (
            <div className="mb-6 inline-flex rounded-[12px] bg-white px-3.5 py-2.5" style={{ boxShadow: '0 12px 30px oklch(10% 0.05 258 / 0.25)' }}>
              <SchoolMark school={school} size={40} />
            </div>
          )}

          <h1 className="m-0 mb-3 font-poppins text-[clamp(34px,5vw,58px)] font-extrabold leading-[1.05] tracking-tight text-white">
            {school.name}
          </h1>
          {card.city && (
            <div className="mb-5 flex items-center gap-1.5 font-poppins text-[15px] font-semibold" style={{ color: 'oklch(85% 0.08 195)' }}>
              <span className="rn-icon" style={{ fontSize: 19 }}>location_on</span>
              {card.city}
            </div>
          )}
          <p className="m-0 mb-9 max-w-[640px] text-[clamp(16px,1.5vw,19px)] leading-relaxed" style={{ color: 'oklch(92% 0.015 258)' }}>
            {tagline}
          </p>

          {/* <div className="flex flex-wrap gap-3.5">
            <Link
              href={contactHref}
              className="rn-btn-primary rounded-xl px-[26px] py-[15px] font-poppins text-[15px] font-bold text-white no-underline"
              style={{ background: colors.orange, boxShadow: `0 10px 24px ${colors.orange.replace(')', ' / 0.35)')}` }}
            >
              {t.contactCta}
            </Link>
            <a
              href={school.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl border-[1.5px] px-[22px] py-[14px] font-poppins text-[15px] font-semibold text-white no-underline transition-colors hover:bg-white/10"
              style={{ borderColor: 'oklch(100% 0 0 / 0.45)' }}
            >
              {dict.partnerSchools.visitWebsite}
              <span className="rn-icon" style={{ fontSize: 17 }}>open_in_new</span>
            </a>
          </div> */}
        </div>
      </section>

      {/* OVERVIEW + AT A GLANCE */}
      <section className="mx-auto grid max-w-[1280px] items-start gap-12 px-7 py-20 lg:grid-cols-[1fr_360px]">
        <div>
          <div className="mb-3 font-poppins text-[13px] font-bold uppercase tracking-[0.08em]" style={{ color: colors.orange }}>
            {t.overviewEyebrow}
          </div>
          {page.intro.length > 0 ? (
            <div className="flex flex-col gap-4">
              {page.intro.map((p, i) => (
                <p key={i} className={`m-0 leading-relaxed ${i === 0 ? 'text-[19px]' : 'text-[16.5px]'}`} style={{ color: i === 0 ? colors.textDark : colors.textBody }}>
                  {p}
                </p>
              ))}
            </div>
          ) : (
            <>
              {/* The hero already shows card.desc unless a separate tagline was written. */}
              {page.tagline && (
                <p className="m-0 mb-5 text-[19px] leading-relaxed" style={{ color: colors.textDark }}>
                  {card.desc}
                </p>
              )}
              <DraftNote>add overview paragraphs to <code>schoolPages.{school.id}.intro</code> in messages/en.json and tr.json.</DraftNote>
            </>
          )}
        </div>

        <aside className="rounded-[20px] bg-white p-7 lg:sticky lg:top-24" style={{ boxShadow: '0 10px 30px oklch(30% 0.09 258 / 0.08)' }}>
          <div className="mb-5 font-poppins text-[17px] font-bold" style={{ color: colors.textDark }}>
            {t.glanceTitle}
          </div>
          <dl className="m-0 flex flex-col">
            {[{ label: t.locationLabel, value: card.city }, ...page.facts]
              .filter((f) => f.value)
              .map((f) => (
                <div key={f.label} className="flex justify-between gap-4 border-b py-3 text-[14.5px] last:border-b-0" style={{ borderColor: 'oklch(93% 0.01 258)' }}>
                  <dt style={{ color: colors.textMuted }}>{f.label}</dt>
                  <dd className="m-0 text-right font-semibold" style={{ color: colors.textDark }}>
                    {f.value}
                  </dd>
                </div>
              ))}
          </dl>
          {page.facts.length === 0 && (
            <div className="mt-3">
              <DraftNote>add rows (ages, school type, boarding, class size…) to <code>facts</code>.</DraftNote>
            </div>
          )}
          <a
            href={school.website}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 flex items-center justify-center gap-1.5 rounded-[10px] border-[1.5px] px-4 py-3 font-poppins text-sm font-semibold no-underline transition-colors hover:bg-[oklch(97%_0.02_258)]"
            style={{ color: colors.blue, borderColor: 'oklch(87% 0.01 258)' }}
          >
            {dict.partnerSchools.visitWebsite}
            <span className="rn-icon" style={{ fontSize: 16 }}>open_in_new</span>
          </a>
        </aside>
      </section>

      {/* PROGRAMMES */}
      {(page.programmes.length > 0 || isDev) && (
        <section className="px-7 py-20" style={{ background: 'linear-gradient(180deg, oklch(97% 0.008 258), oklch(99% 0.004 90))' }}>
          <div className="mx-auto max-w-[1280px]">
            <SectionHeading eyebrow={t.programmesEyebrow} title={fill(t.programmesTitle, school)} eyebrowColor={colors.teal} />
            {page.programmes.length > 0 ? (
              <div className={`grid gap-[22px] md:grid-cols-2 ${page.programmes.length % 3 !== 0 && page.programmes.length % 4 === 0 ? 'xl:grid-cols-4 lg:grid-cols-2' : 'lg:grid-cols-3'}`}>
                {page.programmes.map((p) => (
                  <div key={p.title} className="rn-card flex flex-col rounded-[18px] bg-white p-7" style={{ boxShadow: '0 8px 24px oklch(30% 0.09 258 / 0.07)' }}>
                    <IconTile icon="menu_book" bg={tint.tealIcon18} color={colors.tealDark} />
                    <div className="mb-2 mt-5 font-poppins text-[18px] font-bold" style={{ color: colors.textDark }}>
                      {p.title}
                    </div>
                    {p.ages && (
                      <div className="mb-3 w-fit rounded-full px-3 py-1 font-poppins text-[12.5px] font-semibold" style={{ background: tint.blueCard, color: colors.blue }}>
                        {p.ages}
                      </div>
                    )}
                    <p className="m-0 text-[15px] leading-relaxed" style={{ color: colors.textMuted }}>
                      {p.desc}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <DraftNote>add <code>programmes</code> as {'{ title, ages, desc }'}; the section is hidden in production while empty.</DraftNote>
            )}
          </div>
        </section>
      )}

      {/* HIGHLIGHTS */}
      {(page.highlights.length > 0 || isDev) && (
        <section className="mx-auto max-w-[1280px] px-7 py-20">
          <SectionHeading eyebrow={t.highlightsEyebrow} title={fill(t.highlightsTitle, school)} />
          {page.highlights.length > 0 ? (
            <div className="grid gap-x-10 gap-y-8" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
              {page.highlights.map((h) => (
                <div key={h.title} className="flex gap-4">
                  <div className="flex-none">
                    <IconTile icon="check" bg={tint.orangeIcon18} color={colors.orangeDark} size={42} iconSize={22} />
                  </div>
                  <div>
                    <div className="mb-1 font-poppins text-[16.5px] font-bold" style={{ color: colors.textDark }}>
                      {h.title}
                    </div>
                    <p className="m-0 text-[15px] leading-relaxed" style={{ color: colors.textMuted }}>
                      {h.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <DraftNote>add <code>highlights</code> as {'{ title, desc }'}; the section is hidden in production while empty.</DraftNote>
          )}
        </section>
      )}

      {/* SUMMER SCHOOL */}
      {page.summerSchool && page.summerSchool.courses.length > 0 && (
        <SummerSchoolSection summer={page.summerSchool} labels={t} contactHref={contactHref} contactLabel={t.contactCta} />
      )}

      {/* ACCREDITATIONS */}
      {page.accreditations && page.accreditations.length > 0 && (
        <section className="px-7 py-20">
          <div className="mx-auto max-w-[1280px] rounded-[24px] px-8 py-12" style={{ background: tint.blueCard }}>
            <SectionHeading eyebrow={t.accreditationsEyebrow} title={t.accreditationsTitle} desc={t.accreditationsDesc} eyebrowColor={colors.teal} maxWidth={680} />
            <div className="grid gap-[18px] md:grid-cols-2">
              {page.accreditations.map((a) => (
                <div key={a.name} className="flex gap-4 rounded-[16px] bg-white p-6" style={{ boxShadow: '0 6px 18px oklch(30% 0.09 258 / 0.06)' }}>
                  <div className="flex-none">
                    <IconTile icon="verified" bg={tint.tealIcon18} color={colors.tealDark} size={44} iconSize={24} />
                  </div>
                  <div>
                    <div className="mb-1 font-poppins text-[16px] font-bold" style={{ color: colors.textDark }}>
                      {a.name}
                    </div>
                    <p className="m-0 text-[14.5px] leading-relaxed" style={{ color: colors.textMuted }}>
                      {a.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {school.reportsUrl && (
              <div className="mt-8 flex justify-center">
                <a
                  href={school.reportsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-[10px] border-[1.5px] bg-white px-5 py-3 font-poppins text-sm font-semibold no-underline transition-colors hover:bg-[oklch(97%_0.02_258)]"
                  style={{ color: colors.blue, borderColor: 'oklch(87% 0.01 258)' }}
                >
                  {t.accreditationsLink}
                  <span className="rn-icon" style={{ fontSize: 16 }}>
                    open_in_new
                  </span>
                </a>
              </div>
            )}
          </div>
        </section>
      )}

      {/* GALLERY */}
      {((school.gallery?.length ?? 0) > 0 || isDev) && (
        <section className="px-7 pb-20">
          <div className="mx-auto max-w-[1280px]">
            <SectionHeading eyebrow={t.galleryEyebrow} title={fill(t.galleryTitle, school)} eyebrowColor={colors.teal} />
            {school.gallery && school.gallery.length > 0 ? (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {school.gallery.map((src, i) => (
                  <div key={src} className={`relative overflow-hidden rounded-[18px] ${galleryClass(i, school.gallery!.length)}`} style={{ aspectRatio: '4 / 3' }}>
                    <Image src={src} alt={school.name} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover" />
                  </div>
                ))}
              </div>
            ) : (
              <DraftNote>
                put photos in <code>public/images/schools/{school.id}/</code> and list them in <code>heroImage</code> / <code>gallery</code> in lib/content/partnerSchools.ts.
              </DraftNote>
            )}
          </div>
        </section>
      )}

      {/* OTHER SCHOOLS */}
      {others.length > 0 && (
        <section className="px-7 py-20" style={{ background: 'linear-gradient(180deg, oklch(97% 0.008 258), oklch(99% 0.004 90))' }}>
          <div className="mx-auto max-w-[1280px]">
            <SectionHeading eyebrow={t.otherSchoolsEyebrow} title={t.otherSchoolsTitle} eyebrowColor={colors.teal} />
            <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
              {others.map((s) => (
                <PartnerSchoolChip
                  key={s.id}
                  school={s}
                  city={dict.partnerSchools.items[s.index]?.city ?? ''}
                  websiteLabel={t.learnMore}
                  href={getSchoolPath(s.id, locale)}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABand
        locale={locale}
        title={fill(t.cta.title, school)}
        desc={t.cta.desc}
        primary={dict.studyUk.cta.secondary}
        primaryVariant="orange"
      />
    </>
  );
}

const courseAccents = [
  { bar: colors.teal, soft: tint.tealCard, text: colors.tealDark },
  { bar: colors.blue, soft: tint.blueCard, text: colors.blue },
  { bar: colors.orange, soft: tint.orangeCard, text: colors.orangeDark2 },
];

function SummerSchoolSection({
  summer,
  labels,
  contactHref,
  contactLabel,
}: {
  summer: NonNullable<SchoolPageCopy['summerSchool']>;
  labels: { summerAges: string; summerLevel: string; summerLength: string; summerDates: string; summerNote: string };
  contactHref: string;
  contactLabel: string;
}) {
  return (
    <section className="px-7 py-20" style={{ background: 'linear-gradient(180deg, oklch(97.5% 0.02 55), oklch(99% 0.004 90))' }}>
      <div className="mx-auto max-w-[1280px]">
        <SectionHeading eyebrow={summer.eyebrow} title={summer.title} desc={summer.intro} maxWidth={720} />

        <div className="mb-10 grid gap-[22px]" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          {summer.courses.map((c, i) => {
            const accent = courseAccents[i % courseAccents.length];
            const specs = [
              { label: labels.summerAges, value: c.ages },
              { label: labels.summerLevel, value: c.level },
              { label: labels.summerLength, value: c.length },
            ].filter((s) => s.value);
            return (
              <div key={c.title} className="rn-card flex flex-col overflow-hidden rounded-[18px] bg-white" style={{ boxShadow: '0 8px 24px oklch(30% 0.09 258 / 0.07)' }}>
                <div className="h-1.5" style={{ background: accent.bar }} />
                <div className="flex flex-1 flex-col p-7">
                  <div className="mb-4 flex flex-wrap items-center gap-2.5">
                    <div className="font-poppins text-[21px] font-extrabold" style={{ color: colors.textDark }}>
                      {c.title}
                    </div>
                    {c.badge && (
                      <span className="rounded-full px-2.5 py-0.5 font-poppins text-[11.5px] font-bold text-white" style={{ background: colors.orange }}>
                        {c.badge}
                      </span>
                    )}
                  </div>
                  <div className="mb-5 grid grid-cols-3 gap-2">
                    {specs.map((s) => (
                      <div key={s.label} className="rounded-[10px] px-3 py-2" style={{ background: accent.soft }}>
                        <div className="text-[11.5px] font-semibold uppercase tracking-wide" style={{ color: colors.textMuted }}>
                          {s.label}
                        </div>
                        <div className="font-poppins text-[15px] font-bold" style={{ color: accent.text }}>
                          {s.value}
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="m-0 mb-5 flex-1 text-[15px] leading-relaxed" style={{ color: colors.textMuted }}>
                    {c.desc}
                  </p>
                  <div className="flex gap-2 border-t pt-4 text-[13.5px]" style={{ borderColor: 'oklch(93% 0.01 258)', color: colors.textBody }}>
                    <span className="rn-icon flex-none" style={{ fontSize: 18, color: accent.text }}>
                      calendar_month
                    </span>
                    <span>
                      <strong className="font-semibold" style={{ color: colors.textDark }}>
                        {labels.summerDates}:
                      </strong>{' '}
                      {c.dates}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {summer.includes.length > 0 && (
          <div className="rounded-[20px] bg-white p-8" style={{ boxShadow: '0 8px 24px oklch(30% 0.09 258 / 0.06)' }}>
            <div className="mb-5 font-poppins text-[18px] font-bold" style={{ color: colors.textDark }}>
              {summer.includesTitle}
            </div>
            <ul className="m-0 grid list-none gap-x-10 gap-y-4 p-0 md:grid-cols-2">
              {summer.includes.map((item) => (
                <li key={item} className="flex gap-3 text-[15px] leading-relaxed" style={{ color: colors.textBody }}>
                  <span className="rn-icon mt-0.5 flex-none" style={{ fontSize: 20, color: colors.teal }}>
                    check_circle
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t pt-6" style={{ borderColor: 'oklch(93% 0.01 258)' }}>
              <p className="m-0 text-[15px]" style={{ color: colors.textMuted }}>
                {labels.summerNote}
              </p>
              <Link
                href={contactHref}
                className="rn-btn-primary rounded-xl px-6 py-3 font-poppins text-[14.5px] font-bold text-white no-underline"
                style={{ background: colors.orange }}
              >
                {contactLabel}
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
