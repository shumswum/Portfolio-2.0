import React from 'react';
import {
    HashRouter as Router,
    Route
  } from 'react-router-dom';
import App from './App';
import LearnMore from './LearnMore'

export default class MyRouter extends React.Component {
  render() {
    return(
      <Router className="main-router">
        <div>
          <Route exact path='/' component={ App } />
          <Route path='/more' component={ LearnMore }/>
        </div>
      </Router>
    );
  }
}