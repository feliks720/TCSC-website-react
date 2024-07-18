// src/pages/OurServices.js
import React from 'react';
import './OurServices.css';

import bannerOurServices from '../assets/photos/interiorBDRM_freephoto.jpg';   // Banner image for Our Services page

import homeBuildManagementIcon from '../assets/icons/home-build-management.png';
import renovationIcon from '../assets/icons/renovation.png';
import landscapingIcon from '../assets/icons/landscaping.png';

const OurServices = () => {
  return (
    <div className="our-services">
      <div className="banner">
        <img src={bannerOurServices} alt="Banner" className="banner-image" />
      </div>
      <div className="slogan-banner">
        <h2>OUR SERVICES</h2>
        <h3>HIGHLY-PRINCIPLED CONSTRUCTION</h3>
      </div>
      <div className="services-container">
        <div className="services-section">
          <div className="service-item">
            <img src={homeBuildManagementIcon} alt="Home Build Management" />
            <h3>Home Build Management</h3>
            <p>
              We offer comprehensive home build management services, ensuring your project is completed on time and within budget.
            </p>
          </div>
          <div className="service-item">
            <img src={renovationIcon} alt="Renovation" />
            <h3>Renovation</h3>
            <p>
              Our renovation services are designed to transform your existing space into the home of your dreams.
            </p>
          </div>
          <div className="service-item">
            <img src={landscapingIcon} alt="Landscaping" />
            <h3>Landscaping</h3>
            <p>
              We provide professional landscaping services to enhance the beauty and functionality of your outdoor spaces.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
