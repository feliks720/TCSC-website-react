// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Home.css'; // Import the CSS file for styling

import banner_photo1 from '../assets/photos/bannerHome/house_ext_freephoto.jpg';
import banner_photo2 from '../assets/photos/bannerHome/interior_livingRM_freephoto.jpg';
import banner_photo3 from '../assets/photos/bannerHome/vancouverDT_freephoto.jpg';

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
            <img src={banner_photo1} alt="Banner 1" /> 
          </div>
          <div>
            <img src={banner_photo2} alt="Banner 1" />
          </div>
          <div>
            <img src={banner_photo3} alt="Banner 1" />
          </div>
        </Carousel>
      </div>
      <div className="slogan-container">
        <div className="slogan">
          <h2>HIGHLY-PRINCIPLED CUSTOM HOME BUILDER</h2>
          <h2>DEPENDABLE CONSTRUCTION SERVICES SINCE 2013</h2>
          <Link to="/contact-us" className="get-quote-button">Get a Quote</Link>
        </div>
      </div>
      <h1>Welcome to TCSC Construction</h1>
      <p>Your trusted partner in home building.</p>

      <div className="introduction-container">
        <div className="introduction">
          <div className="introduction-text">
            <h2>Our History</h2>
            <h3>A Decade of Excellence in Home Building Across the Greater Vancouver Area</h3>
            <p>
              TCSC Construction was founded in 2013 by Ms. Barbara Cheng with a mission to redefine the standards of quality and craftsmanship in the construction industry. Our journey began with a vision to deliver exceptional homes and foster strong, trust-based relationships with our clients.
            </p>
            <p>
              Through dedication, hard work, and a steadfast commitment to our core values, we have established ourselves as a trusted name in the Greater Vancouver area. Our award-winning team is known for its outstanding workmanship, integrity, and professionalism.
            </p>
            <p>
              Since our inception, we have completed numerous projects, each reflecting our unwavering commitment to excellence and customer satisfaction. At TCSC Construction, we build more than homes; we build dreams.
            </p>
          </div>
          <div className="introduction-stats">
            <div className="stat">
              <h3>2013</h3>
              <p>Since</p>
            </div>
            <div className="stat">
              <h3>40</h3>
              <p>Collaborators</p>
            </div>
            <div className="stat">
              <h3>500+</h3>
              <p>Projects</p>
            </div>
            <div className="stat">
              <h3>300+</h3>
              <p>Customers</p>
            </div>
          </div>
        </div>
      </div>

      <div className="image-gallery">
        <img src="https://via.placeholder.com/400x300" alt="Placeholder 1" />
        <img src="https://via.placeholder.com/400x300" alt="Placeholder 2" />
        <img src="https://via.placeholder.com/400x300" alt="Placeholder 3" />
        <img src="https://via.placeholder.com/400x300" alt="Placeholder 4" />
        <img src="https://via.placeholder.com/400x300" alt="Placeholder 5" />
        <img src="https://via.placeholder.com/400x300" alt="Placeholder 6" />
        <img src="https://via.placeholder.com/400x300" alt="Placeholder 7" />
        <img src="https://via.placeholder.com/400x300" alt="Placeholder 8" />
        <img src="https://via.placeholder.com/400x300" alt="Placeholder 9" />
        <img src="https://via.placeholder.com/400x300" alt="Placeholder 10" />
      </div>
    </div>
  );
};

export default Home;
