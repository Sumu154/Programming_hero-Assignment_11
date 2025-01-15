const express = require('express');
const { getMarathons,  getMarathonById, createMarathon, updateMarathon, deleteMarathon } = require('../controllers/marathonController');
const router = express.Router();


// create a marathon -> post
router.post('/marathons', createMarathon);
// show all marathons -> get
router.get('/marathons', getMarathons);
// get marathon by id
router.get('/marathons/:id', getMarathonById);
// update a marathon -> put
router.put('/marathons/:id', updateMarathon);
// delete a marathon
router.delete('/marathons/:id', deleteMarathon);


module.exports = router;