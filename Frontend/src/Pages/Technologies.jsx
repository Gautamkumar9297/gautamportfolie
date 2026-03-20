import React from 'react';
import '../styles/Technologies.css';
import { techData } from '../constants/technologies';

function Technologies() {
  return (
    <div className="tech-container">
      <h1 className="page-title">Technologies I Know</h1>
      <div className="tech-sections">
        {Object.entries(techData).map(([category, skills]) => (
          <div className="tech-category" key={category}>
            <h2>{category}</h2>
            <div className="skills-list">
              {skills.map((skill) => {
                const IconComponent = skill.icon;
                return (
                  <div className="skill-item" key={skill.name}>
                    <div className={`skill-icon ${skill.name.toLowerCase().replace(/\s+/g, '-')}`}>
                      <IconComponent />
                    </div>
                    <div className="skill-name">{skill.name}</div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Technologies;
