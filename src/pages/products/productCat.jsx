import React, { useState } from 'react';
import './SoftcareSection.css';

const SoftcareSection = () => {
  const [activeCard, setActiveCard] = useState(0);

  return (
    <div className="softcare-container">
      <div className="softcare-wrapper">
        
        {/* Left Content Section */}
        <div className="content-section">
          <div className="text-content">
            <h1 className="main-title">SOFTCARE</h1>
            <h2 className="sub-title">Facial Tissue</h2>
          </div>
          
          <p className="description">
            Gentle on skin, strong on performance — our premium facial tissues combine 
            softness, strength, and sustainability, making them the perfect choice for 
            everyday hygiene and comfort.
          </p>
          
          <div className="features-list">
            <div className="feature-item">
              <div className="feature-dot"></div>
              <span>Soft and skin-friendly</span>
            </div>
            
            <div className="feature-item">
              <div className="feature-dot"></div>
              <span>Made from FSC-certified virgin pulp</span>
            </div>
          </div>
          
          <button className="order-button">Order Now</button>
        </div>
        
        {/* Center Image Section */}
        <div className="image-section">
          <div className="image-container">
            <div className="product-circle">
              <div className="product-box">
                <div className="product-icon">🧻</div>
              </div>
            </div>
            <div className="decoration-dot decoration-dot-1"></div>
            <div className="decoration-dot decoration-dot-2"></div>
          </div>
        </div>
        
        {/* Right Cards Section */}
        <div className="cards-section">
          
          {/* Card 1 */}
          <div className="info-card">
            <div className="card-content">
              <p className="card-subtitle">
                Tax included.<br />
                Delivery calculated at checkout.
              </p>
              
              <div className="price-container">
                <span className="price">AED 12</span>
              </div>
            </div>
            
            <div className="card-footer">
              <span className="footer-text">See How We Manufacture</span>
              <div className="arrow-button">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M17 8l4 4m0 0l-4 4m4-4H3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
          
          {/* Card 2 */}
          <div className="info-card">
            <div className="card-content">
              <p className="card-text">
                Don't miss out on sustainable hygiene.
              </p>
              
              <div className="price-container">
                <span className="price">AED 12</span>
              </div>
            </div>
            
            <div className="card-footer">
              <span className="footer-text">See How We Manufacture</span>
              <div className="arrow-button">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M17 8l4 4m0 0l-4 4m4-4H3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default SoftcareSection;