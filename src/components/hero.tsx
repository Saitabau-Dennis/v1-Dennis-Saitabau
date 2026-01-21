"use client";


import Silk from "@/components/Silk";
import Stats from "@/components/stats";
import { ArrowRight, ArrowRightCircle, ArrowRightFromLineIcon, ArrowUp, ArrowUpDown, MoveUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center pt-12 px-6 sm:px-12 md:pt-20">
      <div className="container mx-auto max-w-7xl">

        {/* Top Split Section */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-start md:gap-16">

          {/* Left: Title & Actions */}
          <div className="flex flex-col items-start text-left">
            <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Software Engineer
            </h1>
            <h2 className="mt-4 text-2xl text-zinc-500 font-mono">
              — turning ideas into code since 2022
            </h2>

            <div className="mt-8 hidden md:flex flex-row items-center gap-4">
               <a
                href="#contact"
                className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-white px-8 font-medium text-black transition-all hover:bg-zinc-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] sm:h-16 sm:px-12 sm:text-xl whitespace-nowrap"
              >
                <span className="relative z-10">Book a call</span>
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                className="group inline-flex h-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900/50 px-8 font-medium text-white transition-all hover:border-zinc-500 hover:bg-zinc-800 sm:h-16 sm:px-12 sm:text-lg gap-2 whitespace-nowrap"
                >
                <MoveUpRight className="h-4 w-4" />
                <span>View resume</span>
                </a>
            </div>
          </div>

          {/* Right: Bio Description */}
          <div className="pt-2 md:pl-6">
            <p className="text-lg text-zinc-400 leading-relaxed max-w-lg">
              Growing up, I was always fascinated by technology & its endless possibilities.
            </p>
            <p className="mt-4 text-lg text-zinc-400 leading-relaxed max-w-lg">
              Now, I build and ship incredible software for companies across the world.
              With commercial experience spanning <strong className="text-white">7 years</strong> and contributions to open source, well, I'm the guy to count on.
            </p>

            <div className="mt-8 flex md:hidden flex-row items-center gap-4">
               <a
                href="#contact"
                className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-white px-8 font-medium text-black transition-all hover:bg-zinc-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] sm:h-16 sm:px-12 sm:text-xl whitespace-nowrap"
              >
                <span className="relative z-10">Book a call</span>
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                className="group inline-flex h-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900/50 px-8 font-medium text-white transition-all hover:border-zinc-500 hover:bg-zinc-800 sm:h-16 sm:px-12 sm:text-lg gap-2 whitespace-nowrap"
                >
                <MoveUpRight className="h-4 w-4" />
                <span>View resume</span>
                </a>
            </div>
          </div>
        </div>

        {/* Large Banner Image with Animated Gradient */}
        <div className="mt-8 w-full sm:mt-16">
           <div className="h-[200px] w-full overflow-hidden rounded-[2.5rem] bg-zinc-900 border border-white/10 sm:h-[300px] relative group">
              {/* Animated Gradient Background */}
              {/* Animated Gradient Background */}
              <div className="absolute inset-0">
                <Silk
                  speed={5}
                  scale={1}
                  color="#0d43e3"
                  noiseIntensity={1.5}
                  rotation={0}
                />
              </div>

              {/* Glass Overlay for depth */}
              <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px]" />
           </div>
        </div>

        {/* Stats Section Integrated */}

          <Stats />


      </div>
    </section>
  );
}
