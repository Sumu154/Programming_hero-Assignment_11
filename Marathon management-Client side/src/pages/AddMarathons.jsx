import React from 'react';
import AddMarathonForm from '../components/MarathonComponents/AddMarathonForm';
import { Helmet } from 'react-helmet';


const AddMarathons = () => {
  return (
    <div>
      <Helmet>
        <title> Add marathons </title>
      </Helmet>
      <AddMarathonForm></AddMarathonForm>
    </div>
  );
};

export default AddMarathons;