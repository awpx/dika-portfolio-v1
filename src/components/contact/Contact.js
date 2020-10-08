import React from 'react'
import { StyledContactSection } from './ContactStyle'

export const Contact = () => {
  return (
    <StyledContactSection id="contact">
      <h2 className="numbered-heading overline">Get In Touch</h2>

      <h2 className="title">Let's talk!</h2>

      <p>
        I'm currently <b>looking for some new opportunities</b>, my inbox is always open.
        Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </p>

      <a className="email-link" href={`mailto:andikawputra@gmail.com`}>
        Say Hello
      </a>
    </StyledContactSection>
  )
}
