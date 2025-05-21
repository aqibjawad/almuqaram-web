import React, { useState } from "react";
import "./index.css";

const CategoriesSidebar = () => {
  const [openSections, setOpenSections] = useState({
    tissues: true,
    otherItems: true,
    allProducts: false,
    brands: true,
    price: true,
    discount: true,
  });

  const toggleSection = (sectionName) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionName]: !prev[sectionName],
    }));
  };

  return (
    <div className="sidebar">
      <div className="breadcrumb">Home / Products</div>
      <h2 className="sidebar-title">CATEGORIES</h2>

      {/* Tissues */}
      <div className="section">
        <div
          className="section-header"
          onClick={() => toggleSection("tissues")}
        >
          Tissues <span>{openSections.tissues ? "-" : "+"}</span>
        </div>
        {openSections.tissues && (
          <ul>
            <li className="active">Facial Tissue</li>
            <li>Maxi Rolls</li>
            <li>Toilet Rolls</li>
            <li>Private Labels</li>
          </ul>
        )}
      </div>

      {/* Other Items */}
      <div className="section">
        <div
          className="section-header"
          onClick={() => toggleSection("otherItems")}
        >
          Other items <span>{openSections.otherItems ? "-" : "+"}</span>
        </div>
        {openSections.otherItems && (
          <ul>
            <li>Aluminum Foil</li>
            <li>Dispensers</li>
            <li>towels</li>
          </ul>
        )}
      </div>

      {/* All Products (no content, just toggle example) */}
      <div className="section">
        <div
          className="section-header"
          onClick={() => toggleSection("allProducts")}
        >
          All products <span>{openSections.allProducts ? "-" : "+"}</span>
        </div>
      </div>

      {/* Brands */}
      <div className="section">
        <div
          className="section-header"
          onClick={() => toggleSection("brands")}
        >
          Brands <span>{openSections.brands ? "-" : "+"}</span>
        </div>
        {openSections.brands && (
          <ul>
            <li>
              Softcare <span className="count">(08)</span>
            </li>
            <li>
              Petals <span className="count">(08)</span>
            </li>
          </ul>
        )}
      </div>

      {/* Price */}
      <div className="section">
        <div
          className="section-header"
          onClick={() => toggleSection("price")}
        >
          Price <span>{openSections.price ? "-" : "+"}</span>
        </div>
        {openSections.price && (
          <>
            <div className="slider-bar">
              <input type="range" min="0" max="200" />
            </div>
            <div className="range-inputs">
              <input type="text" placeholder="180 AED" />
              <span>–</span>
              <input type="text" placeholder="180 AED" />
            </div>
          </>
        )}
      </div>

      {/* Discount */}
      <div className="section">
        <div
          className="section-header"
          onClick={() => toggleSection("discount")}
        >
          Discount <span>{openSections.discount ? "-" : "+"}</span>
        </div>
        {openSections.discount && (
          <div className="range-inputs">
            <input type="text" placeholder="-" />
            <input type="text" placeholder="45% Off" />
          </div>
        )}
      </div>

      <button className="search-btn">Search</button>
    </div>
  );
};

export default CategoriesSidebar;
