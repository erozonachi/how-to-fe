import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { SignUpForm } from './auths';
import { Dashboard } from './Dashboard';

export function MainContainer() {
  return(
    <Router>
      <Route 
        exact
        path='/'
        component={Dashboard}
      />
      <Route 
        path='/signup'
        component={SignUpForm}
      />
    </Router>
  );
}
