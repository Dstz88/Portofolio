"use client";

import { useCallback, useState } from "react";
import { motion } from "motion/react";
import { Sparkles, ArrowUpRight, Download, Send } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import PortfolioPreviewModal from "./PortfolioPreviewModal";

export default function Hero() {
  const { personal, contact } = portfolioData;
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
  const closePortfolio = useCallback(() => setIsPortfolioOpen(false), []);

  return (
    <section id="hero" className="relative z-10 min-h-screen w-full flex items-center justify-center text-center p-4 sm:p-6 select-none pt-32 sm:pt-40 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center justify-center"
      >
        <div className="px-4 py-1.5 rounded-full border border-[#6EE7F9]/30 bg-[#6EE7F9]/10 backdrop-blur-md mb-4 sm:mb-6 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#6EE7F9]" />
          <span className="text-[10px] sm:text-xs font-mono text-[#6EE7F9] tracking-widest uppercase">
            {personal.badgeText}
          </span>
        </div>

        <h1 className="text-[clamp(2.25rem,6vw,6.5rem)] font-extrabold tracking-tighter text-white mb-4 sm:mb-6 leading-none">
          {personal.headline}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#6EE7F9] to-cyan-400">
            {personal.name}
          </span>
        </h1>

        <p className="text-sm sm:text-lg md:text-xl text-gray-300 font-light tracking-wide max-w-xl px-2 mb-8">
          {personal.subtitle.map((item, idx) => (
            <span key={item}>
              {item}
              {idx < personal.subtitle.length - 1 && (
                <span className="text-[#6EE7F9]"> • </span>
              )}
            </span>
          ))}
        </p>

        <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-4 sm:gap-6 pointer-events-auto mb-12">
          <button
            type="button"
            onClick={() => setIsPortfolioOpen(true)}
            className="px-8 py-4 rounded-full bg-[#6EE7F9] text-[#050505] font-semibold text-sm hover:scale-105 transition-all shadow-[0_0_30px_rgba(110,231,249,0.4)] flex items-center gap-2 group"
          >
            <span>Lihat Portofolio</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>

          <a
            href={contact.resumeUrl}
            download="CV-Dhesta-Irham-Prasetya.pdf"
            className="px-8 py-4 rounded-full glass-panel hover:bg-white/10 text-white font-semibold text-sm hover:border-[#6EE7F9]/50 transition-all flex items-center gap-2 group"
          >
            <span>Unduh CV</span>
            <Download className="w-4 h-4 text-[#6EE7F9] group-hover:translate-y-1 transition-transform" />
          </a>

          <a
            href={contact?.whatsappUrl || "https://wa.me/6287825368112"}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full glass-panel hover:bg-white/10 text-white font-semibold text-sm hover:border-[#6EE7F9]/50 transition-all flex items-center gap-2 group"
          >
            <span>Hubungi Saya</span>
            <Send className="w-4 h-4 text-[#6EE7F9] group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="flex items-center gap-2 text-[10px] sm:text-xs font-mono text-gray-500 animate-bounce">
          <span>GULIR UNTUK MENJELAJAHI CERITA</span>
          <ArrowUpRight className="w-4 h-4 rotate-90 text-[#6EE7F9]" />
        </div>
      </motion.div>

      <PortfolioPreviewModal
        isOpen={isPortfolioOpen}
        onClose={closePortfolio}
        portfolioUrl={contact.portfolioUrl}
      />
    </section>
  );
}

