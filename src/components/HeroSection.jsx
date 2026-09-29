import React, { useEffect, useRef } from 'react';

import gsap from 'gsap';
import './HeroSection.css';

const HeroSection = () => {
  const contentRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.fromTo('.eyebrow', 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: "power3.out" }
    )
    .fromTo('.hero-title span', 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power3.out" },
      "-=0.5"
    )
    .fromTo('.hero-desc', 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
      "-=0.4"
    )
    .fromTo('.hero-ctas', 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
      "-=0.6"
    );
  }, []);

  return (
    <section id="home" className="hero-section">
      <video 
        className="hero-video-bg" 
        src="/parlour.mp4" 
        autoPlay 
        loop 
        muted 
        playsInline
      />
      <div className="hero-overlay"></div>
      <div className="hero-content" ref={contentRef}>
        <div className="hero-text">
          <p className="eyebrow">BEAUTY • CARE • CONFIDENCE</p>
          <h1 className="hero-title">
            <span>Where</span><br/>
            <span>Beauty</span><br/>
            <span>Meets Art.</span>
          </h1>
          <p className="hero-desc">
            Experience the ultimate luxury in beauty and wellness. Step into a world designed to rejuvenate your body, mind, and spirit with our bespoke treatments.
          </p>
          <div className="hero-ctas">
            <button className="btn-gold">Book Appointment</button>
            <button className="btn-outline">Explore Services</button>
          </div>
          
          <div className="stats-container">
            <div className="stat">
              <span className="stat-number">10+</span>
              <span className="stat-label">Years of<br/>Excellence</span>
            </div>
            <div className="stat">
              <span className="stat-number">5k+</span>
              <span className="stat-label">Happy<br/>Clients</span>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
};

export default HeroSection;
