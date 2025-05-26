import React, { useState } from "react";
import "./homeWork.css"; // Import the CSS file
import Marquee from "react-fast-marquee";

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
        "Select from a wide range of high-quality hygienic products trusted by global clients.",
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
    <div className="how-it-works-container">
      {/* Floating Background Elements */}
      <div className="floating-elements">
        <div className="floating-circle floating-circle-1"></div>
        <div className="floating-circle floating-circle-2"></div>
        <div className="floating-circle floating-circle-3"></div>
      </div>

      {/* Grid Layout */}
      <div className="how-it-works-grid">
        {/* Left Column - Content */}
        <div className="how-it-works-left">
          <div className="how-it-works-card">
            {/* Header */}
            <div className="how-it-works-header">
              <h1 className="how-it-works-title">How It Works</h1>
            </div>

            {/* Accordion */}
            <div className="accordion-container">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className={`accordion-item ${
                    activeStep === step.number ? "active" : ""
                  }`}
                >
                  {/* Accordion Header */}
                  <div
                    className="accordion-header"
                    onClick={() => toggleStep(step.number)}
                  >
                    {/* Step Number */}
                    <div className="step-number">{step.number}</div>

                    {/* Step Title */}
                    <h3 className="step-title">{step.title}</h3>

                    {/* Arrow Icon */}
                    <svg
                      className="accordion-arrow"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="6,9 12,15 18,9"></polyline>
                    </svg>
                  </div>

                  {/* Accordion Content */}
                  <div className="accordion-content">
                    <div className="accordion-body">{step.content}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="cta-section">
              <button className="get-started-btn">Get Started</button>

              <button className="learn-more-btn">Learn More</button>
            </div>
          </div>
        </div>

        {/* Right Column - Empty for now */}
        <div className="how-it-works-right">
          <img src='' />
        </div>
      </div>
    </div>
  );
};

export default HomeWork;
