import type { Metadata } from 'next';
import Image from 'next/image';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { getPath } from '@/lib/i18n/routes';
import type { Locale } from '@/lib/i18n/config';
import * as content from '@/lib/content/about';
import { colors } from '@/lib/content/colors';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { IconCard } from '@/components/ui/IconCard';
import { CTABand } from '@/components/ui/CTABand';
import { HeroBlobs } from '@/components/ui/Blobs';

export function aboutMetadata(locale: Locale): Metadata {
  const dict = getDictionary(locale);
  return {
    title: dict.about.metaTitle,
    description: dict.about.metaDescription,
    alternates: {
      canonical: getPath('about', locale),
      languages: { en: getPath('about', 'en'), tr: getPath('about', 'tr') },
    },
  };
}

export function AboutView({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale).about;

  return (
    <>
      <section
        className="relative overflow-hidden px-7 py-20"
        style={{ background: 'linear-gradient(180deg, oklch(96% 0.015 258), oklch(99% 0.004 90) 60%)' }}
      >
        <HeroBlobs variant="tint" />
        <div className="relative mx-auto max-w-[820px] text-center">
          <div className="mb-4 font-poppins text-[13px] font-bold uppercase tracking-[0.08em]" style={{ color: colors.blue }}>
            {dict.hero.eyebrow}
          </div>
          <h1
            className="m-0 mb-[22px] font-poppins text-[clamp(32px,4.6vw,48px)] font-extrabold leading-[1.1] tracking-tight"
            style={{ color: colors.textDark }}
          >
            {dict.hero.title}
          </h1>
          <p className="m-0 text-[clamp(16px,1.5vw,18px)] leading-[1.65]" style={{ color: colors.textBody }}>
            {dict.hero.desc}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1100px] px-7 py-20">
        <div className="flex flex-wrap items-center gap-12">
          <div
            className="relative min-w-[280px] flex-[1_1_400px] overflow-hidden rounded-[22px]"
            style={{ aspectRatio: '4 / 3' }}
          >
            <Image src={content.storyImage.src} alt={dict.story.imageAlt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          </div>
          <div className="min-w-[280px] flex-[1_1_380px]">
            <h2 className="m-0 mb-4 font-poppins text-[clamp(24px,3vw,30px)] font-extrabold" style={{ color: colors.textDark }}>
              {dict.story.title}
            </h2>
            <p className="m-0 mb-3.5 text-[15.5px] leading-[1.7]" style={{ color: colors.textBody }}>
              {dict.story.paragraph1}
            </p>
            <p className="m-0 text-[15.5px] leading-[1.7]" style={{ color: colors.textBody }}>
              {dict.story.paragraph2}
            </p>
          </div>
        </div>
      </section>

      <section className="px-7 py-20" style={{ background: 'linear-gradient(180deg, oklch(97% 0.008 258), oklch(99% 0.004 90))' }}>
        <div className="mx-auto max-w-[1100px]">
          <SectionHeading eyebrow={dict.values.eyebrow} title={dict.values.title} eyebrowColor={colors.teal} maxWidth={560} />
          <div className="grid gap-[22px]" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
            {dict.values.items.map((v, i) => (
              <IconCard
                key={v.title}
                title={v.title}
                desc={v.desc}
                icon={content.values[i].icon}
                iconBg={content.values[i].iconBg}
                iconColor={content.values[i].iconColor}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1100px] px-7 py-20">
        <SectionHeading eyebrow={dict.team.eyebrow} title={dict.team.title} maxWidth={560} />
        <div className="grid gap-[22px]" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
          {dict.team.members.map((p) => {
            const member = content.team.find((m) => m.id === p.id);
            return (
              <div key={p.name} className="text-center">
                <div className="relative mb-3.5 aspect-square overflow-hidden rounded-[18px]">
                  {member && (
                    <Image src={member.photo} alt={`${p.name}, ${p.role}`} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
                  )}
                </div>
                <div className="font-poppins text-[15.5px] font-bold" style={{ color: colors.textDark }}>
                  {p.name}
                </div>
                <div className="text-[13px]" style={{ color: colors.textFaint }}>
                  {p.role}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CTABand locale={locale} title={dict.cta.title} desc={dict.cta.desc} primary={dict.cta.primary} primaryVariant="orange" />
    </>
  );
}
