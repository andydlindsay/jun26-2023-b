// calculate the number of days between now and Christmas
//
// mocha tests for the days route
// Usage: mocha tests/app.test.js
//

var assert = require('assert');
var request = require('supertest');
var app = require('../server');

describe('GET /days', function(){
  it('respond with json', function(done){
    request(app)
      .get('/days')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});

