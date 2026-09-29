import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
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

  const next = () => setCurrentIdx((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIdx((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  const current = testimonials[currentIdx];

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <h2 className="section-title">Client Stories</h2>
        
        <div className="testimonial-card">
          <div className="stars">
            {[...Array(current.rating)].map((_, i) => (
              <Star key={i} size={20} fill="#D6AD70" color="#D6AD70" />
            ))}
          </div>
          <p className="testimonial-text">"{current.text}"</p>
          <h4 className="testimonial-name">— {current.name}</h4>
          <span className="placeholder-note">*Sample Client Review</span>
        </div>

        <div className="testimonial-controls">
          <button className="control-btn" onClick={prev}><ChevronLeft size={24} /></button>
          <div className="dots">
            {testimonials.map((_, i) => (
              <span key={i} className={`dot ${i === currentIdx ? 'active' : ''}`} onClick={() => setCurrentIdx(i)}></span>
            ))}
          </div>
          <button className="control-btn" onClick={next}><ChevronRight size={24} /></button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
