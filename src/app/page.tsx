import Link from "next/link";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Experience from "@/components/experience";
import Testimonials from "@/components/testimonials";
import CTA from "@/components/cta";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900">
      <main className="flex flex-col pb-0">
        <Hero />
        <Projects />
        <Experience />
        <Testimonials />
        <CTA />
      </main>

      <footer className="border-t border-black/5 bg-white/50 py-12 backdrop-blur-xl">
        <div className="container mx-auto flex flex-col items-center justify-center gap-6 px-6">
           <div className="flex gap-8">
             <Link href="https://twitter.com/dennissaitabau" target="_blank" className="text-zinc-400 transition-colors hover:text-zinc-900">
               <Twitter className="h-8 w-8" strokeWidth={2.5} />
             </Link>
             <Link href="https://github.com/Saitabau-Dennis" target="_blank" className="text-zinc-500 transition-colors hover:text-zinc-900">
               <Github className="h-8 w-8" strokeWidth={2.5} />
             </Link>
             <Link href="https://www.linkedin.com/in/dennis-saitabau/" target="_blank" className="text-zinc-500 transition-colors hover:text-zinc-900">
                <Linkedin className="h-8 w-8" strokeWidth={2.5} />
             </Link>
             <Link href="mailto:dennisntete28@gmail.com" className="text-zinc-500 transition-colors hover:text-zinc-900">
               <Mail className="h-8 w-8" strokeWidth={2.5} />
             </Link>
           </div>
           <p className="text-sm font-medium text-zinc-600">
             &copy; {new Date().getFullYear()} <span className="text-zinc-900 font-bold">Dennis Saitabau</span>. All rights reserved.
           </p>
        </div>
      </footer>
    </div>
  );
}
