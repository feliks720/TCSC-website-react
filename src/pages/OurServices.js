// src/pages/OurServices.js
import React from 'react';
import './OurServices.css';

const OurServices = () => {
  return (
    <div className="our-services">
      <div className="banner">
        <img src="https://via.placeholder.com/1920x600" alt="Banner" className="banner-image" />
      </div>
      <div className="slogan-banner">
        <h2>OUR SERVICES</h2>
        <h3>HIGHLY-PRINCIPLED CONSTRUCTION</h3>
      </div>
      <div className="services-container">
        <div className="services-section">
          <div className="service-item">
            <img src="https://via.placeholder.com/50" alt="Home Build Management" />
            <h3>Home Build Management</h3>
            <p>
              We offer comprehensive home build management services, ensuring your project is completed on time and within budget.
            </p>
          </div>
          <div className="service-item">
            <img src="https://via.placeholder.com/50" alt="Renovation" />
            <h3>Renovation</h3>
            <p>
              Our renovation services are designed to transform your existing space into the home of your dreams.
            </p>
          </div>
          <div className="service-item">
            <img src="https://via.placeholder.com/50" alt="Landscaping" />
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
