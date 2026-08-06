"use client";

import { motion, MotionValue } from "motion/react";
import { Sparkles, ArrowDownRight } from "lucide-react";

interface HeroOverlayProps {
  opacity: MotionValue<number>;
  y: MotionValue<number>;
}

export default function HeroOverlay({ opacity, y }: HeroOverlayProps) {
  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 sm:p-6 z-10 select-none pointer-events-none"
    >
      <div className="px-4 py-1.5 rounded-full border border-[#6EE7F9]/30 bg-[#6EE7F9]/10 backdrop-blur-md mb-4 sm:mb-6 flex items-center gap-2">
        <Sparkles className="w-4 h-4 text-[#6EE7F9]" />
        <span className="text-[10px] sm:text-xs font-mono text-[#6EE7F9] tracking-widest uppercase">
          PORTFOLIO 2026
        </span>
      </div>

      <h1 className="text-[clamp(2.25rem,6vw,6.5rem)] font-extrabold tracking-tighter text-white mb-4 sm:mb-6 leading-none">
        Halo, Saya <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#6EE7F9] to-cyan-400">Dhesta i.p</span>
      </h1>

      <p className="text-sm sm:text-lg md:text-xl text-gray-300 font-light tracking-wide max-w-xl px-2">
        Developer Kreatif <span className="text-[#6EE7F9]">•</span> UI Engineer <span className="text-[#6EE7F9]">•</span> Mahasiswa Sistem Informasi
      </p>

      <div className="mt-8 sm:mt-12 flex items-center gap-2 text-[10px] sm:text-xs font-mono text-gray-500 animate-bounce">
        <span>GULIR UNTUK MENJELAJAHI CERITA</span>
        <ArrowDownRight className="w-4 h-4 text-[#6EE7F9]" />
      </div>
    </motion.div>
  );
}
