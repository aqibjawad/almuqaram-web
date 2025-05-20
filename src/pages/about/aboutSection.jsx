import React, { useState } from 'react';
import './about.css';

const accordionData = [
  {
    title: 'Our Vision',
    content: 'To lead the hygiene industry with innovative, eco-conscious solutions trusted worldwide.',
  },
  {
    title: 'Our Mission',
    content: 'To uplift daily life by delivering affordable, hygienic, and high-quality products.',
  },
  {
    title: 'Our Strength',
    content: 'A dedicated team, advanced technology, and a commitment to sustainability.',
  },
  {
    title: 'Our Values',
    content: 'Integrity, customer focus, innovation, and environmental responsibility.',
  },
];

const AboutSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="about-container">
      <div className="about-left">
        <h2>We manufacture with<br />purpose, care, and<br /><span>sustainability.</span></h2>
        <p>
          From facial tissues to industrial hygiene rolls, our products are designed to uplift
          daily life with comfort, hygiene, and certified quality. As a proud UAE-based manufacturer,
          we uphold reliability, affordability, and environmental integrity.
        </p>
      </div>

      <div className="about-right">
        {accordionData.map((item, index) => (
          <div key={index} className="accordion-item">
            <div
              className={`accordion-title ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleAccordion(index)}
            >
              <span>{item.title}</span>
              <span className="plus-icon">{activeIndex === index ? '-' : '+'}</span>
            </div>
            {activeIndex === index && <div className="accordion-content">{item.content}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutSection;
