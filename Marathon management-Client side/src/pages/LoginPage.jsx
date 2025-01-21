import React from 'react';
import LoginForm from '../components/AuthComponents/LoginForm';
import { Helmet } from 'react-helmet';

const LoginPage = () => {
  return (
    <div  className='h-screen'>
      <Helmet>
        <title> auth | Login </title>
      </Helmet>
      <LoginForm></LoginForm>
    </div>
  );
};

export default LoginPage;