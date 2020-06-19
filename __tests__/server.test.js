'use strict';

const supergoose = require('cf-supergoose');

const server = require('../lib/server');

const mockRequest = supergoose.server(server.server);

jest.spyOn(console, 'log').mockImplementation();


describe('Testing that our server is running', () => { it('should return true', ()=> {
  return mockRequest.get('/products')
    .then(results => {
      expect(console.log).toHaveBeenCalled();
    });
});
});

describe('Testing that our server can post items', () => { it('should return true', ()=> {
  return mockRequest.post('/products')
    .then(results => {
      expect(console.log).toHaveBeenCalled();
    });
});
});

describe('Testing that our server can get items', () => { it('should return true', ()=> {
  return mockRequest.get('/products')
    .then(results => {
      expect(console.log).toHaveBeenCalled();
    });
});
});

describe('Testing that our server can delete items', () => { it('should return true', ()=> {
  return mockRequest.delete('/products')
    .then(results => {
      expect(console.log).toHaveBeenCalled();
    });
});
});