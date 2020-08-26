import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { GlobalStyle } from './GlobalStyle'
import { IndexPages } from './pages/IndexPage'


function App() {
  return (
    <>
      <GlobalStyle />
        <Router>
          <Route exact path='/' component={IndexPages} />
        </Router>
    </>
  );
}

export default App;
