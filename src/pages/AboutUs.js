// src/pages/AboutUs.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import './AboutUs.css';

import bannerAboutUs from '../assets/photos/interiorKitchen_freephoto.jpg';

import localBuilderIcon from '../assets/icons/local-builder-icon.png';
import hereToStayIcon from '../assets/icons/here-to-stay-icon.png';
import solidReputationIcon from '../assets/icons/solid-reputation-icon.png';
import licensedBondedIcon from '../assets/icons/licensed-bonded-icon.png';
import warrantyIcon from '../assets/icons/warranty-icon.png';
import reasonablePricesIcon from '../assets/icons/reasonable-prices-icon.png';

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <div className="about-us">
      <div className="banner">
        <img src={bannerAboutUs} alt="Banner" className="banner-image" />
      </div>
      <div className="slogan-banner">
        <h2>{t('aboutUs.slogan')}</h2>
      </div>
      <div className="values-container">
        <div className="values-section">
          {t('aboutUs.values', { returnObjects: true }).map((value, index) => (
            <div className="value-item" key={index}>
              <img src={
                index === 0 ? localBuilderIcon :
                index === 1 ? hereToStayIcon :
                index === 2 ? solidReputationIcon :
                index === 3 ? licensedBondedIcon :
                index === 4 ? warrantyIcon : reasonablePricesIcon
              } alt={value.title} />
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
