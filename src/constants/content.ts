export type Language = 'en' | 'tr';

export interface Content {
  nav: {
    studyInUK: string;
    roboticsCoding: string;
    corporateEvents: string;
    applyNow: string;
    languageToggle: string;
  };
  hero: {
    title: string;
    subtitle: string;
    studyInUKButton: string;
    roboticsCodingButton: string;
    corporateEventsButton: string;
  };
  services: {
    expertiseLabel: string;
    title: string;
    studyInUK: {
      title: string;
      features: string[];
      learnMore: string;
    };
    roboticsCoding: {
      title: string;
      features: string[];
      learnMore: string;
    };
    corporateEvents: {
      title: string;
      features: string[];
      learnMore: string;
    };
  };
  whyRobonino: {
    label: string;
    title: string;
    description: string;
    ukSupport: {
      title: string;
      description: string;
    };
    childSafety: {
      title: string;
      description: string;
    };
    bilingual: {
      title: string;
      description: string;
    };
  };
  destinations: {
    title: string;
    subtitle: string;
    london: {
      name: string;
      description: string;
    };
    oxford: {
      name: string;
      description: string;
    };
    cambridge: {
      name: string;
      description: string;
    };
    brighton: {
      name: string;
      description: string;
    };
  };
  testimonials: {
    title: string;
    parent: {
      name: string;
      role: string;
      quote: string;
    };
    student: {
      name: string;
      role: string;
      quote: string;
    };
    corporate: {
      name: string;
      role: string;
      quote: string;
    };
  };
  cta: {
    title: string;
    subtitle: string;
    contactButton: string;
    consultationButton: string;
  };
  faq: {
    label: string;
    title: string;
    items: {
      question: string;
      answer: string;
    }[];
  };
  footer: {
    description: string;
    programs: {
      title: string;
      ukSchools: string;
      stemPrograms: string;
      corporateHub: string;
    };
    company: {
      title: string;
      aboutUs: string;
      contact: string;
    };
    getHelp: {
      title: string;
      whatsapp: string;
    };
    copyright: string;
  };
}

export const content: Record<Language, Content> = {
  en: {
    nav: {
      studyInUK: 'Study in UK',
      roboticsCoding: 'Robotics & Coding',
      corporateEvents: 'Corporate Events',
      applyNow: 'Apply Now',
      languageToggle: 'TR/EN',
    },
    hero: {
      title: 'Education, Technology & International Experiences',
      subtitle: 'Helping children, families and professionals grow through learning, creativity and global experiences.',
      studyInUKButton: 'Study in UK',
      roboticsCodingButton: 'Robotics & Coding',
      corporateEventsButton: 'Corporate Events',
    },
    services: {
      expertiseLabel: 'Our Expertise',
      title: 'Premium Learning Pillars',
      studyInUK: {
        title: 'Study English in the UK',
        features: ['School placement', 'Summer schools', 'Exam preparation'],
        learnMore: 'Learn More',
      },
      roboticsCoding: {
        title: 'Robotics & Coding for Kids',
        features: ['Robotics workshops', 'STEM clubs', 'Innovation camps'],
        learnMore: 'Learn More',
      },
      corporateEvents: {
        title: 'Corporate & Social Events',
        features: ['Team building', 'Robotics challenges', 'Event production'],
        learnMore: 'Learn More',
      },
    },
    whyRobonino: {
      label: 'Global Trust',
      title: 'The Robonino Difference',
      description: 'We bridge the gap between cultures and technologies, ensuring every student and professional finds their path to success with local expertise and global reach.',
      ukSupport: {
        title: 'UK-Based Local Support',
        description: 'Direct presence in the UK ensures hands-on support for all students and events.',
      },
      childSafety: {
        title: 'Child Safety First',
        description: 'Strict UK safeguarding standards applied to every program we offer.',
      },
      bilingual: {
        title: 'Bilingual Communication',
        description: 'Full TR/EN support to ensure clear communication for Turkish families.',
      },
    },
    destinations: {
      title: 'Explore Top Destinations',
      subtitle: 'Choose from the most prestigious education hubs in the UK.',
      london: {
        name: 'London',
        description: 'World Capital of Education',
      },
      oxford: {
        name: 'Oxford',
        description: 'Traditional Excellence',
      },
      cambridge: {
        name: 'Cambridge',
        description: 'The Spirit of Innovation',
      },
      brighton: {
        name: 'Brighton',
        description: 'Creative Coastal Living',
      },
    },
    testimonials: {
      title: 'Voice of Our Community',
      parent: {
        name: 'Arzu K.',
        role: 'Parent',
        quote: "Robonino's team in London made my son's first summer school experience incredibly safe and exciting. The bilingual support was a lifesaver.",
      },
      student: {
        name: 'Can M.',
        role: 'STEM Student',
        quote: 'The robotics workshop was unlike anything I\'ve seen before. We built actual AI systems while practicing English in Cambridge. Amazing!',
      },
      corporate: {
        name: 'Deniz Y.',
        role: 'HR Director',
        quote: 'Organizing our annual leadership retreat with Robonino brought a fresh technological edge to our team building. Seamless execution.',
      },
    },
    cta: {
      title: 'Start Your International Learning Journey',
      subtitle: 'Our experts are ready to guide you through every step of your UK education or robotics adventure.',
      contactButton: 'Contact Us',
      consultationButton: 'Book Consultation',
    },
    faq: {
      label: 'Support',
      title: 'Frequently Asked Questions',
      items: [
        {
          question: 'What age groups do you serve?',
          answer: 'Our programs are designed for children aged 7 to 18, with specific curriculum tracks for primary, secondary, and pre-university students.',
        },
        {
          question: 'Are the programs certified?',
          answer: 'Yes, all our English and STEM programs follow UK-standard educational frameworks and participants receive completion certificates recognized by our partner institutions.',
        },
        {
          question: 'Do you offer online classes?',
          answer: 'While our core strength is immersive in-person experiences in the UK, we offer specialized online coding and robotics prep courses throughout the year.',
        },
        {
          question: 'How can I register for a trial?',
          answer: 'You can book a free 15-minute consultation through our \'Book Consultation\' button to discuss your child\'s needs and schedule a trial workshop.',
        },
        {
          question: 'Is there bilingual support available?',
          answer: 'Absolutely. We provide full TR/EN bilingual support to ensure clear communication between families and our educational staff in the UK.',
        },
        {
          question: 'What safety standards do you follow?',
          answer: 'We adhere strictly to UK Safeguarding and Child Protection standards, ensuring all staff are vetted and students are in a secure learning environment.',
        },
      ],
    },
    footer: {
      description: 'Empowering growth through world-class UK education and innovative robotics programming.',
      programs: {
        title: 'Programs',
        ukSchools: 'UK Schools',
        stemPrograms: 'STEM Programs',
        corporateHub: 'Corporate Hub',
      },
      company: {
        title: 'Company',
        aboutUs: 'About Us',
        contact: 'Contact',
      },
      getHelp: {
        title: 'Get Help',
        whatsapp: 'WhatsApp Support',
      },
      copyright: '© 2024 Robonino International Education. All rights reserved.',
    },
  },
  tr: {
    nav: {
      studyInUK: 'İngiltere\'de Eğitim',
      roboticsCoding: 'Robotik ve Kodlama',
      corporateEvents: 'Kurumsal Etkinlikler',
      applyNow: 'Apply Now',
      languageToggle: 'TR/EN',
    },
    hero: {
      title: 'Eğitim, Teknoloji ve Uluslararası Deneyimler',
      subtitle: 'Kültürler ve teknolojiler arasında köprü kurarak, her öğrencinin ve profesyonelin yerel uzmanlık ve küresel erişimle başarıya giden yolunu bulmasını sağlıyoruz.',
      studyInUKButton: 'İngiltere\'de Eğitim',
      roboticsCodingButton: 'Robotik ve Kodlama',
      corporateEventsButton: 'Kurumsal Etkinlikler',
    },
    services: {
      expertiseLabel: 'UZMANLIK ALANIMIZ',
      title: 'Premium Öğrenme Sütunları',
      studyInUK: {
        title: 'İngiltere\'de İngilizce Eğitimi',
        features: ['Okul yerleştirme', 'Yaz okulları', 'Sınava hazırlık'],
        learnMore: 'Danışmanlık Alın',
      },
      roboticsCoding: {
        title: 'Çocuklar İçin Robotik ve Kodlama',
        features: ['Robotik atölyeleri', 'STEM kulüpleri', 'İnovasyon kampları'],
        learnMore: 'Danışmanlık Alın',
      },
      corporateEvents: {
        title: 'Kurumsal ve Sosyal Etkinlikler',
        features: ['Takım çalışması', 'Robotik yarışmalar', 'Etkinlik prodüksiyonu'],
        learnMore: 'Danışmanlık Alın',
      },
    },
    whyRobonino: {
      label: 'KÜRESEL GÜVEN',
      title: 'Robonino Farkı',
      description: 'Kültürler ve teknolojiler arasında köprü kurarak, her öğrencinin ve profesyonelin yerel uzmanlık ve küresel erişimle başarıya giden yolunu bulmasını sağlıyoruz.',
      ukSupport: {
        title: 'İngiltere Merkezli Yerel Destek',
        description: 'İngiltere\'deki doğrudan varlığımız, tüm öğrenciler ve etkinlikler için birebir destek sağlar.',
      },
      childSafety: {
        title: 'Çocuk Güvenliği Önceliğimiz',
        description: 'Sunduğumuz her programda katı İngiltere çocuk koruma standartları uygulanır.',
      },
      bilingual: {
        title: 'Çift Dilli İletişim',
        description: 'Türk aileler için net iletişim sağlamak amacıyla tam TR/EN desteği.',
      },
    },
    destinations: {
      title: 'En Popüler Destinasyonları Keşfedin',
      subtitle: 'İngiltere\'nin en prestijli eğitim merkezleri arasından seçiminizi yapın.',
      london: {
        name: 'London',
        description: 'Eğitimin Dünya Başkenti',
      },
      oxford: {
        name: 'Oxford',
        description: 'Geleneksel Mükemmellik',
      },
      cambridge: {
        name: 'Cambridge',
        description: 'İnovasyon Ruhu',
      },
      brighton: {
        name: 'Brighton',
        description: 'Yaratıcı Kıyı Yaşamı',
      },
    },
    testimonials: {
      title: 'Topluluğumuzun Sesi',
      parent: {
        name: 'Arzu K.',
        role: 'Veli',
        quote: 'Robonino\'nun Londra\'daki ekibi oğlumun ilk yaz okulu deneyimini inanılmaz derecede güvenli ve heyecan verici kıldı. Çift dilli destek bir can kurtarandı.',
      },
      student: {
        name: 'Can M.',
        role: 'STEM Öğrencisi',
        quote: 'Robotik atölyesi daha önce gördüğüm hiçbir şeye benzemiyordu. Cambridge\'de İngilizce pratiği yaparken gerçek yapay zeka sistemleri inşa ettik. Harikaydı!',
      },
      corporate: {
        name: 'Deniz Y.',
        role: 'İK Direktörü',
        quote: 'Yıllık liderlik kampımızı Robonino ile organize etmek, ekip çalışmamıza taze bir teknolojik bakış açısı getirdi. Kusursuz bir uygulama.',
      },
    },
    cta: {
      title: 'Uluslararası Öğrenme Yolculuğunuza Başlayın',
      subtitle: 'Uzmanlarımız, İngiltere eğitimi veya robotik maceranızın her adımında size rehberlik etmeye hazır.',
      contactButton: 'Bize Ulaşın',
      consultationButton: 'Danışmanlık Alın',
    },
    faq: {
      label: 'BİLGİ MERKEZİ',
      title: 'Sıkça Sorulan Sorular',
      items: [
        {
          question: 'İngiltere\'de eğitim için yaş sınırı var mı?',
          answer: 'Yaz okullarımız genellikle 8-17 yaş arası öğrencilere yöneliktir. Ancak üniversite hazırlık ve kurumsal eğitim programlarımız için yaş sınırları programın içeriğine göre değişiklik göstermektedir.',
        },
        {
          question: 'Robotik atölyeleri için ön bilgi gerekiyor mu?',
          answer: 'Hayır, başlangıç seviyesindeki atölyelerimiz için herhangi bir ön teknik bilgi gerekmemektedir. Uzman eğitmenlerimiz temelden başlayarak ileri seviyeye kadar rehberlik etmektedir.',
        },
        {
          question: 'Kayıt süreci nasıl işliyor?',
          answer: '"Bize Ulaşın" butonu veya WhatsApp hattımız üzerinden ilk görüşmeyi başlatabilirsiniz. Danışmanlarımız sizin için en uygun programı belirledikten sonra gerekli evrak ve vize süreçlerinde tam destek sağlamaktadır.',
        },
        {
          question: 'Eğitimler sırasında Türkçe destek sağlanıyor mu?',
          answer: 'Evet, İngiltere merkezli ekibimiz çift dilli (Türkçe/İngilizce) destek sunarak hem öğrencilerin hem de ailelerin tüm süreçte kendilerini güvende hissetmelerini sağlar.',
        },
      ],
    },
    footer: {
      description: 'Dünya standartlarında İngiltere eğitimi ve yenilikçi robotik programlama yoluyla gelişimi destekliyoruz.',
      programs: {
        title: 'Programlar',
        ukSchools: 'İngiltere Okulları',
        stemPrograms: 'STEM Programları',
        corporateHub: 'Kurumsal Merkez',
      },
      company: {
        title: 'Şirket',
        aboutUs: 'Hakkımızda',
        contact: 'İletişim',
      },
      getHelp: {
        title: 'Yardım Alın',
        whatsapp: 'WhatsApp Desteği',
      },
      copyright: '© 2024 Robonino Uluslararası Eğitim. Tüm hakları saklıdır.',
    },
  },
};
