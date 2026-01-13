import { Code2, Zap, Target } from "lucide-react"

const expertiseItems = [
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "Full-Stack Development",
    description: "Building scalable API-driven systems and modern interfaces using Node.js, Python, React & Next.js",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "AI & RAG Systems",
    description:
      "Developing Generative AI applications with document processing, semantic search, and vector databases",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "System Reliability",
    description:
      "Solving complex problems in data flow, performance optimization, debugging, and production deployment",
  },
]

export function ExpertiseSection() {
  return (
    <section className="py-20 px-6 border-t border-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Core Expertise</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {expertiseItems.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl hover:border-cyan-500/30 transition-colors"
            >
              <div className="text-cyan-400 mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
