const express = require('express');
const router = express.Router();
const { createUser, getUsers, getUserById } = require('../controllers/userController');


// create a marathon -> post
router.post('/users', createUser);
// show all users -> get
router.get('/users', getUsers);
// get marathon by id
router.get('/users/:id', getUserById);


module.exports = router;