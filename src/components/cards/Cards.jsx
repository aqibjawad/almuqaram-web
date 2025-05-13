import React from "react";
import Card from "./Card";
import "./card.css"

const Cards = ({ products }) => {
  return (
    <div className="cards-wrapper">
      {products.map((product, index) => (
        <Card
          key={index}
          image={product.image}
          title={product.title}
          description={product.description}
          packing={product.packing}
        />
      ))}
    </div>
  );
};

export default Cards;
