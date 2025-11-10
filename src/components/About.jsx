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
    <section id="about" className="py-20 bg-gradient-to-b from-white to-purple-50/30 dark:from-gray-900 dark:to-purple-900/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-900 to-blue-700 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
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
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-all duration-300"></div>
              <div className="relative bg-white/95 dark:bg-gray-800/95 p-1.5 rounded-2xl backdrop-blur-sm border border-purple-100/50 dark:border-purple-900/30">
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
              Full Stack Developer
            </h3>

            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Hello! I'm Vidip Ghosh,B.Tech CSE'24 graduate, passionate about Full Stack Development along with AI and blockchain.
            </p>

            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              I specialize in the Full Stack Development and have experience in developing scalable and efficient web applications.
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
                <a href="mailto:ghoshvidip26@gmail.com" className="text-purple-700 dark:text-purple-400 hover:underline">
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
                href="https://drive.google.com/file/d/1qfaaMwYV1cqSa5nN0zwistEw4_E9en7Y/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-r from-purple-700 to-blue-700 text-white font-medium rounded-lg hover:opacity-90 transition-all flex items-center gap-2 shadow-lg hover:shadow-purple-500/20"
              >
                <FiDownload className="w-5 h-5" />
                Download CV
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border-2 border-purple-200 dark:border-purple-900/50 text-purple-800 dark:text-purple-200 font-medium rounded-lg hover:bg-purple-50/50 dark:hover:bg-purple-900/20 transition-all"
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
                    className="flex items-center gap-2 px-4 py-2 bg-purple-50/80 dark:bg-purple-900/20 rounded-lg hover:bg-purple-100/80 dark:hover:bg-purple-900/40 transition-colors border border-purple-100/50 dark:border-purple-900/30"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-purple-700 dark:text-purple-400">{profile.icon}</span>
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
          <h3 className="text-2xl md:text-3xl font-bold text-center bg-gradient-to-r from-purple-800 to-blue-700 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent mb-12">
            My Skills
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
                className="px-4 py-2 bg-white/90 dark:bg-gray-800/90 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-purple-100/50 dark:border-purple-900/30"
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
