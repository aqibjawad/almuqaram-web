import React from "react";
import Cards from "../../components/cards/Cards";
import "./index.css";

// Import the product data
import productData from "../../components/productData/productData";

const HomeCards = () => {
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
        <Cards products={productData} />
      </div>
    </div>
  );
};

export default HomeCards;