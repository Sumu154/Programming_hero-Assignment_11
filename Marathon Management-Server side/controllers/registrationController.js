const registrationModel = require('../models/registrationModel');


const createRegistration = async (req, res) => {
  try{
    // console.log('post api hitting');
    const registration = req.body;

    const createdRegistration = await registrationModel.create(registration);
    res.status(200).json(createdRegistration);
  }
  catch(e){
    res.status(500).json({ message: 'Internal server error: ', error:e.message });
  }
}


// get all the registration
const getRegistrations = async (req, res) => {
  try{
    const registrations = await registrationModel.find();
    res.status(200).json(registrations);
  }
  catch(e){
    res.status(500).json({ message: 'Internal server error: ', error:e.message });
  }
  
}


const getRegistrationById = async (req, res) => {
  try{
    const id = req.params.id;
    // console.log(id);
    const registration = await registrationModel.findOne( {_id: id} );
    res.status(200).json(registration);
  }
  catch(e){
    res.status(500).json({ message: 'Internal server error: ', error:e.message });
  }
}


// email diye -> ekjon je je marathone registration korce oi info
// shb info/registration ei marathon_id add hbe -> marathon_id diye marathon info peye jabo then show korbo
const getRegistrationsByEmail = async (req, res) => {
  // console.log('registration by email')
  try{
    const email = req.query.email;
    // console.log(email);
    let registrations = await registrationModel.find({ email: email });
    res.status(200).json(registrations);
  }
  catch(e){
    res.status(500).json({ message: 'Internal server error: ', error:e.message });
  }
}


// update registartion information
const updateRegistration = async (req, res) => {
  try{
    const id = req.params.id;
    const updatedRegistration = await registrationModel.findByIdAndUpdate(
      {_id:id},
      req.body,
      { new: true }
    )
    res.status(200).json(updatedRegistration);
  }
  catch(e){
    res.status(500).json({ message: 'Internal server error: ', error:e.message });
  }
} 


// delete registration information
const deleteRegistration = async (req, res) => {
  try{
    const marathon_id = req.params.id;
    // console.log(marathon_id);

    const deletedRegistration = await registrationModel.deleteMany(marathon_id);
    res.status(200).json(deletedRegistration);
  }
  catch(e){
    res.status(500).json({ message: 'Internal server error: ', error:e.message });
  }
}



module.exports = { createRegistration, getRegistrations, getRegistrationById, getRegistrationsByEmail, updateRegistration, deleteRegistration };

