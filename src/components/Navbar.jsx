import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['home', 'services', 'about', 'gallery', 'pricing', 'contact'];
      let currentSection = 'home';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjust threshold as needed
          if (rect.top <= 200 && rect.bottom >= 200) {
            currentSection = section;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="logo-container">
          <a href="#" className="logo">LUMIÈRE</a>
          <span className="logo-subtitle">BEAUTY LOUNGE</span>
        </div>
        
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href="#home" className={activeSection === 'home' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={() => setMenuOpen(false)}>About</a>
          <a href="#services" className={activeSection === 'services' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#gallery" className={activeSection === 'gallery' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Gallery</a>
          <a href="#pricing" className={activeSection === 'pricing' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Pricing</a>
          <a href="#contact" className="btn-gold nav-btn" onClick={() => setMenuOpen(false)}>Book Appointment</a>
        </div>

        <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
