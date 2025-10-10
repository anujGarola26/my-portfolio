import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './context/ThemeContext';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import LoadingScreen from './components/LoadingScreen';
import WhatsAppChat from './components/WhatsAppChat';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  return (
    <HelmetProvider>
      <ThemeProvider>
        {loading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
        
        {!loading && (
          <Router>
            <div className="App">
              <Navbar />
              <ScrollToTop />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
              <Footer />
              <WhatsAppChat />
            </div>
          </Router>
        )}
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
