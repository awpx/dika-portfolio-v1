import React from 'react'
import { BrowserRouter as Router, } from 'react-router-dom'
import { GlobalStyle } from './GlobalStyle'
import { Header } from './components/header/Header'

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Header />
      </Router>
      
    </>
  );
}

export default App;
