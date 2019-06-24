import React from 'react'
import { Container, Header, Button, Checkbox, Form } from 'semantic-ui-react'

export default function AuthFormBuilder(props) {
  return(
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
    </Container>
  );
}
