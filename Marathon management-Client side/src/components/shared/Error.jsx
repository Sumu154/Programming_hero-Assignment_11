import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div>
      <h3 className='text-5xl'> Error 404 </h3>
      <p className='text-center py-32 underline'> <Link to={'/'} > Go to home </Link> </p>
    </div>
  );
};

export default Error;