"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const LoadingScreen = () => {
  const [percent, setPercent] = useState(0);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    // Prevent scrolling while loading
    document.body.style.overflow = "hidden";

    const duration = 2000; // 2 seconds total
    const intervalTime = 20; // update every 20ms
    const steps = duration / intervalTime;
    const increment = 100 / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= 100) {
        clearInterval(timer);
        setPercent(100);
        setTimeout(() => {
            setComplete(true);
        }, 500); // Wait a bit before sliding out
      } else {
        setPercent(current);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

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
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-zinc-950 text-white"
          initial={{ y: 0 }}
          exit={{ y: "-100%", transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] } }}
        >
          <div className="flex flex-col items-end">
            <motion.h1
              className="text-9xl font-bold tracking-tighter"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {Math.floor(percent)}%
            </motion.h1>
             <div className="h-1 w-full bg-zinc-800 mt-2 overflow-hidden rounded-full">
                <motion.div
                    className="h-full bg-white"
                    style={{ width: `${percent}%` }}
                />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
