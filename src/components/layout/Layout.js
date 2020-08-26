import React, { useEffect } from 'react'
import { Header } from '../header/Header'
import { SocialEmail } from '../socialEmail/SocialEmail'
import { StyledContent } from './LayoutStyles'
import { Footer } from '../footer/Footer'

export const Layout = ({ children, location }) => {

  const isHome = location.pathname === '/'

  console.log(location)


  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1); // location.hash without the '#'
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView();
          el.focus();
        }
      }, 0);
    }
  }, [location]);

  // Sets target="_blank" rel="noopener noreferrer" on external links
  const handleExternalLinks = () => {
    const allLinks = Array.from(document.querySelectorAll('a'));
    if (allLinks.length > 0) {
      allLinks.forEach(link => {
        if (link.host !== window.location.host) {
          link.setAttribute('rel', 'noopener noreferrer');
          link.setAttribute('target', '_blank');
        }
      });
    }
  };

  useEffect(() => {
    handleExternalLinks();
  }, []);

  return (
    <>
      <StyledContent>
        <Header isHome={isHome} />
        <SocialEmail isHome={isHome} />

        <div id="content">
          {children}
          <Footer />
        </div>
      </StyledContent>
    </>
  )
}
