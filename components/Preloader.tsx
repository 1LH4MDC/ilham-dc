"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isContentVisible, setIsContentVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);

          // TAHAP 1: Konten teks & angka FADE OUT (menghilang di tempat) lebih dulu
          setTimeout(() => {
            setIsContentVisible(false);
          }, 300);

          // TAHAP 2: Tirai baru ditarik ke atas SETELAH konten benar-benar bersih
          // (300ms tunggu awal + 400ms durasi fade konten + jeda napas 300ms)
          setTimeout(() => {
            setIsVisible(false);
          }, 300);

          return 100;
        }
        const increment = Math.floor(Math.random() * 3) + 1;
        return Math.min(prev + increment, 100);
      });
    }, 25);

    return () => clearInterval(interval);
  }, []);

  // Tepat 3 macam teks dinamis sesuai permintaan
  const getLoadingText = (progress: number) => {
    if (progress <= 35) return "INITIALIZING INTERFACE...";
    if (progress <= 75) return "LOADING ASSETS...";
    return "LAUNCHING PORTFOLIO...";
  };

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-950 font-sans select-none px-6"
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            transition: { duration: 1.5, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          {/* BLOK KONTEN TENGAH — compact, bukan full-width */}
          <motion.div
            className="w-full max-w-xs flex flex-col items-center text-center"
            animate={{ opacity: isContentVisible ? 1 : 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {/* 1. NAMA & PERAN — tipis, kecil, letter-spacing lebar */}
            <h2 className="text-sm md:text-base font-light tracking-[0.35em] text-zinc-300 uppercase">
              Ilham Dwi Cahya
            </h2>
            <p className="text-[10px] md:text-xs font-light tracking-[0.3em] text-zinc-600 uppercase mt-2">
              UI/UX Designer &amp; Frontend Developer
            </p>

            {/* Divider tipis dengan fade di kedua ujung */}
            <div className="w-10 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent mt-5 mb-8" />

            {/* 2. ANGKA — thin weight, ukuran wajar (bukan colossal) */}
            <div className="flex items-start justify-center leading-none select-none">
              <span className="text-7xl md:text-8xl font-thin tracking-tight text-zinc-100 tabular-nums">
                {count}
              </span>
              <span className="text-xl md:text-2xl font-thin text-zinc-500 mt-1.5 md:mt-2 ml-1">
                %
              </span>
            </div>

            {/* 3. LOADING BAR — ramping, bukan full-width tebal */}
            <div className="h-[2px] w-40 md:w-52 bg-zinc-800 overflow-hidden relative mt-8 mb-6 rounded-full">
              <motion.div
                className="h-full bg-zinc-100 absolute left-0 top-0 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: `${count}%` }}
                transition={{ ease: "linear" }}
              />
            </div>

            {/* 4. TEKS DINAMIS */}
            <div className="h-5 overflow-hidden">
              <motion.p
                key={getLoadingText(count)}
                initial={{ y: 12, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-[10px] md:text-xs font-light tracking-[0.25em] text-zinc-500 uppercase"
              >
                {getLoadingText(count)}
              </motion.p>
            </div>
          </motion.div>

          {/* EFEK TIRAI LENGKUNG — warna disamakan dengan bg baru */}
          <div className="absolute top-full left-0 w-full h-[25vh] pointer-events-none">
            <svg
              className="w-full h-full fill-zinc-950"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <motion.path
                initial={{ d: "M0 0 Q50 0 100 0 Z" }}
                exit={{
                  d: "M0 0 Q50 80 100 0 Z",
                  transition: { duration: 1.5, ease: [0.76, 0, 0.24, 1] },
                }}
              />
            </svg>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}