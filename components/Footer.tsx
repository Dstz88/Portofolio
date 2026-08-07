"use client";

import { ArrowUp, Code2, Mail, Globe, Share2 } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

const iconMap = {
  github: Code2,
  linkedin: Share2,
  instagram: Globe,
  email: Mail,
};

export default function Footer() {
  const { personal, contact, socials } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-transparent text-white pt-24 pb-12 px-6 md:px-12 border-t border-white/10 relative z-10">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Top Footer */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          <div>
            <span className="text-xs font-mono text-[#6EE7F9] tracking-widest uppercase block mb-2">
              PORTOFOLIO DEVELOPER KREATIF
            </span>
            <h3 className="text-4xl md:text-6xl font-black tracking-tighter">
              {personal.name}<span className="text-[#6EE7F9]">.DEV</span>
            </h3>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 flex-wrap">
            {socials.map((s) => {
              const Icon = iconMap[s.iconName] || Globe;
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-full glass-card hover:bg-[#6EE7F9] hover:text-black text-gray-300 transition-all flex items-center justify-center group"
                  aria-label={s.label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Links Column */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-b border-white/10 text-sm">
          <div>
            <span className="text-xs font-mono text-gray-500 block mb-4">NAVIGASI</span>
            <ul className="space-y-2">
              <li><a href="#hero" className="text-gray-400 hover:text-[#6EE7F9] transition-colors">Beranda</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-[#6EE7F9] transition-colors">Tentang</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-[#6EE7F9] transition-colors">Proyek</a></li>
              <li><a href="#experience" className="text-gray-400 hover:text-[#6EE7F9] transition-colors">Pengalaman</a></li>
            </ul>
          </div>

          <div>
            <span className="text-xs font-mono text-gray-500 block mb-4">TEKNOLOGI</span>
            <ul className="space-y-2 text-gray-400">
              <li>Laravel & PHP</li>
              <li>MySQL & REST API</li>
              <li>Tailwind CSS & Blade</li>
              <li>Figma & UI/UX</li>
            </ul>
          </div>

          <div>
            <span className="text-xs font-mono text-gray-500 block mb-4">LOKASI</span>
            <p className="text-gray-400 leading-relaxed">
              Berbasis di {contact.location} <br />
              {contact.workPreference}
            </p>
          </div>

          <div className="flex flex-col justify-between items-start">
            <span className="text-xs font-mono text-gray-500 block mb-4">KEMBALI KE ATAS</span>
            <button
              onClick={scrollToTop}
              className="p-4 rounded-full glass-panel hover:border-[#6EE7F9] text-white hover:text-[#6EE7F9] transition-all flex items-center justify-center group cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-xs font-mono text-gray-500 gap-4">
          <p>© 2026 {personal.brandTag}. DIRANCANG & DIBANGUN DENGAN SEPENUH HATI.</p>
          <p>PENGALAMAN PORTOFOLIO KELAS DUNIA.</p>
        </div>
      </div>
    </footer>
  );
}

