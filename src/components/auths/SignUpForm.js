import React from 'react';
import AuthFormBuilder from './AuthFormBuilder';

export function SignUpForm(props) {
  return(
    <AuthFormBuilder signUp={true} {...props} />
  );
}
