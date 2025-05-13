import React, { useState } from 'react';
import './index.css';

const ContactForm = () => {
  const [step, setStep] = useState(1);
  
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
          <div className="step-line"></div>
          <div className={`step-number ${step === 2 ? 'active' : ''}`}>
            <span>2</span>
          </div>
          <span className="step-text">Business Details</span>
        </div>
        
        <div className="form-fields">
          {step === 1 && (
            <>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="fullName">Full Name</label>
                  <input type="text" id="fullName" />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="website">Website URL</label>
                  <input type="url" id="website" />
                </div>
              </div>
              
              <div className="consent-text">
                By providing your number, you agree to be contacted by ALMUQARRAM Hygienic Products Industry LLC via call or text for partnership 
                and business-related purposes. We respect your privacy — your number will not be shared with third parties. Message and data rates 
                may apply. Message frequency may vary. (<a href="#" className="privacy-link">Privacy Policy</a>)
              </div>
              
              <button type="button" className="continue-btn" onClick={() => setStep(2)}>Continue</button>
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