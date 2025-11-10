import { motion } from 'framer-motion';
import { FaTrophy, FaAward, FaMedal, FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';
import MLHGitCollabX from '../assets/MLHGitCollabX.png';
import GCloudCertificate from '../assets/GCloudCertificate.png';
import HTF4 from '../assets/HTF4.jpeg';
import LinkedInSkillBadge from '../assets/LinkedInSkillBadge.png';

const achievementsList = [
  {
    img: MLHGitCollabX,
    title: "MLH Hackathon Winner",
    description: "React vs. Angular HackBattle",
    icon: <FaTrophy className="text-yellow-400 text-2xl" />,
    date: '2023',
    link: 'https://mlh.io',
    tags: ['Hackathon', 'Winner']
  },
  {
    img: LinkedInSkillBadge,
    title: "LinkedIn Skill Badge",
    description: "Validated skills and expertise in web development",
    icon: <FaCertificate className="text-blue-400 text-2xl" />,
    date: '2023',
    link: 'https://www.linkedin.com/in/vidip-ghosh-9973b7213/',
    tags: ['Certification', 'Skills']
  },
  {
    img: GCloudCertificate,
    title: "Google Cloud Program",
    description: "30 days of Google Cloud Challenge",
    icon: <FaAward className="text-green-500 text-2xl" />,
    date: '2022',
    link: 'https://google.qwiklabs.com',
    tags: ['Cloud', 'Google']
  },
  {
    img: HTF4,
    title: "Hack This Fall",
    description: "Participant in India's biggest hackathon",
    icon: <FaMedal className="text-purple-400 text-2xl" />,
    date: '2024',
    link: 'https://hackthisfall.tech',
    tags: ['Hackathon', 'Networking']
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Achievements = () => {
  return (
    <section id="achievements" className="relative py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-blue-50/50 dark:from-gray-900 dark:to-gray-800"></div>
        <div className="absolute inset-0 bg-grid-slate-900/10 dark:bg-grid-slate-400/10 [mask-image:linear-gradient(to_bottom,transparent,white,transparent)]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 mb-4 text-sm font-medium text-purple-700 dark:text-purple-300 bg-purple-50/80 dark:bg-purple-900/30 rounded-full border border-purple-100/50 dark:border-purple-900/30"
          >
            Milestones & Recognitions
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-800 to-blue-700 dark:from-purple-400 dark:to-blue-400"
          >
            My Achievements
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Highlights of my journey, certifications, and recognitions in the tech world.
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {achievementsList.map((achievement, index) => (
            <motion.article
              key={index}
              variants={item}
              className="group relative h-full flex flex-col bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-purple-100/50 dark:border-purple-900/30 hover:shadow-purple-500/10"
            >
              {/* Ribbon for date */}
              <div className="absolute -right-10 top-6 w-32 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-bold py-1 px-4 transform rotate-45 text-center shadow-md">
                {achievement.date}
              </div>
              
              {/* Image with gradient overlay */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
                <motion.img
                  src={achievement.img}
                  alt={achievement.title}
                  className="w-full h-full object-contain p-6 transition-all duration-700 group-hover:scale-110"
                  style={{ objectFit: 'contain' }}
                  initial={{ opacity: 0.9 }}
                  whileHover={{ opacity: 1 }}
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-between p-6">
                  <div className="flex justify-between items-start">
                    <div className="flex flex-wrap gap-2">
                      {achievement.tags.map((tag, i) => (
                        <motion.span 
                          key={i} 
                          className="px-3 py-1.5 text-xs font-semibold rounded-full backdrop-blur-md bg-purple-500/20 text-purple-100 border border-purple-400/20"
                          initial={{ y: 10, opacity: 0 }}
                          whileInView={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.1 * i }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                    {achievement.link && (
                      <motion.a
                        href={achievement.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 bg-purple-500/20 backdrop-blur-md rounded-full text-white hover:bg-purple-500/30 transition-all hover:rotate-12 hover:scale-110 border border-purple-400/30"
                        aria-label="View details"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaExternalLinkAlt className="w-4 h-4" />
                      </motion.a>
                    )}
                  </div>
                  <motion.div 
                    className="translate-y-6 group-hover:translate-y-0 transition-all duration-500"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                  >
                    <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
                    <p className="text-sm text-gray-200">{achievement.description}</p>
                  </motion.div>
                </div>
              </div>
              
              {/* Card content */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <motion.div 
                      className={`p-3 rounded-xl backdrop-blur-sm border border-purple-100/30 dark:border-purple-900/30 ${
                        ['text-yellow-400', 'text-blue-400', 'text-green-500', 'text-purple-400']
                          .find(c => achievement.icon.props.className.includes(c)) ? 'bg-purple-500/10' : 'bg-purple-500/10'}`}
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      {achievement.icon}
                    </motion.div>
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                      {achievement.title.split(' ')[0]}
                    </h3>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-5 line-clamp-2 flex-1">
                  {achievement.description}
                </p>
                
                {achievement.link && (
                  <motion.a
                    href={achievement.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center text-sm font-medium text-purple-700 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 transition-colors group/button"
                    whileHover={{ x: 5 }}
                  >
                    View details
                    <svg 
                      className="w-4 h-4 ml-1.5 transition-transform duration-300 group-hover/button:translate-x-1" 
                      fill="currentColor" 
                      viewBox="0 0 20 20" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </motion.a>
                )}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Achievements
