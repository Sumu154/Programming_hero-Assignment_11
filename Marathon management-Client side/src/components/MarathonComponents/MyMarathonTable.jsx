import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import axios, { Axios } from 'axios';
import { Link } from 'react-router-dom';

import { formatDate } from '../../Utils/Formatters/dateFormatter';
import Swal from 'sweetalert2';

const MyMarathonTable = () => {
  const { user } = useContext(AuthContext);
  const email = user.email;

  const [ MyMarathons, setMyMarathons ] = useState([]);

  useEffect(() => {
    const fetchMyMarathons = async () => {
      const res = await axios.get(`http://localhost:3000/api/myMarathons?email=${email}`, {withCredentials: true});
      setMyMarathons(res.data);
    }
    fetchMyMarathons();
  }, [email]);


  const handleDeleteMarathon = async (id) => {
    //console.log(id);

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
      await Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success"
      });

      // Add your delete logic here, if any
      // caMpaigns database theke delete
      const res1 = await axios.delete(`http://localhost:3000/api/marathons/${id}`, { withCredentials: true });
      // donatedUser databse theke delete
      const res2 = await axios.delete(`http://localhost:3000/api/registrations/${id}`, { withCredentials: true });

      if(res1.status === 200 && res2.status === 200){
        setMyMarathons(MyMarathons.filter(it => it._id !== id));
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
    <div className='w-[90%] mx-auto  mt-14   '>
      <h3 className='py-6 font-medium text-black opacity-80 text-2xl md:text-3xl   dark:text-white'> See your marathons here  </h3>
      <div className="overflow-x-auto bg-white dark:bg-cardbackground ">
        <table className="table">
          {/* head */}
          <thead>
            <tr className='text-black text-opacity-80 text-sm  lg:text-base    dark:text-white '>
              <th> Title </th>
              <th> Location </th>
              <th> Distance </th>
              <th> Marathon Start Date </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            { MyMarathons.map((it) => {
              const { _id:id, title, location, distance, marathonStart } = it;

              return (
                <tr className='text-sm text-black text-opacity-70    dark:text-white  dark:text-opacity-85'>
                  <td> {title} </td>
                  <td> {location} </td>
                  <td> {distance} </td>
                  <td> {formatDate(marathonStart)} </td>
                  <td> <Link to={`/marathons/${id}`}> <button className='bg-magenta opacity-90 hover:opacity-100 px-3 py-1 rounded-md text-white '> Details </button> </Link> </td>
                  <td> <Link to={`/updateMarathon/${id}`}> <button className='bg-orange opacity-90 hover:opacity-100 px-3 py-1 rounded-md text-white '> Update </button> </Link> </td>
                  <td> <button onClick={()=>handleDeleteMarathon(id)} className='bg-redd opacity-95 hover:opacity-100 px-3 py-1 rounded-md text-white '> Delete </button> </td>
                </tr>
              )
            })} 
          </tbody>
          
        </table>
      </div>
    </div>
  );
};

export default MyMarathonTable;