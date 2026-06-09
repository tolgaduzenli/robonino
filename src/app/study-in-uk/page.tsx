'use client';

import { useLanguage } from '@/lib/LanguageContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { School, History, CheckCircle2, Building2, ArrowRight, ShieldCheck, GraduationCap } from 'lucide-react';
import Link from 'next/link';

export default function StudyInUK() {
  const { language } = useLanguage();

  const schools = [
    {
      name: language === 'en' ? 'London Academy of Excellence' : 'Londra Mükemmellik Akademisi',
      location: 'London, UK',
      description: language === 'en'
        ? 'Renowned for its excellence in science and technology, offering state-of-the-art laboratory facilities and a legacy of academic distinction in London.'
        : 'Bilim ve teknoloji alanındaki mükemmelliği ile tanınan, Londra\'da son teknoloji laboratuvar tesisleri ve akademik üstünlük mirası sunan kurum.',
      icon: School,
    },
    {
      name: language === 'en' ? 'Oxford International College' : 'Oxford Uluslararası Koleji',
      location: 'Oxford, UK',
      description: language === 'en'
        ? 'A prestigious institution with over 200 years of history, focusing on holistic development and providing a gateway to the world\'s top universities.'
        : '200 yılı aşkın tarihi ile prestijli bir kurum, bütüncül gelişime odaklanarak dünyanın en iyi üniversitelerine kapı açıyor.',
      icon: History,
    },
    {
      name: language === 'en' ? 'Cambridge STEM Academy' : 'Cambridge STEM Akademisi',
      location: 'Cambridge, UK',
      description: language === 'en'
        ? 'Specializing in STEM education with cutting-edge robotics programs and partnerships with leading tech companies for real-world experience.'
        : 'Öncü robotik programları ve lider teknoloji şirketleri ile gerçek dünya deneyimi için ortaklıklar ile uzmanlaşmış STEM eğitimi.',
      icon: GraduationCap,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[512px] flex items-center overflow-hidden bg-gray-50">
          <div className="absolute inset-0 z-0">
            <img
              className="w-full h-full object-cover opacity-10"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDy3d0ILJaM0Ef2-DY9JyxSI_ouacTsiG_IU2DlQ4XTdi4iXYrM_MRvwTWwLE4B2hWo0flRKi9bp80DkTcdS2eGs5HsupR8DY_KOwUFOvu8YBUWzWujCOw_A5m4vFPWPKGcRLKL2s4PSRE1iG7bYXZ5HLlV3XLfimv4rxpcRgMsr8vFOqQxVhgKNfxHPryBrByKCLoboS6fxR6q_tLj9SlxEKhEISGWoymzUSmibcBJWdhAdeeThs0QmjBpifvafVVyuJPBGKekUmUd"
              alt="British boarding school"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-gray-50"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-8 py-20">
            <div className="max-w-2xl">
              <span className="text-secondary text-sm font-bold uppercase tracking-widest mb-4 block">
                {language === 'en' ? 'Academic Excellence' : 'Akademik Mükemmellik'}
              </span>
              <h1 className="text-5xl md:text-6xl font-extrabold text-primary mb-4 leading-tight">
                {language === 'en' ? 'Our Partner UK Schools' : 'İngiltere Partner Okullarımız'}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {language === 'en'
                  ? 'We collaborate with the most prestigious educational institutions in the United Kingdom to provide world-class opportunities for our students. From historic boarding schools to innovative modern academies.'
                  : 'Öğrencilerimize dünya standartlarında fırsatlar sunmak için Birleşik Krallık\'ın en prestijli eğitim kurumları ile işbirliği yapıyoruz. Tarihi yatılı okullardan yenilikçi modern akademilere kadar.'}
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <ShieldCheck className="text-secondary" size={20} fill="currentColor" />
                  <span className="text-sm font-medium">
                    {language === 'en' ? 'British Council Certified' : 'British Council Sertifikalı'}
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <Building2 className="text-secondary" size={20} fill="currentColor" />
                  <span className="text-sm font-medium">
                    {language === 'en' ? '100+ Partnerships' : '100+ Ortaklık'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* School Listings Section */}
        <section className="py-20 bg-white px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div>
                <h2 className="text-4xl font-bold text-primary mb-2">
                  {language === 'en' ? 'Accredited Institutions' : 'Akredite Kurumlar'}
                </h2>
                <p className="text-gray-600 max-w-xl">
                  {language === 'en'
                    ? 'Browse our curated list of leading UK educational partners specializing in STEM, Arts, and Humanities.'
                    : 'STEM, Sanat ve Beşeri Bilimler alanında uzmanlaşmış lider İngiltere eğitim partnerlerimizin seçilmiş listesine göz atın.'}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">
                  {language === 'en' ? 'Filter by type:' : 'Türe göre filtrele:'}
                </span>
                <select className="bg-gray-100 border-none rounded-lg text-sm px-4 py-2 focus:ring-2 focus:ring-primary">
                  <option>{language === 'en' ? 'All Schools' : 'Tüm Okullar'}</option>
                  <option>{language === 'en' ? 'Boarding Schools' : 'Yatılı Okullar'}</option>
                  <option>{language === 'en' ? 'STEM Focus' : 'STEM Odaklı'}</option>
                  <option>{language === 'en' ? 'Summer Schools' : 'Yaz Okulları'}</option>
                </select>
              </div>
            </div>

            {/* School Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {schools.map((school, index) => (
                <div
                  key={index}
                  className="group relative bg-gray-50 rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-500 overflow-hidden border border-gray-200"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="relative z-10 h-full flex flex-col">
                    <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6 text-white">
                      <school.icon size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-2">
                      <a className="hover:text-secondary transition-colors duration-300" href="#">
                        {school.name}
                      </a>
                    </h3>
                    <p className="text-base text-gray-600 mb-6 flex-grow">
                      {school.description}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <span className="text-xs text-secondary uppercase tracking-wider font-bold">
                        {school.location}
                      </span>
                      <a className="flex items-center gap-1 text-primary font-bold hover:gap-2 transition-all text-sm" href="#">
                        {language === 'en' ? 'View Details' : 'Detayları Gör'} <ArrowRight size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}

              {/* CTA Card */}
              <div className="relative bg-primary text-white rounded-3xl p-8 flex flex-col justify-center items-start overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                  <div
                    className="absolute top-0 left-0 w-full h-full"
                    style={{
                      backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                      backgroundSize: '24px 24px',
                    }}
                  ></div>
                </div>
                <h3 className="text-xl font-bold mb-4">
                  {language === 'en' ? "Can't find the right school?" : 'Doğru okulu bulamadınız mı?'}
                </h3>
                <p className="text-white/80 mb-6">
                  {language === 'en'
                    ? 'Our expert consultants can help you find a bespoke match based on your academic goals and career aspirations.'
                    : 'Uzman danışmanlarımız, akademik hedeflerinize ve kariyer aspirasyonlarınıza dayalı olarak size özel bir eşleşme bulmanıza yardımcı olabilir.'}
                </p>
                <Link
                  href="/contact"
                  className="bg-secondary text-white px-6 py-3 rounded-full text-sm font-medium hover:scale-105 active:scale-95 transition-all"
                >
                  {language === 'en' ? 'Consult an Expert' : 'Bir Uzmanla Danışın'}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Values */}
        <section className="py-20 bg-gray-100 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 bg-white p-8 rounded-3xl shadow-sm flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <img
                    className="w-full h-48 object-cover rounded-xl"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBU-Ewk3AaN2CQ8xQvX53HVhIXvraZetovZ0pj69AkJgk687383CmSo7bIVvsXPWkIolzOWPxT3No990Z3JYS1pKNX_WwiS4e04puFS2KuNZ0gGUp0Om2nkyv31agCrct2xZTppxlA2l1Q1H8c2b27a7kiRt7wxFJIHpn8B8JO6QUdUPDvkq1i_uACMry248C7NNQSp4RaVOBPm55jhnp5VXAt_6-lTHm1cFCxlTc_GJ8t5gvcB7mNxRAyG0TyMErGkErdJw_cQkPsD"
                    alt="Students collaborating"
                  />
                </div>
                <div className="md:w-2/3">
                  <h4 className="text-xl font-bold text-primary mb-2">
                    {language === 'en' ? 'Unparalleled Placement Success' : 'Eşsiz Yerleştirme Başarısı'}
                  </h4>
                  <p className="text-base text-gray-600">
                    {language === 'en'
                      ? 'Our placement success rate is over 98% for Turkish students seeking UK entry. We handle the entire application ecosystem from start to finish.'
                      : 'İngiltere girişi arayan Türk öğrenciler için yerleştirme başarı oranımız %98\'in üzerindedir. Başlangıçtan bitiş kadar tüm başvuru ekosistemini yönetiyoruz.'}
                  </p>
                </div>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-sm flex flex-col justify-center text-center">
                <span className="text-5xl font-extrabold text-secondary mb-2">98%</span>
                <p className="text-sm font-bold text-primary uppercase tracking-widest">
                  {language === 'en' ? 'Entry Rate' : 'Kabul Oranı'}
                </p>
                <p className="text-base text-gray-600 mt-2">
                  {language === 'en'
                    ? 'Into chosen first-preference institutions across the UK.'
                    : 'İngiltere genelinde seçilen birinci tercih kurumlarına.'}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
