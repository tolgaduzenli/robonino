export const navItems = [
  { key: 'home' },
  { key: 'studyUk' },
  { key: 'robotics' },
  { key: 'events' },
  { key: 'about' },
  { key: 'contact' },
] as const satisfies readonly { key: import('@/lib/i18n/routes').NavKey }[];

export const socials = [
  { label: 'Instagram', initial: 'IG', href: '#' },
  // { label: 'Facebook', initial: 'FB', href: '#' },
  { label: 'LinkedIn', initial: 'IN', href: '#' },
  // { label: 'YouTube', initial: 'YT', href: '#' },
] as const;
