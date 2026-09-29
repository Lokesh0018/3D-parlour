import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './AboutSection.css';

const AboutSection = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(textRef.current.children, 
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          stagger: 0.2, 
          duration: 1, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          }
        }
      );

      gsap.fromTo(imageRef.current,
        { scale: 1.1, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="about-container">
        <div className="about-image-wrapper">
          <div className="about-image" ref={imageRef}>
            <img src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80" alt="Luxury Salon Interior" />
          </div>
          <div className="about-accent-box"></div>
        </div>
        
        <div className="about-content" ref={textRef}>
          <h4 className="eyebrow">Our Philosophy</h4>
          <h2 className="section-title" style={{textAlign: 'left', marginBottom: '1.5rem'}}>More Than a Salon</h2>
          <p className="about-desc">
            At LUMIÈRE, we believe that beauty is an art form. Our sanctuary is designed to offer a transformative experience where luxury meets personalized care. We don't just provide services; we craft confidence.
          </p>
          <p className="about-desc">
            Our expert team of stylists and therapists are dedicated to bringing out your inner glow using the finest products and most advanced techniques in the industry.
          </p>
          <div style={{marginTop: '2rem'}}>
            <button className="btn-gold">Explore Our Story</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
