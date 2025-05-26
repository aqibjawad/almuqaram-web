import React, { useState, useEffect } from "react";

const HomeBanner = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="home-banner-container">
      <div className="home-banner-content">
        <div className={`home-banner-overlay ${isLoaded ? "loaded" : ""}`}>
          <div className={`home-banner-text ${isLoaded ? "animate-in" : ""}`}>
            <p
              className={`home-banner-welcome ${isLoaded ? "slide-in-1" : ""}`}
            >
              Welcome to Al Muqarram
            </p>
            <h1 className={`home-banner-title ${isLoaded ? "slide-in-2" : ""}`}>
              INNOVATING HYGIENE
              <br />
              FOR A HEALTHIER
              <br />
              TOMORROW
            </h1>
            <div
              className={`home-banner-buttons ${isLoaded ? "slide-in-3" : ""}`}
            >
              <button className="home-banner-btn home-banner-btn-primary">
                Get started →
              </button>
              <button className="home-banner-btn home-banner-btn-secondary">
                Learn More ↓
              </button>
            </div>
          </div>
        </div>
        <img
          src="/bannerHome.jpg"
          alt="Banner"
          className={`home-banner-image ${imageLoaded ? "image-loaded" : ""}`}
          onLoad={handleImageLoad}
        />
      </div>

      <style jsx>{`
        .home-banner-container {
          position: relative;
          overflow: hidden;
        }

        .home-banner-content {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .home-banner-image {
          width: 96.5%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          margin-top: 3rem;
          border-radius: 20px;
          opacity: 0;
          transform: scale(1.1);
          transition: all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .home-banner-image.image-loaded {
          opacity: 1;
          transform: scale(1);
        }

        .home-banner-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          margin-top: -2rem;
          display: flex;
          align-items: center;
          z-index: 2;
          opacity: 0;
          transition: opacity 0.8s ease 0.3s;
        }

        .home-banner-overlay.loaded {
          opacity: 1;
        }

        .home-banner-text {
          max-width: 600px;
          padding: 0 60px;
          color: white;
          transition: color 0.3s ease;
          cursor: pointer;
        }

        .home-banner-text:hover {
          color: #30afb8;
        }

        .home-banner-welcome {
          font-size: 40px;
          margin-bottom: 20px;
          opacity: 0;
          font-weight: 600;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .home-banner-welcome.slide-in-1 {
          opacity: 0.9;
          transform: translateY(0);
          transition-delay: 0.2s;
        }

        .home-banner-title {
          font-size: 64px;
          font-weight: bold;
          line-height: 1.1;
          margin-bottom: 40px;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
          opacity: 0;
          transform: translateY(40px);
          transition: all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .home-banner-title.slide-in-2 {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 0.4s;
        }

        .home-banner-buttons {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .home-banner-buttons.slide-in-3 {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 0.6s;
        }

        .home-banner-btn {
          padding: 16px 32px;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          text-decoration: none;
          display: inline-block;
          transform: scale(0.95);
          animation: buttonPulse 0.6s ease forwards;
        }

        @keyframes buttonPulse {
          0% {
            transform: scale(0.95);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.02);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        .home-banner-btn-primary {
          background-color: #30afb8;
          color: white;
          font-weight: bold;
          animation-delay: 0.8s;
        }

        .home-banner-btn-primary:hover {
          background-color: #0f9488;
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 8px 25px rgba(48, 175, 184, 0.4);
        }

        .home-banner-btn-secondary {
          background-color: transparent;
          color: white;
          border: 2px solid rgba(255, 255, 255, 0.5);
          animation-delay: 0.9s;
        }

        .home-banner-btn-secondary:hover {
          background-color: rgba(255, 255, 255, 0.1);
          border-color: white;
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 8px 25px rgba(255, 255, 255, 0.2);
        }

        /* Text typing animation effect */
        .home-banner-title.slide-in-2 {
          animation: typeWriter 2s steps(30) 0.4s forwards;
        }

        @keyframes typeWriter {
          from {
            width: 0;
            opacity: 0;
          }
          to {
            width: 100%;
            opacity: 1;
          }
        }

        /* Floating animation for the entire text block */
        .home-banner-text.animate-in {
          animation: float 6s ease-in-out infinite;
          animation-delay: 1.5s;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .home-banner-text {
            padding: 0 30px;
          }

          .home-banner-title {
            font-size: 42px;
          }

          .home-banner-welcome {
            font-size: 16px;
          }

          .home-banner-buttons {
            flex-direction: column;
            align-items: flex-start;
          }

          .home-banner-btn {
            padding: 14px 28px;
          }
        }

        @media (max-width: 480px) {
          .home-banner-text {
            padding: 0 20px;
          }

          .home-banner-title {
            font-size: 32px;
          }

          .home-banner-overlay {
            background: linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0.7) 0%,
              rgba(0, 0, 0, 0.4) 70%,
              transparent 100%
            );
          }

          .home-banner-text.animate-in {
            animation: none; /* Disable float animation on mobile */
          }
        }

        /* Reduced motion for accessibility */
        @media (prefers-reduced-motion: reduce) {
          .home-banner-image,
          .home-banner-overlay,
          .home-banner-welcome,
          .home-banner-title,
          .home-banner-buttons,
          .home-banner-btn {
            transition: none;
            animation: none;
          }

          .home-banner-text.animate-in {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
};

export default HomeBanner;
