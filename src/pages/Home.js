// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Home.css'; // Import the CSS file for styling

const Home = () => {
  return (
    <div className="home">
      <div className="banner-carousel">
        <Carousel
          showArrows={true}
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
        >
          <div>
            <img src="https://via.placeholder.com/1920x600" alt="Banner 1" />
          </div>
          <div>
            <img src="https://via.placeholder.com/1920x600" alt="Banner 2" />
          </div>
          <div>
            <img src="https://via.placeholder.com/1920x600" alt="Banner 3" />
          </div>
        </Carousel>
      </div>
      <div className="slogan-container">
        <div className="slogan">
          <h2>HIGHLY-PRINCIPLED CUSTOM HOME BUILDER</h2>
          <h2>DEPENDABLE CONSTRUCTION SERVICES SINCE 2000BC</h2>
          <Link to="/contact-us" className="get-quote-button">Get a Quote</Link>
        </div>
      </div>
      {/* <h1>Welcome to TCSC Construction</h1>
      <p>Your trusted partner in home building.</p> */}
    </div>
  );
};

export default Home;
