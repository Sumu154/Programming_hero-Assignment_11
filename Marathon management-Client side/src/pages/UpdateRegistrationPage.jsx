import React from 'react';
import UpdateRegistrationForm from '../components/ApplyRegistration/UpdateRegistrationForm';
import { useLoaderData } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const UpdateRegistrationPage = () => {
  const registration = useLoaderData();


  return (
    <div>
      <Helmet>
        <title> Update registration </title>
      </Helmet>
      <UpdateRegistrationForm registration={registration}></UpdateRegistrationForm>
    </div>
  );
};

export default UpdateRegistrationPage;