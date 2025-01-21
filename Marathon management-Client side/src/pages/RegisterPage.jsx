import React from 'react';
import RegisterForm from '../components/AuthComponents/RegisterForm';
import { Helmet } from 'react-helmet';

const RegisterPage = () => {
  return (
    <div  className='min-h-screen pb-10'>
      <Helmet>
        <title> auth | register </title>
      </Helmet>
      <RegisterForm></RegisterForm>
    </div>
  );
};

export default RegisterPage;