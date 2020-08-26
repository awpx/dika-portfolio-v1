import React from 'react'
import { StyledHeroSection } from './HeroStyle'
import { email } from '../../config'

export const Hero = () => {

  const one = <h1>Hi, my name is</h1>;
  const two = <h2 className="big-heading">Andika W.P.</h2>;
  const three = <h3 className="big-heading">I write code & build web.</h3>;
  const four = (
    <p>
      I'm a software engineer based in Bandung, West Java 
      specializing in building website or web-based app 
      from front to back (fullstack) using MERN stack.
    </p>
  );
  const five = (
    <a href={`mailto:${email}`} className="email-link">
      Get In Touch
    </a>
  );

  const items = [one, two, three, four, five]

  return (
    <StyledHeroSection id='hero'>
      {items.map((item, i) => (
            <div key={i}>{item}</div>
        ))}
    </StyledHeroSection>
  )
}
