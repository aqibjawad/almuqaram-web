import React, { useState } from "react";

const HomeWork = () => {
  const [activeStep, setActiveStep] = useState(1);

  const toggleStep = (step) => {
    setActiveStep(activeStep === step ? null : step);
  };

  // Accordion data
  const steps = [
    {
      number: 1,
      title: "Choose Your Products",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      number: 2,
      title: "Customize Your Brand",
      content:
        "Add your brand logo, colors, and packaging preferences to create your unique product line.",
    },
    {
      number: 3,
      title: "We Manufacture & Deliver",
      content:
        "Our team handles production, quality control, and delivers your branded products to your doorstep.",
    },
  ];

  return (
    <div className="homework-container">
      <style jsx>{`
        /* Fixed HomeWork Component CSS */
        .homework-container {
          margin-right: 3rem;
          position: relative;
        }

        /* Grid Layout - Fixed for equal columns */
        .homework-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          align-items: stretch; /* Changed from start to stretch */
          min-height: 600px;
        }

        .homework-left {
          width: 100%;
        }

        .homework-right {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .homework-card {
          background: white;
          border-radius: 0.5rem;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          padding: 2rem;
          height: 100%; /* Use full height */
          display: flex;
          flex-direction: column;
        }

        /* Image container styles */
        .homework-image-container {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: white;
          border-radius: 0.5rem;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          overflow: hidden;
        }

        .homework-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 0.5rem;
        }

        /* Header Styles - Reduced margin */
        .homework-header {
          text-align: center;
          margin-bottom: 1.5rem; /* Reduced from 3rem */
        }

        .homework-title {
          font-size: 3rem;
          font-weight: 700;
          color: white;
          background: linear-gradient(135deg, #30afb8, #2a9aa3);
          padding: 1rem 2rem;
          border-radius: 1rem;
          box-shadow: 0 10px 30px rgba(48, 175, 184, 0.3);
          margin: 0; /* Reset margin */
        }

        /* Accordion Styles - Unique classes */
        .homework-accordion {
          background: white;
          border-radius: 0.75rem;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          flex-grow: 1;
        }

        .homework-accordion-item {
          border-bottom: 1px solid #f0f0f0;
          transition: all 0.3s ease;
        }

        .homework-accordion-item:last-child {
          border-bottom: none;
        }

        .homework-accordion-item.active {
          background: linear-gradient(135deg, #f8f9ff, #ffffff);
        }

        .homework-accordion-header {
          display: flex;
          align-items: center;
          padding: 1.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .homework-accordion-header::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(48, 175, 184, 0.1),
            transparent
          );
          transition: left 0.5s ease;
        }

        .homework-accordion-header:hover::before {
          left: 100%;
        }

        .homework-accordion-header:hover {
          background: linear-gradient(135deg, #f8f9ff, #f0f4ff);
          transform: translateX(5px);
        }

        /* Step Number Styles */
        .homework-step-number {
          width: 3rem;
          height: 3rem;
          border-radius: 50%;
          background: linear-gradient(135deg, #30afb8, #2a9aa3);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 1.125rem;
          margin-right: 1.25rem;
          box-shadow: 0 5px 15px rgba(48, 175, 184, 0.3);
          transition: all 0.3s ease;
          position: relative;
          z-index: 2;
        }

        .homework-accordion-header:hover .homework-step-number {
          transform: scale(1.1) rotate(360deg);
          box-shadow: 0 8px 25px rgba(48, 175, 184, 0.4);
        }

        /* Step Title Styles */
        .homework-step-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #374151;
          flex: 1;
          margin: 0;
          position: relative;
          z-index: 2;
        }

        /* Arrow Icon Styles */
        .homework-accordion-arrow {
          width: 2rem;
          height: 2rem;
          color: #9ca3af;
          transition: transform 0.3s ease;
          position: relative;
          z-index: 2;
        }

        .homework-accordion-item.active .homework-accordion-arrow {
          transform: rotate(180deg);
          color: #30afb8;
        }

        /* Content Styles - Fixed to show properly */
        .homework-accordion-content {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s ease;
        }

        .homework-accordion-item.active .homework-accordion-content {
          max-height: 300px; /* Increased height */
        }

        .homework-accordion-body {
          padding: 1.5rem;
          padding-left: 4rem;
          color: #6b7280;
          font-size: 1.125rem;
          line-height: 1.6;
          border-left: 4px solid #30afb8;
          margin-left: 1.5rem;
          background: white;
          border-radius: 0 0.5rem 0.5rem 0;
        }

        /* CTA Section Styles */
        .homework-cta-section {
          text-align: center;
          margin-top: 2rem; /* Reduced from 3rem */
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .homework-get-started-btn {
          background: linear-gradient(135deg, #30afb8, #2a9aa3);
          color: white;
          padding: 1rem 3rem;
          border: none;
          border-radius: 2rem;
          font-size: 1.25rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 10px 30px rgba(48, 175, 184, 0.3);
          position: relative;
          overflow: hidden;
        }

        .homework-get-started-btn::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transition: left 0.5s ease;
        }

        .homework-get-started-btn:hover::before {
          left: 100%;
        }

        .homework-get-started-btn:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 15px 40px rgba(48, 175, 184, 0.4);
        }

        .homework-learn-more-btn {
          background: transparent;
          color: #30afb8;
          border: 2px solid #30afb8;
          padding: 0.875rem 2.5rem;
          border-radius: 2rem;
          font-size: 1.125rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .homework-learn-more-btn:hover {
          background: #30afb8;
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(48, 175, 184, 0.3);
        }

        /* Floating Elements */
        .homework-floating-elements {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: -1;
        }

        .homework-floating-circle {
          position: absolute;
          border-radius: 50%;
          background: rgba(48, 175, 184, 0.1);
        }

        .homework-floating-circle-1 {
          width: 100px;
          height: 100px;
          top: 20%;
          left: 10%;
          animation: homeworkFloat 6s ease-in-out infinite;
        }

        .homework-floating-circle-2 {
          width: 150px;
          height: 150px;
          top: 60%;
          right: 10%;
          animation: homeworkFloat 6s ease-in-out infinite 2s;
        }

        .homework-floating-circle-3 {
          width: 80px;
          height: 80px;
          bottom: 20%;
          left: 20%;
          animation: homeworkFloat 8s ease-in-out infinite 4s;
        }

        /* Animations */
        @keyframes homeworkFloat {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        /* Responsive Design */
        @media (max-width: 992px) {
          .homework-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
        }

        @media (min-width: 768px) {
          .homework-cta-section {
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 1.5rem;
          }

          .homework-get-started-btn,
          .homework-learn-more-btn {
            width: auto;
          }
        }

        @media (max-width: 768px) {
          .homework-container {
            padding: 1rem;
          }

          .homework-card {
            padding: 1.5rem;
          }

          .homework-title {
            font-size: 2rem;
            padding: 0.75rem 1.5rem;
          }

          .homework-accordion-header {
            padding: 1rem;
          }

          .homework-step-number {
            width: 2.5rem;
            height: 2.5rem;
            font-size: 1rem;
            margin-right: 1rem;
          }

          .homework-step-title {
            font-size: 1.125rem;
          }

          .homework-accordion-body {
            padding: 1rem;
            padding-left: 3rem;
            margin-left: 1rem;
            font-size: 1rem;
          }
        }

        @media (max-width: 576px) {
          .homework-card {
            padding: 1rem;
          }

          .homework-title {
            font-size: 1.5rem;
            padding: 0.5rem 1rem;
          }

          .homework-accordion-header {
            padding: 0.75rem;
          }

          .homework-step-number {
            width: 2rem;
            height: 2rem;
            font-size: 0.875rem;
            margin-right: 0.75rem;
          }

          .homework-step-title {
            font-size: 1rem;
          }

          .homework-accordion-body {
            padding: 0.75rem;
            padding-left: 2.5rem;
            margin-left: 0.75rem;
            font-size: 0.875rem;
          }

          .homework-get-started-btn {
            padding: 0.75rem 2rem;
            font-size: 1rem;
          }

          .homework-learn-more-btn {
            padding: 0.75rem 2rem;
            font-size: 1rem;
          }
        }
      `}</style>

      {/* Floating Background Elements */}
      <div className="homework-floating-elements">
        <div className="homework-floating-circle homework-floating-circle-1"></div>
        <div className="homework-floating-circle homework-floating-circle-2"></div>
        <div className="homework-floating-circle homework-floating-circle-3"></div>
      </div>

      {/* Grid Layout */}
      <div className="homework-grid">
        {/* Left Column - Content */}
        <div className="homework-left">
          <div className="homework-card">
            {/* Header */}
            <div className="homework-header">
              <h1 className="homework-title">How It Works</h1>
            </div>

            {/* Accordion */}
            <div className="homework-accordion">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className={`homework-accordion-item ${
                    activeStep === step.number ? "active" : ""
                  }`}
                >
                  {/* Accordion Header */}
                  <div
                    className="homework-accordion-header"
                    onClick={() => toggleStep(step.number)}
                  >
                    {/* Step Number */}
                    <div className="homework-step-number">{step.number}</div>

                    {/* Step Title */}
                    <h3 className="homework-step-title">{step.title}</h3>

                    {/* Arrow Icon */}
                    <svg
                      className="homework-accordion-arrow"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="6,9 12,15 18,9"></polyline>
                    </svg>
                  </div>

                  {/* Accordion Content */}
                  <div className="homework-accordion-content">
                    <div className="homework-accordion-body">
                      {step.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="homework-cta-section">
              <button className="homework-get-started-btn">Get Started</button>
              <button className="homework-learn-more-btn">Learn More</button>
            </div>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="homework-right">
          <div className="homework-image-container">
            <img
              src="/workPhoto.png"
              alt="Professional person"
              className="homework-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeWork;
