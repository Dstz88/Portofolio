"use client";

import { useState, useEffect } from "react";
import { Menu, ArrowUpRight } from "lucide-react";
import MenuOverlay from "./MenuOverlay";
import { portfolioData } from "@/data/portfolio";

const navLinks = [
  { label: "Beranda", href: "#hero" },
  { label: "Tentang", href: "#about" },
  { label: "Proyek", href: "#projects" },
  { label: "Keahlian", href: "#skills" },
  { label: "Pengalaman", href: "#experience" },
];

export default function Navbar() {
  const { personal, contact } = portfolioData;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

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

  useEffect(() => {
    const sections = navLinks
      .map(({ href }) => document.getElementById(href.slice(1)))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) setActiveSection(visibleSection.target.id);
      },
      { rootMargin: "-18% 0px -72% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header data-site-navbar className={`fixed top-0 left-0 right-0 z-40 pointer-events-none transition-all duration-300 ${scrolled ? "py-3" : "py-4 md:py-5"}`}>
        <div className={`max-w-7xl mx-auto flex justify-between items-center pointer-events-auto transition-all duration-300 ${scrolled ? "mx-3 md:mx-auto px-4 md:px-6 py-2 rounded-2xl glass-panel shadow-[0_16px_50px_rgba(0,0,0,0.28)]" : "px-5 md:px-8"}`}>
          {/* Logo */}
          <a
            href="#hero"
            onClick={() => setActiveSection("hero")}
            className="group flex items-center gap-3 font-bold tracking-tighter text-xl text-white"
          >
            <div className="w-9 h-9 rounded-xl bg-[#6EE7F9] flex items-center justify-center text-xs font-mono text-black font-black group-hover:scale-[1.04] transition-transform">
              {personal.logoInitials}
            </div>
            <span className="tracking-[-0.035em] text-lg md:text-xl">
              Dhesta<span className="text-[#6EE7F9]">.dev</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);

              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setActiveSection(link.href.slice(1))}
                  aria-current={isActive ? "page" : undefined}
                  className={`px-3 py-2 rounded-lg border text-[11px] font-mono tracking-wide uppercase transition-colors ${
                    isActive
                      ? "border-white/20 bg-white/[0.08] text-white"
                      : "border-transparent text-gray-300 hover:border-white/10 hover:bg-white/[0.07] hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action / CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <a
              href={contact.whatsappUrl || "https://wa.me/6287825368112"}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#6EE7F9] text-black font-mono text-xs font-bold tracking-wide hover:bg-[#9aeeFA] transition-all active:scale-[0.98]"
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

