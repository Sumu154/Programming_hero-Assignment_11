import React from 'react';
import MyMarathonTable from '../components/MarathonComponents/MyMarathonTable';
import MarathonBanner from '../components/Header/MarathonBanner';
import { Helmet } from 'react-helmet';


const MyMarathonPage = () => {
  return (
    <div>
      <Helmet>
        <title> My marathon </title>
      </Helmet>
      <MarathonBanner></MarathonBanner>
      <MyMarathonTable></MyMarathonTable>
    </div>
  );
};

export default MyMarathonPage;