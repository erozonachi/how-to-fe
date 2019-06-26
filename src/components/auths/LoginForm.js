import React from 'react';
import AuthFormBuilder from './AuthFormBuilder';

export function LoginForm(props) {
  return(
    <AuthFormBuilder signUp={false} {...props} />
  );
}
