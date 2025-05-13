import React from 'react';
import './index.css';

function Cards() {
  return (
    <div>
      <div className="hero-section">
        <img  src="/sustainableImage.png" className="background-image" alt="Sustainable Hygiene Background" />
        <div className="overlay"></div>
        <div className="hero-content">
          <div className="hero-text">
            <h1>Sustainable Hygiene<br />for a Better Tomorrow</h1>
          </div>
          <div className="hero-tagline">
            <p>Our products are environmentally friendly and Recyclable</p>
          </div>
        </div>
        
        <div className="info-cards">
          {/* Eco-Conscious Card */}
          <div className="card eco-conscious">
            <h2>Eco-Conscious Manufacturing</h2>
            <p>AL MUQARRAM Hygienic Products Industry LLC is one of the fastest-growing converters of hygienic paper products dealing in two Brands</p>
          </div>
          
          {/* Employee Wellbeing Card */}
          <div className="card employee">
            <h2>Employee Wellbeing Initiatives</h2>
            <p>Our people are our strength. We foster a safe, balanced, and motivating work environment where innovation and collaboration thrive.</p>
          </div>
          
          {/* Responsible Governance Card */}
          <div className="card governance">
            <h2>Responsible Governance & Compliance</h2>
            <p>We follow ISO 9001 standards, CE-certified machinery, and Good Manufacturing Practices — ensuring transparency, ethics, and accountability at every step.</p>
          </div>
          
          {/* Ethical & Green Supply Chain Card */}
          <div className="card supply-chain">
            <h2>Ethical & Green Supply Chain</h2>
            <p>From sourcing to distribution, we partner with globally certified suppliers who meet our high standards for sustainability, ethics, and environmental responsibility.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;