'use strict';

const express = require('express');
const router = express.Router();

const CategoryModel = require('../models/categories/categories-model');

const Category = new CategoryModel();


router.get('/', handleGetAll);
router.get('/:id', handleGetCategoryById);
router.post('/', handleCreateCategory);
router.put('/:id', handleUpdateCategory);
router.delete('/:id', handleDeleteCategory);

async function handleGetCategoryById(req, res){
  const categoryId = req.params.id;
  const results = await Category.get(categoryId);
  res.send('Here are your Categories! ' + results);
  
}

async function handleGetAll(req, res){
  const results = await Category.get();
  res.send(results);
  
}

async function handleCreateCategory(req, res){
  const results = await Category.create(req.body);
  res.send(results + ' Has been created');
  
}

async function handleUpdateCategory(req, res){
  const results = await Category.update(req.params.id, req.body);
  res.send('Updated! ' + req.params.id);
}

async function handleDeleteCategory(req, res){
  const results = await Category.delete(req.params.id);
  res.send('Category ID: ' + req.params.id);
}

module.exports = router;