const express = require('express')
const bodyParser = require('body-parser')
const keys = require('./config/keys')
const mongoose = require('mongoose');
require('./models/user');
require('./models/doctor');
require('./models/schedule');

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI);

app.use(bodyParser.json())
require('./routes/authRoutes')(app)
require('./routes/docRoutes')(app) 

if (process.env.NODE_ENV === 'production') {
    // Express will serve up production assets
    // like our main.js file, or main.css file!
    app.use(express.static('client/build'));
  
    // Express will serve up the index.html file
    // if it doesn't recognize the route
    const path = require('path');
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }

const port = process.env.PORT || 5000
app.listen(port)