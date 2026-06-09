'use client';

import { useLanguage } from '@/lib/LanguageContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Home, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  const { language } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <main className="flex-1 flex items-center justify-center bg-gray-50">
        <div className="text-center px-8">
          <h1 className="text-9xl font-extrabold text-primary mb-4">404</h1>
          <h2 className="text-3xl font-bold text-primary mb-4">
            {language === 'en' ? 'Page Not Found' : 'Sayfa Bulunamadı'}
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
            {language === 'en'
              ? 'Sorry, we couldn\'t find the page you\'re looking for. It might have been moved or deleted.'
              : 'Üzgünüz, aradığınız sayfayı bulamadık. Sayfa taşınmış veya silinmiş olabilir.'}
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-medium hover:shadow-lg transition-all"
          >
            <Home size={20} />
            {language === 'en' ? 'Back to Home' : 'Ana Sayfaya Dön'} <ArrowRight size={20} />
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
