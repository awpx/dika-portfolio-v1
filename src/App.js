import React from 'react'
import { BrowserRouter as Router, } from 'react-router-dom'
import { GlobalStyle } from './GlobalStyle'
import { Layout } from  './components/layout/Layout'
import { Hero } from './components/hero/Hero'


function App() {
  return (
    <>
      <GlobalStyle />
        <Router>
        <Layout>
          <main className='fillHeight' style={{counterReset: 'section'}}>
            <Hero />
          </main>
          
        </Layout>
        </Router>
    </>
  );
}

export default App;
