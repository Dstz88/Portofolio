"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ArrowUpRight, Code2, Mail, Globe } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { useFocusTrap } from "@/hooks/useFocusTrap";

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { title: "Beranda", href: "#hero" },
  { title: "Tentang", href: "#about" },
  { title: "Proyek", href: "#projects" },
  { title: "Keahlian", href: "#skills" },
  { title: "Pengalaman", href: "#experience" },
  { title: "Kontak", href: "#contact" },
];

const iconMap = {
  github: Code2,
  instagram: Globe,
  email: Mail,
};

export default function MenuOverlay({ isOpen, onClose }: MenuOverlayProps) {
  const { contact, socials } = portfolioData;
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useFocusTrap(dialogRef, closeButtonRef, isOpen, onClose);

  useEffect(() => {
    if (!isOpen) return;

    const previousHtmlOverflow = document.documentElement.style.overflow;
    const previousBodyOverflow = document.body.style.overflow;
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    return () => {
      document.documentElement.style.overflow = previousHtmlOverflow;
      document.body.style.overflow = previousBodyOverflow;
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, clipPath: "circle(0% at 95% 5%)" }}
          animate={{ opacity: 1, clipPath: "circle(150% at 95% 5%)" }}
          exit={{ opacity: 0, clipPath: "circle(0% at 95% 5%)" }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobile-navigation-title"
          ref={dialogRef}
          tabIndex={-1}
          className="fixed inset-0 z-50 bg-[#050505]/95 backdrop-blur-2xl flex flex-col justify-between p-8 md:p-16"
        >
          {/* Top Bar */}
          <div className="flex justify-between items-center w-full">
            <span id="mobile-navigation-title" className="text-xs uppercase tracking-widest text-[#6EE7F9] font-mono">
              MENU NAVIGASI
            </span>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-[#6EE7F9] text-white hover:text-[#6EE7F9] transition-all group cursor-pointer"
              aria-label="Tutup menu navigasi"
            >
              <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
            </button>
          </div>

          {/* Links Grid */}
          <div className="my-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <nav className="flex flex-col gap-2 md:gap-4">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.title}
                  href={item.href}
                  onClick={onClose}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.08, duration: 0.5 }}
                  className="group flex items-center gap-4 text-4xl md:text-7xl font-bold tracking-tight text-gray-400 hover:text-white transition-colors cursor-pointer w-fit"
                >
                  <span className="text-xs font-mono text-[#6EE7F9] opacity-0 group-hover:opacity-100 transition-opacity">
                    0{index + 1}
                  </span>
                  <span className="group-hover:translate-x-4 transition-transform duration-300">
                    {item.title}
                  </span>
                  <ArrowUpRight className="w-8 h-8 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-300 text-[#6EE7F9]" />
                </motion.a>
              ))}
            </nav>

            {/* Extra Info Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="glass-card p-8 rounded-3xl hidden lg:flex flex-col justify-between h-[360px] border border-white/10 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#6EE7F9]/10 rounded-full blur-3xl pointer-events-none" />
              <div>
                <span className="text-xs font-mono text-[#6EE7F9] uppercase tracking-wider block mb-2">
                  STATUS KETERSEDIAAN
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {contact.availability}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {contact.availabilityDesc}
                </p>
              </div>

              <div>
                <span className="text-xs font-mono text-gray-500 uppercase block mb-1">
                  KONTAK LANGSUNG
                </span>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-lg font-medium text-[#6EE7F9] hover:underline"
                >
                  {contact.email}
                </a>
              </div>
            </motion.div>
          </div>

          {/* Social Footer */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-6">
              {socials.map((social) => {
                const Icon = iconMap[social.iconName] || Globe;
                const opensNewTab = !social.href.startsWith("mailto:");
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={opensNewTab ? "_blank" : undefined}
                    rel={opensNewTab ? "noopener noreferrer" : undefined}
                    aria-label={social.label}
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#6EE7F9] transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                    <span>{social.label}</span>
                  </a>
                );
              })}
            </div>
            <p className="text-xs font-mono text-gray-600">
              © 2026 PORTOFOLIO DEVELOPER KREATIF. HAK CIPTA DILINDUNGI.
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

