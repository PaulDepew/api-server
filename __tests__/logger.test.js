'use strict';

const logger = require('../middleware/logger');

let request = { method: 'test', path: 'GET', requestTime: 'now'};
let response = {};
let next = jest.fn();

jest.spyOn(console, 'log').mockImplementation();

describe('test the logger logs', () => {
  it('should find a log', ()=> {
    logger(request, response, next);
    expect(console.log).toHaveBeenCalled();
  });
});