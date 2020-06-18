'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({

  // GIVE THIS THE KEY:VALUE PAIRS OF CATEGORIES
  name: {type: String, require: true},
  category: {type: String},
  description: {type: String},
  price: {type: Number},
 

});

module.exports = mongoose.model('products', schema);

