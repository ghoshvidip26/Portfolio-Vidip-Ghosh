import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiLinkedin, FiChevronDown } from 'react-icons/fi';
import { HiOutlineMail, HiOutlineCode } from 'react-icons/hi';
import avatar from '../assets/Vidip.jpg';

const Hero = () => {
  const constraintsRef = useRef(null);
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ['Web Developer', 'Problem Solver', 'Tech Enthusiast'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FiGithub className="w-5 h-5" />,
      url: 'https://github.com/ghoshvidip26',
    },
    {
      name: 'LinkedIn',
      icon: <FiLinkedin className="w-5 h-5" />,
      url: 'https://linkedin.com/in/ghoshvidip26',
    },
    {
      name: 'Email',
      icon: <HiOutlineMail className="w-5 h-5" />,
      url: 'mailto:ghoshvidip26@gmail.com',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
        <div className="absolute inset-0 bg-grid-slate-900/10 dark:bg-grid-slate-400/10 [mask-image:linear-gradient(to_bottom,transparent,white,transparent)]"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          ref={constraintsRef}
        >
          {/* Left Column - Content */}
          <motion.div variants={itemVariants} className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-4"
            >
              <span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 rounded-full">
                Hi there! I'm
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Vidip Ghosh
            </motion.h1>

            <motion.div
              className="h-12 md:h-16 mb-6 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <AnimatePresence mode="wait">
                <motion.h2
                  key={currentRole}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300"
                >
                  {`I'm a `}
                  <span className="text-blue-600 dark:text-blue-400">
                    {roles[currentRole]}
                  </span>
                </motion.h2>
              </AnimatePresence>
            </motion.div>

            <motion.div
              className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0 space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <p>
                I specialize in crafting exceptional digital experiences that are fast, accessible, and visually appealing. With a passion for clean code and intuitive design, I bring ideas to life on the web.
              </p>
              <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span>Available for freelance work</span>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <a
                href="https://ghoshvidip26.hackerresume.io/5b16ff8a-fda9-4904-b9f7-c8fd0d088cae"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:opacity-90 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
              >
                View Resume
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
              >
                Contact Me
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="mt-12 flex flex-col sm:flex-row items-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  aria-label={link.name}
                >
                  <span className="sr-only">{link.name}</span>
                  {link.icon}
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Glassmorphism Card */}
          <motion.div
            className="relative w-full max-w-2xl mx-auto lg:mx-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: {
                delay: 0.5,
                duration: 0.7,
                type: "spring",
                stiffness: 100,
                damping: 12
              }
            }}
          >
            <div className="relative z-10 w-full p-1">
              {/* Glassmorphism Card */}
              <div className="backdrop-blur-xl bg-white/10 dark:bg-gray-900/30 border border-white/20 dark:border-gray-700/50 rounded-2xl shadow-2xl overflow-hidden">
                {/* Card Header */}
                <div className="p-6 border-b border-white/10">
                  <div className="flex items-center space-x-3">
                    <div className="flex space-x-1.5">
                      <span className="w-3 h-3 rounded-full bg-red-400"></span>
                      <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                      <span className="w-3 h-3 rounded-full bg-green-400"></span>
                    </div>
                    <div className="text-sm font-mono text-gray-600 dark:text-gray-400">
                      vidip-ghosh.jsx
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-blue-400">const</span>
                      <span className="text-purple-400">aboutMe</span>
                      <span className="text-gray-400">=</span>
                      <span className="text-yellow-300">&#123;</span>
                    </div>

                    <div className="ml-4 space-y-3">
                      <div className="flex">
                        <span className="text-pink-400 w-24">name:</span>
                        <span className="text-green-400">'Vidip Ghosh',</span>
                      </div>
                      <div className="flex">
                        <span className="text-pink-400 w-24">role:</span>
                        <span className="text-green-400">'Full Stack Developer',</span>
                      </div>
                      <div className="space-y-4">
                        <span className="text-pink-400">skills:</span>
                        <div className="grid grid-cols-2 gap-3 pl-4">
                          {[
                            'Python', 'Node.js', 'Next.js', 'JavaScript',
                            'TypeScript', 'MongoDB'
                          ].map((skill, i) => (
                            <motion.div
                              key={i}
                              className="relative group"
                              whileHover={{
                                x: 4,
                                transition: { duration: 0.2 }
                              }}
                            >
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 rounded-full bg-blue-400 group-hover:bg-blue-500 transition-colors"></div>
                                <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                                  {skill}
                                </span>
                              </div>
                              <div className="absolute left-0 bottom-0 h-0.5 bg-blue-400/30 group-hover:w-full w-0 transition-all duration-300"></div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="text-yellow-300">&#125;;</div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-white/10">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/20">
                        <img
                          src={avatar}
                          alt="Vidip Ghosh"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-medium text-white">Vidip Ghosh</div>
                        <div className="text-sm text-blue-300">@ghoshvidip26</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="p-4 bg-black/20 border-t border-white/10">
                  <div className="flex justify-between items-center text-sm text-gray-400">
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                      <span>Available for work</span>
                    </div>
                    <div className="flex space-x-3">
                      <a href="#" className="hover:text-blue-400 transition-colors">
                        <FiGithub className="w-4 h-4" />
                      </a>
                      <a href="#" className="hover:text-blue-400 transition-colors">
                        <FiLinkedin className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
            <div className="absolute top-1/3 -right-5 w-20 h-20 bg-pink-500/20 rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-4000"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
