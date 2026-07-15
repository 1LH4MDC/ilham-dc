"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FileText, Send } from "lucide-react";
import { FaDribbble } from "react-icons/fa";
import { SiBlogger } from "react-icons/si";

import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiDart,
  SiLaravel,
  SiFigma,
  SiJavascript,
} from "react-icons/si";
import { GithubIcon, LinkedinIcon } from "../../components/Icons";
import Globe from "../../components/Globe";
import { useMagnetic } from "../../hooks/useMagnetic";
import { fadeUp } from "../../lib/motion";

const EXPERIENCE = [
  { company: "TECHNOLOGY INNOVATIVE CHALLENGE 9.0\nNational-Level Web Development Competition ", role: "Public Relations Division", period: "June 2026 - Present" },
  { company: "Tim PPK Ormawa BEM FKM", role: "Technology Division", period: "May 2026 - Present" },
  { company: "UKM UNIVERSITY STUDENT ENGLISH FORUM (USEF)", role: "Public Speaking Division", period: "January 2025 - December 2025" },
  { company: "SimoGura", role: "UI/UX Designer, Frontend Developer", period: "April 2026 - July 2026" },
];

const TECH_STACK = [
  { icon: SiReact, label: "React" },
  { icon: SiNextdotjs, label: "Next.js" },
  { icon: SiTailwindcss, label: "Tailwind CSS" },
  { icon: SiDart, label: "Dart" },
  { icon: SiLaravel, label: "Laravel" },
  { icon: SiFigma, label: "Figma" },
  { icon: SiJavascript, label: "JavaScript" },
];

export default function AboutPage() {
  const dribbleRef = useRef<HTMLAnchorElement>(null);
  const bloggerRef = useRef<HTMLAnchorElement>(null);
  const githubRef = useRef<HTMLAnchorElement>(null);
  const linkedinRef = useRef<HTMLAnchorElement>(null);

  useMagnetic(dribbleRef);
  useMagnetic(bloggerRef);
  useMagnetic(githubRef);
  useMagnetic(linkedinRef);

  return (
    <main className="bg-[#FAFAFA] dark:bg-[#0B0B0B] text-[#0B0B0B] dark:text-[#FAFAFA] min-h-screen px-6 md:px-0 py-32 md:py-40 transition-colors">
      <motion.div
        className="max-w-5xl mx-auto space-y-6"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        {/* ROW 1 — Profile + Social cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <motion.div
            variants={fadeUp}
            className="md:col-span-2 md:row-span-2 bg-white dark:bg-zinc-900 rounded-3xl p-10 border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between"
          >
            <div>
              <div className="relative w-20 h-20 mb-6">
                <Image
                  src="/projects/profile.jpeg"
                  alt="Foto profil"
                  fill
                  className="rounded-full object-cover border border-zinc-200 dark:border-zinc-800"
                />
                <span className="absolute -bottom-1 -right-1 text-2xl">👋</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-black">Hi, I&apos;m Ilham Dwi Cahya.</h1>
              <p className="text-lg md:text-xl text-zinc-500 font-bold mt-3">
                I bring ideas to life with code and design.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href="/cv-ilham-dwi-cahya.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-300 dark:border-zinc-700 text-sm font-semibold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
              >
                <FileText className="w-4 h-4" /> Resume / CV
              </a>
              <a
                href="https://mail.google.com/mail/u/0/?fs=1&to=ilhamdwicahya338@gmail.com&tf=cm"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-300 dark:border-zinc-700 text-sm font-semibold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
              >
                <Send className="w-4 h-4" /> Contact Me
              </a>
            </div>
          </motion.div>

          <motion.a
            variants={fadeUp}
            ref={dribbleRef}
            href="https://dribbble.com/ilham-dwi-cahya"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Kunjungi Dribbble"
            className="bg-[#EA4C89] text-white rounded-3xl p-8 flex items-center justify-center hover:opacity-90 transition-opacity"
            >
            <FaDribbble className="w-12 h-12" />
            </motion.a>

          <motion.a
            variants={fadeUp}
            ref={bloggerRef}
            href="https://ilhamdc3407.blogspot.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Kunjungi Blog"
            className="bg-[#FF5722] text-white rounded-3xl p-8 flex items-center justify-center hover:opacity-90 transition-opacity"
            >
            <SiBlogger className="w-12 h-12" />
        </motion.a>

          <motion.a
            variants={fadeUp}
            ref={githubRef}
            href="https://github.com/1LH4MDC"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Kunjungi GitHub"
            className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 flex items-center justify-center hover:opacity-90 transition-opacity"
          >
            <GithubIcon className="w-12 h-12" />
          </motion.a>

          <motion.a
            variants={fadeUp}
            ref={linkedinRef}
            href="https://www.linkedin.com/in/ilhamdwicahya/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Kunjungi LinkedIn"
            className="bg-[#1B5EC9] text-white rounded-3xl p-8 flex items-center justify-center hover:opacity-90 transition-opacity"
          >
            <LinkedinIcon className="w-12 h-12" />
          </motion.a>
        </div>

        {/* ROW 2 — Bio */}
        <motion.div
          variants={fadeUp}
          className="bg-white dark:bg-zinc-900 rounded-3xl p-10 border border-zinc-200 dark:border-zinc-800"
        >
          <p className="text-lg md:text-xl leading-relaxed text-zinc-600 dark:text-zinc-400">
            <span className="text-[#0B0B0B] dark:text-white font-bold">
            </span>{" "}
            Information Technology student at the University of Jember with a strong focus on mobile and web development. I love turning ideas into user-friendly applications by blending solid coding with intuitive UI/UX design. I m highly motivated to explore new technologies and continuously grow as a professional developer.
          </p>
        </motion.div>

        {/* ROW 3 — Experience */}
        <motion.div
        variants={fadeUp}
        className="bg-white dark:bg-zinc-900 rounded-3xl p-6 md:p-10 border border-zinc-200 dark:border-zinc-800"
        >
        <h2 className="text-2xl font-black mb-6">Experience</h2>
        <div className="space-y-6">
            {EXPERIENCE.map((exp) => (
            <div
                key={`${exp.company}-${exp.role}`}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4"
            >
                <div className="flex items-start sm:items-center gap-4 min-w-0">
                <div className="w-10 h-10 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-xs font-bold shrink-0">
                    {exp.company.charAt(0)}
                </div>
                <div className="min-w-0">
                    <p className="font-bold text-sm sm:text-base leading-snug whitespace-pre-line">
                    {exp.company}
                    </p>
                    <p className="text-sm text-zinc-500">{exp.role}</p>
                </div>
                </div>
                <p className="text-xs sm:text-sm text-zinc-500 shrink-0 sm:pl-14">
                {exp.period}
                </p>
            </div>
            ))}
        </div>
        </motion.div>

        {/* ROW 4 — Location (dengan Globe) + Tech stack */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            variants={fadeUp}
            className="relative overflow-hidden bg-white dark:bg-zinc-900 rounded-3xl pl-6 pr-8 py-8 border border-zinc-200 dark:border-zinc-800 min-h-[180px] flex items-start"
            >
            <p className="text-lg font-bold z-10 leading-snug">
                Banyuwangi,
                <br />
                Jawa Timur, <br />
                Indonesia
            </p>
            <div className="absolute -bottom-20 -right-20 w-64 h-64">
                <Globe />
            </div>
            </motion.div>

          <motion.div
            variants={fadeUp}
            className="md:col-span-2 bg-white dark:bg-zinc-900 rounded-3xl p-8 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center gap-12 flex-wrap"
          >
            {TECH_STACK.map(({ icon: Icon, label }) => (
              <Icon
                key={label}
                title={label}
                className="w-8 h-8 text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
              />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </main>
  );
}