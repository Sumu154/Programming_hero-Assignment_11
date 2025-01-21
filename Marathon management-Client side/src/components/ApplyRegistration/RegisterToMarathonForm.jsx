import React, { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';

import '../../assets/stylesheets/marathon.css'
import { formatDate } from '../../Utils/Formatters/dateFormatter'


const RegisterToMarathonForm = () => {
  const { user } = useContext(AuthContext);

  const marathon = useLocation().state.marathon;
  // console.log(marathon);
  const { _id:marathon_id, title:marathonTitle, marathonStart, regCount } = marathon;


  const [error, setError] = useState('');


  const handleRegisterMarathon = async (e) => {
    e.preventDefault();
    
    const form = new FormData(e.target);
    const firstName = form.get('firstName');
    const lastName = form.get('lastName');
    const contactNumber = form.get('contact');
    const additional = form.get('additional');

    const email = user.email;

    const registered = { email, marathon_id, marathonTitle, marathonStart, firstName, lastName, contactNumber, additional };
    // console.log(registered)

    // database e add korbo
    const res1 = await axios.post('https://marathon-management-server-side.vercel.app/api/registrations', registered, {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true
    })
    console.log(res1.data);

    // regCount increment korte hbe
    const res2 = axios.patch(`https://marathon-management-server-side.vercel.app/api/marathons/${marathon_id}`, {}, {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true
    });
    console.log(res2.data);

    Swal.fire({
      title: "Registered successfully!",
      icon: "success",
      customClass: {
        popup: 'small-modal'
      }
    });

    e.target.reset();
  }
  
  return (
    <div className='max-w-[500px] mx-auto bg-white mt-14'>
    <h3 className='pt-6 text-center font-semibold opacity-80 text-2xl md:text-3xl'> Register Your Account </h3>
    <form onSubmit={handleRegisterMarathon} className="card-body">
      <div className='flex justify-between'>
        <div className="form-control w-[49%] ">
          <label className="label"> <span className="label-text   dark:text-white"> Your First Name </span> </label>
          <input name='firstName' type="text" placeholder="first name" className="input input-bordered" required />
        </div>
        <div className="form-control w-[49%]">
          <label className="label"> <span className="label-text  dark:text-white"> Your Last name </span>  </label>
          <input name="lastName" type="text" placeholder="last name" className="input input-bordered" required />
        </div>
      </div>

      <div className='flex justify-between'>
       <div className="form-control w-[49%]">
          <label className="label"> <span className="label-text  dark:text-white"> Your Contact Number </span>  </label>
          <input name="contact" type="text" className="input input-bordered" placeholder="contact number" required />
        </div>
        <div className="form-control w-[49%] ">
          <label className="label"> <span className="label-text   dark:text-white"> Your Email </span> </label>
          <input name='email' value={user.email} type="email" placeholder="email" className="input input-bordered" readOnly />
        </div>
      </div>

      <div className='flex justify-between'>
        <div className="form-control w-[49%]">
          <label className="label"> <span className="label-text  dark:text-white"> Marathon Title </span>  </label>
          <input name="title" value={marathonTitle} className="input input-bordered" placeholder="Select or type a type" readOnly />
        </div>
        <div className="form-control w-[49%] ">
          <label className="label"> <span className="label-text   dark:text-white"> Marathon Start Date </span> </label>
          <input name='email' value={formatDate(marathonStart)} type="email" placeholder="email" className="input input-bordered" readOnly />
        </div>
      </div>

      <div className="form-control">
        <label className="label"> <span className="label-text   dark:text-white"> Additional information </span> </label>
        <textarea name="additional" id="" cols="30" rows="3" className='border-[1px] border-black border-opacity-15 rounded-lg px-4 py-2'></textarea>
      </div>

      {/* register button */}
      <div className="form-control mt-6">
        <button className="btn text-white text-base md:text-lg font-medium bg-magenta hover:bg-magenta opacity-90 hover:opacity-100"> Register Now </button>
      </div>

    </form>
    </div>
  );
};

export default RegisterToMarathonForm;