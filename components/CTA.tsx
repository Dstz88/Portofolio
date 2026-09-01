"use client";

import { motion } from "motion/react";
import { Download, Send, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";
import { portfolioData } from "@/data/portfolio";

export default function CTA() {
  const { contact } = portfolioData;

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
      colors: ["#6EE7F9", "#FFFFFF", "#A8B0B7"],
    });
  };

  return (
    <section id="contact" className="py-24 sm:py-36 px-5 sm:px-8 md:px-12 bg-transparent relative z-10 overflow-hidden border-t border-white/10">
      {/* Dynamic Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-950/25 via-[#071013]/30 to-[#050505] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#6EE7F9]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#6EE7F9]/30 bg-[#6EE7F9]/10 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-[#6EE7F9]" />
            <span className="text-xs font-mono text-[#6EE7F9] tracking-widest uppercase">
              {contact.ctaBadge}
            </span>
          </div>

          <h2 className="text-[clamp(3rem,8vw,7rem)] font-black tracking-[-0.055em] text-white leading-[0.92]">
            {contact.ctaHeading}{" "}
            <span className="text-[#6EE7F9]">
              {contact.ctaHighlight}
            </span>
          </h2>

          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            {contact.ctaDescription}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
            <a
              href={contact.whatsappUrl || "https://wa.me/6287825368112"}
              target="_blank"
              rel="noopener noreferrer"
              onClick={triggerConfetti}
              className="w-full sm:w-auto px-10 py-5 rounded-full bg-[#6EE7F9] text-black font-bold text-base hover:scale-105 transition-all shadow-[0_0_40px_rgba(110,231,249,0.5)] flex items-center justify-center gap-3 group"
            >
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <span>Mulai Proyek</span>
            </a>

            <a
              href={contact.resumeUrl}
              download="CV-Dhesta-Irham-Prasetya.pdf"
              className="w-full sm:w-auto px-10 py-5 rounded-full glass-panel border border-white/10 hover:border-[#6EE7F9]/50 hover:bg-white/10 text-white font-bold text-base transition-all flex items-center justify-center gap-3 group"
            >
              <Download className="w-5 h-5 text-[#6EE7F9] group-hover:translate-y-1 transition-transform" />
              <span>Unduh CV</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

