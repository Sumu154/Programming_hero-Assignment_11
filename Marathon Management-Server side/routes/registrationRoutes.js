const express = require('express');
const router = express.Router();
const { createRegistration, getRegistrations, getRegistrationById, getRegistrationsByEmail, updateRegistration, deleteRegistration } = require('../controllers/registrationController');
const { verifyToken } = require('../middlewares/authMiddleware')

// route for creating registration
router.post('/registrations', verifyToken, createRegistration);
// router for getting registration
router.get('/registrations', verifyToken, getRegistrations);
// get marathon by id
router.get('/registrations/:id', verifyToken, getRegistrationById);
// router getting registrations by email
router.get('/myRegistrations', verifyToken, getRegistrationsByEmail);
// router updating registration
router.put('/registrations/:id', verifyToken, updateRegistration);
// router deleting registration
router.delete('/registrations/:id', verifyToken, deleteRegistration);

module.exports = router;