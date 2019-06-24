import React from 'react';
import { Container, Header, Button, Checkbox, Form } from 'semantic-ui-react';
import { FormContainer } from './FormContainer';
import { Link } from 'react-router-dom';
import login from './assets/login.svg';
import signup from './assets/signup.svg';
import PropTypes from 'prop-types';

export default function AuthFormBuilder(props) {
  return(
    <FormContainer>
      <img 
        alt={(props.signUp && 'Sign up banner') || 'Login banner'} 
        src={(props.signUp && signup) || login}
      />
      <Container>
        <Header as='h2'>{(props.signUp && 'User Registration') || 'User Login'}</Header>
        <Form>
          <Form.Field>
            <label>Username</label>
            <input placeholder='Enter Username' />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input placeholder='Enter Password' />
          </Form.Field>
          {
            props.signUp &&
              <Form.Field>
                <label>Confirm Password</label>
                <input placeholder='Confirm Password' />
              </Form.Field>
          }
          {
            props.signUp &&
            <Form.Field>
              <Checkbox label='Sign me up as a creator' />
            </Form.Field>
          }
          <Button type='submit'>{(props.signUp && 'Sign Up') || 'Login'}</Button>
        </Form>
        <Link to={(props.signUp && '/signup') || '/login'}>
          {(props.signUp && 'Already have an account?') || `Don't have an account?`}
        </Link>
      </Container>
    </FormContainer>
  );
}

AuthFormBuilder.propType = {
  signUp: PropTypes.bool
}
