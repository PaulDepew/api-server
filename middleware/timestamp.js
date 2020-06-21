'use strict';

/**
 * Timestamp
 * @module timestamp
 */
/**
 * timestamp returns the date and time the request was made
 * @param {*} request 
 * @param {*} response 
 * @param {*} next 
 * @returns {variable}
 */

const timeStamp = function (req, res, next) {
  const i = new Date(Date.now());
  req.timestamp = i;
  next();
};

module.exports = timeStamp;