import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';


export const LoadingContext = createContext();

const LoadingProvider = ( {children} ) => {

  const [ loading, setLoading ] = useState(true);

  return (
    <LoadingContext.Provider value={ {loading, setLoading} }>
      { children }
    </LoadingContext.Provider>
  );
};

export default LoadingProvider;