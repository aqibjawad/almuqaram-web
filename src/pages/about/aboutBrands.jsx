import React from "react";
import "./Brands.css";

const brands = [
  {
    name: "Softcare",
    logo: "/Softcare.png", // Replace with real image
  },
  {
    name: "Petals",
    logo: "/Petals.png",
  },
  {
    name: "Softcare Professionals",
    logo: "/SoftCare Professional.png",
  },
];

const Brands = () => {
  return (
    <div className="brands-wrapper">
      <h2 className="brands-title">Our Brands</h2>
      <p className="brands-subtitle">
        Our brands are synonymous with our commitment to quality
      </p>
      <div className="brands-grid">
        {brands.map((brand, index) => (
          <div className="brand-card" key={index}>
            <div className="brand-logo">
              <img src={brand.logo} alt={brand.name} />
            </div>
            <div className="brand-footer">
              <span>{brand.name}</span>
              <button className="arrow-btn">
                <span className="arrow-icon">↗</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
