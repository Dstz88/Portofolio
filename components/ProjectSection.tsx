"use client";

import { motion } from "motion/react";
import { ExternalLink, Code2, ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: "01",
    title: "Website Portofolio Sinematik",
    category: "Scrollytelling / WebGL",
    description: "Pengalaman interaktif scrollytelling berkualitas tinggi dengan interpolasi sekuens kanvas, Lenis smooth scroll, dan Motion.",
    tech: ["Next.js", "Tailwind CSS", "Motion", "Canvas 2D", "Lenis"],
    demoUrl: "#",
    githubUrl: "https://github.com",
    gradient: "from-cyan-500/20 via-blue-600/20 to-purple-600/20",
  },
  {
    id: "02",
    title: "Sistem Dashboard Analitik AI",
    category: "Fullstack / Machine Learning",
    description: "Suite intelijen enterprise real-time dengan visualisasi data interaktif, model prediksi perilaku pengguna, dan kueri latensi ultra-cepat.",
    tech: ["React 19", "TypeScript", "Recharts", "Node.js", "PostgreSQL"],
    demoUrl: "#",
    githubUrl: "https://github.com",
    gradient: "from-purple-500/20 via-pink-600/20 to-rose-600/20",
  },
  {
    id: "03",
    title: "Platform Inventaris Generasi Baru",
    category: "Sistem Enterprise",
    description: "Software manajemen stok cloud pintar dengan pemindaian barcode, prediksi pemesanan ulang dinamis, dan sinkronisasi multi-gudang.",
    tech: ["Next.js", "Supabase", "Tailwind CSS", "GraphQL", "Zustand"],
    demoUrl: "#",
    githubUrl: "https://github.com",
    gradient: "from-emerald-500/20 via-teal-600/20 to-cyan-600/20",
  },
  {
    id: "04",
    title: "Asisten AI Otonom",
    category: "Agen AI / LLM",
    description: "Agen desktop dan web cerdas yang mampu mengeksekusi tugas bahasa alami, pembaruan kode otomatis, dan orkestrasi multi-alat.",
    tech: ["Python", "FastAPI", "Next.js", "LangChain", "Vector DB"],
    demoUrl: "#",
    githubUrl: "https://github.com",
    gradient: "from-amber-500/20 via-orange-600/20 to-red-600/20",
  },
  {
    id: "05",
    title: "Sistem Desain Minimalis",
    category: "UI Kit / Pustaka Komponen",
    description: "Kit komponen UI berkinerja tinggi yang disesuaikan untuk aplikasi web estetika gelap mewah dan platform SaaS.",
    tech: ["React", "Tailwind CSS", "Radix UI", "Storybook"],
    demoUrl: "#",
    githubUrl: "https://github.com",
    gradient: "from-[#6EE7F9]/20 via-indigo-600/20 to-blue-600/20",
  },
];

export default function ProjectSection() {
  return (
    <section id="projects" className="py-32 px-6 md:px-12 bg-transparent relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#6EE7F9]" />
              <span className="text-xs font-mono text-[#6EE7F9] tracking-widest uppercase">
                KARYA PILIHAN
              </span>
            </div>
            <h2 className="text-4xl md:text-7xl font-bold tracking-tight text-white">
              Proyek Unggulan
            </h2>
          </div>
          <p className="text-gray-400 max-w-md text-sm leading-relaxed">
            Dirancang dengan rekayasa presisi, estetika visual tinggi, serta perhatian detail pada mikro-interaksi.
          </p>
        </div>

        {/* Projects Stack */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-panel p-8 md:p-12 rounded-3xl relative overflow-hidden group border border-white/10 hover:border-[#6EE7F9]/40 transition-all duration-500"
            >
              {/* Background Ambient Glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none blur-3xl`}
              />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                {/* Left Content (5 Cols) */}
                <div className="lg:col-span-6 space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-mono text-[#6EE7F9]">{project.id}</span>
                    <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-5xl font-bold text-white group-hover:text-[#6EE7F9] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-gray-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 pt-4">
                    <a
                      href={project.demoUrl}
                      className="px-6 py-3 rounded-full bg-[#6EE7F9] text-black font-semibold text-xs hover:scale-105 transition-all flex items-center gap-2"
                    >
                      <span>Lihat Proyek</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 rounded-full glass-card hover:bg-white/10 text-white hover:text-[#6EE7F9] transition-all"
                      aria-label="View Source Code"
                    >
                      <Code2 className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Right Mockup Graphic (6 Cols) */}
                <div className="lg:col-span-6 relative aspect-video rounded-2xl overflow-hidden glass-card border border-white/10 flex items-center justify-center p-6 group-hover:scale-[1.02] transition-transform duration-500">
                  <div className="w-full h-full rounded-xl bg-gradient-to-br from-white/10 via-black to-white/5 p-6 flex flex-col justify-between relative overflow-hidden">
                    <div className="flex items-center justify-between">
                      <div className="flex gap-2">
                        <span className="w-3 h-3 rounded-full bg-red-500/80" />
                        <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                        <span className="w-3 h-3 rounded-full bg-green-500/80" />
                      </div>
                      <span className="text-[10px] font-mono text-gray-500">
                        {project.title.toLowerCase().replace(/\s+/g, "-")}.app
                      </span>
                    </div>

                    <div className="my-auto text-center space-y-2">
                      <div className="w-16 h-16 mx-auto rounded-2xl bg-[#6EE7F9]/10 border border-[#6EE7F9]/30 flex items-center justify-center text-[#6EE7F9]">
                        <ExternalLink className="w-8 h-8" />
                      </div>
                      <p className="text-xs font-mono text-gray-400">PRATINJAU MOCKUP INTERAKTIF</p>
                    </div>

                    <div className="flex justify-between items-center text-[10px] font-mono text-gray-500">
                      <span>STATUS: ONLINE</span>
                      <span>60 FPS</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
