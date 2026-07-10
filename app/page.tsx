"use client";

import { useState, useRef } from "react";
import Preloader from "../components/Preloader";
import AboutIntro from "../components/AboutIntro";
import TechMarquee from "../components/TechMarquee";
import WorksList from "../components/WorksList";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon, LogoIcon } from "../components/Icons";
import { useMagnetic } from "../hooks/useMagnetic";

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);
  const contactRef = useRef<HTMLAnchorElement>(null);
  useMagnetic(contactRef, 0.3);

  const scrollToWorks = () => {
    document.getElementById("works-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <main
        className="bg-[#FAFAFA] dark:bg-[#0B0B0B] text-[#0B0B0B] dark:text-[#FAFAFA] min-h-screen overflow-x-hidden font-sans transition-colors"
        style={{ pointerEvents: isLoading ? "none" : "auto" }}
        aria-hidden={isLoading}
      >
        {/* HERO SECTION */}
        <section className="relative min-h-screen w-full flex flex-col justify-between items-center p-6 md:p-12 overflow-hidden bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-indigo-50/50 via-purple-50/30 to-pink-50/50 dark:from-indigo-950/20 dark:via-purple-950/10 dark:to-pink-950/10">
          <header className="w-full flex justify-between items-start z-10">
            <LogoIcon />
          </header>

          <div className="w-full flex flex-col justify-center items-center my-auto z-10 space-y-4">
            <div className="w-full overflow-hidden">
              <motion.div
                className="flex whitespace-nowrap text-[14vw] md:text-[10rem] font-black uppercase tracking-tighter leading-[0.8]"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ ease: "linear", duration: 50, repeat: Infinity }}
              >
                <span className="pr-8">Software Developer - UI/UX DESIGNER -&nbsp;</span>
                <span className="pr-8">Software Developer - UI/UX DESIGNER -&nbsp;</span>
              </motion.div>
            </div>
            <div className="w-full overflow-hidden">
              <motion.div
                className="flex whitespace-nowrap text-[14vw] md:text-[10rem] font-black uppercase tracking-tighter leading-[0.8] text-zinc-400/20"
                animate={{ x: ["-50%", "0%"] }}
                transition={{ ease: "linear", duration: 20, repeat: Infinity }}
              >
                <span className="pr-8">BACKEND DEVELOPER - FRONTEND DEVELOPER -&nbsp;</span>
                <span className="pr-8">BACKEND DEVELOPER - FRONTEND DEVELOPER -&nbsp;</span>
              </motion.div>
            </div>
          </div>

          <button
            onClick={scrollToWorks}
            aria-label="Scroll ke bagian berikutnya"
            className="z-10 mb-12 w-16 h-16 rounded-full border border-black dark:border-white flex items-center justify-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
          >
            <ArrowDown className="w-6 h-6" />
          </button>
        </section>

        {/* INTRO + TECH STACK */}
        <AboutIntro />
        <TechMarquee />

        {/* MY WORKS */}
        <div id="works-section">
          <WorksList />
        </div>

        {/* CONTACT */}
        <section className="relative w-full py-40 px-6 flex flex-col items-center justify-center text-center overflow-hidden">
          <p className="text-sm md:text-base uppercase tracking-[0.3em] text-zinc-500 mb-6">
            Got a project in mind?
          </p>
          <a
            ref={contactRef}
            href="https://mail.google.com/mail/u/0/?fs=1&to=ilhamdwicahya338@gmail.com&tf=cm"
            className="text-[13vw] md:text-[6rem] font-black uppercase tracking-tighter leading-none hover:opacity-70 transition-opacity"
          >
            Let&apos;s Talk
          </a>
          <div className="flex items-center gap-6 mt-12">
            <a href="https://github.com/1LH4MDC" target="_blank" rel="noopener noreferrer" aria-label="Github" className="text-zinc-500 hover:text-black dark:hover:text-white transition-colors">
              <GithubIcon className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/ilhamdwicahya/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-zinc-500 hover:text-black dark:hover:text-white transition-colors">
              <LinkedinIcon className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/ilhm_dc/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-zinc-500 hover:text-black dark:hover:text-white transition-colors">
              <InstagramIcon className="w-6 h-6" />
            </a>
          </div>
        </section>
      </main>

      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
    </>
  );
}