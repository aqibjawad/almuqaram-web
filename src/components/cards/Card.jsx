import React from 'react';
import './card.css';

const Card = ({ image, title, description, packing }) => {
  return (
    <div className="card-container">
      <div className="main-card">
        <div className="image-container">
          <img 
            src={image || "/tissue.png"} 
            alt={title} 
            className="product-image"
          />
        </div>

        <div className="product-info">
          <h2 className="product-title">{title}</h2> 
          <p className="product-description">{description}</p>
          <p className="product-packing">Packing: {packing}</p>
        </div>
      </div>

      <div className="corner-icon">
        <span className="arrow-icon">→</span>
      </div>
    </div>
  );
};

export default Card;
