import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaExternalLinkAlt, FaCode, FaServer, FaBrain, FaRocket, FaLeaf, FaSeedling, FaTree, FaSpa, FaMicrophone, FaPuzzlePiece, FaUsers, FaClock, FaCamera, FaMousePointer, FaSun, FaEye } from 'react-icons/fa';
import { SiPytorch, SiCplusplus } from 'react-icons/si';
import { GiTreeBranch, GiPlantSeed, GiFlowerEmblem } from 'react-icons/gi';
import Typewriter from 'typewriter-effect';
import { ContainerScroll } from '../components/ui/container-scroll-animation';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';

const Home = () => {
  const { language } = useLanguage();
  const t = translations[language].home;

  const features = [
    {
      icon: <FaCode className="w-8 h-8" />,
      title: language === 'id' ? 'Pengembangan Web' : 'Web Development',
      description: language === 'id' 
        ? 'Membangun aplikasi web modern dengan teknologi terkini seperti React, Node.js, dan database scalable'
        : 'Building modern web applications with cutting-edge technologies like React, Node.js, and scalable databases',
    },
    {
      icon: <FaServer className="w-8 h-8" />,
      title: language === 'id' ? 'Backend Systems' : 'Backend Systems',
      description: language === 'id'
        ? 'Mendesain arsitektur server yang robust dengan API RESTful dan manajemen database yang efisien'
        : 'Designing robust server architectures with RESTful APIs and efficient database management',
    },
    {
      icon: <FaBrain className="w-8 h-8" />,
      title: language === 'id' ? 'Machine Learning' : 'Machine Learning',
      description: language === 'id'
        ? 'Mengembangkan model AI dan solusi data science untuk deteksi, klasifikasi, dan analisis prediktif'
        : 'Developing AI models and data science solutions for detection, classification, and predictive analysis',
    },
    {
      icon: <FaRocket className="w-8 h-8" />,
      title: language === 'id' ? 'Deployment' : 'Deployment',
      description: language === 'id'
        ? 'Mendeploy aplikasi ke cloud platform dengan CI/CD pipeline untuk delivery yang cepat dan reliable'
        : 'Deploying applications to cloud platforms with CI/CD pipelines for fast and reliable delivery',
    },
  ];

  const portfolioProjects = [
    {
      id: 1,
      title: 'ConvertMee',
      role: language === 'id' ? 'Web Developer' : 'Web Developer',
      date: 'April 2026',
      description: language === 'id' 
        ? 'Website konversi file untuk gambar, PDF, Word, Audio/MP3, dan Video/MP4'
        : 'File conversion website for images, PDF, Word, Audio/MP3, and Video/MP4',
      image: '/convertmee.png',
      tech: ['React', 'TailwindCSS', 'Node.js'],
      link: 'https://convertmee.com/id',
      icon: <FaRocket className="w-6 h-6" />,
      color: 'from-[#7c9a6b] to-[#2d5a4a]',
    },
    {
      id: 2,
      title: 'Nexfora',
      role: language === 'id' ? 'Web Developer' : 'Web Developer',
      date: 'Maret 2025',
      description: language === 'id' 
        ? 'Platform pemesanan jasa dan kelas online dengan berbagai kategori pembelajaran'
        : 'Service and online class booking platform with various learning categories',
      image: '/Nexfora.png',
      tech: ['React', 'TailwindCSS', 'Node.js', 'PostgreSQL'],
      link: 'https://nexfora.vercel.app/',
      icon: <GiTreeBranch className="w-6 h-6" />,
      color: 'from-[#9ab88a] to-[#2d5a4a]',
    },
    {
      id: 3,
      title: 'BrainSpark',
      role: language === 'id' ? 'Web Developer' : 'Web Developer',
      date: 'Desember 2025',
      description: language === 'id'
        ? 'Kuis interaktif seputar ilmu komputer untuk menguji pengetahuan'
        : 'Interactive computer science quiz to test knowledge',
      image: '/BrainSpark.png',
      tech: ['React', 'TailwindCSS', 'Node.js', 'PostgreSQL'],
      link: 'https://brain-spark-fe.vercel.app/',
      icon: <GiPlantSeed className="w-6 h-6" />,
      color: 'from-[#8b6f4e] to-[#2d5a4a]',
    },
    {
      id: 4,
      title: language === 'id' ? 'Aplikasi Studio Finder' : 'Studio Finder App',
      role: language === 'id' ? 'Mobile Developer' : 'Mobile Developer',
      date: 'Desember 2025',
      description: language === 'id'
        ? 'Aplikasi mencari Studio foto yang ber-mitra terdekat dengan lokasi pengguna'
        : 'Application to find photo studio partners near user location',
      image: '/Nexfora.png',
      tech: ['React Native', 'Node.js', 'PostgreSQL'],
      link: '#',
      icon: <FaCamera className="w-6 h-6" />,
      color: 'from-[#9ab88a] to-[#1a4d3e]',
    },
    {
      id: 5,
      title: language === 'id' ? 'Mendeteksi Tipe Kaca ML' : 'Glass Type Detection ML',
      role: language === 'id' ? 'Machine Learning Engineer' : 'Machine Learning Engineer',
      date: 'Juli 2025',
      description: language === 'id'
        ? 'Mendeteksi tipe kaca dengan data kimia menggunakan Machine Learning'
        : 'Detect glass types using chemical data with Machine Learning',
      image: '/project-ml.png',
      tech: ['Python', 'TensorFlow', 'Scikit-learn'],
      link: '#',
      icon: <FaBrain className="w-6 h-6" />,
      color: 'from-[#7c9a6b] to-[#8b6f4e]',
    },
    {
      id: 6,
      title: 'Virtual Mouse',
      role: language === 'id' ? 'Machine Learning Engineer' : 'Machine Learning Engineer',
      date: 'Februari 2025',
      description: language === 'id'
        ? 'Menggerakkan cursor menggunakan jari dengan computer vision'
        : 'Control cursor using hand gestures via finger tracking',
      image: '/project-virtualmouse.png',
      tech: ['Python', 'OpenCV', 'MediaPipe'],
      link: '#',
      icon: <FaMousePointer className="w-6 h-6" />,
      color: 'from-[#2d5a4a] to-[#1a4d3e]',
    },
    {
      id: 7,
      title: language === 'id' ? 'Gesture Brightness Control' : 'Gesture Brightness Control',
      role: language === 'id' ? 'Machine Learning Engineer' : 'Machine Learning Engineer',
      date: 'Januari 2025',
      description: language === 'id'
        ? 'Mengatur kecerahan layar menggunakan gesture tangan'
        : 'Adjust laptop screen brightness using hand gestures',
      image: '/project-brightness.png',
      tech: ['Python', 'OpenCV', 'MediaPipe'],
      link: '#',
      icon: <FaSun className="w-6 h-6" />,
      color: 'from-[#a08060] to-[#8b6f4e]',
    },
    {
      id: 8,
      title: language === 'id' ? 'Deteksi Warna' : 'Color Detection',
      role: language === 'id' ? 'Machine Learning Engineer' : 'Machine Learning Engineer',
      date: 'Januari 2025',
      description: language === 'id'
        ? 'Mendeteksi warna menggunakan kamera untuk identifikasi objek'
        : 'Detect colors using camera to identify object colors',
      image: '/project-color.png',
      tech: ['Python', 'OpenCV'],
      link: '#',
      icon: <FaEye className="w-6 h-6" />,
      color: 'from-[#9ab88a] to-[#7c9a6b]',
    },
  ];

  const skills = [
    { name: 'Public Speaking', icon: <FaMicrophone className="w-5 h-5" />, color: 'bg-[#7c9a6b]' },
    { name: 'Problem Solving', icon: <FaPuzzlePiece className="w-5 h-5" />, color: 'bg-[#2d5a4a]' },
    { name: 'Leadership', icon: <FaUsers className="w-5 h-5" />, color: 'bg-[#8b6f4e]' },
    { name: 'Teamwork', icon: <FaUsers className="w-5 h-5" />, color: 'bg-[#9ab88a]' },
    { name: 'Time Management', icon: <FaClock className="w-5 h-5" />, color: 'bg-[#a08060]' },
    { name: 'Pascal', icon: <FaCode className="w-5 h-5" />, color: 'bg-[#1a4d3e]' },
    { name: 'C/C++', icon: <SiCplusplus className="w-5 h-5" />, color: 'bg-[#7c9a6b]' },
    { name: 'Python', icon: <FaCode className="w-5 h-5" />, color: 'bg-[#2d5a4a]' },
    { name: 'Data Science', icon: <FaBrain className="w-5 h-5" />, color: 'bg-[#8b6f4e]' },
    { name: 'Machine Learning', icon: <SiPytorch className="w-5 h-5" />, color: 'bg-[#9ab88a]' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Nature Theme */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0f281f] via-[#1a4d3e] to-[#2d5a4a]">
        {/* Nature Background Pattern */}
        <div className="absolute inset-0 bg-leaf-pattern opacity-60" />
        
        {/* Floating Leaf Decorations */}
        <div className="absolute top-20 left-10 text-[#7c9a6b]/20 animate-float">
          <FaLeaf className="w-24 h-24 rotate-45" />
        </div>
        <div className="absolute top-40 right-20 text-[#9ab88a]/15 animate-float" style={{ animationDelay: '1s' }}>
          <FaLeaf className="w-32 h-32 -rotate-12" />
        </div>
        <div className="absolute bottom-40 left-1/4 text-[#2d5a4a]/20 animate-float" style={{ animationDelay: '2s' }}>
          <GiTreeBranch className="w-20 h-20 rotate-90" />
        </div>
        <div className="absolute bottom-20 right-1/3 text-[#7c9a6b]/15 animate-float" style={{ animationDelay: '1.5s' }}>
          <GiFlowerEmblem className="w-28 h-28" />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f281f] via-transparent to-[#0f281f]/30" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#7c9a6b]/20 border border-[#7c9a6b]/30 mb-6"
              >
                <FaLeaf className="w-4 h-4 text-[#9ab88a]" />
                <span className="text-sm text-[#e8e0d5]/80">{language === 'id' ? 'Mahasiswa Ilmu Komputer' : 'Computer Science Student'}</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
              >
                <span className="bg-gradient-to-r from-[#f5f0e6] to-[#e8e0d5] bg-clip-text text-transparent">
                  Rifki Al
                </span>
                <br />
                <span className="bg-gradient-to-r from-[#9ab88a] via-[#7c9a6b] to-[#2d5a4a] bg-clip-text text-transparent">
                  Sauqy
                </span>
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-xl sm:text-2xl md:text-3xl text-[#9ab88a] mb-4 font-light"
              >
                <Typewriter
                  options={{
                    strings: language === 'id' 
                      ? ['Web Developer', 'Backend Engineer', 'Problem Solver'] 
                      : ['Web Developer', 'Backend Engineer', 'Problem Solver'],
                    autoStart: true,
                    loop: true,
                    delay: 75,
                    cursor: '|',
                  }}
                />
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="text-base sm:text-lg text-[#e8e0d5]/70 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              >
                {language === 'id'
                  ? 'Membangun solusi digital yang berkelanjutan dengan kode yang bersih dan desain yang intuitif. Seperti alam, teknologi terbaik tumbuh dengan harmonis.'
                  : 'Building sustainable digital solutions with clean code and intuitive design. Like nature, the best technology grows in harmony.'}
              </motion.p>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="flex gap-5 justify-center lg:justify-start mb-10"
              >
                <a
                  href="https://github.com/IKIII0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-[#1a4d3e]/50 border border-[#7c9a6b]/30 flex items-center justify-center text-[#e8e0d5]/70 hover:text-[#9ab88a] hover:bg-[#2d5a4a]/50 hover:border-[#9ab88a]/50 transition-all duration-300"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/rifki-al-sauqy-b32a272a6/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-[#1a4d3e]/50 border border-[#7c9a6b]/30 flex items-center justify-center text-[#e8e0d5]/70 hover:text-[#9ab88a] hover:bg-[#2d5a4a]/50 hover:border-[#9ab88a]/50 transition-all duration-300"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:rifkialsauqy@gmail.com"
                  className="w-12 h-12 rounded-xl bg-[#1a4d3e]/50 border border-[#7c9a6b]/30 flex items-center justify-center text-[#e8e0d5]/70 hover:text-[#9ab88a] hover:bg-[#2d5a4a]/50 hover:border-[#9ab88a]/50 transition-all duration-300"
                >
                  <FaEnvelope className="w-5 h-5" />
                </a>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="flex gap-4 justify-center lg:justify-start flex-wrap"
              >
                <a
                  href="https://wa.me/6282273875270"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-gradient-to-r from-[#7c9a6b] to-[#2d5a4a] text-[#f5f0e6] rounded-xl font-semibold hover:from-[#9ab88a] hover:to-[#1a4d3e] transition-all duration-300 shadow-lg shadow-[#7c9a6b]/20 hover:shadow-[#9ab88a]/30"
                >
                  {t.contact}
                </a>
                <a
                  href="/about"
                  className="px-8 py-4 border-2 border-[#7c9a6b]/50 text-[#9ab88a] rounded-xl font-semibold hover:bg-[#7c9a6b]/10 hover:border-[#9ab88a] transition-all duration-300"
                >
                  {t.learnMore}
                </a>
              </motion.div>
            </motion.div>

            {/* Profile Photo */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Nature glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#7c9a6b] to-[#2d5a4a] rounded-full blur-3xl opacity-30 animate-pulse"></div>
                
                {/* Decorative rings */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full border border-[#7c9a6b]/20 animate-sonar-1"></div>
                  <div className="absolute w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full border border-[#9ab88a]/15 animate-sonar-2"></div>
                </div>
                
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
                  <img
                    src="/Rifki.jpeg"
                    alt="Rifki Al Sauqy"
                    className="w-full h-full object-cover rounded-full border-4 border-[#7c9a6b]/40 shadow-2xl shadow-[#0f281f]/50"
                  />
                  {/* Nature badge */}
                  <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-[#7c9a6b] to-[#2d5a4a] text-[#f5f0e6] px-4 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center gap-2">
                    <FaSeedling className="w-4 h-4" />
                    <span>CS Student</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section - Dark Green Background */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-[#0f281f] to-[#1a4d3e] relative overflow-hidden">
        <div className="absolute inset-0 bg-leaf-pattern opacity-30" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#f5f0e6] to-[#e8e0d5] bg-clip-text text-transparent">
                {language === 'id' ? 'Keahlian' : 'Expertise'}
              </span>
            </h2>
            <p className="text-[#e8e0d5]/60 text-lg max-w-2xl mx-auto">
              {language === 'id' 
                ? 'Kemampuan teknis yang dikembangkan dengan dedikasi seperti merawat taman'
                : 'Technical skills cultivated with dedication like tending a garden'}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-gradient-to-br from-[#1e3d35]/80 to-[#2d5a4a]/60 backdrop-blur-sm rounded-2xl p-6 border border-[#7c9a6b]/20 hover:border-[#9ab88a]/40 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#7c9a6b]/30 to-[#2d5a4a]/30 flex items-center justify-center text-[#9ab88a] mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[#f5f0e6] mb-2">{feature.title}</h3>
                <p className="text-[#e8e0d5]/60 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Grid Section */}
      <section className="py-20 sm:py-28 bg-[#0f281f] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#9ab88a] to-[#7c9a6b] bg-clip-text text-transparent">
                {language === 'id' ? 'Kemampuan' : 'Skills'}
              </span>
            </h2>
            <p className="text-[#e8e0d5]/60">
              {language === 'id' ? 'Soft skills dan technical skills' : 'Soft skills and technical skills'}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className={`${skill.color} rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300 cursor-default`}
              >
                <div className="text-[#f5f0e6]/80 mb-2 flex justify-center">{skill.icon}</div>
                <span className="text-[#f5f0e6] font-semibold text-sm">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section - Full Page Style */}
      <div id="projects" className="bg-[#0f281f]">
        {/* Container Scroll Hero Section */}
        <div className="relative bg-gradient-to-b from-[#0f281f] via-[#1a4d3e] to-[#0f281f]">
          <ContainerScroll
            titleComponent={
              <div className="mb-8">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <FaTree className="w-8 h-8 text-[#9ab88a]" />
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#f5f0e6]">
                    {language === "id" ? "Proyek" : "Projects"}{" "}
                    <span className="bg-gradient-to-r from-[#9ab88a] to-[#7c9a6b] bg-clip-text text-transparent">
                      {language === "id" ? "Saya" : "I've Built"}
                    </span>
                  </h1>
                </div>
                <p className="text-[#e8e0d5]/70 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
                  {language === "id" 
                    ? "Gulir ke bawah untuk melihat berbagai proyek yang telah saya kerjakan"
                    : "Scroll down to see various projects I've worked on"}
                </p>
              </div>
            }
          >
            {/* Featured Project Preview in Scroll Container */}
            <div className="relative h-full w-full bg-gradient-to-br from-[#1e3d35] to-[#2d5a4a] rounded-2xl overflow-hidden">
              <img
                src="/convertmee.png"
                alt="ConvertMee Project"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f281f]/90 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl font-bold text-[#f5f0e6] mb-2">ConvertMee</h3>
                <p className="text-[#e8e0d5]/70 text-sm mb-3">
                  {language === "id" 
                    ? "Website konversi file modern dengan berbagai format"
                    : "Modern file conversion website with various formats"}
                </p>
                <a
                  href="https://convertmee.com/id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#9ab88a] hover:text-[#f5f0e6] text-sm font-semibold transition-colors"
                >
                  {language === "id" ? "Lihat Website" : "View Website"}
                  <FaExternalLinkAlt className="w-4 h-4" />
                </a>
              </div>
            </div>
          </ContainerScroll>
        </div>

        {/* Projects Grid Section */}
        <div className="pb-20 sm:pb-24 md:pb-28 px-4 sm:px-6 md:px-12 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12 sm:mb-16"
            >
              <div className="h-1 w-20 sm:w-24 bg-gradient-to-r from-[#9ab88a] to-[#7c9a6b] mx-auto mb-6"></div>
              <p className="text-[#e8e0d5]/70 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
                {language === "id" 
                  ? "Berbagai proyek yang telah saya kerjakan dalam bidang Web Development, Mobile Development, dan Machine Learning"
                  : "Various projects I have worked on in Web Development, Mobile Development, and Machine Learning"}
              </p>
            </motion.div>

            {/* Projects Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group bg-gradient-to-br from-[#2d5a4a]/40 to-[#1a4d3e]/60 rounded-2xl overflow-hidden border border-[#7c9a6b]/20 hover:border-[#9ab88a]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[#7c9a6b]/10"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f281f]/80 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-5 sm:p-6">
                    <div className="flex items-start gap-3 mb-3">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color || 'from-[#7c9a6b] to-[#2d5a4a]'} flex items-center justify-center text-white flex-shrink-0`}>
                        {project.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#f5f0e6] mb-1">{project.title}</h3>
                        <p className="text-[#9ab88a] text-sm font-medium">{project.role}</p>
                      </div>
                    </div>

                    <p className="text-[#e8e0d5]/60 text-sm mb-2">{project.date}</p>
                    
                    <p className="text-[#e8e0d5]/70 text-sm leading-relaxed mb-4">{project.description}</p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-[#7c9a6b]/10 border border-[#7c9a6b]/20 text-[#9ab88a] rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* View Project Link */}
                    {project.link !== "#" && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[#9ab88a] hover:text-[#f5f0e6] text-sm font-semibold transition-colors duration-300"
                      >
                        {language === "id" ? "Lihat Proyek" : "View Project"}
                        <FaRocket className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
