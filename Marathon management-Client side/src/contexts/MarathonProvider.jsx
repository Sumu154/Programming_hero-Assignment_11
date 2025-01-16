import React, { createContext, useState } from 'react';


export const MarathonContext = createContext();

const MarathonProvider = ( {children} ) => {
  const [ marathons, setMarathons ] = useState([]);
  
  return (
    <div>
      <MarathonContext.Provider value={ {marathons, setMarathons} } >
        { children }
      </MarathonContext.Provider>
    </div>
  );
};

export default MarathonProvider;