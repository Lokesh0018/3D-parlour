import React from 'react';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-col brand-col">
          <div className="footer-logo">LUMIÈRE</div>
          <p className="footer-desc">
            The ultimate destination for luxury beauty and personalized care. Elevate your confidence with our bespoke treatments.
          </p>
          <div className="social-links">
            <a href="#">IG</a>
            <a href="#">FB</a>
            <a href="#">X</a>
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
          <div className="contact-item">
            <Phone size={18} className="contact-icon" />
            <span>+1 (555) 123-4567</span>
          </div>
          <div className="contact-item">
            <Mail size={18} className="contact-icon" />
            <span>hello@lumierebeauty.com</span>
          </div>
          
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
