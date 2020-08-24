import React, { useEffect } from 'react'
import { socialMedia } from '../../config'
import { email } from '../../config'
import { StyledSocialList, StyledSideElement, StyledLinkWrapper } from './SocialEmailStyle'
import { Icon } from '../icons/Icon'

export const SocialEmail = () => {

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
    {/* social (left) */}
    <StyledSideElement orientation="left">
      <StyledSocialList>
        {socialMedia.map(({ url, name }, i) => (
            <li key={i}>
              <a href={url} aria-label={name}>
                <Icon name={name} />
              </a>
            </li>
          ))}
      </StyledSocialList>
    </StyledSideElement>

    {/* email (right) */}
    <StyledSideElement orientation="right">
      <StyledLinkWrapper>
        <a href={`mailto:${email}`}>{email}</a>
      </StyledLinkWrapper>
    </StyledSideElement>
  </>
  )
}
