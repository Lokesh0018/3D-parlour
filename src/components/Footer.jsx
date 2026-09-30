import React, { useEffect, useRef } from 'react';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Footer.css';

const Footer = () => {
  const footerRef = useRef(null);
  const brushRef = useRef(null);
  const lipstickRef = useRef(null);
  const eyebrushRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      let mm = gsap.matchMedia();
      
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Entrance animation for columns
        gsap.from(".footer-col", {
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 85%",
          },
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out"
        });

        // Parallax for decorative elements
        gsap.to(brushRef.current, {
          y: -150,
          rotation: 15,
          ease: "none",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
        gsap.to(lipstickRef.current, {
          y: 120,
          rotation: -20,
          ease: "none",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
        gsap.to(eyebrushRef.current, {
          y: -100,
          x: -50,
          rotation: 10,
          ease: "none",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
        gsap.to(logoRef.current, {
          y: -120,
          scale: 1.05,
          ease: "none",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer className="footer" ref={footerRef}>
      {/* Parallax Add-ons */}
      <img src="/L_Logo-removebg-preview.png" alt="" className="footer-l-logo" ref={logoRef} />
      <img src="/makeup_brush-removebg-preview.png" alt="" className="footer-brush" ref={brushRef} />
      <img src="/lipsstick-removebg-preview.png" alt="" className="footer-lipstick" ref={lipstickRef} />
      <img src="/eyebrush-removebg-preview.png" alt="" className="footer-eyebrush" ref={eyebrushRef} />

      <div className="footer-container">
        <div className="footer-col brand-col">
          <div className="footer-logo">LUMIÈRE</div>
          <p className="footer-desc">
            The ultimate destination for luxury beauty and personalized care. Elevate your confidence with our bespoke treatments.
          </p>
          <div className="social-links">
            <a href="#" aria-label="Instagram">IG</a>
            <a href="#" aria-label="Facebook">FB</a>
            <a href="#" aria-label="Twitter">X</a>
          </div>
        </div>

        <div className="footer-col">
          <h4 className="footer-title">Explore</h4>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Our Services</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#pricing">Pricing</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-title">Services</h4>
          <ul className="footer-links">
            <li><a href="#">Hair Styling</a></li>
            <li><a href="#">Facial Treatments</a></li>
            <li><a href="#">Professional Makeup</a></li>
            <li><a href="#">Nail Care</a></li>
            <li><a href="#">Bridal Packages</a></li>
          </ul>
        </div>

        <div className="footer-col contact-col">
          <h4 className="footer-title">Contact</h4>
          <div className="contact-item">
            <MapPin size={18} className="contact-icon" />
            <span>123 Luxury Avenue, Beverly Hills, CA 90210</span>
          </div>
          <a href="tel:+15551234567" className="contact-item contact-link">
            <Phone size={18} className="contact-icon" />
            <span>+1 (555) 123-4567</span>
          </a>
          <a href="mailto:hello@lumierebeauty.com" className="contact-item contact-link">
            <Mail size={18} className="contact-icon" />
            <span>hello@lumierebeauty.com</span>
          </a>
          
          <div className="hours">
            <h5 className="hours-title">Hours</h5>
            <p>Mon - Fri: 9:00 AM - 8:00 PM</p>
            <p>Sat - Sun: 10:00 AM - 6:00 PM</p>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} LUMIÈRE Beauty Lounge. All rights reserved.</p>
        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
