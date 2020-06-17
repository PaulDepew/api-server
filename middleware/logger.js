'user strict';

module.exports = (req, res, next) => {
  console.log('__REQUEST__: ' + req.timeStamp + ' ' + req.path + ' ' + req.method + ' ');
  next();
};