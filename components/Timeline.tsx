"use client";

import { motion } from "motion/react";
import { Briefcase, GraduationCap, Code } from "lucide-react";

const timelineEvents = [
  {
    year: "2025 - SEKARANG",
    title: "Senior Creative Developer & Spesialis UI",
    company: "Freelance & Studio Labs",
    description: "Merancang aplikasi web kelas atas, pengalaman scrollytelling, dan sistem desain kustom untuk klien teknologi global.",
    icon: Briefcase,
    type: "Pekerjaan",
  },
  {
    year: "2024 - 2025",
    title: "Lead Fullstack Engineering",
    company: "Agensi Digital Inovasi",
    description: "Memimpin tim pengembang front-end membuat aplikasi web Next.js, mengintegrasikan alur kerja AI, dan mengoptimalkan Web Vitals.",
    icon: Code,
    type: "Pekerjaan",
  },
  {
    year: "2023 - SEKARANG",
    title: "Mahasiswa Sistem Informasi",
    company: "Universitas Negeri",
    description: "Fokus pada Rekayasa Perangkat Lunak, Sistem Basis Data, Arsitektur Enterprise, dan Interaksi Manusia dan Komputer.",
    icon: GraduationCap,
    type: "Pendidikan",
  },
  {
    year: "2022 - 2024",
    title: "Intern Engineering Frontend & UI",
    company: "Lab Startup Teknologi",
    description: "Merancang komponen React interaktif, pustaka komponen styled, dan mengoptimalkan kecepatan rendering sisi klien.",
    icon: Code,
    type: "Magang",
  },
];

export default function Timeline() {
  return (
    <section id="experience" className="py-32 px-6 md:px-12 bg-transparent relative z-10 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#6EE7F9]" />
            <span className="text-xs font-mono text-[#6EE7F9] tracking-widest uppercase">
              PERJALANAN & PENCAPAIAN
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">
            Lini Masa Pengalaman
          </h2>
          <p className="text-gray-400 text-sm">
            Jalur karir saya yang menggabungkan fondasi akademis dengan penguasaan rekayasa perangkat lunak praktis.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Center Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#6EE7F9] via-blue-500 to-transparent -translate-x-1/2" />

          <div className="space-y-12">
            {timelineEvents.map((event, index) => {
              const Icon = event.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Icon Node */}
                  <div className="absolute left-4 md:left-1/2 top-0 -translate-x-1/2 z-10 w-10 h-10 rounded-full bg-[#050505] border-2 border-[#6EE7F9] flex items-center justify-center text-[#6EE7F9] shadow-[0_0_15px_rgba(110,231,249,0.3)]">
                    <Icon className="w-4 h-4" />
                  </div>

                  {/* Content Card */}
                  <div className="ml-12 md:ml-0 md:w-1/2 md:px-8">
                    <div className="glass-card p-6 md:p-8 rounded-3xl border border-white/10 hover:border-[#6EE7F9]/40 transition-colors group">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-mono text-[#6EE7F9] tracking-widest">
                          {event.year}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-gray-400">
                          {event.type}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white group-hover:text-[#6EE7F9] transition-colors mb-1">
                        {event.title}
                      </h3>

                      <p className="text-xs font-mono text-gray-500 mb-4">{event.company}</p>

                      <p className="text-gray-400 text-sm leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
