import React from 'react';
import { Link } from 'react-router-dom';
import { FaLocationDot } from "react-icons/fa6";

import {formatDate} from '../../Utils/Formatters/dateFormatter.js'


const MarathonCard = ( { marathon } ) => {
  const {  _id:id, title, image, regStart, regEnd, marathonStart, location, distance, description, regCount } = marathon;

  return (
    <div className='border-black dark:border-[#444444] border-[1px] border-opacity-15 rounded-md p-3 hover:border-magenta hover:border-opacity-50 hover:p-2  dark:bg-cardbackground '>
      <div className='mb-4'> 
        <img className='rounded-lg h-[160px] w-full ' src={image} alt="" />
      </div>
      <div className='dark:text-white'>
        <h3 className='opacity-95 font-semibold text-xl  '> {title} </h3>
        <p className='opacity-90 font-medium flex items-center gap-1 '> <span className='text-'> <FaLocationDot /> </span> {location} </p>
        <p className='text-[15px] opacity-80 my-2'> {description} </p>
        <p className='text-[15px] '> Registration start: <span> {formatDate(regStart)} </span>  </p>
        <p className='text-[15px] '> Registration end: <span> {formatDate(regEnd)} </span> </p>
      </div>
      <div className='mt-3 '> <Link to={`/marathons/${id}`}> <button className='bg-magenta opacity-90 hover:opacity-100 px-3 py-1 rounded-md text-white '> Details </button> </Link> </div>
    </div>
  );

};

export default MarathonCard;