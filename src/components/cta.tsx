"use client";


import { Mail, Calendar, Sparkles, SendHorizonal } from "lucide-react";
import Silk from "./Silk";

export default function CTA() {
  return (
    <section id="contact" className="relative w-full py-20 sm:py-24 overflow-hidden">
      {/* Gradient/Silk Background */}
      <div className="absolute inset-0 -z-10">
          <Silk
            speed={8.9}
            scale={1.2}
            color="#1344d8"
            noiseIntensity={0.5}
            rotation={5.2}
          />
      </div>
      <div className="container mx-auto px-6 max-w-3xl flex flex-col items-center text-center relative z-10">
        <h2 className="text-4xl sm:text-6xl font-bold text-white mb-6 tracking-tighter">Ready to collaborate?</h2>
        <p className="text-lg sm:text-xl text-zinc-300 mb-10 max-w-xl">Let&apos;s connect and create something amazing together.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:gap-6 max-w-md mx-auto">
          <a
            href="mailto:dennisntete28@gmail.com"
            className="group inline-flex h-16 w-full sm:h-20 items-center justify-center rounded-full bg-white px-6 sm:px-8 font-semibold text-black transition-all hover:bg-zinc-100 hover:scale-105 text-lg sm:text-xl whitespace-nowrap shadow-lg ring-2 ring-white/30 ring-offset-2 ring-offset-transparent"
          >
            <SendHorizonal className="mr-2 h-6 w-6" />
            Email Me
          </a>
          <a
            href="#"
            className="group inline-flex h-16 w-full sm:h-20 items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 sm:px-8 font-semibold text-white transition-all hover:border-white/30 hover:bg-white/20 hover:scale-105 text-lg sm:text-xl whitespace-nowrap shadow-lg ring-2 ring-white/10 ring-offset-2 ring-offset-transparent"
          >
            Schedule a Call
          </a>
        </div>
      </div>
    </section>
  );
}