const express = require('express');
const router = express.Router();
const { getMarathons, getMarathonsWithLimit, getMarathonsUpcoming,  getMarathonById, getMarathonsBySorted, getMarathonByEmail, createMarathon, updateMarathon, deleteMarathon, updateRegCount } = require('../controllers/marathonController');
const { verifyToken } = require('../middlewares/authMiddleware') 


// create a marathon -> post
router.post('/marathons', verifyToken, createMarathon);
// show all marathons -> get
router.get('/marathons', verifyToken, getMarathons);
// get marathon by limit -> not verified for home
router.get('/marathons/limited', getMarathonsWithLimit)
// get marathons latest -> not verified for home
router.get('/marathons/upcoming', getMarathonsUpcoming)
// get marathon by id
router.get('/marathons/:id', verifyToken, getMarathonById);
// get marathons sorted
router.get('/sortedMarathons', verifyToken, getMarathonsBySorted)
// get marathons by email
router.get('/myMarathons', verifyToken, getMarathonByEmail);
// update a marathon -> put
router.put('/marathons/:id', verifyToken, updateMarathon);
// update total count of marathon
router.patch('/marathons/:id', verifyToken, updateRegCount)
// delete a marathon
router.delete('/marathons/:id', verifyToken, deleteMarathon);


module.exports = router;