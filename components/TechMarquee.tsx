"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiSupabase,
  SiJavascript,
  SiTailwindcss,
  SiLaravel,
  SiPhp,
  SiPython,
  SiNodedotjs,
  SiFigma,
  SiGit,
  SiGithub,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiPostman,
  SiFramer,
  SiDart,
  SiVercel,
  SiHtml5,
  SiTrello,
  SiFirebase,
  SiFlutter,
  
} from "react-icons/si";

// Tambah/kurangi sesuai tech stack kamu sendiri
const TECH_ICONS = [
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiSupabase,
  SiJavascript,
  SiTailwindcss,
  SiLaravel,
  SiPhp,
  SiPython,
  SiNodedotjs,
  SiFigma,
  SiGit,
  SiGithub,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiPostman,
  SiFramer,
  SiDart,
  SiVercel,
  SiHtml5,
  SiTrello,
    SiFirebase,
    SiFlutter,
];

export default function TechMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const track = trackRef.current;
    if (!track) return;

    // Kontennya diduplikat 2x, jadi setengah dari total lebar = 1 set penuh
    const totalWidth = track.scrollWidth / 2;

    const tween = gsap.to(track, {
      x: -totalWidth,
      duration: 50,
      ease: "none",
      repeat: -1,
    });

    return () => {
      tween.kill();
    };
  }, []);

  return (
    <div className="w-full overflow-hidden py-10 border-y border-zinc-200 dark:border-zinc-800">
      <div ref={trackRef} className="flex items-center gap-14 w-max">
        {[...TECH_ICONS, ...TECH_ICONS].map((Icon, i) => (
          <Icon
            key={i}
            className="text-5xl md:text-6xl text-zinc-400 dark:text-zinc-600 hover:text-black dark:hover:text-white transition-colors shrink-0"
          />
        ))}
      </div>
    </div>
  );
}