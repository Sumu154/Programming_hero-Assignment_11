import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const MarathonDetails = () => {
  const { user } = useContext(AuthContext);

  const marathon = useLoaderData();
  const {  _id:id, title, image, regStart, regEnd, marathonStart, location, distance, description, regCount } = marathon;

  return (
    <div>
      
    </div>
  );
};

export default MarathonDetails;