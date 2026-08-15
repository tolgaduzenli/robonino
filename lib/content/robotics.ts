import { colors, tint } from './colors';

export const heroImage = {
  src: '/images/others/robotic.jpeg',
};

/** One entry per program in `robotics.tracks.items` (messages/{en,tr}.json), same order: AlgoBuddy, Big Builders, Smartivo, AlgoPlay, Bricks Challenge, Galileo Technic, RoboToys, AlgoC. */
export const tracks = [
  { cardBg: tint.tealCard, iconBg: tint.tealIcon18b, icon: 'smart_toy', iconColor: colors.tealDark },
  { cardBg: tint.orangeCard, iconBg: tint.orangeIcon20, icon: 'construction', iconColor: colors.orangeDark },
  { cardBg: tint.blueCard, iconBg: tint.blueIcon16, icon: 'auto_stories', iconColor: colors.blue },
  { cardBg: tint.tealCard, iconBg: tint.tealIcon18b, icon: 'extension', iconColor: colors.tealDark },
  { cardBg: tint.orangeCard, iconBg: tint.orangeIcon20, icon: 'balance', iconColor: colors.orangeDark },
  { cardBg: tint.blueCard, iconBg: tint.blueIcon16, icon: 'settings', iconColor: colors.blue },
  { cardBg: tint.tealCard, iconBg: tint.tealIcon18b, icon: 'precision_manufacturing', iconColor: colors.tealDark },
  { cardBg: tint.orangeCard, iconBg: tint.orangeIcon20, icon: 'terminal', iconColor: colors.orangeDark },
] as const;

export const features = [
  { iconBg: tint.tealIcon18, icon: 'smart_toy', iconColor: colors.tealDark },
  { iconBg: tint.blueIcon14, icon: 'code', iconColor: colors.blue },
  { iconBg: tint.orangeIcon16, icon: 'groups', iconColor: colors.orangeDark },
  { iconBg: tint.tealIcon18, icon: 'school', iconColor: colors.tealDark },
  { iconBg: tint.orangeIcon16, icon: 'park', iconColor: colors.orangeDark },
] as const;

export const gallery = [
  { image: 'https://images.unsplash.com/photo-1581092160607-ee22731cb92f?w=700&q=80' },
  { image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=700&q=80' },
  { image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=700&q=80' },
  { image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=700&q=80' },
] as const;
