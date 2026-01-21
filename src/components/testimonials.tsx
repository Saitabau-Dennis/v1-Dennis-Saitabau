"use client";

import { motion } from "framer-motion";
import { ArrowRight, MoveRight } from "lucide-react";
// Re-trigger HMR
import SectionContainer from "./sectioncontainer";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Jane Doe",
      role: "CEO, TechStart",
      quote: "Dennis transformed our vision into a digital masterpiece. The attention to detail is unmatched.",
    },
    {
      name: "Alex Smith",
      role: "Product Lead",
      quote: "The animations feel so organic and natural. It really elevated our brand perception.",
    },
    {
      name: "Sarah Lee",
      role: "Design Director",
      quote: "A developer who actually understands design. It's rare to find this meaningful collaboration.",
    },
    {
      name: "Michael Brown",
      role: "Founder, StartupX",
      quote: "Incredible work ethic and top-tier code quality. Highly recommended for any serious project.",
    },
    {
       name: "Emily Davis",
       role: "CTO, FinTech Solutions",
       quote: "Solved complex performance issues we had struggled with for months. A true expert.",
    },
    {
       name: "Chris Wilson",
       role: "Product Manager",
       quote: "Fast, reliable, and communicative. The best freelance experience I've had.",
    }
  ];

  return (
    <section className="pb-12 pt-2 sm:pb-24 overflow-hidden">
      <div className="mx-auto h-px w-full max-w-7xl bg-gray-800/50 mb-8" />

      <div className="container mx-auto max-w-7xl px-6">
        <div className="flex items-center gap-3 mb-12">
            <MoveRight className="h-4 w-4 text-blue-500" />
            <h2 className="text-sm font-medium uppercase tracking-widest text-blue-500 font-mono">
              Testimonials earned
            </h2>
        </div>
      </div>

      <div className="relative w-full">
          {/* Left Fade */}
          <div className="hidden md:block absolute left-0 top-0 bottom-0 z-10 w-24 md:w-40 bg-gradient-to-r from-[#0a0a0a] to-transparent pointer-events-none" />
          {/* Right Fade */}
          <div className="hidden md:block absolute right-0 top-0 bottom-0 z-10 w-24 md:w-40 bg-gradient-to-l from-[#0a0a0a] to-transparent pointer-events-none" />

          <motion.div
            className="flex gap-6 w-max"
            animate={{ x: "-50%" }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop"
            }}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={index}
                className="relative w-[350px] md:w-[450px] min-h-[300px] flex-shrink-0 flex flex-col justify-between rounded-3xl border border-white/10 bg-zinc-900/50 p-8 shadow-xl backdrop-blur-sm transition-all hover:border-white/20 hover:bg-zinc-800/50"
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity hover:opacity-100 pointer-events-none" />

                <blockquote className="relative flex-1">
                  <p className="text-l leading-relaxed text-zinc-300">
                    “{testimonial.quote}”
                  </p>
                </blockquote>
                <div className="mt-8 flex items-center gap-4 relative z-10">
                  <div className="h-10 w-10 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center text-xs font-bold text-zinc-500">
                      {testimonial.name[0]}
                  </div>
                  <div className="text-sm leading-6">
                      <div className="font-bold text-white">{testimonial.name}</div>
                      <div className="text-zinc-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
      </div>
    </section>
  );
}
