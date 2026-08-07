"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight, Code2, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Project } from "@/data/projects";

export function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const images = project ? [project.cover, ...(project.gallery || [])] : [];
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [direction, setDirection] = useState<number>(0);

  useEffect(() => {
    setActiveImageIndex(0);
    setDirection(0);
  }, [project]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, images.length]);

  if (!project) return null;

  const handlePrev = () => {
    if (images.length <= 1) return;
    setDirection(-1);
    setActiveImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    if (images.length <= 1) return;
    setDirection(1);
    setActiveImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : dir < 0 ? -300 : 0,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 300 : dir > 0 ? -300 : 0,
      opacity: 0,
    }),
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-5xl bg-[#0d0f17] border border-white/10 rounded-3xl overflow-hidden shadow-2xl z-10 my-auto max-h-[90vh] flex flex-col"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-white/10 border border-white/10 text-gray-300 hover:text-white hover:bg-white/20 transition-all backdrop-blur-md"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="overflow-y-auto p-6 md:p-10 space-y-8">
            {/* Gallery Viewport */}
            <div className="relative aspect-video rounded-2xl overflow-hidden glass-card border border-white/10 group select-none">
              <AnimatePresence initial={false} custom={direction} mode="popLayout">
                <motion.div
                  key={images[activeImageIndex]}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={(_, info) => {
                    const swipeThreshold = 50;
                    if (info.offset.x < -swipeThreshold) {
                      handleNext();
                    } else if (info.offset.x > swipeThreshold) {
                      handlePrev();
                    }
                  }}
                  className="absolute inset-0 cursor-grab active:cursor-grabbing"
                >
                  <Image
                    src={images[activeImageIndex]}
                    alt={`${project.title} gallery preview ${activeImageIndex + 1}`}
                    fill
                    sizes="(max-width: 1280px) 100vw, 1200px"
                    className="object-cover object-top pointer-events-none"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Top Right Counter */}
              {images.length > 0 && (
                <div className="absolute top-4 left-4 z-30 px-3 py-1 rounded-full bg-black/60 border border-white/10 text-xs font-mono text-gray-200 backdrop-blur-md">
                  {activeImageIndex + 1} / {images.length}
                </div>
              )}

              {/* Prev / Next controls */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={handlePrev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/50 border border-white/10 text-white hover:bg-black/80 hover:text-[#6EE7F9] transition-all backdrop-blur-md"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/50 border border-white/10 text-white hover:bg-black/80 hover:text-[#6EE7F9] transition-all backdrop-blur-md"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>

                  {/* Indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
                    {images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setDirection(idx > activeImageIndex ? 1 : -1);
                          setActiveImageIndex(idx);
                        }}
                        className={`h-1.5 rounded-full transition-all ${
                          idx === activeImageIndex
                            ? "w-6 bg-[#6EE7F9]"
                            : "w-2 bg-white/40 hover:bg-white/70"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Content Details */}
            <div className="space-y-6">
              {/* Header */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-mono text-[#6EE7F9] uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span className="text-gray-500">•</span>
                    <span className="text-xs font-mono text-gray-400">{project.year}</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-xs font-mono text-[#6EE7F9] uppercase">
                      {project.status}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold text-white">{project.title}</h2>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3">
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
                    className="px-6 py-3 rounded-full glass-card hover:bg-white/10 text-white hover:text-[#6EE7F9] transition-all flex items-center gap-2 text-xs font-mono border border-white/10"
                  >
                    <Code2 className="w-4 h-4" />
                    <span>Repository</span>
                  </a>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-base leading-relaxed">
                {project.longDescription || project.description}
              </p>

              {/* Features */}
              {project.features && project.features.length > 0 && (
                <div className="space-y-3 pt-2">
                  <h4 className="text-sm font-mono text-[#6EE7F9] uppercase tracking-wider">
                    Fitur Utama
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {project.features.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2.5 text-sm text-gray-300 bg-white/5 p-3 rounded-xl border border-white/5"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#6EE7F9] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tech Stack */}
              <div className="space-y-3 pt-2">
                <h4 className="text-sm font-mono text-[#6EE7F9] uppercase tracking-wider">
                  Teknologi
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-gray-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
