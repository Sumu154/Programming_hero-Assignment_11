const express = require('express');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const path = require('path');
const cors = require('cors');


const app = express();

app.set('View engine', 'ejs');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded( {extended: true} ));
app.use(express.static(path.join(__dirname, 'public')));


const port = process.env.PORT || 3000;

const marathonRoutes = require('./routes/marathonRoutes');
const registrationRoutes = require('./routes/registrationRoutes')

app.get('/', (req, res) => {
  res.send('hello......chill pill marathon cholbe');
})

// api routes from database
app.use('/api', marathonRoutes);
app.use('/api', registrationRoutes);



app.listen(port, () => {
  console.log(`server is running at port ${port} `)
})