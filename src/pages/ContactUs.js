// src/pages/ContactUs.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import './ContactUs.css';
import ContactForm from '../components/ContactForm';

import bannerContactUs from '../assets/photos/neighborhood_freephoto.jpg';

const ContactUs = () => {
  const { t } = useTranslation();

  return (
    <div className="contact-us">
      <div className="banner">
        <img src={bannerContactUs} alt="Banner" className="banner-image" />
      </div>
      <div className="slogan-banner"> 
        <h2>{t('contactUs.bannerSlogan1')}</h2>
        <h3>{t('contactUs.bannerSlogan2')}</h3>
      </div>
      <div>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactUs;