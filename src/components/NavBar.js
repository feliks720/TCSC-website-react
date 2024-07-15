// src/components/NavBar.js
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import logo from '../assets/TCSC logo.PNG'; // Ensure this path is correct

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="navbar">
      <div className="navbar-top">
        <div className="navbar-left">
          <img src={logo} alt="Company Logo" className="navbar-logo" />
          <Link to="/" className="navbar-company-name">TCSC Construction</Link>
        </div>
        <div className="navbar-contact">
          <a href="tel:000-000-0000">000-000-0000</a>
        </div>
        <div className="navbar-toggle" onClick={toggleMenu}>
          &#9776;
        </div>
      </div>
      <div className={`navbar-bottom ${isOpen ? 'open' : ''}`} ref={menuRef}>
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
