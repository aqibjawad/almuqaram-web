import React, { useState } from 'react';
import './index.css';

const ContactForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    website: '',
    productName: ''
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleContinue = async () => {
    try {
      // Send email with form data
      const emailData = {
        to: 'aqibjawad123@gmail.com', // Replace with your email
        subject: 'New Contact Form Submission',
        body: `
          New contact form submission:
          
          Full Name: ${formData.fullName}
          Email: ${formData.email}
          Phone: ${formData.phone}
          Website: ${formData.website}
          Product Name: ${formData.productName}
        `
      };

      // In a real application, you would send this to your backend
      console.log('Email data to send:', emailData);
      
      // Clear cart (assuming cart is stored in localStorage or state)
      // If using localStorage:
      // localStorage.removeItem('cart');
      
      // If cart is managed by parent component, you would call a clearCart function
      // clearCart();
      
      alert('Form submitted successfully! Cart has been cleared.');
      
      // Move to next step
      setStep(2);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form. Please try again.');
    }
  };
  
  return (
    <div className="form-container">
      <div className="form-sidebar">
        <h1>Let Us Know Your Product Goals — We'll Handle the Rest.</h1>
      </div>
      
      <div className="form-content">
        <div className="step-indicator">
          <div className={`step-number ${step === 1 ? 'active' : ''}`}>
            <span>1</span>
          </div>
          <span className="step-text">Contact Info</span>
          {/* <div className="step-line"></div>
          <div className={`step-number ${step === 2 ? 'active' : ''}`}>
            <span>2</span>
          </div> */}
          {/* <span className="step-text">Business Details</span> */}
        </div>
        
        <div className="form-fields">
          {step === 1 && (
            <>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="fullName">Full Name</label>
                  <input 
                    type="text" 
                    id="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="website">Website URL</label>
                  <input 
                    type="url" 
                    id="website"
                    value={formData.website}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="productName">Your Product</label>
                  <div style={{
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    padding: '10px',
                    marginTop: '8px',
                    backgroundColor: '#f9f9f9',
                    maxHeight: '120px',
                    overflowY: 'auto'
                  }}>
                    <strong>Products in Cart:</strong>
                    {(() => {
                      try {
                        const cart = JSON.parse(localStorage.getItem('cart') || '[]');
                        if (cart.length === 0) {
                          return <div style={{ color: '#666', fontStyle: 'italic' }}>No products in cart</div>;
                        }
                        return cart.map((item, index) => (
                          <div key={index} style={{ 
                            padding: '4px 0', 
                            borderBottom: index < cart.length - 1 ? '1px solid #eee' : 'none',
                            color: '#333'
                          }}>
                            • {item.title || item.name || item.productName || `Product ${index + 1}`}
                          </div>
                        ));
                      } catch (error) {
                        console.error('Error reading cart from localStorage:', error);
                        return <div style={{ color: '#666', fontStyle: 'italic' }}>Error loading products</div>;
                      }
                    })()}
                  </div>
                </div>
              </div>
              
              <div className="consent-text">
                By providing your number, you agree to be contacted by ALMUQARRAM Hygienic Products Industry LLC via call or text for partnership 
                and business-related purposes. We respect your privacy — your number will not be shared with third parties. Message and data rates 
                may apply. Message frequency may vary. (<a href="#" className="privacy-link">Privacy Policy</a>)
              </div>
              
              <button type="button" className="continue-btn" onClick={handleContinue}>Continue</button>
            </>
          )}
          
          {step === 2 && (
            <>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="business">Business Name</label>
                  <input type="text" id="business" />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="industry">Industry</label>
                  <input type="text" id="industry" />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" rows="4"></textarea>
                </div>
              </div>
              
              <div className="form-actions">
                <button type="button" className="back-btn" onClick={() => setStep(1)}>Back</button>
                <button type="button" className="submit-btn">Submit</button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;