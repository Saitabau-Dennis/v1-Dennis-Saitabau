"use client";


import { Mail, Calendar, Sparkles, SendHorizonal } from "lucide-react";
import Silk from "./Silk";

export default function CTA() {
  return (
    <section id="contact" className="relative w-full overflow-hidden py-12 sm:py-32">
      {/* Immersive Background */}
      <div className="absolute inset-0 -z-10">
        <Silk
          speed={5}
          scale={1}
          color="#0d43e3"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-blue-400 backdrop-blur-sm shadow-[0_0_15px_rgba(59,130,246,0.5)]">
            <Sparkles className="h-4 w-4 fill-blue-400" />
            <span>Open for new projects</span>
          </div>

          <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl bg-clip-text whitespace-nowrap">
             Ready to collaborate?
          </h2>

          <p className="mt-8 max-w-2xl text-base text-zinc-400 leading-relaxed">
             I'm currently available for freelance work and full-time opportunities.
             Let's build something extraordinary together.
          </p>

          <div className="mt-12 flex flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <a
              href="mailto:dennisntete28@gmail.com"
              className="group relative inline-flex h-14 flex-1 sm:flex-none sm:w-auto sm:min-w-[200px] items-center justify-center overflow-hidden rounded-full bg-white px-6 sm:px-10 font-medium text-black transition-all hover:bg-zinc-200 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] text-lg whitespace-nowrap"
            >
              <div className="flex items-center gap-2">
                <SendHorizonal className="h-5 w-5" />
                <span className="relative z-10">Email Me</span>
              </div>
            </a>

            <a
              href="#"
              className="group inline-flex h-14 flex-1 sm:flex-none sm:w-auto sm:min-w-[200px] items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 sm:px-10 font-medium text-white transition-all hover:border-white/20 hover:bg-white/10 hover:scale-105 backdrop-blur-sm text-lg whitespace-nowrap"
            >
              <div className="flex items-center gap-2">

                <span className="whitespace-nowrap">Schedule a Call</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
