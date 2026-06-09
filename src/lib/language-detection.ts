import { Language } from '@/constants/content';

export function detectLanguage(): Language {
  if (typeof window === 'undefined') {
    return 'en';
  }

  // Check localStorage first
  const storedLanguage = localStorage.getItem('language') as Language | null;
  if (storedLanguage && (storedLanguage === 'en' || storedLanguage === 'tr')) {
    return storedLanguage;
  }

  // Detect from browser language
  const browserLang = navigator.language.toLowerCase();
  
  if (browserLang.startsWith('tr')) {
    return 'tr';
  }
  
  // Default to English
  return 'en';
}

export function setLanguage(language: Language): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem('language', language);
  }
}
