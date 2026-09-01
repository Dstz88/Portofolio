"use client";

import { useRef, useEffect, useState } from "react";
import { useInView, motion } from "motion/react";
import { portfolioData } from "@/data/portfolio";

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

export default function Stats() {
  const { stats } = portfolioData;

  return (
    <section className="py-20 sm:py-24 px-5 sm:px-8 md:px-12 bg-transparent relative z-10 border-y border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-10 lg:divide-x divide-white/10">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className="relative lg:px-8 first:pl-0"
          >
            <div className="text-4xl sm:text-5xl md:text-6xl text-white tracking-[-0.05em] mb-3">
              <Counter from={0} to={stat.value} suffix={stat.suffix} />
            </div>

            <h3 className="text-sm sm:text-base font-semibold text-[#6EE7F9] mb-1">{stat.label}</h3>
            <p className="text-xs text-gray-400 leading-relaxed max-w-[24ch]">{stat.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

