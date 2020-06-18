'use strict';

const express = require('express');
const router = express.Router();

const ProductModel = require('../models/products/products-model');

const Product = new ProductModel();


router.get('/', handleGetAll);
router.get('/:id', handleGetproductById);
router.post('/', handleCreateproduct);
router.put('/:id', handleUpdateproduct);
router.delete('/:id', handleDeleteproduct);

async function handleGetproductById(req, res){
  const productId = req.params.id;
  const results = await Product.get(productId);
  res.send('Here are your Products! ' + results);
  
}

async function handleGetAll(req, res){
  const results = await Product.get();
  res.send(results);
  
}

async function handleCreateproduct(req, res){
  const results = await Product.create(req.body);
  res.send(results + ' Has been created');
  
}

async function handleUpdateproduct(req, res){
  const results = await Product.update(req.params.id);
  res.send('Updated! ' + req.params.id);
}

async function handleDeleteproduct(req, res){
  const results = await Product.delete(req.params.id);
  res.send('Product ID: ' + req.params.id);
}

module.exports = router;