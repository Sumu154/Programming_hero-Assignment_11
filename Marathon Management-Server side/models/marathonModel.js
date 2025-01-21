const mongoose = require('mongoose');
const connectDB = require('../config/db');

const marathonSchema = new mongoose.Schema({
  title: String,
  image: String,
  regStart: Date,
  regEnd: Date,
  marathonStart: Date,
  email: String,
  location: String,
  distance: String,
  description: String,
  createdAt: Date,
  regCount: Number
})

module.exports = mongoose.model('Marathon', marathonSchema);