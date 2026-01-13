import { ExternalLink, ArrowRight } from "lucide-react";

const projectsList = [
  {
    id: 1,
    title: "Ideator",
    description:
      "Community platform to create, share, and refine startup ideas using AI-assisted brainstorming.",
    tags: ["React", "Django", "PostgreSQL", "OpenAI API"],
    link: "https://github.com/Vidip-Ghosh/Ideator",
  },
  {
    id: 2,
    title: "GitCollabX",
    description:
      "Collaborative GitHub workspace for teams with real-time repository and project management.",
    tags: ["React", "Github-Octokit"],
    link: "https://github.com/Vidip-Ghosh/GitCollabX",
  },
  {
    id: 3,
    title: "Connectify",
    description:
      "AI-powered tech networking platform with profiles, projects, and event discovery.",
    tags: ["Firebase", "Firebase Auth", "Gemini API", "Python", "React JS"],
    link: "https://github.com/ghoshvidip26/Connectify-Hack-Your-Portfolio.git",
  },
  {
    id: 4,
    title: "PurrfectPal",
    description:
      "Platform connecting pet owners with trusted temporary caregivers using sentiment-based matching.",
    tags: ["React JS", "PostgreSQL", "Django", "Java", "Sentiment Analysis"],
    link: "https://github.com/Vidip-Ghosh/PurrfectPal",
  },
  {
    id: 5,
    title: "PlanetCare",
    description:
      "Community-driven platform to promote environmental awareness and sustainability initiatives.",
    tags: ["React", "Django", "OpenAi", "PostgreSQL"],
    link: "https://github.com/Vidip-Ghosh/HackOdisha",
  },
  {
    id: 6,
    title: "zkEmployeeLoan",
    description:
      "Zero-knowledge powered employee loan system that verifies salary without exposing private data on-chain.",
    tags: ["TypeScript", "Noir", "MongoDB", "NextJs"],
    link: "https://github.com/ghoshvidip26/zkEmployeeLoan",
  },
  {
    id: 7,
    title: "SplitMate",
    description:
      "Blockchain-based expense sharing app with real-time chat and AI-powered spending insights.",
    tags: [
      "TypeScript",
      "Base L2",
      "MongoDB",
      "NextJs",
      "Coinbase Wallet SDK",
      "XMTP Protocol",
    ],
    link: "https://github.com/ghoshvidip26/SplitMate.git",
  },
  {
    id: 8,
    title: "Trezo",
    description:
      "Decentralized BTC-backed lending protocol with automated collateral and liquidation logic.",
    tags: ["TypeScript", "Core", "NextJs", "Web3.js", "Solidity"],
    link: "https://github.com/ghoshvidip26/TrezoCoreHH.git",
  },
  {
    id: 9,
    title: "VoiceVault",
    description:
      "Web3 platform to create, own, and monetize AI voice models using NFT-based licensing.",
    tags: ["TypeScript", "NextJs", "Aptos", "Move", "Open AI"],
    link: "https://github.com/rajarshidattapy/voice_vault",
    demo: "https://voicevault-silk.vercel.app/",
  },
  {
    id: 10,
    title: "LocalPay",
    description:
      "Telegram-native crypto payments system for local merchants built on the TON blockchain.",
    tags: ["TypeScript", "NextJs", "TON", "FunC", "Smart Contracts", "TON SDK"],
    link: "https://github.com/rajarshidattapy/LocalPay.git",
    demo: "https://local-pay-1.vercel.app/",
  },
  {
    id: 11,
    title: "MergeGuard",
    link: "https://github.com/ghoshvidip26/MergeGuard",
    description:
      "AI-powered Git tool that predicts merge-conflict risks using line-level diff analysis.",
    tags: [
      "TypeScript",
      "Node.js",
      "Git",
      "Socket.IO",
      "LangChain",
      "Generative AI",
    ],
  },
  {
    id: 12,
    title: "StackSearch",
    link: "https://github.com/ghoshvidip26/StackSearch",
    description:
      "AI documentation assistant that semantically searches across thousands of developer docs.",
    tags: [
      "TypeScript",
      "Node.js",
      "Git",
      "React.js",
      "LangChain",
      "Generative AI",
      "VectorDB",
    ],
  },
  {
    id: 13,
    title: "Resume Screening App",
    link: "https://github.com/ghoshvidip26/RAG-Resume-Screening",
    description:
      "RAG-based resume screener that matches candidates to job roles using vector search.",
    tags: [
      "TypeScript",
      "Node.js",
      "Git",
      "React.js",
      "LangChain",
      "Generative AI",
      "VectorDB",
    ],
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-6 border-t border-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projectsList.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-slate-800/50 border border-slate-700/50 hover:border-cyan-500/50 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <ExternalLink
                    size={20}
                    className="text-slate-500 group-hover:text-cyan-400 transition-colors"
                  />
                </div>
                <p className="text-slate-400 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-slate-900 border border-slate-600 text-slate-300 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a
            href="https://github.com/ghoshvidip26?tab=repositories"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
          >
            View all projects <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
