import { useLocation, useNavigate } from 'react-router-dom';
import { LanguageContext } from './language-context';

// Language is derived from the URL: `/id` prefix = Indonesian, otherwise English.
// This keeps each language on its own URL (no duplicate content) and makes the
// active language shareable / linkable / indexable.
export const LanguageProvider = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const { pathname } = location;
  const isId = pathname === '/id' || pathname.startsWith('/id/');
  const language = isId ? 'id' : 'en';

  const toggleLanguage = () => {
    if (isId) {
      navigate(pathname.replace(/^\/id/, '') || '/');
    } else {
      navigate('/id' + (pathname === '/' ? '' : pathname));
    }
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
