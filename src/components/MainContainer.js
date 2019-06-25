import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { SignUpForm } from './auths';

export function MainContainer() {
  return(
    <Router>
      <Route 
        exact
        path='/'
        component={SignUpForm}
      />
    </Router>
  );
}
