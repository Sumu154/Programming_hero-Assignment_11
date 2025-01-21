import React, { useContext, useEffect, useState } from 'react';
import { MarathonContext } from '../../contexts/MarathonProvider';

import axios from 'axios';
import MarathonCard from './MarathonCard';


const AllMarathonCards = () => {
  const { marathons, setMarathons } = useContext(MarathonContext);
  const [sortOrder, setSortOrder] = useState('');


  const handleSortChange = (order) => {
    setSortOrder(order);
  }

  useEffect(() => {
    const fetchMarathons = async () => {
      console.log(sortOrder);
      if(sortOrder===''){
        console.log('all marathons');
        const res = await axios.get('http://localhost:3000/api/marathons', {withCredentials: true});

        setMarathons(res.data);
      }
      else{
        console.log('its sorted')
        const res = await axios.get(`http://localhost:3000/api/sortedMarathons?sort=${sortOrder}`, {withCredentials: true});
        setMarathons(res.data);
        console.log(res.data);
      }
    }
    fetchMarathons();
  }, [sortOrder])
  

  return (
    <div className='w-[90%] mx-auto '>
      <div className='flex justify-between items-center'>
        <h3 className='py-6 font-medium text-black opacity-80 text-2xl md:text-3xl   dark:text-white '> See all marathons here </h3>
        {/* <select onChange={handleSortChange} value={sortOrder} className="bg-orange text-white px-4 py-[6px] font-semibold rounded-lg" >
          <option value="desc"> Latest </option>
          <option value="asc"> Oldest </option>
        </select> */}
        <div className="dropdown dropdown-bottom dropdown-end dropdown-hover  ">
          <div tabIndex={0} role="button" className=" bg-orange text-white px-4 py-[6px] font-semibold rounded-lg">  Sort By </div>
          <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-32 p-2 shadow">
            <li><a onClick={()=> handleSortChange('desc')} className='hover:bg-darkyellow hover:text-white hover:font-bold '>  Latest </a></li>
            <li><a onClick={()=> handleSortChange('asc')} className='hover:bg-darkyellow hover:text-white hover:font-bold '>  Oldest </a></li>
          </ul>
        </div>
      </div> 
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 '> 
        {marathons.map((it) => {
          return <MarathonCard marathon={it} ></MarathonCard>
      })}
      </div>
    </div>
  );
};

export default AllMarathonCards;