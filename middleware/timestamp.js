'use strict';

const timeStamp = function (req, res, next) {
  const i = new Date(Date.now());
  req.timestamp = i;
  next();
};

module.exports = timeStamp;