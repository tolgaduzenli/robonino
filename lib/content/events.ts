import { colors, tint } from './colors';

export const heroImage = {
  src: '/images/others/events.jpeg',
};

export const formats = [
  { cardBg: tint.orangeCard, iconBg: tint.orangeIcon20, icon: 'groups', iconColor: colors.orangeDark },
  { cardBg: tint.tealCard, iconBg: tint.tealIcon18b, icon: 'smart_toy', iconColor: colors.tealDark },
  { cardBg: tint.blueCard, iconBg: tint.blueIcon16, icon: 'lightbulb', iconColor: colors.blue },
  { cardBg: tint.orangeCard, iconBg: tint.orangeIcon20, icon: 'hub', iconColor: colors.orangeDark },
] as const;

export const features = [
  { iconBg: tint.tealIcon15, icon: 'location_on', iconColor: colors.tealDark },
  { iconBg: tint.blueIcon14, icon: 'person', iconColor: colors.blue },
  { iconBg: tint.orangeIcon16, icon: 'tune', iconColor: colors.orangeDark },
  { iconBg: tint.tealIcon15, icon: 'restaurant', iconColor: colors.tealDark },
  { iconBg: tint.blueIcon14, icon: 'summarize', iconColor: colors.blue },
] as const;

export const gallery = [
  { image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=700&q=80' },
  { image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=700&q=80' },
  { image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=700&q=80' },
  { image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=700&q=80' },
] as const;
