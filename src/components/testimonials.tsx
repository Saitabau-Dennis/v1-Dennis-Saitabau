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
      <div className="mx-auto h-px w-full max-w-7xl bg-zinc-200 mb-8" />

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
          <div className="hidden md:block absolute left-0 top-0 bottom-0 z-10 w-24 md:w-40 bg-gradient-to-r from-[#f8f9fa] to-transparent pointer-events-none" />
          {/* Right Fade */}
          <div className="hidden md:block absolute right-0 top-0 bottom-0 z-10 w-24 md:w-40 bg-gradient-to-l from-[#f8f9fa] to-transparent pointer-events-none" />

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
                className="relative w-[350px] md:w-[450px] min-h-[280px] flex-shrink-0 flex flex-col justify-between rounded-3xl border border-zinc-200 bg-white p-10 shadow-sm transition-all hover:border-zinc-300 hover:shadow-md group"
              >
                {/* Subtle top highlight */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-300 to-transparent opacity-50" />

                <blockquote className="relative flex-1">
                  <span className="absolute -top-4 -left-2 text-6xl text-zinc-200 font-serif">&ldquo;</span>
                  <p className="text-lg leading-relaxed text-zinc-700 font-light relative z-10">
                    {testimonial.quote}
                  </p>
                </blockquote>

                <div className="mt-8 flex items-center gap-4 relative z-10 border-t border-zinc-100 pt-6">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-zinc-100 to-zinc-200 border border-zinc-200 flex items-center justify-center text-sm font-bold text-zinc-700 shadow-inner ring-1 ring-zinc-200 group-hover:ring-zinc-300 transition-all">
                      {testimonial.name[0]}
                  </div>
                  <div className="flex flex-col">
                      <div className="font-bold text-zinc-900 tracking-wide text-sm">{testimonial.name}</div>
                      <div className="text-zinc-600 text-xs uppercase tracking-wider font-mono mt-0.5">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
      </div>
    </section>
  );
}
