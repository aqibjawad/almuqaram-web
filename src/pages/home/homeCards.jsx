import React from "react";
import Cards from "../../components/cards/Cards";
import "./index.css";

// Import the product data
import productData from "../../components/productData/productData";

const HomeCards = () => {
  // Limit products to only the first 6 items
  const limitedProducts = productData.slice(0, 8);
  
  return (
    <div id="products">
      <div className="product-head mt-5">Products</div>
      <div className="product-descrp mt-3">
        AL MUQARRAM Hygienic Products Industry LLC is one of the fastest-
      </div>
      <div className="product-descrp mt-2">
        growing converters of hygienic paper products dealing in two Brands
      </div>
      <div className="mt-5">
        <Cards products={limitedProducts} />
      </div>
    </div>
  );
};

export default HomeCards;