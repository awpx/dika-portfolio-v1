import React from 'react'
import { Header } from '../header/Header'
import { SocialEmail } from '../socialEmail/SocialEmail'
import { StyledContent } from './LayoutStyles'

export const Layout = ({ children }) => {
  return (
    <>
      <StyledContent>
        <Header />
        <SocialEmail />

        <div id="content">
          {children}
          {/* <Footer /> */}
        </div>
      </StyledContent>
    </>
  )
}
