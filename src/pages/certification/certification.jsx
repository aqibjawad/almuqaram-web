import React from 'react';
import './certification.css';
import { ArrowUpRight } from 'lucide-react';

const Certification = () => {
  const certifications = [
    {
      id: 1,
      logo: '/api/placeholder/100/70',
      alt: 'FSC Logo',
      description: 'Sourcing responsibly from certified forests.'
    },
    {
      id: 2,
      logo: '/api/placeholder/100/70',
      alt: 'ISO 9001:2015 Logo',
      description: '9001 International quality management system certification.'
    },
    {
      id: 3,
      logo: '/api/placeholder/100/70',
      alt: 'CE Logo',
      description: 'CE Conformity with EU health, safety, and environmental standards.'
    },
    {
      id: 4,
      logo: '/api/placeholder/100/70',
      alt: 'GMP Logo',
      description: 'GMP Good Manufacturing Practice - clean, safe, compliant production.'
    },
    {
      id: 5,
      logo: '/api/placeholder/100/70',
      alt: 'Halal Logo',
      description: 'HALAL Products manufactured in accordance with Islamic guidelines.'
    }
  ];

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
          {certifications.map((cert) => (
            <div key={cert.id} className="certification-card">
              <div className="logo-container">
                <img 
                  src={cert.logo} 
                  alt={cert.alt} 
                  className="cert-logo" 
                />
              </div>
              <p className="cert-description">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certification;