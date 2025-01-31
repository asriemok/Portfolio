import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ title, description, image, link, technologies }) => {
  // If title is undefined, provide default values or handle the error
  if (!title) {
    return null; // or display a default placeholder card
  }

  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <h3>{title}</h3>
      <p>{description}</p>
      <p><strong>Technologies:</strong> {technologies.join(', ')}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        View Project
      </a>
    </div>
  );
};

export default ProjectCard;
