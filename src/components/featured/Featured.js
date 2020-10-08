import React from 'react'
import { featuredProjects } from '../../content/featuredProject'
import { StyledProject } from './FeaturedStyle'
import { Icon } from '../icons/Icon'

export const Featured = () => {
  return (
    <section id="projects">
      <h2 className="numbered-heading">
        Some of my works
      </h2>
      
      <div>
        {featuredProjects.map(({ id, title, cover, github, external, details, tech, description }) => {
            return (
              <StyledProject key={id}>
                <div className="project-content">
                  <p className="project-overline">Featured Project</p>
                  <h3 className="project-title">{title}</h3>
                  <div className="project-description">{description}</div>

                  {tech && (
                    <ul className="project-tech-list">
                      {tech.map((tech, i) => (
                        <li key={i}>{tech}</li>
                      ))}
                    </ul>
                  )}

                  <div className="project-links">
                    {github && (
                      <a href={github} aria-label="GitHub Link">
                        <Icon name="GitHub" />
                      </a>
                    )}
                    {details && (
                      <a href={details} aria-label="Details Link">
                        <Icon name="Details" />
                      </a>
                    )}
                    {external && (
                      <a href={external} aria-label="External Link">
                        <Icon name="External" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="project-image">
                  <a href={external ? external : github ? github : '#'}>
                    <img src={cover}  alt={title} className="img" />
                  </a>
                </div>
              </StyledProject>
            );
          })}
      </div>
    </section>
  )
}
