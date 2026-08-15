/**
 * Central OKLCH color tokens, matching the design handoff exactly.
 * Kept as plain CSS color strings and applied via inline `style` so we
 * don't depend on Tailwind's color-mix/opacity-modifier behavior for
 * oklch() values (safer since this project can't be build-tested here).
 */
export const colors = {
  blue: 'oklch(30% 0.09 258)',
  blueDark: 'oklch(22% 0.06 258)',
  blueDeep: 'oklch(26% 0.08 258)',
  blueDeep2: 'oklch(34% 0.10 250)',
  teal: 'oklch(60% 0.12 195)',
  tealDark: 'oklch(45% 0.12 195)',
  tealMid: 'oklch(50% 0.12 195)',
  orange: 'oklch(75% 0.15 55)',
  orangeDark: 'oklch(60% 0.15 55)',
  orangeDark2: 'oklch(62% 0.15 45)',
  bg: 'oklch(99% 0.004 90)',
  footer: 'oklch(24% 0.05 258)',
  textBody: 'oklch(42% 0.02 258)',
  textMuted: 'oklch(45% 0.02 258)',
  textDark: 'oklch(22% 0.06 258)',
  textFaint: 'oklch(48% 0.02 258)',
  green: 'oklch(72% 0.14 150)',
} as const;

export const tint = {
  blueCard: 'oklch(97% 0.02 258)',
  blueIcon14: 'oklch(30% 0.09 258 / 0.14)',
  blueIcon16: 'oklch(30% 0.09 258 / 0.16)',
  tealCard: 'oklch(96% 0.03 195)',
  tealIcon18: 'oklch(60% 0.12 195 / 0.18)',
  tealIcon18b: 'oklch(50% 0.12 195 / 0.18)',
  tealIcon15: 'oklch(60% 0.12 195 / 0.15)',
  orangeCard: 'oklch(97% 0.03 55)',
  orangeIcon18: 'oklch(75% 0.15 55 / 0.18)',
  orangeIcon16: 'oklch(75% 0.15 55 / 0.16)',
  orangeIcon20: 'oklch(65% 0.15 55 / 0.2)',
} as const;
