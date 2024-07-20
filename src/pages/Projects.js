import React, { useState } from 'react';
import './Projects.css';

import bannerProjects from '../assets/photos/house2_freephoto.jpg';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState('');

  const projectData = [
    {
      title: 'Maplewood Estate',
      cover: 'https://via.placeholder.com/440x345',
      album: [
        'https://via.placeholder.com/1200x600',
        'https://via.placeholder.com/1200x600',
        'https://via.placeholder.com/1200x600',
      ],
    },
    {
      title: 'Sunset Villa',
      cover: 'https://via.placeholder.com/440x345',
      album: [
        'https://via.placeholder.com/1200x600',
        'https://via.placeholder.com/1200x600',
        'https://via.placeholder.com/1200x600',
      ],
    },
    {
      title: 'Hillside Retreat',
      cover: 'https://via.placeholder.com/440x345',
      album: [
        'https://via.placeholder.com/1200x600',
        'https://via.placeholder.com/1200x600',
        'https://via.placeholder.com/1200x600',
      ],
    },
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    setSlideDirection('');
  };

  const handleCloseAlbum = () => {
    setSelectedProject(null);
  };

  const handlePrevImage = () => {
    setSlideDirection('prev');
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex - 1 + selectedProject.album.length) % selectedProject.album.length);
      setSlideDirection('');
    }, 500);
  };

  const handleNextImage = () => {
    setSlideDirection('next');
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % selectedProject.album.length);
      setSlideDirection('');
    }, 500);
  };

  const handleThumbnailClick = (index) => {
    if (index > currentImageIndex) {
      setSlideDirection('next');
    } else if (index < currentImageIndex) {
      setSlideDirection('prev');
    }
    setTimeout(() => {
      setCurrentImageIndex(index);
      setSlideDirection('');
    }, 500);
  };

  return (
    <div className="projects">
      <div className="banner">
        <img src={bannerProjects} alt="Banner" className="banner-image" />
      </div>
      <div className="slogan-banner">
        <h2>OUR PROJECTS</h2>
      </div>
      <div className="projects-container">
        <div className="projects-section">
          {projectData.map((project, index) => (
            <div className="project-item" key={index} onClick={() => handleProjectClick(project)}>
              <img src={project.cover} alt={project.title} />
              <h3>{project.title}</h3>
            </div>
          ))}
        </div>
      </div>
      {selectedProject && (
        <div className="album-overlay" onClick={handleCloseAlbum}>
          <button className="close-button" onClick={handleCloseAlbum}>×</button>
          <div className="album-container" onClick={(e) => e.stopPropagation()}>
            <div className="album-image-container">
              <button className="nav-button prev-button" onClick={handlePrevImage}>&#8249;</button>
              <img
                src={selectedProject.album[currentImageIndex]}
                alt={`${selectedProject.title} ${currentImageIndex + 1}`}
                className={slideDirection}
              />
              <button className="nav-button next-button" onClick={handleNextImage}>&#8250;</button>
            </div>
            <div className="album-thumbnails">
              {selectedProject.album.map((image, index) => (
                <img
                  src={image}
                  alt={`${selectedProject.title} ${index + 1}`}
                  key={index}
                  onClick={() => handleThumbnailClick(index)}
                  className={currentImageIndex === index ? 'active-thumbnail' : ''}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
