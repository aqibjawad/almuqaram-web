import React, { useState } from "react";
import "./index.css";

const brandData = {
  brand1: {
    color: "#672F8F",
    heading: "Trusted Hygiene Experts Since 2013",
    description:
      "Founded in the heart of Ajman, UAE, AL MUQARRAM Hygienic Products Industry LLC is a rapidly growing manufacturer and converter of hygienic paper products, serving customers across the GCC and beyond.",
    image: "/Achieve1.png",
  },
  brand2: {
    color: "#EF055F",
    heading: "Innovative Solutions for Hygiene Needs",
    description:
      "We offer a wide range of tissue and hygienic paper products tailored to meet both industrial and domestic requirements with unmatched quality.",
    image: "/Achieve2.png",
  },
  brand3: {
    color: "#722C89",
    heading: "Your Hygiene, Our Priority",
    description:
      "Our products are trusted by thousands of customers and businesses across the region for their superior quality and sustainable production practices.",
    image: "/Achieve3.png",
  },
};

const ColorfulView = () => {
  const [selectedBrand, setSelectedBrand] = useState("brand1");

  const handleBrandClick = (brandKey) => {
    setSelectedBrand(brandKey);
  };

  const { color, heading, description } = brandData[selectedBrand];

  return (
    <div className="container" style={{ backgroundColor: color }}>
      <div className="image-section">
        <h2>{heading}</h2>
      </div>
      <div style={{ color: "white", textAlign: "center", marginTop: "-3rem", fontSize: "20px" }}>
        {description}
      </div>
      <div className="brands">
        {Object.entries(brandData).map(([key, data]) => (
          <div key={key} className="brand" onClick={() => handleBrandClick(key)}>
            <img src={data.image} alt={`Brand ${key}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorfulView;
