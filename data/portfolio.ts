export interface SkillItem {
  name: string;
  level: number;
}

export interface SkillCategory {
  category: string;
  skills: SkillItem[];
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
  desc: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  company: string;
  description: string;
  type: string;
  iconType: "work" | "code" | "education";
}

export interface SocialLink {
  label: string;
  href: string;
  iconName: "github" | "linkedin" | "instagram" | "email";
}

export interface ApproachStep {
  number: string;
  title: string;
  description: string;
}

export const portfolioData = {
  personal: {
    name: "Dhesta Irham Prasetya",
    logoInitials: "DP",
    brandTag: "Dhesta i.p.DEV",
    badgeText: "PORTFOLIO 2026",
    headline: "Halo, Saya",
    subtitle: [
      "Laravel Web Developer",
      "UI/UX Designer",
      "Mahasiswa Sistem Informasi",
    ],
    aboutPhilosophy:
      "Saya membangun aplikasi web yang menggabungkan engineering, desain, dan pengalaman pengguna.",
    aboutSupportingText:
      "Berfokus pada Laravel, Blade, MySQL, dan UI/UX untuk menghasilkan sistem yang terstruktur, fungsional, dan memiliki pengalaman visual yang konsisten.",
    aboutPillars: [
      {
        number: "01 / UI/UX DESIGN",
        title: "UI/UX DESIGN",
        description:
          "Merancang wireframe, prototype, visual hierarchy, design system, dan user flow dengan fokus pada usability dan pengalaman pengguna.",
        keywords: "Wireframe • Prototype • Design System • User Flow",
      },
      {
        number: "02 / WEB DEVELOPMENT",
        title: "WEB DEVELOPMENT",
        description:
          "Membangun aplikasi web dengan arsitektur yang terstruktur menggunakan Laravel, PHP, Blade, JavaScript, dan Tailwind CSS.",
        keywords: "Laravel • PHP • Blade • JavaScript • Tailwind CSS",
      },
      {
        number: "03 / DATABASE",
        title: "DATABASE",
        description:
          "Merancang struktur database relasional yang terorganisir, efisien, dan sesuai dengan kebutuhan sistem menggunakan MySQL.",
        keywords: "MySQL • Database Design • Relational Database • CRUD",
      },
      {
        number: "04 / SYSTEM ENGINEERING",
        title: "SYSTEM ENGINEERING",
        description:
          "Mengembangkan business logic, authentication, role-based access control, dashboard, dan integrasi API untuk membentuk sistem yang utuh.",
        keywords: "Authentication • RBAC • Dashboard • API • Business Logic",
      },
    ],
    aboutSignature: "Design the experience. Engineer the system. Refine every detail.",
  },

  contact: {
    email: "desxz48@gmail.com",
    availability: "Terbuka untuk Magang & Kolaborasi Proyek",
    availabilityDesc:
      "Berfokus pada Laravel Web Development, UI/UX Design, REST API, dan pengembangan Sistem Informasi.",
    location: "Indonesia",
    workPreference: "Bekerja Secara Global",
    ctaBadge: "TERBUKA UNTUK MAGANG & KOLABORASI",
    ctaHeading: "Mari membangun solusi yang",
    ctaHighlight: "bermakna.",
    ctaDescription:
      "Saya terbuka untuk kesempatan magang, kolaborasi proyek, dan diskusi seputar pengembangan web serta UI/UX.",
    resumeUrl: "/CV-Dhesta-Irham-Prasetya.pdf",
    portfolioUrl: "/PORTOFOLIO-DHESTA.pdf",
    whatsappUrl: "https://wa.me/6287825368112",
  },

  socials: [
    { label: "GitHub", href: "https://github.com/Dstz88", iconName: "github" },
    { label: "LinkedIn", href: "https://linkedin.com", iconName: "linkedin" },
    { label: "Instagram", href: "https://www.instagram.com/dsstaa_ip?igsh=ajI4aG1jYXkzOXAy&utm_source=qr", iconName: "instagram" },
    { label: "Email", href: "mailto:desxz48@gmail.com", iconName: "email" },
  ] as SocialLink[],

  stats: [
    { value: 5, suffix: "+", label: "Proyek Pilihan", desc: "Proyek web dan studi kasus yang terdokumentasi" },
    { value: 3, suffix: "+", label: "Tahun Belajar", desc: "Eksplorasi web development dan UI/UX" },
    { value: 2, suffix: "", label: "Fokus Utama", desc: "Web development dan UI/UX design" },
    { value: 1, suffix: "", label: "Tujuan", desc: "Membangun solusi yang berguna dan terstruktur" },
  ] as StatItem[],

  skills: [
    {
      category: "Frontend",
      skills: [
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 92 },
        { name: "Tailwind CSS", level: 96 },
        { name: "JavaScript", level: 90 },
        { name: "Blade", level: 92 },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Laravel", level: 95 },
        { name: "PHP", level: 92 },
        { name: "REST API", level: 90 },
        { name: "Composer", level: 90 },
      ],
    },
    {
      category: "Database",
      skills: [
        { name: "MySQL", level: 92 },
        { name: "Database Design", level: 88 },
        { name: "ERD", level: 88 },
        { name: "Migration", level: 90 },
        { name: "Query Optimization", level: 85 },
      ],
    },
    {
      category: "Deployment",
      skills: [
        { name: "Vercel", level: 90 },
        { name: "GitHub Actions", level: 84 },
      ],
    },
    {
      category: "UI/UX",
      skills: [
        { name: "Figma", level: 95 },
        { name: "Wireframing", level: 92 },
        { name: "Prototyping", level: 90 },
        { name: "Design System", level: 94 },
      ],
    },
    {
      category: "Tools",
      skills: [
        { name: "Git", level: 90 },
        { name: "GitHub", level: 92 },
        { name: "VS Code", level: 96 },
        { name: "Postman", level: 88 },
        { name: "npm", level: 90 },
      ],
    },
  ] as SkillCategory[],

  timeline: [
    {
      year: "2025 - SEKARANG",
      title: "Pengembangan Proyek Web & UI/UX",
      company: "Proyek Mandiri & Akademik",
      description: "Mengembangkan aplikasi web, REST API, serta prototipe UI/UX untuk membangun kemampuan teknis dan menyelesaikan studi kasus sistem informasi.",
      type: "Proyek",
      iconType: "work",
    },
    {
      year: "2024 - 2025",
      title: "Eksplorasi Web Development & UI Design",
      company: "Proyek Pembelajaran",
      description: "Mempelajari pengembangan aplikasi berbasis Laravel dan MySQL serta membuat wireframe dan prototipe antarmuka melalui proyek praktik.",
      type: "Pembelajaran",
      iconType: "code",
    },
    {
      year: "2023 - SEKARANG",
      title: "Mahasiswa Sistem Informasi",
      company: "Universitas",
      description: "Fokus pada Rekayasa Perangkat Lunak, Perancangan Basis Data MySQL, Analisis Sistem, dan Interaksi Manusia & Komputer (UI/UX).",
      type: "Pendidikan",
      iconType: "education",
    },
    {
      year: "2022 - 2024",
      title: "Fondasi Web Development",
      company: "Pembelajaran Mandiri",
      description: "Membangun fondasi HTML, CSS, JavaScript, dan desain antarmuka sebelum mendalami pengembangan aplikasi berbasis Laravel.",
      type: "Pembelajaran",
      iconType: "code",
    },
  ] as TimelineEvent[],

  approach: [
    {
      number: "01",
      title: "UNDERSTAND",
      description:
        "Memahami kebutuhan sistem, user flow, target pengguna, dan tujuan utama sebelum proses development dimulai.",
    },
    {
      number: "02",
      title: "DESIGN",
      description:
        "Merancang wireframe, interface, visual hierarchy, dan user experience menggunakan pendekatan yang berorientasi pada usability.",
    },
    {
      number: "03",
      title: "BUILD",
      description:
        "Mengimplementasikan desain menjadi aplikasi web menggunakan Laravel, Blade, PHP, MySQL, dan teknologi pendukung lainnya.",
    },
    {
      number: "04",
      title: "REFINE",
      description:
        "Melakukan testing, debugging, optimasi interface, dan refinement untuk memastikan sistem berjalan dengan baik dan konsisten.",
    },
  ] as ApproachStep[],

  bento: {
    badge: "KAPABILITAS & EKOSISTEM",
    description: "Gambaran ringkas dari toolkit teknologi, metodologi alur kerja, dan kapabilitas kreatif saya.",
    frontendCard: {
      badge: "STAK FRONTEND",
      title: "Arsitektur Frontend Modern",
      description: "Membangun antarmuka web yang responsif dan presisi menggunakan HTML5, CSS3, Tailwind CSS, JavaScript, dan templat Blade.",
      tags: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript", "Blade", "Figma"],
    },
    aiCard: {
      badge: "ALUR KERJA",
      title: "Pengembangan Berorientasi Efisiensi",
      description: "Memanfaatkan alat modern, kontrol versi Git/GitHub, dan pengujian API Postman untuk mempercepat siklus rilis.",
      tag1: "ALUR KERJA",
      tag2: "BERSIH & TERSTRUKTUR",
    },
    backendCard: {
      badge: "BACKEND",
      title: "Laravel & REST API",
      description: "Pengembangan sistem backend Laravel, arsitektur RESTful API, dan integrasi otentikasi aman.",
      tag1: "LATENSI",
      tag2: "CEPAT & OPTIMAL",
    },
    designCard: {
      badge: "DESAIN",
      title: "Sistem Desain & UI/UX",
      description: "Figma, Wireframing, Prototyping interaktif, dan penataan komponen UI yang konsisten.",
      tag1: "ESTETIKA",
      tag2: "RESPONSIF & RAPI",
    },
    awardsCard: {
      badge: "PENCAPAIAN",
      title: "Pengalaman & Karya",
      description: "Fokus konsisten dalam pengembangan sistem web Laravel dan perancangan antarmuka pengguna.",
      items: ["★ Pengembang Web Laravel", "★ Perancang UI/UX Figma"],
    },
    learningCard: {
      badge: "FOKUS",
      title: "Sedang Dipelajari",
      description: "Arsitektur Laravel tingkat lanjut, optimasi kueri MySQL enterprise, dan prinsip UI/UX spatial.",
      status: "STUDI AKTIF",
      year: "2026",
    },
  },
};
