import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaGlobe } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];
  const location = useLocation();

  const links = [
    { id: 1, link: '/', name: t.nav.home },
    { id: 2, link: '/about', name: t.nav.about },
    { id: 3, link: '/#projects', name: t.nav.products },
  ];

  const handleNavClick = (e, link) => {
    if (link.includes('#')) {
      e.preventDefault();
      const [path, hash] = link.split('#');
      
      if (location.pathname !== path) {
        window.location.href = link;
      } else {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
      setNav(false);
    }
  };

  return (
    <nav className="fixed w-full h-20 sm:h-24 bg-gradient-to-b from-[#0f281f]/90 to-transparent backdrop-blur-md z-50">
      <div className="flex justify-between items-center w-full h-full px-6 sm:px-8 md:px-10 lg:px-12">
        <div>
          <Link to="/">
            <img 
              src="/Logo.png" 
              alt="Rifki Al Sauqy - Portfolio"
              className="h-14 sm:h-16 md:h-20 w-auto object-contain"
            />
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-6 lg:gap-10">
          <ul className="flex gap-6 lg:gap-10">
            {links.map(({ id, link, name }) => (
              <li
                key={id}
                className="text-[#e8e0d5]/80 hover:text-[#9ab88a] transition-colors duration-300 cursor-pointer text-lg font-medium relative group"
              >
                <Link to={link} onClick={(e) => handleNavClick(e, link)}>{name}</Link>
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#9ab88a] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </li>
            ))}
          </ul>
          
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-2 lg:px-4 bg-gradient-to-r from-[#7c9a6b]/20 to-[#2d5a4a]/30 border border-[#7c9a6b]/40 rounded-lg text-[#9ab88a] hover:from-[#7c9a6b]/30 hover:to-[#2d5a4a]/40 transition-all duration-300"
          >
            <FaGlobe size={16} className="lg:w-[18px] lg:h-[18px]" />
            <span className="text-sm lg:text-base font-semibold">{language === 'id' ? 'EN' : 'ID'}</span>
          </button>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-2.5 py-1.5 sm:px-3 sm:py-2 bg-gradient-to-r from-[#7c9a6b]/20 to-[#2d5a4a]/30 border border-[#7c9a6b]/40 rounded-lg text-[#9ab88a]"
          >
            <FaGlobe size={14} className="sm:w-4 sm:h-4" />
            <span className="text-xs sm:text-sm font-semibold">{language === 'id' ? 'EN' : 'ID'}</span>
          </button>
          
          <div
            onClick={() => setNav(!nav)}
            className="cursor-pointer z-50 text-[#e8e0d5]/80"
          >
            {nav ? <FaTimes size={26} className="sm:w-[30px] sm:h-[30px]" /> : <FaBars size={26} className="sm:w-[30px] sm:h-[30px]" />}
          </div>
        </div>

        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-[#0f281f] to-[#1a4d3e] text-[#e8e0d5]/80 z-40">
            {links.map(({ id, link, name }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 sm:py-8 text-2xl sm:text-3xl hover:text-[#9ab88a] transition-colors duration-300"
              >
                <Link to={link} onClick={(e) => handleNavClick(e, link)}>{name}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
