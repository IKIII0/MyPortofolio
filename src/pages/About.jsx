import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaPython, FaReact, FaDatabase } from 'react-icons/fa';
import { SiTensorflow, SiExpress, SiPostgresql, SiCplusplus } from 'react-icons/si';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';

const About = () => {
  const { language } = useLanguage();
  const t = translations[language].about;
  const [currentSlide, setCurrentSlide] = useState(0);
  const skills = [
    { name: 'Python', icon: <FaPython size={50} />, color: 'text-green-500' },
    { name: 'C/C++', icon: <SiCplusplus size={50} />, color: 'text-blue-500' },
    { name: 'TensorFlow', icon: <SiTensorflow size={50} />, color: 'text-orange-500' },
    { name: 'ReactJS', icon: <FaReact size={50} />, color: 'text-cyan-400' },
    { name: 'ExpressJS', icon: <SiExpress size={50} />, color: 'text-gray-300' },
    { name: 'PostgreSQL', icon: <SiPostgresql size={50} />, color: 'text-blue-400' },
  ];

  const certificates = [
    {
      id: 1,
      title: language === 'id' ? 'Sertifikat Memulai Pemrograman dengan Python' : 'Python Programming Certificate',
      image: '/Sertifikat Memulai Pemrograman dengan Python.png',
    },
    {
      id: 2,
      title: language === 'id' ? 'Sertifikat Belajar Dasar AI' : 'Basic AI Learning Certificate',
      image: '/Sertifikat Belajar Dasar AI.png',
    },
    {
      id: 3,
      title: language === 'id' ? 'Sertifikat Belajar Dasar Data Science' : 'Basic Data Science Certificate',
      image: '/Sertifikat Belajar Dasar Data Science.png',
    },
    {
      id: 4,
      title: language === 'id' ? '30 Hari dengan Python' : '30 Days with Python',
      image: '/Sertifikat_Python.png',
    },
    {
      id: 5,
      title: language === 'id' ? 'Bootcamp Machine Learning' : 'Machine Learning Bootcamp',
      image: '/Sertifikat_MachineLearning.png',
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen pt-28 sm:pt-32 md:pt-40 pb-20 sm:pb-24 md:pb-28 px-4 sm:px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8 text-center">
            {t.title} <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">{t.titleHighlight}</span>
          </h1>
          
          <div className="h-1 w-20 sm:w-24 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-10 sm:mb-12 md:mb-16"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 mb-16 sm:mb-20 md:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-5 sm:space-y-6 md:space-y-8"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-4 sm:mb-6">{t.whoIAm}</h2>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
              {t.whoIAmText1}
            </p>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
              {t.whoIAmText2}
            </p>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
              {t.whoIAmText3}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-5 sm:space-y-6 md:space-y-8"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-4 sm:mb-6">{t.education}</h2>
            <div className="bg-gradient-to-br from-gray-900/50 to-blue-900/20 p-5 sm:p-6 md:p-8 rounded-lg border border-cyan-500/30 backdrop-blur-sm">
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2 sm:mb-3">
                {t.degree}
              </h3>
              <p className="text-cyan-400 text-base sm:text-lg mb-3 sm:mb-4">
                {t.university}
              </p>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                {t.educationDesc}
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900/50 to-blue-900/20 p-5 sm:p-6 md:p-8 rounded-lg border border-cyan-500/30 backdrop-blur-sm">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">{t.focusAreas}</h3>
              <ul className="space-y-2 sm:space-y-3 text-gray-300">
                <li className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                  {t.focus1}
                </li>
                <li className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                  {t.focus2}
                </li>
                <li className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                  {t.focus3}
                </li>
                <li className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                  {t.focus4}
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-10 sm:mb-12 md:mb-16 text-center">
            {t.skills} <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">{t.skillsHighlight}</span>
          </h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.1, y: -10 }}
                className="bg-gradient-to-br from-gray-900/50 to-blue-900/20 p-4 sm:p-6 md:p-8 rounded-lg border border-cyan-500/30 backdrop-blur-sm flex flex-col items-center justify-center gap-3 sm:gap-4 md:gap-5 cursor-pointer transition-all duration-300 hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-500/20"
              >
                <div className={skill.color}>{skill.icon}</div>
                <p className="text-white font-semibold text-center text-sm sm:text-base">{skill.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Certificate Carousel Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 sm:mt-14 md:mt-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-8 text-center">
            {language === 'id' ? 'Sertifikat' : 'Certificates'} <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">{language === 'id' ? 'Saya' : 'Earned'}</span>
          </h2>
          
          <div className="text-center mb-6">
            <span className="text-cyan-400 text-lg sm:text-xl font-semibold">
              {currentSlide + 1}/{certificates.length}
            </span>
          </div>

          <div className="max-w-3xl mx-auto">
            <Slider {...sliderSettings}>
              {certificates.map((cert) => (
                <div key={cert.id} className="px-4">
                  <div className="bg-gradient-to-br from-gray-900/50 to-blue-900/20 rounded-xl border border-cyan-500/30 backdrop-blur-sm overflow-hidden p-4 sm:p-6">
                    <div className="flex items-center justify-center">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full max-h-[350px] sm:max-h-[450px] object-contain rounded-lg"
                      />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-white mt-4 text-center">{cert.title}</h3>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 sm:mt-20 md:mt-24 text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8">{t.workTogether}</h2>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
            {t.workTogetherDesc}
          </p>
          <a
            href="https://wa.me/6282273875270?text=Halo%2C%20saya%20ingin%20bekerja%20sama%20dengan%20Anda"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 sm:px-8 md:px-10 py-3 sm:py-4 text-sm sm:text-base bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/50"
          >
            {t.contactMe}
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
