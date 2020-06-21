'use strict';

/**
 * 500
 * @module 500
 */

 /**
  * 500 - will return a status
  * @param {*} request 
  * @param {*} response 
  * @returns {status}
  */


module.exports = (req, res) => {
  console.log('__SUCCESS__ : GET A BEER @ ' + ' ' + req.method +  ' ' + req.path);
  res.status(500).send(
    '__SUCCESS__ : GET A BEER @  ' + ' ' + req.method +  ' ' + req.path);
};