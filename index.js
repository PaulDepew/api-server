'user strict';

/**
 * Entry Index
 * @module Index
 */


const server = require('./lib/server.js');
const mongoose = require('mongoose');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_ATLAS_URI, {
  useCreateIndex: true,
  useUnifiedTopology: true,
  useNewUrlParser: true,
});


server.start(PORT);





