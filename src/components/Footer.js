// src/components/Footer.js
import React from 'react';
import './Footer.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-info">
          <h3>OFFICE HOURS</h3>
          <p>Mon-Fri: 7:00-18:00</p>
          <p>Sun: closed</p>
        </div>
        <div className="footer-info">
          <h3>TCSC Construction Ltd.</h3>
          <p>XXX-XXXX ABC Drive, Burnaby, BC</p>
          <p>V1X 1X1</p>
          <p>000-000-0000</p>
          <p>XXXXXXX@gmail.com</p>
        </div>
        <div className="footer-info">
          <h3>WORKING AREAS</h3>
          <p>Serving the Greater Lower Mainland Vancouver including Richmond, Burnaby, and Port Coquitlam.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
