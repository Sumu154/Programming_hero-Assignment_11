import React from 'react';
import MarathonBanner from '../components/Header/MarathonBanner';
import AllMarathonCards from '../components/MarathonComponents/AllMarathonCards';

const MarathonsPage = () => {
  return (
    <div>
      <MarathonBanner></MarathonBanner>
      <AllMarathonCards></AllMarathonCards>
    </div>
  );
};

export default MarathonsPage;