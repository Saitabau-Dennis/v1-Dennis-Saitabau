"use client";

import Link from "next/link";

import { Home, User, Briefcase, FolderGit2, Mail } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full pt-6 pb-0">
      <nav className="container mx-auto max-w-7xl flex items-center justify-between px-6">

        {/* Left: Avatar & Name */}
        <div className="flex items-center gap-4">
          <div className="h-14 w-14 overflow-hidden rounded-full bg-zinc-100 border-2 border-zinc-200">
             <img src="/profile.jpg" alt="Profile" className="h-full w-full object-cover" />
          </div>
          <span className="hidden md:block text-l font-normal text-zinc-900 tracking-tighter">Dennis Saitabau</span>
        </div>

        {/* Right: Support Button */}
        <Link href="https://buymeacoffee.com/dennisntetb" target="_blank">
            <button
              className="rounded-full bg-white border border-zinc-200 px-5 py-2.5 text-sm font-medium text-zinc-800 transition-colors hover:bg-zinc-50 hover:text-zinc-900 flex items-center gap-2 shadow-sm ring-2 ring-zinc-200 ring-offset-2 ring-offset-[#f8f9fa]"
            >
              <div className="h-2 w-2 rounded-full bg-green-500" />
              Support my work
            </button>
        </Link>
      </nav>
    </header>
  );
}

