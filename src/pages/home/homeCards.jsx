import React from "react";
import Cards from "../../components/cards/Cards";
import "./index.css";

const HomeCards = () => {
  const productData = [
    {
      image: "/tissue.png",
      title: "SoftCare Maxi Roll - Embossed",
      description: "1 Ply, 200 x 230 mm 350 sheets",
      packing: "1 x 6",
    },
    {
      image: "/tissue.png",
      title: "SoftCare Toilet Roll - Premium",
      description: "2 Ply, 100 x 100 mm 150 sheets",
      packing: "1 x 10",
    },
    {
      image: "/tissue.png",
      title: "SoftCare Toilet Roll - Premium",
      description: "2 Ply, 100 x 100 mm 150 sheets",
      packing: "1 x 10",
    },
    {
      image: "/tissue.png",
      title: "SoftCare Toilet Roll - Premium",
      description: "2 Ply, 100 x 100 mm 150 sheets",
      packing: "1 x 10",
    },
    {
      image: "/tissue.png",
      title: "SoftCare Toilet Roll - Premium",
      description: "2 Ply, 100 x 100 mm 150 sheets",
      packing: "1 x 10",
    },
    // Add more products as needed
  ];

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
