"use client";

// app/projects/page.tsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS, CATEGORIES } from "../../lib/projects";
import ProjectCard from "../../components/ProjectCard";

type FilterValue = (typeof CATEGORIES)[number]["value"];

export default function ProjectsPage() {
  const [active, setActive] = useState<FilterValue>("all");

  const filtered =
    active === "all" 
      ? PROJECTS 
      : PROJECTS.filter((p) => p.categories.includes(active));

  return (
    <main className="min-h-screen w-full px-6 md:px-12 py-24 bg-[#FAFAFA] dark:bg-[#0B0B0B] text-[#0B0B0B] dark:text-[#FAFAFA] transition-colors">
      <h1 className="text-4xl md:text-6xl font-black text-center uppercase tracking-tight mb-10">
        My Projects
      </h1>

      {/* FILTER TABS */}
      <div className="flex justify-center gap-2 flex-wrap mb-14">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setActive(cat.value)}
            className={`px-5 py-2 rounded-full text-sm font-medium border transition-colors ${
              active === cat.value
                ? "bg-black text-white dark:bg-white dark:text-black border-black dark:border-white"
                : "border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:border-black dark:hover:border-white"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* GRID PROJECT */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="text-center text-zinc-500 mt-16">
          Belum ada project di kategori ini.
        </p>
      )}
    </main>
  );
}