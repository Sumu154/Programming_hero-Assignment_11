const userModel = require('../models/userModel');
const jwt = require('jsonwebtoken');
// const cookieParser = require('cookie-parser');


const createToken = (req, res) => {
  const email = req.body;
  const token = jwt.sign(email, process.env.JWT_SECRET, {expiresIn: '24h'});
  res.cookie('token', token, {
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  });
  res.send('successfully token generated');
}


// get the cookie
const getToken = (req, res) => {
  const token = req.cookies.token;
  if(token){
    res.send(`token received: ${token} `);
  }
  else{
    res.status(404).send('No token found');
  }
}

module.exports = { createToken, getToken };
