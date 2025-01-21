import React from 'react';

import fitness from '../../assets/images/fitness.png'

const WhyPractice = () => {
  return (
    <div className=' mt-20 dark:text-white '>
      <h3 className=" text-center font-semibold opacity-80 text-2xl md:text-3xl lg:text-4xl mb-1 ">Why Participate in Marathons?</h3>
      <p className="max-w-[750px] mx-auto text-center mb-6 opacity-80 text-[15px] lg:text-base ">Marathons are more than just a race—they are a journey of self-discovery and achievement. Whether you're looking to challenge yourself, improve your health marathons offer a unique experience </p>
      <div className='bg-white py-8  dark:bg-cardbackground '>
        <div className='w-[90%] mx-auto flex justify-between items-center gap-4 lg:gap-8'>
          <div className="text-sm lg:text-base ">
            <ul className="list-none text-left mx-auto ">
              <li className="mb-2"><span className="font-bold">Physical Health:</span> Enhance cardiovascular health, build endurance, and boost energy levels.</li>
              <li className="mb-2"><span className="font-bold">Mental Strength:</span> Push your limits, overcome challenges, and improve focus and determination.</li>
              <li className="mb-2"><span className="font-bold">Community Spirit:</span> Meet like-minded individuals and join a supportive, encouraging community.</li>
              <li className="mb-2"><span className="font-bold">Charity Support:</span> Raise funds for important causes and make a positive impact in the world.</li>
            </ul>
          </div>
          <img className='w-[40%]  ' src={fitness} alt="" />
        </div>
      </div>
    </div>
  );
};

export default WhyPractice;