import React from 'react';
import MyApplyListTable from '../components/ApplyRegistration/MyApplyListTable';
import { Helmet } from 'react-helmet';
import MarathonBanner from '../components/Header/MarathonBanner';


const MyApplyListPage = () => {
  return (
    <div>
      <Helmet>
        <title> My apply list </title>
      </Helmet>
      <MarathonBanner></MarathonBanner>
      <MyApplyListTable></MyApplyListTable>
    </div>
  );
};

export default MyApplyListPage;