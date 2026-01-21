"use client";


import { ArrowRight, MoveRight, Plus, Briefcase } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import SectionContainer from "./sectioncontainer";
import { experiences } from "@/data/experience";

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <SectionContainer id="experience" className="px-0 sm:px-6" containerClassName="pb-0">
      <div className="container mx-auto max-w-7xl px-2 sm:px-6">
        <div className="flex items-center gap-3 mb-12">
           <MoveRight className="h-4 w-4 text-blue-500" />
           <h2 className="text-sm font-medium uppercase tracking-widest text-blue-500 font-mono">
             Professional Work Experience
           </h2>
         </div>

        <div className="flex flex-col">
          {experiences.map((exp, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <div
                 key={index}
                 onClick={() => setExpandedIndex(isExpanded ? null : index)}
                 className="group flex flex-col gap-4 py-8 border-b border-white/5 last:border-0 cursor-pointer"
              >
                 <div className="flex items-start gap-3">
                    {/* Logo Box */}
                    <div className="h-16 w-16 rounded-md bg-zinc-800 border border-white/10 flex items-center justify-center overflow-hidden shrink-0">
                       {exp.logoUrl ? (
                         <Image 
                           src={exp.logoUrl} 
                           alt={`${exp.company} logo`} 
                           width={64} 
                           height={64} 
                           className="object-cover w-full h-full"
                         />
                       ) : (
                         <Briefcase size={24} className="text-zinc-500" />
                       )}
                    </div>

                    <div className="flex flex-col flex-1 gap-1 min-w-0">
                       <div className="flex items-center justify-between gap-2">
                           <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors truncate">
                              {exp.company}
                           </h3>
                           <span className="font-mono text-xs text-zinc-500 uppercase tracking-wider whitespace-nowrap">{exp.period}</span>
                       </div>

                       <div className="flex items-center justify-between gap-4">
                           <p className="text-zinc-400 text-sm font-medium truncate">
                              {exp.role}
                           </p>
                           <div className="shrink-0">
                              <Plus className={`h-5 w-5 transition-colors ${isExpanded ? 'text-white' : 'text-zinc-600 group-hover:text-white'}`} style={{ transform: isExpanded ? 'rotate(45deg)' : 'none' }} />
                            </div>
                       </div>
                    </div>
                 </div>

                   {isExpanded && (
                     <div className="overflow-hidden">
                        <div className="mt-4 pl-0 sm:pl-16 max-w-3xl">
                          <p className="text-foreground mb-6 leading-relaxed text-base font-normal">
                             {exp.description}
                          </p>

                          <ul className="flex flex-col gap-3 mb-6">
                             {exp.achievements.map((item, i) => (
                                <li key={i} className="text-zinc-300 flex items-start gap-3 text-sm leading-relaxed">
                                   <div className={`mt-1.5 h-1.5 w-1.5 rounded-full ${exp.color} shrink-0`} />
                                   <span>{item}</span>
                                </li>
                             ))}
                          </ul>

                          <p className="text-zinc-400 text-sm font-light italic">
                            Tooling used: {exp.techStack.join(", ")}
                          </p>
                        </div>
                     </div>
                   )}
              </div>
            );
          })}
        </div>
      </div>
    </SectionContainer>
  );
}
