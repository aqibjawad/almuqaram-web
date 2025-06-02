import React, { useState } from "react";
import "./HowItWorks.css";

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div className="how-it-works-container">
      <div className="left-section">
        <h2>How It Works</h2>
        <div className="step" onClick={() => setActiveStep(1)}>
          <div className="step-number">1</div>
          <div className="step-content">
            <h3 className={activeStep === 1 ? "active" : ""}>
              Choose Your Products
            </h3>
            {activeStep === 1 && (
              <p>
                Explore our extensive portfolio of hygienic paper products,
                carefully designed to meet the demands of retail, hospitality,
                healthcare, and commercial sectors. From soft facial tissues and
                durable kitchen rolls to highly absorbent toilet paper and jumbo
                rolls — we offer a variety of sizes, ply options, and packaging
                formats. Whether you're catering to mass-market needs or premium
                private-label lines, you'll find the right products to match
                your brand vision and customer expectations.
              </p>
            )}
          </div>
        </div>
        <div className="divider"></div>
        <div className="step" onClick={() => setActiveStep(2)}>
          <div className="step-number">2</div>
          <div className="step-content">
            <h3 className={activeStep === 2 ? "active" : ""}>
              Customize Your Brand
            </h3>
            {activeStep === 2 && (
              <p>
                From packaging design to label printing, we help you build a
                brand that reflects your identity. Our in-house design team
                ensures your product stands out on every shelf.
              </p>
            )}
          </div>
        </div>
        <div className="divider"></div>
        <div className="step" onClick={() => setActiveStep(3)}>
          <div className="step-number">3</div>
          <div className="step-content">
            <h3 className={activeStep === 3 ? "active" : ""}>
              We Manufacture & Deliver
            </h3>
            {activeStep === 3 && (
              <p>
                We take care of the entire production process — ensuring
                consistent quality, hygiene standards, and on-time delivery.
                Your brand, manufactured with our trusted expertise.
              </p>
            )}
          </div>
        </div>
        <button className="get-started">Get Started ↗</button>
        <a href="#" className="learn-more">
          Learn More
        </a>
      </div>

      <div className="right-section">
        <div className="carousel-center">
          <div className="product-card">
            <img src="/path-to-product1.png" alt="Product" />
            <div className="product-info">
              <p className="product-title">Product Name</p>
              <p className="brand-name">Brand name</p>
            </div>
          </div>
          <div className="product-card">
            <img src="/path-to-product2.png" alt="Product" />
            <div className="product-info">
              <p className="product-title">Product Name</p>
              <p className="brand-name">Brand name</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
