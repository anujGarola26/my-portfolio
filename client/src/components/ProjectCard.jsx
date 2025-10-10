import React, { useState } from 'react';

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="project-card slide-up"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="project-image">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          width="100%"
          height="250px"
        />
        {isHovered && (
          <div className="project-overlay">
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        )}
      </div>
      <div className="project-info">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="technologies">
          {project.technologies && project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
