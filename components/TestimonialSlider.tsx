"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    quote: "Dhesta i.p menghadirkan pengalaman scrollytelling yang sangat memukau tim peluncuran produk kami. Tingkat detail animasi dan performa 60fps sangat luar biasa.",
    author: "Elena Rostova",
    role: "VP of Product, Apex Tech",
    company: "Apex Tech Labs",
  },
  {
    quote: "Bekerja bersama Dhesta i.p sangat lancar. Dia mengubah ide kompleks kami menjadi mahakarya desain interaktif. Sangat direkomendasikan!",
    author: "Marcus Chen",
    role: "Creative Director",
    company: "Studio Vanguard",
  },
  {
    quote: "Penguasaan luar biasa atas Next.js, Motion, dan sistem desain. Dhesta i.p tidak sekadar mengoding; dia menciptakan karya seni digital yang menghasilkan dampak nyata.",
    author: "Sarah Jenkins",
    role: "Founder & Lead Designer",
    company: "Lumina Digital",
  },
];

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-32 px-6 md:px-12 bg-transparent relative z-10 border-t border-white/5 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#6EE7F9]" />
            <span className="text-xs font-mono text-[#6EE7F9] tracking-widest uppercase">
              REKOMENDASI & TESTIMONI
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
            Testimoni Klien
          </h2>
        </div>

        {/* Carousel Box */}
        <div className="relative glass-panel p-8 md:p-16 rounded-3xl border border-white/10 overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#6EE7F9]/10 rounded-full blur-3xl pointer-events-none" />

          <Quote className="w-12 h-12 text-[#6EE7F9]/30 mb-8" />

          <div className="min-h-[180px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <div className="flex gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-xl md:text-3xl font-medium leading-relaxed text-gray-200">
                  &ldquo;{testimonials[current].quote}&rdquo;
                </p>

                <div>
                  <h4 className="text-lg font-bold text-white">
                    {testimonials[current].author}
                  </h4>
                  <p className="text-xs font-mono text-[#6EE7F9]">
                    {testimonials[current].role} — {testimonials[current].company}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-12 pt-8 border-t border-white/10">
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${idx === current ? "w-8 bg-[#6EE7F9]" : "w-2 bg-white/20"
                    }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex gap-3">
              <button
                onClick={handlePrev}
                className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-[#6EE7F9] text-white hover:text-[#6EE7F9] transition-all"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-[#6EE7F9] text-white hover:text-[#6EE7F9] transition-all"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
