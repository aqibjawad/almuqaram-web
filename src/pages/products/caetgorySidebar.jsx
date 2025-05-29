import React, { useState } from "react";
import "./category.css"

const CategoriesFilter = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const categories = [
    "Facial Tissues",
    "Maxi Roll", 
    "Toilet Roll",
    "Kitchen Towel",
    "Interfold Towel",
    "Table Napkin",
    "Industrial Roll",
    "T-Tork",
    "Bed Roll",
    "Wipes",
    "Aluminium Foil",
    "Cling Film",
    "Aluminium Container",
    "Thermal Roll",
    "Sandwich Paper",
    "Garbage Bags",
    "Autocut",
    "Rectangle Box"
  ];

  const handleCheckboxChange = (category) => {
    setSelectedCategories(prev => 
      prev.includes(category)
        ? prev.filter(item => item !== category)
        : [...prev, category]
    );
  };

  const handleSearch = () => {
    console.log("Selected categories:", selectedCategories);
    // Add your search logic here
  };

  return (
    <div className="filter-sidebar">
      <div className="breadcrumb">Home / Products</div>
      <h2 className="sidebar-title">CATEGORIES</h2>
      
      <div className="categories-list">
        {categories.map((category, index) => (
          <div key={index} className="category-item">
            <label className="checkbox-container">
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() => handleCheckboxChange(category)}
              />
              <span className="checkmark"></span>
              <span className="category-text">{category}</span>
            </label>
          </div>
        ))}
      </div>

      <button className="search-btn" onClick={handleSearch}>
        Search ({selectedCategories.length})
      </button>
    </div>
  );
};

export default CategoriesFilter;