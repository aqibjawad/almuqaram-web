import React, { useState, useEffect, useRef } from 'react';
import './AboutSection.css';

const accordionData = [
  {
    title: 'Our Vision',
    content: 'To be the leading manufacturer in the Middle East, recognized globally for innovation, sustainability, and exceptional quality in hygiene and tissue products.',
  },
  {
    title: 'Our Mission',
    content: 'We strive to enhance everyday life through superior hygiene products, manufactured with cutting-edge technology, environmental responsibility, and unwavering commitment to customer satisfaction.',
  },
  {
    title: 'Our Strength',
    content: 'Advanced manufacturing facilities, skilled workforce, strategic location in the UAE, robust supply chain network, and 15+ years of industry expertise backed by international certifications.',
  },
  {
    title: 'Our Values',
    content: 'Quality Excellence • Environmental Stewardship • Customer Focus • Innovation • Integrity • Sustainability • Community Responsibility • Continuous Improvement',
  },
];

const statsData = [
  { number: '15+', label: 'Years Experience' },
  { number: '500+', label: 'Products' },
  { number: '50+', label: 'Countries' },
  { number: '100%', label: 'Quality' },
];

const AboutSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="about-wrapper">
      <div className="floating-shapes">
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
      </div>

      <div className="about-container">
        <div className="about-left">
          <h2 className="hero-title">
            We manufacture with<br />
            purpose, care, and<br />
            <span className="highlight-text">sustainability.</span>
          </h2>
          <p className="hero-description">
            From facial tissues to industrial hygiene rolls, our products are designed to uplift
            daily life with comfort, hygiene, and certified quality. As a proud UAE-based manufacturer,
            we uphold reliability, affordability, and environmental integrity.
          </p>
          
          <div 
            ref={statsRef} 
            className={`stats-grid ${isVisible ? 'animate-stats' : ''}`}
          >
            {statsData.map((stat, index) => (
              <div 
                key={index} 
                className="stat-item"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>

          <div className="highlight-card">
            <p className="highlight-description">
              🌱 Committed to sustainable manufacturing practices that protect our environment while delivering 
              premium quality products that exceed international standards.
            </p>
          </div>
        </div>

        <div className="about-right">
          {accordionData.map((item, index) => (
            <div key={index} className="accordion-item">
              <div
                className={`accordion-title ${activeIndex === index ? 'active' : ''}`}
                onClick={() => toggleAccordion(index)}
              >
                <span>{item.title}</span>
                <span className="plus-icon">+</span>
              </div>
              <div className={`accordion-content ${activeIndex === index ? 'active' : ''}`}>
                {item.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;