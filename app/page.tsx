"use client";

import { useState } from "react";
import { useLenis } from "@/lib/lenis";
import { portfolioData } from "@/data/portfolio";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import SequenceBackground from "@/components/SequenceBackground";
import Hero from "@/components/Hero";
import TextReveal from "@/components/TextReveal";
import BentoGrid from "@/components/BentoGrid";
import ProjectSection from "@/components/ProjectSection";
import Timeline from "@/components/Timeline";
import Skills from "@/components/Skills";
import Stats from "@/components/Stats";
import MyApproach from "@/components/MyApproach";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  useLenis();

  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <main className="relative min-h-screen bg-[#050505] text-white selection:bg-[#6EE7F9] selection:text-black overflow-x-hidden">
      {/* Awwwards Preloader */}
      <Preloader progress={loadingProgress} isLoaded={isLoaded} />

      {/* Global Fixed Canvas Background */}
      <SequenceBackground
        onProgress={(p) => setLoadingProgress(p)}
        onLoaded={() => setIsLoaded(true)}
      />

      {/* Transparent Floating Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Philosophy Text Reveal */}
      <TextReveal text={portfolioData.personal.aboutPhilosophy} />

      {/* Stats Section */}
      <Stats />

      {/* Bento Grid Ecosystem */}
      <BentoGrid />

      {/* Featured Projects Showcase */}
      <ProjectSection />

      {/* Skills Matrix */}
      <Skills />

      {/* Experience Timeline */}
      <Timeline />

      {/* My Approach */}
      <MyApproach />

      {/* CTA Section */}
      <CTA />

      {/* Footer */}
      <Footer />
    </main>
  );
}

