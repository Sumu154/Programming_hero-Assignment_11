import React, {  useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { AuthContext } from '../contexts/AuthProvider';
import { LoadingContext } from '../contexts/LoadingProvider';
import Loading from '../components/shared/Loading'

const PrivateRoute = ( {children} ) => {
  const { user } = useContext(AuthContext);
  const { loading } = useContext(LoadingContext);

  const path = useLocation().pathname;

  if(loading){
    return <Loading></Loading>
  }

  if(user){
    return children;
  }

  return (
    <div>
      <Navigate state={path} to={'/auth/login'}>  </Navigate>
    </div>
  );
};

export default PrivateRoute;