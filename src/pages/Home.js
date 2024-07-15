// src/pages/Home.js
import React from 'react';
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
      <h1>Welcome to TCSC Construction</h1>
      <p>Your trusted partner in home building.</p>
    </div>
  );
};

export default Home;
