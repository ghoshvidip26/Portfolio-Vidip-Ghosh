"use client";

import { useState } from "react";

export function Navbar() {
  const [activeSection, setActiveSection] = useState("about");

  return (
    <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Vidip Ghosh
        </h1>
        <div className="hidden md:flex items-center gap-8">
          {["about", "projects", "achievements", "contact"].map((item) => (
            <a
              href={`#${item}`}
              key={item}
              onClick={() => setActiveSection(item)}
              className={`capitalize text-sm transition-colors ${
                activeSection === item
                  ? "text-cyan-400"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
