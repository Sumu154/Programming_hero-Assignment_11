import React from 'react';
import MarathonBanner from '../components/Header/MarathonBanner';
import MarathonDetails from '../components/DetailsComponents/MarathonDetails';
import { Helmet } from 'react-helmet';

const MarathonDetailsPage = () => {
  return (
    <div>
      <Helmet>
        <title> Marathon details </title>
      </Helmet>
      <MarathonBanner></MarathonBanner>
      <MarathonDetails></MarathonDetails>
    </div>
  );
};

export default MarathonDetailsPage;