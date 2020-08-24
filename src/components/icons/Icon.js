import React from 'react'
import { IconGithub } from './IconGithub'
import { IconTwitter } from './IconTwitter'
import { IconLinkedin } from './IconLinkedin'
import { IconExternal } from './IconExternal'

export const Icon = ({ name }) => {
  switch (name) {
    case 'GitHub':
      return <IconGithub />;
    case 'Linkedin':
      return <IconLinkedin />;
    case 'Twitter':
      return <IconTwitter />;
    default:
      return <IconExternal />;
  }
};

