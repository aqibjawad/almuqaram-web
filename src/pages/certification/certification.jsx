import React from 'react';
import './certification.css';
import { ArrowUpRight } from 'lucide-react';

const Certification = () => {
  return (
    <div className="certifications-section">
      <div className="certifications-background"></div>
      <div className="certifications-overlay"></div>
      
      <div className="certifications-container">
        <div className="certifications-header">
          <div className="title-section">
            <h1>Certifications &<br />Standards</h1>
          </div>
          <div className="description-section">
            <p>
              Our commitment to excellence is reflected in our globally recognized 
              certifications. From responsible forestry to quality assurance and hygiene 
              safety, every product meets the highest benchmarks.
            </p>
            <a href="#" className="learn-more">
              Learn More <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
        
        <div className="certifications-grid">
          <div className="certification-card">
            <div className="logo-container">
              <img src="/api/placeholder/100/70" alt="FSC Logo" className="cert-logo" />
            </div>
            <p className="cert-description">Sourcing responsibly from certified forests.</p>
          </div>
          
          <div className="certification-card">
            <div className="logo-container">
              <img src="/api/placeholder/100/70" alt="ISO 9001:2015 Logo" className="cert-logo" />
            </div>
            <p className="cert-description">9001 International quality management system certification.</p>
          </div>
          
          <div className="certification-card">
            <div className="logo-container">
              <img src="/api/placeholder/100/70" alt="CE Logo" className="cert-logo" />
            </div>
            <p className="cert-description">CE Conformity with EU health, safety, and environmental standards.</p>
          </div>
          
          <div className="certification-card">
            <div className="logo-container">
              <img src="/api/placeholder/100/70" alt="GMP Logo" className="cert-logo" />
            </div>
            <p className="cert-description">GMP Good Manufacturing Practice - clean, safe, compliant production.</p>
          </div>
          
          <div className="certification-card">
            <div className="logo-container">
              <img src="/api/placeholder/100/70" alt="Halal Logo" className="cert-logo" />
            </div>
            <p className="cert-description">HALAL Products manufactured in accordance with Islamic guidelines.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Certification;