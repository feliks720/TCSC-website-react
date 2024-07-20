import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import logo from '../assets/TCSC logo.PNG';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageSwitch = () => {
    // Dummy function for language switch
    alert('语言切换功能开发中，敬请期待');
  };

  return (
    <header className="navbar">
      <div className="navbar-top">
        <div className="navbar-left">
          <img src={logo} alt="Company Logo" className="navbar-logo" />
          <Link to="/" className="navbar-company-name">TCSC Construction</Link>
        </div>
        <button className="language-switcher" onClick={handleLanguageSwitch}>EN/中文</button>
        <div className="navbar-toggle" onClick={toggleMenu}>
          &#9776;
        </div>
      </div>
      <div className={`navbar-bottom ${isOpen ? 'open' : ''}`} ref={menuRef}>
        <ul className="navbar-menu">
          <li className="navbar-item" onClick={toggleMenu}>
            <Link to="/" className="navbar-link">Home</Link>
          </li>
          <li className="navbar-item" onClick={toggleMenu}>
            <Link to="/about-us" className="navbar-link">About Us</Link>
          </li>
          <li className="navbar-item" onClick={toggleMenu}>
            <Link to="/our-services" className="navbar-link">Our Services</Link>
          </li>
          <li className="navbar-item" onClick={toggleMenu}>
            <Link to="/projects" className="navbar-link">Projects</Link>
          </li>
          <li className="navbar-item" onClick={toggleMenu}>
            <Link to="/contact-us" className="navbar-link">Contact Us</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default NavBar;
