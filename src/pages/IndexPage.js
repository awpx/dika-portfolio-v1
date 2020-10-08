import React from 'react'
import { Layout } from  '../components/layout/Layout'
import { Hero } from '../components/hero/Hero'
import { About } from '../components/about/About'
import { Featured } from '../components/featured/Featured'
import { Projects } from '../components/projects/Projects'
import { Certification } from '../components/certifications/Certification'
import { Contact } from '../components/contact/Contact'

export const IndexPages = ({ location }) => {
  return (
    <Layout location={location}>
      <main className='fillHeight' style={{counterReset: 'section'}}>
        <Hero />
        <About />
        <Featured />
        <Projects />
        <Certification />
        <Contact />
      </main>
    </Layout>
  )
}
