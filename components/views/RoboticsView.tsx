import type { Metadata } from 'next';
import Image from 'next/image';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { getPath } from '@/lib/i18n/routes';
import type { Locale } from '@/lib/i18n/config';
import * as content from '@/lib/content/robotics';
import { colors } from '@/lib/content/colors';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { IconCard, FeatureRow } from '@/components/ui/IconCard';
import { GalleryImage } from '@/components/ui/DestinationCard';
import { SingleTestimonial } from '@/components/ui/TestimonialCard';
import { CTABand } from '@/components/ui/CTABand';
import { FilledButton, OutlineButton } from '@/components/ui/Button';
import { HeroBlobs } from '@/components/ui/Blobs';

export function roboticsMetadata(locale: Locale): Metadata {
  const dict = getDictionary(locale);
  return {
    title: dict.robotics.metaTitle,
    description: dict.robotics.metaDescription,
    alternates: {
      canonical: getPath('robotics', locale),
      languages: { en: getPath('robotics', 'en'), tr: getPath('robotics', 'tr') },
    },
  };
}

export function RoboticsView({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale).robotics;

  return (
    <>
      <section
        className="relative overflow-hidden px-7 pb-[88px] pt-[72px]"
        style={{ background: 'linear-gradient(180deg, oklch(95% 0.025 195), oklch(99% 0.004 90) 60%)' }}
      >
        <HeroBlobs variant="tint" />
        <div className="relative mx-auto flex max-w-[1280px] flex-wrap items-center gap-[50px]">
          <div className="min-w-[300px] flex-[1_1_460px]">
            <div className="mb-3.5 font-poppins text-[13px] font-bold uppercase tracking-[0.08em]" style={{ color: colors.tealDark }}>
              {dict.hero.eyebrow}
            </div>
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
              <FilledButton href="#programs" color="oklch(45% 0.11 195)">
                {dict.hero.secondaryCta}
              </FilledButton>
              {/* <OutlineButton href="#programs">{dict.hero.secondaryCta}</OutlineButton> */}
            </div>
          </div>
          <div
            className="relative min-w-[300px] flex-[1_1_420px] overflow-hidden rounded-[24px]"
            style={{ aspectRatio: '5 / 4', boxShadow: '0 30px 60px oklch(45% 0.11 195 / 0.2)' }}
          >
            <Image src={content.heroImage.src} alt={dict.hero.imageAlt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" priority />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-7 py-20">
        <SectionHeading id="programs" eyebrow={dict.tracks.eyebrow} title={dict.tracks.title} subTitle={dict.tracks.subTitle} maxWidth={640} />
        <div className="grid gap-[22px]" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
          {dict.tracks.items.map((a, i) => (
            <IconCard
              key={a.title}
              title={a.title}
              desc={a.desc}
              icon={content.tracks[i].icon}
              iconBg={content.tracks[i].iconBg}
              iconColor={content.tracks[i].iconColor}
              cardBg={content.tracks[i].cardBg}
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
        <SectionHeading eyebrow={dict.gallery.eyebrow} title={dict.gallery.title} maxWidth={600} />
        <div className="grid gap-[22px]" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))' }}>
          {dict.gallery.items.map((g, i) => (
            <GalleryImage key={g.label} image={content.gallery[i].image} label={g.label} />
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
