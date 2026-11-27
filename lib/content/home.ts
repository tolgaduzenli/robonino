import { colors, tint } from './colors';

export const heroImage = {
  src: '/images/others/homepage-hero.jpeg',
};

export const services = [
  {
    key: 'study',
    routeKey: 'studyUk',
    image: '/images/others/studyUK-hero.jpeg',
    imageAlt: 'International students studying together in the UK',
    badgeColor: colors.blue,
    accentColor: colors.blue,
  },
  {
    key: 'robotics',
    routeKey: 'robotics',
    image: '/images/others/robotic.jpeg',
    imageAlt: 'Children building and programming a robotics kit',
    badgeColor: colors.teal,
    accentColor: colors.tealMid,
  },
  {
    key: 'events',
    routeKey: 'events',
    image: '/images/others/events.jpeg',
    imageAlt: 'Professionals collaborating in a modern workshop',
    badgeColor: colors.orange,
    accentColor: colors.orangeDark2,
  },
] as const;

export const whyItems = [
  { cardBg: tint.blueCard, iconWrapBg: tint.blueIcon14, icon: 'location_on', iconColor: colors.blue },
  { cardBg: tint.tealCard, iconWrapBg: tint.tealIcon18, icon: 'school', iconColor: colors.tealDark },
  { cardBg: tint.orangeCard, iconWrapBg: tint.orangeIcon18, icon: 'shield_person', iconColor: colors.orangeDark },
  { cardBg: tint.blueCard, iconWrapBg: tint.blueIcon14, icon: 'translate', iconColor: colors.blue },
  { cardBg: tint.tealCard, iconWrapBg: tint.tealIcon18, icon: 'public', iconColor: colors.tealDark },
  { cardBg: tint.orangeCard, iconWrapBg: tint.orangeIcon18, icon: 'business_center', iconColor: colors.orangeDark },
] as const;

/** Order matches `home.destinations.items` in messages/{en,tr}.json: London, Oxford, Cambridge, Brighton, Bournemouth.
 *  Brighton and Bournemouth are course locations through our partner EF (not Robonino offices). */
export const destinations = [
  { image: '/images/destinations/london.jpg' },
  { image: '/images/destinations/oxford.jpg' },
  { image: '/images/destinations/cambridge.jpg' },
  { image: '/images/destinations/brighton.jpg' },
  { image: '/images/destinations/bournemouth.jpg' },
] as const;

export const testimonials = [
  { initials: 'EY', avatarBg: colors.teal },
  { initials: 'MK', avatarBg: colors.blue },
  { initials: 'SW', avatarBg: colors.orange },
] as const;
