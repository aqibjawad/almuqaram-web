import React, { useState, useEffect } from "react";
import "./header.css";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu when clicking outside or changing route
  useEffect(() => {
    const closeMenu = () => setMenuOpen(false);

    // Close menu when route changes
    closeMenu();

    // Add event listener to close menu when clicking outside
    document.addEventListener("click", (e) => {
      const isNavLink = e.target.closest(".nav-links");
      const isMenuIcon = e.target.closest(".menu-icon");

      if (!isNavLink && !isMenuIcon) {
        closeMenu();
      }
    });

    return () => {
      document.removeEventListener("click", closeMenu);
    };
  }, [location]);

  const toggleMenu = (e) => {
    e.stopPropagation();
    setMenuOpen(!menuOpen);
  };

  // Function to check if the link is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  // Style for active links
  const activeLinkStyle = {
    color: "#30AFB8",
    fontWeight: "700",
  };

  return (
    <header className="header shadow-sm">
      <div className="header-container">
        {/* Logo */}
        <Link to="/" className="logo">
          <img src="/logo.png" alt="Logo" />
        </Link>

        {/* Navigation Links */}
        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            style={isActive("/") ? activeLinkStyle : {}}
          >
            Home
          </Link>
          <Link
            to="/about-us"
            onClick={() => setMenuOpen(false)}
            style={isActive("/about-us") ? activeLinkStyle : {}}
          >
            About Us
          </Link>
          <Link
            to="/certifications"
            onClick={() => setMenuOpen(false)}
            style={isActive("/certifications") ? activeLinkStyle : {}}
          >
            Certifications
          </Link>
          <Link
            to="/products"
            onClick={() => setMenuOpen(false)}
            style={isActive("/products") ? activeLinkStyle : {}}
          >
            Products
          </Link>
          <Link
            to="/brands"
            onClick={() => setMenuOpen(false)}
            style={isActive("/brands") ? activeLinkStyle : {}}
          >
            Brands
          </Link>
          <Link
            to="/gallery"
            onClick={() => setMenuOpen(false)}
            style={isActive("/gallery") ? activeLinkStyle : {}}
          >
            Gallery
          </Link>
          <button className="business-button-header">
            <Link
              to="/contact-us"
              style={{ color: "white", textDecoration: "none" }}
            >
              Contact Us
            </Link>
          </button>
        </nav>

        {/* Menu Toggle Button */}
        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? (
            <AiOutlineClose size={24} />
          ) : (
            <AiOutlineMenu size={24} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
