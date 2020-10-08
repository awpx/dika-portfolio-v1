import React from 'react'
import { IconGithub } from './IconGithub'
import { IconTwitter } from './IconTwitter'
import { IconLinkedin } from './IconLinkedin'
import { IconExternal } from './IconExternal'
import { IconDetails } from './IconDetails'
import { IconFolder } from './IconFolder'

export const Icon = ({ name }) => {
  switch (name) {
    case 'GitHub':
      return <IconGithub />;
    case 'Linkedin':
      return <IconLinkedin />;
    case 'Twitter':
      return <IconTwitter />;
    case 'Details':
      return <IconDetails />;
    case 'Folder':
      return <IconFolder />;
    default:
      return <IconExternal />;
  }
};

