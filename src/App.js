import React from 'react'
import { BrowserRouter as Router, } from 'react-router-dom'
import { GlobalStyle } from './GlobalStyle'
import { Layout } from  './components/layout/Layout'


function App() {
  return (
    <>
      <GlobalStyle />
        <Router>
        <Layout>
        </Layout>
        </Router>
    </>
  );
}

export default App;
