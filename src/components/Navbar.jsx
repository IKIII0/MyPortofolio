import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaGlobe } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

  const links = [
    { id: 1, link: '/', name: t.nav.home },
    { id: 2, link: '/about', name: t.nav.about },
    { id: 3, link: '/products', name: t.nav.products },
  ];

  return (
    <nav className="fixed w-full h-20 sm:h-24 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm z-50">
      <div className="flex justify-between items-center w-full h-full px-6 sm:px-8 md:px-10 lg:px-12">
        <div>
          <Link to="/">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Rifki Al Sauqy
            </h1>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-6 lg:gap-10">
          <ul className="flex gap-6 lg:gap-10">
            {links.map(({ id, link, name }) => (
              <li
                key={id}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 cursor-pointer text-lg font-medium relative group"
              >
                <Link to={link}>{name}</Link>
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </li>
            ))}
          </ul>
          
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-2 lg:px-4 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 rounded-lg text-cyan-400 hover:from-cyan-500/30 hover:to-blue-600/30 transition-all duration-300"
          >
            <FaGlobe size={16} className="lg:w-[18px] lg:h-[18px]" />
            <span className="text-sm lg:text-base font-semibold">{language === 'id' ? 'EN' : 'ID'}</span>
          </button>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-2.5 py-1.5 sm:px-3 sm:py-2 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 rounded-lg text-cyan-400"
          >
            <FaGlobe size={14} className="sm:w-4 sm:h-4" />
            <span className="text-xs sm:text-sm font-semibold">{language === 'id' ? 'EN' : 'ID'}</span>
          </button>
          
          <div
            onClick={() => setNav(!nav)}
            className="cursor-pointer z-50 text-gray-300"
          >
            {nav ? <FaTimes size={26} className="sm:w-[30px] sm:h-[30px]" /> : <FaBars size={26} className="sm:w-[30px] sm:h-[30px]" />}
          </div>
        </div>

        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-900 text-gray-300 z-40">
            {links.map(({ id, link, name }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 sm:py-8 text-2xl sm:text-3xl hover:text-cyan-400 transition-colors duration-300"
                onClick={() => setNav(false)}
              >
                <Link to={link}>{name}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
