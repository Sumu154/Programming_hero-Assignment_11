import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

import { FaLocationDot } from "react-icons/fa6";
import { RiPinDistanceLine } from "react-icons/ri";
import { PiUsersThreeFill } from "react-icons/pi";

import {formatDate} from '../../Utils/Formatters/dateFormatter.js'


const MarathonDetails = () => {
  const { user } = useContext(AuthContext);

  const marathon = useLoaderData();
  const {  _id:id, title, image, regStart, regEnd, marathonStart, location, distance, description, regCount } = marathon;

  const [ status, setStatus ] = useState('');

  useEffect(() => {
    const getStatus = () => {
      const currentDate = new Date();
      const regStartDate = new Date(regStart);
      const regEndDate = new Date(regEnd);


      if(currentDate < regStartDate) {
        setStatus('Not Started');
      } 
      else if(currentDate>=regStartDate && currentDate<=regEndDate) {
        setStatus('Registration Ongoing');
      }
      else if(currentDate > regEndDate){
        setStatus('Deadline Over');
      }
    };

    getStatus();
  }, [regStart, regEnd]);

  const statusClass = status==='Ongoing' ? 'text-green border-green bg-green' 
                      : 'text-redd border-redd bg-redd';

  // register page eniye jabe for register the marathon
  const handleRegister = () => {

  }


  return (
    <div className='w-[90%] md:w-[80%] lg:w-[70%] mx-auto bg-white -mt-12 md:-mt-16 lg:-mt-24 px-4 py-8 rounded-lg   dark:bg-cardbackground '>
      <div className='flex flex-col sm:flex-row justify-between items-center gap-4'>

        <div className='w-full sm:w-[40%] '> 
          <img className='rounded-lg w-full mx-auto h-[150px] sm:h-[180px] lg:h-[200px] ' src={image} alt="" />
        </div>
        <div className='w-full sm:w-[60%]  text-black text-opacity-60    dark:text-white  dark:text-opacity-80'>
          <div className='flex justify-between items-center'>
            <h3 className='text-xl lg:text-2xl font-semibold text-black text-opacity-80 mb-1   dark:text-white'> {title} </h3>
            <span className={`text-sm font-semibold border-[1px] bg-opacity-20 rounded-3xl px-3 py-1 mr-4 ${statusClass}`}> {status} </span>
          </div>
          <p className='opacity-90 font-medium flex items-center gap-1 '> <span className='text-'> <FaLocationDot /> </span> Location: {location} </p>
          <p className='text-[15px] opacity-80 my-2'> {description} </p>
          <p className='opacity-90 font-medium flex items-center gap-1 '> <span className='text-'> <RiPinDistanceLine /> </span> Distance: {distance} </p>
          <p className='opacity-90 font-medium flex items-center gap-1 '> <span className='text-'> <PiUsersThreeFill /> </span> Registered user : {regCount} </p>
          <div className='flex justify-center sm:justify-start mt-6 sm:mt-3'> <button onClick={handleRegister} className='bg-magenta opacity-90 hover:bg-magenta hover:opacity-100 text-white px-5 py-[6px] rounded-lg '> Register now </button> </div>
        </div>
      </div>

      {/* dates */}
      <div className='mt-8 text-[15px] opacity-80'>
        <p> Registration start: <span> {formatDate(regStart)} </span>  </p>
        <p> Registration end: <span> {formatDate(regEnd)} </span> </p>
        <p> Marathon Start: <span> {formatDate(marathonStart)} </span> </p>
      </div>
    </div>
  );
};

export default MarathonDetails;