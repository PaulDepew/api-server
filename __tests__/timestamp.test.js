'use strict';

const timestamp = require('../middleware/timestamp');

let request = { method: 'test', path: 'GET', requestTime: 'now'};
let response = {};
let next = jest.fn();

describe( 'Testing the Timestamp', ()=> {
  it('check to see if the timestamp exists', ()=> {
    timestamp(request, response, next);
    expect(request.requestTime).not.toBo(null);
  });
});