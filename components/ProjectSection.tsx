"use client";

import { useCallback, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Code2, Maximize2 } from "lucide-react";
import { projectsData, type Project } from "@/data/projects";
import { ProjectSlideshow } from "@/components/ProjectSlideshow";
import { ProjectModal } from "@/components/ProjectModal";

function ProjectCard({ project, index, featured, onSelect }: {
  project: Project;
  index: number;
  featured: boolean;
  onSelect: (project: Project) => void;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay: reduceMotion ? 0 : index * 0.06 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-[#141b1e]/96 via-[#0c1215]/96 to-[#06090b]/98 p-5 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_18px_45px_rgba(0,8,12,0.3)] transition-colors hover:border-[#6EE7F9]/40 sm:p-6 ${featured ? "md:col-span-2" : ""}`}
    >
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#6EE7F9]/35 to-transparent" />
      <div className={featured ? "grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-center lg:gap-10" : "flex h-full flex-col gap-6"}>
        <div className={`relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b0d0e] ${featured ? "aspect-[4/3] sm:aspect-[16/10] lg:col-span-7" : "aspect-[16/10]"}`}>
          <ProjectSlideshow project={project} isPaused={isHovered} />
          <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#050505]/35 via-transparent to-transparent" />
          <button
            type="button"
            onClick={() => onSelect(project)}
            aria-label={`Buka detail proyek ${project.title}`}
            className="absolute bottom-3 right-3 z-20 flex min-h-11 min-w-11 items-center justify-center rounded-xl border border-white/15 bg-[#0b0d0e]/85 text-white backdrop-blur-md transition-colors hover:border-[#6EE7F9]/50 hover:text-[#6EE7F9] active:scale-[0.98] sm:bottom-4 sm:right-4"
          >
            <Maximize2 className="size-4" strokeWidth={1.8} />
          </button>
        </div>

        <div className={`flex flex-1 flex-col ${featured ? "lg:col-span-5" : ""}`}>
          <div className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[11px] uppercase tracking-[0.12em]">
            <span className="text-[#6EE7F9]">{project.id}</span>
            <span className="text-gray-300">{project.year}</span>
            <span className="text-gray-200">{project.category}</span>
          </div>

          <h3 className={`font-bold leading-[1.05] tracking-[-0.035em] text-white ${featured ? "text-3xl sm:text-4xl lg:text-5xl" : "text-2xl sm:text-3xl"}`}>
            {project.title}
          </h3>
          <p className="mt-3 font-mono text-xs text-[#6EE7F9]">{project.role}</p>
          <p className={`mt-4 text-sm leading-relaxed text-gray-200 ${featured ? "max-w-[60ch] sm:text-base" : "max-w-[55ch]"}`}>
            {project.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
            {project.tech.map((item) => (
              <span key={item} className="font-mono text-xs text-gray-200">{item}</span>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            {project.demo ? (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-[#6EE7F9] px-5 py-3 text-xs font-bold text-[#050505] transition-colors hover:bg-[#9aeeFA] active:scale-[0.98]"
              >
                <span>Lihat Demo</span>
                <ArrowUpRight className="size-4" strokeWidth={1.8} />
              </a>
            ) : (
              <button
                type="button"
                onClick={() => onSelect(project)}
                className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-[#6EE7F9] px-5 py-3 text-xs font-bold text-[#050505] transition-colors hover:bg-[#9aeeFA] active:scale-[0.98]"
              >
                <span>Lihat Detail</span>
                <ArrowUpRight className="size-4" strokeWidth={1.8} />
              </button>
            )}

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-4 py-3 font-mono text-xs text-gray-100 transition-colors hover:border-[#6EE7F9]/45 hover:bg-[#6EE7F9]/10 hover:text-[#6EE7F9] active:scale-[0.98]"
              aria-label={`Buka repository ${project.title}`}
            >
              <Code2 className="size-4" strokeWidth={1.8} />
              <span>Repository</span>
            </a>

          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function ProjectSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const closeProject = useCallback(() => setSelectedProject(null), []);

  return (
    <section id="projects" className="relative z-10 overflow-hidden border-t border-white/10 bg-transparent px-5 py-24 sm:px-8 sm:py-32 md:px-12">
      <div className="relative z-10 mx-auto max-w-7xl">
        <header className="mb-14 max-w-3xl sm:mb-20">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.16em] text-[#6EE7F9]">Karya Pilihan</p>
          <h2 className="text-4xl font-bold tracking-[-0.045em] text-white sm:text-5xl md:text-6xl">Proyek Unggulan</h2>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-gray-200 sm:text-base">
            Dirancang dengan rekayasa presisi, estetika visual tinggi, serta perhatian detail pada mikro-interaksi.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 md:gap-y-20">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} featured={index === 0} onSelect={setSelectedProject} />
          ))}
        </div>
      </div>

      <ProjectModal key={selectedProject?.id ?? "closed"} project={selectedProject} onClose={closeProject} />
    </section>
  );
}
