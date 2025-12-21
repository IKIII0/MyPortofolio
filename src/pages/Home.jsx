import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaExternalLinkAlt } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';

const Home = () => {
  const { language } = useLanguage();
  const t = translations[language].home;

  const portfolioProjects = [
    {
      id: 1,
      title: 'Nexfora',
      description: language === 'id' 
        ? 'Website platform untuk memesan jasa dan kelas online dengan berbagai kategori pembelajaran'
        : 'Platform website for ordering services and online classes with various learning categories',
      image: '/Nexfora.png',
      tech: ['React', 'TailwindCSS', 'Node.js', 'PostgreSQL'],
      link: 'https://nexfora.vercel.app/',
    },
    {
      id: 2,
      title: 'BrainSpark',
      description: language === 'id'
        ? 'Website kuis interaktif seputar ilmu komputer untuk menguji pengetahuan dan kemampuan'
        : 'Interactive quiz website about computer science to test knowledge and skills',
      image: '/BrainSpark.png',
      tech: ['React', 'TailwindCSS', 'Node.js', 'PostgreSQL'],
      link: 'https://brain-spark-fe.vercel.app/',
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-12 lg:px-20 py-24 sm:py-28 md:py-32">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg sm:text-xl md:text-2xl text-cyan-400 mb-2 sm:mb-3"
          >
            {t.greeting}
          </motion.h2>
          
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-3 sm:mb-4"
          >
            <Typewriter
              options={{
                strings: [t.name],
                autoStart: true,
                loop: true,
                delay: 75,
                cursor: '|',
              }}
            />
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-3 sm:mb-4"
          >
            {t.title}
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-base sm:text-lg md:text-xl text-gray-400 mb-4 sm:mb-5 max-w-2xl mx-auto lg:mx-0"
          >
            {t.university}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-sm sm:text-base md:text-lg text-gray-400 mb-8 sm:mb-10 max-w-3xl mx-auto lg:mx-0 leading-relaxed"
          >
            {t.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex gap-6 sm:gap-8 justify-center lg:justify-start mb-10 sm:mb-12 md:mb-14"
          >
            <a
              href="https://github.com/IKIII0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
            >
              <FaGithub className="w-8 h-8 sm:w-10 sm:h-10" />
            </a>
            <a
              href="https://www.linkedin.com/in/rifki-al-sauqy-b32a272a6/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
            >
              <FaLinkedin className="w-8 h-8 sm:w-10 sm:h-10" />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=rifkialsauqy@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
            >
              <FaEnvelope className="w-8 h-8 sm:w-10 sm:h-10" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="flex gap-4 sm:gap-6 justify-center lg:justify-start flex-wrap"
          >
            <a
              href="https://wa.me/6282273875270"
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-5 text-base bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/50"
            >
              {t.contact}
            </a>
            <a
              href="/about"
              className="px-12 py-5 text-base border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300"
            >
              {t.learnMore}
            </a>
          </motion.div>
        </motion.div>

        {/* Portfolio Showcase Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="mt-20 sm:mt-24 md:mt-32"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 text-center lg:text-left">
            Featured <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg mb-10 sm:mb-12 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            {language === 'id' 
              ? 'Beberapa proyek yang telah saya kerjakan dengan berbagai teknologi modern'
              : 'Some projects I have worked on with various modern technologies'}
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {portfolioProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8 + index * 0.2, duration: 0.6 }}
                className="bg-gradient-to-br from-gray-900/50 to-blue-900/20 rounded-xl border border-cyan-500/30 backdrop-blur-sm overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                
                <div className="p-5 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm sm:text-base mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 rounded-full text-xs sm:text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500 text-white rounded-lg font-semibold text-sm"
                  >
                    <span>{language === 'id' ? 'Lihat Project' : 'View Project'}</span>
                    <FaExternalLinkAlt size={14} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10 sm:mt-12">
            <a
              href="/products"
              className="inline-block px-8 sm:px-10 py-4 sm:py-5 text-sm sm:text-base border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300"
            >
              {language === 'id' ? 'Lihat Semua Proyek' : 'View All Projects'}
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
