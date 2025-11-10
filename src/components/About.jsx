import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';
import { SiLeetcode, SiGeeksforgeeks, SiCodingninjas } from 'react-icons/si';
import avatar from '../assets/Vidip.jpg';

const skills = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'React.js',
  'Node.js',
  'Express.js',
  'MongoDB',
  'TypeScript',
  'Python',
  'Git & GitHub',
  'Next.js',
  'Firebase',
  'SQL'
];

const codingProfiles = [
  {
    name: 'LeetCode',
    icon: <SiLeetcode className="w-6 h-6" />,
    url: 'https://leetcode.com/ghoshvidip26/',
    username: 'ghoshvidip26',
  },
  {
    name: 'GeeksforGeeks',
    icon: <SiGeeksforgeeks className="w-6 h-6" />,
    url: 'https://auth.geeksforgeeks.org/user/ghoshvidip26/',
    username: 'ghoshvidip26',
  },
  {
    name: 'Coding Ninjas',
    icon: <SiCodingninjas className="w-6 h-6" />,
    url: 'https://www.codingninjas.com/studio/profile/VIDIP_GHOSH',
    username: 'VIDIP_GHOSH',
  },
];

const About = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="text-blue-600 dark:text-blue-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/3 flex justify-center"
          >
            <div className="relative group w-full max-w-xs md:max-w-sm mx-auto">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-all duration-300"></div>
              <div className="relative bg-white/90 dark:bg-gray-800/90 p-1.5 rounded-2xl backdrop-blur-sm">
                <img
                  src={avatar}
                  alt="Vidip Ghosh"
                  className="w-full h-auto rounded-xl object-cover aspect-square"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-2/3"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              MERN Stack Developer
            </h3>

            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Hello! I'm Vidip Ghosh, a passionate Full Stack Developer with expertise in building modern web applications.
              Currently pursuing B.Tech in Computer Engineering at Jamia Millia Islamia, New Delhi, India.
            </p>

            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              I specialize in the MERN stack and have experience in developing scalable and efficient web applications.
              I'm always eager to learn new technologies and frameworks to enhance my skills and build better solutions.
            </p>

            {/* Personal Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center">
                <span className="font-medium text-gray-900 dark:text-white w-32">Name:</span>
                <span className="text-gray-600 dark:text-gray-300">Vidip Ghosh</span>
              </div>
              <div className="flex items-center">
                <span className="font-medium text-gray-900 dark:text-white w-32">Email:</span>
                <a href="mailto:ghoshvidip26@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                  ghoshvidip26@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <span className="font-medium text-gray-900 dark:text-white w-32">Education:</span>
                <div className="text-gray-600 dark:text-gray-300">
                  B.Tech in Computer Engineering
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Jamia Millia Islamia, New Delhi • 2020 - 2024
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <span className="font-medium text-gray-900 dark:text-white w-32">Location:</span>
                <span className="text-gray-600 dark:text-gray-300">New Delhi, India</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="https://ghoshvidip26.hackerresume.io/5b16ff8a-fda9-4904-b9f7-c8fd0d088cae"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:opacity-90 transition-all flex items-center gap-2"
              >
                <FiDownload className="w-5 h-5" />
                Download CV
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
              >
                Contact Me
              </a>
            </div>

            {/* Coding Profiles */}
            <div className="mb-12">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Coding Profiles</h4>
              <div className="flex flex-wrap gap-4">
                {codingProfiles.map((profile, index) => (
                  <motion.a
                    key={index}
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-blue-600 dark:text-blue-400">{profile.icon}</span>
                    <span className="text-gray-700 dark:text-gray-300">{profile.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            My <span className="text-blue-600 dark:text-blue-400">Skills</span>
          </h3>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={item}
                className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-400/30 dark:hover:border-blue-500/30 transition-all"
              >
                <div className="flex items-center space-x-3 group">
                  <div className="w-2 h-2 rounded-full bg-blue-400 group-hover:bg-blue-500 transition-colors"></div>
                  <span className="font-medium text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {skill}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
