const userModel = require('../models/userModel');

const createUser = async (req, res) => {
  try{
    // console.log('post api hitting');
    const user = req.body;

    const createdUser = await userModel.create(user);
    res.status(200).json(createdUser);
  }
  catch(e){
    res.status(500).json({ message: 'Internal server error: ', error:e.message });
  }
}


const getUsers = async (req, res) => {
  try{
    const users = await userModel.find();
    res.status(200).json(users);
  }
  catch(e){
    res.status(500).json({ message: 'Internal server error: ', error:e.message });
  }
  
}


const getUserById = async (req, res) => {
  try{
    const id = req.params.id;
    // console.log(id);
    const user = await userModel.findOne( {_id: id} );
    res.status(200).json(user);
  }
  catch(e){
    res.status(500).json({ message: 'Internal server error: ', error:e.message });
  }
}

module.exports = { createUser, getUsers, getUserById };

