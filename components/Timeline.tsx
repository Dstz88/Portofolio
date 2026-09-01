"use client";

import { motion } from "motion/react";
import { Briefcase, GraduationCap, Code } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

const iconMap = {
  work: Briefcase,
  code: Code,
  education: GraduationCap,
};

export default function Timeline() {
  const { timeline } = portfolioData;

  return (
    <section id="experience" className="py-24 sm:py-32 px-5 sm:px-8 md:px-12 bg-transparent relative z-10 border-t border-white/10 overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#6EE7F9]" />
            <span className="text-xs font-mono text-[#6EE7F9] tracking-widest uppercase">
              PERJALANAN & PENCAPAIAN
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">
            Lini Masa Pengalaman
          </h2>
          <p className="text-gray-200 text-sm leading-relaxed">
            Jalur karir saya yang menggabungkan fondasi akademis dengan penguasaan rekayasa perangkat lunak praktis.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Center Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#6EE7F9] via-[#6EE7F9]/40 to-transparent -translate-x-1/2" />

          <div className="space-y-12">
            {timeline.map((event, index) => {
              const Icon = iconMap[event.iconType] || Code;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Icon Node */}
                  <div className="absolute left-4 md:left-1/2 top-0 -translate-x-1/2 z-10 w-10 h-10 rounded-full bg-[#050505] border-2 border-[#6EE7F9] flex items-center justify-center text-[#6EE7F9] shadow-[0_0_15px_rgba(110,231,249,0.3)]">
                    <Icon className="w-4 h-4" />
                  </div>

                  {/* Content Card */}
                  <div className="ml-12 md:ml-0 md:w-1/2 md:px-8">
                    <div className="relative overflow-hidden p-6 md:p-8 rounded-3xl border border-white/15 bg-gradient-to-br from-[#141b1e]/95 via-[#0c1215]/96 to-[#06090b]/98 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_18px_45px_rgba(0,8,12,0.28)] hover:border-[#6EE7F9]/45 transition-colors group">
                      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#6EE7F9]/35 to-transparent" />
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-mono text-[#6EE7F9] tracking-widest">
                          {event.year}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/8 border border-white/10 text-gray-200">
                          {event.type}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white group-hover:text-[#6EE7F9] transition-colors mb-1">
                        {event.title}
                      </h3>

                      <p className="text-xs font-mono text-gray-300 mb-4">{event.company}</p>

                      <p className="text-gray-200 text-sm leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

