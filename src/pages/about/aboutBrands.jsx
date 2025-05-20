import React from "react";
import "./about.css";
// import softcareLogo from './softcare.png'; // Replace with actual path
// import petalsLogo from './petals.png';     // Replace with actual path
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const AboutBrand = () => {
  return (
    <div className="brands-container">
      <h2 className="brands-title">Our Brands</h2>
      <p className="brands-subtitle">
        Our brands are synonymous with our commitment to quality
      </p>

      <div className="brands-cards">
        <div className="brand-card">
          <div className="brand-logo">
            <img
              src="/out of order/8325 - Alum Container/7.jpg"
              alt="Softcare"
            />
          </div>
          <div className="brand-footer">
            <span>Softcare</span>
            <button className="brand-button">
              <FaArrowUpRightFromSquare />
            </button>
          </div>
        </div>

        <div className="brand-card">
          <div className="brand-logo">
            <img
              src="/out of order/Alum Foil 1000 g 30 cm/16.jpg"
              alt="Petals"
            />
          </div>    
          <div className="brand-footer">
            <span>Petals</span>
            <button className="brand-button">
              <FaArrowUpRightFromSquare />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBrand;
