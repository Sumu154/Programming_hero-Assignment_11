import React from 'react';
import HomeBanner from '../components/Header/HomeBanner';
import { Helmet } from 'react-helmet';
import WhyPractice from '../components/HomeComponents/WhyPractice';
import Testimonial from '../components/HomeComponents/Testimonial';
import SeeMarathons from '../components/HomeComponents/SeeMarathons';
import UpcomingMarathons from '../components/HomeComponents/UpcomingMarathons';

const HomePage = () => {
  return (
    <div>
      <Helmet>
        <title> Home </title>
      </Helmet>
      <HomeBanner></HomeBanner>
      <WhyPractice></WhyPractice>
      <SeeMarathons></SeeMarathons>
      <Testimonial></Testimonial>
      <UpcomingMarathons></UpcomingMarathons>
    </div>
  );
};

export default HomePage;