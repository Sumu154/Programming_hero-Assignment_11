import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import axios, { Axios } from 'axios';
import { Link } from 'react-router-dom';

import { formatDate } from '../../Utils/Formatters/dateFormatter';
import Swal from 'sweetalert2';


const MyApplyListTable = () => {
  const { user } = useContext(AuthContext);
  const email = user.email;

  const [ myRegistrations, setMyRegistrations ] = useState([]);
  const [ marathons, setMarathons ] = useState([]);
  const [ searchTerm, setSearchTerm ] = useState('');


  useEffect(() => {
    const fetchMyRegistrations = async () => {
      const res = await axios.get(`http://localhost:3000/api/myRegistrations?email=${email}`, {withCredentials: true });
      console.log(res.data);
      setMyRegistrations(res.data);
    }
    fetchMyRegistrations();
  }, [email, searchTerm]);


  useEffect(() => {
    if(myRegistrations.length === 0){
      return;
    }

    const marathonsWithRegisterId = myRegistrations.map(it => {
      return {
        marathon_id: it.marathon_id,
        registration_id: it._id,

      }
    })
    console.log(marathonsWithRegisterId);

    const fetchMarathons = async () => {
      const marathonData = await Promise.all(
        marathonsWithRegisterId.map(async (it) => {
          console.log(it.marathon_id, it.registration_id);
          const res = await axios.get(`http://localhost:3000/api/marathons/${it.marathon_id}`, { withCredentials: true });
          return {
            ...res.data, // Marathon details -> jeta database theke pailam
            registration_id: it.registration_id, // Include registration ID
          };
        })
      );
      
      // console.log(marathonData)
      const filteredMarathons = marathonData.filter((it) =>
        it.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setMarathons(filteredMarathons);
    }

    fetchMarathons();
  }, [myRegistrations])

  


  const handleDeleteRegistration = async (registration_id) => {
    const alert = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    });
  
    if(alert.isConfirmed){
      // registrations databse theke delete
      const res = await axios.delete(`http://localhost:3000/api/registrations/${registration_id}`, { withCredentials: true });
      console.log(res.data);
      if(res.status===200){
        await Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });

        setMyRegistrations((prev) =>
          prev.filter((registration) => registration._id !== registration_id)
        );

        setMarathons((prev) =>
          prev.filter((marathon) => marathon.registration_id !== registration_id)
        );

       
      }
      else{
        Swal.fire({
          title: "Error",
          text: "Failed to delete the campaign.",
          icon: "error",
        });
      }
    }

  }



  return (
    <div className='w-[90%] mx-auto  mt-14 '>
      <div className='flex justify-between items-center mb-8'>
        <h3 className='font-medium text-black opacity-80 text-2xl md:text-3xl   dark:text-white'>  Your registered marathons  </h3>
        <input type="text" value={searchTerm} placeholder="Search by title"
        className="w-[400px] px-4 py-2 border rounded-md" 
        onChange={(e) => setSearchTerm(e.target.value)} // Update searchTerm on input change
        />
      </div>
      <div className="overflow-x-auto  bg-white dark:bg-cardbackground ">
        <table className="table">
          {/* head */}
          <thead>
            <tr className='text-black text-opacity-80 text-sm lg:text-base    dark:text-white '>
              <th> Title </th>
              <th> Location </th>
              <th> Distance </th>
              <th> Marathon Start Date </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            { marathons.map((it) => {
              console.log(it);
              const { _id:id, marathon_id, registration_id, title, location, distance, marathonStart } = it;

              return (
                <tr className='text-sm text-black text-opacity-70    dark:text-white  dark:text-opacity-85'>
                  <td> {title} </td>
                  <td> {location} </td>
                  <td> {distance} </td>
                  <td> {formatDate(marathonStart)} </td>
                  <td> <Link to={`/marathons/${id}`}> <button className='bg-magenta opacity-90 hover:opacity-100 px-3 py-1 rounded-md text-white '> Details </button> </Link> </td>
                  <td> <Link to={`/updateRegistration/${registration_id}`}> <button className='bg-orange opacity-90 hover:opacity-100 px-3 py-1 rounded-md text-white '> Update </button> </Link> </td>
                  <td> <button onClick={()=>handleDeleteRegistration(registration_id)} className='bg-redd opacity-95 hover:opacity-100 px-3 py-1 rounded-md text-white '> Delete </button> </td>
                </tr>
              )
            })} 
          </tbody>
          
        </table>
      </div>
    </div>
  );
};

export default MyApplyListTable;