import React, { useState } from 'react';
import './homeBrand.css';

const DispenserShowcase = () => {
  const [activeTab, setActiveTab] = useState(0);

  const brands = [
    {
      name: 'Kleenex',
      logo: '/Achieve1.png',
      background: '#E8F4FD',
      mainColor: '#4A90E2'
    },
    {
      name: 'Scott',
      logo: '/Achieve2.png',
      background: '#2B4A87',
      mainColor: '#FFFFFF'
    },
    {
      name: 'WypAll',
      logo: 'https://via.placeholder.com/120x60/1E5A96/FFFFFF?text=WypAll',
      background: '#F0F7FF',
      mainColor: '#1E5A96'
    }
  ];

  const currentBrand = brands[activeTab];

  return (
    <div className="dispenser-showcase" style={{ backgroundColor: currentBrand.background }}>
      {/* Main Content Area */}
      <div className="showcase-content">
        {/* Left Content */}
        <div className="content-left">
          <div className="brand-logo">
            <img src={currentBrand.logo} alt={currentBrand.name} />
          </div>
          
          <h1 className="main-heading" style={{ color: currentBrand.mainColor }}>
            Delivers Efficiency without<br />
            Compromising Quality
          </h1>
          
          <div className="divider" style={{ backgroundColor: currentBrand.mainColor }}></div>
          
          <button 
            className="explore-btn" 
            style={{ 
              borderColor: currentBrand.mainColor,
              color: currentBrand.mainColor 
            }}
          >
            Explore {currentBrand.name}
          </button>
        </div>

        {/* Right Content - Product Images */}
        <div className="product-images">
          <div className="dispenser-container">
            <div className="paper-dispenser">
              <div className="dispenser-body"></div>
              <div className="dispenser-window"></div>
              <div className="paper-roll"></div>
            </div>
            
            <div className="jumbo-dispenser">
              <div className="jumbo-body"></div>
              <div className="jumbo-windows">
                <div className="window-left"></div>
                <div className="window-right"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Tabs */}
      <div className="brand-tabs">
        <button className="nav-arrow nav-prev">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div className="tabs-container">
          {brands.map((brand, index) => (
            <div
              key={brand.name}
              className={`tab-item ${index === activeTab ? 'active' : ''}`}
              onClick={() => setActiveTab(index)}
              style={{
                backgroundColor: index === activeTab ? '#FFFFFF' : 'rgba(255,255,255,0.8)'
              }}
            >
              <img src={brand.logo} alt={brand.name} />
            </div>
          ))}
        </div>

        <button className="nav-arrow nav-next">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default DispenserShowcase;