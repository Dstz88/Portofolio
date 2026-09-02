"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const CRITICAL_FRAME_COUNT = 10;
const MAX_CONCURRENT_REQUESTS = 5;

type FrameLoadListener = (frameIndex: number) => void;

export function useSequence(
  totalFrames: number,
  onProgress?: (progress: number) => void,
  onLoaded?: () => void,
  reducedMotion = false
) {
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const listenersRef = useRef(new Set<FrameLoadListener>());
  const onProgressRef = useRef(onProgress);
  const onLoadedRef = useRef(onLoaded);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    onProgressRef.current = onProgress;
  }, [onProgress]);

  useEffect(() => {
    onLoadedRef.current = onLoaded;
  }, [onLoaded]);

  const subscribeToFrameLoads = useCallback((listener: FrameLoadListener) => {
    listenersRef.current.add(listener);
    return () => listenersRef.current.delete(listener);
  }, []);

  useEffect(() => {
    let active = true;
    const pendingImages = new Set<HTMLImageElement>();
    const frameCount = Math.max(0, totalFrames);
    const criticalCount = Math.min(
      reducedMotion ? 1 : CRITICAL_FRAME_COUNT,
      frameCount
    );

    imagesRef.current = new Array<HTMLImageElement>(frameCount);
    onProgressRef.current?.(frameCount === 0 ? 100 : 0);

    const loadFrame = (frameIndex: number) =>
      new Promise<boolean>((resolve) => {
        const image = new Image();
        const frameNumber = String(frameIndex + 1).padStart(3, "0");
        imagesRef.current[frameIndex] = image;
        pendingImages.add(image);

        const settle = (loaded: boolean) => {
          image.onload = null;
          image.onerror = null;
          pendingImages.delete(image);

          if (active && loaded) {
            listenersRef.current.forEach((listener) => listener(frameIndex));
          }

          resolve(loaded);
        };

        image.onload = () => settle(true);
        image.onerror = () => settle(false);
        image.src = `/sequence/ezgif-frame-${frameNumber}.jpg`;
      });

    const loadWithConcurrency = async (frameIndexes: number[]) => {
      let nextIndex = 0;
      const workerCount = Math.min(MAX_CONCURRENT_REQUESTS, frameIndexes.length);

      await Promise.all(
        Array.from({ length: workerCount }, async () => {
          while (active) {
            const queueIndex = nextIndex++;
            if (queueIndex >= frameIndexes.length) return;
            await loadFrame(frameIndexes[queueIndex]);
          }
        })
      );
    };

    const startLoading = async () => {
      if (criticalCount === 0) {
        if (!active) return;
        setImagesLoaded(true);
        onLoadedRef.current?.();
        return;
      }

      let settledCriticalFrames = 0;
      let lastProgress = 0;
      const reportCriticalSettlement = () => {
        settledCriticalFrames += 1;
        const nextProgress = Math.min(
          100,
          Math.max(lastProgress, (settledCriticalFrames / criticalCount) * 100)
        );
        lastProgress = Number.isFinite(nextProgress) ? nextProgress : lastProgress;
        onProgressRef.current?.(lastProgress);
      };

      await loadFrame(0);
      if (!active) return;
      reportCriticalSettlement();

      const remainingCritical = Array.from(
        { length: criticalCount - 1 },
        (_, index) => index + 1
      );
      let nextCriticalIndex = 0;
      const criticalWorkerCount = Math.min(
        MAX_CONCURRENT_REQUESTS,
        remainingCritical.length
      );

      await Promise.all(
        Array.from({ length: criticalWorkerCount }, async () => {
          while (active) {
            const queueIndex = nextCriticalIndex++;
            if (queueIndex >= remainingCritical.length) return;
            await loadFrame(remainingCritical[queueIndex]);
            if (active) reportCriticalSettlement();
          }
        })
      );

      if (!active) return;
      setImagesLoaded(true);
      onLoadedRef.current?.();

      if (!reducedMotion) {
        const backgroundFrames = Array.from(
          { length: frameCount - criticalCount },
          (_, index) => index + criticalCount
        );
        await loadWithConcurrency(backgroundFrames);
      }
    };

    void startLoading();

    return () => {
      active = false;
      pendingImages.forEach((image) => {
        image.onload = null;
        image.onerror = null;
      });
      pendingImages.clear();
    };
  }, [totalFrames, reducedMotion]);

  return { imagesRef, imagesLoaded, subscribeToFrameLoads };
}
