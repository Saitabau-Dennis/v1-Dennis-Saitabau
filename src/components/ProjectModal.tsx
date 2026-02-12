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
        className="fixed inset-0 z-[999] bg-black/40 backdrop-blur-lg flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="relative max-w-2xl w-full bg-white rounded-2xl p-6 sm:p-8 border border-zinc-200 overflow-hidden shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-zinc-100 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-200 transition-all z-20"
          >
            <X size={20} />
          </button>

          <div className="relative z-10">
            <div className="mb-6">
                <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 tracking-tight">
                {project.title}
                </h2>
            </div>

            <div className="prose max-w-none">
                <p className="text-zinc-500 text-lg leading-relaxed">
                {project.detailedDescription}
                </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono text-zinc-600 border border-zinc-200 rounded-full px-3 py-1 bg-zinc-50"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 mt-8 pt-6 border-t border-zinc-200">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-medium text-white bg-zinc-900 rounded-full hover:bg-zinc-800 transition-all hover:scale-[1.02] w-full sm:w-auto ring-2 ring-zinc-900/20 ring-offset-2"
              >
                Visit Project
                <ArrowUpRight size={16} />
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-medium text-zinc-700 bg-zinc-100 rounded-full hover:bg-zinc-200 transition-all hover:scale-[1.02] w-full sm:w-auto ring-2 ring-zinc-200 ring-offset-2"
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
