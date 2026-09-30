import React from 'react';
import { Check } from 'lucide-react';
import './PricingSection.css';

const pricingPlans = [
  {
    id: 1,
    title: 'Hair Styling',
    price: '85',
    items: ['Consultation', 'Wash & Massage', 'Precision Cut', 'Blowout & Style'],
    featured: false
  },
  {
    id: 2,
    title: 'Signature Facial',
    price: '120',
    items: ['Skin Analysis', 'Deep Cleansing', 'Custom Mask', 'Facial Massage'],
    featured: true
  },
  {
    id: 3,
    title: 'Bridal Package',
    price: '350',
    items: ['Trial Session', 'Hair Styling', 'Airbrush Makeup', 'Touch-up Kit'],
    featured: false
  }
];

const PricingSection = () => {
  return (
    <section id="pricing" className="pricing-section">
      <h2 className="section-title">Investment in You</h2>
      <p className="pricing-subtitle">*Sample pricing, subject to variation based on stylist tier.</p>
      
      <div className="pricing-grid">
        {pricingPlans.map(plan => (
          <div key={plan.id} className={`pricing-card ${plan.featured ? 'featured' : ''}`}>
            {plan.featured && <div className="featured-badge">Most Popular</div>}
            <h3 className="pricing-plan-title">{plan.title}</h3>
            <div className="pricing-price">
              <span className="price-currency">$</span>
              <span className="price-amount">{plan.price}</span>
              <span className="price-plus">+</span>
            </div>
            <ul className="pricing-list">
              {plan.items.map((item, idx) => (
                <li key={idx}>
                  <Check size={18} className="pricing-check" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <button className={`pricing-btn ${plan.featured ? 'btn-gold' : 'btn-outline'} w-100`}>
              Book Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
