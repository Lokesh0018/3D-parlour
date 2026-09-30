import React, { useEffect, useRef } from 'react';
import { Scissors, Sparkles, Smile, Droplet, Star, Heart } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ServicesSection.css';

const services = [
  { id: 1, title: 'Hair Styling', icon: <Scissors size={32} strokeWidth={1} />, desc: 'Bespoke cuts and coloring designed to complement your unique features.' },
  { id: 2, title: 'Facial Treatments', icon: <Sparkles size={32} strokeWidth={1} />, desc: 'Rejuvenating therapies using premium botanical extracts for radiant skin.' },
  { id: 3, title: 'Professional Makeup', icon: <Smile size={32} strokeWidth={1} />, desc: 'Flawless artistry for special occasions or everyday elegance.' },
  { id: 4, title: 'Nail Care', icon: <Droplet size={32} strokeWidth={1} />, desc: 'Luxury manicures and pedicures with long-lasting premium polishes.' },
  { id: 5, title: 'Skin Care', icon: <Star size={32} strokeWidth={1} />, desc: 'Advanced dermal treatments to restore and maintain youthful vitality.' },
  { id: 6, title: 'Bridal Packages', icon: <Heart size={32} strokeWidth={1} />, desc: 'Comprehensive beauty preparation for your most important day.' },
];

const ServicesSection = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(cardsRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play reverse play reverse"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" className="services-section" ref={sectionRef}>
      <h2 className="section-title">Our Services</h2>
      <div className="services-grid">
        {services.map((svc, index) => (
          <div 
            key={svc.id} 
            className="service-card"
            ref={el => cardsRef.current[index] = el}
          >
            <div className="service-icon">{svc.icon}</div>
            <h3 className="service-title">{svc.title}</h3>
            <p className="service-desc">{svc.desc}</p>
            <a href="#" className="service-link">View Details</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
