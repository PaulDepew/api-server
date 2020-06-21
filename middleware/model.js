'use strict';


/**
 * getModel
 * @module getModel
 */

 /**
  * getModel creates the model needed for the request
  * @param request
  * @param response
  * @param next
  * @function getModel
  * @returns {object}
  */

// CategoriesModel
const CategoriesModel = require('../models/categories/categories-model.js');
// ProductsModel
const ProductsModel = require('../models/products/products-model.js');


function getModel(req, res, next) {
  let model = req.params.model;

  switch (model) {
  case 'categories':
    req.model = new CategoriesModel();
    next();
    break;
  case 'products':
    req.model = new ProductsModel();
    next();
    break;
  default :
    next('Invalid Model :(');
    break;
  }
}


module.exports = getModel;