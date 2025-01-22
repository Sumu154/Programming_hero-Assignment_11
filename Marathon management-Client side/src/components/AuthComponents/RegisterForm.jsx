import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/AuthProvider';
import { PiEye, PiEyeClosed } from "react-icons/pi";
import { FcGoogle } from "react-icons/fc";

// utils import
import { validPassword } from '../../Utils/Validators/passValidator'
import axios from 'axios';

// https://i.ibb.co.com/23zmrZ5/5ad22761b9cf4196abba9a20dcc50c61.webp

const RegisterForm = () => {
  const navigate = useNavigate();
  const { createNewUser, updateUserProfile, signInWithGoogle, setLoading } = useContext(AuthContext);

  const [error, setError] = useState('');
  const [passwordType, setPasswordType] = useState('password')



  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    // get the form data
    const form = new FormData(e.target);   
    const name = form.get('name');
    const email = form.get('email');
    const photo = form.get('photo');
    const password = form.get('password');
    // console.log(name, email, password);
    const user = {name, email, photo};


    const passError = validPassword(password);
    if(passError){
      setError(passError);
      return;
    }


    // register kore fellam -> firebase
    try{
      const res = await createNewUser(email, password);
      console.log(res.user);

      // token create korlam
      const res2 = await axios.post('https://marathon-management-server-side.vercel.app/api/jwt/login', email, {withCredentials: true});
      console.log(res2.data);

      // update kore dibo
      await updateUserProfile({
        displayName: name,
        photoURL: photo,
      })
      // console.log(res.user);
      navigate('/');
      toast.success('Successfully registered user!', {
        position: "top-center",
        autoClose: 1000,
        theme: "dark",
      });
    }
    catch(e){
      const errorCode = e.code;
      const errorMessage = e.message;
      // console.log(errorCode, errorMessage);
      toast.error(`Error: ${errorCode} !`, {
        position: "top-center",
        autoClose: 1000,
        theme: "dark",
      });
    }

    // database e add korbo ekhn
    const res = await axios.post('https://marathon-management-server-side.vercel.app/api/users', user, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    console.log(res.data);
  }


  const handleGoogleSignIn = async() => {
    try{
      const res = await signInWithGoogle();
      navigate('/')
    }
    catch(e){
      // console.log('ERROR', e.message)
    }

  }


  // handle Toggle Eye for password
  const togglePasswordType = () => {
    passwordType==='password' ? setPasswordType('text') : setPasswordType('password');
  }


  return (
    <div className='max-w-[500px] mx-auto bg-white mt-14'>
      <h3 className='pt-6 text-center font-semibold opacity-80 text-2xl md:text-3xl'> Register Your Account </h3>
      <p className='text-center mt-2 flex justify-center items-center gap-1 '> <span className='text-xl'> <FcGoogle /> </span> continue with <button onClick={handleGoogleSignIn} className='text-blue underline'>Google</button> </p>
      <form onSubmit={handleRegisterSubmit} className="card-body">
        <div className="form-control">
          <label className="label"> <span className="label-text"> Your Name </span> </label>
          <input name='name' type="text" placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label"> <span className="label-text"> Your Photo URL </span> </label>
          <input name='photo' type="text" placeholder="photo url" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label"> <span className="label-text">Email</span> </label>
          <input name='email' type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label"> <span className="label-text">Password</span> </label>
          <div className='flex flex-row-reverse items-center'>
            <input name='password' type={passwordType} placeholder="password" className="input input-bordered w-full" required />
            <span onClick={togglePasswordType} className='absolute mr-4'> {passwordType==='password' ? <PiEyeClosed /> : <PiEye /> }  </span>
          </div>
        </div>

        {/* error showing div */}
        <div className='text-sm text-red-600 pt-3 mr-3'>
          {error}
        </div>

        {/* register button */}
        <div className="form-control mt-6">
          <button className="btn text-white text-base md:text-lg font-medium bg-magenta hover:bg-magenta opacity-90 hover:opacity-100"> Register </button>
        </div>

        {/* alter */}
        <div>
          <p className='text-center text-sm'> Already have an account? <span  className='text-red-600 ml-1'> <Link to='/auth/login'> Sign In </Link> </span> </p>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;