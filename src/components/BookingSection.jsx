import React, { useState } from 'react';
import './BookingSection.css';

const BookingSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    stylist: '',
    date: '',
    time: '',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate booking (no real backend)
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '', email: '', phone: '', service: '',
        stylist: '', date: '', time: '', notes: ''
      });
    }, 5000);
  };

  return (
    <section id="contact" className="booking-section">
      <div className="booking-container">
        <div className="booking-image-wrapper">
          <img 
            src="/salon.png" 
            alt="Relaxing Spa Experience" 
            className="booking-img"
          />
        </div>
        <div className="booking-form-wrapper">
          <h2 className="section-title" style={{textAlign: 'left', marginBottom: '1rem'}}>Reserve Your Time</h2>
          <p className="booking-subtitle">Schedule your luxury experience with our expert team.</p>
          
          {submitted ? (
            <div className="success-message">
              <h3>Thank You!</h3>
              <p>Your booking request has been received (Sample Form). We would contact you shortly to confirm your appointment.</p>
            </div>
          ) : (
            <form className="booking-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <input type="text" name="name" placeholder="Full Name *" required value={formData.name} onChange={handleChange} />
                <input type="email" name="email" placeholder="Email Address *" required value={formData.email} onChange={handleChange} />
              </div>
              <div className="form-row">
                <input type="tel" name="phone" placeholder="Phone Number *" required value={formData.phone} onChange={handleChange} />
                <select name="service" required value={formData.service} onChange={handleChange}>
                  <option value="" disabled>Select Service *</option>
                  <option value="hair">Hair Styling</option>
                  <option value="facial">Facial Treatments</option>
                  <option value="makeup">Professional Makeup</option>
                  <option value="nails">Nail Care</option>
                  <option value="bridal">Bridal Package</option>
                </select>
              </div>
              <div className="form-row">
                <input type="date" name="date" required value={formData.date} onChange={handleChange} />
                <input type="time" name="time" required value={formData.time} onChange={handleChange} />
              </div>
              <div className="form-row">
                <textarea name="notes" placeholder="Special Requests or Notes" rows="4" value={formData.notes} onChange={handleChange}></textarea>
              </div>
              <button type="submit" className="btn-gold w-100 mt-1">Confirm Request</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
