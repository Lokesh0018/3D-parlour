import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Play } from 'lucide-react';
import './SalonExperience.css';

const SalonExperience = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(imageRef.current, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="experience-section" ref={sectionRef}>
      <div className="experience-parallax">
        <img 
          ref={imageRef}
          src="https://images.unsplash.com/photo-1521590832167-7bfc17484d20?auto=format&fit=crop&w=1920&q=80" 
          alt="Salon Experience" 
          className="experience-bg"
        />
        <div className="experience-overlay"></div>
      </div>
      
      <div className="experience-content">
        <h2 className="experience-title">Step Into Our World</h2>
        <p className="experience-desc">Discover the serene ambiance and premium facilities that make LUMIÈRE the ultimate beauty destination.</p>
        
        <button className="video-btn">
          <div className="play-icon">
            <Play fill="currentColor" size={24} />
          </div>
          <span>Watch Experience</span>
        </button>
      </div>
    </section>
  );
};

export default SalonExperience;
