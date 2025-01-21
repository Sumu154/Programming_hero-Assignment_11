import React from 'react';
import MarathonBanner from '../components/Header/MarathonBanner';
import AllMarathonCards from '../components/MarathonComponents/AllMarathonCards';
import { Helmet } from 'react-helmet';

const MarathonsPage = () => {
  return (
    <div>
      <Helmet>
        <title> All marathons </title>
      </Helmet>
      <MarathonBanner></MarathonBanner>
      <AllMarathonCards></AllMarathonCards>
    </div>
  );
};

export default MarathonsPage;