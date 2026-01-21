"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight, Github } from "lucide-react";

export const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-lg flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="relative max-w-2xl w-full bg-zinc-950 rounded-2xl p-6 sm:p-8 border border-white/10 overflow-hidden shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-zinc-900/50 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all z-20"
          >
            <X size={20} />
          </button>
          
          <div className="relative z-10">
            <div className="mb-6">
                <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                {project.title}
                </h2>
            </div>
            
            <div className="prose prose-invert max-w-none">
                <p className="text-zinc-400 text-lg leading-relaxed">
                {project.detailedDescription}
                </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono text-zinc-400 border border-zinc-800 rounded-full px-3 py-1 bg-zinc-900/50"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 mt-8 pt-6 border-t border-white/5">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-medium text-black bg-white rounded-full hover:bg-zinc-200 transition-all hover:scale-[1.02] w-full sm:w-auto"
              >
                Visit Project
                <ArrowUpRight size={16} />
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-medium text-white bg-zinc-800 rounded-full hover:bg-zinc-700 transition-all hover:scale-[1.02] w-full sm:w-auto"
              >
                <Github size={16} />
                View Code
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
