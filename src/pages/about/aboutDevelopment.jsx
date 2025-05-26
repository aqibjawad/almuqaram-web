import React, { useState, useEffect } from 'react';
import './ProductDevelopment.css'; // Enhanced CSS file

const sections = [
  {
    title: 'Product Development & Manufacturing',
    items: [
      { name: 'Facial Tissue Production', icon: '🧻', desc: 'Advanced tissue manufacturing with premium softness and absorbency' },
      { name: 'T-Tork Converting', icon: '🔄', desc: 'Specialized converting processes for industrial paper products' },
      { name: 'Maxi Rolls Manufacturing', icon: '📦', desc: 'Large-scale roll production for commercial and industrial use' },
      { name: 'Kitchen Towel Fabrication', icon: '🍽️', desc: 'Durable kitchen towels designed for heavy-duty cleaning' },
      { name: 'Paper Napkin Design', icon: '🎨', desc: 'Custom napkin designs with superior quality and aesthetics' },
      { name: 'Toilet Rolls Processing', icon: '🧻', desc: 'High-quality toilet paper manufacturing with eco-friendly materials' },
      { name: 'Folded Hand Towels', icon: '📄', desc: 'Precision-folded towels for commercial and hospitality sectors' },
      { name: 'Rolled Hand Towels', icon: '🔄', desc: 'Continuous roll towels for high-traffic washroom facilities' },
      { name: 'Clinical Bed Rolls', icon: '🏥', desc: 'Medical-grade bed rolls meeting healthcare industry standards' },
    ],
    stats: [
      { number: '50+', label: 'Products' },
      { number: '15+', label: 'Years Experience' },
      { number: '99%', label: 'Quality Rate' },
      { number: '24/7', label: 'Production' }
    ]
  },
  {
    title: 'Distribution & Sales',
    placeholder: 'Distribution and sales content will be displayed here'
  },
  {
    title: 'Quality & Sustainability',
    placeholder: 'Quality and sustainability content will be displayed here'
  },
];

const ProductDevelopment = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Add staggered animation to items
    const items = document.querySelectorAll('.pd-manufacturing-item');
    items.forEach((item, index) => {
      item.style.animationDelay = `${index * 0.1}s`;
      item.style.animation = 'pdFadeInUp 0.6s ease-out forwards';
    });
  }, [activeIndex]);

  const toggleSection = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <div className="pd-main-wrapper">
      <div className="pd-accordion-wrapper">
        {sections.map((section, index) => (
          <div 
            key={index} 
            className={`pd-section ${activeIndex === index ? 'pd-active' : 'pd-inactive'}`}
          >
            <div 
              className="pd-section-header"
              onClick={() => toggleSection(index)}
            >
              <div className="pd-header-inner">
                <h2 className="pd-section-title">{section.title}</h2>
                <button className="pd-discover-button">
                  Discover
                  <span className="pd-arrow">→</span>
                </button>
              </div>
            </div>
            
            {activeIndex === index && (
              <div className="pd-section-content">
                {section.items ? (
                  <>
                    <div className="pd-items-grid">
                      {section.items.map((item, idx) => (
                        <div key={idx} className="pd-manufacturing-item">
                          <div className="pd-item-icon">{item.icon}</div>
                          <h3 className="pd-item-title">{item.name}</h3>
                          <p className="pd-item-desc">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                    
                    {section.stats && (
                      <div className="pd-stats-container">
                        {section.stats.map((stat, idx) => (
                          <div key={idx} className="pd-stat-item">
                            <div className="pd-stat-number">{stat.number}</div>
                            <div className="pd-stat-label">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <div className="pd-placeholder-section">
                    <p className="pd-placeholder-text">{section.placeholder}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDevelopment;