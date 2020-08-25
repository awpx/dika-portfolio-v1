import React from 'react'
import { socialMedia } from '../../config'
import { StyledFooter, StyledSocialLinks, StyledCredit } from './FooterStyle'
import { Icon } from '../icons/Icon'

export const Footer = () => {
  return (
    <StyledFooter>
      <StyledSocialLinks>
        <ul>
          {socialMedia &&
            socialMedia.map(({ name, url }, i) => (
              <li key={i}>
                <a href={url} aria-label={name}>
                  <Icon name={name} />
                </a>
              </li>
            ))}
        </ul>
      </StyledSocialLinks>
      
      <StyledCredit>
        <a href="https://github.com/awpx">
          <div>Build with	&hearts; using React</div>
        </a>
      </StyledCredit>
      <StyledCredit tabindex="-1">
        <a href="https://github.com/awpx">
          <div>Copyleft &copy; Dika.dev 2020</div>
        </a>
        <a href="https://brittanychiang.com">
          <div>The Inspiration</div>
        </a>
      </StyledCredit>
      
    </StyledFooter>
  )
}
