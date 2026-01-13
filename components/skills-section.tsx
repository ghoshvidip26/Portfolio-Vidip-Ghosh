const skillCategories = {
  Backend: ["Node.js", "Python", "Flask", "REST APIs"],
  Frontend: ["React", "Next.js", "JavaScript", "TypeScript"],
  Databases: ["PostgreSQL", "MongoDB", "Vector Databases"],
  "AI & ML": ["Generative AI", "RAG Systems", "Semantic Search"],
  Tools: ["Git", "SQL/NoSQL", "Web3.js", "Blockchain"],
}

export function SkillsSection() {
  return (
    <section className="py-20 px-6 border-t border-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Tech Stack</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skillCategories).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold mb-4 text-cyan-400">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-slate-800 border border-slate-700 text-slate-300 rounded-full text-sm hover:border-cyan-500/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
