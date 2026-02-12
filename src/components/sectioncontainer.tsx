"use client";

import { cn } from "../lib/utils";
import { ReactNode } from "react";

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  withSeparator?: boolean;
}

export default function SectionContainer({ children, className, containerClassName, id, withSeparator = true }: SectionContainerProps) {
  return (
    <section id={id} className={cn("py-12 px-2 sm:px-4", containerClassName)}>
      {/* Centered Separator */}
      {withSeparator && <div className="mx-auto h-px w-full max-w-7xl bg-zinc-200" />}

      <div
        className={cn(
          "relative h-full p-4 sm:p-6 md:p-8",
          className
        )}
      >
        {children}
      </div>
    </section>
  );
}
