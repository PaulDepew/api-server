module.exports = (req, res) => {
  console.log('__SUCCESS__ : GET A BEER @ ' + ' ' + req.method +  ' ' + req.path;
  res.status(500).send('__SUCCESS__ : GET A BEER @  ' + ' ' + req.method +  ' ' + req.path);
};