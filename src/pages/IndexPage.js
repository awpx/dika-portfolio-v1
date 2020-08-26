import React from 'react'
import { Layout } from  '../components/layout/Layout'
import { Hero } from '../components/hero/Hero'
import { About } from '../components/about/About'

export const IndexPages = ({ location }) => {
  return (
    <Layout location={location}>
      <main className='fillHeight' style={{counterReset: 'section'}}>
        <Hero />
        <About />
      </main>
    </Layout>
  )
}
