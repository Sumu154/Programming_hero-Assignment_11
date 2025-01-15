import React, { useEffect } from 'react';
import { MdOutlineExplore } from "react-icons/md";

import '../../assets/stylesheets/home.css'
import Banner2 from '../../assets/images/banner2.jpg'


import AOS from 'aos';
import 'aos/dist/aos.css';

const HomeBanner = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,   // animation duration
      once: true,       // // Whether animation should happen only once
    })
  }, []);


  return (
    <div className="carousel w-full">
      {/* slide 1 */}
      <div id="slide1" className="carousel-item relative w-full ">
        <div className='w-[90%] mx-auto py-6 lg:py-0'>
          <div className='w-[85%] py-12 lg:py-24'>
            <p  data-aos="fade-down-right" className='text-white opacity-80 text-lg md:inline-block max-w-[550px] mx-auto font-Roboto '> Join the Journey, One Step at a Time </p>
            <h3 data-aos="zoom-out" className='text-white font-bold text-xl sm:text-4xl md:text-6xl lg:text-7xl max-[80%] '> Seamlessly Manage Marathons and Inspire Movements </h3>
            <button className='text-white bg-magenta py-2 px-4 mt-8 flex items-center gap-1'> <MdOutlineExplore /> Explore Marathons </button>
          </div>
        </div>
        {/* left right bar */}
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>

      {/* slide 2 */}
      {/* <div id="slide2" className="carousel-item relative w-full bg-slate-200  dark:bg-cardbackground">
        <div className='flex justify-between items-center w-[90%] mx-auto py-6 lg:py-0'>
          <div className='w-full sm:w-[55%] text-center dark:text-white'>
            <h3 className='font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl max-w-[600px] mx-auto mb-4 px-2'> Help Empower Local Entrepreneurs in Bangladesh </h3>
            <p className='text-dark opacity-60 text-sm  max-w-[550px] mx-auto mb-4 px-4'> Support small businesses and innovative projects by contributing to their growth. Your donations fuel their dreams. </p>
          </div>
          <div className='w-full sm:w-[45%]'>
            <img className=' ' src={slider1} alt="" />
          </div>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>


      <div id="slide3" className="carousel-item relative w-full bg-slate-200  dark:bg-cardbackground">
        <div className='flex justify-between items-center w-[90%] mx-auto py-6 lg:py-0'>
          <div className='w-full sm:w-[55%] text-center dark:text-white'>
            <h3 className='font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl max-w-[600px] mx-auto mb-4 px-2'> Support Education for Underprivileged Children </h3>
            <p className='text-dark opacity-60 text-sm  max-w-[550px] mx-auto mb-4 px-4'>         Your donation can help provide quality education for children in remote areas. Let's work together to shape their future. </p>
          </div>
          <div className='w-full sm:w-[45%]'>
            <img className=' ' src={slider2} alt="" />
          </div>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div> */}

    </div>
  );
};

export default HomeBanner;