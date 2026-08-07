export interface SkillItem {
  name: string;
  level: number;
}

export interface SkillCategory {
  category: string;
  skills: SkillItem[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  demoUrl: string;
  githubUrl: string;
  gradient: string;
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

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export const portfolioData = {
  personal: {
    name: "Dhesta i.p",
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
      "Saya merancang dan merekayasa aplikasi web berbasis Laravel dan pengalaman UI/UX yang menggabungkan estetika modern, arsitektur data presisi, dan performa tinggi.",
    aboutPillars: [
      {
        number: "01 / DESAIN",
        title: "UI/UX & PROTOTYPING",
        description:
          "Merancang antarmuka presisi tinggi, wireframe interaktif, dan sistem desain yang mengutamakan pengalaman pengguna.",
      },
      {
        number: "02 / KODE",
        title: "LARAVEL & FRONTEND",
        description:
          "Menulis arsitektur Laravel yang bersih, efisien, dan terstruktur dengan Blade, Tailwind CSS, serta integrasi REST API.",
      },
      {
        number: "03 / BASIS DATA",
        title: "STRUKTUR & BASIS DATA",
        description:
          "Merancang skema MySQL yang optimal, hubungan tabel terstruktur, dan performa kueri database yang cepat.",
      },
    ],
  },

  contact: {
    email: "desxz48@gmail.com",
    availability: "Terbuka untuk Proyek Freelance & Peran Full-time",
    availabilityDesc:
      "Spesialisasi dalam Laravel Web Development, UI/UX Design, REST API, dan Sistem Informasi Enterprise.",
    location: "Indonesia",
    workPreference: "Bekerja Secara Global",
    ctaBadge: "MARI BERDISKUSI PROYEK",
    ctaHeading: "Mari ciptakan sesuatu yang",
    ctaHighlight: "luar biasa.",
    ctaDescription:
      "Punya proyek web Laravel atau butuh desain UI/UX berdampak tinggi? Hubungi saya dan mari wujudkan visi Anda menjadi kenyataan.",
    resumeUrl: "#",
  },

  socials: [
    { label: "GitHub", href: "https://github.com/Dstz88", iconName: "github" },
    { label: "LinkedIn", href: "https://linkedin.com", iconName: "linkedin" },
    { label: "Instagram", href: "https://www.instagram.com/dsstaa_ip?igsh=ajI4aG1jYXkzOXAy&utm_source=qr", iconName: "instagram" },
    { label: "Email", href: "mailto:desxz48@gmail.com", iconName: "email" },
  ] as SocialLink[],

  stats: [
    { value: 15, suffix: "+", label: "Proyek Selesai", desc: "Aplikasi Laravel & Desain UI/UX rilis" },
    { value: 3, suffix: "+", label: "Tahun Belajar & Berkarya", desc: "Eksplorasi web dev & UI/UX" },
    { value: 20, suffix: "+", label: "Konsep UI/UX Dibuat", desc: "Prototipe Figma & Wireframe" },
    { value: 100, suffix: "%", label: "Dedikasi & Semangat", desc: "Solusi digital presisi tanpa kompromi" },
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
      ],
    },
    {
      category: "Database",
      skills: [
        { name: "MySQL", level: 92 },
        { name: "Database Design", level: 88 },
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
        { name: "Composer", level: 90 },
        { name: "npm", level: 90 },
      ],
    },
  ] as SkillCategory[],

  projects: [
    {
      id: "01",
      title: "Sistem Informasi POS & Inventaris Bengkel ",
      category: "Laravel Web App / UI/UX Design",
      description: "Aplikasi manajemen kasir dan stok barang berbasis Laravel & MySQL dengan antarmuka Figma kustom, laporan real-time, dan REST API.",
      tech: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "REST API", "Figma"],
      demoUrl: "https://github.com/Dstz88/Bengkel-Manajement/tree/main",
      githubUrl: "https://github.com/Dstz88/Bengkel-Manajement",
      gradient: "from-cyan-500/20 via-blue-600/20 to-purple-600/20",
    },
    {
      id: "02",
      title: "Portal E-Commerce & Payment Gateway",
      category: "Fullstack Laravel / UI/UX",
      description: "Platform belanja online responsif yang diintegrasikan dengan Payment Gateway, antarmuka modern Blade & Tailwind CSS, serta dashboard admin interaktif.",
      tech: ["Laravel", "Blade", "MySQL", "JavaScript", "Tailwind CSS", "Figma"],
      demoUrl: "#",
      githubUrl: "https://github.com",
      gradient: "from-purple-500/20 via-pink-600/20 to-rose-600/20",
    },
    {
      id: "03",
      title: "Redesain UI/UX & Portal Layanan Publik",
      category: "UI/UX Design & Frontend",
      description: "Studi kasus alur pengalaman pengguna lengkap mulai dari wireframing, prototipe Figma interaktif, hingga implementasi front-end responsif berbasis Blade & Tailwind.",
      tech: ["Figma", "Wireframing", "Prototyping", "Design System", "Tailwind CSS", "HTML5"],
      demoUrl: "#",
      githubUrl: "https://github.com",
      gradient: "from-emerald-500/20 via-teal-600/20 to-cyan-600/20",
    },
    {
      id: "04",
      title: "Sistem Presensi SDM Berbasis QR Code",
      category: "Laravel Web App & REST API",
      description: "Sistem kepegawaian modern dengan fitur pemindaian QR Code, pelaporan absensi otomatis, ekspor PDF/Excel, dan RESTful API untuk integrasi mobile.",
      tech: ["Laravel", "PHP", "MySQL", "REST API", "JavaScript", "Postman"],
      demoUrl: "#",
      githubUrl: "https://github.com",
      gradient: "from-amber-500/20 via-orange-600/20 to-red-600/20",
    },
    {
      id: "05",
      title: "Design System & Component Library",
      category: "UI/UX Design & System",
      description: "Sistem desain modular komprehensif di Figma dan implementasi pustaka komponen UI Blade + Tailwind CSS untuk aplikasi web enterprise modern.",
      tech: ["Figma", "Design System", "Tailwind CSS", "Blade", "CSS3"],
      demoUrl: "#",
      githubUrl: "https://github.com",
      gradient: "from-[#6EE7F9]/20 via-indigo-600/20 to-blue-600/20",
    },
  ] as Project[],

  timeline: [
    {
      year: "2025 - SEKARANG",
      title: "Laravel Developer & UI/UX Specialist",
      company: "Freelance & Digital Projects",
      description: "Merancang aplikasi web Laravel terstruktur, RESTful API, dan prototipe UI/UX di Figma untuk berbagai kebutuhan klien.",
      type: "Pekerjaan",
      iconType: "work",
    },
    {
      year: "2024 - 2025",
      title: "Web Developer & UI Designer",
      company: "Project Studio",
      description: "Mengembangkan aplikasi web berbasis Laravel & MySQL, membuat wireframe dan prototipe antarmuka, serta integrasi sistem.",
      type: "Pekerjaan",
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
      title: "Junior Web Developer & UI Designer",
      company: "Tech Learning Lab",
      description: "Membuat komponen HTML5/CSS3/Tailwind, mengimplementasikan antarmuka Blade, dan mempelajari alur kerja Laravel.",
      type: "Magang",
      iconType: "code",
    },
  ] as TimelineEvent[],

  testimonials: [
    {
      quote: "Dhesta i.p menghadirkan hasil aplikasi Laravel dan UI/UX yang sangat terstruktur, bersih, dan sesuai kebutuhan bisnis kami.",
      author: "Elena Rostova",
      role: "Product Lead",
      company: "Apex Digital Labs",
    },
    {
      quote: "Bekerja bersama Dhesta i.p sangat lancar. Wireframe dan prototipe Figma yang dibuat sangat mendetail dan mudah diimplementasikan.",
      author: "Marcus Chen",
      role: "Creative Director",
      company: "Studio Vanguard",
    },
    {
      quote: "Penguasaan baik pada arsitektur Laravel, MySQL, dan UI/UX design. Mengubah ide sistem kompleks menjadi aplikasi web yang user-friendly.",
      author: "Sarah Jenkins",
      role: "Founder",
      company: "Lumina Web Solution",
    },
  ] as Testimonial[],

  bento: {
    badge: "KAPABILITAS & EKOSISTEM",
    title: "Arsitektur Bento Grid",
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
