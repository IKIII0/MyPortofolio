import { motion } from 'framer-motion';
import { FaPython, FaReact, FaDatabase, FaLeaf, FaCode, FaServer, FaBrain, FaSeedling, FaTree, FaSpa, FaTrophy, FaUsers, FaChalkboardTeacher, FaGoogle, FaMicrosoft } from 'react-icons/fa';
import { SiTensorflow, SiExpress, SiPostgresql, SiCplusplus } from 'react-icons/si';
import { GiTreeBranch, GiPlantSeed, GiFlowerEmblem } from 'react-icons/gi';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import { Component as ImageAutoSlider } from '../components/ui/image-auto-slider';

const About = () => {
  const { language } = useLanguage();
  const t = translations[language].about;
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
    {
      id: 6,
      title: language === 'id' ? '3rd Best Project Web Pathway GDGoC USU' : '3rd Best Project Web Pathway GDGoC USU',
      image: '/3rd Best Project in Web Pathway GDGoC USU.png',
    },
  ];

  const experiences = [
    {
      id: 1,
      title: 'Falaah Digital Solutions',
      location: language === 'id' ? 'Medan, Indonesia' : 'Medan, Indonesia',
      role: language === 'id' ? 'Web & Mobile Developer' : 'Web & Mobile Developer',
      date: language === 'id' ? 'Januari 2026 - Saat ini' : 'January 2026 - Present',
      description: language === 'id' 
        ? 'Mengembangkan website dan aplikasi mobile untuk berbagai proyek klien.'
        : 'Developing websites and mobile applications for various client projects.',
      icon: <FaCode className="w-6 h-6" />,
    },
    {
      id: 2,
      title: 'Codefest 002',
      location: language === 'id' ? 'Medan, Indonesia' : 'Medan, Indonesia',
      role: language === 'id' ? 'Anggota Divisi Event' : 'Event Division Member',
      date: language === 'id' ? 'April 2026 - Saat ini' : 'April 2026 - Present',
      description: language === 'id' 
        ? 'Menjadi koordinator penanggung jawab lomba Competitive Programming.'
        : 'Coordinator in charge of Competitive Programming competition.',
      icon: <FaCode className="w-6 h-6" />,
    },
    {
      id: 3,
      title: 'Ilmu Komputer Laboratory Center (IKLC)',
      location: language === 'id' ? 'Medan, Indonesia' : 'Medan, Indonesia',
      role: language === 'id' ? 'Asistan Laboratorium' : 'Laboratory Assistant',
      date: language === 'id' ? 'Januari 2026 - Saat ini' : 'January 2026 - Present',
      description: language === 'id' 
        ? 'Mengajar mata kuliah praktikum Probabilitas dan Statistika.'
        : 'Teaching Probability and Statistics laboratory course.',
      icon: <FaChalkboardTeacher className="w-6 h-6" />,
    },
    {
      id: 4,
      title: 'Imagine Cup 2026',
      location: language === 'id' ? 'Global' : 'Global',
      role: language === 'id' ? 'Semifinalis' : 'Semifinalist',
      date: language === 'id' ? 'Januari 2026 - Saat ini' : 'January 2026 - Present',
      description: language === 'id' 
        ? 'Mencapai semifinalis dalam lomba Microsoft Imagine Cup 2026 skala dunia.'
        : 'Reached semifinals in Microsoft Imagine Cup 2026 global competition.',
      icon: <FaMicrosoft className="w-6 h-6" />,
    },
    {
      id: 5,
      title: 'Unit Kegiatan Mahasiswa Islam Al-Khuwarizmi (UKMI)',
      location: language === 'id' ? 'Medan, Indonesia' : 'Medan, Indonesia',
      role: language === 'id' ? 'Anggota Divisi Keilmuan' : 'Academic Division Member',
      date: language === 'id' ? 'September 2025 - Saat ini' : 'September 2025 - Present',
      description: language === 'id' 
        ? 'Memberikan info terkait lomba, beasiswa, dan membantu mahasiswa Ilmu Komputer USU.'
        : 'Providing info on competitions, scholarships, and helping Computer Science students.',
      icon: <FaUsers className="w-6 h-6" />,
    },
    {
      id: 6,
      title: 'Ikatan Mahasiswa Ilmu Komputer (IMILKOM)',
      location: language === 'id' ? 'Medan, Indonesia' : 'Medan, Indonesia',
      role: language === 'id' ? 'Anggota Departemen Wawasan Kontemporer' : 'Contemporary Insights Department Member',
      date: language === 'id' ? 'Agustus 2025 - Saat ini' : 'August 2025 - Present',
      description: language === 'id' 
        ? 'Memberikan bantuan pengajaran ilmu jika ada kesulahan dalam mata kuliah.'
        : 'Providing teaching assistance for students struggling with coursework.',
      icon: <FaUsers className="w-6 h-6" />,
    },
    {
      id: 7,
      title: 'Google Developer Group on Campus',
      location: language === 'id' ? 'Medan, Indonesia' : 'Medan, Indonesia',
      role: language === 'id' ? 'Partisipan' : 'Participant',
      date: language === 'id' ? 'November 2024 - Saat ini' : 'November 2024 - Present',
      description: language === 'id' 
        ? 'Mengikuti sesi pembelajaran dan diskusi bersama speaker ahli di bidang Machine Learning.'
        : 'Attending learning sessions and discussions with Machine Learning experts.',
      icon: <FaGoogle className="w-6 h-6" />,
    },
    {
      id: 8,
      title: 'Dicoding',
      location: language === 'id' ? 'Medan, Indonesia' : 'Medan, Indonesia',
      role: language === 'id' ? 'Partisipan' : 'Participant',
      date: language === 'id' ? 'November 2024 - Saat ini' : 'November 2024 - Present',
      description: language === 'id' 
        ? 'Mengikuti sesi pembelajaran Basic Data Science, Basic Pemrograman Python, Machine Learning Pemula.'
        : 'Learning Basic Data Science, Basic Python Programming, and Beginner Machine Learning.',
      icon: <FaCode className="w-6 h-6" />,
    },
    {
      id: 9,
      title: language === 'id' ? 'Pusat Prestasi Nasional' : 'National Achievement Center',
      location: language === 'id' ? 'Aceh Selatan, Indonesia' : 'South Aceh, Indonesia',
      role: language === 'id' ? 'Juara 2 OSN-K Informatika' : '2nd Place OSN-K Informatics',
      date: 'April 2023',
      description: language === 'id' 
        ? 'Mengikuti lomba olimpiade sains nasional tingkat kabupaten bidang Informatika.'
        : 'Participated in National Science Olympiad at district level in Informatics.',
      icon: <FaTrophy className="w-6 h-6" />,
    },
  ];

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
    <div className="min-h-screen pt-28 sm:pt-32 md:pt-40 pb-20 sm:pb-24 md:pb-28 px-4 sm:px-6 md:px-12 lg:px-20 bg-gradient-to-b from-[#0f281f] to-[#1a4d3e]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#f5f0e6] mb-6 sm:mb-8 text-center">
            {t.title} <span className="bg-gradient-to-r from-[#9ab88a] to-[#7c9a6b] bg-clip-text text-transparent">{t.titleHighlight}</span>
          </h1>
          
          <div className="h-1 w-20 sm:w-24 bg-gradient-to-r from-[#9ab88a] to-[#7c9a6b] mx-auto mb-10 sm:mb-12 md:mb-16"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 mb-16 sm:mb-20 md:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-5 sm:space-y-6 md:space-y-8"
          >
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <FaLeaf className="w-8 h-8 text-[#9ab88a]" />
              <h2 className="text-2xl sm:text-3xl font-bold text-[#9ab88a]">{t.whoIAm}</h2>
            </div>
            <p className="text-[#e8e0d5]/80 text-sm sm:text-base md:text-lg leading-relaxed">
              {t.whoIAmText1}
            </p>
            <p className="text-[#e8e0d5]/80 text-sm sm:text-base md:text-lg leading-relaxed">
              {t.whoIAmText2}
            </p>
            <p className="text-[#e8e0d5]/80 text-sm sm:text-base md:text-lg leading-relaxed">
              {t.whoIAmText3}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-5 sm:space-y-6 md:space-y-8"
          >
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <FaSeedling className="w-8 h-8 text-[#9ab88a]" />
              <h2 className="text-2xl sm:text-3xl font-bold text-[#9ab88a]">{t.education}</h2>
            </div>
            <div className="bg-gradient-to-br from-[#1e3d35]/80 to-[#2d5a4a]/60 p-5 sm:p-6 md:p-8 rounded-2xl border border-[#7c9a6b]/30 backdrop-blur-sm">
              <h3 className="text-xl sm:text-2xl font-semibold text-[#f5f0e6] mb-2 sm:mb-3">
                {t.degree}
              </h3>
              <p className="text-[#9ab88a] text-base sm:text-lg mb-3 sm:mb-4">
                {t.university}
              </p>
              <p className="text-[#e8e0d5]/70 text-sm sm:text-base leading-relaxed">
                {t.educationDesc}
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#1e3d35]/80 to-[#2d5a4a]/60 p-5 sm:p-6 md:p-8 rounded-2xl border border-[#7c9a6b]/30 backdrop-blur-sm">
              <h3 className="text-lg sm:text-xl font-semibold text-[#f5f0e6] mb-3 sm:mb-4">{t.focusAreas}</h3>
              <ul className="space-y-2 sm:space-y-3 text-[#e8e0d5]/70">
                <li className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
                  <FaLeaf className="w-4 h-4 text-[#9ab88a]" />
                  {t.focus1}
                </li>
                <li className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
                  <FaLeaf className="w-4 h-4 text-[#9ab88a]" />
                  {t.focus2}
                </li>
                <li className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
                  <FaLeaf className="w-4 h-4 text-[#9ab88a]" />
                  {t.focus3}
                </li>
                <li className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
                  <FaLeaf className="w-4 h-4 text-[#9ab88a]" />
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#f5f0e6] mb-10 sm:mb-12 md:mb-16 text-center">
            {t.skills} <span className="bg-gradient-to-r from-[#9ab88a] to-[#7c9a6b] bg-clip-text text-transparent">{t.skillsHighlight}</span>
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
                className="bg-gradient-to-br from-[#1e3d35]/80 to-[#2d5a4a]/60 p-4 sm:p-6 md:p-8 rounded-2xl border border-[#7c9a6b]/30 backdrop-blur-sm flex flex-col items-center justify-center gap-3 sm:gap-4 md:gap-5 cursor-pointer transition-all duration-300 hover:border-[#9ab88a]/50 hover:shadow-lg hover:shadow-[#7c9a6b]/10"
              >
                <div className={skill.color}>{skill.icon}</div>
                <p className="text-[#f5f0e6] font-semibold text-center text-sm sm:text-base">{skill.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 sm:mt-20 md:mt-24 mb-16 sm:mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-8 sm:mb-10">
            <FaTrophy className="w-8 h-8 text-[#9ab88a]" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#f5f0e6]">
              {language === 'id' ? 'Pengalaman' : 'Experience'}
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#7c9a6b] via-[#9ab88a] to-[#7c9a6b]/30"></div>

            <div className="space-y-6 sm:space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  className="relative pl-12 sm:pl-20"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-2 sm:left-6 top-2 w-4 h-4 rounded-full bg-gradient-to-r from-[#7c9a6b] to-[#9ab88a] border-2 border-[#0f281f]"></div>

                  <div className="bg-gradient-to-br from-[#1e3d35]/80 to-[#2d5a4a]/60 rounded-2xl border border-[#7c9a6b]/30 backdrop-blur-sm p-5 sm:p-6 hover:border-[#9ab88a]/50 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#7c9a6b]/30 to-[#2d5a4a]/30 flex items-center justify-center text-[#9ab88a]">
                          {exp.icon}
                        </div>
                        <div>
                          <h3 className="text-lg sm:text-xl font-bold text-[#f5f0e6]">{exp.title}</h3>
                          <p className="text-[#9ab88a] text-sm">{exp.location}</p>
                        </div>
                      </div>
                      <span className="text-[#e8e0d5]/50 text-xs sm:text-sm font-medium">{exp.date}</span>
                    </div>
                    
                    <p className="text-[#9ab88a] font-medium text-sm mb-2">{exp.role}</p>
                    <p className="text-[#e8e0d5]/70 text-sm leading-relaxed">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Certificate Carousel Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-12 sm:mt-14 md:mt-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6 sm:mb-8">
            <FaSpa className="w-8 h-8 text-[#9ab88a]" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#f5f0e6] text-center">
              {language === 'id' ? 'Sertifikat' : 'Certificates'} <span className="bg-gradient-to-r from-[#9ab88a] to-[#7c9a6b] bg-clip-text text-transparent">{language === 'id' ? 'Saya' : 'Earned'}</span>
            </h2>
          </div>

          {/* Image Auto Slider */}
          <ImageAutoSlider />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 sm:mt-20 md:mt-24 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-6 sm:mb-8">
          <FaTree className="w-8 h-8 text-[#9ab88a]" />
          <h2 className="text-2xl sm:text-3xl font-bold text-[#f5f0e6]">{t.workTogether}</h2>
          </div>
          <p className="text-[#e8e0d5]/70 text-sm sm:text-base md:text-lg mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
            {t.workTogetherDesc}
          </p>
          <a
            href="https://wa.me/6282273875270?text=Halo%2C%20saya%20ingin%20bekerja%20sama%20dengan%20Anda"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 sm:px-8 md:px-10 py-3 sm:py-4 text-sm sm:text-base bg-gradient-to-r from-[#7c9a6b] to-[#2d5a4a] text-[#f5f0e6] rounded-xl font-semibold hover:from-[#9ab88a] hover:to-[#1a4d3e] transition-all duration-300 shadow-lg shadow-[#7c9a6b]/20 hover:shadow-[#9ab88a]/30"
          >
            {t.contactMe}
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
