export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6 border-t border-slate-800/50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
        <p className="text-xl text-slate-400 mb-8 leading-relaxed">
          I'm actively seeking roles where I can build real products, work on
          scalable systems, and grow alongside strong engineering teams.
        </p>
        <div className="flex flex-wrap gap-6 justify-center items-center">
          <a
            href="mailto:ghoshvidip26@gmail.com"
            className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-semibold rounded-lg transition-colors"
          >
            Send me an email
          </a>
          <a
            href="https://linkedin.com/in/ghoshvidip26"
            className="px-8 py-3 border border-slate-600 text-slate-300 hover:border-cyan-500 hover:text-cyan-400 font-semibold rounded-lg transition-colors"
          >
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
