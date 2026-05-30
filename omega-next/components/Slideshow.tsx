"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Slide {
  image: string;
  title?: string;
  subtitle?: string;
}

interface SlideshowProps {
  slides: Slide[];
  autoPlayInterval?: number;
}

export default function Slideshow({ slides, autoPlayInterval = 4000 }: SlideshowProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(next, autoPlayInterval);
    return () => clearInterval(timer);
  }, [next, autoPlayInterval]);

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%" , opacity: 0 }),
  };

  if (!slides.length) return null;

  return (
    <section className="relative w-full h-[420px] overflow-hidden bg-gray-100">
      <AnimatePresence custom={direction} initial={false}>
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].image}
            alt={slides[current].title || "slide"}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a3c6e]/60 via-transparent to-transparent" />
          {(slides[current].title || slides[current].subtitle) && (
            <div className="absolute bottom-10 left-6 right-16">
              {slides[current].title && (
                <h2 className="text-white font-black text-2xl md:text-3xl drop-shadow mb-1">
                  {slides[current].title}
                </h2>
              )}
              {slides[current].subtitle && (
                <p className="text-white/90 text-sm md:text-base drop-shadow">
                  {slides[current].subtitle}
                </p>
              )}
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/40 hover:bg-black/60 text-white rounded-full flex items-center justify-center transition-colors"
      >
        <ChevronLeft size={20} />
      </button>

      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/40 hover:bg-black/60 text-white rounded-full flex items-center justify-center transition-colors"
      >
        <ChevronRight size={20} />
      </button>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > current ? 1 : -1);
              setCurrent(i);
            }}
            className={`h-2 rounded-full transition-all ${
              i === current ? "bg-[#e8801a] w-5" : "bg-white/60 w-2"
            }`}
          />
        ))}
      </div>
    </section>
  );
        }
