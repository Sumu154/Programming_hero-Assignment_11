import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

import { toast } from 'react-toastify';
import { PiEye, PiEyeClosed } from "react-icons/pi";
import { FcGoogle } from "react-icons/fc";


const LoginForm = () => {
  const { setUser, signInUser, signInWithGoogle } = useContext(AuthContext);

  const navigate = useNavigate();

  const [passwordType, setPasswordType] = useState('password');
  const [inputEmail, setInputEmail] = useState('');

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const email = form.get('email');
    const password = form.get('password');
    // console.log(email, password);


    try{
      const res = await signInUser(email, password);
      const user = res.user;
      setUser(user);
      navigate('/');
      toast.success('Successfully logged in!', {
        position: "top-center",
        autoClose: 1000,
        theme: "dark",
      });

    }
    catch(e){
      const errorCode = e.code;
      const errorMessage = e.message;
      toast.error(`Invalid email or password !`, {
        position: "top-center",
        autoClose: 1000,
        theme: "dark",
      });
    }

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
    <div className='max-w-[500px] mx-auto bg-white mt-14 ' >
      <h3 className='pt-6 text-center font-semibold opacity-80 text-2xl md:text-3xl'> Login Your Account </h3>
      <p className='text-center mt-2 flex justify-center items-center gap-1 '> <span className='text-xl'> <FcGoogle /> </span> continue with <button onClick={handleGoogleSignIn} className='text-blue underline'>Google</button> </p>
      <form onSubmit={handleLoginSubmit} className="card-body">
        <div className="form-control">
          <label className="label"> <span className="label-text ">Email</span> </label>               
          <input name='email' type="email" placeholder="email" className="input input-bordered"   value={inputEmail} onChange={(e)=> setInputEmail(e.target.value)} required />
        </div>
        <div className="form-control">
          <label className="label"> <span className="label-text ">Password</span> </label>
          <div className='flex flex-row-reverse items-center'>
            <input name='password' type={passwordType} placeholder="password" className="input input-bordered w-full" required />
            <span onClick={togglePasswordType} className='absolute mr-4'> {passwordType==='password' ? <PiEyeClosed /> : <PiEye /> }  </span>
          </div>
          <label className="label"> <Link to={'/auth/forgetpassword'} state={ {inputEmail} } className="label-text-alt link link-hover text-blue "> Forgot password? </Link></label>
        </div>

        {/* login button */}
        <div className="form-control mt-6">
          <button className="btn text-white text-base md:text-lg font-medium bg-magenta hover:bg-magenta opacity-90 hover:opacity-100"> Login </button>
        </div>

        {/* alter */}
        <div>
          <p className='text-center text-sm'> Dont’t Have An Account? <span  className='text-red-500 ml-1'> <Link to='/auth/register'> Register </Link> </span> </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;