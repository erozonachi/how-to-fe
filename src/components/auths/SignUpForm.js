import React from 'react';
import AuthFormBuilder from './AuthFormBuilder';

export function SignUpForm() {
  return(
    <AuthFormBuilder signUp={true} />
  );
}
