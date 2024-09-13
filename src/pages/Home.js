// src/pages/Home.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Home.css'; // Import the CSS file for styling

import banner_photo1 from '../assets/photos/bannerHome/house_ext_freephoto.jpg';
import banner_photo2 from '../assets/photos/bannerHome/interior_livingRM_freephoto.jpg';
import banner_photo3 from '../assets/photos/bannerHome/vancouverDT_freephoto.jpg';

const Home = () => {
  const { t } = useTranslation();

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
          <h2>{t('home.slogan1')}</h2>
          <h2>{t('home.slogan2')}</h2>
          <Link to="/contact-us" className="get-quote-button">{t('home.getQuote')}</Link>
        </div>
      </div>
      <h1>{t('home.welcome')}</h1>
      <p>{t('home.trustedPartner')}</p>

      <div className="introduction-container">
        <div className="introduction">
          <div className="introduction-text">
            <h2>{t('home.ourHistory')}</h2>
            <h3>{t('home.decadeOfExcellence')}</h3>
            <p>{t('home.introParagraph1')}</p>
            <p>{t('home.introParagraph2')}</p>
            <p>{t('home.introParagraph3')}</p>
          </div>
          <div className="introduction-stats">
            <div className="stat">
              <h3>2013</h3>
              <p>{t('home.since')}</p>
            </div>
            <div className="stat">
              <h3>40</h3>
              <p>{t('home.collaborators')}</p>
            </div>
            <div className="stat">
              <h3>500+</h3>
              <p>{t('home.projects')}</p>
            </div>
            <div className="stat">
              <h3>300+</h3>
              <p>{t('home.customers')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="image-gallery">
        <img src="https://via.placeholder.com/400x300" alt="Placeholder 1" />
        <img src="https://via.placeholder.com/400x300" alt="Placeholder 2" />
        <img src="https://via.placeholder.com/400x300" alt="Placeholder 3" />
        <img src="https://via.placeholder.com/400x300" alt="Placeholder 4" />
      </div> */}
    </div>
  );
};

export default Home;
