"use client";

import { motion, MotionValue } from "motion/react";
import { ArrowDownRight, Send } from "lucide-react";

interface StoryCTAProps {
  opacity: MotionValue<number>;
  scale: MotionValue<number>;
}

export default function StoryCTA({ opacity, scale }: StoryCTAProps) {
  return (
    <motion.div
      style={{ opacity, scale }}
      className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 sm:p-6 z-20"
    >
      <span className="text-[10px] sm:text-xs font-mono text-[#6EE7F9] uppercase tracking-widest block mb-3">
        03 / LANGKAH SELANJUTNYA
      </span>
      <h2 className="text-[clamp(2rem,5.5vw,5.5rem)] font-black tracking-tight text-white mb-6 sm:mb-8 max-w-3xl leading-tight px-2">
        Mari ciptakan sesuatu yang luar biasa bersama.
      </h2>

      <div className="flex flex-col sm:flex-row items-center gap-6 pointer-events-auto">
        <a
          href="#projects"
          className="px-8 py-4 rounded-full bg-[#6EE7F9] text-[#050505] font-semibold text-sm hover:scale-105 transition-all shadow-[0_0_30px_rgba(110,231,249,0.4)] flex items-center gap-2 group"
        >
          <span>Lihat Proyek</span>
          <ArrowDownRight className="w-4 h-4 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
        </a>

        <a
          href="#contact"
          className="px-8 py-4 rounded-full glass-panel hover:bg-white/10 text-white font-semibold text-sm hover:border-[#6EE7F9]/50 transition-all flex items-center gap-2 group"
        >
          <span>Hubungi Saya</span>
          <Send className="w-4 h-4 text-[#6EE7F9] group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </motion.div>
  );
}
