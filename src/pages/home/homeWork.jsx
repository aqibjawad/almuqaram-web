import React, { useState } from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div className="how-it-works-container">
      <div className="left-section">
        <h2>How It Works</h2>
        <div className="step" onClick={() => setActiveStep(1)}>
          <div className="step-number">1</div>
          <div className="step-content">
            <h3 className={activeStep === 1 ? 'active' : ''}>Choose Your Products</h3>
            {activeStep === 1 && (
              <p>
                Select from a wide range of high-quality hygienic products trusted by global clients.
              </p>
            )}
          </div>
        </div>
        <div className="divider"></div>
        <div className="step" onClick={() => setActiveStep(2)}>
          <div className="step-number">2</div>
          <div className="step-content">
            <h3 className={activeStep === 2 ? 'active' : ''}>Customize Your Brand</h3>
          </div>
        </div>
        <div className="divider"></div>
        <div className="step" onClick={() => setActiveStep(3)}>
          <div className="step-number">3</div>
          <div className="step-content">
            <h3 className={activeStep === 3 ? 'active' : ''}>We Manufacture & Deliver</h3>
          </div>
        </div>
        <button className="get-started">Get Started ↗</button>
        <a href="#" className="learn-more">Learn More</a>
      </div>

      <div className="right-section">
        <div className="carousel-center">
          <div className="product-card">
            <img src="/path-to-product1.png" alt="Product" />
            <div className="product-info">
              <p className="product-title">Product Name</p>
              <p className="brand-name">Brand name</p>
            </div>
          </div>
          <div className="product-card">
            <img src="/path-to-product2.png" alt="Product" />
            <div className="product-info">
              <p className="product-title">Product Name</p>
              <p className="brand-name">Brand name</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
