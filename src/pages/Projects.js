// src/pages/Projects.js
import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <div className="projects">
      <div className="banner">
        <img src="https://via.placeholder.com/1920x600" alt="Banner" className="banner-image" />
      </div>
      <div className="slogan-banner">
        <h2>OUR PROJECTS</h2>
      </div>
      <div className="projects-container">
        <div className="projects-section">
          {Array.from({ length: 10 }).map((_, index) => (
            <div className="project-item" key={index}>
              <img src="https://via.placeholder.com/300x200" alt={`Project ${index + 1}`} />
              <h3>Project {index + 1}</h3>
              <p>Project description goes here.</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
