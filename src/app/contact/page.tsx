'use client';

import { useLanguage } from '@/lib/LanguageContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Mail, MapPin, Phone, Clock } from 'lucide-react';

export default function Contact() {
  const { t, language } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary py-20">
          <div className="max-w-7xl mx-auto px-8">
            <h1 className="text-5xl font-bold text-white mb-4">
              {language === 'en' ? 'Contact Us' : 'İletişim'}
            </h1>
            <p className="text-xl text-white opacity-80 max-w-2xl">
              {language === 'en' 
                ? 'Get in touch with our team to learn more about our programs and how we can help you achieve your educational goals.'
                : 'Programlarımız hakkında daha fazla bilgi edinmek ve eğitim hedeflerinize ulaşmanıza nasıl yardımcı olabileceğimizi öğrenmek için ekibimizle iletişime geçin.'}
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  {language === 'en' ? 'Send us a message' : 'Bize mesaj gönderin'}
                </h2>
                <ContactForm />
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6">
                    {language === 'en' ? 'Contact Information' : 'İletişim Bilgileri'}
                  </h2>
                  <p className="text-gray-600 mb-8">
                    {language === 'en'
                      ? 'We\'d love to hear from you. Reach out to us through any of the following channels.'
                      : 'Sizinle iletişim kurmaktan mutluluk duyarız. Aşağıdaki kanallardan herhangi biri üzerinden bizimle iletişime geçin.'}
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-secondary/10 p-3 rounded-lg text-secondary shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{language === 'en' ? 'Email' : 'E-posta'}</h3>
                      <a href="mailto:info@robonino.com" className="text-gray-600 hover:text-secondary transition-colors">
                        info@robonino.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-secondary/10 p-3 rounded-lg text-secondary shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{language === 'en' ? 'Phone' : 'Telefon'}</h3>
                      <p className="text-gray-600">
                        {language === 'en' ? '+44 (0) 20 1234 5678' : '+44 (0) 20 1234 5678'}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-secondary/10 p-3 rounded-lg text-secondary shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{language === 'en' ? 'Office' : 'Ofis'}</h3>
                      <p className="text-gray-600">
                        {language === 'en'
                          ? 'London, United Kingdom'
                          : 'Londra, Birleşik Krallık'}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-secondary/10 p-3 rounded-lg text-secondary shrink-0">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{language === 'en' ? 'Working Hours' : 'Çalışma Saatleri'}</h3>
                      <p className="text-gray-600">
                        {language === 'en'
                          ? 'Monday - Friday: 9:00 AM - 6:00 PM (GMT)'
                          : 'Pazartesi - Cuma: 09:00 - 18:00 (GMT)'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="bg-gray-200 rounded-2xl h-64 flex items-center justify-center">
                  <p className="text-gray-500">
                    {language === 'en' ? 'Map will be displayed here' : 'Harita burada görüntülenecek'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
