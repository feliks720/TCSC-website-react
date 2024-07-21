// src/components/Footer.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import './Footer.css'; // Import the CSS file for styling

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-info">
          <h3>{t('footer.officeHours')}</h3>
          <p>{t('footer.officeHoursDetails')}</p>
        </div>
        <div className="footer-info">
          <h3>{t('footer.companyName')}</h3>
          <p>{t('footer.address')}</p>
          <p>{t('footer.postalCode')}</p>
          <p>{t('footer.phoneNumber')}</p>
          <p>{t('footer.email')}</p>
        </div>
        <div className="footer-info">
          <h3>{t('footer.workingAreas')}</h3>
          <p>{t('footer.workingAreasDetails')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
