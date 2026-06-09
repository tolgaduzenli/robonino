'use client';

import { useLanguage } from '@/lib/LanguageContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Globe, Cpu, ShieldCheck, Languages, Award, ArrowRight, Lightbulb, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function About() {
  const { language } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[600px] flex items-center pt-20 overflow-hidden bg-gray-50">
          <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium">
                <Globe size={16} />
                {language === 'en' ? 'ABOUT OUR VISION' : 'VİZYONUMUZ HAKKINDA'}
              </div>
              <h1 className="text-5xl font-extrabold text-primary tracking-tight">
                {language === 'en' 
                  ? 'Bridging Education and Innovation for the Next Generation.'
                  : 'Gelecek Nesil İçin Eğitim ve İnovasyonu Birleştiriyoruz.'}
              </h1>
              <p className="text-xl text-gray-600 max-w-lg">
                {language === 'en'
                  ? 'We are a global bridge connecting ambitious students with world-class UK education and empowering young minds through advanced STEM methodologies.'
                  : 'Hırslı öğrencileri dünya standartlarında İngiltere eğitimiyle birleştiren ve gelişmiş STEM metodolojileriyle genç zihinleri güçlendiren küresel bir köprüyüz.'}
              </p>
              <div className="flex gap-4 pt-4">
                <Link
                  href="/study-in-uk"
                  className="bg-primary text-white px-8 py-3 rounded-xl font-medium hover:shadow-lg transition-all"
                >
                  {language === 'en' ? 'Our Programs' : 'Programlarımız'}
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-primary text-primary px-8 py-3 rounded-xl font-medium hover:bg-primary hover:text-white transition-all"
                >
                  {language === 'en' ? 'Contact Us' : 'İletişime Geçin'}
                </Link>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-secondary/10 blur-3xl rounded-full"></div>
              <img
                alt="Students studying"
                className="rounded-3xl shadow-2xl relative z-10 transform group-hover:scale-[1.02] transition-transform duration-500 w-full"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGvONyoJ1xppLAzamYAQm7hNDSisvKKbw-Ct_H46g0j8ijO1Q4EPzfEzycWA-Czq2b_WPgVMZYcuXrVNP9LTnzdhpJyR8nQRwCZx9wktqAT3-bWXplzpgry0-YM4zRIO6rZ0gtBZpr3TMgDGwAW9rrNkPP6NQ1Rs0U73rHTwmefsj0N3g9kwNOnIe7I-7wu4Fq3iuO2TnyBnACpUIYSC3P12YNzqnMpJeuMWrTP4KPelBS-B4SrMGmiXRTWKRU2o4Dop8XrUqUV2VX"
              />
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 bg-gray-50 p-8 rounded-3xl flex flex-col justify-between group hover:bg-primary hover:text-white transition-all duration-500">
                <div>
                  <Globe className="text-secondary text-4xl mb-4" />
                  <h2 className="text-3xl font-bold mb-4">
                    {language === 'en' ? 'International Vision' : 'Uluslararası Vizyon'}
                  </h2>
                  <p className="text-base opacity-80 max-w-xl">
                    {language === 'en'
                      ? 'To become the premier gateway for Turkish students to access elite British educational institutions, fostering a generation of global leaders equipped with cross-cultural fluency and academic excellence.'
                      : 'Türk öğrencilerin seçkin Britanya eğitim kurumlarına erişmesi için öncelikli bir kapı olmak, kültürlerarası akıcılık ve akademik mükemmellikle donatılmış küresel liderler bir nesil yetiştirmek.'}
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-2 font-medium">
                  {language === 'en' ? 'Discover UK Consultancy' : 'İngiltere Danışmanlığını Keşfedin'} <ArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
                </div>
              </div>
              <div className="bg-secondary p-8 rounded-3xl text-white flex flex-col justify-between">
                <div>
                  <Cpu className="text-4xl mb-4" />
                  <h2 className="text-2xl font-bold mb-4">
                    {language === 'en' ? 'STEM Leadership' : 'STEM Liderliği'}
                  </h2>
                  <p className="text-base opacity-90">
                    {language === 'en'
                      ? 'Leading the Young Engineers franchise to revolutionize STEM education through hands-on learning and technological intuition.'
                      : 'Young Engineers franchise liderliğini yaparak uygulamalı öğrenme ve teknolojik sezgi yoluyla STEM eğitimini devrimleştirmek.'}
                  </p>
                </div>
              </div>
              <div className="md:col-span-3 grid md:grid-cols-4 gap-6 mt-6">
                <div className="bg-gray-100 p-6 rounded-2xl text-center">
                  <h3 className="text-3xl font-bold text-primary">500+</h3>
                  <p className="text-xs uppercase tracking-widest text-gray-600 mt-2">
                    {language === 'en' ? 'Students Placed' : 'Yerleştirilen Öğrenci'}
                  </p>
                </div>
                <div className="bg-gray-100 p-6 rounded-2xl text-center">
                  <h3 className="text-3xl font-bold text-primary">12</h3>
                  <p className="text-xs uppercase tracking-widest text-gray-600 mt-2">
                    {language === 'en' ? 'UK Partners' : 'İngiltere Partneri'}
                  </p>
                </div>
                <div className="bg-gray-100 p-6 rounded-2xl text-center">
                  <h3 className="text-3xl font-bold text-primary">100%</h3>
                  <p className="text-xs uppercase tracking-widest text-gray-600 mt-2">
                    {language === 'en' ? 'Success Rate' : 'Başarı Oranı'}
                  </p>
                </div>
                <div className="bg-gray-100 p-6 rounded-2xl text-center">
                  <h3 className="text-3xl font-bold text-primary">20+</h3>
                  <p className="text-xs uppercase tracking-widest text-gray-600 mt-2">
                    {language === 'en' ? 'STEM Programs' : 'STEM Programı'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                alt="Educators planning"
                className="rounded-3xl shadow-xl w-full"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZ6uoy0gHBF-aQ7Cc3rfzLjlwGVm86hj8syODlZr_Mhhft7cLT2-dM2-Q7-Lu5jZgasi2yp3Izmkq6wWFa47fGCmJBRiOkbHQyv8mv69Ae71JmIGI4DFvazm_oGPzciWmcAtNWNVaQwzhfxOyusBXGLvNKd531y3AV96kgat9QZertYk2vT5pTLBm3prbYbq06EqB4MIqDSpyeES_trAjhHV6DRuhOCFf-og8XgByT9_6_28VOQ03eUcBD_KGZTBpK7NuHgmpH4jx8"
              />
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <h2 className="text-4xl font-bold text-primary">
                {language === 'en' ? 'Our Story' : 'Hikayemiz'}
              </h2>
              <p className="text-base text-gray-600 leading-relaxed">
                {language === 'en'
                  ? 'Robonino was born from a simple yet powerful observation: the educational methodologies used in the world\'s most successful economies could be localized to empower students everywhere.'
                  : 'Robonino, basit ama güçlü bir gözlemden doğdu: dünyanın en başarılı ekonomilerinde kullanılan eğitim metodolojileri, her yerdeki öğrencileri güçlendirmek için yerelleştirilebilir.'}
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                {language === 'en'
                  ? 'We started as a small bridge between Turkey and the UK\'s prestigious boarding schools. Today, we\'ve evolved into an integrated educational hub, blending the academic rigor of British consultancy with the innovative spirit of global STEM initiatives.'
                  : 'Türkiye ve İngiltere\'nin prestijli yatılı okulları arasında küçük bir köprü olarak başladık. Bugün, Britanya danışmanlığının akademik titizliğini küresel STEM girişimlerinin yenilikçi ruhuyla harmanlayan entegre bir eğitim merkezine dönüştük.'}
              </p>
              <div className="pt-4 border-l-4 border-secondary pl-4 italic text-gray-600 text-lg">
                "{language === 'en' ? 'Excellence is not an act, but a habit that we instill in every student we guide.' : 'Mükemmellik bir eylem değil, rehberlik ettiğimiz her öğrenciye aşıladığımız bir alışkanlıktır.'}"
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-8 text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">
              {language === 'en' ? 'Our Core Values' : 'Temel Değerlerimiz'}
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
          </div>
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-8 bg-white rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <Lightbulb className="text-secondary text-4xl mb-4" />
              <h3 className="text-xl font-bold mb-2">
                {language === 'en' ? 'Innovation' : 'İnovasyon'}
              </h3>
              <p className="text-base text-gray-600">
                {language === 'en' ? 'Pushing boundaries in STEM and educational technology.' : 'STEM ve eğitim teknolojisinde sınırları zorlamak.'}
              </p>
            </div>
            <div className="p-8 bg-white rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <ShieldCheck className="text-secondary text-4xl mb-4" />
              <h3 className="text-xl font-bold mb-2">
                {language === 'en' ? 'Trust' : 'Güven'}
              </h3>
              <p className="text-base text-gray-600">
                {language === 'en' ? 'Building lasting relationships with parents and schools.' : 'Veliler ve okullarla kalıcı ilişkiler kurmak.'}
              </p>
            </div>
            <div className="p-8 bg-white rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <Languages className="text-secondary text-4xl mb-4" />
              <h3 className="text-xl font-bold mb-2">
                {language === 'en' ? 'Global' : 'Küresel'}
              </h3>
              <p className="text-base text-gray-600">
                {language === 'en' ? 'Broadening horizons through international education.' : 'Uluslararası eğitim yoluyla ufukları genişletmek.'}
              </p>
            </div>
            <div className="p-8 bg-white rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <Award className="text-secondary text-4xl mb-4" />
              <h3 className="text-xl font-bold mb-2">
                {language === 'en' ? 'Excellence' : 'Mükemmellik'}
              </h3>
              <p className="text-base text-gray-600">
                {language === 'en' ? 'Maintaining the highest standards in every service.' : 'Her hizmette en yüksek standartları korumak.'}
              </p>
            </div>
          </div>
        </section>

        {/* Franchise Section */}
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
                {language === 'en' ? 'Franchise & STEM Excellence' : 'Franchise ve STEM Mükemmelliği'}
              </h2>
              <p className="text-xl leading-relaxed opacity-90">
                {language === 'en'
                  ? 'In partnership with Young Engineers, we bring an award-winning STEM curriculum to the region. Utilizing LEGO® Education kits and our proprietary spiral learning method, we make complex scientific principles intuitive and fun.'
                  : 'Young Engineers ile ortaklık olarak, bölgeye ödüllü bir STEM müfredatını getiriyoruz. LEGO® Eğitim kitlerini ve tescilli spiral öğrenme yöntemimizi kullanarak, karmaşık bilimsel ilkeleri sezgisel ve eğlenceli hale getiriyoruz.'}
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-4 font-medium">
                  <CheckCircle2 className="text-secondary" size={20} />
                  {language === 'en' ? 'Hands-on Mechanical Engineering' : 'Uygulamalı Makine Mühendisliği'}
                </li>
                <li className="flex items-center gap-4 font-medium">
                  <CheckCircle2 className="text-secondary" size={20} />
                  {language === 'en' ? 'Software & Coding Integration' : 'Yazılım ve Kodlama Entegrasyonu'}
                </li>
                <li className="flex items-center gap-4 font-medium">
                  <CheckCircle2 className="text-secondary" size={20} />
                  {language === 'en' ? 'Entrepreneurial Mindset Training' : 'Girişimci Zihniyet Eğitimi'}
                </li>
              </ul>
              <button className="bg-secondary text-white px-8 py-3 rounded-xl font-medium hover:bg-orange-600 transition-colors">
                {language === 'en' ? 'Partner With Us' : 'Partner Olun'}
              </button>
            </div>
            <div className="relative">
              <img
                alt="STEM classroom"
                className="rounded-3xl shadow-2xl w-full"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXMck-9_BBGoYBvuIewpa0v7rWVkjniTDO6775Bgsuyk3yIsGOA7PE9Kw_gKpAxwEIdJPfYIzdg-VykGqOWyMtHkiZEW_tCO-cBcp6IvonRyxZq2BDTXnszFfYEd-9vVwjU3vP8-PJTR0QJqsykhfFMu9jsqh2Ckg6TvVHbJ_1YksPLjhwanS86BDrEGRI0JybxEGInYx6Mv5PcaTgom2q8OZyfegZMDtcR6GYDOIWFXvJTOv2-ZGk0IQUC-dJyb2FLyhq2aDrOEOB"
              />
              <div className="absolute -bottom-6 -right-6 bg-gray-100 p-4 rounded-2xl shadow-xl flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white">
                  <Award size={24} />
                </div>
                <div>
                  <p className="font-medium text-primary">
                    {language === 'en' ? 'Certified Franchise' : 'Sertifikalı Franchise'}
                  </p>
                  <p className="text-sm text-gray-600">
                    {language === 'en' ? 'European Standards' : 'Avrupa Standartları'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-8 text-center bg-gray-100 rounded-[40px] py-16 relative overflow-hidden">
            <div className="relative z-10 space-y-6">
              <h2 className="text-4xl font-bold text-primary">
                {language === 'en' ? 'Ready to Shape the Future?' : 'Geleceği Şekillendirmeye Hazır mısınız?'}
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {language === 'en'
                  ? 'Whether you are looking for UK educational consultancy or world-class STEM programs for your school, Robonino is here to lead the way.'
                  : 'İster İngiltere eğitim danışmanlığı, ister okulunuz için dünya standartlarında STEM programları arıyor olun, Robonino yol göstermek için burada.'}
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <button className="bg-primary text-white px-8 py-3 rounded-full font-medium shadow-xl hover:-translate-y-1 transition-transform">
                  {language === 'en' ? 'Join Our Journey' : 'Yolculuğumuza Katılın'}
                </button>
                <Link
                  href="/study-in-uk"
                  className="bg-white text-primary border border-gray-300 px-8 py-3 rounded-full font-medium hover:bg-primary hover:text-white transition-all"
                >
                  {language === 'en' ? 'View Our Programs' : 'Programlarımızı Görün'}
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
