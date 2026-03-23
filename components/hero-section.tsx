"use client";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-cyan-400 font-semibold tracking-wider">
                BACKEND & FULL-STACK ENGINEER
              </p>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Building scalable, AI-powered systems
              </h1>
              <p className="text-xl text-slate-400 leading-relaxed">
                I specialize in API-driven systems, Generative AI, and RAG-based
                applications. From backend services to production deployment, I
                focus on solving real problems with reliable, maintainable code.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:ghoshvidip26@gmail.com"
                className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-semibold rounded-lg transition-colors"
              >
                Get in touch
              </a>
              <a
                href="https://drive.google.com/file/d/1sDXuq8A9fxK4nJPIiESQJHKkcS8LJD8y/view?usp=drive_link"
                target="_blank"
                className="px-8 py-3 border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-semibold rounded-lg transition-colors"
              >
                View my Resume
              </a>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <a
                href="https://github.com/ghoshvidip26"
                className="text-slate-400 hover:text-cyan-400"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/ghoshvidip26"
                className="text-slate-400 hover:text-cyan-400"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:ghoshvidip26@gmail.com"
                className="text-slate-400 hover:text-cyan-400"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Right Card */}
          <motion.div
            className="relative w-full max-w-2xl mx-auto lg:mx-0"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.7, type: "spring" }}
          >
            <div className="relative z-10 p-1">
              <div className="backdrop-blur-xl dark:bg-[#0B0F1A] border border-purple-200/80 dark:border-white/10 rounded-2xl shadow-xl overflow-hidden dark:shadow-purple-900/40">
                {/* Header */}
                <div className="p-4 border-b border-gray-200/80 dark:border-white/10 dark:bg-[#0E1324]">
                  <div className="flex items-center space-x-3">
                    <div className="flex space-x-1.5">
                      <span className="w-3 h-3 rounded-full bg-red-400" />
                      <span className="w-3 h-3 rounded-full bg-yellow-400" />
                      <span className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                    <span className="text-sm font-mono text-gray-700 dark:text-gray-400">
                      vidip-ghosh.jsx
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6  dark:bg-[#0B0F1A] space-y-4 font-mono text-sm">
                  <div>
                    <span className="text-blue-500">const</span>{" "}
                    <span className="text-purple-500">aboutMe</span>{" "}
                    <span className="text-gray-500">=</span>{" "}
                    <span className="text-yellow-400">&#123;</span>
                  </div>

                  <div className="pl-4 space-y-2">
                    <div>
                      <span className="text-pink-500">name:</span>{" "}
                      <span className="text-green-400">'Vidip Ghosh'</span>,
                    </div>
                    <div>
                      <span className="text-pink-500">role:</span>{" "}
                      <span className="text-green-400">
                        'Full Stack Developer'
                      </span>
                      ,
                    </div>
                    <div>
                      <span className="text-pink-500">skills:</span> [
                      <div className="grid grid-cols-2 gap-2 pl-4 mt-2">
                        {[
                          "Python",
                          "Node.js",
                          "Next.js",
                          "TypeScript",
                          "MongoDB",
                          "LangChain",
                        ].map((s) => (
                          <span key={s} className="text-blue-400">
                            "{s}"
                          </span>
                        ))}
                      </div>
                      ]
                    </div>
                  </div>

                  <span className="text-yellow-400">&#125;;</span>

                  {/* Footer identity */}
                  <div className="pt-6 border-t border-white/10 flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden border border-white/20">
                      <Image
                        src="/Vidip.jpg"
                        width={40}
                        height={40}
                        alt="Vidip"
                      />
                    </div>
                    <div>
                      <div className="text-white font-medium">Vidip Ghosh</div>
                      <div className="text-blue-400 text-xs">@ghoshvidip26</div>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="p-4 bg-black/10 dark:bg-[#0E1324] border-t border-white/10 text-sm text-gray-400">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    Available for work
                  </span>
                </div>
              </div>
            </div>

            {/* Glow blobs */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/20 blur-3xl rounded-full animate-blob" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/20 blur-3xl rounded-full animate-blob animation-delay-2000" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
