"use client";

import { useCallback, useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Download, Send } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import PortfolioPreviewModal from "./PortfolioPreviewModal";

export default function Hero() {
  const { personal, contact } = portfolioData;
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
  const closePortfolio = useCallback(() => setIsPortfolioOpen(false), []);

  return (
    <section id="hero" className="relative z-10 min-h-[100dvh] w-full flex items-center px-5 sm:px-8 md:px-12 pt-24 pb-14">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-7xl mx-auto flex flex-col items-start text-left"
      >
        <div className="mb-6 flex items-center gap-3">
          <span className="h-px w-8 bg-[#6EE7F9]" />
          <span className="text-[11px] sm:text-xs font-mono text-[#6EE7F9] tracking-[0.18em] uppercase">
            {personal.badgeText}
          </span>
        </div>

        <h1 className="max-w-5xl text-[clamp(3.25rem,8.4vw,7.75rem)] font-extrabold tracking-[-0.065em] text-white mb-6 leading-[0.88]">
          {personal.headline}{" "}
          <span className="text-[#6EE7F9]">
            {personal.name}
          </span>
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-gray-300 font-normal leading-relaxed max-w-2xl mb-9">
          {personal.subtitle.map((item, idx) => (
            <span key={item}>
              {item}
              {idx < personal.subtitle.length - 1 && (
                <span className="text-[#6EE7F9]"> • </span>
              )}
            </span>
          ))}
        </p>

        <div className="grid w-full sm:w-auto grid-cols-1 sm:grid-cols-3 gap-3 pointer-events-auto">
          <button
            type="button"
            onClick={() => setIsPortfolioOpen(true)}
            className="min-h-12 px-6 py-3.5 rounded-xl bg-[#6EE7F9] text-[#050505] font-semibold text-sm transition-colors hover:bg-[#9aeeFA] active:scale-[0.98] flex items-center justify-center gap-2 group whitespace-nowrap"
          >
            <span>Lihat Portofolio</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>

          <a
            href={contact.resumeUrl}
            download="CV-Dhesta-Irham-Prasetya.pdf"
            className="min-h-12 px-6 py-3.5 rounded-xl glass-panel hover:bg-white/10 text-white font-semibold text-sm hover:border-[#6EE7F9]/50 transition-all active:scale-[0.98] flex items-center justify-center gap-2 group whitespace-nowrap"
          >
            <span>Unduh CV</span>
            <Download className="w-4 h-4 text-[#6EE7F9] group-hover:translate-y-1 transition-transform" />
          </a>

          <a
            href={contact?.whatsappUrl || "https://wa.me/6287825368112"}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-12 px-6 py-3.5 rounded-xl glass-panel hover:bg-white/10 text-white font-semibold text-sm hover:border-[#6EE7F9]/50 transition-all active:scale-[0.98] flex items-center justify-center gap-2 group whitespace-nowrap"
          >
            <span>Hubungi Saya</span>
            <Send className="w-4 h-4 text-[#6EE7F9] group-hover:translate-x-1 transition-transform" />
          </a>
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

