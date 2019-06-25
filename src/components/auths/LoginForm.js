import React from 'react';
import AuthFormBuilder from './AuthFormBuilder';

export function LoginForm() {
  return(
    <AuthFormBuilder signUp={false} />
  );
}
