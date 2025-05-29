import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './card.css';

const Card = ({ image, title, description, packing, price, id }) => {
  const [isAdded, setIsAdded] = useState(false);
  const navigate = useNavigate(); // Initialize navigate hook

  const handleAddToCart = () => {
    const cartItem = {
      id: id || Date.now(), // Use provided id or generate one
      image: image || "/tissue.png",
      title,
      description,
      packing,
      price,
      quantity: 1,
      addedAt: new Date().toISOString()
    };

    try {
      const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
      const existingItemIndex = existingCart.findIndex(item => item.id === cartItem.id);
      
      if (existingItemIndex !== -1) {
        // If item already exists, increase quantity
        existingCart[existingItemIndex].quantity += 1;
      } else {
        // Add new item to cart
        existingCart.push(cartItem);
      }
      
      localStorage.setItem('cart', JSON.stringify(existingCart));
      console.log('Item added to cart:', cartItem);
      
      setIsAdded(true);
      
      // Show success state briefly, then redirect to cart
      setTimeout(() => {
        setIsAdded(false);
        navigate('/cart-page'); // Redirect to cart page
      }, 1500); // Reduced time to 1.5 seconds for better UX
      
    } catch (error) {
      console.error('Error adding to cart:', error);
      // Even if there's an error, you might still want to redirect
      setTimeout(() => {
        navigate('/cart-page');
      }, 1500);
    }
  };

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
          <p className="product-packing text-white">Packing: {packing}</p>
          {price && <p className="product-price text-white">Price: {price}</p>}
          
          <button
            className={`add-to-cart-btn ${isAdded ? 'added' : ''}`}
            onClick={handleAddToCart}
            disabled={isAdded}
          >
            {isAdded ? '✓ Added!' : 'Add to Cart'}
          </button>
        </div>
      </div>
      
      <div className="corner-icon">
        <span className="arrow-icon">→</span>
      </div>
    </div>
  );
};

export default Card;