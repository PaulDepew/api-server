'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({

  // GIVE THIS THE KEY:VALUE PAIRS OF CATEGORIES
  name: {type: String, require: true},
 

});

module.exports = mongoose.model('categories', schema);

