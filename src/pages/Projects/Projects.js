import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [selectedTech, setSelectedTech] = useState('All');

  const technologies = ['All', 'React', 'CSS', 'JavaScript', 'Node.js', 'Express', 'MongoDB', 'Python', 'Django', 'PostgreSQL', 'C#', 'ASP.Net MVC', 'MySQL'];

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const url = selectedTech === 'All'
          ? 'http://localhost:5000/api/projects'
          : `http://localhost:5000/api/projects?tech=${selectedTech}`;

        const response = await axios.get(url);
        console.log('Projects fetched:', response.data);
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, [selectedTech]);

  const handleFilterChange = (tech) => {
    setSelectedTech(tech);
  };

  return (
    <div className="projects-page">
      <h1>My Projects</h1>
      <div className="filter-buttons">
        {technologies.map(tech => (
          <button
            key={tech}
            onClick={() => handleFilterChange(tech)}
            className={selectedTech === tech ? 'active' : ''}
          >
            {tech}
          </button>
        ))}
      </div>
      <div className="projects-list">
        {projects.map((project) => (
          <div key={project._id} className="project-card">
            {project.image ? (
              <img src={`http://localhost:5000/uploads/${project.image}`} alt={project.title} className="project-image" />
            ) : (
              <div className="no-image">No Image Available</div>
            )}
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="view-link">
              View Project
            </a>
            <div className="project-tech">
              {project.technologies.join(', ')}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
