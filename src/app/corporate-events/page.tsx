'use client';

import { useLanguage } from '@/lib/LanguageContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Users, Target, Award, Lightbulb, ArrowRight, CheckCircle2, Calendar, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function CorporateEvents() {
  const { language } = useLanguage();

  const services = [
    {
      title: language === 'en' ? 'Team Building Workshops' : 'Takım Oluşturma Atölyeleri',
      description: language === 'en'
        ? 'Customized robotics and STEM challenges designed to foster collaboration, communication, and problem-solving skills.'
        : 'İşbirliği, iletişim ve problem çözme becerilerini geliştirmek için tasarlanmış özelleştirilmiş robotik ve STEM zorlukları.',
      icon: Users,
    },
    {
      title: language === 'en' ? 'Leadership Retreats' : 'Liderlik Kampı',
      description: language === 'en'
        ? 'Strategic planning sessions combined with innovative technology experiences to inspire visionary leadership.'
        : 'Vizyoner liderliği ilham etmek için stratejik planlama oturumları ve yenilikçi teknoloji deneyimleri birleştirilmiş.',
      icon: Target,
    },
    {
      title: language === 'en' ? 'Innovation Days' : 'İnovasyon Günleri',
      description: language === 'en'
        ? 'Interactive technology showcases and hands-on demonstrations of cutting-edge solutions for your industry.'
        : 'Sektörünüz için son teknoloji çözümlerin etkileşimli teknoloji vitrinleri ve uygulamalı gösterileri.',
      icon: Lightbulb,
    },
  ];

  const events = [
    {
      title: language === 'en' ? 'Annual Tech Summit' : 'Yıllık Teknoloji Zirvesi',
      date: language === 'en' ? 'March 15-17, 2024' : '15-17 Mart 2024',
      location: language === 'en' ? 'London, UK' : 'Londra, İngiltere',
      description: language === 'en'
        ? 'Join industry leaders for three days of innovation, networking, and hands-on technology experiences.'
        : 'İnovasyon, ağ kurma ve uygulamalı teknoloji deneyimleri için üç gün boyunca sektör liderlerine katılın.',
    },
    {
      title: language === 'en' ? 'Corporate STEM Challenge' : 'Kurumsal STEM Yarışması',
      date: language === 'en' ? 'June 8-10, 2024' : '8-10 Haziran 2024',
      location: language === 'en' ? 'Cambridge, UK' : 'Cambridge, İngiltere',
      description: language === 'en'
        ? 'Compete with other companies in robotics and coding challenges to showcase your team\'s innovation skills.'
        : 'Takımınızın inovasyon becerilerini sergilemek için diğer şirketlerle robotik ve kodlama yarışmalarında yarışın.',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[600px] flex items-center pt-20 overflow-hidden bg-gray-50">
          <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium">
                <Users size={16} />
                {language === 'en' ? 'CORPORATE EXCELLENCE' : 'KURUMSAL MÜKEMMELLİK'}
              </div>
              <h1 className="text-5xl font-extrabold text-primary tracking-tight">
                {language === 'en'
                  ? 'Corporate Events & Team Building'
                  : 'Kurumsal Etkinlikler ve Takım Oluşturma'}
              </h1>
              <p className="text-xl text-gray-600 max-w-lg">
                {language === 'en'
                  ? 'Transform your corporate events with innovative technology experiences, robotics challenges, and STEM-powered team building activities.'
                  : 'Yenilikçi teknoloji deneyimleri, robotik zorlukları ve STEM destekli takım oluşturma aktiviteleri ile kurumsal etkinliklerinizi dönüştürün.'}
              </p>
              <div className="flex gap-4 pt-4">
                <Link
                  href="/contact"
                  className="bg-primary text-white px-8 py-3 rounded-xl font-medium hover:shadow-lg transition-all"
                >
                  {language === 'en' ? 'Book an Event' : 'Etkinlik Ayırtın'}
                </Link>
                <Link
                  href="/about"
                  className="border-2 border-primary text-primary px-8 py-3 rounded-xl font-medium hover:bg-primary hover:text-white transition-all"
                >
                  {language === 'en' ? 'Learn More' : 'Daha Fazla Bilgi'}
                </Link>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-secondary/10 blur-3xl rounded-full"></div>
              <img
                alt="Corporate event"
                className="rounded-3xl shadow-2xl relative z-10 transform group-hover:scale-[1.02] transition-transform duration-500 w-full"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCArHIbp2Y6iu0pYmzlYUJRPy5iox--wwDTONWipVxdtjOVkG_pe81lpS17XgXMjC24P9e4S3CXrciTfWh-aRSiNgZCdVF55HywEjCUfP9QA89LlCYfwsRKl7Cyl0Q8NgeoVCVmQGEDATRB4MsJ_bjXIUFab5NGvyXLoAzFn2mayDsSmSMuJtOH9dDm7jP73vQ2TRizd6ma6bmrBuSDjMPvGVpNrBdVAgCCHk-BALVeCXkTUfwX9MSQkmFgJrrSrMZFV05231dxS_zO"
              />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary mb-4">
                {language === 'en' ? 'Our Services' : 'Hizmetlerimiz'}
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {language === 'en'
                  ? 'Comprehensive corporate event solutions designed to inspire, engage, and transform your team.'
                  : 'Takımınızı ilhamlandırmak, dahil etmek ve dönüştürmek için tasarlanmış kapsamlı kurumsal etkinlik çözümleri.'}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group bg-gray-50 rounded-3xl p-8 hover:shadow-lg transition-all duration-500 border border-gray-200"
                >
                  <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6 text-secondary">
                    <service.icon size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary mb-4">
                {language === 'en' ? 'Upcoming Events' : 'Yaklaşan Etkinlikler'}
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {language === 'en'
                  ? 'Join our upcoming corporate events and experience the future of team building.'
                  : 'Yaklaşan kurumsal etkinliklerimize katılın ve takım oluşturmanın geleceğini deneyimleyin.'}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {events.map((event, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-500 border border-gray-200"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-secondary/10 p-3 rounded-xl text-secondary shrink-0">
                      <Calendar size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary">{event.title}</h3>
                      <div className="flex items-center gap-2 text-gray-600 mt-1">
                        <MapPin size={16} />
                        <span className="text-sm">{event.location}</span>
                      </div>
                      <p className="text-sm text-secondary font-medium mt-1">{event.date}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">{event.description}</p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
                  >
                    {language === 'en' ? 'Register Now' : 'Şimdi Kayıt Olun'} <ArrowRight size={16} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl font-bold text-primary mb-4">
                    {language === 'en' ? 'Why Choose Robonino?' : 'Neden Robonino\'yu Seçmelisiniz?'}
                  </h2>
                  <p className="text-gray-600">
                    {language === 'en'
                      ? 'We bring a unique blend of technology, education, and corporate expertise to create unforgettable experiences.'
                      : 'Unutulmaz deneyimler yaratmak için teknoloji, eğitim ve kurumsal uzmanlığın benzersiz bir karışımını getiriyoruz.'}
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="bg-gray-100 p-4 rounded-2xl shadow-sm text-secondary shrink-0 h-fit">
                      <Award size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-primary">
                        {language === 'en' ? 'Industry Expertise' : 'Sektör Uzmanlığı'}
                      </h4>
                      <p className="text-gray-600 mt-2">
                        {language === 'en'
                          ? 'Years of experience in corporate training and event management.'
                          : 'Kurumsal eğitim ve etkinlik yönetiminde yılların deneyimi.'}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-gray-100 p-4 rounded-2xl shadow-sm text-secondary shrink-0 h-fit">
                      <Lightbulb size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-primary">
                        {language === 'en' ? 'Innovative Approach' : 'Yenilikçi Yaklaşım'}
                      </h4>
                      <p className="text-gray-600 mt-2">
                        {language === 'en'
                          ? 'Cutting-edge technology and STEM-powered activities.'
                          : 'Son teknoloji ve STEM destekli aktiviteler.'}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-gray-100 p-4 rounded-2xl shadow-sm text-secondary shrink-0 h-fit">
                      <Users size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-primary">
                        {language === 'en' ? 'Customized Solutions' : 'Özelleştirilmiş Çözümler'}
                      </h4>
                      <p className="text-gray-600 mt-2">
                        {language === 'en'
                          ? 'Tailored programs to meet your specific corporate goals.'
                          : 'Belirli kurumsal hedeflerinizi karşılamak için özelleştirilmiş programlar.'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  alt="Corporate team building"
                  className="rounded-3xl shadow-xl w-full"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5vzy9JfR7EfVlr21YbVpgeJK22QyB_s_SDf4Jl2iMmzETyQU71wbuvz_regntt39FJ24n3vKdAfdq7VKGS0k7KEVjOruVjVaYKltN0lg23A-QPHBXyMy5-kqXuHGORML-4OC4E8Pg8q5vDAnxTdduhjMxc-9Yy6ZI1uxnCVZU6EbnR0LC4UYSPIO_j9kH6YCgt0LexURyhPSSqSt5QVxb-q0fq1F8GKsvIa9xRwZs_HTyFGunmFSoG5bk9j2HL0qzAiIDDlE11b5u"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary mb-4">
                {language === 'en' ? 'What We Offer' : 'Sunduğumuz'}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <CheckCircle2 className="text-secondary mb-4" size={32} />
                <h4 className="font-bold text-primary mb-2">
                  {language === 'en' ? 'Custom Programs' : 'Özel Programlar'}
                </h4>
                <p className="text-sm text-gray-600">
                  {language === 'en'
                    ? 'Tailored to your company culture and objectives.'
                    : 'Şirket kültürünüze ve hedeflerinize göre uyarlanmış.'}
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <CheckCircle2 className="text-secondary mb-4" size={32} />
                <h4 className="font-bold text-primary mb-2">
                  {language === 'en' ? 'Expert Facilitators' : 'Uzman Eğitmenler'}
                </h4>
                <p className="text-sm text-gray-600">
                  {language === 'en'
                    ? 'Experienced professionals in STEM and corporate training.'
                    : 'STEM ve kurumsal eğitimde deneyimli profesyoneller.'}
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <CheckCircle2 className="text-secondary mb-4" size={32} />
                <h4 className="font-bold text-primary mb-2">
                  {language === 'en' ? 'State-of-the-Art Equipment' : 'Son Teknoloji Ekipmanlar'}
                </h4>
                <p className="text-sm text-gray-600">
                  {language === 'en'
                    ? 'Latest robotics kits and technology tools.'
                    : 'En son robotik kitler ve teknoloji araçları.'}
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <CheckCircle2 className="text-secondary mb-4" size={32} />
                <h4 className="font-bold text-primary mb-2">
                  {language === 'en' ? 'Measurable Results' : 'Ölçülebilir Sonuçlar'}
                </h4>
                <p className="text-sm text-gray-600">
                  {language === 'en'
                    ? 'Post-event analytics and impact assessment.'
                    : 'Etkinlik sonrası analitik ve etki değerlendirmesi.'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-8 text-center bg-gray-100 rounded-[40px] py-16 relative overflow-hidden">
            <div className="relative z-10 space-y-6">
              <h2 className="text-4xl font-bold text-primary">
                {language === 'en' ? 'Ready to Transform Your Team?' : 'Takımınızı Dönüştürmeye Hazır mısınız?'}
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {language === 'en'
                  ? 'Let us create an unforgettable corporate experience for your organization.'
                  : 'Organizasyonunuz için unutulmaz bir kurumsal deneyim oluşturmamıza izin verin.'}
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <Link
                  href="/contact"
                  className="bg-primary text-white px-8 py-3 rounded-full font-medium shadow-xl hover:-translate-y-1 transition-transform"
                >
                  {language === 'en' ? 'Contact Us' : 'İletişime Geçin'}
                </Link>
                <Link
                  href="/about"
                  className="bg-white text-primary border border-gray-300 px-8 py-3 rounded-full font-medium hover:bg-primary hover:text-white transition-all"
                >
                  {language === 'en' ? 'Learn More' : 'Daha Fazla Bilgi'}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
