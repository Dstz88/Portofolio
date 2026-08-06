"use client";

import { useRef, useEffect, useState } from "react";
import { useInView, motion } from "motion/react";

interface CounterProps {
  from: number;
  to: number;
  suffix?: string;
}

function Counter({ from = 0, to, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(from);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;

    let start = from;
    const duration = 2000;
    const increment = (to - from) / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= to) {
        setCount(to);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [inView, from, to]);

  return (
    <span ref={ref} className="font-extrabold">
      {count}
      {suffix}
    </span>
  );
}

const statsData = [
  { value: 15, suffix: "+", label: "Proyek Selesai", desc: "Aplikasi & produk web siap rilis" },
  { value: 3, suffix: "+", label: "Tahun Belajar & Berkarya", desc: "Eksplorasi mendalam teknologi web" },
  { value: 20, suffix: "+", label: "Konsep UI/UX Dibuat", desc: "Prototipe visual presisi tinggi" },
  { value: 100, suffix: "%", label: "Dedikasi & Semangat", desc: "Menghadirkan kesempurnaan digital tanpa kompromi" },
];

export default function Stats() {
  return (
    <section className="py-24 px-6 md:px-12 bg-transparent relative z-10 border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {statsData.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className="glass-card p-8 rounded-3xl relative overflow-hidden group hover:border-[#6EE7F9]/40 transition-colors"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#6EE7F9]/10 rounded-full blur-2xl group-hover:bg-[#6EE7F9]/20 transition-all" />

            <div className="text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-white via-[#6EE7F9] to-cyan-400 mb-2">
              <Counter from={0} to={stat.value} suffix={stat.suffix} />
            </div>

            <h3 className="text-lg font-bold text-white mb-1">{stat.label}</h3>
            <p className="text-xs text-gray-400 leading-relaxed">{stat.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
