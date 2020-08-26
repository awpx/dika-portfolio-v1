import React from 'react'
import { StyledAboutSection, StyledText, StyledPic } from './AboutStyle'
import avatar from '../../content/avatar/avatar.png'

export const About = () => {

  const skills = [
    'HTML',
    'CSS (Styled Components)',
    'JavaScript (ES6+)', 
    'ReactJS (Hooks)',
    'Redux',
    'Node.js',
    'ExpressJS',
    'MongoDB (Mongoose)',
    'Linux (Debian Based)',
    'AWS',
  ]

  return (
    <StyledAboutSection id="about">
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>Hello! I'm Andika, a software engineer based in Bandung, West Java.</p>

            <p>
              I really enjoy my time when writing code, I like to build or learn something related to technology, especially websites & linux.
            </p>

            <p>
              I just finished my bachelor's education 
              at UNIKOM, computer systems department. 
              Recently, I'm enjoying creating some websites using the MERN stack (MongoDB, ExpressJS, ReactJS, NodeJS).
            </p>

            <p>This is some tools & technologies I've been using recently:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <img src={avatar}  alt="Avatar" className="img" />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  )
}
