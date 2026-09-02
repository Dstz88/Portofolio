"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "motion/react";
import { Download, ExternalLink, FileText, X } from "lucide-react";
import { useFocusTrap } from "@/hooks/useFocusTrap";

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
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useFocusTrap(dialogRef, closeButtonRef, isOpen, onClose);

  useEffect(() => {
    if (!isOpen) return;

    const previousHtmlOverflow = document.documentElement.style.overflow;
    const previousBodyOverflow = document.body.style.overflow;
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    document.body.classList.add("portfolio-modal-open");

    return () => {
      document.documentElement.style.overflow = previousHtmlOverflow;
      document.body.style.overflow = previousBodyOverflow;
      document.body.classList.remove("portfolio-modal-open");
    };
  }, [isOpen, onClose]);

  const modal = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          data-lenis-prevent
          className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-xl p-0 sm:p-6 md:p-10"
          role="dialog"
          aria-modal="true"
          aria-labelledby="portfolio-preview-title"
          ref={dialogRef}
          tabIndex={-1}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) onClose();
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="mx-auto flex h-[100dvh] max-h-[100dvh] w-full max-w-6xl flex-col overflow-hidden bg-[#0a0a0a] shadow-2xl sm:h-full sm:max-h-[92dvh] sm:rounded-2xl sm:border sm:border-white/10"
          >
            <div className="flex min-h-16 shrink-0 items-center justify-between gap-3 border-b border-white/10 px-4 py-3 sm:px-6">
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
                  className="hidden items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs font-medium text-gray-200 transition-colors hover:border-[#6EE7F9]/50 hover:text-[#6EE7F9] lg:flex"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>Buka</span>
                </a>
                <a
                  href={portfolioUrl}
                  download="PORTOFOLIO-DHESTA.pdf"
                  className="hidden items-center gap-2 rounded-full bg-[#6EE7F9] px-4 py-2 text-xs font-bold text-black transition-transform hover:scale-105 lg:flex"
                  aria-label="Unduh portofolio"
                >
                  <Download className="h-4 w-4" />
                  <span>Unduh</span>
                </a>
                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={onClose}
                  className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-white/10 text-gray-300 transition-colors hover:border-[#6EE7F9]/50 hover:text-[#6EE7F9]"
                  aria-label="Tutup preview portofolio"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="flex min-h-0 flex-1 items-center justify-center bg-[#101315] p-5 lg:hidden">
              <div className="w-full max-w-sm rounded-2xl border border-white/15 bg-gradient-to-br from-[#151b1e] to-[#090c0e] p-6 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#6EE7F9]/25 bg-[#6EE7F9]/10 text-[#6EE7F9]">
                  <FileText className="h-7 w-7" />
                </div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#6EE7F9]">Dokumen PDF</p>
                <h3 className="mt-2 text-lg font-bold text-white">PORTOFOLIO-DHESTA.pdf</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-300">
                  Preview PDF tidak selalu tersedia di browser mobile. Buka dokumen di tab baru atau unduh untuk membacanya.
                </p>

                <div className="mt-6 grid gap-3">
                  <a
                    href={portfolioUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#6EE7F9] px-5 py-3 text-sm font-bold text-[#050505] transition-colors hover:bg-[#9aeeFA] active:scale-[0.98]"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Buka PDF</span>
                  </a>
                  <a
                    href={portfolioUrl}
                    download="PORTOFOLIO-DHESTA.pdf"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-[#6EE7F9]/45 hover:text-[#6EE7F9] active:scale-[0.98]"
                  >
                    <Download className="h-4 w-4" />
                    <span>Unduh PDF</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="hidden min-h-0 flex-1 bg-[#171717] lg:block">
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

  return typeof document !== "undefined" ? createPortal(modal, document.body) : null;
}
