import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import StarField from './components/StarField';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import './index.css';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="relative min-h-screen">
          <StarField />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
