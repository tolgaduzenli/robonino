import { colors, tint } from './colors';

export const storyImage = {
  src: '/images/others/our-story.jpg',
};

export const values = [
  { iconBg: tint.blueIcon14, icon: 'verified', iconColor: colors.blue },
  { iconBg: tint.orangeIcon18, icon: 'shield_person', iconColor: colors.orangeDark },
  { iconBg: tint.tealIcon18, icon: 'engineering', iconColor: colors.tealDark },
  { iconBg: tint.blueIcon14, icon: 'translate', iconColor: colors.blue },
] as const;

export const team = [
  { id: 'tolga', photo: '/images/team/tolga.jpg' },
  { id: 'cagatay', photo: '/images/team/cagatay.jpeg' },
] as const;
