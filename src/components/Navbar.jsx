import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaGlobe } from 'react-icons/fa';
import { useLanguage } from '../context/language-context';
import { translations } from '../translations/translations';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

  const base = language === 'id' ? '/id' : '';
  const links = [
    { id: 1, link: base || '/', name: t.nav.home },
    { id: 2, link: `${base}/about`, name: t.nav.about },
  ];

  return (
    <nav className="fixed inset-x-0 top-0 h-20 sm:h-24 z-50 bg-forest-dark/80 backdrop-blur-md border-b border-sage/10">
      <div className="flex justify-between items-center w-full h-full max-w-6xl mx-auto px-6 lg:px-8">
        <Link to={base || '/'} className="shrink-0">
          <img
            src="/Logo.png"
            alt="Rifki Al Sauqy - Portfolio"
            className="h-12 sm:h-14 md:h-16 w-auto object-contain"
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8">
            {links.map(({ id, link, name }) => (
              <li
                key={id}
                className="relative group text-base font-medium text-cream-dark/80 hover:text-sage-light transition-colors duration-200"
              >
                <Link to={link}>{name}</Link>
                <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-sage-light transition-all duration-300 group-hover:w-full group-hover:left-0" />
              </li>
            ))}
          </ul>

          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 h-10 px-4 rounded-full border border-sage/30 text-sage-light hover:bg-sage/10 hover:border-sage-light/50 transition-colors duration-200"
          >
            <FaGlobe size={16} />
            <span className="text-sm font-semibold">{language === 'id' ? 'EN' : 'ID'}</span>
          </button>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 h-9 px-3 rounded-full border border-sage/30 text-sage-light"
          >
            <FaGlobe size={14} />
            <span className="text-xs font-semibold">{language === 'id' ? 'EN' : 'ID'}</span>
          </button>

          <button
            onClick={() => setNav(!nav)}
            aria-label="Toggle menu"
            className="relative z-50 grid place-items-center w-10 h-10 rounded-full text-cream-dark/80 hover:text-sage-light hover:bg-sage/10 transition-colors duration-200"
          >
            {nav ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {nav && (
          <ul className="flex flex-col justify-center items-center gap-2 absolute top-0 left-0 w-full h-screen bg-forest-dark z-40">
            {links.map(({ id, link, name }) => (
              <li
                key={id}
                className="px-4 py-6 text-2xl font-medium capitalize text-cream-dark/80 hover:text-sage-light transition-colors duration-200"
              >
                <Link to={link} onClick={() => setNav(false)}>{name}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
