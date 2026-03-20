import React from 'react';
import '../styles/Projects.css';
import { projectsData } from '../constants/projects';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';

function Projects() {
  return (
    <div className="projects-container">
      <h1 className="page-title">Technical Projects</h1>
      <p className="projects-subtitle">Building innovative solutions with modern technologies</p>

      <div className="projects-grid">
        {projectsData.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-header">
              <div className="project-category">
                <FaCode className="category-icon" />
                <span>{project.category}</span>
              </div>
              <div className="project-number">#{project.id}</div>
            </div>

            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>

            <div className="project-tech">
              {project.tech.map((tech, i) => (
                <span key={i} className="tech-badge">{tech}</span>
              ))}
            </div>

            <div className="project-links">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link github-link"
              >
                <FaGithub />
                <span>GitHub</span>
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link live-link"
              >
                <FaExternalLinkAlt />
                <span>Live Demo</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
