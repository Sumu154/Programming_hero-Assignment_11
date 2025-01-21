import React from 'react';

const Testimonial = () => {
  return (
    <div className='dark:text-white '>
      <div className="mx-auto text-center mt-20 ">
        <h3 className="text-center font-semibold opacity-80 text-2xl md:text-3xl lg:text-4xl mb-1 ">What Our Participants Say</h3>
        <p className="max-w-[750px] mx-auto text-center mb-6 opacity-80 text-[15px] lg:text-base"> Hear from our participants about their experiences Hear from our participants about their experiences with our marathons! </p>
        <div className="w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
          <div className="bg-white  dark:bg-cardbackground p-6 rounded-lg shadow-lg">
            <p className="text-lg  italic mb-4">"Participating in the Marathon Management System event was a life-changing experience! It kept me motivated and healthy."</p>
            <p className="font-semibold">John Doe</p>
            <p className="text-sm ">Runner, 2024 Spring Marathon</p>
          </div>
          <div className="bg-white  dark:bg-cardbackground p-6 rounded-lg shadow-lg  ">
            <p className="text-lg italic mb-4">"The event was so well-organized, and the community was incredibly supportive. I can't wait for the next one!"</p>
            <p className="font-semibold">Jane Smith</p>
            <p className="text-sm ">Runner, 2023 Winter Marathon</p>
          </div>
          <div className="bg-white  dark:bg-cardbackground p-6 rounded-lg shadow-lg ">
            <p className="text-lg italic mb-4">"I participated in the marathon to support a charity, and it was amazing to see so many people come together for a good cause."</p>
            <p className="font-semibold">Michael Johnson</p>
            <p className="text-sm ">Participant, 2023 Summer Run</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;