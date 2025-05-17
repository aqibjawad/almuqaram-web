import React, { useState, useEffect } from "react";
import "./header.css";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { Container } from "react-bootstrap";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [businessMode, setBusinessMode] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Function to check if the link is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  // Style for active links
  const activeLinkStyle = {
    color: "#30AFB8"
  };

  return (
    <header className="header shadow-sm py-3">
      <Container
        fluid
        className="px-3 px-md-5 justify-content-between align-items-center d-flex"
      >
        {/* logo */}
        <Link style={{ textDecoration: "none" }} to={"/"} className="logo">
          <div>
            <img src="/logo.png" alt="Logo" />
          </div>
        </Link>

        {/* menu bar */}
        <nav className={`nav-links px-3 ${menuOpen ? "open" : ""}`}>
          <Link 
            to="/" 
            onClick={toggleMenu}
            style={isActive("/") ? activeLinkStyle : {}}
          >
            Home
          </Link>
          <Link 
            to="/categories" 
            onClick={toggleMenu}
            style={isActive("/categories") ? activeLinkStyle : {}}
          >
            About Us
          </Link>
          <Link 
            to="/deals" 
            onClick={toggleMenu}
            style={isActive("/deals") ? activeLinkStyle : {}}
          >
            Our Values
          </Link>
          <Link 
            to="/about" 
            onClick={toggleMenu}
            style={isActive("/about") ? activeLinkStyle : {}}
          >
            Certifications
          </Link>
          <Link 
            to="/products" 
            onClick={toggleMenu}
            style={isActive("/products") ? activeLinkStyle : {}}
          >
            Products
          </Link>
          <Link 
            to="/brands" 
            onClick={toggleMenu}
            style={isActive("/brands") ? activeLinkStyle : {}}
          >
            Brands
          </Link>
          <Link 
            to="/gallery" 
            onClick={toggleMenu}
            style={isActive("/gallery") ? activeLinkStyle : {}}
          >
            Gallery
          </Link>
          {/* <Link 
            to="/contact-us" 
            onClick={toggleMenu}
            style={isActive("/contact-us") ? activeLinkStyle : {}}
          >
            Contact Us
          </Link> */}
          <button className="business-button-header">
            <Link to="contact-us" style={{ color: "white" }}>
              Contact Us
            </Link>
          </button>
        </nav>

        {/* toggle button */}
        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? (
            <AiOutlineClose size={30} />
          ) : (
            <AiOutlineMenu size={30} />
          )}
        </div>
      </Container>
    </header>
  );
};

export default Header;