"use client";

import { motion } from "motion/react";
import { Compass, Layout, Code2, Sliders, ArrowRight } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

const stepIcons = [Compass, Layout, Code2, Sliders];

export default function MyApproach() {
  const { approach } = portfolioData;

  return (
    <section
      id="approach"
      className="py-32 px-6 md:px-12 bg-transparent relative z-10 border-t border-white/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-3 mb-4 px-3.5 py-1.5 rounded-full bg-[#6EE7F9]/10 border border-[#6EE7F9]/20 shadow-[0_0_15px_rgba(110,231,249,0.1)]">
            <span className="w-2 h-2 rounded-full bg-[#6EE7F9] animate-pulse" />
            <span className="text-xs font-mono text-[#6EE7F9] tracking-widest uppercase font-semibold">
              MY APPROACH
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
            Building with purpose,<br className="hidden sm:inline" /> designing with intent.
          </h2>

          <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Setiap project dimulai dari memahami masalah, merancang pengalaman, lalu mengubahnya menjadi solusi digital yang terstruktur dan fungsional.
          </p>
        </div>

        {/* 4 Process Cards Grid / Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {approach.map((step, index) => {
            const Icon = stepIcons[index] || Compass;
            const isLast = index === approach.length - 1;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                whileHover={{ y: -6 }}
                className="group relative glass-panel p-8 rounded-3xl border border-white/10 hover:border-[#6EE7F9]/40 transition-all duration-300 flex flex-col justify-between hover:shadow-[0_0_30px_rgba(110,231,249,0.12)]"
              >
                {/* Top Subtle Radial Glow on Hover */}
                <div className="absolute top-0 right-0 w-36 h-36 bg-[#6EE7F9]/5 rounded-full blur-2xl group-hover:bg-[#6EE7F9]/20 transition-all duration-500 pointer-events-none" />

                <div>
                  {/* Card Header: Step Number & Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-3xl font-mono font-bold text-[#6EE7F9]/40 group-hover:text-[#6EE7F9] transition-colors duration-300">
                      {step.number}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 group-hover:text-[#6EE7F9] group-hover:border-[#6EE7F9]/40 group-hover:bg-[#6EE7F9]/10 transition-all duration-300 shadow-inner">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Step Title */}
                  <h3 className="text-xl font-bold text-white tracking-wide mb-3 group-hover:text-[#6EE7F9] transition-colors duration-300">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {step.description}
                  </p>
                </div>

                {/* Arrow Connector Indicator for Desktop */}
                {!isLast && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-white/20 group-hover:text-[#6EE7F9]/60 transition-colors duration-300">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
