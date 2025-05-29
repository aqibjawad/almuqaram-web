import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer-main-container mt-3">
            <div className="footer-main-content">
                {/* Company Info */}
                <div className="footer-company-section">
                    <div className="footer-logo-container">
                        <img src="/logo.png" alt="AL MUQARRAM Logo" className="footer-logo-img" />
                    </div>
                    <p className="footer-company-description">
                        Our fundamental business philosophy, standard quality, hardwearing comfort at a competitive cost pave way in manufacturing private labels for conservatively conscious clientele.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="footer-quicklinks-section">
                    <h3 className="footer-quicklinks-heading">QUICK LINKS</h3>
                    <ul className="footer-quicklinks-list">
                        <li><a href="#" className="footer-quicklink-item">Home</a></li>
                        <li><a href="#" className="footer-quicklink-item">About Us</a></li>
                        <li><a href="#" className="footer-quicklink-item">Our Brands</a></li>
                        <li><a href="#" className="footer-quicklink-item">Our Values</a></li>
                        <li><a href="#" className="footer-quicklink-item">Contact us</a></li>
                    </ul>
                </div>

                {/* Products */}
                <div className="footer-products-section">
                    <h3 className="footer-products-heading">PRODUCT & SERVICES</h3>
                    <ul className="footer-products-list">
                        <li><a href="#" className="footer-product-item">Facial Tissue</a></li>
                        <li><a href="#" className="footer-product-item">Mast Rolls</a></li>
                        <li><a href="#" className="footer-product-item">Toilet Roll</a></li>
                        <li><a href="#" className="footer-product-item">Folded Towel</a></li>
                        <li><a href="#" className="footer-product-item">Private Label</a></li>
                    </ul>
                </div>

                {/* Contact */}
                <div className="footer-contact-section">
                    <h3 className="footer-contact-heading">CONTACT</h3>
                    <address className="footer-contact-address">
                        Al Muqarram Hygienic<br />
                        Ajman, United Arab Emirates<br />
                        Phone: <a href="tel:+97167489551" className="footer-contact-link">+971 67489551</a><br />
                        Email: <a href="mailto:info@softcareworld.com" className="footer-contact-link">info@softcareworld.com</a>
                    </address>

                    <div className="footer-social-media">
                        <h4 className="footer-social-heading">SOCIAL MEDIA</h4>
                        <div className="footer-social-icons">
                            <a href="#" className="footer-social-icon"><FaFacebook /></a>
                            <a href="#" className="footer-social-icon"><FaTwitter /></a>
                            <a href="#" className="footer-social-icon"><FaInstagram /></a>
                            <a href="#" className="footer-social-icon"><FaLinkedin /></a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            {/* <div className="footer-copyright-section">
                <p className="footer-copyright-text">2023 © Midwest Tropical, Inc. All Rights Reserved. | <a href="#" className="footer-copyright-link">Terms & Conditions</a></p>
            </div> */}
        </footer>
    );
};

export default Footer;