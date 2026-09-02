"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

interface PreloaderProps {
  progress: number;
  isLoaded: boolean;
}

export default function Preloader({ progress, isLoaded }: PreloaderProps) {
  const [show, setShow] = useState(true);
  const safeProgress = Number.isFinite(progress)
    ? Math.min(100, Math.max(0, progress))
    : 0;

  useEffect(() => {
    if (isLoaded) {
      const timer = setTimeout(() => setShow(false), 800);
      return () => clearTimeout(timer);
    }
  }, [isLoaded]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(20px)", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-between bg-[#050505] p-8 md:p-16 select-none"
        >
          {/* Top Brand */}
          <div className="w-full flex justify-between items-center text-xs tracking-widest uppercase text-gray-500 font-mono">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#6EE7F9] animate-pulse" />
              INISIALISASI SISTEM
            </span>
            <span>EDISI 2026</span>
          </div>

          {/* Center Progress */}
          <div className="flex flex-col items-center justify-center">
            <div className="relative overflow-hidden mb-4">
              <motion.span
                className="text-7xl md:text-9xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600 block"
              >
                {Math.round(safeProgress)}%
              </motion.span>
            </div>
            
            {/* Progress bar container */}
            <div className="w-64 md:w-96 h-[2px] bg-white/10 rounded-full overflow-hidden relative">
              <motion.div
                className="h-full bg-[#6EE7F9] shadow-[0_0_12px_#6EE7F9]"
                style={{ width: `${safeProgress}%` }}
                transition={{ ease: "easeOut", duration: 0.2 }}
              />
            </div>
          </div>

          {/* Bottom Info */}
          <div className="w-full flex justify-between items-end text-xs text-gray-500 font-mono">
            <div>
              <p className="text-white font-medium">PORTOFOLIO DEVELOPER KREATIF</p>
              <p className="text-gray-400">PENGALAMAN SCROLLYTELLING</p>
            </div>
            <div className="text-right">
              <p className="text-[#6EE7F9]">MEMUAT ASET</p>
              <p>{safeProgress < 100 ? "MEMUAT_BINGKAI..." : "SIAP"}</p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
