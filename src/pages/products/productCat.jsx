import React, { useState } from "react";
import "./index.css";

const SoftcareSection = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % 2); // Assuming 2 slides
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + 2) % 2);
  };

  return (
    <div className="softcare-section">
      <div className="softcare-content">
        <div className="text-content">
          <h2>
            SOFTCARE <br /> <span>Facial Tissue</span>
          </h2>
          <p>
            Gentle on skin, strong on performance — our premium facial tissues
            combine softness, strength, and sustainability, making them the
            perfect choice for everyday hygiene and comfort.
          </p>
          <button className="info-button">
            <span className="dot"></span>
            Soft and skin-friendly
          </button>
          <button className="info-button">
            <span className="dot"></span>
            Made from FSC-certified virgin pulp
          </button>
          <button className="order-button">Order Now</button>
        </div>

        <div className="image-content">
          <img src="/softec.png" alt="Softcare Tissue" />
        </div>

        <div className="info-cards">
          <div className="card">
            <p className="card-top">
              Tax included.
              <br /> Delivery calculated at checkout.
            </p>
            <p className="price">
              AED <span> 12 </span>
            </p>
            {/* <a href="#" className="card-button"></a> */}
            <div className="footerDiv">
              <div className="footerFont">See How We Manufacture</div>

              <div className="arrowVector">
                <img src="/arrowVector.png" />
              </div>
            </div>
          </div>
          <div className="card">
            <p>Don't miss out on sustainable hygiene.</p>
            <p className="price">
              AED <span> 12 </span>
            </p>
            <div className="footerDiv">
              <div className="footerFont">See How We Manufacture</div>

              <div className="arrowVector">
                <img src="/arrowVector.png" />
              </div>
            </div>
          </div>
        </div>

        {/* <div className="carousel-navigation">
          <button className="carousel-button" onClick={handlePrev}>←</button>
          <button className="carousel-button" onClick={handleNext}>→</button>
        </div> */}
      </div>
    </div>
  );
};

export default SoftcareSection;
