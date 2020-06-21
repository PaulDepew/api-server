'use strict';

// Dynamically handles model logic based on parameters attached to the request

/** API module
 * @module api
 */

const express = require('express');
const router = express.Router(); 

const Model = require('../middleware/model');


router.param('model', Model);


// Define CRUD routes, GET, POST, PUT, DELETE
router.get('/:model', handleGetAll);
router.get('/:model/:id', handleGetById);
router.post('/:model', handleCreate);
router.put('/:model/:id', handleUpdate);
router.delete('/:model/:id', handleDelete);


/**
 * getOne - gets the requested thing from the database
 * @function handleGetById
 * @param {*} request 
 * @param {*} response 
 * @returns {object}
 */


async function handleGetById(req, res){
  const Id = req.params.id;
  const results = await req.model.get(Id);
  res.send('Here are your Items! ' + results);
  
}

/**
 * getAll - gets all of the requested things from the database
 * @function handleGetAll
 * @param {*} request 
 * @param {*} response 
 * @returns {object}
 */

async function handleGetAll(req, res){
  const results = await req.model.get();
  res.send(results);
  
}

/**
 * addOne - adds one thing to the database
 * @function handleCreate
 * @param {*} request 
 * @param {*} response 
 * @returns {object}
 */

async function handleCreate(req, res){
  const results = await req.model.create(req.body);
  res.send(results + ' Has been created');
  
}


/**
 * updateOne - updates a thing in the database
 * @function handleUpdate
 * @param {*} request 
 * @param {*} response 
 * @returns {string}
 */

async function handleUpdate(req, res){
  const results = await req.model.update(req.params.id, req.body);
  res.send('Updated! ' + req.params.id);
}

/**
 * deleteOne - deletes a thing from the database
 * @function handleDelete
 * @param {*} request 
 * @param {*} response 
 * @returns {string}
 */

async function handleDelete(req, res){
  const results = await req.model.delete(req.params.id);
  res.send('Removed ID: ' + req.params.id);
}



module.exports = router;