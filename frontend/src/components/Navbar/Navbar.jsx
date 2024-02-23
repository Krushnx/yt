// Navbar.js

import React, { useState } from 'react';
import './Navbar.css'; // Import the CSS file for styling

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navbar ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
      <div className="navbar-container">
        <a href="/" className="logo">
          YourLogo
        </a>

        <div className={`nav-links ${isMobileMenuOpen ? 'mobile-menu' : ''}`}>
          <a href="/" className="nav-link" activeClassName="active">
            Home
          </a>
          <a href="/comment" className="nav-link" activeClassName="active">
            Comments 
          </a>
          <a href="/download" className="nav-link" activeClassName="active">
            Download 
          </a>
          <a href="/about" className="nav-link" activeClassName="active">
            About
          </a>
          <a href="/contact" className="nav-link" activeClassName="active">
            Contact Us
          </a>
        </div>

        {/* <button className="get-started-btn">Get Started</button> */}

        {/* Hamburger icon for mobile view */}
        <div className="hamburger-menu" onClick={handleMobileMenuToggle}>
          <div className={`bar ${isMobileMenuOpen ? 'change' : ''}`} />
          <div className={`bar ${isMobileMenuOpen ? 'change' : ''}`} />
          <div className={`bar ${isMobileMenuOpen ? 'change' : ''}`} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
