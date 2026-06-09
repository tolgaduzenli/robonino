'use client';

import { useLanguage } from '@/lib/LanguageContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Cpu, Code, Zap, Target, Users, Award, ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function RoboticsCoding() {
  const { language } = useLanguage();

  const programs = [
    {
      title: language === 'en' ? 'Robotics Fundamentals' : 'Robotik Temelleri',
      age: language === 'en' ? 'Ages 7-12' : '7-12 Yaş',
      description: language === 'en'
        ? 'Introduction to mechanical engineering, motors, and sensors through hands-on building projects.'
        : 'Uygulamalı inşa projeleri yoluyla makine mühendisliği, motorlar ve sensörlere giriş.',
      icon: Cpu,
    },
    {
      title: language === 'en' ? 'Coding & Programming' : 'Kodlama ve Programlama',
      age: language === 'en' ? 'Ages 9-16' : '9-16 Yaş',
      description: language === 'en'
        ? 'Learn Python, Scratch, and block-based programming to bring robots to life.'
        : 'Robotları hayata geçirmek için Python, Scratch ve blok tabanlı programlama öğrenin.',
      icon: Code,
    },
    {
      title: language === 'en' ? 'Advanced AI & Automation' : 'İleri Düzey AI ve Otomasyon',
      age: language === 'en' ? 'Ages 12-18' : '12-18 Yaş',
      description: language === 'en'
        ? 'Explore machine learning, computer vision, and autonomous systems with real-world applications.'
        : 'Gerçek dünya uygulamaları ile makine öğrenimi, bilgisayar görüşü ve otonom sistemleri keşfedin.',
      icon: Zap,
    },
  ];

  const benefits = [
    {
      icon: Target,
      title: language === 'en' ? 'Problem Solving' : 'Problem Çözme',
      description: language === 'en'
        ? 'Develop critical thinking and analytical skills through engineering challenges.'
        : 'Mühendislik zorlukları yoluyla eleştirel düşünme ve analitik beceriler geliştirin.',
    },
    {
      icon: Users,
      title: language === 'en' ? 'Team Collaboration' : 'Takım İşbirliği',
      description: language === 'en'
        ? 'Work in teams to design, build, and present innovative solutions.'
        : 'Yenilikçi çözümler tasarlamak, inşa etmek ve sunmak için takımlar halinde çalışın.',
    },
    {
      icon: Award,
      title: language === 'en' ? 'Industry Recognition' : 'Sektör Tanınması',
      description: language === 'en'
        ? 'Certified programs recognized by leading tech companies and educational institutions.'
        : 'Lider teknoloji şirketleri ve eğitim kurumları tarafından tanınan sertifikalı programlar.',
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
                <Cpu size={16} />
                {language === 'en' ? 'STEM EXCELLENCE' : 'STEM MÜKEMMELLİĞİ'}
              </div>
              <h1 className="text-5xl font-extrabold text-primary tracking-tight">
                {language === 'en'
                  ? 'Robotics & Coding for the Next Generation'
                  : 'Gelecek Nesil İçin Robotik ve Kodlama'}
              </h1>
              <p className="text-xl text-gray-600 max-w-lg">
                {language === 'en'
                  ? 'Empowering young minds with cutting-edge STEM education through hands-on robotics, coding, and innovation programs.'
                  : 'Uygulamalı robotik, kodlama ve inovasyon programları yoluyla genç zihinleri son teknoloji STEM eğitimiyle güçlendiriyoruz.'}
              </p>
              <div className="flex gap-4 pt-4">
                <Link
                  href="/contact"
                  className="bg-primary text-white px-8 py-3 rounded-xl font-medium hover:shadow-lg transition-all"
                >
                  {language === 'en' ? 'Enroll Now' : 'Kayıt Olun'}
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
                alt="Robotics classroom"
                className="rounded-3xl shadow-2xl relative z-10 transform group-hover:scale-[1.02] transition-transform duration-500 w-full"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXMck-9_BBGoYBvuIewpa0v7rWVkjniTDO6775Bgsuyk3yIsGOA7PE9Kw_gKpAxwEIdJPfYIzdg-VykGqOWyMtHkiZEW_tCO-cBcp6IvonRyxZq2BDTXnszFfYEd-9vVwjU3vP8-PJTR0QJqsykhfFMu9jsqh2Ckg6TvVHbJ_1YksPLjhwanS86BDrEGRI0JybxEGInYx6Mv5PcaTgom2q8OZyfegZMDtcR6GYDOIWFXvJTOv2-ZGk0IQUC-dJyb2FLyhq2aDrOEOB"
              />
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary mb-4">
                {language === 'en' ? 'Our Programs' : 'Programlarımız'}
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {language === 'en'
                  ? 'Comprehensive STEM curriculum designed for different age groups and skill levels.'
                  : 'Farklı yaş grupları ve beceri seviyeleri için tasarlanmış kapsamlı STEM müfredatı.'}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {programs.map((program, index) => (
                <div
                  key={index}
                  className="group bg-gray-50 rounded-3xl p-8 hover:shadow-lg transition-all duration-500 border border-gray-200"
                >
                  <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6 text-secondary">
                    <program.icon size={32} />
                  </div>
                  <span className="text-xs font-bold text-secondary uppercase tracking-widest">
                    {program.age}
                  </span>
                  <h3 className="text-2xl font-bold text-primary mt-2 mb-4">
                    {program.title}
                  </h3>
                  <p className="text-gray-600">{program.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <img
                  alt="Students working together"
                  className="rounded-3xl shadow-xl w-full"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGvONyoJ1xppLAzamYAQm7hNDSisvKKbw-Ct_H46g0j8ijO1Q4EPzfEzycWA-Czq2b_WPgVMZYcuXrVNP9LTnzdhpJyR8nQRwCZx9wktqAT3-bWXplzpgry0-YM4zRIO6rZ0gtBZpr3TMgDGwAW9rrNkPP6NQ1Rs0U73rHTwmefsj0N3g9kwNOnIe7I-7wu4Fq3iuO2TnyBnACpUIYSC3P12YNzqnMpJeuMWrTP4KPelBS-B4SrMGmiXRTWKRU2o4Dop8XrUqUV2VX"
                />
              </div>
              <div className="order-1 md:order-2 space-y-8">
                <div>
                  <h2 className="text-4xl font-bold text-primary mb-4">
                    {language === 'en' ? 'Why Choose Us?' : 'Neden Bizi Seçmelisiniz?'}
                  </h2>
                  <p className="text-gray-600">
                    {language === 'en'
                      ? 'Our programs are designed to inspire creativity and build future-ready skills.'
                      : 'Programlarımız yaratıcılığı ilham etmek ve geleceğe hazır beceriler oluşturmak için tasarlanmıştır.'}
                  </p>
                </div>
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="bg-white p-4 rounded-2xl shadow-sm text-secondary shrink-0 h-fit">
                      <benefit.icon size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-primary">{benefit.title}</h4>
                      <p className="text-gray-600 mt-2">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Young Engineers Partnership */}
        <section className="py-20 bg-primary text-white overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-10 left-10 w-64 h-64 bg-secondary rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-tertiary rounded-full blur-3xl"></div>
          </div>
          <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-8">
                <Cpu className="h-12 w-auto" />
                <div className="h-8 w-px bg-white/30"></div>
                <span className="text-2xl font-bold">Young Engineers</span>
              </div>
              <h2 className="text-4xl font-bold">
                {language === 'en' ? 'Award-Winning STEM Curriculum' : 'Ödüllü STEM Müfredatı'}
              </h2>
              <p className="text-xl leading-relaxed opacity-90">
                {language === 'en'
                  ? 'In partnership with Young Engineers, we bring an internationally recognized STEM program to your community. Using LEGO® Education kits and our proprietary spiral learning method.'
                  : 'Young Engineers ile ortaklık olarak, topluluğunuza uluslararası olarak tanınan bir STEM programı getiriyoruz. LEGO® Eğitim kitlerini ve tescilli spiral öğrenme yöntemimizi kullanarak.'}
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-4 font-medium">
                  <CheckCircle2 className="text-secondary" size={20} />
                  {language === 'en' ? 'Hands-on Learning' : 'Uygulamalı Öğrenme'}
                </li>
                <li className="flex items-center gap-4 font-medium">
                  <CheckCircle2 className="text-secondary" size={20} />
                  {language === 'en' ? 'Certified Instructors' : 'Sertifikalı Eğitmenler'}
                </li>
                <li className="flex items-center gap-4 font-medium">
                  <CheckCircle2 className="text-secondary" size={20} />
                  {language === 'en' ? 'Progressive Curriculum' : 'İlerleyici Müfredat'}
                </li>
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-3 rounded-xl font-medium hover:bg-orange-600 transition-colors"
              >
                {language === 'en' ? 'Partner With Us' : 'Partner Olun'} <ArrowRight size={20} />
              </Link>
            </div>
            <div className="relative">
              <img
                alt="STEM workshop"
                className="rounded-3xl shadow-2xl w-full"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_qstik2xcUztJG44prYkt1na_EhjZebaUodKwFJhIQOGN6bmlD_D-XYl9ATSy3r1Szbi8fZ8gGM4muaLEvf_6Z7LGBDY7LyJ512YdgWuf9S7pfVdOSE1rGLw3yaStHn86tpt8_MuO3vzzaZGywtlsqGqReHpgTsBpQVInLmDRz96ZkSaROsv0LOMHflEba1CKk9TD67356EyEuVLlaCQurK9OWBu1B7GCdWQDZhDec9X9VYarptJaDZEQbsAgyDTj12CIab99HwLV"
              />
              <div className="absolute -bottom-6 -right-6 bg-gray-100 p-4 rounded-2xl shadow-xl flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white">
                  <Award size={24} />
                </div>
                <div>
                  <p className="font-medium text-primary">
                    {language === 'en' ? 'Certified Partner' : 'Sertifikalı Partner'}
                  </p>
                  <p className="text-sm text-gray-600">
                    {language === 'en' ? 'European Standards' : 'Avrupa Standartları'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-8 text-center bg-gray-100 rounded-[40px] py-16 relative overflow-hidden">
            <div className="relative z-10 space-y-6">
              <h2 className="text-4xl font-bold text-primary">
                {language === 'en' ? 'Ready to Start Your STEM Journey?' : 'STEM Yolculuğunuza Başlamaya Hazır mısınız?'}
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {language === 'en'
                  ? 'Join thousands of students who are already building the future through our innovative programs.'
                  : 'Yenilikçi programlarımız aracılığıyla geleceği inşa eden binlerce öğrenciye katılın.'}
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <Link
                  href="/contact"
                  className="bg-primary text-white px-8 py-3 rounded-full font-medium shadow-xl hover:-translate-y-1 transition-transform"
                >
                  {language === 'en' ? 'Get Started' : 'Başlayın'}
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
