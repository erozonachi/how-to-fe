import React, { useState } from 'react';
import { Button, Header, Checkbox, Form, Icon } from 'semantic-ui-react';
import { FormContainer } from './FormContainer';
import { Link } from 'react-router-dom';
import login from './assets/login.svg';
import signup from './assets/signup.svg';
import PropTypes from 'prop-types';

export default function AuthFormBuilder(props) {
  const initialState = {
    username: '',
    password: '',
    confirm: '',
    isCreator: false,
  };
  const [formInputs, setFormInputs] = useState(initialState);
  
  return(
    <FormContainer>
      <img 
        alt={(props.signUp && 'Sign up banner') || 'Login banner'} 
        src={(props.signUp && signup) || login}
      />
      <div>
        <Header as='h2'>{(props.signUp && 'User Registration') || 'User Login'}</Header>
        <Form>
          <Form.Field>
            <label>Username</label>
            <input placeholder='Enter Username' />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input placeholder='Enter Password' type='password' />
          </Form.Field>
          {
            props.signUp &&
              <Form.Field>
                <label>Confirm Password</label>
                <input placeholder='Confirm Password' type='password' />
              </Form.Field>
          }
          {
            props.signUp &&
            <Form.Field>
              <Checkbox label='Sign me up as a creator' />
            </Form.Field>
          }
          <Button primary type='submit' animated='fade'>
            <Button.Content visible>
              {(props.signUp && 'Sign Up') || 'Login'}
            </Button.Content>
            <Button.Content hidden>
              {(props.signUp && <Icon name='user plus' />) || <Icon name='sign in' />}
            </Button.Content>
          </Button>
        </Form>
        <Link to={(props.signUp && '/login') || '/signup'}>
          {(props.signUp && 'Already have an account?') || `Don't have an account?`}
        </Link>
      </div>
    </FormContainer>
  );
}

AuthFormBuilder.propType = {
  signUp: PropTypes.bool
}
