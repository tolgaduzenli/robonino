import type { Metadata } from 'next';
import Image from 'next/image';
import { isLocale, type Locale } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { getPath } from '@/lib/i18n/routes';
import * as content from '@/lib/content/home';
import { colors } from '@/lib/content/colors';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { IconCard } from '@/components/ui/IconCard';
import { ServiceCard } from '@/components/ui/ServiceCard';
import { DestinationCard } from '@/components/ui/DestinationCard';
import { TestimonialCard } from '@/components/ui/TestimonialCard';
import { CTABand } from '@/components/ui/CTABand';
import { FilledButton } from '@/components/ui/Button';
import { HeroBlobs, DotGridBackground } from '@/components/ui/Blobs';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);
  return {
    title: dict.home.metaTitle,
    description: dict.home.metaDescription,
    alternates: {
      canonical: `/${locale}`,
      languages: { en: '/en', tr: '/tr' },
    },
  };
}

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  if (!isLocale(locale)) return null;
  const dict = getDictionary(locale as Locale).home;
  const services = [
    { ...dict.services.study, ...content.services[0] },
    { ...dict.services.robotics, ...content.services[1] },
    { ...dict.services.events, ...content.services[2] },
  ];

  return (
    <>
      {/* HERO */}
      <section
        className="relative overflow-hidden px-7 pb-[110px] pt-[88px]"
        style={{
          background:
            'linear-gradient(160deg, oklch(94% 0.025 258) 0%, oklch(96% 0.02 195) 40%, oklch(97% 0.02 55) 70%, oklch(99% 0.004 90) 100%)',
        }}
      >
        <HeroBlobs variant="home" />
        <div className="relative mx-auto flex max-w-[1280px] flex-wrap items-center gap-14">
          <div className="min-w-[300px] flex-[1_1_460px]">
            <h1
              className="m-0 mb-[22px] font-poppins text-[clamp(34px,5vw,58px)] font-extrabold leading-[1.08] tracking-tight"
              style={{ color: colors.textDark }}
            >
              {dict.hero.title}
            </h1>
            <p className="m-0 mb-9 max-w-[540px] text-[clamp(16px,1.6vw,19px)] leading-relaxed" style={{ color: colors.textBody }}>
              {dict.hero.desc}
            </p>
            <div className="flex flex-wrap gap-3.5">
              <FilledButton href={getPath('studyUk', locale as Locale)} color={colors.blue}>
                {dict.hero.ctaStudy}
              </FilledButton>
              <FilledButton href={getPath('robotics', locale as Locale)} color={colors.teal}>
                {dict.hero.ctaRobotics}
              </FilledButton>
              <FilledButton href={getPath('events', locale as Locale)} color={colors.orange}>
                {dict.hero.ctaEvents}
              </FilledButton>
            </div>
          </div>
          <div className="relative min-w-[300px] flex-[1_1_420px]">
            <div
              className="relative overflow-hidden rounded-[24px]"
              style={{ aspectRatio: '5 / 4', boxShadow: '0 30px 60px oklch(30% 0.09 258 / 0.18)' }}
            >
              <Image src={content.heroImage.src} alt={dict.hero.imageAlt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" priority />
            </div>
            {/* <div
              className="absolute -bottom-[22px] -left-[22px] flex items-center gap-3 rounded-2xl bg-white p-[14px_18px]"
              style={{ boxShadow: '0 16px 32px oklch(30% 0.09 258 / 0.16)' }}
            >
              <div
                className="flex h-[38px] w-[38px] items-center justify-center rounded-[10px]"
                style={{ background: 'oklch(68% 0.12 195 / 0.18)' }}
              >
                <div className="h-4 w-4 rounded-[5px]" style={{ background: colors.teal }} />
              </div>
              <div>
                <div className="font-poppins text-[17px] font-extrabold" style={{ color: colors.textDark }}>
                  {dict.hero.statNumber}
                </div>
                <div className="text-[12.5px]" style={{ color: colors.textFaint }}>
                  {dict.hero.statLabel}
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* THREE CORE SERVICES */}
      <section className="mx-auto max-w-[1280px] px-7 py-24">
        <SectionHeading eyebrow={dict.services.eyebrow} title={dict.services.title} desc={dict.services.desc} />
        <div className="grid gap-7" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
          {services.map((s) => (
            <ServiceCard
              key={s.routeKey}
              href={getPath(s.routeKey, locale as Locale)}
              image={s.image}
              imageAlt={s.imageAlt}
              badgeColor={s.badgeColor}
              badgeLabel={s.badge}
              title={s.title}
              desc={s.desc}
              features={s.features}
              cta={s.cta}
              accentColor={s.accentColor}
            />
          ))}
        </div>
      </section>

      {/* WHY ROBONINO */}
      <section
        className="relative overflow-hidden px-7 py-24"
        style={{ background: 'linear-gradient(180deg, oklch(97% 0.008 258), oklch(99% 0.004 90))' }}
      >
        <DotGridBackground />
        <div
          className="animate-rn-float3 absolute right-[6%] top-[60px] h-[130px] w-[130px] rounded-full border-2"
          style={{ borderColor: 'oklch(60% 0.12 195 / 0.18)' }}
        />
        <div
          className="animate-rn-float1 absolute bottom-10 left-[4%] h-[90px] w-[90px] rounded-3xl border-2"
          style={{ borderColor: 'oklch(75% 0.15 55 / 0.2)', transform: 'rotate(12deg)' }}
        />
        <div className="relative mx-auto max-w-[1280px]">
          <SectionHeading eyebrow={dict.why.eyebrow} title={dict.why.title} eyebrowColor={colors.teal} maxWidth={600} />
          <div className="grid gap-[22px]" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
            {dict.why.items.map((item, i) => (
              <IconCard
                key={item.title}
                title={item.title}
                desc={item.desc}
                icon={content.whyItems[i].icon}
                iconBg={content.whyItems[i].iconWrapBg}
                iconColor={content.whyItems[i].iconColor}
                cardBg={content.whyItems[i].cardBg}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED DESTINATIONS */}
      <section className="mx-auto max-w-[1280px] px-7 py-24">
        <SectionHeading eyebrow={dict.destinations.eyebrow} title={dict.destinations.title} maxWidth={600} />
        <div className="grid gap-[22px]" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))' }}>
          {dict.destinations.items.map((d, i) => (
            <DestinationCard key={d.name} image={content.destinations[i].image} name={d.name} tag={d.tag} />
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      {/* <section
        className="relative overflow-hidden px-7 py-24"
        style={{ background: 'linear-gradient(180deg, oklch(97% 0.008 258), oklch(99% 0.004 90))' }}
      >
        <div
          className="absolute -left-10 -top-10 h-[180px] w-[180px] rounded-full"
          style={{ background: 'radial-gradient(circle, oklch(30% 0.09 258 / 0.06), transparent 70%)' }}
        />
        <div
          className="animate-rn-float2 absolute bottom-5 right-[5%] h-16 w-16 rounded-3xl border-2"
          style={{ borderColor: 'oklch(60% 0.12 195 / 0.2)', transform: 'rotate(-10deg)' }}
        />
        <div className="relative mx-auto max-w-[1280px]">
          <SectionHeading eyebrow={dict.testimonials.eyebrow} title={dict.testimonials.title} eyebrowColor={colors.teal} maxWidth={600} />
          <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            {dict.testimonials.items.map((t, i) => (
              <TestimonialCard
                key={t.name}
                quote={t.quote}
                name={t.name}
                role={t.role}
                initials={content.testimonials[i].initials}
                avatarBg={content.testimonials[i].avatarBg}
              />
            ))}
          </div>
        </div>
      </section> */}

      <CTABand locale={locale} title={dict.cta.title} desc={dict.cta.desc} primary={dict.cta.secondary} />
    </>
  );
}
