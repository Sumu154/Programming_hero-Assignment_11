const marathonModel = require('../models/marathonModel');


const createMarathon = async (req, res) => {
  try{
    // console.log('post api hitting');
    const marathon = req.body;

    const createdMarathon = await marathonModel.create(marathon);
    res.status(200).json(createdMarathon);
  }
  catch(e){
    res.status(500).json({ message: 'Internal server error: ', error:e.message });
  }
}


// get all the marathons
const getMarathons = async (req, res) => {
  // console.log('get all marathons');
  try{
    const marathons = await marathonModel.find();
    res.status(200).json(marathons);
  }
  catch(e){
    res.status(500).json({ message: 'Internal server error: ', error:e.message })
  }
}


// get marathons with limit
const getMarathonsWithLimit = async (req, res) => {
  try{
    const marathons = await marathonModel.find().limit(6);
    res.status(200).json(marathons);
  }
  catch(e){
    res.status(500).json({ message: 'Internal server error: ', error:e.message })
  }
}

// upcoming 6 marathons
const getMarathonsUpcoming = async (req, res) => {
  try{
    const marathons = await marathonModel.find().sort({marathonStart: -1}).limit(6);
    res.status(200).json(marathons);
  }
  catch(e){
    res.status(500).json({ message: 'Internal server error: ', error:e.message })
  }
}


// get marathon by id 
const getMarathonById = async (req, res) => {
  try{
    const id = req.params.id;
    // console.log(id);
    const marathon = await marathonModel.findOne( {_id: id} );
    res.status(200).json(marathon);
  }
  catch(e){
    res.status(500).json({ message: 'Internal server error: ', error:e.message });
  }
}


// get sorted marathons
const getMarathonsBySorted = async (req, res) => {
  // console.log('get sorted marathons');
  // console.log(req.query);
  const order = req.query.sort;
  // console.log(order);
  const sortBy = order==='asc' ? 1 : -1;
  // console.log(sortBy);

  try{
    const marathons = await marathonModel.find().sort({createdAt: sortBy});
    res.status(200).json(marathons);
  }
  catch(e){
    res.status(500).json({ message: 'Internal server error: ', error:e.message })
  }
}


// get campaign by one user -> by email
const getMarathonByEmail = async (req, res) => {
  try{
    const email = req.query.email;
    // console.log(email);

    let myMarathons = await marathonModel.find( {email} );
    res.status(200).json(myMarathons)
  }
  catch(e){
    res.status(500).json({ message: 'Internal Server Error', error: e.message });
  }
}



// update a marathon by id
const updateMarathon = async (req, res) => {
  try{
    const id = req.params.id;
    const updatedMarathon = await marathonModel.findOneAndUpdate(
      { _id:id },
      req.body,
      { new: true },
    )
    res.status(200).json(updatedMarathon);
  }
  catch(e){
    res.status(500).json({ message: 'Internal server error: ', error:e.message });
  }
}

// update marathon -> only regCount change korbo
const updateRegCount = async (req, res) => {
  try{
    const id = req.params.id;
    const { action } = req.body;
    const change = action==='increment' ? 1 : -1;

    const updatedMarathon = await marathonModel.findByIdAndUpdate(
      id,
      { $inc: {regCount: change} },
      { new: true }
    );
    res.status(200).json(updatedMarathon);
  }
  catch(e){
    res.status(500).json({ message: 'Internal server error: ', error:e.message });
  }
}

// delete a marathon by id
const deleteMarathon = async (req, res) => {
  try{
    const id = req.params.id;
    // console.log(id);

    const deletedMarathon = await marathonModel.findByIdAndDelete(id);
    res.status(200).json(deletedMarathon);
  }
  catch(e){
    res.status(500).json({ message: 'Internal Server Error', error: e.message });
  }
}


module.exports = { getMarathons, getMarathonsWithLimit, getMarathonsUpcoming, getMarathonById, getMarathonsBySorted, getMarathonByEmail, createMarathon, updateMarathon, deleteMarathon, updateRegCount };