"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform, useSpring } from "motion/react";
import { useSequence } from "@/hooks/useSequence";
import { useCanvas } from "@/hooks/useCanvas";

interface SequenceBackgroundProps {
  onProgress?: (progress: number) => void;
  onLoaded?: () => void;
}

const TOTAL_FRAMES = 192;

export default function SequenceBackground({ onProgress, onLoaded }: SequenceBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reducedMotion = useReducedMotion() ?? false;
  const { imagesRef, imagesLoaded, subscribeToFrameLoads } = useSequence(
    TOTAL_FRAMES,
    onProgress,
    onLoaded,
    reducedMotion
  );

  const { scrollYProgress } = useScroll();

  // Proportional section-based frame mapping across 192 total frames (0 to 191)
  // Hero (~15%), About (~10%), Stats (~8%), Projects (~22%), Skills (~12%), Timeline (~12%), Testimonials (~8%), CTA (~8%), Footer (~5%)
  const scrollRange = [0, 0.15, 0.25, 0.33, 0.55, 0.67, 0.79, 0.87, 0.95, 1.00];
  const frameRange = [0, 29, 48, 63, 105, 128, 151, 166, 181, 191];

  const rawFrameIndex = useTransform(scrollYProgress, scrollRange, frameRange);
  const frameIndex = useSpring(rawFrameIndex, { damping: 30, stiffness: 200, mass: 0.5 });

  // Dynamic cinematic overlay darkness animation: lighter at hero, deeper during dense text content
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.15, 0.35, 0.65, 0.85, 1.00], [0.35, 0.75, 0.82, 0.75, 0.80, 0.65]);

  useCanvas(
    canvasRef,
    imagesRef,
    frameIndex,
    TOTAL_FRAMES,
    imagesLoaded,
    subscribeToFrameLoads,
    reducedMotion
  );

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <canvas
        ref={canvasRef}
        role="img"
        aria-label="Global scrollytelling background sequence animation"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Dynamic linear overlay */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-[#050505]/30 to-[#050505] pointer-events-none z-[1]"
      />
      {/* Subtle vignette for edge contrast */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#050505_100%)] opacity-80 pointer-events-none z-[2]" />
    </div>
  );
}
