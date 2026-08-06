"use client";

import { useEffect, useRef, useState } from "react";

export function useSequence(
  totalFrames: number,
  onProgress?: (progress: number) => void,
  onLoaded?: () => void
) {
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    let loadedCount = 0;
    const loadedImages: HTMLImageElement[] = [];

    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      const numStr = i.toString().padStart(3, "0");
      img.src = `/sequence/ezgif-frame-${numStr}.jpg`;

      const handleLoad = () => {
        loadedCount++;
        if (onProgress) onProgress((loadedCount / totalFrames) * 100);
        if (loadedCount === totalFrames) {
          setImagesLoaded(true);
          if (onLoaded) onLoaded();
        }
      };

      img.onload = handleLoad;
      img.onerror = handleLoad;
      loadedImages.push(img);
    }
    imagesRef.current = loadedImages;
  }, [totalFrames, onProgress, onLoaded]);

  return { imagesRef, imagesLoaded };
}
