import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { useState } from 'react';
import Ideator from '../assets/Ideator.png';
import GitCollabX from '../assets/GitCollabX.png';
import PurrfectPal from '../assets/PurrfectPal.png';
import PlanetCare from '../assets/PlanetCare.png';
import ZkEmployeeLoan from '../assets/zKEmployeeLoan.png';
import TrezoCoreHH from '../assets/Trezo.png';
import Connectify from '../assets/Connectify.png';

const projects = [
  {
    id: 1,
    title: 'Ideator',
    description: 'A platform for sharing and brainstorming ideas with a community of innovators and creators.',
    tags: ['React', 'Django', 'PostgreSQL', 'OpenAI API'],
    image: Ideator,
    github: 'https://github.com/Vidip-Ghosh/Ideator',
    demo: '#',
  },
  {
    id: 2,
    title: 'GitCollabX',
    description: 'Collaborative platform for developers to work together on Git projects with enhanced team features.',
    tags: ['React', 'Github-Octokit'],
    image: GitCollabX,
    github: 'https://github.com/Vidip-Ghosh/GitCollabX',
    demo: '#',
  },
  {
    id: 3,
    title: 'Connectify',
    description: 'Connectify is a robust web platform designed to enhance networking and collaboration within the tech community. It offers features ranging from professional profile management to project collaboration and tech event updates.',
    tags: ['Firebase', 'Firebase Auth', 'Gemini API', 'Python', 'React JS'],
    image: Connectify,
    github: 'https://github.com/ghoshvidip26/Connectify-Hack-Your-Portfolio.git',
    demo: '#',
  },
  {
    id: 4,
    title: 'PurrfectPal',
    description: 'Bridging the gap between pet owners and temporary caregivers for pets.',
    tags: ['React JS', 'PostgreSQL', 'Django', 'Java', 'Sentiment Analysis'],
    image: PurrfectPal,
    github: 'https://github.com/Vidip-Ghosh/PurrfectPal',
    demo: '#',
  },
  {
    id: 5,
    title: 'PlanetCare',
    description: 'Promoting environmental sustainability through community engagement and education.',
    tags: ['React', 'Django', 'OpenAi', 'PostgreSQL'],
    image: PlanetCare,
    github: 'https://github.com/Vidip-Ghosh/HackOdisha',
    demo: '#',
  },
  {
    id: 6,
    title: 'zkEmployeeLoan',
    description: 'A privacy-preserving employee loan system built using zero-knowledge proofs and blockchain smart contracts. It allows verified employees to apply for loans based on their employment and salary data, without revealing sensitive information on-chain.',
    tags: ['TypeScript', 'Noir', 'MongoDB', 'NextJs'],
    image: ZkEmployeeLoan,
    github: 'https://github.com/ghoshvidip26/zkEmployeeLoan',
    demo: '#',
  },
  {
    id: 7,
    title: 'SplitMate',
    description: 'A modern, blockchain-powered expense sharing app with real-time chat integration and AI-powered insights.',
    tags: ['TypeScript', 'Base L2', 'MongoDB', 'NextJs', 'Coinbase Wallet SDK', 'XMTP Protocol'],
    image: ZkEmployeeLoan,
    github: "https://github.com/ghoshvidip26/SplitMate.git",
    demo: '#',
  },
  {
    id: 8,
    title: 'Trezo',
    description: 'Trezo is a decentralized lending platform that enables users to deposit BTC as collateral and borrow USDT against it. The platform ensures secure lending with a well-defined collateralization and liquidation mechanism.',
    tags: ['TypeScript', 'Core', 'NextJs', 'Web3.js', 'Solidity'],
    image: TrezoCoreHH,
    github: "https://github.com/ghoshvidip26/TrezoCoreHH.git",
    demo: '#',
  }
];

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group overflow-hidden rounded-2xl bg-white dark:bg-gray-900 shadow-xl hover:shadow-2xl transition-all duration-300 border border-purple-900/10 dark:border-purple-500/20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6`}>
          <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, i) => (
                <span key={i} className="text-xs bg-purple-500/20 text-purple-100 px-2 py-1 rounded-full border border-purple-400/20">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>

        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-purple-50 dark:bg-purple-900/30 rounded-full text-purple-700 dark:text-purple-300 hover:bg-purple-100 dark:hover:bg-purple-800/50 transition-colors border border-purple-100 dark:border-purple-900/50"
              aria-label="GitHub Repository"
            >
              <FiGithub className="w-5 h-5" />
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-purple-50 dark:bg-purple-900/30 rounded-full text-purple-700 dark:text-purple-300 hover:bg-purple-100 dark:hover:bg-purple-800/50 transition-colors border border-purple-100 dark:border-purple-900/50"
                aria-label="Live Demo"
              >
                <FiExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Web', 'Mobile', 'ML/AI', 'Featured'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : activeFilter === 'Featured'
      ? projects.filter(project => project.featured)
      : projects.filter(project => project.tags.some(tag =>
        tag.toLowerCase().includes(activeFilter.toLowerCase())
      ));

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-50 to-purple-50/30 dark:from-gray-900 dark:to-purple-900/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-900 to-blue-700 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent mb-4">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8"></div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeFilter === filter
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-md shadow-purple-500/20'
                  : 'bg-white/80 dark:bg-gray-800/80 text-purple-900 dark:text-purple-200 hover:bg-purple-50/80 dark:hover:bg-gray-800/90 backdrop-blur-sm'
                  }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <a
            href="https://github.com/Vidip-Ghosh?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 font-medium rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
          >
            View All Projects
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
