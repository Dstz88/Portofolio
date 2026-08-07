"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "motion/react";
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
      className="relative z-10 min-h-screen flex flex-col justify-center px-6 sm:px-12 md:px-20 py-32 border-t border-white/5"
    >
      <div className="max-w-5xl mx-auto w-full relative z-10">
        {/* Section Label */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-[#6EE7F9]/30 backdrop-blur-md mb-8">
          <span className="w-2 h-2 rounded-full bg-[#6EE7F9]" />
          <span className="text-xs font-mono text-[#6EE7F9] tracking-widest uppercase font-semibold">
            FILOSOFI TENTANG SAYA
          </span>
        </div>

        {/* Headline with Word Reveal Animation */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight flex flex-wrap gap-x-[0.35em] gap-y-2 mb-8 text-white max-w-4xl">
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
          <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed font-light mb-10">
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
  progress: any;
  range: [number, number];
  isHighlight?: boolean;
}) {
  const opacity = useTransform(progress, range, [0.4, 1]);
  const color = useTransform(
    progress,
    range,
    isHighlight
      ? ["rgba(110, 231, 249, 0.4)", "#6EE7F9"]
      : ["rgba(255, 255, 255, 0.35)", "#ffffff"]
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
