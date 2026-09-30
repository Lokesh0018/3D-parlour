import React, { useState } from 'react';
import './TransformationGallery.css';

const TransformationGallery = () => {
  const [sliderPos, setSliderPos] = useState(50);

  const handleDrag = (e) => {
    const bounds = e.currentTarget.getBoundingClientRect();
    let x = e.clientX || (e.touches && e.touches[0].clientX);
    if (!x) return;
    
    let position = ((x - bounds.left) / bounds.width) * 100;
    position = Math.max(0, Math.min(100, position));
    setSliderPos(position);
  };

  return (
    <section id="gallery" className="gallery-section">
      <h2 className="section-title">Beauty Transformations</h2>
      <div className="gallery-container">
        <p className="gallery-desc">Slide to reveal the before and after.</p>
        
        <div 
          className="compare-container" 
          onMouseMove={handleDrag}
          onTouchMove={handleDrag}
        >
          {/* After Image (Background) */}
          <img 
            className="compare-image before" 
            src="/after.png" 
            alt="After Transformation" 
          />
          
          {/* Before Image (Clipped) */}
          <div 
            className="compare-overlay"
            style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
          >
            <img 
              className="compare-image after" 
              src="/before.png" 
              alt="Before Transformation" 
            />
          </div>

          {/* Slider Handle */}
          <div className="compare-slider" style={{ left: `${sliderPos}%` }}>
            <div className="slider-line"></div>
            <div className="slider-btn">
              <span className="arrow left"></span>
              <span className="arrow right"></span>
            </div>
          </div>
          
          <div className="compare-label label-before">Before</div>
          <div className="compare-label label-after">After</div>
        </div>
      </div>
    </section>
  );
};

export default TransformationGallery;
