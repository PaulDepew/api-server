'user strict';

const server = require('json-server');

server.router.render = (req, res) => {
  res.jsonp({
    "key": "TRUE!!!",
    "count": res.body.data.length,
    "results": [...res.body.data],
  });

};

module.exports = server.router.render;