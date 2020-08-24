import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { navLinks } from '../../config';
import { StyledMenu, StyledHamburgerButton, StyledSidebar  } from './MenuStyle'

export const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <StyledMenu>
      <div>
        <StyledHamburgerButton onClick={toggleMenu} menuOpen={menuOpen}>
          <div className="ham-box">
            <div className="ham-box-inner" />
          </div>
        </StyledHamburgerButton>

        <StyledSidebar menuOpen={menuOpen} aria-hidden={!menuOpen} tabIndex={menuOpen ? 1 : -1}>
          <nav>
            {navLinks && (
              <ol>
                {navLinks.map(({ url, name }, i) => (
                  <li key={i}>
                    <Link to={url}>{name}</Link>
                  </li>
                ))}
              </ol>
            )}

            <a href="/resume.pdf" className="resume-link">
              Resume
            </a>
          </nav>
        </StyledSidebar>
      </div>
    </StyledMenu>
  )
}
