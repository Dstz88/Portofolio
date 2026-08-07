"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Code2, ArrowUpRight } from "lucide-react";
import { projectsData, Project } from "@/data/projects";
import { ProjectSlideshow } from "@/components/ProjectSlideshow";
import { ProjectModal } from "@/components/ProjectModal";

const gradients = [
  "from-cyan-500/20 via-blue-600/20 to-purple-600/20",
  "from-purple-500/20 via-pink-600/20 to-rose-600/20",
  "from-emerald-500/20 via-teal-600/20 to-cyan-600/20",
  "from-amber-500/20 via-orange-600/20 to-red-600/20",
  "from-[#6EE7F9]/20 via-indigo-600/20 to-blue-600/20",
];

function ProjectCard({
  project,
  index,
  onSelect,
}: {
  project: (typeof projectsData)[0];
  index: number;
  onSelect: (project: Project) => void;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const gradient = gradients[index % gradients.length];

  return (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onSelect(project)}
      className="glass-panel p-8 md:p-12 rounded-3xl relative overflow-hidden group border border-white/10 hover:border-[#6EE7F9]/40 transition-all duration-500 cursor-pointer"
    >
      {/* Background Ambient Glow */}
      <div
        className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none blur-3xl`}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        {/* Left Content (5 Cols) */}
        <div className="lg:col-span-6 space-y-6">
          <div className="flex items-center justify-between">
            <span className="text-sm font-mono text-[#6EE7F9]">{project.id}</span>
            <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">
              {project.category}
            </span>
          </div>

          <h3 className="text-3xl md:text-5xl font-bold text-white group-hover:text-[#6EE7F9] transition-colors">
            {project.title}
          </h3>

          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {project.tech.map((item) => (
              <span
                key={item}
                className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-gray-300"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4 pt-4" onClick={(e) => e.stopPropagation()}>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-full bg-[#6EE7F9] text-black font-semibold text-xs hover:scale-105 transition-all flex items-center gap-2"
              >
                <span>Lihat Proyek</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            )}

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full glass-card hover:bg-white/10 text-white hover:text-[#6EE7F9] transition-all flex items-center gap-2 text-xs font-mono"
              aria-label="View Source Code"
            >
              <Code2 className="w-4 h-4" />
              {!project.demo && <span>Repository</span>}
            </a>
          </div>
        </div>

        {/* Right Mockup Graphic (6 Cols) */}
        <div className="lg:col-span-6 relative aspect-video rounded-2xl overflow-hidden glass-card border border-white/10 flex flex-col justify-between group-hover:scale-[1.02] transition-transform duration-500">
          {/* Automatic Project Slideshow */}
          <ProjectSlideshow project={project} isPaused={isHovered} />
          {/* Subtle Dark Overlay */}
          <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />

          {/* Window Header Decoration */}
          <div className="flex items-center justify-between p-4 relative z-20 bg-gradient-to-b from-black/70 via-black/40 to-transparent">
            <span className="px-2.5 py-1 rounded-md bg-white/10 border border-white/10 text-[10px] font-mono text-gray-200 uppercase tracking-wider backdrop-blur-md">
              {project.category}
            </span>
            <span className="px-2.5 py-1 rounded-md bg-white/10 border border-white/10 text-[10px] font-mono text-gray-200 backdrop-blur-md">
              {project.year}
            </span>
          </div>

          {/* Window Footer Decoration */}
          <div className="flex justify-between items-center p-4 relative z-20 bg-gradient-to-t from-black/70 via-black/40 to-transparent">
            <span className="px-2.5 py-1 rounded-md bg-white/10 border border-white/10 text-[10px] font-mono text-[#6EE7F9] uppercase tracking-wider backdrop-blur-md">
              STATUS: {project.status.toUpperCase()}
            </span>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-1.5 rounded-md bg-white/10 border border-white/10 text-gray-200 hover:text-[#6EE7F9] hover:bg-white/20 transition-all backdrop-blur-md flex items-center justify-center"
              aria-label="View Source Code"
            >
              <Code2 className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-32 px-6 md:px-12 bg-transparent relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#6EE7F9]" />
              <span className="text-xs font-mono text-[#6EE7F9] tracking-widest uppercase">
                KARYA PILIHAN
              </span>
            </div>
            <h2 className="text-4xl md:text-7xl font-bold tracking-tight text-white">
              Proyek Unggulan
            </h2>
          </div>
          <p className="text-gray-400 max-w-md text-sm leading-relaxed">
            Dirancang dengan rekayasa presisi, estetika visual tinggi, serta perhatian detail pada mikro-interaksi.
          </p>
        </div>

        {/* Projects Stack */}
        <div className="space-y-16">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onSelect={setSelectedProject}
            />
          ))}
        </div>
      </div>

      {/* Fullscreen Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}


