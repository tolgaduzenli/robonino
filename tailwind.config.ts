import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'rn-blue': 'oklch(30% 0.09 258)',
        'rn-blue-dark': 'oklch(23% 0.06 258)',
        'rn-blue-deep': 'oklch(26% 0.08 258)',
        'rn-blue-deep2': 'oklch(34% 0.10 250)',
        'rn-teal': 'oklch(60% 0.12 195)',
        'rn-teal-dark': 'oklch(45% 0.12 195)',
        'rn-orange': 'oklch(75% 0.15 55)',
        'rn-orange-dark': 'oklch(62% 0.15 45)',
        'rn-bg': 'oklch(99% 0.004 90)',
        'rn-footer': 'oklch(24% 0.05 258)',
        'rn-text-body': 'oklch(42% 0.02 258)',
        'rn-text-muted': 'oklch(45% 0.02 258)',
        'rn-text-dark': 'oklch(22% 0.06 258)',
      },
      fontFamily: {
        poppins: ['var(--font-poppins)', 'sans-serif'],
        nunito: ['var(--font-nunito)', 'sans-serif'],
      },
      keyframes: {
        'rn-float1': {
          '0%, 100%': { transform: 'translate(0,0) rotate(0deg)' },
          '50%': { transform: 'translate(20px,-30px) rotate(8deg)' },
        },
        'rn-float2': {
          '0%, 100%': { transform: 'translate(0,0) rotate(0deg)' },
          '50%': { transform: 'translate(-25px,25px) rotate(-6deg)' },
        },
        'rn-float3': {
          '0%, 100%': { transform: 'translate(0,0) scale(1)' },
          '50%': { transform: 'translate(15px,15px) scale(1.08)' },
        },
        'rn-slidedown': {
          from: { opacity: '0', transform: 'translateY(-8px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'rn-float1': 'rn-float1 9s ease-in-out infinite',
        'rn-float2': 'rn-float2 11s ease-in-out infinite',
        'rn-float3': 'rn-float3 7s ease-in-out infinite',
        'rn-slidedown': 'rn-slidedown 0.2s ease',
      },
    },
  },
  plugins: [],
};

export default config;
