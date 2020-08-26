import React from 'react'
import { Link } from 'react-router-dom'
import { navLinks } from '../../config';
import { StyledHeader, StyledNav, StyledLinks } from './HeaderStyles'
import { IconLogo } from '../icons/logo'
import { Menu } from '../menu/Menu'

export const Header = () => {
  return (
    <StyledHeader>
      <StyledNav>
        <div className="logo" tabIndex="-1">
          <a href="/" aria-label="home">
            <IconLogo />
          </a>
        </div>

        <StyledLinks>
          <ol>
              {navLinks &&
                navLinks.map(({ url, name }, i) => (
                  <li key={i}>
                    <Link to={url}>{name}</Link>
                  </li>
                ))}
          </ol>

          <div>
            <a href="/resume.pdf" className="resume-button">
              Resume
            </a>
          </div>
        </StyledLinks>

        <Menu />
        
      </StyledNav>
    </StyledHeader>
  )
}
