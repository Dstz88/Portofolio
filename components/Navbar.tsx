"use client";

import { useState, useEffect } from "react";
import { Menu, ArrowUpRight } from "lucide-react";
import MenuOverlay from "./MenuOverlay";
import { portfolioData } from "@/data/portfolio";

export default function Navbar() {
  const { personal, contact } = portfolioData;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Beranda", href: "#hero" },
    { label: "Tentang", href: "#about" },
    { label: "Proyek", href: "#projects" },
    { label: "Keahlian", href: "#skills" },
    { label: "Pengalaman", href: "#experience" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 py-4 md:py-6 pointer-events-none transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center pointer-events-auto">
          {/* Logo */}
          <a
            href="#hero"
            className="group flex items-center gap-3 font-bold tracking-tighter text-xl text-white"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#6EE7F9] to-blue-600 flex items-center justify-center text-xs font-mono text-black font-black group-hover:scale-105 group-hover:shadow-[0_0_15px_rgba(110,231,249,0.5)] transition-all">
              {personal.logoInitials}
            </div>
            <span className="tracking-tight text-lg md:text-xl">
              {personal.name}<span className="text-[#6EE7F9]">.DEV</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 px-4 py-2 rounded-full glass-panel border border-white/10 bg-white/[0.03]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-1.5 rounded-full text-xs font-mono tracking-wider uppercase text-gray-300 hover:text-white hover:bg-white/10 transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action / CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <a
              href={contact.whatsappUrl || "https://wa.me/6287825368112"}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center justify-center gap-1.5 px-5 py-2 rounded-full bg-[#6EE7F9] text-black font-mono text-xs font-bold tracking-wider hover:bg-[#38bdf8] hover:shadow-[0_0_20px_rgba(110,231,249,0.4)] transition-all transform hover:-translate-y-0.5"
            >
              <span>HUBUNGI SAYA</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-full glass-panel border border-white/10 hover:border-[#6EE7F9]/50 text-white transition-all cursor-pointer"
              aria-label="Open Navigation"
            >
              <Menu className="w-5 h-5 text-gray-300 hover:text-white" />
            </button>
          </div>
        </div>
      </header>

      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}

