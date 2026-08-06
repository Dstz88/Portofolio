"use client";

import { motion, MotionValue } from "motion/react";

interface StoryOneProps {
  opacity: MotionValue<number>;
  x: MotionValue<number>;
}

export default function StoryOne({ opacity, x }: StoryOneProps) {
  return (
    <motion.div
      style={{ opacity, x }}
      className="absolute left-6 md:left-20 right-6 md:right-auto max-w-xl z-10 select-none pointer-events-none"
    >
      <span className="text-[10px] sm:text-xs font-mono text-[#6EE7F9] uppercase tracking-widest block mb-2">
        01 / VISI KREATIF
      </span>
      <h2 className="text-[clamp(1.75rem,4.5vw,4.5rem)] font-bold tracking-tight text-white leading-tight mb-3">
        Saya tidak sekadar membuat website.
      </h2>
      <p className="text-base sm:text-xl md:text-2xl text-gray-400 font-light">
        Saya merancang pengalaman digital yang memukau, interaktif, dan berdampak.
      </p>
    </motion.div>
  );
}
