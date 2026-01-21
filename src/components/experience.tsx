"use client";


import { ArrowRight, MoveRight, Plus } from "lucide-react";
import { useState } from "react";
import SectionContainer from "./sectioncontainer";

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const experiences = [
    {
      company: "Distributed",
      role: "Senior Frontend Engineer",
      period: "Mar 2022 - Present",
      logo: "D",
      color: "bg-pink-600",
      description: "Leading the frontend architecture and development lifecycle for enterprise-scale React applications, ensuring high performance and maintainability.",
      achievements: [
        "Architected and implemented a micro-frontend architecture, resulting in a 40% reduction in build times and improved team autonomy.",
        "Established comprehensive code quality standards and CI/CD workflows, significantly reducing production bugs.",
        "Mentored a team of 5 junior developers, conducting code reviews and technical workshops to foster skill growth.",
        "Collaborated closely with product managers and UX designers to translate complex requirements into seamless user interfaces."
      ]
    },
    {
      company: "Shop Doctors",
      role: "Frontend Developer",
      period: "Jan 2020 - Feb 2022",
      logo: "S",
      color: "bg-orange-500",
      description: "Specialized in developing high-performance custom Shopify experiences for diverse e-commerce clients.",
      achievements: [
        "Developed and customized premium Shopify themes, ensuring pixel-perfect implementation of design mockups.",
        "Optimized frontend performance to achieve 90+ Lighthouse scores, directly contributing to a 15% increase in conversion rates.",
        "Integrated complex third-party apps and payment gateways improving the overall checkout experience.",
        "Utilized Liquid templating and modern JavaScript to build dynamic and responsive storefronts."
      ]
    },
    {
       company: "Granular",
       role: "Full Stack Engineer",
       period: "Feb 2020 - Feb 2022",
       logo: "G",
       color: "bg-green-500",
       description: "Full-stack development of critical internal tools and data processing systems.",
       achievements: [
        "Built and maintained robust internal dashboards using Next.js and Node.js to visualize key business metrics.",
        "Designed and implemented RESTful APIs for automated reporting, synchronizing data across Salesforce and internal databases.",
        "Optimized database queries and schema designs to handle increasing data loads efficiently.",
        "Partnered with operations teams to identify process bottlenecks and deliver software solutions that automated manual tasks."
       ]
    },
    {
      company: "Kenyan Wallstreet",
      role: "React Native Intern",
      period: "Jan 2020 - Jan 2020",
      logo: "K",
      color: "bg-zinc-800",
      description: "Contributed to the development of a cross-platform mobile news application.",
      achievements: [
        "Collaborated on the React Native mobile app codebases for both iOS and Android platforms.",
        "Implemented new user-facing features and resolved critical bugs to improve app stability.",
        "Participated in daily stand-ups and agile sprints, gaining hands-on experience in professional software development workflows.",
        "Assisted in the integration of push notifications and analytics tools to track user engagement."
      ]
    },
    {
      company: "Freelance",
      role: "Software Developer",
      period: "Jun 2019 - Dec 2019",
      logo: "F",
      color: "bg-blue-600",
      description: "Provided tailored web development services to small businesses and startups.",
      achievements: [
        "Delivered custom, SEO-friendly websites using modern web technologies like React and Tailwind CSS.",
        "Managed the full client lifecycle from requirement gathering and prototyping to deployment and maintenance.",
        "Ensured all deliverables met strict accessibility and performance standards.",
        "Consulted clients on digital strategy and technical feasibility for their product ideas."
      ]
    }
  ];

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
                    <div className={`h-12 w-12 rounded-xl flex items-center justify-center text-xl font-bold text-white shadow-lg shrink-0 ${exp.color}`}>
                       {exp.logo}
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
                        <div className="pl-0 sm:pl-16 max-w-3xl">
                          <p className="text-zinc-400 mb-4 leading-relaxed">
                             {exp.description}
                          </p>
                          <ul className="flex flex-col gap-2">
                             {exp.achievements.map((item, i) => (
                                <li key={i} className="text-zinc-400 flex items-start gap-2">
                                   <span className="text-zinc-600 mt-2 h-1.5 w-1.5 rounded-full bg-zinc-600 shrink-0" />
                                   <span className="leading-relaxed">{item}</span>
                                </li>
                             ))}
                          </ul>
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
