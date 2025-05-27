import React, { useState } from "react";
import {
  Check,
  Leaf,
  Sparkles,
  ArrowRight,
  Star,
  Heart,
  Droplets,
} from "lucide-react";

const EnhancedCareSection = () => {
  const [activeBrand, setActiveBrand] = useState("petals");

  const brandData = {
    petals: {
      name: "Petals",
      color: "#2BBBBE",
      imageUrl: "/Achieve2.png", // Tissue/paper product image
      bgGradient:
        "linear-gradient(135deg, #f8fafc 0%, #e6fffa 50%, #f0fdfa 100%)",
      textGradient: "linear-gradient(45deg, #2BBBBE, #14b8a6, #2BBBBE)",
      description:
        "Premium comfort meets sustainable excellence. Our brand delivers the softest touch while maintaining our commitment to environmental responsibility.",
      features: [
        {
          icon: Heart,
          title: "Ultra-soft comfort",
          desc: "Luxurious feel for everyday use",
        },
        {
          icon: Leaf,
          title: "FSC-certified materials",
          desc: "Sustainably sourced virgin pulp",
        },
      ],
    },
    softcare: {
      name: "SoftCare",
      color: "#4f46e5",
      imageUrl: "/Achieve1.png", // Healthcare/care product image
      bgGradient:
        "linear-gradient(135deg, #f8fafc 0%, #eef2ff 50%, #f0fdfa 100%)",
      textGradient: "linear-gradient(45deg, #4f46e5, #6366f1, #4f46e5)",
      description:
        "Advanced care technology designed for sensitive skin. Products provide gentle protection while maintaining superior absorbency and comfort.",
      features: [
        {
          icon: Check,
          title: "Dermatologically tested",
          desc: "Safe for sensitive skin types",
        },
        {
          icon: Sparkles,
          title: "Premium quality fibers",
          desc: "Enhanced softness and durability",
        },
      ],
    },
    fresh: {
      name: "Soft Care Professional",
      color: "#059669",
      imageUrl: "/Achieve3.png", // Fresh/cleaning product image
      bgGradient:
        "linear-gradient(135deg, #f8fafc 0%, #ecfdf5 50%, #f0fdfa 100%)",
      textGradient: "linear-gradient(45deg, #059669, #10b981, #059669)",
      description:
        "Refreshing cleanliness with natural freshness. Our line combines effective cleaning power with eco-friendly ingredients for a healthier home.",
      features: [
        {
          icon: Droplets,
          title: "Natural freshness",
          desc: "Long-lasting clean feeling",
        },
        {
          icon: Leaf,
          title: "Eco-friendly formula",
          desc: "Biodegradable and sustainable",
        },
      ],
    },
  };

  const currentBrand = brandData[activeBrand];

  return (
    <>
      <style>{`
        .main-container {
          min-height: 100vh;
          background: ${currentBrand.bgGradient};
          position: relative;
          overflow: hidden;
          margin-top: 2rem;
          margin-right: 3rem;
          border-radius: 20px;
          transition: background 0.6s ease;
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
          background: ${currentBrand.color}40;
          border-radius: 50%;
          mix-blend-mode: multiply;
          filter: blur(40px);
          opacity: 0.7;
          animation: pulse 2s infinite;
          transition: background 0.6s ease;
        }

        .bg-blob-2 {
          position: absolute;
          top: 10rem;
          right: 5rem;
          width: 20rem;
          height: 20rem;
          background: ${currentBrand.color}30;
          border-radius: 50%;
          mix-blend-mode: multiply;
          filter: blur(40px);
          opacity: 0.6;
          animation: pulse 2s infinite;
          animation-delay: 2s;
          transition: background 0.6s ease;
        }

        .bg-blob-3 {
          position: absolute;
          bottom: 5rem;
          left: 33.333333%;
          width: 18rem;
          height: 18rem;
          background: ${currentBrand.color}20;
          border-radius: 50%;
          mix-blend-mode: multiply;
          filter: blur(40px);
          opacity: 0.5;
          animation: pulse 2s infinite;
          animation-delay: 4s;
          transition: background 0.6s ease;
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
          background: ${currentBrand.color};
          border-radius: 50%;
          opacity: 0.4;
          animation: float 6s ease-in-out infinite;
          transition: background 0.6s ease;
        }

        .content-wrapper {
          position: relative;
          z-index: 10;
          max-width: 1200px;
          margin: 0 auto;
          padding: 3rem 1.5rem;
        }

        .main-content {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          margin-bottom: 4rem;
        }

        .left-content {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          text-align: center;
        }

        .header-section {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          align-items: center;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.8);
          color: ${currentBrand.color};
          padding: 0.5rem 1rem;
          border-radius: 9999px;
          font-size: 0.875rem;
          font-weight: 500;
          width: fit-content;
          animation: fade-in-up 0.8s ease-out forwards;
          backdrop-filter: blur(8px);
          border: 1px solid ${currentBrand.color}30;
          transition: all 0.6s ease;
        }

        .main-heading {
          font-size: 3rem;
          font-weight: 700;
          line-height: 1.1;
          animation: fade-in-up 0.8s ease-out forwards;
          animation-delay: 0.2s;
        }

        @media (min-width: 768px) {
          .main-heading {
            font-size: 4rem;
          }
        }

        .gradient-text {
          background: ${currentBrand.textGradient};
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          transition: all 0.6s ease;
        }

        .description {
          font-size: 1.25rem;
          color: #4b5563;
          line-height: 1.6;
          animation: fade-in-up 0.8s ease-out forwards;
          animation-delay: 0.4s;
          max-width: 600px;
          margin: 0 auto;
        }

        .description-bold {
          font-weight: 600;
          color: #1f2937;
        }

        .description-highlight {
          font-weight: 600;
          color: ${currentBrand.color};
          transition: color 0.6s ease;
        }

        .features-container {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
          animation: fade-in-up 0.8s ease-out forwards;
          animation-delay: 0.6s;
          max-width: 600px;
          margin: 0 auto;
        }

        @media (min-width: 768px) {
          .features-container {
            grid-template-columns: 1fr 1fr;
          }
        }

        .feature-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.5rem;
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(8px);
          border-radius: 1rem;
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          text-align: left;
        }

        .feature-card:hover {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          transform: translateY(-5px);
        }

        .feature-icon {
          flex-shrink: 0;
          width: 3rem;
          height: 3rem;
          border-radius: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          background: ${currentBrand.textGradient};
        }

        .feature-card:hover .feature-icon {
          transform: rotate(12deg) scale(1.1);
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
          margin-bottom: 0.25rem;
        }

        .feature-content p {
          color: #6b7280;
          font-size: 0.875rem;
        }

        .cta-container {
          animation: fade-in-up 0.8s ease-out forwards;
          animation-delay: 0.8s;
          display: flex;
          justify-content: center;
        }

        .cta-button {
          position: relative;
          background: ${currentBrand.textGradient};
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

        .cta-button:hover .arrow-icon {
          transform: translateX(4px);
        }

        .arrow-icon {
          transition: transform 0.3s ease;
        }

        /* Brand Selection Section */
        .brand-selection {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          animation: fade-in-up 0.8s ease-out forwards;
          animation-delay: 1s;
        }

        .brand-card {
          position: relative;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          padding: 2.5rem;
          border-radius: 2rem;
          box-shadow: 0 15px 35px -10px rgba(0, 0, 0, 0.2);
          border: 2px solid transparent;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          text-align: center;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 320px;
        }

        .brand-card:hover {
          transform: translateY(-12px) scale(1.03);
          box-shadow: 0 35px 70px -15px rgba(0, 0, 0, 0.3);
        }

        .brand-card.active {
          border-color: ${currentBrand.color};
          box-shadow: 0 35px 70px -15px ${currentBrand.color}50;
          transform: translateY(-8px) scale(1.02);
        }

        .brand-card-petals {
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.95), rgba(252, 231, 243, 0.8));
          border: 1px solid rgba(43, 187, 190, 0.2);
        }

        .brand-card-softcare {
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.95), rgba(243, 232, 255, 0.8));
          border: 1px solid rgba(79, 70, 229, 0.2);
        }

        .brand-card-fresh {
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.95), rgba(236, 253, 245, 0.8));
          border: 1px solid rgba(5, 150, 105, 0.2);
        }

        .brand-image {
          width: 140px;
          height: 140px;
          object-fit: contain;
          border-radius: 1.5rem;
          margin-bottom: 1.5rem;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.1));
          border: 3px solid rgba(255, 255, 255, 0.5);
        }

        .brand-card:hover .brand-image {
          transform: scale(1.1) rotate(3deg);
          filter: drop-shadow(0 15px 30px rgba(0, 0, 0, 0.2));
        }

        .brand-name {
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
          transition: all 0.3s ease;
        }

        .brand-name-petals {
          background: linear-gradient(45deg, #2BBBBE, #14b8a6, #2BBBBE);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
        }

        .brand-name-softcare {
          background: linear-gradient(45deg, #4f46e5, #6366f1, #4f46e5);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
        }

        .brand-name-fresh {
          background: linear-gradient(45deg, #059669, #10b981, #059669);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
        }

        .brand-description {
          font-size: 0.95rem;
          color: #6b7280;
          line-height: 1.6;
          font-weight: 500;
        }

        .decorative-elements {
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.7;
        }

        .decorative-dot-1 {
          position: absolute;
          top: 1rem;
          left: 1rem;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          animation: float 3s ease-in-out infinite;
        }

        .decorative-dot-2 {
          position: absolute;
          bottom: 1rem;
          right: 1rem;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          animation: float 3s ease-in-out infinite;
          animation-delay: 1.5s;
        }

        .sparkle-1, .sparkle-2 {
          position: absolute;
          animation: pulse 2.5s infinite;
          opacity: 0.6;
        }

        .sparkle-1 {
          top: 1.5rem;
          right: 1.5rem;
          width: 16px;
          height: 16px;
        }

        .sparkle-2 {
          bottom: 1.5rem;
          left: 1.5rem;
          width: 14px;
          height: 14px;
          animation-delay: 1.2s;
        }

        /* Petals decorations */
        .brand-card-petals .decorative-dot-1 {
          background: linear-gradient(45deg, #2BBBBE, #14b8a6);
        }
        .brand-card-petals .decorative-dot-2 {
          background: linear-gradient(45deg, #14b8a6, #2BBBBE);
        }
        .brand-card-petals .sparkle-1, .brand-card-petals .sparkle-2 {
          color: #2BBBBE;
        }

        /* SoftCare decorations */
        .brand-card-softcare .decorative-dot-1 {
          background: linear-gradient(45deg, #4f46e5, #6366f1);
        }
        .brand-card-softcare .decorative-dot-2 {
          background: linear-gradient(45deg, #6366f1, #4f46e5);
        }
        .brand-card-softcare .sparkle-1, .brand-card-softcare .sparkle-2 {
          color: #4f46e5;
        }

        /* Fresh decorations */
        .brand-card-fresh .decorative-dot-1 {
          background: linear-gradient(45deg, #059669, #10b981);
        }
        .brand-card-fresh .decorative-dot-2 {
          background: linear-gradient(45deg, #10b981, #059669);
        }
        .brand-card-fresh .sparkle-1, .brand-card-fresh .sparkle-2 {
          color: #059669;
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

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
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
                animationDuration: `${6 + Math.random() * 4}s`,
              }}
            ></div>
          ))}
        </div>

        <div className="content-wrapper">
          {/* Main Content Section */}
          <div className="main-content">
            <div className="left-content">
              {/* Main Heading with Dynamic Content */}
              <div className="header-section">
                <div className="badge">
                  <Leaf className="w-4 h-4" />
                  <span>Sustainable Excellence</span>
                </div>

                <h1 className="main-heading">
                  We care for the <span className="gradient-text">world</span>{" "}
                  we serve
                </h1>
              </div>

              {/* Dynamic Description */}
              <p className="description">
                <span className="description-bold">
                  {currentBrand.name.toUpperCase()}™
                </span>{" "}
                products are{" "}
                <span className="description-highlight">FSC® certified</span>,{" "}
                {currentBrand.description}
              </p>

              {/* Dynamic Features */}
              <div className="features-container">
                {currentBrand.features.map((feature, index) => (
                  <div key={index} className="feature-card">
                    <div className="feature-icon">
                      <feature.icon />
                    </div>
                    <div className="feature-content">
                      <h3>{feature.title}</h3>
                      <p>{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Call to Action Button */}
              <div className="cta-container">
                <button className="cta-button">
                  <span>Explore {currentBrand.name}</span>
                  <ArrowRight className="arrow-icon" />
                </button>
              </div>
            </div>
          </div>

          {/* Brand Selection Cards with Images */}
          <div className="brand-selection">
            {Object.entries(brandData).map(([key, brand]) => (
              <div
                key={key}
                className={`brand-card brand-card-${key} ${
                  activeBrand === key ? "active" : ""
                }`}
                onClick={() => setActiveBrand(key)}
              >
                <div className="decorative-elements">
                  <div className="decorative-dot-1"></div>
                  <div className="decorative-dot-2"></div>
                  <div className="sparkle-1">
                    <Sparkles />
                  </div>
                  <div className="sparkle-2">
                    <Star />
                  </div>
                </div>

                <img 
                  src={brand.imageUrl} 
                  alt={`${brand.name} Product`}
                  className="brand-image"
                />

                <div className={`brand-name brand-name-${key}`}>
                  {brand.name}
                </div>

                <p className="brand-description">
                  Premium quality with sustainable excellence
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default EnhancedCareSection;