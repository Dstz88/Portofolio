"use client";

import { motion } from "motion/react";
import {
  Code2,
  Cpu,
  Layers,
  Sparkles,
  Award,
  Terminal,
  BrainCircuit,
  Wand2,
} from "lucide-react";

export default function BentoGrid() {
  return (
    <section className="py-32 px-6 md:px-12 bg-transparent relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#6EE7F9]" />
              <span className="text-xs font-mono text-[#6EE7F9] tracking-widest uppercase">
                KAPABILITAS & EKOSISTEM
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
              Arsitektur Bento Grid
            </h2>
          </div>
          <p className="text-gray-400 max-w-md text-sm leading-relaxed">
            Gambaran ringkas dari toolkit teknologi, metodologi alur kerja, dan kapabilitas kreatif saya.
          </p>
        </div>

        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Card 1: Selected Projects / Core Stack (Large 2x2) */}
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="md:col-span-2 lg:col-span-2 glass-card p-8 rounded-3xl relative overflow-hidden group flex flex-col justify-between min-h-[320px]"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#6EE7F9]/10 rounded-full blur-3xl group-hover:bg-[#6EE7F9]/20 transition-all duration-500" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <Code2 className="w-8 h-8 text-[#6EE7F9]" />
                <span className="text-xs font-mono text-gray-500 uppercase">STAK FRONTEND</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Arsitektur Web Modern
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                Membangun aplikasi web yang skalabel dan presisi menggunakan Next.js App Router, TypeScript, Motion, Tailwind CSS, dan HTML5 Canvas.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-8">
              {["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Motion", "Canvas 2D", "Lenis"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-gray-300 group-hover:border-[#6EE7F9]/40 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Card 2: AI Workflow */}
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="glass-card p-8 rounded-3xl relative overflow-hidden group flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-6">
              <BrainCircuit className="w-8 h-8 text-purple-400" />
              <span className="text-xs font-mono text-gray-500">ALUR KERJA</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Pengembangan Dipercepat AI</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Memanfaatkan subagen AI generatif, arsitektur prompt, dan alur pengkodean otomatis untuk meningkatkan kecepatan 10x lipat.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-purple-400">
              <span>EFISIENSI</span>
              <span>10x KECEPATAN</span>
            </div>
          </motion.div>

          {/* Card 3: Backend Stack */}
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="glass-card p-8 rounded-3xl relative overflow-hidden group flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-6">
              <Cpu className="w-8 h-8 text-emerald-400" />
              <span className="text-xs font-mono text-gray-500">BACKEND</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Backend & API</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Node.js, PostgreSQL, Supabase, GraphQL, fungsi Serverless Edge, dan API RESTful yang andal.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-emerald-400">
              <span>LATENSI</span>
              <span>&lt; 50ms</span>
            </div>
          </motion.div>

          {/* Card 4: Design Process */}
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="glass-card p-8 rounded-3xl relative overflow-hidden group flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-6">
              <Wand2 className="w-8 h-8 text-pink-400" />
              <span className="text-xs font-mono text-gray-500">DESAIN</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Sistem Desain</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Figma, Desain Motion, Token Komponen UI, estetika Dark Mode First, dan Mikro-interaksi.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-pink-400">
              <span>ESTETIKA</span>
              <span>AWWARDS</span>
            </div>
          </motion.div>

          {/* Card 5: Awards & Recognition (2 Cols) */}
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="md:col-span-2 glass-card p-8 rounded-3xl relative overflow-hidden group flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-6">
              <Award className="w-8 h-8 text-amber-400" />
              <span className="text-xs font-mono text-gray-500">PENGHARGAAN</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Penghargaan & Kompetisi</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Ditampilkan di galeri desain digital terkemuka, juara hackathon nasional, dan inovator sistem informasi.
              </p>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4 pt-4 border-t border-white/10 text-xs font-mono">
              <div className="text-amber-400">★ Kandidat Site of the Day</div>
              <div className="text-gray-400">★ Pemenang Hackathon 2025</div>
            </div>
          </motion.div>

          {/* Card 6: Currently Learning */}
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="glass-card p-8 rounded-3xl relative overflow-hidden group flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-6">
              <Layers className="w-8 h-8 text-[#6EE7F9]" />
              <span className="text-xs font-mono text-gray-500">FOKUS</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Sedang Dipelajari</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                WebGPU Shaders, Perinci Internal React Server Components, dan UI Spatial Computing.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#6EE7F9]">
              <span>STUDI AKTIF</span>
              <span>2026</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
