import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import './index.css';

function App() {
  return (
    <Router>
      <LanguageProvider>
        <div className="relative min-h-screen bg-forest-dark">
          <Navbar />
          <Routes>
            {/* English (default) */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* Indonesian */}
            <Route path="/id" element={<Home />} />
            <Route path="/id/about" element={<About />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </LanguageProvider>
    </Router>
  );
}

export default App;
