// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Import the CSS file for styling

const NavBar = () => {
  return (
    <header className="navbar">
      <div className="navbar-top">
        <div className="navbar-left">
          <img src="https://via.placeholder.com/500x500" alt="Company Logo" className="navbar-logo" />
          <Link to="/" className="navbar-company-name">TCSC Construction</Link>
        </div>
        <div className="navbar-contact">
          <a href="tel:000-000-0000">000-000-0000</a>
        </div>
      </div>
      <div className="navbar-bottom">
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/about-us" className="navbar-link">About Us</Link>
          </li>
          <li className="navbar-item">
            <Link to="/our-services" className="navbar-link">Our Services</Link>
          </li>
          <li className="navbar-item">
            <Link to="/projects" className="navbar-link">Projects</Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact-us" className="navbar-link">Contact Us</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default NavBar;
