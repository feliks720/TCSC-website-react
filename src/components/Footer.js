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
      <div className="footer-credits">
        <p>
          Designed and Coded by UCA Team: <a href="https://github.com/feliks720" target="_blank" rel="noopener noreferrer">Feliks</a>, <a href="https://github.com/Jerry086" target="_blank" rel="noopener noreferrer">Jerry</a>, and <a href="https://github.com/Yuan223" target="_blank" rel="noopener noreferrer">Yuan</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
