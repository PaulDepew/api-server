'use strict';


/**
 * Categories schema
 * @module categories-schema
 */

const mongoose = require('mongoose');

const schema = new mongoose.Schema({

  // GIVE THIS THE KEY:VALUE PAIRS OF CATEGORIES
  name: {type: String, require: true},
 

});

module.exports = mongoose.model('categories', schema);

