import { BrowserRouter as Router, Route } from 'react-router-dom';
import { SignUpForm } from './auths';

export default function MainContainer() {
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
