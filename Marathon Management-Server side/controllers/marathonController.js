const marathonModel = require('../models/marathonModel');


const createMarathon = async (req, res) => {
  try{
    console.log('post api hitting');
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
  try{
    const marathons = await marathonModel.find();
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
    console.log(id);
    const marathon = await marathonModel.findOne( {_id: id} );
    res.status(200).json(marathon);
  }
  catch(e){
    res.status(500).json({ message: 'Internal server error: ', error:e.message });
  }
}


// update a marathon by id
const updateMarathon = async (req, res) => {
  try{
    const id = req.params.id;
    const updatedMarathon = await marathonModel.findOneAndUpdate(
      id,
      req.body,
      { new: true },
    )
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
    console.log(id);

    const deletedMarathon = await marathonModel.findByIdAndDelete(id);
    res.status(200).json(deletedMarathon);
  }
  catch(e){
    res.status(500).json({ message: 'Internal Server Error', error: e.message });
  }
}


module.exports = { getMarathons,  getMarathonById, createMarathon, updateMarathon, deleteMarathon };