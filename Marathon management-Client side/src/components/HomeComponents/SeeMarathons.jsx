import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MarathonCard from '../MarathonComponents/MarathonCard';

const SeeMarathons = () => {
  const [ marathons, setMarathons ] = useState([]);

  useEffect(() => {
    const fetchMarathons = async () => {
      const res = await axios.get('https://marathon-management-server-side.vercel.app/api/marathons/limited');
      setMarathons(res.data);
    }
    fetchMarathons();
  }, [])


  return (
    <div className='w-[90%] mx-auto dark:text-white  '>
      <div className="mx-auto mt-20 ">
        <h3 className="text-center font-semibold opacity-80 text-2xl md:text-3xl lg:text-4xl mb-1 "> Our Organized Marathons </h3>
        <p className="max-w-[750px] mx-auto text-center mb-6 px-4 opacity-80 text-[15px] lg:text-base"> Explore the exciting marathons we have organized, bringing communities together to run, compete, and celebrate! </p>
        
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 '>
          {marathons.map((it) => {
            return <MarathonCard marathon={it}></MarathonCard>
          })}
        </div>


      </div>
    </div>
  );
};

export default SeeMarathons;