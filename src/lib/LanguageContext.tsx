'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, content } from '@/constants/content';
import { detectLanguage, setLanguage } from '@/lib/language-detection';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof content.en;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const detectedLang = detectLanguage();
    setLanguageState(detectedLang);
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguageState(lang);
    setLanguage(lang);
  };

  const toggleLanguage = () => {
    const newLang: Language = language === 'en' ? 'tr' : 'en';
    handleSetLanguage(newLang);
  };

  const value: LanguageContextType = {
    language,
    setLanguage: handleSetLanguage,
    t: content[language],
    toggleLanguage,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
