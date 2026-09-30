import React, { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: "Eleanor Vance",
    text: "An absolutely transcendent experience. The attention to detail and level of care I received was unmatched. My skin has never looked better.",
    rating: 5
  },
  {
    id: 2,
    name: "Sophia Laurent",
    text: "LUMIÈRE is my sanctuary in the city. The stylists truly understand how to enhance natural beauty. I left feeling completely revitalized.",
    rating: 5
  },
  {
    id: 3,
    name: "Isabella Chen",
    text: "The bridal package was everything I dreamed of. They made me feel like royalty on my special day. Exceptional service from start to finish.",
    rating: 5
  }
];

const Testimonials = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [fade, setFade] = useState(false);
  const isAnimating = useRef(false);
  
  const sectionRef = useRef(null);
  const parallaxRef1 = useRef(null);
  const parallaxRef2 = useRef(null);
  const parallaxRef3 = useRef(null);

  const changeSlide = (direction) => {
    if (isAnimating.current) return;
    isAnimating.current = true;
    setFade(true);
    
    setTimeout(() => {
      setCurrentIdx((prev) => {
        if (direction === 'next') return (prev + 1) % testimonials.length;
        return prev === 0 ? testimonials.length - 1 : prev - 1;
      });
      setFade(false);
      
      setTimeout(() => {
        isAnimating.current = false;
      }, 300); // Wait for fade in to finish
    }, 300); // Wait for fade out to finish
  };

  useEffect(() => {
    const timer = setInterval(() => {
      changeSlide('next');
    }, 5000);

    const ctx = gsap.context(() => {
      gsap.to(parallaxRef1.current, {
        y: -200,
        rotation: 20,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
      gsap.to(parallaxRef2.current, {
        y: 250,
        rotation: -25,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
      gsap.to(parallaxRef3.current, {
        y: -150,
        rotation: 15,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    }, sectionRef);

    return () => {
      clearInterval(timer);
      ctx.revert();
    };
  }, []);

  const next = () => changeSlide('next');
  const prev = () => changeSlide('prev');
  const goTo = (idx) => {
    if (isAnimating.current || idx === currentIdx) return;
    isAnimating.current = true;
    setFade(true);
    setTimeout(() => {
      setCurrentIdx(idx);
      setFade(false);
      setTimeout(() => {
        isAnimating.current = false;
      }, 300);
    }, 300);
  };

  const current = testimonials[currentIdx];

  return (
    <section className="testimonials-section" ref={sectionRef}>
      {/* Parallax Background Elements */}
      <img src="/makeup_brush-removebg-preview.png" alt="" className="t-parallax-el t-el-1" ref={parallaxRef1} />
      <img src="/lipsstick-removebg-preview.png" alt="" className="t-parallax-el t-el-2" ref={parallaxRef2} />
      <img src="/eyebrush-removebg-preview.png" alt="" className="t-parallax-el t-el-3" ref={parallaxRef3} />

      <div className="testimonials-container">
        <h2 className="section-title">Client Stories</h2>
        
        <div className="testimonial-card">
          <div className="quote-mark">"</div>
          <div className={`testimonial-content ${fade ? 'fade-out' : 'fade-in'}`}>
            <div className="stars">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} size={20} fill="#D6AD70" color="#D6AD70" />
              ))}
            </div>
            <p className="testimonial-text">"{current.text}"</p>
            <h4 className="testimonial-name">— {current.name}</h4>
            <span className="placeholder-note">*Sample Client Review</span>
          </div>
        </div>

        <div className="testimonial-controls">
          <button className="control-btn" onClick={prev}><ChevronLeft size={24} /></button>
          <div className="dots">
            {testimonials.map((_, i) => (
              <span key={i} className={`dot ${i === currentIdx ? 'active' : ''}`} onClick={() => goTo(i)}></span>
            ))}
          </div>
          <button className="control-btn" onClick={next}><ChevronRight size={24} /></button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
