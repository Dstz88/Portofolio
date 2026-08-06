"use client";

import { useRef } from "react";
import { useScroll, useTransform, useSpring } from "motion/react";
import { useSequence } from "@/hooks/useSequence";
import { useCanvas } from "@/hooks/useCanvas";

import SequenceCanvas from "./sequence/SequenceCanvas";
import HeroOverlay from "./sequence/HeroOverlay";
import StoryOne from "./sequence/StoryOne";
import StoryTwo from "./sequence/StoryTwo";
import StoryCTA from "./sequence/StoryCTA";

interface SequenceScrollProps {
  onProgress?: (progress: number) => void;
  onLoaded?: () => void;
}

const TOTAL_FRAMES = 192;
// 1800vh total container height (~9.3vh per frame) for hyper-smooth playback
const HERO_HEIGHT = "h-[1800vh]";

export default function SequenceScroll({ onProgress, onLoaded }: SequenceScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const { imagesRef, imagesLoaded } = useSequence(TOTAL_FRAMES, onProgress, onLoaded);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map scroll 0 -> 1 to frame 0 -> 191
  const rawFrameIndex = useTransform(scrollYProgress, [0, 1], [0, TOTAL_FRAMES - 1]);
  // Spring interpolation for smooth frame transitions without micro-jumps
  const frameIndex = useSpring(rawFrameIndex, { damping: 30, stiffness: 200, mass: 0.5 });

  // Story opacity & transform timelines
  const heroTextOpacity = useTransform(scrollYProgress, [0.00, 0.05, 0.15, 0.20], [1, 1, 1, 0]);
  const heroTextY = useTransform(scrollYProgress, [0.00, 0.05, 0.15, 0.20], [0, 0, -20, -40]);

  const story1Opacity = useTransform(scrollYProgress, [0.20, 0.25, 0.40, 0.45], [0, 1, 1, 0]);
  const story1X = useTransform(scrollYProgress, [0.20, 0.25, 0.40, 0.45], [-30, 0, 0, -30]);

  const story2Opacity = useTransform(scrollYProgress, [0.45, 0.50, 0.65, 0.70], [0, 1, 1, 0]);
  const story2X = useTransform(scrollYProgress, [0.45, 0.50, 0.65, 0.70], [30, 0, 0, 30]);

  const story3Opacity = useTransform(scrollYProgress, [0.70, 0.76, 0.94, 1.00], [0, 1, 1, 0]);
  const story3Scale = useTransform(scrollYProgress, [0.70, 0.76, 0.94, 1.00], [0.92, 1, 1, 0.96]);

  // Canvas render hook
  useCanvas(canvasRef, imagesRef, frameIndex, TOTAL_FRAMES, imagesLoaded);

  return (
    <div ref={containerRef} id="hero" className={`relative ${HERO_HEIGHT} w-full bg-[#050505]`}>
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Canvas Background */}
        <SequenceCanvas ref={canvasRef} />

        {/* Dynamic Story Overlays */}
        {imagesLoaded && (
          <>
            <HeroOverlay opacity={heroTextOpacity} y={heroTextY} />
            <StoryOne opacity={story1Opacity} x={story1X} />
            <StoryTwo opacity={story2Opacity} x={story2X} />
            <StoryCTA opacity={story3Opacity} scale={story3Scale} />
          </>
        )}
      </div>
    </div>
  );
}
