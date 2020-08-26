import React from 'react'
import { socialMedia } from '../../config'
import { email } from '../../config'
import { StyledSocialList, StyledSideElement, StyledLinkWrapper } from './SocialEmailStyle'
import { Icon } from '../icons/Icon'

export const SocialEmail = () => {
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
