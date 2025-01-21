import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';


import Swal from 'sweetalert2';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import '../../assets/stylesheets/marathon.css'


const UpdateMarathonForm = ( { marathon } ) => {
  const { _id:id, email, regCount } = marathon;

  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [dates, setDates] = useState({});


  const handleUpdateMarathon = async (e) => {
    e.preventDefault();

    // get the form data
    const form = new FormData(e.target);   
    const title = form.get('title');
    const marathonStart = dates.marathonStart;
    const regStart = dates.regStart;
    const regEnd = dates.regEnd;
    const location = form.get('location');
    const distance = form.get('distance');
    const image = form.get('image');
    const description = form.get('description');

    const createdAt = new Date().toISOString();

    const marathon = { title, marathonStart, regStart, regEnd, email, location, distance, image, description, createdAt, regCount };
    console.log(marathon)
    
    // database e store korte hbe
    const res = await axios.put(`https://marathon-management-server-side.vercel.app/api/marathons/${id}`, marathon, {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true
    });
    console.log(res.data);

    Swal.fire({
      title: "Marathon updated successfully!",
      icon: "success",
      customClass: {
        popup: 'small-modal'
      }
    });

    e.target.reset();
    setDates({})
  }

  const handleDateChange = (date, fieldName) => {
    console.log(`${fieldName}:`, date);
    setDates({...dates, [fieldName]: date});
  };


  return (
    <div className='max-w-[600px] mx-auto bg-white mt-14   dark:bg-cardbackground'>
      <h3 className='pt-6 text-center font-semibold opacity-80 text-2xl md:text-3xl   dark:text-white   '> Update  Marathon </h3>
      <form onSubmit={handleUpdateMarathon} className="card-body">
        {/* first row */}
        <div className='flex justify-between    '>
          <div className="form-control w-[49%] ">
            <label className="label   "> <span className="label-text   dark:text-white"> Marathon Title </span> </label>
            <input name='title' type="text" placeholder="title" className="input input-bordered" required />
          </div>
          <div className="form-control w-[49%] ">
            <label className="label"> <span className="label-text   dark:text-white"> Marathon Start Date  </span> </label>
            <DatePicker
              selected={dates.marathonStart || null}
              name="marathonStart"
              onChange={(date) => handleDateChange(date, 'marathonStart')}
              dateFormat="dd-MM-yyyy"
              placeholderText="Select a date"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        {/* second row */}
        <div className='flex justify-between'>
          <div className="form-control w-[49%] ">
            <label className="label"> <span className="label-text   dark:text-white"> Registration  Start Date  </span> </label>
            <DatePicker
              name="regStart"
              selected={dates.regStart || null}
              onChange={(date) => handleDateChange(date, 'regStart')}
              dateFormat="dd-MM-yyyy"
              placeholderText="Select a date"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-[49%] ">
            <label className="label"> <span className="label-text   dark:text-white"> Registration  end Date  </span> </label>
            <DatePicker
              name="regEnd"
              selected={dates.regEnd || null}
              onChange={(date) => handleDateChange(date, 'regEnd')}
              dateFormat="dd-MM-yyyy"
              placeholderText="Select a date"
              className="input input-bordered w-full"
            />
          </div>
        </div>

        {/* third row */}
        <div className='flex justify-between'>
          <div className="form-control w-[49%] ">
            <label className="label"> <span className="label-text   dark:text-white"> Marathon Location </span> </label>
            <input name='location' type="text" placeholder="location" className="input input-bordered" required />
          </div>
          <div className="form-control w-[49%]">
            <label className="label"> <span className="label-text  dark:text-white">  Running Distance </span>  </label>
            <input name="distance"  list="marathon-types" className="input input-bordered" placeholder="Select or type a type" required />
            <datalist id="marathon-types">
              <option value="25 km"></option>
              <option value="15 km"></option>
              <option value="10 km"></option>
              <option value="5 km"></option>
            </datalist>
          </div>
        </div>
        
        
        {/* rest */}
        <div className="form-control">
          <label className="label"> <span className="label-text   dark:text-white"> Marathon Image URL </span> </label>
          <input name='image' type="url" placeholder="image url" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label"> <span className="label-text   dark:text-white"> Description </span> </label>
          <textarea name="description" id="" cols="30" rows="3" className='border-[1px] border-black border-opacity-10 rounded-lg px-4 py-2'></textarea>
        </div>

        {/* error showing div */}
        <div className='text-sm text-red-600 pt-3 mr-3'>
          {error}
        </div>

        {/* add button */}
        <div className="form-control mt-6">
          <button className="btn text-white text-base md:text-lg font-medium border-none bg-magenta hover:bg-magenta opacity-90 hover:opacity-100"> Update campaign </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateMarathonForm;