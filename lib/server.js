'use strict';

const express = require('express');
const app = express();
const db = require('../data/db.json');
const timeStamp = require('../middleware/timestamp.js');
const logger = require('../middleware/logger.js');
const error = require('../middleware/404.js');
const good = require('../middleware/500');

app.use(express.json());
app.use(timeStamp);
app.use(logger);

const categories = [...db.categories];
const products = [...db.products];

// Products CRUD Routes

app.post('/products', (request, response) => {
  products.push(request.body);
  response.send(`Product Made ${request.body}`);
});

app.get('/products', (request, response) => {

  response.send(products);
});

app.get('/products/:id', (request, response) => {
  products.forEach(value => {
    if(value.id === request.params.id) {
      console.log(value);
      response.send(value);
    }
  });
});

app.put('/products/:id', (request, response) => {
let value = request.params.id;
let newRecord = request.body;
for (let i = 0; i <= products.length; i++){
  if (products.id.value === value){
    // let products[i].id.value = newRecord
  }
}
  response.send('PUTTING PRODUCTS at ID');
});

app.delete('/products/:id', (request, response) => {
  products.slice(request.params.id -1);
  response.send(`Product Id: ${request.params.id} has been deleted`);

});


// Categories CRUD routes

app.post('/categories', (request, response) => {
  categories.push(request.body);
  response.send(`Category Made ${request.body}`);
});

app.get('/categories', (request, response) => {

  response.send(categories);
});

app.get('/categories/:id', (request, response) => {
  products.forEach(value => {
    if(value.id === request.params.id) {
      console.log(value);
      response.send(value);
    }
  });
});

app.put('/categories/:id', (request, response) => {
let value = request.params.id;
let newRecord = request.body;
for (let i = 0; i <= categories.length; i++){
  if (categories.id.value === value){
    // let products[i].id.value = newRecord
  }
}
  response.send('PUTTING Categories at ID');
});

app.delete('/categories/:id', (request, response) => {
  categories.slice(request.params.id -1);
  response.send(`Category Id: ${request.params.id} has been deleted`);

});

app.use(error);
app.use(good);

module.exports = app;

// const jsonServer = require('json-server');
// const server = jsonServer.create();
// const router = jsonServer.router('./data/db.json');
// const middlewares = jsonServer.defaults();

// server.use(middlewares);

// server.use(router);
// server.listen(3000, () => {
//   console.log('JSON Server is running');
// });

// router.render = (req, res) => {
//   res.jsonp({

//     "count": res.locals.data.length,
//     "results": [...res.locals.data],
//   });

// };

// module.exports = router;