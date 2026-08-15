import type { Metadata } from 'next';
import Image from 'next/image';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { getPath } from '@/lib/i18n/routes';
import type { Locale } from '@/lib/i18n/config';
import * as content from '@/lib/content/studyUk';
import { colors } from '@/lib/content/colors';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { IconCard, FeatureRow } from '@/components/ui/IconCard';
import { DestinationCard } from '@/components/ui/DestinationCard';
import { SingleTestimonial } from '@/components/ui/TestimonialCard';
import { CTABand } from '@/components/ui/CTABand';
import { FilledButton, OutlineButton } from '@/components/ui/Button';
import { HeroBlobs } from '@/components/ui/Blobs';

export function studyUkMetadata(locale: Locale): Metadata {
  const dict = getDictionary(locale);
  return {
    title: dict.studyUk.metaTitle,
    description: dict.studyUk.metaDescription,
    alternates: {
      canonical: getPath('studyUk', locale),
      languages: { en: getPath('studyUk', 'en'), tr: getPath('studyUk', 'tr') },
    },
  };
}

export function StudyUkView({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale).studyUk;

  return (
    <>
      <section
        className="relative overflow-hidden px-7 pb-[88px] pt-[72px]"
        style={{ background: 'linear-gradient(180deg, oklch(96% 0.015 258), oklch(99% 0.004 90) 60%)' }}
      >
        <HeroBlobs variant="tint" />
        <div className="relative mx-auto flex max-w-[1280px] flex-wrap items-center gap-[50px]">
          <div className="min-w-[300px] flex-[1_1_460px]">
            <h1
              className="m-0 mb-5 font-poppins text-[clamp(32px,4.6vw,50px)] font-extrabold leading-[1.1] tracking-tight"
              style={{ color: colors.textDark }}
            >
              {dict.hero.title}
            </h1>
            <p className="m-0 mb-8 max-w-[520px] text-[clamp(16px,1.5vw,18px)] leading-relaxed" style={{ color: colors.textBody }}>
              {dict.hero.desc}
            </p>
            <div className="flex flex-wrap gap-3.5">
              {/* <FilledButton href={getPath('contact', locale)} color={colors.blue}>
                {dict.hero.secondaryCta}
              </FilledButton> */}
              <FilledButton href="#programs" color={colors.blue}>
                {dict.hero.secondaryCta}
              </FilledButton>
              {/* <OutlineButton href="#programs">{dict.hero.secondaryCta}</OutlineButton> */}
            </div>
          </div>
          <div
            className="relative min-w-[300px] flex-[1_1_420px] overflow-hidden rounded-[24px]"
            style={{ aspectRatio: '5 / 4', boxShadow: '0 30px 60px oklch(30% 0.09 258 / 0.18)' }}
          >
            <Image src={content.heroImage.src} alt={dict.hero.imageAlt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" priority />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-7 py-20">
        <SectionHeading id="programs" eyebrow={dict.audiences.eyebrow} title={dict.audiences.title} maxWidth={640} />
        <div className="grid gap-[22px]" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
          {dict.audiences.items.map((a, i) => (
            <IconCard
              key={a.title}
              title={a.title}
              desc={a.desc}
              icon={content.audiences[i].icon}
              iconBg={content.audiences[i].iconBg}
              iconColor={content.audiences[i].iconColor}
              cardBg={content.audiences[i].cardBg}
            />
          ))}
        </div>
      </section>

      <section className="px-7 py-20" style={{ background: 'linear-gradient(180deg, oklch(97% 0.008 258), oklch(99% 0.004 90))' }}>
        <div className="mx-auto max-w-[1280px]">
          <SectionHeading eyebrow={dict.features.eyebrow} title={dict.features.title} eyebrowColor={colors.teal} maxWidth={640} />
          <div className="grid gap-[22px]" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            {dict.features.items.map((f, i) => (
              <FeatureRow
                key={f.title}
                title={f.title}
                desc={f.desc}
                icon={content.features[i].icon}
                iconBg={content.features[i].iconBg}
                iconColor={content.features[i].iconColor}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-7 py-20">
        <SectionHeading eyebrow={dict.destinations.eyebrow} title={dict.destinations.title} maxWidth={600} />
        <div className="grid gap-[22px]" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))' }}>
          {dict.destinations.items.map((d, i) => (
            <DestinationCard key={d.name} image={content.destinations[i].image} name={d.name} />
          ))}
        </div>
      </section>

      {/* <section className="px-7 py-20" style={{ background: 'linear-gradient(180deg, oklch(97% 0.008 258), oklch(99% 0.004 90))' }}>
        <SingleTestimonial quote={dict.testimonial.quote} name={dict.testimonial.name} role={dict.testimonial.role} />
      </section> */}

      <CTABand locale={locale} title={dict.cta.title} desc={dict.cta.desc} primary={dict.cta.secondary} />
    </>
  );
}
