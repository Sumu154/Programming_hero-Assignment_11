import React, { useContext, useEffect } from 'react';
import { MarathonContext } from '../../contexts/MarathonProvider';

import axios from 'axios';
import MarathonCard from './MarathonCard';


const AllMarathonCards = () => {
  const { marathons, setMarathons } = useContext(MarathonContext);

  useEffect(() => {
    const fetchMarathons = async () => {
      const res = await axios.get('http://localhost:3000/api/marathons');
      setMarathons(res.data);
    }
    fetchMarathons();
  }, [])
  

  return (
    <div className='w-[90%] mx-auto '>
      <h3 className='py-6 font-medium text-black opacity-80 text-2xl md:text-3xl   dark:text-white '> See all campaigns here </h3> 
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 '> {marathons.map((it) => {
        return <MarathonCard marathon={it} ></MarathonCard>
      })}
      </div>
    </div>
  );
};

export default AllMarathonCards;