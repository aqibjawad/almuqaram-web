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
      color: "#ec4899",
      bgGradient:
        "linear-gradient(135deg, #f8fafc 0%, #fce7f3 50%, #ecfdf5 100%)",
      textGradient: "linear-gradient(45deg, #ec4899, #f43f5e, #ec4899)",
      description:
        "Premium comfort meets sustainable excellence. Our Petals brand delivers the softest touch while maintaining our commitment to environmental responsibility.",
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
      color: "#a855f7",
      bgGradient:
        "linear-gradient(135deg, #f8fafc 0%, #f3e8ff 50%, #ecfdf5 100%)",
      textGradient: "linear-gradient(45deg, #a855f7, #8b5cf6, #a855f7)",
      description:
        "Advanced care technology designed for sensitive skin. SoftCare products provide gentle protection while maintaining superior absorbency and comfort.",
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
      name: "Fresh",
      color: "#22c55e",
      bgGradient:
        "linear-gradient(135deg, #f8fafc 0%, #f0fdf4 50%, #ecfffe 100%)",
      textGradient: "linear-gradient(45deg, #22c55e, #10b981, #22c55e)",
      description:
        "Refreshing cleanliness with natural freshness. Our Fresh line combines effective cleaning power with eco-friendly ingredients for a healthier home.",
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
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(16px);
          padding: 2rem;
          border-radius: 1.5rem;
          box-shadow: 0 10px 25px -12px rgba(0, 0, 0, 0.15);
          border: 2px solid transparent;
          transition: all 0.4s ease;
          cursor: pointer;
          text-align: center;
          overflow: hidden;
        }

        .brand-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }

        .brand-card.active {
          border-color: ${currentBrand.color};
          box-shadow: 0 25px 50px -12px ${currentBrand.color}40;
          transform: translateY(-5px);
        }

        .brand-card-petals {
          background: linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(244, 63, 94, 0.1));
        }

        .brand-card-softcare {
          background: linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(139, 92, 246, 0.1));
        }

        .brand-card-fresh {
          background: linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(16, 185, 129, 0.1));
        }

        .brand-text {
          font-size: 2.5rem;
          font-weight: 700;
          font-family: cursive;
          transition: all 0.3s ease;
          margin-bottom: 1rem;
        }

        .brand-text:hover {
          transform: scale(1.1);
        }

        .brand-text-petals {
          background: linear-gradient(45deg, #ec4899, #f43f5e, #ec4899);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
        }

        .brand-text-softcare {
          background: linear-gradient(45deg, #a855f7, #8b5cf6, #a855f7);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
        }

        .brand-text-fresh {
          background: linear-gradient(45deg, #22c55e, #10b981, #22c55e);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
        }

        .brand-description {
          font-size: 0.875rem;
          color: #6b7280;
          line-height: 1.5;
        }

        .decorative-elements {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .decorative-dot-1 {
          position: absolute;
          top: -0.5rem;
          left: -0.5rem;
          width: 1.5rem;
          height: 1.5rem;
          border-radius: 50%;
          animation: bounce 1s infinite;
        }

        .decorative-dot-2 {
          position: absolute;
          bottom: -0.5rem;
          right: -0.5rem;
          width: 1rem;
          height: 1rem;
          border-radius: 50%;
          animation: bounce 1s infinite;
          animation-delay: 1s;
        }

        .sparkle-1, .sparkle-2 {
          position: absolute;
          animation: pulse 2s infinite;
        }

        .sparkle-1 {
          top: 1rem;
          right: 1rem;
        }

        .sparkle-2 {
          bottom: 1rem;
          left: 1rem;
          animation-delay: 0.5s;
        }

        /* Petals decorations */
        .brand-card-petals .decorative-dot-1 {
          background: linear-gradient(45deg, #ec4899, #f43f5e);
        }
        .brand-card-petals .decorative-dot-2 {
          background: linear-gradient(45deg, #f43f5e, #ec4899);
        }
        .brand-card-petals .sparkle-1, .brand-card-petals .sparkle-2 {
          color: #ec4899;
        }

        /* SoftCare decorations */
        .brand-card-softcare .decorative-dot-1 {
          background: linear-gradient(45deg, #a855f7, #8b5cf6);
        }
        .brand-card-softcare .decorative-dot-2 {
          background: linear-gradient(45deg, #8b5cf6, #a855f7);
        }
        .brand-card-softcare .sparkle-1, .brand-card-softcare .sparkle-2 {
          color: #a855f7;
        }

        /* Fresh decorations */
        .brand-card-fresh .decorative-dot-1 {
          background: linear-gradient(45deg, #22c55e, #10b981);
        }
        .brand-card-fresh .decorative-dot-2 {
          background: linear-gradient(45deg, #10b981, #22c55e);
        }
        .brand-card-fresh .sparkle-1, .brand-card-fresh .sparkle-2 {
          color: #22c55e;
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

          {/* Brand Selection Cards */}
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

                <div className={`brand-text brand-text-${key}`}>
                  {brand.name}
                </div>

                <p className="brand-description">
                  Click to explore our {brand.name.toLowerCase()} collection
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
