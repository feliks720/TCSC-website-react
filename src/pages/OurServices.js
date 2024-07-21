// src/pages/OurServices.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import './OurServices.css';

import bannerOurServices from '../assets/photos/interiorBDRM_freephoto.jpg';   // Banner image for Our Services page

import homeBuildManagementIcon from '../assets/icons/home-build-management.png';
import renovationIcon from '../assets/icons/renovation.png';
import landscapingIcon from '../assets/icons/landscaping.png';

const OurServices = () => {
  const { t } = useTranslation();

  return (
    <div className="our-services">
      <div className="banner">
        <img src={bannerOurServices} alt="Banner" className="banner-image" />
      </div>
      <div className="slogan-banner">
        <h2>{t('ourServices.slogan1')}</h2>
        <h3>{t('ourServices.slogan2')}</h3>
      </div>
      <div className="services-container">
        <div className="services-section">
          {t('ourServices.services', { returnObjects: true }).map((service, index) => (
            <div className="service-item" key={index}>
              <img src={
                index === 0 ? homeBuildManagementIcon :
                index === 1 ? renovationIcon : landscapingIcon
              } alt={service.title} />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
