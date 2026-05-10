import { motion } from "framer-motion";
import { FaCode, FaRocket, FaBrain, FaMobile, FaServer, FaPalette, FaLeaf, FaSeedling, FaTree, FaSpa, FaCamera, FaMousePointer, FaSun, FaEye, FaExternalLinkAlt } from "react-icons/fa";
import { GiTreeBranch, GiPlantSeed, GiFlowerEmblem } from "react-icons/gi";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";
import { ContainerScroll } from "../components/ui/container-scroll-animation";

const Products = () => {
  const { language } = useLanguage();
  const t = translations[language].products;

  const projects = [
    {
      id: 1,
      title: language === "id" ? "Website Converted" : "Website Converted",
      role: language === "id" ? "Web Developer" : "Web Developer",
      date: "April 2026",
      description:
        language === "id"
          ? "Website Convert untuk mengkonversi berbagai jenis file seperti gambar, PDF, Word, Audio/MP3, dan Video/MP4."
          : "File conversion website for images, PDF, Word, Audio/MP3, and Video/MP4.",
      image: "/convertmee.png",
      tech: ["React", "TailwindCSS", "Node.js"],
      link: "https://convertmee.com/id",
      icon: <FaRocket className="w-6 h-6" />,
      color: "from-[#7c9a6b] to-[#2d5a4a]",
    },
    {
      id: 2,
      title: "Nexfora",
      role: language === "id" ? "Web Developer" : "Web Developer",
      date: "Maret 2025",
      description:
        language === "id"
          ? "Platform pemesanan jasa dan kelas online dengan berbagai kategori pembelajaran."
          : "Platform for ordering services and online classes with various learning categories.",
      image: "/Nexfora.png",
      tech: ["React", "TailwindCSS", "Node.js", "PostgreSQL"],
      link: "https://nexfora.vercel.app/",
      icon: <FaLeaf className="w-6 h-6" />,
      color: "from-[#9ab88a] to-[#2d5a4a]",
    },
    {
      id: 3,
      title: language === "id" ? "Aplikasi Studio Finder" : "Studio Finder App",
      role: language === "id" ? "Mobile Developer" : "Mobile Developer",
      date: "Desember 2025",
      description:
        language === "id"
          ? "Aplikasi mencari Studio foto yang ber-mitra terdekat dengan lokasi pengguna."
          : "Application to find photo studio partners near user location.",
      image: "/Nexfora.png",
      tech: ["React Native", "Node.js", "PostgreSQL"],
      link: "#",
      icon: <FaCamera className="w-6 h-6" />,
      color: "from-[#9ab88a] to-[#1a4d3e]",
    },
    {
      id: 4,
      title: language === "id" ? "Website Quiz Ilmu Komputer" : "Computer Science Quiz Website",
      role: language === "id" ? "Web Developer" : "Web Developer",
      date: "Desember 2025",
      description:
        language === "id"
          ? "Website Quiz seputar materi Ilmu Komputer, bertujuan untuk mengasah kemampuan yang telah dipelajari."
          : "Computer science quiz website to sharpen skills learned in class.",
      image: "/BrainSpark.png",
      tech: ["React", "TailwindCSS", "Node.js", "PostgreSQL"],
      link: "https://brain-spark-fe.vercel.app/",
      icon: <GiPlantSeed className="w-6 h-6" />,
      color: "from-[#8b6f4e] to-[#2d5a4a]",
    },
    {
      id: 5,
      title: language === "id" ? "Mendeteksi Tipe Kaca menggunakan ML" : "Glass Type Detection using ML",
      role: language === "id" ? "Machine Learning Engineer" : "Machine Learning Engineer",
      date: "Juli 2025",
      description:
        language === "id"
          ? "Mendeteksi tipe kaca dengan data RI, Na, Mg, Al, Si, K, Ca, Ba, Fe untuk mengetahui tipe kaca dari data kimia."
          : "Detect glass types using chemical data (RI, Na, Mg, Al, Si, K, Ca, Ba, Fe).",
      image: "/project-ml.png",
      tech: ["Python", "TensorFlow", "Scikit-learn"],
      link: "#",
      icon: <FaBrain className="w-6 h-6" />,
      color: "from-[#7c9a6b] to-[#8b6f4e]",
    },
    {
      id: 6,
      title: "Virtual Mouse",
      role: language === "id" ? "Machine Learning Engineer" : "Machine Learning Engineer",
      date: "Februari 2025",
      description:
        language === "id"
          ? "Menggerakkan cursor menggunakan jari, bertujuan untuk melatih dan untuk keren."
          : "Control cursor using hand gestures via finger tracking.",
      image: "/project-virtualmouse.png",
      tech: ["Python", "OpenCV", "MediaPipe"],
      link: "#",
      icon: <FaMousePointer className="w-6 h-6" />,
      color: "from-[#2d5a4a] to-[#1a4d3e]",
    },
    {
      id: 7,
      title: language === "id" ? "Gesture-Based Brightness Control" : "Gesture-Based Brightness Control",
      role: language === "id" ? "Machine Learning Engineer" : "Machine Learning Engineer",
      date: "Januari 2025",
      description:
        language === "id"
          ? "Mengatur kecerahan layar laptop menggunakan jari, tanpa menggunakan tombol."
          : "Adjust laptop screen brightness using hand gestures without buttons.",
      image: "/project-brightness.png",
      tech: ["Python", "OpenCV", "MediaPipe"],
      link: "#",
      icon: <FaSun className="w-6 h-6" />,
      color: "from-[#a08060] to-[#8b6f4e]",
    },
    {
      id: 8,
      title: language === "id" ? "Deteksi Warna" : "Color Detection",
      role: language === "id" ? "Machine Learning Engineer" : "Machine Learning Engineer",
      date: "Januari 2025",
      description:
        language === "id"
          ? "Mendeteksi warna menggunakan kamera, bertujuan untuk mengetahui warna dari suatu barang."
          : "Detect colors using camera to identify object colors.",
      image: "/project-color.png",
      tech: ["Python", "OpenCV"],
      link: "#",
      icon: <FaEye className="w-6 h-6" />,
      color: "from-[#9ab88a] to-[#7c9a6b]",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0f281f]">
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
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-gradient-to-br from-[#2d5a4a]/40 to-[#1a4d3e]/60 rounded-2xl overflow-hidden border border-[#7c9a6b]/20 hover:border-[#9ab88a]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[#7c9a6b]/10"
            >
              {/* Project Header with Icon */}
              <div className={`bg-gradient-to-r ${project.color} p-6 flex items-center justify-between`}>
                <div className="text-white">{project.icon}</div>
                <span className="text-white/80 text-xs font-medium">{project.date}</span>
              </div>

              <div className="p-6">
                {/* Role Badge */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-[#7c9a6b]/20 border border-[#7c9a6b]/30 text-[#9ab88a] rounded-full text-xs font-medium">
                    {project.role}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#f5f0e6] mb-3">{project.title}</h3>
                
                <p className="text-[#e8e0d5]/60 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

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

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 sm:mt-20 md:mt-24 text-center bg-gradient-to-br from-[#1e3d35]/80 to-[#2d5a4a]/60 rounded-2xl border border-[#7c9a6b]/30 backdrop-blur-sm p-6 sm:p-10 md:p-14"
        >
          <div className="flex items-center justify-center gap-3 mb-4 sm:mb-6">
            <FaSpa className="w-8 h-8 text-[#9ab88a]" />
            <h2 className="text-2xl sm:text-3xl font-bold text-[#f5f0e6]">
              {language === "id" ? "Tertarik Bekerja Sama?" : "Interested in Working Together?"}
            </h2>
          </div>
          <p className="text-[#e8e0d5]/70 text-sm sm:text-base md:text-lg mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
            {language === "id" 
              ? "Jika Anda tertarik dengan proyek-proyek saya atau ingin berkolaborasi, jangan ragu untuk menghubungi saya."
              : "If you're interested in my projects or want to collaborate, feel free to reach out."}
          </p>
          <a
            href="https://wa.me/6282273875270?text=Halo%2C%20saya%20ingin%20konsultasi%20untuk%20proyek"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 sm:px-8 md:px-10 py-3 sm:py-4 text-sm sm:text-base bg-gradient-to-r from-[#7c9a6b] to-[#2d5a4a] text-[#f5f0e6] rounded-xl font-semibold hover:from-[#9ab88a] hover:to-[#1a4d3e] transition-all duration-300 shadow-lg shadow-[#7c9a6b]/20 hover:shadow-[#9ab88a]/30"
          >
            {language === "id" ? "Hubungi Saya" : "Contact Me"}
          </a>
        </motion.div>
      </div>
    </div>
    </div>
  );
};

export default Products;
