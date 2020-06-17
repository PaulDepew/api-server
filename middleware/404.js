'use strict';

module.exports = (req, res) => {
  console.log('__ERROR__ : THE SHIP IS SINKING ' + req.method + req.path);
  res.status(404).send('__ERROR__ : THE SHIP IS SINKING ' + ' ' + req.method +  ' ' + req.path);
};