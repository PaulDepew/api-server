'use strict';

const express = require('express');
const app = express();
// const db = require('../data/db.json');
const timeStamp = require('../middleware/timestamp.js');
const logger = require('../middleware/logger.js');
const error = require('../middleware/404.js');
const good = require('../middleware/500.js');

const categoriesRouter = require('../routes/categories');
const productRouter = require('../routes/product');

app.use(express.json());
app.use(timeStamp);
app.use(logger);


app.use('/categories', categoriesRouter);

app.use('/produts', productRouter);

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
