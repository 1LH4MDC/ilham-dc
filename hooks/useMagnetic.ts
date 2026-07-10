"use client";

import { useEffect, RefObject } from "react";
import gsap from "gsap";

/**
 * Efek "magnetic": elemen sedikit tertarik mengikuti posisi kursor
 * saat kursor ada di dalam area elemen, lalu balik ke posisi semula
 * (0, 0) saat kursor keluar.
 *
 * @param ref      ref ke elemen HTML yang mau dikasih efek
 * @param strength seberapa kuat "tarikan"-nya, 0.1 (halus) - 1 (kuat). Default 0.4
 */
export function useMagnetic<T extends HTMLElement>(
  ref: RefObject<T | null>,
  strength: number = 0.4
) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // quickTo lebih ringan dari gsap.to biasa untuk animasi yang
    // dipicu berkali-kali dalam waktu singkat (seperti mousemove)
    const xTo = gsap.quickTo(el, "x", { duration: 0.5, ease: "power3.out" });
    const yTo = gsap.quickTo(el, "y", { duration: 0.5, ease: "power3.out" });

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const relX = e.clientX - (rect.left + rect.width / 2);
      const relY = e.clientY - (rect.top + rect.height / 2);
      xTo(relX * strength);
      yTo(relY * strength);
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [ref, strength]);
}