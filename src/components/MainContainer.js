import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { SignUpForm, LoginForm } from './auths';
import { Home } from './Home';
import { Single } from './Single';

export function MainContainer() {
  return(
    <Router>
      <Route 
        exact
        path='/'
        render={props => {
          if (localStorage.getItem('howToAccessToken')) {
            return (
              <Home {...props} />
            );
          } else {
            return <Redirect to='/signup' />
          }
        }}
      />
      <Route 
        path='/guides/:id'
        render={props => {
          if (localStorage.getItem('howToAccessToken')) {
            return (
              <Single {...props} />
            );
          } else {
            return <Redirect to='/signup' />
          }
        }}
      />
      <Route 
        path='/signup'
        component={SignUpForm}
      />
      <Route 
        path='/login'
        component={LoginForm}
      />
    </Router>
  );
}
