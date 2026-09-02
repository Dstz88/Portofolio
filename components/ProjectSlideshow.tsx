"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { Project } from "@/data/projects";

export function ProjectSlideshow({
  project,
  isPaused = false,
}: {
  project: Project;
  isPaused?: boolean;
}) {
  const images = [
    project.cover,
    ...(project.gallery || []).slice(0, 2),
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFocusWithin, setIsFocusWithin] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (images.length <= 1 || isPaused || isFocusWithin || reduceMotion) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [images.length, isPaused, isFocusWithin, reduceMotion]);

  return (
    <div
      className="absolute inset-0 z-0"
      onFocusCapture={() => setIsFocusWithin(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsFocusWithin(false);
      }}
    >
      <AnimatePresence mode="popLayout">
        <motion.div
          key={images[currentIndex]}
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1, scale: reduceMotion ? 1 : isPaused ? 1.035 : 1 }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 0.6 },
            scale: { duration: 0.7, ease: "easeOut" },
          }}
          className="absolute inset-0"
        >
          <Image
            src={images[currentIndex]}
            alt={`${project.title} preview slide ${currentIndex + 1}`}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-top"
          />
        </motion.div>
      </AnimatePresence>

      {/* Progress Indicator */}
      {images.length > 1 && (
        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 z-30 flex items-center">
          {images.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Tampilkan slide ${idx + 1} dari ${images.length} untuk ${project.title}`}
              aria-current={idx === currentIndex ? "true" : undefined}
              className="flex min-h-11 min-w-11 items-center justify-center rounded-full"
            >
              <motion.span
                aria-hidden="true"
                initial={false}
                animate={{
                  width: idx === currentIndex ? 16 : 6,
                  backgroundColor: idx === currentIndex ? "#6EE7F9" : "rgba(255, 255, 255, 0.3)",
                }}
                transition={{ duration: reduceMotion ? 0 : 0.3, ease: "easeInOut" }}
                className="block h-1 rounded-full"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
