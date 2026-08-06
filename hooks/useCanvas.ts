"use client";

import { useRef, useCallback, useEffect } from "react";
import { MotionValue, useMotionValueEvent } from "motion/react";

export function useCanvas(
  canvasRef: React.RefObject<HTMLCanvasElement | null>,
  imagesRef: React.RefObject<HTMLImageElement[]>,
  frameIndex: MotionValue<number>,
  totalFrames: number,
  imagesLoaded: boolean
) {
  const lastRenderedIndexRef = useRef<number>(-1);
  const rafIdRef = useRef<number | null>(null);
  const lastWidthRef = useRef<number>(0);
  const lastHeightRef = useRef<number>(0);
  const lastDprRef = useRef<number>(0);

  const renderFrame = useCallback((latestFrameIndex: number, forceRedraw = false) => {
    const idx = Math.min(
      totalFrames - 1,
      Math.max(0, Math.floor(latestFrameIndex))
    );

    if (!forceRedraw && idx === lastRenderedIndexRef.current) return;

    if (rafIdRef.current !== null) {
      cancelAnimationFrame(rafIdRef.current);
    }

    rafIdRef.current = requestAnimationFrame(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d", { alpha: false });
      if (!ctx) return;

      const img = imagesRef.current[idx];
      if (!img || !img.complete || img.naturalWidth === 0) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = window.innerWidth;
      const height = window.innerHeight;

      // Only resize canvas element when viewport dimensions or DPR actually change
      if (
        forceRedraw ||
        width !== lastWidthRef.current ||
        height !== lastHeightRef.current ||
        dpr !== lastDprRef.current
      ) {
        canvas.width = Math.floor(width * dpr);
        canvas.height = Math.floor(height * dpr);
        lastWidthRef.current = width;
        lastHeightRef.current = height;
        lastDprRef.current = dpr;
      }

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";

      const imgRatio = img.naturalWidth / img.naturalHeight;
      const screenRatio = width / height;

      let drawWidth = width;
      let drawHeight = height;
      let offsetX = 0;
      let offsetY = 0;

      if (screenRatio > imgRatio) {
        drawHeight = width / imgRatio;
        offsetY = (height - drawHeight) / 2;
      } else {
        drawWidth = height * imgRatio;
        offsetX = (width - drawWidth) / 2;
      }

      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      ctx.restore();
      lastRenderedIndexRef.current = idx;
    });
  }, [canvasRef, imagesRef, totalFrames]);

  useMotionValueEvent(frameIndex, "change", (latest) => {
    renderFrame(latest);
  });

  useEffect(() => {
    const handleResize = () => {
      renderFrame(frameIndex.get(), true);
    };

    renderFrame(frameIndex.get(), true);
    window.addEventListener("resize", handleResize);

    return () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, [renderFrame, frameIndex, imagesLoaded]);

  return { renderFrame };
}
