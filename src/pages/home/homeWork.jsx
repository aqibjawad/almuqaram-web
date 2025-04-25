import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./index.css";
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
    <div id="HomeWork" style={{ marginRight: "3rem" }}>
      <Row>
        <Col>
          <div className="homeWork-card mt-5">
            <div className="homeWork-title">How It Works</div>

            <div className="custom-accordion">
              {steps.map((step) => (
                <div key={step.number} className="accordion-item">
                  <div
                    className={`accordion-header ${
                      activeStep === step.number ? "active" : ""
                    }`}
                    onClick={() => toggleStep(step.number)}
                  >
                    <span className="step-number">{step.number}</span>
                    <h3 className="step-title">{step.title}</h3>
                  </div>
                  {activeStep === step.number && (
                    <div className="accordion-content">
                      <p>{step.content}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="homeWork-btn">Get Started</div>
            <div className="homeWork-learn">Leran More</div>
          </div>
        </Col>
        <Col>
          <div className="homeWork-card2 mt-5">
            <Marquee
              className="mt-5"
              gradient={false}
              style={{ overflow: "hidden" }}
            >
              <div className="homeWork-cards2">
                <img className="work-image" src="/workImage-1.png" alt="work image" />
                <div>
                    <div className="work-product-name">
                        Product Name
                    </div>
                    <div className="work-brand-name">
                        Brand Name
                    </div>
                </div>
              </div>
            </Marquee>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default HomeWork;
