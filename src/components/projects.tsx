"use client";

import { useState } from "react";
import { ArrowRight, ArrowUpRight, MoveRight, Link, FolderGit2 } from "lucide-react";
import Image from "next/image";
import SectionContainer from "./sectioncontainer";
import { ProjectModal } from "./ProjectModal";
import { projects } from "@/data/projects";

type Project = typeof projects[0];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <SectionContainer id="projects" className="px-0 sm:px-6">
      <div className="container mx-auto max-w-7xl px-2 sm:px-4">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <MoveRight className="h-4 w-4 text-blue-500" />
            <h2 className="text-sm font-medium uppercase tracking-widest text-blue-500 font-mono">
              My Coolest Projects
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group flex flex-col gap-4 ${project.colSpan} cursor-pointer`}
              onClick={() => setSelectedProject(project)}
            >
              <div className={`relative h-64 sm:h-80 w-full overflow-hidden rounded-[2rem] bg-zinc-100 border border-zinc-200 transition-all duration-500 hover:bg-zinc-50`}>
                 {project.image ? (
                   <Image
                     src={project.image}
                     alt={project.title}
                     fill
                     className="object-cover transition-transform duration-700 group-hover:scale-105"
                   />
                 ) : (
                   <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity">
                      <FolderGit2 size={48} className="text-zinc-400" />
                   </div>
                 )}
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-1">
                   <div className="flex items-center gap-2">
                    <h3 className="text-2xl font-bold text-zinc-900 tracking-tight">{project.title}</h3>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-1 text-zinc-900"
                    >
                      <Link size={18} />
                    </a>
                   </div>
                   <p className="text-zinc-600 text-base leading-relaxed line-clamp-2">{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                   {project.tags.map(tag => (
                      <span key={tag} className="text-xs font-mono text-zinc-600 border border-zinc-200 rounded-full px-3 py-1 bg-zinc-50">
                        {tag}
                      </span>
                   ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </SectionContainer>
  );
}