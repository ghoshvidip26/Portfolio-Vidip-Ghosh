export function AboutSection() {
  return (
    <section className="py-20 px-6 border-t border-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">About Me</h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left */}
          <div className="space-y-5 text-slate-400 leading-relaxed">
            <p className="text-slate-400 leading-relaxed">
              {" "}
              I'm a Software Engineer specializing in backend and full-stack
              development. I have hands-on experience building API-driven
              systems, AI-powered workflows, and scalable web applications using
              Node.js, Python, React, Next.js, and SQL/NoSQL databases.{" "}
            </p>{" "}
            <p className="text-slate-400 leading-relaxed">
              {" "}
              Recently, I've focused on Generative AI and RAG-based systems,
              building tools that process documents, run semantic search over
              vector databases, and expose insights through clean APIs and web
              UIs. I enjoy solving problems around data flow, performance,
              debugging, and system reliability.{" "}
            </p>{" "}
            <p className="text-slate-400 leading-relaxed">
              {" "}
              I've worked on developer tools, AI-powered applications, and
              full-stack products in fast-moving environments, where I've
              learned to iterate quickly while keeping code maintainable and
              scalable.{" "}
            </p>
          </div>

          {/* Right */}
          <div className="space-y-8">
            <div>
              <h3 className="font-semibold mb-3 text-cyan-400">
                Current Status
              </h3>
              <p className="text-slate-400">
                Actively seeking Backend / Full-Stack / SDE-1 roles
              </p>
              <p className="text-sm text-slate-500 mt-1">
                Open to building real products with strong engineering teams
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-3 text-cyan-400">
                Professional Experience
              </h3>
              <p className="text-slate-400">Assistant System Engineer</p>
              <p className="text-sm text-slate-500">
                Sep 2024 – Nov 2025 · Full-time
              </p>
              <p className="text-sm text-slate-500 mt-1">
                Worked on backend services, APIs, system workflows, and
                production-grade software delivery
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-3 text-cyan-400">Education</h3>
              <p className="text-slate-400">
                B.Tech in Computer Science & Engineering
              </p>
              <p className="text-sm text-slate-500">
                Jamia Millia Islamia, New Delhi (2024)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
