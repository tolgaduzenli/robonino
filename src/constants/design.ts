export const colors = {
  primary: {
    DEFAULT: '#0F172A',
    light: '#1E293B',
    lighter: '#334155',
  },
  secondary: {
    DEFAULT: '#F97316',
    dark: '#EA580C',
    light: '#FB923C',
    lighter: '#FDBA74',
  },
  tertiary: {
    DEFAULT: '#06B6D4',
    dark: '#0891B2',
    light: '#22D3EE',
    lighter: '#67E8F9',
  },
  neutral: {
    DEFAULT: '#F8FAFC',
    dark: '#E2E8F0',
    darker: '#CBD5E1',
    light: '#FFFFFF',
  },
} as const;

export const fonts = {
  family: 'Plus Jakarta Sans',
} as const;

export const spacing = {
  xs: '0.5rem',
  sm: '1rem',
  md: '1.5rem',
  lg: '2rem',
  xl: '3rem',
  '2xl': '4rem',
} as const;

export const borderRadius = {
  sm: '0.25rem',
  md: '0.5rem',
  lg: '0.75rem',
  xl: '1rem',
  full: '9999px',
} as const;

export const shadows = {
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
} as const;
