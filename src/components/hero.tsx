"use client";


import Silk from "@/components/Silk";
import Stats from "@/components/stats";
import { ArrowRight, ArrowRightCircle, ArrowRightFromLineIcon, ArrowUp, ArrowUpDown, MoveUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center pt-8 px-6 sm:px-12 md:pt-20">
      <div className="container mx-auto max-w-7xl">

        {/* Top Split Section */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-start md:gap-16">

          {/* Left: Title & Actions */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Software Engineer
            </h1>
            <h2 className="mt-2 text-base text-zinc-500 font-mono sm:text-xl md:text-2xl lg:text-2xl">
              — turning ideas into code since 2022
            </h2>

            <div className="mt-12 hidden md:flex flex-row items-center gap-4">
               <a
                href="#contact"
                className="group relative inline-flex h-16 items-center justify-center overflow-hidden rounded-full bg-white px-10 font-bold text-black transition-all hover:bg-zinc-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] sm:h-20 sm:px-14 sm:text-xl whitespace-nowrap"
              >
                <span className="relative z-10">Book a call</span>
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                className="group inline-flex h-16 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900/50 px-10 font-bold text-white transition-all hover:border-zinc-500 hover:bg-zinc-800 sm:h-20 sm:px-14 sm:text-lg gap-2 whitespace-nowrap"
                >
                <MoveUpRight className="h-5 w-5" />
                <span>View resume</span>
                </a>
            </div>
          </div>

          {/* Right: Bio Description */}
          <div className="pt-2 md:pl-6 flex flex-col items-center text-center md:items-start md:text-left">
            <p className="text-lg text-zinc-400 leading-relaxed max-w-lg">
              Growing up, I was always fascinated by technology & its endless possibilities.
            </p>
            <p className="mt-4 text-lg text-zinc-400 leading-relaxed max-w-lg">
              Now, I build and ship incredible software for companies across the world.
              With commercial experience spanning <strong className="text-white">2 years</strong> and contributions to open source, well, I'm the guy to count on.
            </p>
            
            <div className="mt-8">
              <a href="https://wakatime.com/@018e4118-cae8-4654-94e2-6123b764cc11" target="_blank" rel="noopener noreferrer" className="inline-block transition-transform hover:scale-105">
                <img src="https://wakatime.com/badge/user/018e4118-cae8-4654-94e2-6123b764cc11.svg" alt="Total time coded since Mar 15 2024" className="h-6" />
              </a>
            </div>

            <div className="mt-8 flex md:hidden flex-row items-center gap-4 w-full">
               <a
                href="#contact"
                className="group relative inline-flex h-16 w-full items-center justify-center overflow-hidden rounded-full bg-white px-8 font-bold text-black transition-all hover:bg-zinc-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] sm:h-20 sm:text-xl whitespace-nowrap"
              >
                <span className="relative z-10">Book a call</span>
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                className="group inline-flex h-16 w-full items-center justify-center rounded-full border border-zinc-700 bg-zinc-900/50 px-8 font-bold text-white transition-all hover:border-zinc-500 hover:bg-zinc-800 sm:h-20 sm:text-lg gap-2 whitespace-nowrap"
                >
                <MoveUpRight className="h-5 w-5" />
                <span>View resume</span>
                </a>
            </div>
          </div>
        </div>

        {/* Large Banner Image with Animated Gradient */}
        <div className="mt-6 w-full sm:mt-10">
           <div className="h-[250px] w-full overflow-hidden rounded-[3rem] bg-zinc-950 border border-white/10 sm:h-[350px] relative group shadow-2xl shadow-blue-900/20 ring-2 ring-white/20 hover:ring-white/30 transition-all duration-500">
              {/* Animated Gradient Background */}
              <div className="absolute inset-0 opacity-80 group-hover:opacity-100 transition-opacity duration-700">
                <Silk
                  speed={4}
                  scale={1.2}
                  color="#0d43e3"
                  noiseIntensity={1.2}
                  rotation={0}
                />
              </div>

              {/* Vignette & Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/20 pointer-events-none" />
              <div className="absolute inset-0 bg-white/5 backdrop-blur-[1px] group-hover:backdrop-blur-none transition-all duration-700" />
              
              {/* Content Placeholder (Optional - can be removed or used for text/image) */}
              <div className="absolute bottom-8 left-8 sm:bottom-12 sm:left-12 max-w-xl p-4">
                {/* <h3 className="text-2xl sm:text-4xl font-bold text-white mb-2">Visualizing Complexity</h3> */}
                {/* <p className="text-zinc-400">Designing interfaces that feel like magic.</p> */}
              </div>
           </div>
        </div>

        {/* Stats Section Integrated */}

          <Stats />


      </div>
    </section>
  );
}
