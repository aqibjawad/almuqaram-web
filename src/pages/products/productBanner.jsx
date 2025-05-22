import React from "react";
import "./index.css"; // Import the external CSS

const ProductBanner = () => {
  return (
    <div className="product-banner">
      <img src="/productBanner.png" alt="Product Banner" className="banner-image" />
      <div className="banner-text">
        <h2>Our Product</h2>
        <p>Explore Our Hygiene Range</p>
      </div> 
    </div>
  );
};

export default ProductBanner;
