import React from "react";
import "./index.css";

const ContactForm = () => {
  return (
    <div>
      <div className="contact-container-head">
        <div className="contact-left-title">
          <p className="contact-subtitle">Contact Us</p>
          <h2 className="contact-title">Get in Touch</h2>
        </div>
        <div className="contact-right-title">
          <p className="contact-description">
            We're here to assist you with any inquiries, partnership
            opportunities, or product information. Reach out to us, and our
            dedicated team will respond promptly to support your needs.
          </p>
        </div>
      </div>
      <div className="contact-container">
        <div className="contact-left">
          <div className="contact-info">
            <div className="contact-method">
              <span className="icon">
                {" "}
                <img style={{height:"70px", width:"70px"}} src="/email.jpg" />{" "}
              </span>
              <div>
                <label>EMAIL US</label>
                <p>info@softcareworld.com</p>
              </div>
            </div>
            <div className="contact-method">
              <span className="icon">
                {" "}
                <img style={{height:"70px", width:"70px"}} src="/phone.jpg" />{" "}
              </span>
              <div>
                <label>PHONE NUMBER</label>
                <p>+971 67489551</p>
              </div>
            </div>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.8295374875016!2d55.4833982!3d25.410201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef5f59c4f45e6df%3A0xadd1b888e0102ac!2sAl%20Muqarram%20Hygienic%20Products%20Industry%20LLC!5e0!3m2!1sen!2sae!4v1706536161125!5m2!1sen!2sae"
            width="100%"
            height="200"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
          <div className="social-links">
            <span>Connect with us:</span>
            <div className="icons">
              <img style={{height:"100px", width:"300px"}} src='/social.jpg' />
            </div>
          </div>
        </div>

        <div className="contact-right">
          <div className="form-header">
            <span className="step active">1</span>
            <span className="step-label active">Contact Info</span>
            <span className="divider"></span>
            <span className="step">2</span>
            <span className="step-label">Business Details</span>
          </div>
          <form className="contact-form">
            <label>Full Name</label>
            <input type="text" name="fullName" />

            <label>Website URL</label>
            <input type="url" name="website" />

            <label>Phone Number</label>
            <input type="tel" name="phone" />

            <label>Email</label>
            <input type="email" name="email" />

            <p className="disclaimer">
              By providing your number, you agree to be contacted by AL MUQARRAM
              Hygienic Products Industry LLC via call or text for partnership
              and business-related purposes. We respect your privacy — your
              number will not be shared with third parties. Messages and data
              rates may apply. Message frequency may vary.{" "}
              <a href="#">(Privacy Policy)</a>
            </p>
            <button type="submit">Continue</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
