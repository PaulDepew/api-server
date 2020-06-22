'user strict';

/**
 * Logger
 * @module logger
 */

 /**
  * logger returns a console log of the request
  * @param {*} request 
  * @param {*} response 
  * @param {*} next
  * @returns {console.log}
  */

  

module.exports = (req, res, next) => {
  console.log('__REQUEST__: ' + req.timeStamp + ' ' + req.path + ' ' + req.method + ' ');
  next();
};