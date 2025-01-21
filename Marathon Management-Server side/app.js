const express = require('express');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const path = require('path');
const cors = require('cors');


const app = express();

app.set('View engine', 'ejs');
app.use(cors({
  origin: ['http://localhost:5173'],
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded( {extended: true} ));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());

const port = process.env.PORT || 3000;

const marathonRoutes = require('./routes/marathonRoutes');
const registrationRoutes = require('./routes/registrationRoutes')
const userRoutes = require('./routes/userRoutes')
const authRoutes = require('./routes/authRoutes')

app.get('/', (req, res) => {
  res.send('hello......chill pill marathon cholbe');
})

// api routes from database
app.use('/api', marathonRoutes);
app.use('/api', registrationRoutes);
app.use('/api', userRoutes)
app.use('/api', authRoutes);


app.listen(port, () => {
  console.log(`server is running at port ${port} `)
})