import React from 'react';
import Navbar from '../components/Header/Navbar';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <div  className='font-Poppins bg-background  ' >
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default AuthLayout;