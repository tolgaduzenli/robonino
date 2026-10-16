export const navItems = [
  { key: 'home' },
  { key: 'studyUk' },
  { key: 'robotics' },
  { key: 'events' },
  { key: 'about' },
  { key: 'contact' },
] as const satisfies readonly { key: import('@/lib/i18n/routes').NavKey }[];

export const socials = [
  { label: 'Instagram', initial: 'IG', href: 'https://www.instagram.com/robonino_uk' },
  { label: 'Facebook', initial: 'FB', href: 'https://www.facebook.com/profile.php?id=61594799354221' },
  { label: 'LinkedIn', initial: 'IN', href: 'https://www.linkedin.com/company/robonino/' },
  // { label: 'YouTube', initial: 'YT', href: '#' },
] as const;
