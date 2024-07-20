import React from 'react';
import './ContactUs.css';
import ContactForm from '../components/ContactForm';

import bannerContactUs from '../assets/photos/neighborhood_freephoto.jpg';

const ContactUs = () => {
  return (
    <div className="contact-us">
      <div className="banner">
        <img src={bannerContactUs} alt="Banner" className="banner-image" />
      </div>
      <div className="slogan-banner"> 
        <h2>REACH OUT TODAY</h2>
        <h3>Let’s talk about your project</h3>
      </div>
      <div>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactUs;
