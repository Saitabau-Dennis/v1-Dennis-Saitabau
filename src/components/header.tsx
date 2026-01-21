"use client";

import Link from "next/link";

import { Home, User, Briefcase, FolderGit2, Mail } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full pt-10 pb-0">
      <nav className="container mx-auto max-w-7xl flex items-center justify-between px-6">

        {/* Left: Avatar & Name */}
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 overflow-hidden rounded-full bg-zinc-800 border-2 border-white/10">
             <img src="/profile.jpg" alt="Profile" className="h-full w-full object-cover" />
          </div>
          <span className="hidden md:block text-xl font-medium text-zinc-100 font-mono tracking-tight">Dennis Saitabau</span>
        </div>

        {/* Right: Support Button */}
        <Link href="https://buymeacoffee.com/dennisntetb" target="_blank">
            <button
              className="rounded-full bg-zinc-900 border border-white/10 px-8 py-4 text-base font-medium text-zinc-200 transition-colors hover:bg-white/10 hover:text-white flex items-center gap-2"
            >
              <div className="h-2 w-2 rounded-full bg-green-500" />
              Support my work
            </button>
        </Link>
      </nav>
    </header>
  );
}

