'use strict';

/**
 *  Category Class
 * @module Category
 */

const schema = require('./categories-schema');
const Model = require('../mongo-interface');

class Categories extends Model {
  constructor(){
    super(schema);
  }
}

module.exports = Categories;