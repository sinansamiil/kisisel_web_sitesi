export interface ProjectItem {
  id: string;
  category: 'embedded' | 'ai' | 'web';
  title: string;
  tags: string[];
  description: string;
  features: string[];
  techStack: string[];
  link?: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  logo?: string;
  description: string;
}

export interface VoluntaryItem {
  period: string;
  role: string;
  organization: string;
  location: string;
  logo?: string;
  description: string;
}

export interface EducationItem {
  period: string;
  school: string;
  degree: string;
  gpa: string;
  logo?: string;
}

export interface CertificateItem {
  title: string;
  issuer: string;
  logo?: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export const portfolioData = {
  personal: {
    name: 'SİNAN ŞAMİL KÖYLÜ',
    title: 'Yazılım Mühendisi / Öğrencisi',
    status: 'PROJELER & İŞBİRLİKLERİNE AÇIK',
    location: 'Kayseri / Aksaray, TR',
    email: 'koylusinansamil@gmail.com',
    linkedin: 'https://linkedin.com/in/sinan-şamil-köylü',
    github: 'https://github.com/sinansamiil',
    activeRole: 'Gürman İnovasyon, Asena İHA & T3 Vakfı',
    educationShort: 'Aksaray Üni. (Yazılım Müh.)',
    secondDegreeShort: 'İstanbul Üni. (YBS)',
  },
  manifesto: {
    num: '[01]',
    tag: 'FELSEFE & VİZYON',
    headline: 'DONANIMDAN BULUTA, UÇUŞ KONTROLÜNDEN WEB\'E KESİNTİSİZ MİMARİLER.',
  },
  about: {
    num: '[02]',
    tag: 'ARKA PLAN & YAKLAŞIM',
    lead: 'Tutkulu bir Yazılım Mühendisliği öğrencisi olarak, yenilikçi, güvenilir ve kullanıcı odaklı çözümler geliştiriyorum.',
    paragraphs: [
      'Teknik altyapım; full-stack web geliştirme, İHA’lar için kritik gömülü sistemler ve elektrikli araç yazılım mimarilerini kapsamaktadır. Ölçeklenebilir Next.js platformları inşa ediyor, akıllı ev sistemlerini optimize ediyor veya CTF yarışmalarında siber güvenlik zorluklarıyla mücadele ediyorum.',
      'Kodlamayı bir kariyer yolunun ötesinde, sürekli öğrenmemi besleyen temel bir tutku ve disiplin olarak görüyorum. Klavyeden uzaklaştığımda seyahat etmekten ve yüzmekten keyif alıyorum. Amacım sürekli öğrenmek, üretken ekiplerle iş birliği yapmak ve somut bir etki yaratan yüksek performanslı yazılımlar ortaya koymaktır.'
    ],
    metrics: [
      {
        number: '06+',
        title: 'Gerçek Dünya Projesi',
        desc: 'Edge AI, İHA Uçuş Sistemleri, VCU/BMS Mimarileri, E-Ticaret ve IoT Panelleri.',
      },
      {
        number: '2x',
        title: 'Mühendislik & Yönetim Lisansı',
        desc: 'Aksaray Üniversitesi Yazılım Mühendisliği & İstanbul Üniversitesi YBS.',
      },
      {
        number: 'T3 & SV',
        title: 'Milli Teknoloji & Siber Vatan',
        desc: 'T3 Vakfı Proje Danışmanı, Bursiyeri ve Siber Vatan Kursiyeri.',
      },
    ],
  },
  projects: [
    {
      id: 'PRJ-01',
      category: 'ai',
      tags: ['EDGE AI', 'YOLO', 'IOT'],
      title: 'OptiGüven — Akıllı İSG Denetim Sistemi',
      description: 'IP kamera akışlarını gerçek zamanlı analiz etmek için Uç Yapay Zeka (Edge AI) ve bilgisayarlı görü kullanan otonom bir İSG denetim platformu. Kişisel Koruyucu Donanım (KKD) uyumluluğu, forklift hız takibi ve yaya çarpışma tahmini için optimize YOLO modelleri entegre edildi.',
      features: [
        'IoT entegreli dinamik coğrafi çit (geofencing)',
        'Mekansal risk ve kaza olasılık ısı haritaları',
        'Düşük gecikmeli edge donanım çıkarım optimizasyonu',
      ],
      techStack: ['Python', 'YOLO', 'OpenCV', 'IoT Sensors', 'Edge AI'],
    },
    {
      id: 'PRJ-02',
      category: 'embedded',
      tags: ['İHA', 'GÖMÜLÜ', 'BİLGİSAYARLI GÖRÜ'],
      title: 'Asena İHA Uçuş Sistemi & Otonom Takip',
      description: 'Sabit kanatlı insansız hava araçları için uçuş kontrol ve gömülü yazılım mimarileri geliştirildi. Otonom hedef tespiti ve takibi için "Search for the Red and Blue Goal" bilgisayarlı görü algoritması oluşturuldu.',
      features: [
        'Görev güvenilirliği için gerçek zamanlı hata ayıklama',
        'Düşük gecikmeli telemetri ve sensör füzyonu',
        'Otonom uçuş güzergahı & hedef kilitlenme algoritması',
      ],
      techStack: ['C/C++', 'Python', 'ROS', 'OpenCV', 'Embedded Linux'],
    },
    {
      id: 'PRJ-03',
      category: 'embedded',
      tags: ['EV', 'VCU / BMS', 'OTOMOTİV'],
      title: 'MOGA — Elektrikli Araç Kontrol Mimarisi',
      description: 'Elektrikli araçlar için Araç Kontrol Ünitesi (VCU) ve Batarya Yönetim Sistemi (BMS) yazılım mimarilerinin geliştirilmesine katkı sağlandı. Otonom sürüş ve kritik araç dinamikleri için düşük gecikmeli veri yolları kuruldu.',
      features: [
        'Düşük gecikmeli CAN / haberleşme protokolleri',
        'Gerçek zamanlı arıza tespiti (Diagnostics & Telemetri)',
        'Batarya hücre dengeleme & güç tüketim optimizasyonu',
      ],
      techStack: ['C#', 'C++', 'CAN-Bus', 'VCU', 'BMS', 'Diagnostics'],
    },
    {
      id: 'PRJ-04',
      category: 'web',
      tags: ['NEXT.JS', 'POSTGRESQL', 'B2B/B2C'],
      title: 'BS Reklam — Ölçeklenebilir E-Ticaret Platformu',
      description: 'Node.js, Next.js ve PostgreSQL kullanılarak yüksek trafik ve kurumsal sipariş süreçlerini karşılayan B2B/B2C e-ticaret platformu sıfırdan mimarilendirildi. Rol tabanlı dinamik fiyatlandırma ve ajans bayi modülleri geliştirildi.',
      features: [
        'İyzico güvenli sanal POS ödeme geçidi entegrasyonu',
        'Rol tabanlı ajans iskonto & toplu baskı sipariş yönetimi',
        'Linux VDS üzerinde CI/CD ile yüksek erişilebilirlikli canlı yayın',
      ],
      techStack: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'Linux VDS', 'İyzico'],
    },
    {
      id: 'PRJ-05',
      category: 'web',
      tags: ['IOT WEB', 'LİSANS YÖNETİMİ'],
      title: 'Akıllı Ev Sistemleri Lisanslama & Yönetim Paneli',
      description: 'Akıllı bina ve konut donanımlarının yaşam döngüsü yönetimi için kapsamlı web tabanlı panel. Yangın algılama, gaz alarmı ve güvenlik sensörlerinin merkezi konfigürasyonu ve lisans takibi sağlandı.',
      features: [
        'Merkezi donanım lisans doğrulama ve uzaktan aktivasyon',
        'Gerçek zamanlı sensör durum telemetrisi & acil durum bildirimleri',
        'Rol bazlı yetkilendirme ve detaylı denetim kayıtları (Audit Logs)',
      ],
      techStack: ['JavaScript', 'HTML5', 'CSS3', 'SQL', 'RESTful API'],
    },
    {
      id: 'PRJ-06',
      category: 'web',
      tags: ['C# .NET', 'MQTT', 'DESKTOP'],
      title: 'MQTT & JSON Dosya ve Mesaj İletim Motoru',
      description: 'IoT broker ağları ve endüstriyel veri hatları üzerinde MQTT ve JSON protokollerini kullanarak kayıpsız mesaj ve dosya iletimi sağlayan C# masaüstü mimarisi.',
      features: [
        'Yüksek hacimli iletimlerde kalıcı mesaj loglama mekanizması',
        'Yapılandırma depolama ve veritabanı iletim takibi',
        'MySQL entegrasyonu ile dayanıklı veri senkronizasyonu',
      ],
      techStack: ['C# .NET', 'MQTT Broker', 'JSON', 'MySQL', 'Desktop'],
    },
  ] as ProjectItem[],
  experiences: [
    {
      period: '20/10/2025 — DEVAM EDİYOR',
      role: 'Yazılım Mühendisi',
      company: 'Gürman İnovasyon · Aksaray, TR',
      logo: '/assets/logos/gurman-logo.jpg',
      description: 'Araç Kontrol Üniteleri (VCU), Batarya Yönetim Sistemleri (BMS) ve sürücü arayüzleri dahil olmak üzere elektrikli araç sistemleri için yazılım geliştirme süreçlerini yürüttüm. Sistem optimizasyonu ve gerçek zamanlı arıza tespiti (diagnostics) gibi karmaşık zorlukların üstesinden geldim.',
    },
    {
      period: '01/10/2025 — DEVAM EDİYOR',
      role: 'Yazılım Mühendisi',
      company: 'Asena İHA Takımı · Aksaray, TR',
      logo: '/assets/logos/asena-logo.jpg',
      description: 'İHA’lar için güvenlik açısından kritik gömülü yazılım ve uçuş kontrol sistemleri geliştirdim. Görev başarısını ve güvenilirliği sağlamak için gerçek zamanlı hata ayıklama ve sensör entegrasyonu gerçekleştirdim.',
    },
    {
      period: '13/07/2026 — DEVAM EDİYOR',
      role: 'Yazılım Mühendisi Stajyeri',
      company: 'Bellona · Kayseri, TR',
      logo: '/assets/logos/bellona-logo.jpg',
      description: 'Mobilya sektörünün öncü kuruluşlarından Bellona bünyesinde, Bilgi Teknolojileri departmanında üretim ve yönetim süreçlerinin dijitalleşmesine yönelik projelerde aktif görev alarak teknik uygulama ve iş süreçlerine katkı sağlamaktayım.',
    },
    {
      period: '14/09/2026 — 19/10/2026',
      role: 'Yazılım Mesleki Gelişim Programı Katılımcısı',
      company: 'Software Persona (TNC Group) · Uzaktan',
      logo: '/assets/logos/softwarepersona-logo.jpg',
      description: 'Yazılım Mesleki Gelişim Programı kapsamında düzenlenen çevrimiçi eğitimlere ve proje çalışmalarına katılarak modern yazılım geliştirme standartlarında sektörel yetkinliklerimi artırmaktayım.',
    },
    {
      period: '01/06/2025 — 01/08/2025',
      role: 'Stajyer Yazılım Mühendisi',
      company: 'KGK Mühendislik · Kayseri, TR',
      logo: '/assets/logos/kgk-logo.jpg',
      description: 'Hata ayıklama (debugging), özellik geliştirme ve temiz kod yazmaya odaklanarak yazılım geliştirme döngüsüne aktif olarak katıldım. Kod incelemeleri ve proje mimarisi konularında ekiple etkili bir şekilde iş birliği yaptım.',
    },
    {
      period: '01/09/2024 — DEVAM EDİYOR',
      role: 'Serbest Çalışan (Freelancer)',
      company: 'Bionluk · Uzaktan',
      logo: '/assets/logos/bionluk-logo.jpg',
      description: 'Platform üzerinden çeşitli müşteriler için grafik tasarım ve yazılım geliştirme alanlarında müşteri gereksinimlerine uygun özel çözümler ürettim ve projeleri uçtan uca teslim ettim.',
    },
    {
      period: '01/06/2020 — DEVAM EDİYOR',
      role: 'Grafik Tasarım ve Satış Pazarlama',
      company: 'BS Reklam · Kayseri, TR',
      logo: '/assets/logos/bsreklam-logo.png',
      description: 'Yüksek kaliteli çıktılar sunmak için uçtan uca tasarım ve baskı üretim döngüsünü yönettim. Müşterilere özel pazarlama ve tasarım çözümleri sunarak satış hedeflerine katkıda bulundum.',
    },
  ] as ExperienceItem[],
  volunteering: [
    {
      period: '24/04/2026 — DEVAM EDİYOR',
      role: 'Proje Danışmanı',
      organization: 'Türkiye Teknoloji Takımı Vakfı (T3 Vakfı)',
      location: 'Aksaray, TR',
      logo: '/assets/logos/t3-logo.jpg',
      description: 'Teknoloji odaklı projeleri için teknik rehberlik ve stratejik destek sağlayarak öğrenci takımlarına mentorluk yaptım.',
    },
    {
      period: '12/01/2026 — DEVAM EDİYOR',
      role: '”Sen Geleceksin” Bursiyeri',
      organization: 'Türkiye Teknoloji Takımı Vakfı (T3 Vakfı)',
      location: 'Aksaray, TR',
      logo: '/assets/logos/t3-logo.jpg',
      description: 'Görev tabanlı projelere ve TEKNOFEST’in organizasyonuna katılarak Milli Teknoloji Hamlesi’ne katkıda bulundum. Liderlik ve proje yönetimi üzerine özel eğitimler aldım.',
    },
    {
      period: '01/01/2026 — DEVAM EDİYOR',
      role: 'Siber Güvenlik Kursiyeri',
      organization: 'Siber Vatan Programı',
      location: 'Aksaray, TR',
      logo: '/assets/logos/sibervatan-logo.jpg',
      description: 'Ağ adli bilişimi, tersine mühendislik ve kriptografi alanlarında pratik siber güvenlik becerileri geliştirdim. CTF yarışmalarına aktif olarak katılarak teorik bilgileri gerçek dünya senaryolarına uyguladım.',
    },
    {
      period: '20/10/2025 — 08/08/2026',
      role: 'Yönetim Kurulu Üyesi',
      organization: 'Sanayi ve Teknoloji Topluluğu',
      location: 'Aksaray, TR',
      logo: '/assets/logos/sanayiteknoloji-logo.jpg',
      description: 'Sanayi ve Teknoloji İl Müdürlüğü’ne bağlı topluluğun görünürlüğünü artırmak için teknik zirveler, paneller ve atölyeler organize ettim. Üniversite ve endüstri ortaklarıyla güçlü işbirlikleri geliştirdim.',
    },
  ] as VoluntaryItem[],
  gallery: [
    { src: '/assets/portraits/portrait-02.jpg', label: 'DEV // SİNAN ŞAMİL KÖYLÜ' },
    { src: '/assets/gallery/gallery-01.jpg', label: 'BELLONA // FABRİKA ZİYARETİ' },
    { src: '/assets/gallery/gallery-02.jpg', label: 'BS REKLAM // ATÖLYE & İMALAT SÜRECİ' },
    { src: '/assets/gallery/gallery-03.jpg', label: 'DENEYAP TÜRKİYE // T3 VAKFI ETKİNLİĞİ' },
    { src: '/assets/portraits/portrait-05.jpg', label: 'AR-GE // SİNAN ŞAMİL KÖYLÜ' },
    { src: '/assets/gallery/gallery-04.jpg', label: 'KARİYER GÜNLERİ // AR-GE & PROJE STANDI' },
    { src: '/assets/gallery/gallery-05.jpg', label: 'MOGA ELEKTRİKLİ ARAÇ // SAHA TANITIMI' },
    { src: '/assets/gallery/gallery-06.jpg', label: 'MTA AÇILIŞI // BAKANLIK PROTOKOL ZİYARETİ' },
    { src: '/assets/portraits/portrait-03.jpg', label: 'MÜHENDİSLİK // PORTRE' },
    { src: '/assets/gallery/gallery-07.jpg', label: 'SİBER GÜVENLİK KAMPI // SERTİFİKA TÖRENİ' },
    { src: '/assets/gallery/gallery-08.jpg', label: 'TEKNOFEST // KAMPÜS TANITIM STANTI' },
    { src: '/assets/gallery/gallery-09.jpg', label: 'MİLLİ TEKNOLOJİ // GENÇLİK & TEKNOFEST SUNUMU' },
    { src: '/assets/portraits/portrait-01.jpg', label: 'PORTRE // SİNAN ŞAMİL KÖYLÜ' },
    { src: '/assets/gallery/gallery-10.jpg', label: 'BALIKESİR // HACKATHON YARIŞMASI' },
    { src: '/assets/gallery/gallery-11.jpg', label: 'BELLONA IT // BİLGİ TEKNOLOJİLERİ DEPARTMANI' },
    { src: '/assets/gallery/gallery-12.jpg', label: 'BELLONA IT // YAZILIM GELİŞTİRME & ÇALIŞMA ALANI' },
    { src: '/assets/portraits/portrait-04.jpg', label: 'SİNAN ŞAMİL KÖYLÜ // PORTRE' },
    { src: '/assets/gallery/gallery-13.jpg', label: 'BS REKLAM // GRAFİK TASARIM & BASKI ÇALIŞMASI' },
    { src: '/assets/gallery/gallery-14.jpg', label: 'DENEYAP ATÖLYESİ // UYGULAMALI EĞİTİM DERSİ' },
    { src: '/assets/gallery/gallery-15.jpg', label: 'MİLLİ TEKNOLOJİ // AR-GE ATÖLYE BİNASI' },
  ],
  education: [
    {
      period: '09/2024 — DEVAM EDİYOR',
      school: 'Aksaray Üniversitesi',
      degree: 'Yazılım Mühendisliği Lisans Programı · Mühendislik Fakültesi',
      gpa: 'GNO: 3.09 / 4.00',
      logo: '/assets/logos/aksaray-logo.jpg',
    },
    {
      period: '09/2025 — DEVAM EDİYOR',
      school: 'İstanbul Üniversitesi',
      degree: 'Yönetim Bilişim Sistemleri Lisans Programı · AUZEF',
      gpa: 'GNO: 3.23 / 4.00',
      logo: '/assets/logos/istanbul-logo.jpg',
    },
  ] as EducationItem[],
  certificates: [
    {
      title: 'B2 İngilizce Sertifikası',
      issuer: 'American Life Dil Okulları (28/08/2025)',
      logo: '/assets/logos/americanlife-logo.jpg',
    },
    {
      title: '(40+ Saat) Python — Sıfırdan İleri Seviye',
      issuer: 'Udemy (22/11/2024)',
      logo: '/assets/logos/udemy-logo.jpg',
    },
    {
      title: 'Uygulama Geliştirerek C# Öğrenin: A’dan Z’ye',
      issuer: 'Udemy (10/08/2024)',
      logo: '/assets/logos/udemy-logo.jpg',
    },
    {
      title: 'C# Programlama: Visual Studio ile Sıfırdan Uzmanlığa',
      issuer: 'Udemy (15/09/2024)',
      logo: '/assets/logos/udemy-logo.jpg',
    },
    {
      title: 'Sıfırdan Uzmanlığa Canva Eğitimi',
      issuer: 'Udemy (15/05/2025)',
      logo: '/assets/logos/udemy-logo.jpg',
    },
  ] as CertificateItem[],
  skills: [
    {
      category: 'PROGRAMLAMA & ÇEKİRDEK TEKNOLOJİLER',
      skills: ['C#', 'Python', 'JavaScript (ES6+)', 'Next.js / React', 'C / C++', 'Java', 'PHP', 'ASP.NET MVC', 'OOP Mimarisi', 'HTML5 / CSS3'],
    },
    {
      category: 'GÖMÜLÜ SİSTEMLER, EDGE AI & PROTOKOLLER',
      skills: ['İHA Uçuş Kontrol Mimarileri', 'VCU (Araç Kontrol Ünitesi)', 'BMS (Batarya Yönetimi)', 'Edge AI & YOLO', 'Bilgisayarlı Görü (OpenCV)', 'MQTT Protokolü', 'Sensör Entegrasyonu', 'Siber Güvenlik / CTF'],
    },
    {
      category: 'VERİTABANI, ARAÇLAR & ORTAMLAR',
      skills: ['PostgreSQL', 'MySQL', 'MsSQL', 'Git / GitHub', 'Linux VDS & CLI', 'VS Code', 'Visual Studio', 'PyCharm', 'Arduino IDE'],
    },
  ] as SkillGroup[],
  languages: [
    { name: 'Türkçe', level: 'Anadil [Native]' },
    { name: 'İngilizce', level: 'Orta Seviye [B2 Sertifikalı]' },
  ],
};
