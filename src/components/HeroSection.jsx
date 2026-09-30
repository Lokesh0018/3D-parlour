import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './HeroSection.css';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const contentRef = useRef();
  const videoRef = useRef();
  const sectionRef = useRef();

  useEffect(() => {
    let isAnimatingIn = false;
    let isAnimatingOut = false;

    // Set initial state
    gsap.set(['.eyebrow', '.hero-title span', '.hero-desc', '.hero-cta'], { opacity: 0, y: 15 });

    const playIn = () => {
      if (isAnimatingIn) return;
      isAnimatingIn = true;
      isAnimatingOut = false;
      
      gsap.killTweensOf(['.eyebrow', '.hero-title span', '.hero-desc', '.hero-cta']);
      
      const tl = gsap.timeline();
      tl.fromTo('.eyebrow', 
        { opacity: 0, y: 15 }, 
        { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" }
      )
      .fromTo('.hero-title span', 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0, duration: 1.2, stagger: 0.15, ease: "power2.out" },
        "-=0.8"
      )
      .fromTo('.hero-desc', 
        { opacity: 0, y: 15 }, 
        { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" },
        "-=0.8"
      )
      .fromTo('.hero-cta', 
        { opacity: 0, y: 15 }, 
        { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" },
        "-=1.0"
      );
    };

    const playOut = () => {
      if (isAnimatingOut) return;
      isAnimatingOut = true;
      isAnimatingIn = false;
      
      gsap.killTweensOf(['.eyebrow', '.hero-title span', '.hero-desc', '.hero-cta']);
      
      gsap.to(['.hero-cta', '.hero-desc', '.hero-title span', '.eyebrow'], {
        opacity: 0,
        y: -15,
        duration: 0.8,
        stagger: 0.05,
        ease: "power2.inOut"
      });
    };

    // Initial animation
    playIn();

    const handleTimeUpdate = () => {
      if (!videoRef.current) return;
      const time = videoRef.current.currentTime;
      
      if (time >= 6 && !isAnimatingOut) {
        playOut();
      } else if (time < 1 && !isAnimatingIn) {
        playIn();
      }
    };

    const videoEl = videoRef.current;
    if (videoEl) {
      videoEl.addEventListener('timeupdate', handleTimeUpdate);
    }

    // Parallax effect for video
    gsap.to(videoRef.current, {
      y: '15%',
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });

    return () => {
      if (videoEl) {
        videoEl.removeEventListener('timeupdate', handleTimeUpdate);
      }
    };
  }, []);

  return (
    <section id="home" className="hero-section" ref={sectionRef}>
      <div className="hero-video-wrapper">
        <video 
          ref={videoRef}
          className="hero-video-bg" 
          src="/parlour.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline
        />
        <div className="hero-gradient-overlay"></div>
      </div>
      
      <div className="hero-content" ref={contentRef}>
        <div className="hero-text">
          <p className="eyebrow">BEAUTY • CARE • CONFIDENCE</p>
          <h1 className="hero-title">
            <span>Where Beauty</span><br />
            <span>Meets Art.</span>
          </h1>
          <p className="hero-desc">
            Experience the ultimate luxury in beauty and wellness. Step into a world designed to rejuvenate your body, mind, and spirit.
          </p>
          <div className="hero-cta">
            <button className="btn-gold">Book Appointment</button>
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
