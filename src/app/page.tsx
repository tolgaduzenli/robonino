'use client';

import { useLanguage } from '@/lib/LanguageContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';
import { ArrowRight, CheckCircle2, Headset, ShieldCheck, Languages, Star } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gray-50">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-gray-50/40 to-transparent z-10"></div>
            <img
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5vzy9JfR7EfVlr21YbVpgeJK22QyB_s_SDf4Jl2iMmzETyQU71wbuvz_regntt39FJ24n3vKdAfdq7VKGS0k7KEVjOruVjVaYKltN0lg23A-QPHBXyMy5-kqXuHGORML-4OC4E8Pg8q5vDAnxTdduhjMxc-9Yy6ZI1uxnCVZU6EbnR0LC4UYSPIO_j9kH6YCgt0LexURyhPSSqSt5QVxb-q0fq1F8GKsvIa9xRwZs_HTyFGunmFSoG5bk9j2HL0qzAiIDDlE11b5u"
              alt="Students collaborating"
            />
          </div>
          <div className="relative z-20 max-w-7xl mx-auto px-8 py-20">
            <div className="max-w-2xl space-y-6">
              <h1 className="text-6xl font-extrabold text-primary leading-tight">
                {t.hero.title}
              </h1>
              <p className="text-xl text-gray-600 max-w-lg">
                {t.hero.subtitle}
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="/study-in-uk"
                  className="bg-primary text-white px-8 py-4 rounded-xl font-medium flex items-center gap-2 hover:shadow-lg transition-all"
                >
                  {t.hero.studyInUKButton} <ArrowRight size={18} />
                </Link>
                <Link
                  href="/robotics-coding"
                  className="bg-white text-primary border border-gray-300 px-8 py-4 rounded-xl font-medium hover:bg-gray-100 transition-all"
                >
                  {t.hero.roboticsCodingButton}
                </Link>
                <Link
                  href="/corporate-events"
                  className="bg-secondary text-white px-8 py-4 rounded-xl font-medium hover:opacity-90 transition-all"
                >
                  {t.hero.corporateEventsButton}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-8">
            <div className="mb-8">
              <span className="text-secondary font-bold text-sm uppercase tracking-widest">{t.services.expertiseLabel}</span>
              <h2 className="text-4xl font-bold mt-4">{t.services.title}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Study in UK */}
              <div className="group relative overflow-hidden rounded-3xl aspect-[4/5] shadow-sm hover:shadow-xl transition-all duration-500">
                <img
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0AQku1zLWTaAHXEdr83IsbvDmhNGUnjl94HwKCatAmaaXxUSBx20sMc0VfVU8LDhuF8xSNyw3pQDmw89g_UvCsuo4s9byUEV0vVWX6UFbTOe4ggT6VH2YHr4Sd_f-qWrSd2eXvYKIrmPzX-qbGwGuR5P2ZAz7beOhdbtRemYaGozrh1Y-EV0L5D_zHa92MoJ20mcbv5JK1Zugt1-u51nYmqZvNJVLlq7fJ2mivlYK8D4sJXbg9-Ij06s47MZTDB6n5kX4UhhgBpoG"
                  alt="UK School"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent"></div>
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-4">{t.services.studyInUK.title}</h3>
                  <ul className="space-y-2 mb-4 opacity-90">
                    {t.services.studyInUK.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle2 size={18} /> {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/study-in-uk"
                    className="bg-white text-primary px-6 py-2.5 rounded-full font-medium hover:bg-secondary hover:text-white transition-all"
                  >
                    {t.services.studyInUK.learnMore}
                  </Link>
                </div>
              </div>

              {/* Robotics & Coding */}
              <div className="group relative overflow-hidden rounded-3xl aspect-[4/5] shadow-sm hover:shadow-xl transition-all duration-500">
                <img
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_qstik2xcUztJG44prYkt1na_EhjZebaUodKwFJhIQOGN6bmlD_D-XYl9ATSy3r1Szbi8fZ8gGM4muaLEvf_6Z7LGBDY7LyJ512YdgWuf9S7pfVdOSE1rGLw3yaStHn86tpt8_MuO3vzzaZGywtlsqGqReHpgTsBpQVInLmDRz96ZkSaROsv0LOMHflEba1CKk9TD67356EyEuVLlaCQurK9OWBu1B7GCdWQDZhDec9X9VYarptJaDZEQbsAgyDTj12CIab99HwLV"
                  alt="Robotics Workshop"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent"></div>
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-4">{t.services.roboticsCoding.title}</h3>
                  <ul className="space-y-2 mb-4 opacity-90">
                    {t.services.roboticsCoding.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle2 size={18} /> {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/robotics-coding"
                    className="bg-white text-primary px-6 py-2.5 rounded-full font-medium hover:bg-secondary hover:text-white transition-all"
                  >
                    {t.services.roboticsCoding.learnMore}
                  </Link>
                </div>
              </div>

              {/* Corporate Events */}
              <div className="group relative overflow-hidden rounded-3xl aspect-[4/5] shadow-sm hover:shadow-xl transition-all duration-500">
                <img
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCArHIbp2Y6iu0pYmzlYUJRPy5iox--wwDTONWipVxdtjOVkG_pe81lpS17XgXMjC24P9e4S3CXrciTfWh-aRSiNgZCdVF55HywEjCUfP9QA89LlCYfwsRKl7Cyl0Q8NgeoVCVmQGEDATRB4MsJ_bjXIUFab5NGvyXLoAzFn2mayDsSmSMuJtOH9dDm7jP73vQ2TRizd6ma6bmrBuSDjMPvGVpNrBdVAgCCHk-BALVeCXkTUfwX9MSQkmFgJrrSrMZFV05231dxS_zO"
                  alt="Corporate Event"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent"></div>
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-4">{t.services.corporateEvents.title}</h3>
                  <ul className="space-y-2 mb-4 opacity-90">
                    {t.services.corporateEvents.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle2 size={18} /> {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/corporate-events"
                    className="bg-white text-primary px-6 py-2.5 rounded-full font-medium hover:bg-secondary hover:text-white transition-all"
                  >
                    {t.services.corporateEvents.learnMore}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Robonino Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-secondary font-bold text-sm uppercase tracking-widest">{t.whyRobonino.label}</span>
                <h2 className="text-4xl font-bold mt-4">{t.whyRobonino.title}</h2>
                <p className="text-xl text-gray-600 mt-6">
                  {t.whyRobonino.description}
                </p>
                <div className="mt-8 space-y-6">
                  <div className="flex gap-4">
                    <div className="bg-white p-4 rounded-2xl shadow-sm text-secondary shrink-0 h-fit">
                      <Headset size={32} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold">{t.whyRobonino.ukSupport.title}</h4>
                      <p className="text-gray-600 mt-2">{t.whyRobonino.ukSupport.description}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-white p-4 rounded-2xl shadow-sm text-secondary shrink-0 h-fit">
                      <ShieldCheck size={32} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold">{t.whyRobonino.childSafety.title}</h4>
                      <p className="text-gray-600 mt-2">{t.whyRobonino.childSafety.description}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-white p-4 rounded-2xl shadow-sm text-secondary shrink-0 h-fit">
                      <Languages size={32} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold">{t.whyRobonino.bilingual.title}</h4>
                      <p className="text-gray-600 mt-2">{t.whyRobonino.bilingual.description}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-secondary/10 absolute -inset-8 rounded-full blur-3xl"></div>
                <img
                  className="relative z-10 rounded-[40px] shadow-2xl object-cover h-[500px] w-full"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOUJfqbP6TSWQsxtNGqW7EBT_6QCIIhx81376UN2Z5B5msXHCpVX5xOHwQhOpnf7giux0ZFUvo5k8ZrdpBKLAECjkGX9DnYh-isfR3N6ABS_Wj9hZBZ4iz1zQcfOAjyijJ1Rccs95kbFhTXmO7Kj9AahzNFj4KmGBMeZOsWwMkm0-wvJeAtUkEWulppAp5_ZeTE_GuKHvjvktpEFRQEeoksYaZB7GcwpyPvTvji_w5QQwe0z9uVu0pfy_MFkaDTN9jwaVafOvx6J_O"
                  alt="Teacher and Student"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Destinations Section */}
        <section className="py-20 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold">{t.destinations.title}</h2>
              <p className="text-gray-600 mt-4">{t.destinations.subtitle}</p>
            </div>
            <div className="flex gap-6 overflow-x-auto pb-8 snap-x">
              {/* London */}
              <div className="min-w-[300px] flex-1 snap-center group">
                <div className="relative overflow-hidden rounded-2xl aspect-[3/4] mb-4">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVpRa3ReV5z90hBe_W8ytHpFHeFRd9ScT9KNmkZHSgOO_yMbVzpHJg51C3CgqBDMkyjxhRrnUGI5CRLBD76e0DkRJ7DXw4ncEGBLy3NTOtxYgSN6L3s47dESKTLX-mLvPXHE02ZZ-Sm46VNF_eTAdNDykXVEl9xG3zjC3-VAZvpKWFmWRqH-S2SYR-BqekG_1zUvrCj4gGokqJUnDUWIZPprJwGRvdrfyL7iIKxb2rELoHQEJBXU5BxrFDaRdXd7d9XtgJt9JV9Y-n"
                    alt="London"
                  />
                </div>
                <h4 className="text-xl font-bold">{t.destinations.london.name}</h4>
                <p className="text-sm text-gray-600">{t.destinations.london.description}</p>
              </div>
              {/* Oxford */}
              <div className="min-w-[300px] flex-1 snap-center group">
                <div className="relative overflow-hidden rounded-2xl aspect-[3/4] mb-4">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDECvsd9-mwfSbxbi79Yi1-JV-1NOvXy3et_WtcW1D2USU2erSKuKITqA6A8xQi5caNEFxuk2WfY2CHXiG5oZABfvWOi3Bp8ClZSLhML0Elghmbt6TlE0kmACtuX-51GtD8V3Iks_w05mZJ8_TuBL_iZs4NUgxYz5oDTg-tFDGQ6w-CGNEKUonS4dFWVBuJ4Nks11lBYfMmULqu746raa-k-kSKz2p1is31WBg2Fc9ZHxfd8AvqQu1NuMFTlJBQM0P3rHfYUCbPcL3I"
                    alt="Oxford"
                  />
                </div>
                <h4 className="text-xl font-bold">{t.destinations.oxford.name}</h4>
                <p className="text-sm text-gray-600">{t.destinations.oxford.description}</p>
              </div>
              {/* Cambridge */}
              <div className="min-w-[300px] flex-1 snap-center group">
                <div className="relative overflow-hidden rounded-2xl aspect-[3/4] mb-4">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCB9zi9f5ZAJCjfY5rOR4SduEAJPZL1uvq9Aa_Sn7NsyvYFhaVw98Jem_PEjDIVAaUOke07zeDCKv745vvfttvEb5xjI1jYsjEjr3h6TQEeOO8J-0a883oqVqGl3GxwdxgGscuvH0wnptbEaxk5w1kKiB-mCvZSyYr-5Aq-iLZ4hw1WCdIMb3Le5-xYlFXEOUxGPl2dmMJNi3jSlzXlHlDn6Qomo7-T_kiKFgbJCq6fXD4kX5j6lYHzlRjQBqZB_xhMOCSZaeJiJdcq"
                    alt="Cambridge"
                  />
                </div>
                <h4 className="text-xl font-bold">{t.destinations.cambridge.name}</h4>
                <p className="text-sm text-gray-600">{t.destinations.cambridge.description}</p>
              </div>
              {/* Brighton */}
              <div className="min-w-[300px] flex-1 snap-center group">
                <div className="relative overflow-hidden rounded-2xl aspect-[3/4] mb-4">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3jsP4FmAbXTH55zH1t4ix15Olwkt8ablSlv7a4u-dEUdambjLtyPdxXOwHtiMFBoKGj0J0yayPpzc7bDchGoU3pQzEpTwnO5bf4n6x23pSmKwVFsgxcv5BanGWva6YtemTm0DgLMfKxitY0sqZHQpZYAdPwHPdxKtLQyjrLYbDbuukxl-BVfoYs59aSkRawR7xUm_f09AJIo2lIZV1YY3rMJydbowGRDlvT1RI6FVPGlC5Hx8CdV23VC5q-c3hljNfmtYQIys7Epc"
                    alt="Brighton"
                  />
                </div>
                <h4 className="text-xl font-bold">{t.destinations.brighton.name}</h4>
                <p className="text-sm text-gray-600">{t.destinations.brighton.description}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold">{t.testimonials.title}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Parent */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex text-secondary">
                    {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                  </div>
                  <p className="text-base italic text-gray-800">"{t.testimonials.parent.quote}"</p>
                </div>
                <div className="mt-6 flex items-center gap-4">
                  <img
                    className="w-12 h-12 rounded-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtZz7b6kbQVfW7xyuNLkLWO2TCxmBqiMMYYE8c9x5U6TqegRo8ILV5iSHG1gl5yJGWTgcJ-gCysCgIko-MyZ5scCIwJjEh3ylMzxeC9cbfkAP1xUz_f-rOJv4WyRN46L6oIkNJg4ibWKzE67l54x1xc3zMYrFANxZ4y8Y_D93wQuogjBd9lPjkLloXL74CS6g6m1l7MHFawR-DBTqI2qwtWY8fKVqCAn8gtuqc7mQ0zi1OV6I6uY4E4aCk7bLpA5cAgUy2ratILcKf"
                    alt={t.testimonials.parent.name}
                  />
                  <div>
                    <p className="font-bold">{t.testimonials.parent.name}</p>
                    <p className="text-sm text-gray-600">{t.testimonials.parent.role}</p>
                  </div>
                </div>
              </div>
              {/* Student */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex text-secondary">
                    {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                  </div>
                  <p className="text-base italic text-gray-800">"{t.testimonials.student.quote}"</p>
                </div>
                <div className="mt-6 flex items-center gap-4">
                  <img
                    className="w-12 h-12 rounded-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLTaKmzqY65KVQtOfq84UGhpcMScF1lN1lzyimDdtqQN6me65NxkccPW_k2aHB33myT0igsNsNpOwPlfUIvtmdjBzCR0vm5ShBnz0pNUlhQHI7O3CoSSZhkQTeX8YYqom4Zz6aQKrGUueKPcKXC3TZ18Nx4toErQveomcLQUL_JaQkOlIebSUobdvo8rQDn8ZXf0XCSJ0XEMHfKqEXLHrmqJnTwYg7XruejMw1b8vTtrcT0PSSm8rXHMU0d1Gbobcatk4jr-Jey2k9"
                    alt={t.testimonials.student.name}
                  />
                  <div>
                    <p className="font-bold">{t.testimonials.student.name}</p>
                    <p className="text-sm text-gray-600">{t.testimonials.student.role}</p>
                  </div>
                </div>
              </div>
              {/* Corporate */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex text-secondary">
                    {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                  </div>
                  <p className="text-base italic text-gray-800">"{t.testimonials.corporate.quote}"</p>
                </div>
                <div className="mt-6 flex items-center gap-4">
                  <img
                    className="w-12 h-12 rounded-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuATN6i_bqhewOaPBCJOqGk-7hxkNRdIkb59lBpkBBEBvoXJ6dvSwVKsrCUqJ1VWsFK7nZlJZed-XDkYG10BgoBsXEhvNicW7vhXDN8d_ofM1B7vUzkcE1Igx0o3Vb4XHzXpfUI_DMmpaBvp--t5dm_li98iBpHUl0TgaXjBv_fNP4JFpE-UUyDUktInhzpRTt2LIYhl8k4OHhevKlTXW660lhZ5C7_d7XIUSsw3hBpgx8uA8fgsc9Gp2vvY8GHT8mbv6A8PlZTYmaEq"
                    alt={t.testimonials.corporate.name}
                  />
                  <div>
                    <p className="font-bold">{t.testimonials.corporate.name}</p>
                    <p className="text-sm text-gray-600">{t.testimonials.corporate.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-8">
            <div className="relative bg-primary rounded-[40px] p-12 text-center overflow-hidden">
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
              </div>
              <div className="relative z-10 max-w-2xl mx-auto space-y-6">
                <h2 className="text-4xl font-bold text-white">{t.cta.title}</h2>
                <p className="text-xl text-white opacity-80">{t.cta.subtitle}</p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                  <Link
                    href="/contact"
                    className="bg-secondary text-white px-8 py-4 rounded-xl font-medium hover:scale-105 transition-transform"
                  >
                    {t.cta.contactButton}
                  </Link>
                  <Link
                    href="/contact"
                    className="bg-white text-primary px-8 py-4 rounded-xl font-medium hover:bg-gray-100 transition-all"
                  >
                    {t.cta.consultationButton}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-12">
              <span className="text-secondary font-bold text-sm uppercase tracking-widest">{t.faq.label}</span>
              <h2 className="text-4xl font-bold mt-4">{t.faq.title}</h2>
            </div>
            <FAQ items={t.faq.items} />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
