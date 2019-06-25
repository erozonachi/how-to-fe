import React, { useState } from 'react';
import { Button, Header, Checkbox, Form, Icon, Message } from 'semantic-ui-react';
import { FormContainer } from './FormContainer';
import { Link } from 'react-router-dom';
import login from './assets/login.svg';
import signup from './assets/signup.svg';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { mapStateToProps } from '../mapState';
import { registerUser, loginUser } from '../../actions';

function AuthFormBuilder(props) {
  const initialState = {
    username: '',
    password: '',
    confirm: '',
    isCreator: false,
  };
  const errorDefaults = {
    title: null,
    message: null,
  };
  const [formInputs, setFormInputs] = useState(initialState);
  const [formError, setFormError] = useState(errorDefaults);
  
  const handleInputChange = (event) => {
    const target = event.target;
    setFormError({...errorDefaults});

    if(target.placeholder.includes('Username')) {
      if(target.value.match(/\s/g)) {
        setFormError( (prevError) => ({
          ...prevError,
          title: 'Malformed Username',
          message: 'Username must not contain whitespaces',
        }));
      }
      setFormInputs(prevState => ({...prevState, username: target.value}));
    }
    else if(target.placeholder.includes('Enter Password')) {
      setFormInputs(prevState => ({...prevState, password: target.value}));
    }
    else if(target.placeholder.includes('Confirm')) {
      setFormInputs(prevState => ({...prevState, confirm: target.value}));
    }
  }
  const handleCheckClick = () => {
    setFormInputs(prevState => {console.log(formInputs); return ({...prevState, isCreator: !prevState.isCreator})});
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if(formInputs.username.trim() === '' || formInputs.password.trim() === '' || (props.signUp && formInputs.confirm.trim() === '')) {
      setFormError( (prevError) => ({
        ...prevError,
        title: 'All Fields Required',
        message: 'Please fill in blank input fields',
      }));
    } else if(formInputs.username.match(/\s/g)) {
      setFormError( (prevError) => ({
        ...prevError,
        title: 'Malformed Username',
        message: 'Username must not contain whitespaces',
      }));
    } else if(formInputs.password !== formInputs.confirm) {
      setFormError( (prevError) => ({
        ...prevError,
        title: 'Password Mismatch',
        message: 'Confirm password does not match password',
      }));
    } else {
      props.signUp? 
        props.registerUser({
          username: formInputs.username,
          password: formInputs.password,
          type: formInputs.isCreator? 'creator' : 'viewer',
        }) :
        props.loginUser({
          username: formInputs.username,
          password: formInputs.password,
        });
    }
  }

  return(
    <FormContainer>
      <img 
        alt={(props.signUp && 'Sign up banner') || 'Login banner'} 
        src={(props.signUp && signup) || login}
      />
      <div>
        <Header color='blue' as='h2'>{(props.signUp && 'User Registration') || 'User Login'}</Header>
        <Form onSubmit={handleFormSubmit} error>
          {formError.title && <Message
            error
            header={formError.title}
            content={formError.message}
          />}
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
              <Checkbox label='Sign me up as a creator' checked={formInputs.isCreator} onClick={handleCheckClick} />
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

export default connect(mapStateToProps, {registerUser, loginUser})(AuthFormBuilder);
