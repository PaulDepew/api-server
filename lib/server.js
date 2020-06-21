'use strict';

/**
 * Simple Server
 * @module server
 * @function start
 */

const express = require('express');
const app = express();
const timeStamp = require('../middleware/timestamp.js');
const logger = require('../middleware/logger.js');
const error = require('../middleware/404.js');
const good = require('../middleware/500.js');

const v1 = require('../routes/v1');


app.use(express.json());
app.use(timeStamp);
app.use(logger);
app.use('/api', v1);
app.use(error);
app.use(good);

module.exports = {
  server: app,
  start: (port) => {
    app.listen(port, ()=> {
      console.log(`Server is up on port: ${port}`);
    });
  },
};
