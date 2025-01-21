const mongoose = require('mongoose');
const connectDB = require('../config/db');

const userSchema = new mongoose.Schema({
  email: String,
  photo: String,
  name: String,
})

module.exports = mongoose.model('User', userSchema);
