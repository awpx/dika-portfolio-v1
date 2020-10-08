import React from 'react'
import { Icon } from '../icons/Icon'
import { StyledProject, StyledProjectsSection } from './ProjectsStyle'
import { commonProjects } from '../../content/commonProject'

export const Projects = () => {
  return (
    <StyledProjectsSection>
      <h2 >Some Other Projects</h2>

        <div className="projects-grid">
        {commonProjects.map(({ id, title,  github, external, tech, description }) => {
          return (
            <StyledProject
              key={id}
              tabIndex="0"
              >
              <div className="project-inner">
                <header>
                  <div className="project-top">
                    <div className="folder">
                      <Icon name="Folder" />
                    </div>
                    <div className="project-links">
                      {github && (
                        <a href={github} aria-label="GitHub Link">
                          <Icon name="GitHub" />
                        </a>
                      )}
                      {external && (
                        <a href={external} aria-label="External Link">
                          <Icon name="External" />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="project-title">{title}</h3>

                  <div className="project-description">{description}</div>
                </header>

                <footer>
                  {tech && (
                    <ul className="project-tech-list">
                      {tech.map((tech, i) => (
                        <li key={i}>{tech}</li>
                      ))}
                    </ul>
                  )}
                </footer>
              </div>
            </StyledProject>
          );
        })}
        </div>
    </StyledProjectsSection>
  )
}
