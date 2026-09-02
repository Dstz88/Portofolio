"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight, Code2, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Project } from "@/data/projects";
import { useFocusTrap } from "@/hooks/useFocusTrap";

export function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const images = project ? [project.cover, ...(project.gallery || [])] : [];
  const imageCount = images.length;
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [direction, setDirection] = useState<number>(0);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useFocusTrap(dialogRef, closeButtonRef, Boolean(project), onClose);

  const handlePrev = useCallback(() => {
    if (imageCount <= 1) return;
    setDirection(-1);
    setActiveImageIndex((prev) => (prev === 0 ? imageCount - 1 : prev - 1));
  }, [imageCount]);

  const handleNext = useCallback(() => {
    if (imageCount <= 1) return;
    setDirection(1);
    setActiveImageIndex((prev) => (prev === imageCount - 1 ? 0 : prev + 1));
  }, [imageCount]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    if (project) {
      const previousHtmlOverflow = document.documentElement.style.overflow;
      const previousBodyOverflow = document.body.style.overflow;
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      document.body.classList.add("project-modal-open");
      window.addEventListener("keydown", handleKeyDown);

      return () => {
        document.documentElement.style.overflow = previousHtmlOverflow;
        document.body.style.overflow = previousBodyOverflow;
        document.body.classList.remove("project-modal-open");
        window.removeEventListener("keydown", handleKeyDown);
      };
    }

    return undefined;
  }, [project, onClose, handlePrev, handleNext]);

  if (!project) return null;

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
      <div
        data-lenis-prevent
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        aria-describedby="project-modal-description"
        ref={dialogRef}
        tabIndex={-1}
        className="fixed inset-0 z-[60] flex items-center justify-center overflow-hidden p-0 sm:p-4 md:p-8"
      >
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
          className="relative z-10 flex h-[100dvh] max-h-[100dvh] w-full max-w-5xl flex-col overflow-hidden bg-[#0d0f17] sm:my-auto sm:h-auto sm:max-h-[90dvh] sm:rounded-2xl sm:border sm:border-white/10 sm:shadow-2xl"
        >
          <div className="flex min-h-16 shrink-0 items-center justify-between border-b border-white/10 bg-[#0d0f17] px-4 sm:px-6">
            <div className="min-w-0">
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#6EE7F9]">Detail Proyek</p>
              <p className="truncate text-sm font-semibold text-white sm:hidden">{project.title}</p>
            </div>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              className="flex min-h-11 min-w-11 items-center justify-center rounded-xl border border-white/10 text-gray-300 transition-colors hover:border-[#6EE7F9]/40 hover:text-white active:scale-[0.98]"
              aria-label="Tutup detail proyek"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="overscroll-contain overflow-y-auto p-4 sm:p-6 md:p-10 space-y-7 sm:space-y-8">
            {/* Gallery Viewport */}
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-white/10 bg-[#090b0c] sm:aspect-video sm:rounded-2xl group select-none">
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
                <div className="absolute left-3 top-3 z-30 rounded-lg border border-white/10 bg-black/70 px-2.5 py-1 font-mono text-[10px] text-gray-200 backdrop-blur-md sm:left-4 sm:top-4 sm:text-xs">
                  {activeImageIndex + 1} / {images.length}
                </div>
              )}

              {/* Prev / Next controls */}
              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="absolute left-2 top-1/2 z-30 flex min-h-11 min-w-11 -translate-y-1/2 items-center justify-center rounded-xl border border-white/10 bg-black/65 text-white backdrop-blur-md transition-colors hover:bg-black/80 hover:text-[#6EE7F9] sm:left-4 sm:rounded-full"
                    aria-label="Gambar proyek sebelumnya"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="absolute right-2 top-1/2 z-30 flex min-h-11 min-w-11 -translate-y-1/2 items-center justify-center rounded-xl border border-white/10 bg-black/65 text-white backdrop-blur-md transition-colors hover:bg-black/80 hover:text-[#6EE7F9] sm:right-4 sm:rounded-full"
                    aria-label="Gambar proyek berikutnya"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>

                  {/* Indicators */}
                  <div className="absolute bottom-3 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2 sm:bottom-4">
                    {images.map((img, idx) => (
                      <button
                        key={idx}
                        type="button"
                        aria-label={`Tampilkan gambar proyek ${idx + 1} dari ${images.length}`}
                        aria-current={idx === activeImageIndex ? "true" : undefined}
                        onClick={() => {
                          setDirection(idx > activeImageIndex ? 1 : -1);
                          setActiveImageIndex(idx);
                        }}
                        className="group flex min-h-11 min-w-11 items-center justify-center rounded-full"
                      >
                        <span
                          aria-hidden="true"
                          className={`h-1.5 rounded-full transition-all ${
                            idx === activeImageIndex
                              ? "w-6 bg-[#6EE7F9]"
                              : "w-2 bg-white/40 group-hover:bg-white/70"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Content Details */}
            <div className="space-y-6">
              {/* Header */}
              <div className="flex flex-col items-start gap-5 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between">
                <div>
                  <div className="mb-2 flex flex-wrap items-center gap-x-2 gap-y-1">
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
                  <h2 id="project-modal-title" className="text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl md:text-5xl">{project.title}</h2>
                </div>

                {/* Actions */}
                <div className="grid w-full grid-cols-2 gap-3 sm:flex sm:w-auto sm:items-center">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[#6EE7F9] px-4 py-3 text-xs font-semibold text-black transition-colors hover:bg-[#9aeeFA] active:scale-[0.98] sm:px-6"
                    >
                      <span>Lihat Proyek</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-11 items-center justify-center gap-2 rounded-xl border border-white/15 px-4 py-3 font-mono text-xs text-white transition-colors hover:border-[#6EE7F9]/40 hover:text-[#6EE7F9] active:scale-[0.98] sm:px-6"
                  >
                    <Code2 className="w-4 h-4" />
                    <span>Repository</span>
                  </a>
                </div>
              </div>

              {/* Description */}
              <p id="project-modal-description" className="text-gray-300 text-base leading-relaxed">
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
