import React, { useState, useRef } from 'react';
import { ArrowUpRight, X } from 'lucide-react';

const Certification = () => {
  const [hoveredCert, setHoveredCert] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const timeoutRef = useRef(null);

  const certifications = [
    {
      id: 1,
      logo: '/pdf/pdf1_page-0001.jpg',
      alt: 'FSC Logo',
      description: 'Sourcing responsibly from certified forests.'
    },
    {
      id: 2,
      logo: '/pdf/pdf2.jpg',
      alt: 'ISO 9001:2015 Logo',
      description: '9001 International quality management system certification.'
    },
    {
      id: 3,
      logo: '/pdf/pdf3-Image.jpg',
      alt: 'CE Logo',
      description: 'CE Conformity with EU health, safety, and environmental standards.'
    },
    {
      id: 4,
      logo: '/pdf/pdf4_page-0001.jpg',
      alt: 'GMP Logo',
      description: 'GMP Good Manufacturing Practice - clean, safe, compliant production.'
    }
  ];

  const handleMouseEnter = (cert) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setHoveredCert(cert);
    setShowModal(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowModal(false);
      setHoveredCert(null);
    }, 200);
  };

  const handleModalMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleModalMouseLeave = () => {
    setShowModal(false);
    setHoveredCert(null);
  };

  const styles = `
    .certifications-section {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      line-height: 1.6;
      background: #ffffff;
      min-height: 100vh;
      overflow: hidden;
      position: relative;
      margin-top: 15rem;
      margin-right: 3rem;
      margin-left: 3rem;
      border-radius: 20px;
    }

    /* Animated background elements */
    .certifications-background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      z-index: 0;
    }

    .certifications-background::before,
    .certifications-background::after {
      content: '';
      position: absolute;
      background: rgba(48, 175, 184, 0.1);
      border-radius: 50%;
      animation: float 6s ease-in-out infinite;
    }

    .certifications-background::before {
      width: 80px;
      height: 80px;
      top: 20%;
      left: 10%;
      animation-delay: 0s;
    }

    .certifications-background::after {
      width: 120px;
      height: 120px;
      top: 60%;
      right: 15%;
      animation-delay: 2s;
    }

    .certifications-overlay {
      position: absolute;
      top: 80%;
      left: 20%;
      width: 60px;
      height: 60px;
      background: rgba(48, 175, 184, 0.1);
      border-radius: 50%;
      animation: float 6s ease-in-out infinite 4s;
      z-index: 0;
    }

    @keyframes float {
      0%, 100% { 
        transform: translateY(0px) rotate(0deg); 
      }
      50% { 
        transform: translateY(-20px) rotate(180deg); 
      }
    }

    .certifications-container {
      max-width: 1400px;
      margin: 0 auto;
      padding: 80px 20px;
      position: relative;
      z-index: 1;
    }

    .certifications-header {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 60px;
      align-items: start;
      margin-bottom: 80px;
    }

    .title-section h1 {
      font-size: clamp(2.5rem, 5vw, 4rem);
      font-weight: 800;
      background: linear-gradient(135deg, #30AFB8, #2A9BA3);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-shadow: 0 4px 8px rgba(0,0,0,0.1);
      line-height: 1.1;
    }

    .description-section {
      display: flex;
      flex-direction: column;
      gap: 30px;
    }

    .description-section p {
      font-size: 1.25rem;
      color: #333333;
      line-height: 1.8;
    }

    .learn-more {
      display: inline-flex;
      align-items: center;
      gap: 12px;
      background: linear-gradient(135deg, #30AFB8 0%, #2A9BA3 100%);
      border: 2px solid transparent;
      color: white;
      padding: 16px 32px;
      border-radius: 60px;
      text-decoration: none;
      font-weight: 600;
      font-size: 1.1rem;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
      align-self: flex-start;
      animation: pulse 2s infinite;
    }

    .learn-more::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
      transition: left 0.5s;
    }

    .learn-more:hover::before {
      left: 100%;
    }

    .learn-more:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 30px rgba(48, 175, 184, 0.3);
      background: linear-gradient(135deg, #26D0CE 0%, #30AFB8 100%);
    }

    .learn-more svg {
      transition: transform 0.3s ease;
    }

    .learn-more:hover svg {
      transform: translateX(5px);
    }

    @keyframes pulse {
      0% { 
        box-shadow: 0 0 0 0 rgba(48, 175, 184, 0.4); 
      }
      70% { 
        box-shadow: 0 0 0 20px rgba(48, 175, 184, 0); 
      }
      100% { 
        box-shadow: 0 0 0 0 rgba(48, 175, 184, 0); 
      }
    }

    .certifications-grid {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;
      flex-wrap: wrap;
      position: relative;
      z-index: 1;
    }

    .certification-card {
      background: white;
      border: 2px solid #f0f0f0;
      border-radius: 16px;
      padding: 30px;
      text-align: center;
      transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
      position: relative;
      overflow: hidden;
      animation: fadeInUp 0.8s ease forwards;
      opacity: 0;
      transform: translateY(30px);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
      width: 280px;
      height: 240px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }

    .certification-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 12px 40px rgba(48, 175, 184, 0.2);
      border-color: #30AFB8;
    }

    .certification-card:nth-child(1) { animation-delay: 0.1s; }
    .certification-card:nth-child(2) { animation-delay: 0.2s; }
    .certification-card:nth-child(3) { animation-delay: 0.3s; }
    .certification-card:nth-child(4) { animation-delay: 0.4s; }
    .certification-card:nth-child(5) { animation-delay: 0.5s; }

    @keyframes fadeInUp {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .cert-logo {
      max-width: 200px;
      max-height: 180px;
      width: auto;
      height: auto;
      object-fit: contain;
      transition: transform 0.3s ease;
    }

    .certification-card:hover .cert-logo {
      transform: scale(1.05);
    }

    /* Modal Styles */
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      margin-top: 2rem;
      width: 100vw;
      height: 100vh;
      background: rgba(0, 0, 0, 0.8);
      backdrop-filter: blur(10px);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease;
      pointer-events: none;
    }

    .modal-overlay.show {
      opacity: 1;
      visibility: visible;
      pointer-events: auto;
    }

    .modal-content {
      position: relative;
      background: transparent;
      border-radius: 20px;
      padding: 0;
      max-width: 90vw;
      max-height: 90vh;
      transform: scale(0.8);
      transition: transform 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .modal-overlay.show .modal-content {
      transform: scale(1);
    }

    .modal-image {
      max-width: 70vw;
      max-height: 70vh;
      width: auto;
      height: auto;
      object-fit: contain;
      border-radius: 12px;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
    }

    .modal-close {
      position: absolute;
      top: 20px;
      right: 20px;
      background: rgba(0, 0, 0, 0.7);
      border: none;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.3s ease;
      color: white;
      z-index: 10;
    }

    .modal-close:hover {
      background: #30AFB8;
      color: white;
      transform: scale(1.1);
    }

    .modal-title {
      font-size: 1.5rem;
      font-weight: 700;
      color: #30AFB8;
      margin-bottom: 10px;
    }

    .modal-description {
      font-size: 1.1rem;
      color: #666;
      line-height: 1.6;
      max-width: 600px;
    }

    .modal-close {
      position: absolute;
      top: 20px;
      right: 20px;
      background: rgba(255, 255, 255, 0.9);
      border: none;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.3s ease;
      color: #666;
    }

    .modal-close:hover {
      background: #30AFB8;
      color: white;
      transform: scale(1.1);
    }

    /* Responsive design */
    @media (max-width: 1024px) {
      .certifications-section {
        margin-top: 12rem;
      }
      
      .certifications-header {
        grid-template-columns: 1fr;
        gap: 40px;
        text-align: center;
      }
      
      .learn-more {
        align-self: center;
      }
      
      .certifications-grid {
        gap: 30px;
      }

      .certification-card {
        width: 240px;
        height: 200px;
        padding: 25px;
      }

      .cert-logo {
        max-width: 180px;
        max-height: 150px;
      }

      .modal-content {
        padding: 30px;
      }

      .modal-image {
        max-width: 75vw;
        max-height: 65vh;
      }
    }

    @media (max-width: 768px) {
      .certifications-section {
        margin-top: 8rem;
      }
      
      .certifications-container {
        padding: 40px 15px;
      }

      .certifications-header {
        margin-bottom: 50px;
      }

      .certifications-grid {
        gap: 20px;
        flex-direction: column;
        align-items: center;
      }

      .certification-card {
        padding: 20px;
        width: 220px;
        height: 180px;
      }

      .description-section p {
        font-size: 1.1rem;
      }
      
      .cert-logo {
        max-width: 160px;
        max-height: 130px;
      }

      .modal-content {
        padding: 25px;
        margin: 20px;
      }

      .modal-image {
        max-width: 85vw;
        max-height: 60vh;
      }
    }

    @media (max-width: 480px) {
      .certifications-section {
        margin-top: 6rem;
      }
      
      .certification-card {
        width: 200px;
        height: 160px;
        padding: 15px;
      }
      
      .cert-logo {
        max-width: 140px;
        max-height: 110px;
      }

      .modal-content {
        padding: 20px;
        margin: 15px;
      }

      .modal-title {
        font-size: 1.3rem;
      }

      .modal-description {
        font-size: 1rem;
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>
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
              <div 
                key={cert.id} 
                className="certification-card"
                onMouseEnter={() => handleMouseEnter(cert)}
                onMouseLeave={handleMouseLeave}
              >
                <img 
                  src={cert.logo} 
                  alt={cert.alt} 
                  className="cert-logo" 
                />
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        <div 
          className={`modal-overlay ${showModal ? 'show' : ''}`}
          onMouseEnter={handleModalMouseEnter}
          onMouseLeave={handleModalMouseLeave}
        >
          <div className="modal-content">
            <button 
              className="modal-close"
              onClick={() => {
                setShowModal(false);
                setHoveredCert(null);
              }}
            >
              <X size={20} />
            </button>
            {hoveredCert && (
              <img 
                src={hoveredCert.logo} 
                alt={hoveredCert.alt} 
                className="modal-image" 
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Certification;