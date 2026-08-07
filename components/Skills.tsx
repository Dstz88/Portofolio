"use client";

import { motion } from "motion/react";
import {
  Layout,
  Server,
  Palette,
  Sparkles,
  Database,
  Wrench,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";

const iconMap: Record<string, any> = {
  Frontend: Layout,
  Backend: Server,
  Database: Database,
  "UI/UX": Palette,
  Tools: Wrench,
};

export default function Skills() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-32 px-6 md:px-12 bg-transparent relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#6EE7F9]" />
              <span className="text-xs font-mono text-[#6EE7F9] tracking-widest uppercase">
                TECHNICAL PROFICIENCY
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
              Skills & Expertise
            </h2>
          </div>
          <p className="text-gray-400 max-w-md text-sm leading-relaxed">
            Kumpulan keahlian teknis dalam pemrograman web Laravel, UI/UX design, basis data, dan alat pengembang.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((cat, idx) => {
            const Icon = iconMap[cat.category] || Sparkles;
            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="glass-panel p-8 rounded-3xl border border-white/10 hover:border-[#6EE7F9]/30 transition-all group"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-2xl bg-white/5 text-[#6EE7F9] group-hover:rotate-12 transition-transform duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{cat.category}</h3>
                </div>

                <div className="space-y-4">
                  {cat.skills.map((skill: { name: string; level: number }) => (
                    <div key={skill.name}>
                      <div className="flex justify-between text-xs font-mono mb-1.5">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-[#6EE7F9]">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-[#6EE7F9] to-blue-500 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
