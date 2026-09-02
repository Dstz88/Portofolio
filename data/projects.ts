export interface Project {
  id: string;
  title: string;
  slug: string;
  category: string;
  description: string;
  longDescription: string;
  status: string;
  year: string;
  role: string;
  cover: string;
  gallery: string[];
  tech: string[];
  features: string[];
  github: string;
  demo: string | null;
  featured: boolean;
}

export const projectsData: Project[] = [
  {
    id: "01",
    title: "Rumah Bunga Cirebon",
    slug: "rumah-bunga-cirebon",
    category: "Digital Floral Catalog",
    description: "Katalog bunga digital responsif untuk menampilkan koleksi produk, membantu pelanggan menemukan rangkaian yang sesuai, dan mengarahkan pemesanan langsung melalui WhatsApp.",
    longDescription: "Website katalog digital untuk Rumah Bunga Cirebon yang dibangun dengan Next.js App Router. Pengunjung dapat menjelajahi kategori bunga, melihat detail produk, menemukan produk terkait, dan mengirim format pemesanan langsung melalui WhatsApp.",
    status: "Completed",
    year: "2026",
    role: "Web Developer & UI Designer",
    cover: "/projects/rumah-bunga-cirebon/cover.png",
    gallery: [
      "/projects/rumah-bunga-cirebon/gallery/01.png",
      "/projects/rumah-bunga-cirebon/gallery/02.png",
      "/projects/rumah-bunga-cirebon/gallery/03.png",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    features: [
      "Katalog produk dengan filter kategori",
      "Halaman detail produk dan rekomendasi terkait",
      "Pemesanan produk langsung melalui WhatsApp",
      "Data produk terpusat dengan TypeScript",
      "Antarmuka responsif untuk desktop dan mobile",
    ],
    github: "https://github.com/Dstz88/rumah-bunga-cirebon-web",
    demo: "https://rumah-bunga-cirebon-web.vercel.app/",
    featured: true,
  },
  {
    id: "02",
    title: "SwapSkill",
    slug: "swapskill",
    category: "Web Platform",
    description: "Platform pertukaran keterampilan yang memungkinkan pengguna menawarkan keahlian dan belajar satu sama lain melalui sistem komunitas interaktif.",
    longDescription: "SwapSkill adalah platform web berbasis komunitas yang menghubungkan orang-orang untuk saling mengajar dan mempelajari keterampilan baru. Platform ini menyediakan pencocokan pengguna interaktif, penjadwalan sesi belajar, sistem penilaian dan ulasan, serta portofolio keterampilan pribadi.",
    status: "Completed",
    year: "2025",
    role: "Fullstack Developer & UI Designer",
    cover: "/projects/swapskill/cover.png",
    gallery: [
      "/projects/swapskill/gallery/01.png",
      "/projects/swapskill/gallery/02.png",
      "/projects/swapskill/gallery/03.png",
    ],
    tech: ["Laravel", "Blade", "MySQL", "Tailwind CSS", "JavaScript"],
    features: [
      "Skill Exchange Matching System",
      "Interactive Community System",
      "Session Scheduling & Booking",
      "Rating & Review System",
      "User Skill Portfolio Management",
    ],
    github: "https://github.com/Dstz88/SwapSkill",
    demo: null,
    featured: true,
  },
  {
    id: "03",
    title: "CIREVA",
    slug: "cireva",
    category: "Web Application",
    description: "Aplikasi web modern berbasis Laravel dengan antarmuka responsif dan sistem pengelolaan dasbor.",
    longDescription: "CIREVA adalah aplikasi web modern berbasis Laravel yang dilengkapi dasbor administrasi dinamis, arsitektur antarmuka responsif, visualisasi data yang efisien, dan pengelolaan basis data terstruktur.",
    status: "Completed",
    year: "2025",
    role: "UI/UX Designer",
    cover: "/projects/cireva/cover.png",
    gallery: [
      "/projects/cireva/gallery/01.png",
      "/projects/cireva/gallery/02.png",
      "/projects/cireva/gallery/03.png",
    ],
    tech: ["Laravel", "Blade", "Tailwind CSS", "MySQL"],
    features: [
      "Responsive UI & Mobile Optimization",
      "Dashboard Management Suite",
      "Role-Based Access Control",
      "Data Analytics & Reporting",
      "Clean Modular Architecture",
    ],
    github: "https://github.com/Dstz88/CIREVA",
    demo: null,
    featured: true,
  },
  {
    id: "04",
    title: "Inventory Bengkel",
    slug: "inventory-bengkel",
    category: "Inventory Management System",
    description: "Sistem manajemen inventaris berbasis web untuk bengkel sepeda motor yang mencakup pengelolaan stok, pemasok, transaksi, dan laporan.",
    longDescription: "Dirancang khusus untuk bengkel sepeda motor, Inventory Bengkel mengotomatiskan pencatatan stok suku cadang, memberikan peringatan saat stok mencapai batas minimum, mencatat pembelian dari pemasok, dan menghasilkan laporan pergerakan inventaris secara langsung.",
    status: "Completed",
    year: "2024",
    role: "Fullstack Developer",
    cover: "/projects/inventory-bengkel/cover.png",
    gallery: [
      "/projects/inventory-bengkel/gallery/01.png",
      "/projects/inventory-bengkel/gallery/02.png",
      "/projects/inventory-bengkel/gallery/03.png",
    ],
    tech: ["Laravel", "Blade", "MySQL", "Tailwind CSS"],
    features: [
      "Spare Part Stock Tracking",
      "Supplier & Procurement Management",
      "Automated Minimum Stock Alerts",
      "Inbound & Outbound Inventory Logs",
      "Financial & Stock Reports",
    ],
    github: "https://github.com/Dstz88/inventory-bengkel",
    demo: null,
    featured: true,
  },
  {
    id: "05",
    title: "Coffee Shop Management",
    slug: "coffee-shop-management",
    category: "Point of Sale System",
    description: "Sistem manajemen kedai kopi yang mencakup transaksi kasir, pengelolaan menu, pemrosesan pesanan, dan laporan penjualan.",
    longDescription: "Dibangun untuk operasional kafe dan kedai kopi, sistem POS berbasis web ini menyederhanakan pesanan meja, pengaturan menu dan topping, pengiriman pesanan ke dapur, pembayaran melalui kasir, serta pelaporan pendapatan harian.",
    status: "Completed",
    year: "2024",
    role: "Fullstack Developer",
    cover: "/projects/coffee-shop-management/cover.png",
    gallery: [
      "/projects/coffee-shop-management/gallery/01.png",
      "/projects/coffee-shop-management/gallery/02.png",
      "/projects/coffee-shop-management/gallery/03.png",
    ],
    tech: ["Laravel", "Blade", "MySQL", "Bootstrap"],
    features: [
      "Cashier POS & Bill Printing",
      "Dynamic Menu & Topping Management",
      "Order Processing Pipeline",
      "Daily & Monthly Sales Reports",
      "Table & Takeaway Order Modes",
    ],
    github: "https://github.com/Dstz88/Coffe-POS",
    demo: null,
    featured: true,
  },
];
