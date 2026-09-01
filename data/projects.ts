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
    description: "A skill exchange platform where users can offer and learn skills from each other through an interactive community-driven system.",
    longDescription: "SwapSkill is a community-driven web platform built to connect individuals wanting to teach and learn new skills. It features interactive user matching, skill session scheduling, rating & review systems, and personal skill portfolios.",
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
    description: "A modern Laravel-based web application with responsive UI and dashboard management.",
    longDescription: "CIREVA is a sleek web application powered by Laravel, offering dynamic administrative dashboards, responsive UI architecture, efficient data visualization, and structured database management.",
    status: "Completed",
    year: "2025",
    role: "Lead Web Developer",
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
    description: "A web-based inventory management system for motorcycle workshops including stock management, suppliers, transactions, and reporting.",
    longDescription: "Designed specifically for motorcycle workshops, Inventory Bengkel automates spare part stock tracking, alerts minimum stock thresholds, tracks supplier purchases, and generates real-time inventory flow reports.",
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
    description: "A coffee shop management system featuring cashier transactions, menu management, order processing, and sales reports.",
    longDescription: "Built for cafe and coffee shop operations, this POS web system streamlines table orders, menu and topping customization, kitchen order dispatching, cashier billing, and daily revenue reporting.",
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
    github: "https://github.com/Dstz88/Coffe-Shop-Manajement",
    demo: null,
    featured: true,
  },
];
