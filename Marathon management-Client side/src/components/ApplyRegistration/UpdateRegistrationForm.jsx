import React from 'react';

import { formatDate } from '../../Utils/Formatters/dateFormatter';
import axios from 'axios';
import Swal from 'sweetalert2';

import '../../assets/stylesheets/marathon.css'

const UpdateRegistrationForm = ( { registration } ) => {
  const { _id:id, email, marathon_id, marathonTitle, marathonStart } = registration;



  const handleUpdateRegistration = async (e) => {
    e.preventDefault();
    
    const form = new FormData(e.target);
    const firstName = form.get('firstName');
    const lastName = form.get('lastName');
    const contactNumber = form.get('contact');
    const additional = form.get('additional');

    const registered = { email, marathon_id, marathonTitle, marathonStart, firstName, lastName, contactNumber, additional };
    console.log(registered)

    // database e add korbo
    const res = await axios.put(`https://marathon-management-server-side.vercel.app/api/registrations/${id}`, registered, {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true
    })
    console.log(res.data);

    // regCount increment korte hbe -> update er khtere kora lagbe na
    // const res2 = axios.patch(`https://marathon-management-server-side.vercel.app/api/marathons/${marathon_id}`, {}, {
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // });
    // console.log(res2.data);

    Swal.fire({
      title: "Registration updated successfully!",
      icon: "success",
      customClass: {
        popup: 'small-modal'
      }
    });

    e.target.reset();
  }


  return (
    <div className='max-w-[500px] mx-auto bg-white mt-14 dark:bg-cardbackground'>
      <h3 className='pt-6 text-center font-semibold opacity-80 text-2xl md:text-3xl  dark:text-white'> Update your registration </h3>
      <form onSubmit={handleUpdateRegistration} className="card-body">
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
            <input name='email' value={email} type="email" placeholder="email" className="input input-bordered" readOnly />
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
          <button className="btn text-white text-base border-none md:text-lg font-medium bg-magenta hover:bg-magenta opacity-90 hover:opacity-100"> Update Registration </button>
        </div>
  
      </form>
    </div>
  );
};

export default UpdateRegistrationForm;