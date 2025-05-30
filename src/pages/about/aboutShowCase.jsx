import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import './ProductShowcase.css';

const ProductShowcase = () => {
  return (
    <div className="product-showcase">
      <div className="content-wrapper">
        <div className="text-section">
          <h1 className="main-heading">
            We care for the world we serve
          </h1>
          
          <p className="description">
            SOFTCARE™ products are FSC® certified, ensuring responsible sourcing and environmental integrity from raw material to final packaging.
          </p>
          
          <div className="features-list">
            <div className="feature-item">
              <div className="feature-icon">
                <Check size={16} />
              </div>
              <span className="feature-text">Soft and skin-friendly</span>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">
                <Check size={16} />
              </div>
              <span className="feature-text">Made from FSC-certified virgin pulp</span>
            </div>
          </div>
          
          <button className="cta-button">
            See Our Practices
          </button>
        </div>
        
        <div className="image-section">
          <div className="product-image">
            <img 
              src="https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Premium tissue products with coffee setup"
              className="main-product-image"
            />
            <div className="tissue-box"></div>
            <div className="coffee-setup">
              <div className="coffee-cup"></div>
              <div className="glass"></div>
            </div>
          </div>
          
          <div className="explore-card">
            <div className="card-content">
              <h3 className="card-title">Explore Our Brands</h3>
              <p className="card-subtitle">Shop SOFTCARE Essentials</p>
            </div>
            <div className="card-arrow">
              <ArrowRight size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;