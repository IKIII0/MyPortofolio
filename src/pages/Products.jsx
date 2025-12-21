import { motion } from 'framer-motion';
import { FaCode, FaRocket, FaBrain, FaMobile, FaServer, FaPalette } from 'react-icons/fa';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';

const Products = () => {
  const { language } = useLanguage();
  const t = translations[language].products;

  const products = [
    {
      id: 1,
      title: language === 'id' ? 'Pengembangan Website' : 'Website Development',
      icon: <FaCode size={40} />,
      description: language === 'id' 
        ? 'Layanan pembuatan website profesional menggunakan teknologi modern ReactJS, ExpressJS, dan PostgreSQL untuk kebutuhan bisnis Anda'
        : 'Professional website development service using modern technologies ReactJS, ExpressJS, and PostgreSQL for your business needs',
      features: language === 'id'
        ? [
            'Frontend dengan ReactJS',
            'Backend dengan ExpressJS',
            'Database PostgreSQL',
            'Desain Responsif',
            'Maintenance 1 Minggu',
          ]
        : [
            'Frontend with ReactJS',
            'Backend with ExpressJS',
            'PostgreSQL Database',
            'Responsive Design',
            '1 Week Maintenance',
          ],
      price: language === 'id' ? 'Mulai dari Rp 100.000' : 'Starting from IDR 100,000',
      color: 'from-cyan-500 to-blue-600',
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
    <div className="min-h-screen pt-28 sm:pt-32 md:pt-40 pb-20 sm:pb-24 md:pb-28 px-4 sm:px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8">
            {t.title} <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">{t.titleHighlight}</span>
          </h1>
          
          <div className="h-1 w-20 sm:w-24 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-8 sm:mb-10"></div>
          
          <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-14 leading-relaxed">
            {t.description}
          </p>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto"
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-gradient-to-br from-gray-900/50 to-blue-900/20 rounded-xl border border-cyan-500/30 backdrop-blur-sm overflow-hidden flex flex-col h-full"
            >
              <div className={`bg-gradient-to-r ${product.color} p-6 sm:p-8 flex items-center justify-center`}>
                <div className="text-white">{product.icon}</div>
              </div>
              
              <div className="p-5 sm:p-6 md:p-8 flex flex-col flex-grow">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">{product.title}</h3>
                <p className="text-gray-300 text-sm sm:text-base mb-5 sm:mb-6 leading-relaxed">{product.description}</p>
                
                <div className="mb-5 sm:mb-6 flex-grow">
                  <h4 className="text-cyan-400 font-semibold mb-2 sm:mb-3 text-sm sm:text-base">{t.featuresLabel}</h4>
                  <ul className="space-y-1.5 sm:space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="text-gray-400 text-xs sm:text-sm flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="border-t border-cyan-500/30 pt-4 sm:pt-5 mt-auto">
                  <p className="text-cyan-400 font-bold text-base sm:text-lg mb-4 sm:mb-5">{product.price}</p>
                  <a
                    href="https://wa.me/6282273875270?text=Halo%2C%20saya%20ingin%20memesan%20layanan%20Pengembangan%20Website"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 inline-block text-center"
                  >
                    {language === 'id' ? 'Pesan Sekarang' : 'Order Now'}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 sm:mt-20 md:mt-24 text-center bg-gradient-to-br from-gray-900/50 to-blue-900/20 rounded-xl border border-cyan-500/30 backdrop-blur-sm p-6 sm:p-10 md:p-14"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">{t.customSolution}</h2>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-4 sm:mb-5 max-w-2xl mx-auto leading-relaxed">
            {t.customDesc}
          </p>
          <p className="text-cyan-400 text-sm sm:text-base font-semibold mb-8 sm:mb-10">
            {language === 'id' 
              ? '* Harga lebih tinggi untuk proyek dengan deployment/publish'
              : '* Higher pricing for projects with deployment/publish'}
          </p>
          <a
            href="https://wa.me/6282273875270?text=Halo%2C%20saya%20ingin%20konsultasi%20untuk%20solusi%20custom"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 sm:px-8 md:px-10 py-3 sm:py-4 text-sm sm:text-base bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/50"
          >
            {language === 'id' ? 'Pesan Sekarang' : 'Order Now'}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-8 sm:mt-10 md:mt-12 text-center"
        >
          <p className="text-gray-400 text-xs sm:text-sm">
            {t.priceNote}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
