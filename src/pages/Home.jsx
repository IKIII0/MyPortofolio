import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaExternalLinkAlt, FaCode, FaServer, FaBrain, FaRocket, FaLeaf, FaSeedling, FaTree, FaMicrophone, FaPuzzlePiece, FaUsers, FaClock, FaCamera, FaMousePointer, FaSun, FaEye, FaArrowRight } from 'react-icons/fa';
import { SiPytorch, SiCplusplus } from 'react-icons/si';
import { GiTreeBranch, GiPlantSeed, GiFlowerEmblem } from 'react-icons/gi';
import Typewriter from 'typewriter-effect';
import { ContainerScroll } from '../components/ui/container-scroll-animation';
import { useLanguage } from '../context/language-context';
import { translations } from '../translations/translations';
import { setPageSeo } from '../lib/seo';

// Shared entrance animation — subtle fade + small lift (per design-taste)
const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5, ease: 'easeOut' },
};

const Home = () => {
  const { language } = useLanguage();
  const t = translations[language].home;

  useEffect(() => {
    const id = language === 'id';
    setPageSeo({
      lang: id ? 'id' : 'en',
      path: id ? '/id' : '/',
      title: id
        ? 'Rifki Al Sauqy — Web Developer & Machine Learning Engineer | Portofolio'
        : 'Rifki Al Sauqy — Web Developer & Machine Learning Engineer | Portfolio',
      description: id
        ? 'Portofolio Rifki Al Sauqy, mahasiswa Ilmu Komputer USU & Web Developer dan Machine Learning Engineer di Medan. Membangun aplikasi web modern dengan React, Node.js, serta solusi AI/Machine Learning.'
        : 'Portfolio of Rifki Al Sauqy — Computer Science student at USU, Web Developer and Machine Learning Engineer based in Medan. Building modern web apps with React, Node.js, and AI/Machine Learning solutions.',
      alternates: [
        { lang: 'en', path: '/' },
        { lang: 'id', path: '/id' },
      ],
    });
  }, [language]);

  const features = [
    {
      icon: <FaCode className="w-6 h-6" />,
      title: language === 'id' ? 'Pengembangan Web' : 'Web Development',
      description: language === 'id'
        ? 'Membangun aplikasi web modern dengan teknologi terkini seperti React, Node.js, dan database scalable'
        : 'Building modern web applications with cutting-edge technologies like React, Node.js, and scalable databases',
    },
    {
      icon: <FaServer className="w-6 h-6" />,
      title: language === 'id' ? 'Backend Systems' : 'Backend Systems',
      description: language === 'id'
        ? 'Mendesain arsitektur server yang robust dengan API RESTful dan manajemen database yang efisien'
        : 'Designing robust server architectures with RESTful APIs and efficient database management',
    },
    {
      icon: <FaBrain className="w-6 h-6" />,
      title: language === 'id' ? 'Machine Learning' : 'Machine Learning',
      description: language === 'id'
        ? 'Mengembangkan model AI dan solusi data science untuk deteksi, klasifikasi, dan analisis prediktif'
        : 'Developing AI models and data science solutions for detection, classification, and predictive analysis',
    },
    {
      icon: <FaRocket className="w-6 h-6" />,
      title: language === 'id' ? 'Deployment' : 'Deployment',
      description: language === 'id'
        ? 'Mendeploy aplikasi ke cloud platform dengan CI/CD pipeline untuk delivery yang cepat dan reliable'
        : 'Deploying applications to cloud platforms with CI/CD pipelines for fast and reliable delivery',
    },
  ];

  // image: null -> card renders an icon header instead of a broken <img>
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
      icon: <FaRocket />,
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
      icon: <GiTreeBranch />,
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
      icon: <GiPlantSeed />,
    },
    {
      id: 4,
      title: language === 'id' ? 'Aplikasi Studio Finder' : 'Studio Finder App',
      role: language === 'id' ? 'Mobile Developer' : 'Mobile Developer',
      date: 'Desember 2025',
      description: language === 'id'
        ? 'Aplikasi mencari Studio foto yang ber-mitra terdekat dengan lokasi pengguna'
        : 'Application to find photo studio partners near user location',
      image: null,
      tech: ['React Native', 'Node.js', 'PostgreSQL'],
      link: '#',
      icon: <FaCamera />,
    },
    {
      id: 5,
      title: language === 'id' ? 'Mendeteksi Tipe Kaca ML' : 'Glass Type Detection ML',
      role: language === 'id' ? 'Machine Learning Engineer' : 'Machine Learning Engineer',
      date: 'Juli 2025',
      description: language === 'id'
        ? 'Mendeteksi tipe kaca dengan data kimia menggunakan Machine Learning'
        : 'Detect glass types using chemical data with Machine Learning',
      image: null,
      tech: ['Python', 'TensorFlow', 'Scikit-learn'],
      link: '#',
      icon: <FaBrain />,
    },
    {
      id: 6,
      title: 'Virtual Mouse',
      role: language === 'id' ? 'Machine Learning Engineer' : 'Machine Learning Engineer',
      date: 'Februari 2025',
      description: language === 'id'
        ? 'Menggerakkan cursor menggunakan jari dengan computer vision'
        : 'Control cursor using hand gestures via finger tracking',
      image: null,
      tech: ['Python', 'OpenCV', 'MediaPipe'],
      link: '#',
      icon: <FaMousePointer />,
    },
    {
      id: 7,
      title: language === 'id' ? 'Gesture Brightness Control' : 'Gesture Brightness Control',
      role: language === 'id' ? 'Machine Learning Engineer' : 'Machine Learning Engineer',
      date: 'Januari 2025',
      description: language === 'id'
        ? 'Mengatur kecerahan layar menggunakan gesture tangan'
        : 'Adjust laptop screen brightness using hand gestures',
      image: null,
      tech: ['Python', 'OpenCV', 'MediaPipe'],
      link: '#',
      icon: <FaSun />,
    },
    {
      id: 8,
      title: language === 'id' ? 'Deteksi Warna' : 'Color Detection',
      role: language === 'id' ? 'Machine Learning Engineer' : 'Machine Learning Engineer',
      date: 'Januari 2025',
      description: language === 'id'
        ? 'Mendeteksi warna menggunakan kamera untuk identifikasi objek'
        : 'Detect colors using camera to identify object colors',
      image: null,
      tech: ['Python', 'OpenCV'],
      link: '#',
      icon: <FaEye />,
    },
  ];

  const skills = [
    { name: 'Public Speaking', icon: <FaMicrophone className="w-5 h-5" /> },
    { name: 'Problem Solving', icon: <FaPuzzlePiece className="w-5 h-5" /> },
    { name: 'Leadership', icon: <FaUsers className="w-5 h-5" /> },
    { name: 'Teamwork', icon: <FaUsers className="w-5 h-5" /> },
    { name: 'Time Management', icon: <FaClock className="w-5 h-5" /> },
    { name: 'Pascal', icon: <FaCode className="w-5 h-5" /> },
    { name: 'C/C++', icon: <SiCplusplus className="w-5 h-5" /> },
    { name: 'Python', icon: <FaCode className="w-5 h-5" /> },
    { name: 'Data Science', icon: <FaBrain className="w-5 h-5" /> },
    { name: 'Machine Learning', icon: <SiPytorch className="w-5 h-5" /> },
  ];

  const socials = [
    { href: 'https://github.com/IKIII0', icon: <FaGithub className="w-5 h-5" />, label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/rifki-al-sauqy-b32a272a6/', icon: <FaLinkedin className="w-5 h-5" />, label: 'LinkedIn' },
    { href: 'mailto:rifkyalshauqy2006@gmail.com', icon: <FaEnvelope className="w-5 h-5" />, label: 'Email' },
  ];

  return (
    <div className="min-h-screen">
      {/* ===================== Hero ===================== */}
      <section className="relative min-h-[100dvh] flex items-center overflow-hidden bg-forest-dark">
        {/* one quiet ambient wash, not a mesh gradient */}
        <div className="absolute inset-0 bg-leaf-pattern opacity-40" />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 lg:px-8 pt-28 pb-16">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Text — left, editorial */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="lg:col-span-7 text-center lg:text-left"
            >
              <p className="text-xs uppercase tracking-[0.22em] text-sage-light/80 mb-5">
                {language === 'id' ? 'Mahasiswa Ilmu Komputer · Medan' : 'Computer Science Student · Medan'}
              </p>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.02] mb-5">
                <span className="text-cream">Rifki Al </span>
                <span className="text-sage-light">Sauqy</span>
              </h1>

              <div className="text-xl md:text-2xl text-cream-dark/80 mb-6 font-medium min-h-[2rem]">
                <Typewriter
                  options={{
                    strings: ['Web Developer', 'Backend Engineer', 'Machine Learning Engineer'],
                    autoStart: true,
                    loop: true,
                    delay: 70,
                    cursor: '|',
                  }}
                />
              </div>

              <p className="text-base sm:text-lg text-cream-dark/65 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                {language === 'id'
                  ? 'Membangun aplikasi web modern dan solusi machine learning dengan kode yang bersih dan desain yang tenang.'
                  : 'Building modern web apps and machine learning solutions with clean code and a calm, considered design.'}
              </p>

              <div className="flex gap-4 justify-center lg:justify-start flex-wrap mb-8">
                <a href="https://wa.me/6282273875270" target="_blank" rel="noopener noreferrer" className="btn-primary">
                  {t.contact}
                </a>
                <a href={language === 'id' ? '/id/about' : '/about'} className="btn-outline">
                  {t.learnMore}
                </a>
              </div>

              <div className="flex gap-3 justify-center lg:justify-start">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="icon-tile w-10 h-10 hover:border-sage-light/40 transition-colors duration-200"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Photo — clean frame, no rings/glow/stamp */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12, ease: 'easeOut' }}
              className="lg:col-span-5 flex justify-center lg:justify-end"
            >
              <div className="relative w-60 h-72 sm:w-72 sm:h-[22rem] md:w-80 md:h-[26rem]">
                <div className="absolute -inset-3 rounded-2xl border border-sage/15" />
                <img
                  src="/Rifki.jpeg"
                  alt="Rifki Al Sauqy"
                  className="relative w-full h-full object-cover rounded-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===================== Expertise ===================== */}
      <section className="py-24 bg-gradient-to-b from-forest-dark to-forest-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-leaf-pattern opacity-30" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 heading-grad">
              {language === 'id' ? 'Keahlian' : 'Expertise'}
            </h2>
            <p className="text-cream-dark/60 text-lg max-w-2xl mx-auto">
              {language === 'id'
                ? 'Kemampuan teknis yang dikembangkan dengan dedikasi seperti merawat taman'
                : 'Technical skills cultivated with dedication like tending a garden'}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                {...fadeUp}
                transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.08 }}
                className="card p-6 group"
              >
                <div className="icon-tile w-12 h-12 mb-4 group-hover:bg-sage/25 transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-cream mb-2">{feature.title}</h3>
                <p className="text-cream-dark/60 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== Skills ===================== */}
      <section className="py-24 bg-forest-dark">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 className="text-4xl font-bold tracking-tight mb-4 accent-grad">
              {language === 'id' ? 'Kemampuan' : 'Skills'}
            </h2>
            <p className="text-cream-dark/60">
              {language === 'id' ? 'Soft skills dan technical skills' : 'Soft skills and technical skills'}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                {...fadeUp}
                transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.04 }}
                className="card p-6 flex flex-col items-center text-center gap-3 hover:-translate-y-1"
              >
                <span className="text-sage-light">{skill.icon}</span>
                <span className="text-cream font-medium text-sm">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== Projects ===================== */}
      <div id="projects" className="bg-forest-dark">
        <div className="relative bg-gradient-to-b from-forest-dark via-forest-primary to-forest-dark">
          <ContainerScroll
            titleComponent={
              <div className="mb-8">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-cream mb-4">
                  {language === 'id' ? 'Proyek' : 'Projects'}{' '}
                  <span className="accent-grad">{language === 'id' ? 'Saya' : "I've Built"}</span>
                </h2>
                <p className="text-cream-dark/70 text-base md:text-lg max-w-2xl mx-auto">
                  {language === 'id'
                    ? 'Gulir ke bawah untuk melihat berbagai proyek yang telah saya kerjakan'
                    : "Scroll down to see various projects I've worked on"}
                </p>
              </div>
            }
          >
            <div className="relative h-full w-full bg-gradient-to-br from-forest-surface to-forest-light rounded-xl overflow-hidden">
              <img src="/convertmee.png" alt="ConvertMee Project" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/90 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl font-bold text-cream mb-2">ConvertMee</h3>
                <p className="text-cream-dark/70 text-sm mb-3">
                  {language === 'id'
                    ? 'Website konversi file modern dengan berbagai format'
                    : 'Modern file conversion website with various formats'}
                </p>
                <a
                  href="https://convertmee.com/id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sage-light hover:text-cream text-sm font-semibold transition-colors"
                >
                  {language === 'id' ? 'Lihat Website' : 'View Website'}
                  <FaExternalLinkAlt className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </ContainerScroll>
        </div>

        <div className="pb-28 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div {...fadeUp} className="text-center mb-14">
              <div className="accent-rule mx-auto mb-6" />
              <p className="text-cream-dark/70 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
                {language === 'id'
                  ? 'Berbagai proyek yang telah saya kerjakan dalam bidang Web Development, Mobile Development, dan Machine Learning'
                  : 'Various projects I have worked on in Web Development, Mobile Development, and Machine Learning'}
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  {...fadeUp}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: (index % 3) * 0.08 }}
                  className="card group overflow-hidden flex flex-col"
                >
                  {/* Header — real screenshot, or themed icon panel when no image */}
                  {project.image ? (
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 to-transparent" />
                    </div>
                  ) : (
                    <div className="relative h-44 grid place-items-center overflow-hidden bg-gradient-to-br from-forest-surface to-forest-primary">
                      <div className="absolute inset-0 bg-leaf-pattern opacity-40" />
                      <span className="relative text-7xl text-sage-light/25 group-hover:text-sage-light/40 transition-colors duration-300">
                        {project.icon}
                      </span>
                    </div>
                  )}

                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="icon-tile w-11 h-11 shrink-0 text-lg">{project.icon}</div>
                      <div>
                        <h3 className="text-lg font-semibold text-cream leading-tight">{project.title}</h3>
                        <p className="text-sage-light text-sm">{project.role}</p>
                      </div>
                    </div>

                    <p className="text-cream-dark/50 text-xs mb-3">{project.date}</p>
                    <p className="text-cream-dark/70 text-sm leading-relaxed mb-4">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, idx) => (
                        <span key={idx} className="chip">{tech}</span>
                      ))}
                    </div>

                    {project.link !== '#' && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-auto inline-flex items-center gap-2 text-sage-light hover:text-cream text-sm font-semibold transition-colors duration-200"
                      >
                        {language === 'id' ? 'Lihat Proyek' : 'View Project'}
                        <FaArrowRight className="w-3.5 h-3.5" />
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
