// src/components/NavBar.js
import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './NavBar.css';
import logo from '../assets/TCSC logo.PNG';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageSwitch = () => {
    const newLang = i18n.language === 'en' ? 'zh' : 'en';
    i18n.changeLanguage(newLang);
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
            <Link to="/" className="navbar-link">{t('navbar.home')}</Link>
          </li>
          <li className="navbar-item" onClick={toggleMenu}>
            <Link to="/about-us" className="navbar-link">{t('navbar.aboutUs')}</Link>
          </li>
          <li className="navbar-item" onClick={toggleMenu}>
            <Link to="/our-services" className="navbar-link">{t('navbar.ourServices')}</Link>
          </li>
          {/* <li className="navbar-item" onClick={toggleMenu}>
            <Link to="/projects" className="navbar-link">{t('navbar.projects')}</Link>
          </li> */}
          <li className="navbar-item" onClick={toggleMenu}>
            <Link to="/contact-us" className="navbar-link">{t('navbar.contactUs')}</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default NavBar;
