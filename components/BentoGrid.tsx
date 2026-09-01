"use client";

import { motion } from "motion/react";
import {
  Code2,
  Cpu,
  Layers,
  Award,
  BrainCircuit,
  Wand2,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";

const cardSurface =
  "border border-white/15 bg-gradient-to-br from-[#141b1e]/96 via-[#0c1215]/96 to-[#06090b]/98 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_18px_45px_rgba(0,8,12,0.3)] transition-colors hover:border-[#6EE7F9]/40";

export default function BentoGrid() {
  const { bento } = portfolioData;

  return (
    <section id="bento" className="py-24 sm:py-32 px-5 sm:px-8 md:px-12 bg-transparent relative z-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col mb-12 sm:mb-16 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#6EE7F9]" />
              <span className="text-xs font-mono text-[#6EE7F9] tracking-widest uppercase">
                {bento.badge}
              </span>
            </div>
          </div>
          <p className="text-gray-200 max-w-2xl text-sm sm:text-base leading-relaxed">
            {bento.description}
          </p>
        </div>

        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Card 1: Selected Projects / Core Stack (Large 2x2) */}
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className={`md:col-span-2 lg:col-span-2 p-8 rounded-3xl relative overflow-hidden group flex flex-col justify-between min-h-[320px] ${cardSurface}`}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#6EE7F9]/10 rounded-full blur-3xl group-hover:bg-[#6EE7F9]/20 transition-all duration-500" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <Code2 className="w-8 h-8 text-[#6EE7F9]" />
                <span className="text-xs font-mono text-gray-300 uppercase">{bento.frontendCard.badge}</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                {bento.frontendCard.title}
              </h3>
              <p className="text-gray-200 text-sm leading-relaxed max-w-md">
                {bento.frontendCard.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-8">
              {bento.frontendCard.tags.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-gray-300 group-hover:border-[#6EE7F9]/40 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Card 2: AI Workflow */}
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className={`p-8 rounded-3xl relative overflow-hidden group flex flex-col justify-between ${cardSurface}`}
          >
            <div className="flex items-center justify-between mb-6">
              <BrainCircuit className="w-8 h-8 text-[#6EE7F9]" />
              <span className="text-xs font-mono text-gray-300">{bento.aiCard.badge}</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">{bento.aiCard.title}</h3>
              <p className="text-xs text-gray-200 leading-relaxed">
                {bento.aiCard.description}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#6EE7F9]">
              <span>{bento.aiCard.tag1}</span>
              <span>{bento.aiCard.tag2}</span>
            </div>
          </motion.div>

          {/* Card 3: Backend Stack */}
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className={`p-8 rounded-3xl relative overflow-hidden group flex flex-col justify-between ${cardSurface}`}
          >
            <div className="flex items-center justify-between mb-6">
              <Cpu className="w-8 h-8 text-emerald-400" />
              <span className="text-xs font-mono text-gray-300">{bento.backendCard.badge}</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">{bento.backendCard.title}</h3>
              <p className="text-xs text-gray-200 leading-relaxed">
                {bento.backendCard.description}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-emerald-400">
              <span>{bento.backendCard.tag1}</span>
              <span>{bento.backendCard.tag2}</span>
            </div>
          </motion.div>

          {/* Card 4: Design Process */}
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className={`p-8 rounded-3xl relative overflow-hidden group flex flex-col justify-between ${cardSurface}`}
          >
            <div className="flex items-center justify-between mb-6">
              <Wand2 className="w-8 h-8 text-pink-400" />
              <span className="text-xs font-mono text-gray-300">{bento.designCard.badge}</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">{bento.designCard.title}</h3>
              <p className="text-xs text-gray-200 leading-relaxed">
                {bento.designCard.description}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-pink-400">
              <span>{bento.designCard.tag1}</span>
              <span>{bento.designCard.tag2}</span>
            </div>
          </motion.div>

          {/* Card 5: Awards & Recognition (2 Cols) */}
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className={`md:col-span-2 p-8 rounded-3xl relative overflow-hidden group flex flex-col justify-between ${cardSurface}`}
          >
            <div className="flex items-center justify-between mb-6">
              <Award className="w-8 h-8 text-amber-400" />
              <span className="text-xs font-mono text-gray-300">{bento.awardsCard.badge}</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">{bento.awardsCard.title}</h3>
              <p className="text-sm text-gray-200 leading-relaxed">
                {bento.awardsCard.description}
              </p>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4 pt-4 border-t border-white/10 text-xs font-mono">
              {bento.awardsCard.items.map((item, idx) => (
                <div key={idx} className={idx === 0 ? "text-amber-400" : "text-gray-200"}>
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Card 6: Currently Learning */}
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className={`p-8 rounded-3xl relative overflow-hidden group flex flex-col justify-between ${cardSurface}`}
          >
            <div className="flex items-center justify-between mb-6">
              <Layers className="w-8 h-8 text-[#6EE7F9]" />
              <span className="text-xs font-mono text-gray-300">{bento.learningCard.badge}</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">{bento.learningCard.title}</h3>
              <p className="text-xs text-gray-200 leading-relaxed">
                {bento.learningCard.description}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#6EE7F9]">
              <span>{bento.learningCard.status}</span>
              <span>{bento.learningCard.year}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
