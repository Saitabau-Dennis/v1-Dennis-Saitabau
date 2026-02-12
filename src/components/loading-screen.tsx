"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = [
  "Hello",
  "Bonjour",
  "Ciao",
  "Olà",
  "Guten tag",
  "Hej",
  "Namaste",
  "Salam",
];


export const LoadingScreen = () => {
  const [index, setIndex] = useState(0);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    // Prevent scrolling while loading
    document.body.style.overflow = "hidden";

    if (index === words.length - 1) {
      setTimeout(() => {
        setComplete(true);
      }, 600); // Wait a bit before fading out
      return;
    }

    const timer = setTimeout(() => {
      setIndex(index + 1);
    }, 600); // Change word every 600ms

    return () => clearTimeout(timer);
  }, [index]);

  useEffect(() => {
    if (complete) {
      // Re-enable scrolling when done
      document.body.style.overflow = "unset";
    }
  }, [complete]);

  return (
    <AnimatePresence>
      {!complete && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#f8f9fa] text-zinc-900"
          exit={{ opacity: 0, transition: { duration: 2, ease: "easeInOut" } }}
        >
          <motion.h1
            className="text-5xl font-bold tracking-tighter"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key={index}
          >
            {words[index]}
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
};