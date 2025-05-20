import React from 'react';
import './about.css';

const AboutCare = () => {
  return (
    <div className="softcare-container">
      <div className="softcare-left">
        <h1 className="softcare-heading">We care for the world we serve</h1>
        <p className="softcare-text">
          SOFTCARE™ products are FSC® certified, ensuring responsible sourcing and environmental integrity from raw material to final packaging.
        </p>

        <div className="softcare-feature">
          <span className="checkmark">✓</span>
          <span>Soft and skin-friendly</span>
        </div>

        <div className="softcare-feature">
          <span className="checkmark">✓</span>
          <span>Made from FSC-certified virgin pulp</span>
        </div>

        <button className="softcare-btn">See Our Practices</button>
      </div>

      <div className="softcare-right">
        <img src="/Achieve2.png" alt="Tissue box" className="softcare-image" />

        <div className="softcare-box">
          <div>
            <strong>Explore Our Brands</strong>
            <p>Shop SOFTCARE Essentials</p>
          </div>
          <div className="arrow-circle">→</div>
        </div>
      </div>
    </div>
  );
};

export default AboutCare;
