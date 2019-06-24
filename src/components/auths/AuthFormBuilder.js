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
  
  const handleInputChange = (event) => {
    const target = event.target;

    if(target.placeholder.includes('Username')) {
      setFormInputs(prevState => ({...prevState, username: target.value}));
    }
    else if(target.placeholder.includes('Enter Password')) {
      setFormInputs(prevState => ({...prevState, password: target.value}));
    }
    else if(target.placeholder.includes('Confirm')) {
      setFormInputs(prevState => ({...prevState, confirm: target.value}));
    }
  }

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
            <input placeholder='Enter Username' value={formInputs.username} onChange={handleInputChange} />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input placeholder='Enter Password' type='password' value={formInputs.password} onChange={handleInputChange} />
          </Form.Field>
          {
            props.signUp &&
              <Form.Field>
                <label>Confirm Password</label>
                <input placeholder='Confirm Password' type='password' value={formInputs.confirm} onChange={handleInputChange} />
              </Form.Field>
          }
          {
            props.signUp &&
            <Form.Field>
              <Checkbox label='Sign me up as a creator' checked={formInputs.isCreator} />
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
