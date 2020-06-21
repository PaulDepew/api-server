'use strict';

/**
 * 404
 * @module 404
 */

/**
  * 404 - will return a status
  * @param {*} request 
  * @param {*} response 
  * @returns {status}
  */

module.exports = (req, res) => {
  console.log('__ERROR__ : THE SHIP IS SINKING ' + req.method + req.path);
  res.status(404).send('__ERROR__ : THE SHIP IS SINKING ' + ' ' + req.method +  ' ' + req.path);
};