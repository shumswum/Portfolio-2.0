import React from 'react';
import {
    BrowserRouter as Router,
    Route
  } from 'react-router-dom';
import App from './App';
import LearnMore from './LearnMore';
import ReactMemory from 'react-router-scroll-memory';

export default class MyRouter extends React.Component {
  render() {
    return(
      <Router className="main-router">
        <div>
          <ReactMemory/>
          <Route exact path='/' component={ App } />
          <Route path='/more/:id' component={ LearnMore }/>
        </div>
      </Router>
    );
  }
}