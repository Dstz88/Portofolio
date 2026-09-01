"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Download, ExternalLink, X } from "lucide-react";

interface PortfolioPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  portfolioUrl: string;
}

export default function PortfolioPreviewModal({
  isOpen,
  onClose,
  portfolioUrl,
}: PortfolioPreviewModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-xl p-3 sm:p-6 md:p-10"
          role="dialog"
          aria-modal="true"
          aria-labelledby="portfolio-preview-title"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) onClose();
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="mx-auto flex h-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] shadow-2xl"
          >
            <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3 sm:px-6">
              <div className="min-w-0 text-left">
                <p className="text-[10px] font-mono tracking-[0.2em] text-[#6EE7F9] uppercase">
                  Preview Dokumen
                </p>
                <h2
                  id="portfolio-preview-title"
                  className="truncate text-sm font-semibold text-white sm:text-base"
                >
                  Portofolio Dhesta Irham Prasetya
                </h2>
              </div>

              <div className="flex shrink-0 items-center gap-2">
                <a
                  href={portfolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs font-medium text-gray-200 transition-colors hover:border-[#6EE7F9]/50 hover:text-[#6EE7F9] sm:flex"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>Buka</span>
                </a>
                <a
                  href={portfolioUrl}
                  download="PORTOFOLIO-DHESTA.pdf"
                  className="flex items-center gap-2 rounded-full bg-[#6EE7F9] px-3 py-2 text-xs font-bold text-black transition-transform hover:scale-105 sm:px-4"
                  aria-label="Unduh portofolio"
                >
                  <Download className="h-4 w-4" />
                  <span className="hidden sm:inline">Unduh</span>
                </a>
                <button
                  type="button"
                  onClick={onClose}
                  className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-white/10 text-gray-300 transition-colors hover:border-[#6EE7F9]/50 hover:text-[#6EE7F9]"
                  aria-label="Tutup preview portofolio"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="min-h-0 flex-1 bg-[#171717]">
              <iframe
                src={`${portfolioUrl}#view=FitH&toolbar=0`}
                title="Preview Portofolio Dhesta Irham Prasetya"
                className="h-full w-full border-0"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
