"use client";

import { useRef } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutIntro() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      gsap.from(textRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%", // mulai animasi saat top section masuk 75% viewport
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="w-full py-24 px-6 flex flex-col items-center text-center">
      <p
        ref={textRef}
        className="max-w-2xl text-xl md:text-2xl font-medium leading-relaxed text-zinc-700 dark:text-zinc-300"
      >
        Hi, I&apos;m Ilham Dwi Cahya. A tech enthusiast and Software Developer. Mainly
        focused on Web Development and Visual Design. I love creating intuitive
        and visually appealing stuff like this.
      </p>

      <Link
        href="/about"
        className="mt-10 px-6 py-3 rounded-full border border-black dark:border-white text-sm font-semibold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
      >
        MORE ABOUT ME
      </Link>
    </section>
  );
}