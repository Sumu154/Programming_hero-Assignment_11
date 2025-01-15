import '../../assets/stylesheets/navbar.css'

import React, { useContext } from 'react';
import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import ThemeToggle from '../shared/ThemeToggle';



const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  // console.log(user);

  const navigate = useNavigate();
  const path = useLocation().pathname;

  const handleSignOut = async(e) => {
    e.preventDefault();
    try{
      await signOutUser();
      navigate('/auth/login');
    }
    catch(e){
      // console.log(e);
    }
  }






  const links = <>
    <li> <NavLink to="/"> Home </NavLink> </li>
    <li> <NavLink to="/allMarathons"> All Marathons</NavLink> </li>
    <li> <NavLink to="/addMarathon"> Add Marathon </NavLink> </li>
    <li> <NavLink to="/myMarathons"> My Marathons </NavLink> </li>
    <li> <NavLink to="/myApplies"> My Apply List </NavLink> </li>
  </>

  return (
    <div className="navbar w-[90%] mx-auto  ">
      <div className="navbar-start">
        <div className="dropdown  ">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg"  className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0}  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-40 p-2 shadow    dark:bg-cardbackground">
            {links}
          </ul>
        </div>
        <Link to='/' className="text-magenta text-base sm:text-2xl font-bold"> Marathon Hub </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        <ThemeToggle></ThemeToggle>
        {user ? <div className='flex gap-4 items-center'>
          <button className='text-orange font-medium px-4 py-[6px] rounded-lg border-orange border-[1px] '> <Link onClick={handleSignOut} to=''> Logout </Link> </button> 
          <div className='text-xl text-white h-8 w-8 bg-orange rounded-full flex justify-center items-center'>  {user.displayName?.charAt(0).toUpperCase()} </div> 
        </div> 
        :<div className='flex gap-4'>
          <button className={`font-medium px-4 py-[6px] rounded-lg     ${path==='/auth/login' ? 'bg-orange text-white' : 'text-orange border-orange border-[1px]'} `}> <Link to='/auth/login'> Login </Link> </button> 
          <button className={`font-medium px-4 py-[6px] rounded-lg     ${path==='/auth/register' ? 'bg-orange text-white' : 'text-orange border-orange border-[1px]' } `}> <Link to='/auth/register'> Register </Link> </button>
        </div>              
        } 
      </div>
    </div>
  );
};

export default Navbar;


// import React from 'react';

// const Navbar = () => {
//   return (
//     <div>
//        hi i am navbar
//     </div>
//   );
// };

// export default Navbar;