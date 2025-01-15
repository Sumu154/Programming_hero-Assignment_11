const mongoose = require('mongoose');
const connectDB = require('../config/db');

const registrationSchema = new mongoose.Schema({
  email: String,
  marathon_id: String,
  marathonTitle: String,
  marathonStart: Date,
  firstName: String,
  lastName: String,
  contactNumber: String,
  additional: String,
})

module.exports = mongoose.model('Registration', registrationSchema);
