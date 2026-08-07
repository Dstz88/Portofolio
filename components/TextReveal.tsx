"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "motion/react";
import { portfolioData } from "@/data/portfolio";

interface TextRevealProps {
  text: string;
}

export default function TextReveal({ text }: TextRevealProps) {
  const targetRef = useRef<HTMLDivElement>(null);
  const { personal } = portfolioData;

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 0.8", "end 0.25"],
  });

  const words = text.split(" ");

  return (
    <section
      ref={targetRef}
      id="about"
      className="relative z-10 min-h-screen flex flex-col justify-start px-4 sm:px-6 md:px-16 pt-36 md:pt-44 pb-20 border-t border-white/10"
    >
      <div className="max-w-5xl mx-auto w-full glass-panel p-6 sm:p-10 md:p-12 rounded-3xl bg-[#050505]/95 backdrop-blur-2xl border border-white/10 shadow-[0_30px_70px_rgba(0,0,0,0.95)] relative overflow-hidden mt-8 md:mt-12">
        {/* Glow accent */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-[#6EE7F9]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex items-center gap-3 mb-6 relative z-10">
          <span className="w-2 h-2 rounded-full bg-[#6EE7F9]" />
          <span className="text-xs font-mono text-[#6EE7F9] tracking-widest uppercase font-semibold">
            FILOSOFI TENTANG SAYA
          </span>
        </div>

        <h2 className="text-xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-relaxed flex flex-wrap gap-x-[0.35em] gap-y-2 relative z-10">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;

            return (
              <Word
                key={i}
                word={word}
                progress={scrollYProgress}
                range={[start, end]}
              />
            );
          })}
        </h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-white/10 text-gray-400 relative z-10">
          {personal.aboutPillars.map((pillar) => (
            <div key={pillar.number} className="glass-card p-5 rounded-2xl border border-white/5 bg-white/[0.02]">
              <span className="text-xs font-mono text-[#6EE7F9] block mb-2 font-bold">{pillar.number}</span>
              <p className="text-xs md:text-sm leading-relaxed text-gray-300">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Word({
  word,
  progress,
  range,
}: {
  word: string;
  progress: any;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.5, 1]);
  const color = useTransform(progress, range, ["rgba(255, 255, 255, 0.38)", "#ffffff"]);
  const glow = useTransform(progress, range, ["none", "0 0 18px rgba(110,231,249,0.4)"]);

  return (
    <motion.span
      style={{ opacity, color, textShadow: glow }}
      className="inline-block transition-colors duration-150"
    >
      {word}
    </motion.span>
  );
}
