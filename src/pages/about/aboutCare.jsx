import React from 'react';
import { Check, Leaf, Sparkles, ArrowRight, Star } from 'lucide-react';

const EnhancedCareSection = () => {
  return (
    <>
      <style>{`
        .main-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #f8fafc 0%, #ffffff 50%, #ecfdf5 100%);
          position: relative;
          overflow: hidden;
          margin-top: 2rem;
          border-radius: 20px;
          margin-right: 3rem
        }

        .bg-elements {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
        }

        .bg-blob-1 {
          position: absolute;
          top: 5rem;
          left: 2.5rem;
          width: 16rem;
          height: 16rem;
          background: linear-gradient(45deg, #a7f3d0, #5eead4);
          border-radius: 50%;
          mix-blend-mode: multiply;
          filter: blur(40px);
          opacity: 0.7;
          animation: pulse 2s infinite;
        }

        .bg-blob-2 {
          position: absolute;
          top: 10rem;
          right: 5rem;
          width: 20rem;
          height: 20rem;
          background: linear-gradient(45deg, #fecaca, #fda4af);
          border-radius: 50%;
          mix-blend-mode: multiply;
          filter: blur(40px);
          opacity: 0.6;
          animation: pulse 2s infinite;
          animation-delay: 2s;
        }

        .bg-blob-3 {
          position: absolute;
          bottom: 5rem;
          left: 33.333333%;
          width: 18rem;
          height: 18rem;
          background: linear-gradient(45deg, #bfdbfe, #67e8f9);
          border-radius: 50%;
          mix-blend-mode: multiply;
          filter: blur(40px);
          opacity: 0.5;
          animation: pulse 2s infinite;
          animation-delay: 4s;
        }

        .floating-particles {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
        }

        .particle {
          position: absolute;
          width: 0.5rem;
          height: 0.5rem;
          background: #6ee7b7;
          border-radius: 50%;
          opacity: 0.4;
          animation: float 6s ease-in-out infinite;
        }

        .content-wrapper {
          position: relative;
          z-index: 10;
          max-width: 1200px;
          margin: 0 auto;
          padding: 5rem 1.5rem;
        }

        .grid-container {
          display: grid;
          grid-template-columns: 1fr;
          gap: 4rem;
          align-items: center;
        }

        @media (min-width: 1024px) {
          .grid-container {
            grid-template-columns: 1fr 1fr;
          }
        }

        .left-content {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .header-section {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: #dcfce7;
          color: #166534;
          padding: 0.5rem 1rem;
          border-radius: 9999px;
          font-size: 0.875rem;
          font-weight: 500;
          width: fit-content;
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .main-heading {
          font-size: 3rem;
          font-weight: 700;
          line-height: 1.1;
          animation: fade-in-up 0.8s ease-out forwards;
          animation-delay: 0.2s;
        }

        @media (min-width: 1024px) {
          .main-heading {
            font-size: 3.75rem;
          }
        }

        .gradient-text {
          background: linear-gradient(45deg, #059669, #0d9488, #0891b2);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
        }

        .description {
          font-size: 1.25rem;
          color: #4b5563;
          line-height: 1.6;
          animation: fade-in-up 0.8s ease-out forwards;
          animation-delay: 0.4s;
        }

        .description-bold {
          font-weight: 600;
          color: #1f2937;
        }

        .description-highlight {
          font-weight: 600;
          color: #047857;
        }

        .features-container {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          animation: fade-in-up 0.8s ease-out forwards;
          animation-delay: 0.6s;
        }

        .feature-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(8px);
          border-radius: 1rem;
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .feature-card:hover {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          transform: scale(1.05);
        }

        .feature-icon {
          flex-shrink: 0;
          width: 3rem;
          height: 3rem;
          border-radius: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease;
        }

        .feature-card:hover .feature-icon {
          transform: rotate(12deg);
        }

        .feature-icon-1 {
          background: linear-gradient(45deg, #10b981, #14b8a6);
        }

        .feature-icon-2 {
          background: linear-gradient(45deg, #22c55e, #10b981);
        }

        .feature-icon svg {
          width: 1.5rem;
          height: 1.5rem;
          color: white;
        }

        .feature-content h3 {
          font-weight: 600;
          color: #1f2937;
          font-size: 1.125rem;
        }

        .feature-content p {
          color: #6b7280;
          font-size: 0.875rem;
        }

        .cta-container {
          animation: fade-in-up 0.8s ease-out forwards;
          animation-delay: 0.8s;
        }

        .cta-button {
          position: relative;
          background: linear-gradient(45deg, #059669, #14b8a6);
          color: white;
          padding: 1rem 2rem;
          border-radius: 1rem;
          font-weight: 600;
          font-size: 1.125rem;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          transform: translateY(0);
          border: none;
          cursor: pointer;
          overflow: hidden;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .cta-button:hover {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          transform: scale(1.05) translateY(-4px);
        }

        .cta-button-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(45deg, #047857, #0f766e);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .cta-button:hover .cta-button-overlay {
          opacity: 1;
        }

        .cta-button-content {
          position: relative;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .cta-button:hover .arrow-icon {
          transform: translateX(4px);
        }

        .arrow-icon {
          transition: transform 0.3s ease;
        }

        .cta-button-glow {
          position: absolute;
          inset: 0;
          z-index: -1;
          background: linear-gradient(45deg, #059669, #14b8a6);
          filter: blur(16px);
          opacity: 0.5;
          transition: opacity 0.3s ease;
        }

        .cta-button:hover .cta-button-glow {
          opacity: 0.75;
        }

        .right-content {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 2rem;
          justify-content: center;
          align-items: center;
          animation: fade-in-right 0.8s ease-out forwards;
          animation-delay: 1s;
        }

        .logo-glow {
          position: absolute;
          inset: 0;
          background: linear-gradient(45deg, #fda4af, #fb7185);
          border-radius: 50%;
          filter: blur(48px);
          opacity: 0.3;
          animation: pulse 2s infinite;
          transform: scale(1.5);
        }

        .logo-container {
          position: relative;
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(16px);
          padding: 2.5rem;
          border-radius: 1.5rem;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          border: 1px solid rgba(255, 255, 255, 0.3);
          transition: transform 0.5s ease;
          width: 100%;
          max-width: 350px;
        }

        .logo-container:hover {
          transform: scale(1.05);
        }

        .decorative-dot-1 {
          position: absolute;
          top: -0.5rem;
          left: -0.5rem;
          width: 1.5rem;
          height: 1.5rem;
          background: linear-gradient(45deg, #ec4899, #f43f5e);
          border-radius: 50%;
          animation: bounce 1s infinite;
        }

        .decorative-dot-2 {
          position: absolute;
          bottom: -0.5rem;
          right: -0.5rem;
          width: 1rem;
          height: 1rem;
          background: linear-gradient(45deg, #10b981, #14b8a6);
          border-radius: 50%;
          animation: bounce 1s infinite;
          animation-delay: 1s;
        }

        .petals-text {
          font-size: 3.5rem;
          font-weight: 700;
          background: linear-gradient(45deg, #ec4899, #f43f5e, #ec4899);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          font-family: cursive;
          transition: transform 0.3s ease;
          text-align: center;
        }

        .petals-text:hover {
          transform: scale(1.1);
        }

        .sparkle-1 {
          position: absolute;
          top: 1rem;
          right: 1rem;
          color: #f9a8d4;
          animation: pulse 2s infinite;
        }

        .sparkle-2 {
          position: absolute;
          bottom: 1rem;
          left: 1rem;
          color: #fda4af;
          animation: pulse 2s infinite;
          animation-delay: 0.5s;
        }

        .floating-card {
          position: relative;
          bottom: auto;
          right: auto;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(8px);
          padding: 1.5rem;
          border-radius: 1rem;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          border: 1px solid rgba(255, 255, 255, 0.2);
          text-align: center;
          animation: float 6s ease-in-out infinite;
          animation-delay: 2s;
          width: 100%;
          max-width: 350px;
        }

        .brand-card {
          position: relative;
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(16px);
          padding: 2rem;
          border-radius: 1.5rem;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          border: 1px solid rgba(255, 255, 255, 0.3);
          transition: transform 0.5s ease;
          width: 100%;
          max-width: 350px;
          text-align: center;
        }

        .brand-card:hover {
          transform: scale(1.05);
        }

        .brand-card-1 {
          background: linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(139, 92, 246, 0.1));
        }

        .brand-card-2 {
          background: linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(16, 185, 129, 0.1));
        }

        .brand-text {
          font-size: 2.5rem;
          font-weight: 700;
          font-family: cursive;
          transition: transform 0.3s ease;
        }

        .brand-text:hover {
          transform: scale(1.1);
        }

        .brand-text-1 {
          background: linear-gradient(45deg, #a855f7, #8b5cf6, #a855f7);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
        }

        .brand-text-2 {
          background: linear-gradient(45deg, #22c55e, #10b981, #22c55e);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
        }

        .brand-decorative-1 {
          position: absolute;
          top: -0.5rem;
          left: -0.5rem;
          width: 1.5rem;
          height: 1.5rem;
          background: linear-gradient(45deg, #a855f7, #8b5cf6);
          border-radius: 50%;
          animation: bounce 1s infinite;
        }

        .brand-decorative-2 {
          position: absolute;
          bottom: -0.5rem;
          right: -0.5rem;
          width: 1rem;
          height: 1rem;
          background: linear-gradient(45deg, #a855f7, #8b5cf6);
          border-radius: 50%;
          animation: bounce 1s infinite;
          animation-delay: 1s;
        }

        .brand-decorative-3 {
          position: absolute;
          top: -0.5rem;
          left: -0.5rem;
          width: 1.5rem;
          height: 1.5rem;
          background: linear-gradient(45deg, #22c55e, #10b981);
          border-radius: 50%;
          animation: bounce 1s infinite;
        }

        .brand-decorative-4 {
          position: absolute;
          bottom: -0.5rem;
          right: -0.5rem;
          width: 1rem;
          height: 1rem;
          background: linear-gradient(45deg, #22c55e, #10b981);
          border-radius: 50%;
          animation: bounce 1s infinite;
          animation-delay: 1s;
        }

        .brand-sparkle-1 {
          position: absolute;
          top: 1rem;
          right: 1rem;
          color: #a855f7;
          animation: pulse 2s infinite;
        }

        .brand-sparkle-2 {
          position: absolute;
          bottom: 1rem;
          left: 1rem;
          color: #8b5cf6;
          animation: pulse 2s infinite;
          animation-delay: 0.5s;
        }

        .brand-sparkle-3 {
          position: absolute;
          top: 1rem;
          right: 1rem;
          color: #22c55e;
          animation: pulse 2s infinite;
        }

        .brand-sparkle-4 {
          position: absolute;
          bottom: 1rem;
          left: 1rem;
          color: #10b981;
          animation: pulse 2s infinite;
          animation-delay: 0.5s;
        }

        .floating-card h4 {
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 0.5rem;
        }

        .floating-card p {
          font-size: 0.875rem;
          color: #6b7280;
          margin-bottom: 1rem;
        }

        .floating-card-button {
          width: 3rem;
          height: 3rem;
          background: linear-gradient(45deg, #374151, #1f2937);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease;
          border: none;
          cursor: pointer;
        }

        .floating-card-button:hover {
          transform: scale(1.1);
        }

        .floating-card-button:hover .arrow-icon {
          transform: translateX(4px);
        }

        /* Animations */
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-25%);
          }
        }
      `}</style>

      <div className="main-container">
        {/* Animated Background Elements */}
        <div className="bg-elements">
          <div className="bg-blob-1"></div>
          <div className="bg-blob-2"></div>
          <div className="bg-blob-3"></div>
        </div>

        {/* Floating Particles */}
        <div className="floating-particles">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${6 + Math.random() * 4}s`
              }}
            ></div>
          ))}
        </div>

        <div className="content-wrapper">
          <div className="grid-container">
            {/* Left Content */}
            <div className="left-content">
              {/* Main Heading with Gradient */}
              <div className="header-section">
                <div className="badge">
                  <Leaf className="w-4 h-4" />
                  <span>Sustainable Excellence</span>
                </div>
                
                <h1 className="main-heading">
                  We care for the{' '}
                  <span className="gradient-text">
                    world
                  </span>{' '}
                  we serve
                </h1>
              </div>

              {/* Description */}
              <p className="description">
                <span className="description-bold">SOFTCARE™</span> products are{' '}
                <span className="description-highlight">FSC® certified</span>, ensuring
                responsible sourcing and environmental integrity from raw material to final packaging.
              </p>

              {/* Features with Enhanced Design */}
              <div className="features-container">
                <div className="feature-card">
                  <div className="feature-icon feature-icon-1">
                    <Check />
                  </div>
                  <div className="feature-content">
                    <h3>Soft and skin-friendly</h3>
                    <p>Gentle care for sensitive skin</p>
                  </div>
                </div>

                <div className="feature-card">
                  <div className="feature-icon feature-icon-2">
                    <Leaf />
                  </div>
                  <div className="feature-content">
                    <h3>Made from FSC-certified virgin pulp</h3>      
                    <p>Sustainably sourced materials</p>
                  </div>
                </div>
              </div>

              {/* Call to Action Button */}
              <div className="cta-container">
                <button className="cta-button">
                  <div className="cta-button-overlay"></div>
                  <div className="cta-button-content">
                    <span>See Our Practices</span>
                    <ArrowRight className="arrow-icon" />
                  </div>
                  <div className="cta-button-glow"></div>
                </button>
              </div>
            </div>

            {/* Right Side - Enhanced Brand Cards */}
            <div className="right-content">
              {/* Glow Effect */}
              <div className="logo-glow"></div>
              
              {/* Main Petals Logo Container */}
              <div className="logo-container">
                {/* Decorative Elements */}
                <div className="decorative-dot-1"></div>
                <div className="decorative-dot-2"></div>
                
                {/* Petals Text - Enhanced */}
                <div className="petals-text">
                  Petals
                </div>
                
                {/* Sparkle Effects */}
                <div className="sparkle-1">
                  <Sparkles />
                </div>
                <div className="sparkle-2">
                  <Star />
                </div>
              </div>

              {/* Second Brand Card */}
              <div className="brand-card brand-card-1">
                {/* Decorative Elements */}
                <div className="brand-decorative-1"></div>
                <div className="brand-decorative-2"></div>
                
                {/* Brand Text */}
                <div className="brand-text brand-text-1">
                  SoftCare
                </div>
                
                {/* Sparkle Effects */}
                <div className="brand-sparkle-1">
                  <Sparkles />
                </div>
                <div className="brand-sparkle-2">
                  <Star />
                </div>
              </div>

              {/* Third Brand Card */}
              <div className="brand-card brand-card-2">
                {/* Decorative Elements */}
                <div className="brand-decorative-3"></div>
                <div className="brand-decorative-4"></div>
                
                {/* Brand Text */}
                <div className="brand-text brand-text-2">
                  Fresh
                </div>
                
                {/* Sparkle Effects */}
                <div className="brand-sparkle-3">
                  <Sparkles />
                </div>
                <div className="brand-sparkle-4">
                  <Star />
                </div>
              </div>

              {/* Floating Action Card */}
              <div className="floating-card">
                <h4>Explore Our Brands</h4>
                <p>Shop SOFTCARE Essentials</p>
                <button className="floating-card-button">
                  <ArrowRight className="arrow-icon" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnhancedCareSection;