"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion, type MotionValue } from "motion/react";
import { ArrowUpRight } from "lucide-react";
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

  const words = (text || personal.aboutPhilosophy).split(" ");

  return (
    <section
      ref={targetRef}
      id="about"
      className="relative z-10 min-h-[80dvh] flex flex-col justify-center px-5 sm:px-8 md:px-12 py-24 sm:py-32 border-t border-white/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10 overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-[#141b1e]/94 via-[#0c1215]/95 to-[#06090b]/98 p-6 sm:p-10 md:p-14 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_20px_55px_rgba(0,8,12,0.3)]">
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#6EE7F9]/35 to-transparent" />
        {/* Section Label */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-[#6EE7F9]/30 backdrop-blur-md mb-8">
          <span className="w-2 h-2 rounded-full bg-[#6EE7F9]" />
          <span className="text-xs font-mono text-[#6EE7F9] tracking-widest uppercase font-semibold">
            FILOSOFI TENTANG SAYA
          </span>
        </div>

        {/* Headline with Word Reveal Animation */}
        <h2 className="text-[clamp(2.25rem,5.2vw,5rem)] font-bold tracking-[-0.045em] leading-[1.02] flex flex-wrap gap-x-[0.28em] gap-y-2 mb-8 text-white max-w-5xl">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            const isHighlight = word.toLowerCase().replace(/[^a-z]/g, "") === "yang";

            return (
              <Word
                key={i}
                word={word}
                progress={scrollYProgress}
                range={[start, end]}
                isHighlight={isHighlight}
              />
            );
          })}
        </h2>

        {/* Supporting Text */}
        {personal.aboutSupportingText && (
          <p className="text-gray-100 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed mb-10">
            {personal.aboutSupportingText}
          </p>
        )}

        {/* Action Button */}
        <div>
          <a
            href="#bento"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-[#6EE7F9]/40 bg-[#6EE7F9]/5 hover:bg-[#6EE7F9]/10 text-[#6EE7F9] font-mono text-xs font-bold tracking-widest uppercase transition-all transform hover:-translate-y-0.5 shadow-[0_0_20px_rgba(110,231,249,0.15)] group"
          >
            <span>LEBIH LANJUT TENTANG SAYA</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Word({
  word,
  progress,
  range,
  isHighlight,
}: {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
  isHighlight?: boolean;
}) {
  const opacity = useTransform(progress, range, [0.68, 1]);
  const color = useTransform(
    progress,
    range,
    isHighlight
      ? ["rgba(110, 231, 249, 0.7)", "#6EE7F9"]
      : ["rgba(255, 255, 255, 0.65)", "#ffffff"]
  );
  const glow = useTransform(
    progress,
    range,
    isHighlight
      ? ["none", "0 0 20px rgba(110,231,249,0.7)"]
      : ["none", "0 0 20px rgba(110,231,249,0.3)"]
  );

  return (
    <motion.span
      style={{ opacity, color, textShadow: glow }}
      className="inline-block transition-colors duration-150"
    >
      {word}
    </motion.span>
  );
}
