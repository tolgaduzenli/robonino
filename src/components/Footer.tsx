'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { MessageCircle, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-50 py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-8 max-w-7xl mx-auto">
        {/* Company Info */}
        <div className="space-y-4">
          <span className="text-2xl font-extrabold text-primary">Robonino</span>
          <p className="text-gray-600 text-sm">{t.footer.description}</p>
        </div>

        {/* Programs */}
        <div className="space-y-4">
          <h5 className="font-bold text-primary">{t.footer.programs.title}</h5>
          <ul className="space-y-2">
            <li>
              <Link href="/study-in-uk" className="text-gray-600 text-sm hover:text-secondary underline transition-all">
                {t.footer.programs.ukSchools}
              </Link>
            </li>
            <li>
              <Link href="/robotics-coding" className="text-gray-600 text-sm hover:text-secondary underline transition-all">
                {t.footer.programs.stemPrograms}
              </Link>
            </li>
            <li>
              <Link href="/corporate-events" className="text-gray-600 text-sm hover:text-secondary underline transition-all">
                {t.footer.programs.corporateHub}
              </Link>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div className="space-y-4">
          <h5 className="font-bold text-primary">{t.footer.company.title}</h5>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="text-gray-600 text-sm hover:text-secondary underline transition-all">
                {t.footer.company.aboutUs}
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-600 text-sm hover:text-secondary underline transition-all">
                {t.footer.company.contact}
              </Link>
            </li>
            <li className="flex items-center gap-2 text-gray-600 text-sm">
              <Mail size={14} />
              <a href="mailto:info@robonino.com" className="hover:text-secondary transition-all">
                info@robonino.com
              </a>
            </li>
          </ul>
        </div>

        {/* Get Help */}
        <div className="space-y-4">
          <h5 className="font-bold text-primary">{t.footer.getHelp.title}</h5>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-lg text-sm font-bold hover:bg-secondary hover:text-white transition-all"
          >
            <MessageCircle size={16} />
            {t.footer.getHelp.whatsapp}
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-8 mt-16 pt-8 border-t border-gray-200 text-center">
        <p className="text-sm text-gray-600 opacity-60">{t.footer.copyright}</p>
      </div>
    </footer>
  );
}
