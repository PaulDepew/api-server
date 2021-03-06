'use strict';

/**
 * Products Class
 * @module Products
 */

const schema = require('./products-schema');
const Model = require('../mongo-interface');

class Products extends Model {
  constructor(){
    super(schema);
  }
}

module.exports = Products;