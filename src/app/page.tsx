import Link from "next/link";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Experience from "@/components/experience";
import Testimonials from "@/components/testimonials";
import CTA from "@/components/cta";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen font-sans selection:bg-white/20 selection:text-white">
      <main className="flex flex-col pb-0">
        <Hero />
        <Projects />
        <Experience />
        <Testimonials />
        <CTA />
      </main>

      <footer className="border-t border-white/5 bg-black/50 py-12 backdrop-blur-xl">
        <div className="container mx-auto flex flex-col items-center justify-center gap-6 px-6">
           <div className="flex gap-8">
             <Link href="https://twitter.com/dennissaitabau" target="_blank" className="text-zinc-500 transition-colors hover:text-white">
               <Twitter className="h-8 w-8" strokeWidth={2.5} />
             </Link>
             <Link href="https://github.com/Saitabau-Dennis" target="_blank" className="text-zinc-500 transition-colors hover:text-white">
               <Github className="h-8 w-8" strokeWidth={2.5} />
             </Link>
             <Link href="https://www.linkedin.com/in/dennis-saitabau/" target="_blank" className="text-zinc-500 transition-colors hover:text-white">
                <Linkedin className="h-8 w-8" strokeWidth={2.5} />
             </Link>
             <Link href="mailto:dennisntete28@gmail.com" className="text-zinc-500 transition-colors hover:text-white">
               <Mail className="h-8 w-8" strokeWidth={2.5} />
             </Link>
           </div>
           <p className="text-sm text-zinc-500">
             &copy; {new Date().getFullYear()} Dennis Saitabau. All rights reserved.
           </p>
        </div>
      </footer>
    </div>
  );
}
