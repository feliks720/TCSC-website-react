// src/pages/AboutUs.js
import React from 'react';
import './AboutUs.css';

import bannerAboutUs from '../assets/photos/interiorKitchen_freephoto.jpg';

import localBuilderIcon from '../assets/icons/local-builder-icon.png';
import hereToStayIcon from '../assets/icons/here-to-stay-icon.png';
import solidReputationIcon from '../assets/icons/solid-reputation-icon.png';
import licensedBondedIcon from '../assets/icons/licensed-bonded-icon.png';
import warrantyIcon from '../assets/icons/warranty-icon.png';
import reasonablePricesIcon from '../assets/icons/reasonable-prices-icon.png';

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="banner">
        <img src={bannerAboutUs} alt="Banner" className="banner-image" />
      </div>
      <div className="slogan-banner">
        <h2>THE QUALITY IS OUR PRIORITY. OUR CORE VALUES. OUR BELIEFS.</h2>
      </div>
      <div className="values-container">
        <div className="values-section">
          <div className="value-item">
            <img src={localBuilderIcon} alt="Local Builder" />
            <h3>LOCAL BUILDER</h3>
            <p>
              Our experience includes custom home building, project management, and land development throughout the area, including Vancouver, Richmond, Burnaby, and Port Coquitlam.
            </p>
          </div>
          <div className="value-item">
            <img src={hereToStayIcon} alt="Here to Stay" />
            <h3>HERE TO STAY</h3>
            <p>
              TCSC Construction has established itself as a trusted custom home building company in 2005 and continues to grow and evolve.
            </p>
          </div>
          <div className="value-item">
            <img src={solidReputationIcon} alt="Solid Reputation" />
            <h3>SOLID REPUTATION</h3>
            <p>
              TCSC Construction has built a solid reputation for integrity and exceptional customer service.
            </p>
          </div>
          <div className="value-item">
            <img src={licensedBondedIcon} alt="Licensed Builder" />
            <h3>LICENSED AND BONDED BUILDER</h3>
            <p>
              TCSC Construction is a licensed and bonded builder, employing the finest craftsmen.
            </p>
          </div>
          <div className="value-item">
            <img src={warrantyIcon} alt="Warranty" />
            <h3>WARRANTY</h3>
            <p>
              TCSC Construction offers 2-5-10 National Home Warranty, ensuring peace of mind for our clients.
            </p>
          </div>
          <div className="value-item">
            <img src={reasonablePricesIcon} alt="Reasonable Prices" />
            <h3>REASONABLE PRICES</h3>
            <p>
              We take pride in building high-quality custom homes at reasonable prices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
