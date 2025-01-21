import React from 'react';
import { useLoaderData } from 'react-router-dom';
import UpdateMarathonForm from '../components/MarathonComponents/UpdateMarathonForm';
import { Helmet } from 'react-helmet';

const UpdateMarathonPage = () => {
  const marathon = useLoaderData();


  return (
    <div>
      <Helmet>
        <title> Update marathon </title>
      </Helmet>
      <UpdateMarathonForm marathon={marathon} ></UpdateMarathonForm>
    </div>
  );
};

export default UpdateMarathonPage;