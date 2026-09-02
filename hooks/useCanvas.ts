"use client";

import { useCallback, useEffect, useRef } from "react";
import { MotionValue, useMotionValueEvent } from "motion/react";

type SubscribeToFrameLoads = (
  listener: (frameIndex: number) => void
) => () => void;

export function useCanvas(
  canvasRef: React.RefObject<HTMLCanvasElement | null>,
  imagesRef: React.RefObject<HTMLImageElement[]>,
  frameIndex: MotionValue<number>,
  totalFrames: number,
  imagesLoaded: boolean,
  subscribeToFrameLoads: SubscribeToFrameLoads,
  reducedMotion = false
) {
  const lastRequestedIndexRef = useRef<number>(-1);
  const lastRenderedIndexRef = useRef<number>(-1);
  const rafIdRef = useRef<number | null>(null);
  const lastWidthRef = useRef<number>(0);
  const lastHeightRef = useRef<number>(0);
  const lastDprRef = useRef<number>(0);

  const findClosestLoadedFrame = useCallback(
    (targetIndex: number) => {
      for (let distance = 0; distance < totalFrames; distance += 1) {
        const previousIndex = targetIndex - distance;
        const previousImage = imagesRef.current[previousIndex];
        if (
          previousIndex >= 0 &&
          previousImage?.complete &&
          previousImage.naturalWidth > 0
        ) {
          return previousIndex;
        }

        const nextIndex = targetIndex + distance;
        const nextImage = imagesRef.current[nextIndex];
        if (
          distance > 0 &&
          nextIndex < totalFrames &&
          nextImage?.complete &&
          nextImage.naturalWidth > 0
        ) {
          return nextIndex;
        }
      }

      return -1;
    },
    [imagesRef, totalFrames]
  );

  const renderFrame = useCallback(
    (latestFrameIndex: number, forceRedraw = false) => {
      const requestedIndex = reducedMotion
        ? 0
        : Math.min(totalFrames - 1, Math.max(0, Math.floor(latestFrameIndex)));

      if (!forceRedraw && requestedIndex === lastRequestedIndexRef.current) return;
      lastRequestedIndexRef.current = requestedIndex;

      if (rafIdRef.current !== null) cancelAnimationFrame(rafIdRef.current);

      rafIdRef.current = requestAnimationFrame(() => {
        rafIdRef.current = null;
        const canvas = canvasRef.current;
        if (!canvas) return;
        const context = canvas.getContext("2d", { alpha: false });
        if (!context) return;

        const loadedIndex = findClosestLoadedFrame(requestedIndex);
        if (loadedIndex < 0) return;
        const image = imagesRef.current[loadedIndex];
        if (!image) return;

        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        const width = window.innerWidth;
        const height = window.innerHeight;

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

        context.save();
        context.scale(dpr, dpr);
        context.imageSmoothingEnabled = true;
        context.imageSmoothingQuality = "high";

        const imageRatio = image.naturalWidth / image.naturalHeight;
        const screenRatio = width / height;
        let drawWidth = width;
        let drawHeight = height;
        let offsetX = 0;
        let offsetY = 0;

        if (screenRatio > imageRatio) {
          drawHeight = width / imageRatio;
          offsetY = (height - drawHeight) / 2;
        } else {
          drawWidth = height * imageRatio;
          offsetX = (width - drawWidth) / 2;
        }

        context.drawImage(image, offsetX, offsetY, drawWidth, drawHeight);
        context.restore();
        lastRenderedIndexRef.current = loadedIndex;
      });
    },
    [canvasRef, findClosestLoadedFrame, imagesRef, reducedMotion, totalFrames]
  );

  useMotionValueEvent(frameIndex, "change", (latest) => {
    renderFrame(latest);
  });

  useEffect(() => {
    const handleResize = () => renderFrame(frameIndex.get(), true);
    const unsubscribe = subscribeToFrameLoads((loadedIndex) => {
      const requestedIndex = reducedMotion
        ? 0
        : Math.min(totalFrames - 1, Math.max(0, Math.floor(frameIndex.get())));
      const renderedIndex = lastRenderedIndexRef.current;

      if (
        loadedIndex === requestedIndex ||
        renderedIndex < 0 ||
        Math.abs(loadedIndex - requestedIndex) <
          Math.abs(renderedIndex - requestedIndex)
      ) {
        renderFrame(requestedIndex, true);
      }
    });

    renderFrame(frameIndex.get(), true);
    window.addEventListener("resize", handleResize);

    return () => {
      unsubscribe();
      if (rafIdRef.current !== null) cancelAnimationFrame(rafIdRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, [frameIndex, imagesLoaded, reducedMotion, renderFrame, subscribeToFrameLoads, totalFrames]);

  return { renderFrame };
}
