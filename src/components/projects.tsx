"use client";


import { ArrowRight, ArrowUpRight, MoveRight } from "lucide-react";
import Image from "next/image";
import SectionContainer from "./sectioncontainer";

export default function Projects() {
  const projects = [
    {
      title: "Fintech Dashboard",
      description: "Real-time analytics for a next-gen banking platform.",
      tags: ["Next.js", "D3.js"],
      colSpan: "md:col-span-2",
      gradient: "from-blue-600/20 to-blue-900/20",
      accent: "from-blue-500 to-cyan-400",
    },
    {
      title: "E-Commerce",
      description: "Headless Shopify storefront with 3D product previews.",
      tags: ["Shopify", "Three.js"],
      colSpan: "md:col-span-1",
      gradient: "from-purple-600/20 to-purple-900/20",
      accent: "from-purple-500 to-pink-400",
    },
     {
      title: "AI Chat Interface",
      description: "Generative AI chat with streaming responses.",
      tags: ["OpenAI", "React"],
      colSpan: "md:col-span-1",
      gradient: "from-emerald-600/20 to-emerald-900/20",
      accent: "from-emerald-500 to-teal-400",
    },
    {
      title: "Portfolio 2024",
      description: "The award-winning personal site you're looking at.",
      tags: ["Framer Motion", "Tailwind"],
      colSpan: "md:col-span-2",
      gradient: "from-zinc-600/20 to-zinc-900/20",
      accent: "from-zinc-500 to-white",
    },
  ];

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
              className={`group flex flex-col gap-4 ${project.colSpan}`}
            >
              <div className={`relative h-64 sm:h-80 w-full overflow-hidden rounded-[2rem] bg-zinc-950 border border-white/5 transition-all duration-500 group-hover:border-white/10 group-hover:shadow-2xl`}>
                 {/* Internal Gradient Background */}
                 <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />



                 {/* Center Visual */}
                 <div className="absolute inset-0 flex items-center justify-center p-8">
                    <div className="relative z-10 p-6 rounded-2xl bg-black/40 backdrop-blur-md border border-white/5 transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-2">
                         <h3 className={`text-2xl sm:text-3xl font-bold bg-gradient-to-r ${project.accent} bg-clip-text text-transparent tracking-tighter text-center`}>
                            {project.title}
                        </h3>
                    </div>
                 </div>

                 {/* Bottom Glow */}
                 <div className={`absolute -bottom-12 left-1/2 -translate-x-1/2 w-4/5 h-32 bg-gradient-to-r ${project.accent} blur-[80px] opacity-20 group-hover:opacity-50 transition-all duration-700`} />
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-1">
                   <h3 className="text-xl font-bold text-white tracking-tight">{project.title}</h3>
                   <p className="text-zinc-400 text-sm leading-relaxed line-clamp-2">{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                   {project.tags.map(tag => (
                      <span key={tag} className="text-xs font-mono text-zinc-500 border border-zinc-800 rounded-full px-3 py-1 bg-zinc-900/50">
                        {tag}
                      </span>
                   ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
