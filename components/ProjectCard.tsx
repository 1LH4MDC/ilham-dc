// components/ProjectCard.tsx
import Image from "next/image";
import Link from "next/link";
import type { Project } from "../lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col rounded-3xl overflow-hidden bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-lg transition-shadow duration-300">
      {/* Thumbnail */}
      <div className="relative w-full aspect-[4/3] bg-zinc-100 dark:bg-zinc-800">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-contain"
        />
      </div>

      {/* Konten */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-xl font-bold">{project.title}</h3>
        <p className="text-sm text-zinc-500 mt-2 flex-1">{project.description}</p>

        {/* KODE BARU: Looping untuk memunculkan semua tool di dalam Card */}
        <div className="flex flex-wrap gap-2 mt-4 mb-5">
          {project.tools.map((tool, index) => (
            <span 
              key={index}
              className="inline-block w-fit text-xs px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300"
            >
              {tool}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {project.viewDesignUrl && (
            <a
              href={project.viewDesignUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-black text-white dark:bg-white dark:text-black text-sm font-medium hover:opacity-80 transition-opacity"
            >
              View Design
            </a>
          )}
          <Link
            href={`/projects/${project.slug}`}
            className="px-4 py-2 rounded-full border border-zinc-300 dark:border-zinc-700 text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}