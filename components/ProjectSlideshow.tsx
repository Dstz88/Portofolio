"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
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

  useEffect(() => {
    if (images.length <= 1 || isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [images.length, isPaused]);

  return (
    <div className="absolute inset-0 z-0">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={images[currentIndex]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, scale: isPaused ? 1.06 : 1 }}
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
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-30 flex items-center gap-1.5 pointer-events-none">
          {images.map((_, idx) => (
            <motion.span
              key={idx}
              initial={false}
              animate={{
                width: idx === currentIndex ? 16 : 6,
                backgroundColor: idx === currentIndex ? "#6EE7F9" : "rgba(255, 255, 255, 0.3)",
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="h-1 rounded-full block"
            />
          ))}
        </div>
      )}
    </div>
  );
}
