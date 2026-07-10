// app/projects/[slug]/page.tsx
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { PROJECTS } from "../../../lib/projects";

// Bikin Next.js generate halaman statis untuk tiap slug di PROJECTS
export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <main className="min-h-screen w-full px-6 py-16 md:py-24 bg-[#FAFAFA] dark:bg-[#0B0B0B] text-[#0B0B0B] dark:text-[#FAFAFA] transition-colors">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-black dark:hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold mb-3">{project.title}</h1>


        {/* KODE BARU: Membungkus semua badge dengan flex dan looping */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tools.map((tool, index) => (
            <span 
              key={index} 
              className="inline-block text-xs px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300"
            >
              {tool}
            </span>
          ))}
        </div>


        <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-10 bg-zinc-100 dark:bg-zinc-800">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(min-width: 768px) 768px, 100vw"
            className="object-contain"
          />
        </div>

        <div className="space-y-5 text-zinc-600 dark:text-zinc-400 leading-relaxed">
          {project.longDescription.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </div>
    </main>
  );
}