const express = require('express');
const { createRegistration, getRegistrations, getRegistrationsByEmail, updateRegistration, deleteRegistration } = require('../controllers/registrationController');
const router = express.Router();

// route for creating registration
router.post('/registrations', createRegistration);
// router for getting registration
router.get('/registrations', getRegistrations);
// router getting registrations by email
router.get('/registrations', getRegistrationsByEmail);
// router updating registration
router.put('/registrations/:id', updateRegistration);
// router deleting registration
router.delete('/registrations/:id', deleteRegistration);

module.exports = router;