import { colors, tint } from './colors';

export const heroImage = {
  src: '/images/others/studyUK-hero.jpeg',
};

export const audiences = [
  { cardBg: tint.blueCard, iconBg: tint.blueIcon16, icon: 'child_care', iconColor: colors.blue },
  { cardBg: tint.tealCard, iconBg: tint.tealIcon18b, icon: 'groups', iconColor: colors.tealDark },
  { cardBg: tint.orangeCard, iconBg: tint.orangeIcon20, icon: 'person', iconColor: colors.orangeDark },
  { cardBg: tint.blueCard, iconBg: tint.blueIcon16, icon: 'family_restroom', iconColor: colors.blue },
] as const;

export const features = [
  { iconBg: tint.blueIcon14, icon: 'school', iconColor: colors.blue },
  { iconBg: tint.orangeIcon16, icon: 'wb_sunny', iconColor: colors.orangeDark },
  { iconBg: tint.tealIcon18, icon: 'badge', iconColor: colors.tealDark },
  { iconBg: tint.blueIcon14, icon: 'home', iconColor: colors.blue },
  { iconBg: tint.orangeIcon16, icon: 'flight', iconColor: colors.orangeDark },
  { iconBg: tint.tealIcon18, icon: 'chat', iconColor: colors.tealDark },
] as const;

/** Order matches `destinations.items` in messages/{en,tr}.json: London, Brighton, Oxford, Cambridge. */
export const destinations = [
  { image: '/images/destinations/london.jpg' },
  { image: '/images/destinations/brighton.jpg' },
  { image: '/images/destinations/oxford.jpg' },
  { image: '/images/destinations/cambridge.jpg' },
] as const;
