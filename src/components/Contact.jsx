import { motion } from 'framer-motion';
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from 'react-icons/ai';
import { SiDevpost } from 'react-icons/si';
import { FiMapPin } from 'react-icons/fi';

const Contact = () => {
  const contacts = [
    {
      icon: <AiOutlineMail className="w-6 h-6" />,
      title: 'Email Me',
      value: 'vidip2001@gmail.com',
      link: 'mailto:vidip2001@gmail.com',
      color: 'text-red-500',
      bg: 'bg-red-500/10',
    },
    {
      icon: <FiMapPin className="w-6 h-6" />,
      title: 'Location',
      value: 'Faridabad, India',
      color: 'text-blue-500',
      bg: 'bg-blue-500/10',
    }
  ];

  const socials = [
    {
      icon: <AiFillLinkedin className="w-6 h-6" />,
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/vidip-ghosh-9973b7213/',
      color: 'hover:bg-blue-600',
    },
    {
      icon: <AiFillGithub className="w-6 h-6" />,
      name: 'GitHub',
      link: 'https://github.com/ghoshvidip26',
      color: 'hover:bg-gray-800 dark:hover:bg-gray-700',
    },
    {
      icon: <SiDevpost className="w-6 h-6" />,
      name: 'Devpost',
      link: 'https://devpost.com/ghoshvidip26',
      color: 'hover:bg-purple-600',
    },
  ];

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
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-400 dark:from-primary-400 dark:to-primary-300">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to chat? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Contact Information</h3>
              <p className="text-gray-600 dark:text-gray-300">
                I'm open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
            </div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {contacts.map((contact, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className={`flex items-start p-4 rounded-xl ${contact.bg} backdrop-blur-sm`}
                >
                  <div className={`p-2 rounded-lg ${contact.color} ${contact.bg} mr-4`}>
                    {contact.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 dark:text-gray-200">{contact.title}</h4>
                    {contact.link ? (
                      <a
                        href={contact.link}
                        className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <p className="text-gray-600 dark:text-gray-300">{contact.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <div className="pt-4">
              <h4 className="text-lg font-medium text-gray-800 dark:text-white mb-4">Connect with me</h4>
              <div className="flex space-x-4">
                {socials.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    className={`${social.color} w-12 h-12 rounded-full flex items-center justify-center bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl overflow-hidden shadow-xl h-full min-h-[400px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14039.308357571386!2d77.34392775!3d28.39429005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdce802de1765%3A0xfffc92e94b7d014c!2sBPTP%20Park%20Grandeura!5e0!3m2!1sen!2sin!4v1691764134453!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-2xl w-full h-full min-h-[400px]"
              title="Location Map"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
