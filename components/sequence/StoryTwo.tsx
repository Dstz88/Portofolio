"use client";

import { motion, MotionValue } from "motion/react";

interface StoryTwoProps {
  opacity: MotionValue<number>;
  x: MotionValue<number>;
}

export default function StoryTwo({ opacity, x }: StoryTwoProps) {
  return (
    <motion.div
      style={{ opacity, x }}
      className="absolute right-6 md:right-20 left-6 md:left-auto max-w-xl text-right z-10 select-none pointer-events-none"
    >
      <span className="text-[10px] sm:text-xs font-mono text-[#6EE7F9] uppercase tracking-widest block mb-2">
        02 / PRINSIP REKAYASA
      </span>
      <h2 className="text-[clamp(1.75rem,4.5vw,4.5rem)] font-bold tracking-tight text-white leading-tight mb-3">
        Saya mengubah ide menjadi produk.
      </h2>
      <div className="text-xl sm:text-3xl font-light text-[#6EE7F9] space-y-1">
        <p>Indah.</p>
        <p className="text-white">Cepat.</p>
        <p className="text-cyan-400 font-semibold">Interaktif.</p>
      </div>
    </motion.div>
  );
}
