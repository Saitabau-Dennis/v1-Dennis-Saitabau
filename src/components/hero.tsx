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
            <h1 className="text-3xl font-bold tracking-tighter text-zinc-900 sm:text-5xl md:text-6xl lg:text-7xl">
              Software Engineer
            </h1>
            <h2 className="mt-2 text-base text-zinc-600 font-mono sm:text-xl md:text-2xl lg:text-2xl">
              — turning ideas into code since 2022
            </h2>

            <div className="mt-12 hidden md:flex flex-row items-center gap-4">
               <a
                href="#contact"
                className="group relative inline-flex h-16 items-center justify-center overflow-hidden rounded-full bg-zinc-900 px-12 font-medium text-xl text-white transition-all hover:bg-zinc-800 whitespace-nowrap"
              >
                <span className="relative z-10">Book a call</span>
              </a>
              <a
                href="/files/Resume..pdf"
                target="_blank"
                className="group inline-flex h-16 items-center justify-center rounded-full border-[1.5px] border-zinc-900 bg-transparent px-12 font-medium text-xl text-zinc-900 transition-all hover:bg-zinc-900 hover:text-white whitespace-nowrap"
                >
                <span>View resume</span>
                </a>
            </div>
          </div>

          {/* Right: Bio Description */}
          <div className="pt-2 md:pl-6 flex flex-col items-center text-center md:items-start md:text-left">
            <p className="text-lg text-zinc-700 leading-relaxed max-w-lg">
              Full Stack developer specializing in React.js, Next.js, and Tailwind CSS — building modern, responsive, and user-focused web applications.
            </p>
            <p className="mt-4 text-lg text-zinc-700 leading-relaxed max-w-lg">
              With <strong className="text-zinc-900">3 years</strong> of experience integrating backend services with Node.js and PostgreSQL, I deliver scalable solutions in collaborative Agile environments. Passionate about clean code, code reviews, and seamless user experiences.
            </p>

            <div className="mt-8">
              <a href="https://wakatime.com/@018e4118-cae8-4654-94e2-6123b764cc11" target="_blank" rel="noopener noreferrer" className="inline-block transition-transform hover:scale-105">
                <img src="https://wakatime.com/badge/user/018e4118-cae8-4654-94e2-6123b764cc11.svg" alt="Total time coded since Mar 15 2024" className="h-6" />
              </a>
            </div>

            <div className="mt-8 flex md:hidden flex-row items-center gap-4 w-full">
               <a
                href="#contact"
                className="group relative inline-flex h-16 w-full items-center justify-center overflow-hidden rounded-full bg-zinc-900 px-10 font-medium text-base text-white transition-all hover:bg-zinc-800 whitespace-nowrap"
              >
                <span className="relative z-10">Book a call</span>
              </a>
              <a
                href="/files/Resume..pdf"
                target="_blank"
                className="group inline-flex h-16 w-full items-center justify-center rounded-full border-[1.5px] border-zinc-900 bg-transparent px-10 font-medium text-base text-zinc-900 transition-all hover:bg-zinc-900 hover:text-white whitespace-nowrap"
                >
                <span>View resume</span>
                </a>
            </div>
          </div>
        </div>

        {/* Large Banner Image with Animated Gradient */}
        <div className="mt-6 w-full sm:mt-10">
           <div className="h-[250px] w-full overflow-hidden rounded-[3rem] bg-blue-50 border border-zinc-200 sm:h-[350px] relative group shadow-xl shadow-blue-500/10 ring-2 ring-zinc-200 hover:ring-zinc-300 transition-all duration-500">
              {/* Animated Gradient Background */}
              <div className="absolute inset-0">
                  <Silk
                    speed={8.9}
                    scale={1.2}
                    color="#1344d8"
                    noiseIntensity={0.5}
                    rotation={5.2}
                  />
              </div>

              {/* Content Placeholder */}
              <div className="absolute bottom-8 left-8 sm:bottom-12 sm:left-12 max-w-xl p-4">
              </div>
           </div>
        </div>

        {/* Stats Section Integrated */}

          <Stats />


      </div>
    </section>
  );
}
