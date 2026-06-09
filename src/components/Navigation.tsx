'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { Menu, X, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Navigation() {
  const { t, toggleLanguage, language } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-200">
      <nav className="flex justify-between items-center w-full px-8 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <Link href="/" className="text-2xl font-extrabold text-primary tracking-tighter">
            Robonino
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link 
            href="/study-in-uk" 
            className="text-gray-600 font-bold border-b-2 border-secondary hover:text-secondary transition-colors duration-200"
          >
            {t.nav.studyInUK}
          </Link>
          <Link 
            href="/robotics-coding" 
            className="text-gray-600 font-medium hover:text-secondary transition-colors duration-200"
          >
            {t.nav.roboticsCoding}
          </Link>
          <Link 
            href="/corporate-events" 
            className="text-gray-600 font-medium hover:text-secondary transition-colors duration-200"
          >
            {t.nav.corporateEvents}
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleLanguage}
            className="hidden sm:block text-sm font-medium text-gray-600 hover:text-secondary transition-all"
          >
            {language === 'en' ? 'TR' : 'EN'}
          </button>
          <button className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-medium hover:opacity-90 active:scale-95 transition-all">
            {t.nav.applyNow}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-secondary"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-4 px-8">
          <div className="flex flex-col gap-4">
            <Link
              href="/study-in-uk"
              className="text-gray-600 font-bold hover:text-secondary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t.nav.studyInUK}
            </Link>
            <Link
              href="/robotics-coding"
              className="text-gray-600 font-medium hover:text-secondary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t.nav.roboticsCoding}
            </Link>
            <Link
              href="/corporate-events"
              className="text-gray-600 font-medium hover:text-secondary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t.nav.corporateEvents}
            </Link>
            <button
              onClick={toggleLanguage}
              className="text-sm font-medium text-gray-600 hover:text-secondary transition-all text-left"
            >
              {language === 'en' ? 'TR' : 'EN'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
