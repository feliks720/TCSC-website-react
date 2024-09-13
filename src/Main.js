import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import OurServices from './pages/OurServices';
// import Projects from './pages/Projects';
import ContactUs from './pages/ContactUs';
import './App.css';

const Main = () => {
  const location = useLocation();

  return (
    <div className="main-content">
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="fade" timeout={300}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/our-services" element={<OurServices />} />
            {/* <Route path="/projects" element={<Projects />} /> */}
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default Main;
