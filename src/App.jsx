import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import TransformationGallery from './components/TransformationGallery';
import SalonExperience from './components/SalonExperience';
import Testimonials from './components/Testimonials';
import PricingSection from './components/PricingSection';
import BookingSection from './components/BookingSection';
import Footer from './components/Footer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Basic global scroll interactions
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="app-container">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <TransformationGallery />
        <SalonExperience />
        <Testimonials />
        <PricingSection />
        <BookingSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
