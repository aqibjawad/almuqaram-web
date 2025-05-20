import React, { useState } from 'react';
import './about.css'; // CSS file for styling
// import productImage from '/public/Achieve1.png'; 
// replace with actual image path

const sections = [
  {
    title: 'product development & manufacturing',
    items: [
      'Facial Tissue Production',
      'T-Tork Converting',
      'Maxi Rolls Manufacturing',
      'Kitchen Towel Fabrication',
      'Paper Napkin Design',
      'Toilet Rolls Processing',
      'Folded Hand Towels',
      'Rolled Hand Towels',
      'Clinical Bed Rolls',
    ],
  },
  {
    title: 'distribution & sales',
  },
  {
    title: 'quality & sustainability',
  },
];

const ProductDevelopment = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="accordion-container">
      {sections.map((section, index) => (
        <div key={index} className="accordion-section">
          <div
            className={`accordion-header ${activeIndex === index ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
          >
            <span>{section.title}</span>
            <span className="discover">Discover <span className="arrow">↓</span></span>
          </div>
          {activeIndex === index && section.items && (
            <div className="accordion-content">
              <ul className="feature-list">
                {section.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              {section.image && (
                <div className="product-image">
                  <img src="/Achieve1.png" alt="Product" />
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProductDevelopment;
