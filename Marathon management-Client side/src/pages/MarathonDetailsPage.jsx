import React from 'react';
import MarathonBanner from '../components/Header/MarathonBanner';
import MarathonDetails from '../components/DetailsComponents/MarathonDetails';

const MarathonDetailsPage = () => {
  return (
    <div>
      <MarathonBanner></MarathonBanner>
      <MarathonDetails></MarathonDetails>
    </div>
  );
};

export default MarathonDetailsPage;