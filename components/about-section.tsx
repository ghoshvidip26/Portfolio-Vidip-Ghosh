"use client";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar, Target, User } from "lucide-react";

export function AboutSection() {
  const experiences = [
    {
      title: "Assistant System Engineer",
      company: "TCS",
      period: "Sep 2024 – Nov 2025",
      type: "Full-time",
      description: "Worked on backend services, APIs, system workflows, and production-grade software delivery.",
      icon: <Briefcase size={20} />,
    },
    {
      title: "Software Development Engineer Intern",
      company: "Internship",
      period: "Jan 2026 – Mar 2026",
      type: "Remote",
      points: [
        "Integrated Kalshi & Polymarket APIs for real-time market data.",
        "Built a Chrome Extension for live crypto price tracking.",
        "Developed dynamic web scrapers using Playwright & Selenium.",
        "Implemented Open Graph SEO optimizations in Next.js.",
        "Optimized PostgreSQL schemas and complex queries.",
      ],
      icon: <Target size={20} />,
    },
  ];

  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-12"
        >
          <div className="h-8 w-1 bg-cyan-500 rounded-full" />
          <h2 className="text-4xl font-bold tracking-tight">About Me</h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Bio Card */}
          <motion.div 
            className="lg:col-span-7 space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-slate-900/40 backdrop-blur-md border border-slate-800 p-8 rounded-3xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <User size={120} className="text-cyan-500" />
              </div>
              
              <div className="space-y-6 text-slate-300 leading-relaxed relative z-10">
                <p>
                  I'm a Software Engineer specializing in backend and full-stack
                  development. I have hands-on experience building API-driven
                  systems, AI-powered workflows, and scalable web applications using
                  Node.js, Python, React, and Next.js.
                </p>
                <p>
                  Recently, I've focused on Generative AI and RAG-based systems,
                  building tools that process documents, run semantic search over
                  vector databases, and expose insights through clean APIs.
                </p>
                <p>
                  I thrive in fast-moving environments where I can iterate quickly 
                  while maintaining high engineering standards for scalability and 
                  reliability.
                </p>
              </div>
            </div>

            {/* Status & Education Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-900/40 backdrop-blur-md border border-slate-800 p-6 rounded-2xl">
                <div className="flex items-center gap-3 mb-4 text-cyan-400">
                  <Target size={20} />
                  <h4 className="font-bold">Current Status</h4>
                </div>
                <p className="text-slate-300 text-sm">
                  Seeking Backend / Full-Stack / SDE-1 roles. Ready to ship production code.
                </p>
              </div>

              <div className="bg-slate-900/40 backdrop-blur-md border border-slate-800 p-6 rounded-2xl">
                <div className="flex items-center gap-3 mb-4 text-purple-400">
                  <GraduationCap size={20} />
                  <h4 className="font-bold">Education</h4>
                </div>
                <p className="text-slate-300 text-sm font-semibold">B.Tech in CSE</p>
                <p className="text-slate-500 text-xs mt-1">Jamia Millia Islamia (2024)</p>
              </div>
            </div>
          </motion.div>

          {/* Timeline Experience */}
          <motion.div 
            className="lg:col-span-5"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-slate-900/40 backdrop-blur-md border border-slate-800 p-8 rounded-3xl h-full">
              <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
                <Calendar className="text-cyan-500" size={24} />
                Experience
              </h3>

              <div className="space-y-12 relative">
                {/* Vertical Line */}
                <div className="absolute left-[11px] top-2 bottom-2 w-[2px] bg-slate-800" />

                {experiences.map((exp, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="relative pl-10"
                  >
                    {/* Dot */}
                    <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-slate-900 border-2 border-cyan-500 flex items-center justify-center z-10 shadow-[0_0_10px_rgba(6,182,212,0.5)]">
                      <div className="w-2 h-2 rounded-full bg-cyan-500" />
                    </div>

                    <div className="space-y-2">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-500/80 bg-cyan-500/10 px-2 py-0.5 rounded">
                        {exp.period}
                      </span>
                      <h4 className="text-lg font-bold text-slate-100">{exp.title}</h4>
                      <p className="text-sm text-slate-400 font-medium">{exp.company} · {exp.type}</p>
                      
                      {exp.description && (
                        <p className="text-xs text-slate-500 leading-relaxed">{exp.description}</p>
                      )}
                      
                      {exp.points && (
                        <ul className="mt-3 space-y-2">
                          {exp.points.map((point, i) => (
                            <li key={i} className="text-[11px] text-slate-500 flex items-start gap-2">
                              <span className="w-1 h-1 rounded-full bg-cyan-500 mt-1.5 shrink-0" />
                              {point}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
