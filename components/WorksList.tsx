"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";

interface WorkItem {
  title: string;
  description: string;
  image: string; // taruh file gambarnya di /public/works/
  href: string;
}

const WORKS: WorkItem[] = [
  {
    title: "Website Nogosari",
    description: "Website Desa Nogosari sistem monitoring dan peringantan dini real time berbasis IoT",
    image: "/projects/nogosari.png",
    href: "/projects/nogosari",
  },
  {
    title: "SiKandang",
    description: "Aplikasi Mobile Berbasis IOT Untuk Monitoring Kesehatan Dan Manajemen Peternakan Ayam",
    image: "/projects/sikandang.png",
    href: "/projects/sikandang",
  },
  {
    title: "SimoGura",
    description: "SmartFish Farm Internet of Things (IoT) untuk Monitoring Kualitas Air dan Ketinggian Air pada Budidaya Ikan Gurame.",
    image: "/projects/simogura.png",
    href: "/projects/simogura",
  },
  {
    title: "Aduin Jember",
    description: "Aduin Jember : Solusi Pelaporan Digital Masyarakat Jember untuk Transformasi Smart City Jember dengan Integrasi Kamera, dan Maps API",
    image: "/projects/aduinjember.png",
    href: "/projects/aduinjember",
  },
  {
    title: "Travel Best",
    description: "TRAVELBEST: SISTEM INFORMASI PEMESANAN DAN MANAJEMEN TRIP WISATA BESTTRIP.BWI",
    image: "/projects/travelbest.png",
    href: "/projects/travelbest",
  },
  {
    title: "Jñānaloka",
    description: "JALOKA (Jñānaloka atau dunia pengetahuan) adalah sebuah aplikasi perpustakaan sekolah yang dirancang untuk mendigitalisasi dan menyederhanakan proses peminjaman buku.",
    image: "/projects/jaloka.png",
    href: "/projects/jaloka",
  }
  // tambah project lain di sini, sebanyak yang kamu mau
];

export default function WorksList() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const xTo = useRef<((value: number) => void) | null>(null);
  const yTo = useRef<((value: number) => void) | null>(null);

  useEffect(() => {
    if (!previewRef.current) return;
    xTo.current = gsap.quickTo(previewRef.current, "x", { duration: 0.5, ease: "power3.out" });
    yTo.current = gsap.quickTo(previewRef.current, "y", { duration: 0.5, ease: "power3.out" });
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    xTo.current?.(e.clientX);
    yTo.current?.(e.clientY);
  };

  return (
    <section className="relative w-full py-32 px-6 md:px-20 overflow-hidden" onMouseMove={handleMouseMove}>
      {/* Judul raksasa transparan di background */}
      <h2 className="absolute -top-4 left-1/2 -translate-x-1/2 text-[16vw] font-black uppercase text-zinc-100 dark:text-zinc-900 select-none pointer-events-none whitespace-nowrap -z-0">
        MY WORKS
      </h2>

      <div className="relative max-w-5xl mx-auto mt-24 z-10">
        {WORKS.map((work, i) => {
          const isHovered = hoveredIndex === i;
          const isDimmed = hoveredIndex !== null && !isHovered;

          return (
            <a
              key={work.title}
              href={work.href}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 py-8 first:border-t transition-all duration-500 ${
                isDimmed ? "opacity-30" : "opacity-100"
              } ${isHovered ? "translate-x-2" : "translate-x-0"}`}
            >
              <div>
                <h3 className="text-3xl md:text-5xl font-black">{work.title}</h3>
                <p className="text-sm md:text-base text-zinc-500 mt-2">{work.description}</p>
              </div>
              <ArrowUpRight
                className={`w-8 h-8 shrink-0 transition-transform duration-500 ${isHovered ? "rotate-45" : "rotate-0"}`}
              />
            </a>
          );
        })}
      </div>

      <div className="relative z-10 flex justify-center mt-16">
        <Link href="/projects" className="px-6 py-3 rounded-full border border-black dark:border-white text-sm font-semibold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all">
          SEE MORE
        </Link>
      </div>

      {/* Preview gambar yang mengikuti kursor saat hover salah satu project */}
      <div
        ref={previewRef}
        className="fixed top-0 left-0 w-64 h-40 rounded-2xl overflow-hidden pointer-events-none z-40 -translate-x-1/2 -translate-y-1/2 shadow-2xl transition-opacity duration-300"
        style={{ opacity: hoveredIndex !== null ? 1 : 0 }}
      >
        {hoveredIndex !== null && (
          <Image src={WORKS[hoveredIndex].image} alt={WORKS[hoveredIndex].title} fill sizes="256px" className="object-contain" />
        )}
      </div>
    </section>
  );
}