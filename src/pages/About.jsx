import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaPython, FaReact, FaLeaf, FaCode, FaTrophy, FaUsers, FaChalkboardTeacher, FaGoogle, FaMicrosoft } from 'react-icons/fa';
import { SiTensorflow, SiExpress, SiPostgresql, SiCplusplus } from 'react-icons/si';
import { useLanguage } from '../context/language-context';
import { translations } from '../translations/translations';
import { Component as ImageAutoSlider } from '../components/ui/image-auto-slider';
import { setPageSeo } from '../lib/seo';

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5, ease: 'easeOut' },
};

const About = () => {
  const { language } = useLanguage();
  const t = translations[language].about;

  useEffect(() => {
    const id = language === 'id';
    setPageSeo({
      lang: id ? 'id' : 'en',
      path: id ? '/id/about' : '/about',
      title: id
        ? 'Tentang Rifki Al Sauqy — Web Developer & Machine Learning Engineer'
        : 'About Rifki Al Sauqy — Web Developer & Machine Learning Engineer',
      description: id
        ? 'Kenali Rifki Al Sauqy: mahasiswa Ilmu Komputer USU, Web & Mobile Developer, dan Machine Learning Engineer. Lihat pengalaman, keahlian, dan sertifikat di bidang React, Node.js, Python, dan AI.'
        : 'Get to know Rifki Al Sauqy: Computer Science student at USU, Web & Mobile Developer, and Machine Learning Engineer. See experience, skills, and certificates in React, Node.js, Python, and AI.',
      alternates: [
        { lang: 'en', path: '/about' },
        { lang: 'id', path: '/id/about' },
      ],
    });
  }, [language]);

  // Single accent palette — icons read as one family (per design-taste)
  const skills = [
    { name: 'Python', icon: <FaPython size={44} /> },
    { name: 'C/C++', icon: <SiCplusplus size={44} /> },
    { name: 'TensorFlow', icon: <SiTensorflow size={44} /> },
    { name: 'ReactJS', icon: <FaReact size={44} /> },
    { name: 'ExpressJS', icon: <SiExpress size={44} /> },
    { name: 'PostgreSQL', icon: <SiPostgresql size={44} /> },
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
      logo: '/org-falaah.jpg',
      icon: <FaCode className="w-5 h-5" />,
    },
    {
      id: 11,
      title: 'GenBI USU',
      location: language === 'id' ? 'Medan, Indonesia' : 'Medan, Indonesia',
      role: language === 'id' ? 'Anggota Divisi Kewirausahaan' : 'Entrepreneurship Division Member',
      date: language === 'id' ? '2025 - Saat ini' : '2025 - Present',
      description: language === 'id'
        ? 'Penerima Beasiswa Bank Indonesia yang aktif di Divisi Kewirausahaan serta kegiatan sosial dan edukasi.'
        : 'Bank Indonesia scholarship awardee active in the Entrepreneurship Division and in social and educational programs.',
      logo: '/org-genbi.jpg',
      icon: <FaUsers className="w-5 h-5" />,
    },
    {
      id: 2,
      title: 'Codefest 002',
      location: language === 'id' ? 'Medan, Indonesia' : 'Medan, Indonesia',
      role: language === 'id' ? 'Anggota Divisi Event' : 'Event Division Member',
      date: language === 'id' ? 'April 2026 - Juli 2026' : 'April 2026 - July 2026',
      description: language === 'id'
        ? 'Menjadi koordinator penanggung jawab lomba Competitive Programming.'
        : 'Coordinator in charge of Competitive Programming competition.',
      logo: '/org-codefest.png',
      icon: <FaCode className="w-5 h-5" />,
    },
    {
      id: 3,
      title: 'Ilmu Komputer Laboratory Center (IKLC)',
      location: language === 'id' ? 'Medan, Indonesia' : 'Medan, Indonesia',
      role: language === 'id' ? 'Asisten Laboratorium · Kepala Divisi Manajemen Sumber Daya Asisten' : 'Laboratory Assistant · Head of Assistant Resource Management Division',
      date: language === 'id' ? 'Januari 2026 - Saat ini' : 'January 2026 - Present',
      description: language === 'id'
        ? 'Menjadi Kepala Divisi Manajemen Sumber Daya Asisten serta mengajar praktikum Probabilitas dan Statistika, Dasar Pemrograman, dan Basis Data.'
        : 'Head of the Assistant Resource Management Division, teaching Probability and Statistics, Fundamentals of Programming, and Database laboratory courses.',
      logo: '/org-iklc.jpg',
      icon: <FaChalkboardTeacher className="w-5 h-5" />,
    },
    {
      id: 4,
      title: 'Imagine Cup 2026',
      location: language === 'id' ? 'Global' : 'Global',
      role: language === 'id' ? 'Semifinalis' : 'Semifinalist',
      date: language === 'id' ? 'Januari 2026 - Mei 2026' : 'January 2026 - May 2026',
      description: language === 'id'
        ? 'Mencapai semifinalis dalam lomba Microsoft Imagine Cup 2026 skala dunia.'
        : 'Reached semifinals in Microsoft Imagine Cup 2026 global competition.',
      logo: '/org-imaginecup.jpg',
      icon: <FaMicrosoft className="w-5 h-5" />,
    },
    {
      id: 5,
      title: 'Unit Kegiatan Mahasiswa Islam Al-Khuwarizmi (UKMI)',
      location: language === 'id' ? 'Medan, Indonesia' : 'Medan, Indonesia',
      role: language === 'id' ? 'Anggota Divisi Keilmuan' : 'Academic Division Member',
      date: language === 'id' ? 'September 2025 - September 2026' : 'September 2025 - September 2026',
      description: language === 'id'
        ? 'Memberikan info terkait lomba, beasiswa, dan membantu mahasiswa Ilmu Komputer USU.'
        : 'Providing info on competitions, scholarships, and helping Computer Science students.',
      logo: '/org-ukmi.jpg',
      icon: <FaUsers className="w-5 h-5" />,
    },
    {
      id: 6,
      title: 'Ikatan Mahasiswa Ilmu Komputer (IMILKOM)',
      location: language === 'id' ? 'Medan, Indonesia' : 'Medan, Indonesia',
      role: language === 'id' ? 'Kepala Departemen Wawasan Kontemporer' : 'Head of Contemporary Insights Department',
      date: language === 'id' ? 'September 2026 - Saat ini' : 'September 2026 - Present',
      description: language === 'id'
        ? 'Memimpin departemen yang berfokus pada perkembangan wawasan dan isu kontemporer di lingkungan Ilmu Komputer USU.'
        : 'Leading the department focused on contemporary insights and current issues within Computer Science at USU.',
      logo: '/org-imilkom.jpg',
      icon: <FaUsers className="w-5 h-5" />,
    },
    {
      id: 10,
      title: 'Ikatan Mahasiswa Ilmu Komputer (IMILKOM)',
      location: language === 'id' ? 'Medan, Indonesia' : 'Medan, Indonesia',
      role: language === 'id' ? 'Anggota Departemen Wawasan Kontemporer' : 'Contemporary Insights Department Member',
      date: language === 'id' ? 'Agustus 2025 - September 2026' : 'August 2025 - September 2026',
      description: language === 'id'
        ? 'Memberikan bantuan pengajaran ilmu jika ada yang kesulitan dalam mata kuliah prodi Ilmu Komputer.'
        : 'Providing teaching assistance for students struggling with Computer Science coursework.',
      logo: '/org-imilkom.jpg',
      icon: <FaUsers className="w-5 h-5" />,
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
      logo: '/org-gdgoc.jpg',
      icon: <FaGoogle className="w-5 h-5" />,
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
      logo: '/org-dicoding.png',
      icon: <FaCode className="w-5 h-5" />,
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
      logo: '/org-puspresnas.jpg',
      icon: <FaTrophy className="w-5 h-5" />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  };

  return (
    <div className="min-h-screen pt-32 md:pt-40 pb-28 px-6 lg:px-8 bg-gradient-to-b from-forest-dark to-forest-primary">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div {...fadeUp} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-cream mb-6">
            {t.title} <span className="accent-grad">{t.titleHighlight}</span>
          </h1>
          <div className="accent-rule mx-auto" />
        </motion.div>

        {/* Who / Education */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 mb-24">
          <motion.div {...fadeUp} className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-semibold text-cream mb-2">{t.whoIAm}</h2>
            <p className="text-cream-dark/80 text-base md:text-lg leading-relaxed max-w-prose">{t.whoIAmText1}</p>
            <p className="text-cream-dark/80 text-base md:text-lg leading-relaxed max-w-prose">{t.whoIAmText2}</p>
            <p className="text-cream-dark/80 text-base md:text-lg leading-relaxed max-w-prose">{t.whoIAmText3}</p>
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }} className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-semibold text-cream mb-2">{t.education}</h2>

            <div className="card p-6 md:p-8">
              <h3 className="text-xl sm:text-2xl font-semibold text-cream mb-2">{t.degree}</h3>
              <p className="text-sage-light text-base sm:text-lg mb-4">{t.university}</p>
              <p className="text-cream-dark/70 text-sm sm:text-base leading-relaxed">{t.educationDesc}</p>
            </div>

            <div className="card p-6 md:p-8">
              <h3 className="text-lg sm:text-xl font-semibold text-cream mb-4">{t.focusAreas}</h3>
              <ul className="space-y-3 text-cream-dark/70">
                {[t.focus1, t.focus2, t.focus3, t.focus4].map((focus, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm sm:text-base">
                    <FaLeaf className="w-4 h-4 text-sage-light shrink-0" />
                    {focus}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Skills */}
        <motion.div {...fadeUp}>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-cream mb-12 text-center">
            {t.skills} <span className="accent-grad">{t.skillsHighlight}</span>
          </h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                className="card p-6 flex flex-col items-center justify-center gap-4 text-center cursor-default"
              >
                <div className="text-sage-light">{skill.icon}</div>
                <p className="text-cream font-medium text-sm">{skill.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Experience */}
        <motion.div {...fadeUp} className="mt-24 mb-20">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-cream mb-12 text-center">
            {language === 'id' ? 'Pengalaman' : 'Experience'}
          </h2>

          <div className="relative">
            <div className="absolute left-4 sm:left-8 top-2 bottom-2 w-px bg-gradient-to-b from-sage via-sage-light to-sage/20" />

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.4, ease: 'easeOut', delay: (index % 4) * 0.06 }}
                  className="relative pl-12 sm:pl-20"
                >
                  <div className="absolute left-2.25 sm:left-6.25 top-6 w-3.5 h-3.5 rounded-full bg-sage-light ring-4 ring-forest-dark" />

                  <div className="card p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                      <div className="flex items-center gap-3">
                        {exp.logo ? (
                          <img
                            src={exp.logo}
                            alt={exp.title}
                            loading="lazy"
                            className="w-10 h-10 rounded-lg object-cover shrink-0 bg-white ring-1 ring-sage/20"
                          />
                        ) : (
                          <div className="icon-tile w-10 h-10 shrink-0">{exp.icon}</div>
                        )}
                        <div>
                          <h3 className="text-lg font-semibold text-cream leading-tight">{exp.title}</h3>
                          <p className="text-sage-light text-sm">{exp.location}</p>
                        </div>
                      </div>
                      <span className="text-cream-dark/50 text-xs sm:text-sm font-medium shrink-0">{exp.date}</span>
                    </div>

                    <p className="text-sage-light font-medium text-sm mb-2">{exp.role}</p>
                    <p className="text-cream-dark/70 text-sm leading-relaxed">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Certificates */}
        <motion.div {...fadeUp} className="mt-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-cream text-center mb-8">
            {language === 'id' ? 'Sertifikat' : 'Certificates'}{' '}
            <span className="accent-grad">{language === 'id' ? 'Saya' : 'Earned'}</span>
          </h2>

          <ImageAutoSlider />
        </motion.div>

        {/* CTA */}
        <motion.div {...fadeUp} className="mt-24 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-cream mb-6">{t.workTogether}</h2>
          <p className="text-cream-dark/70 text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            {t.workTogetherDesc}
          </p>
          <a
            href="https://wa.me/6282273875270?text=Halo%2C%20saya%20ingin%20bekerja%20sama%20dengan%20Anda"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            {t.contactMe}
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
