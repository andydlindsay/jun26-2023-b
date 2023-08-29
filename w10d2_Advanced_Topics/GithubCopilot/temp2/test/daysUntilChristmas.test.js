// mocha test runner for daysUntilChristmas

// mocha test runner for daysUntilChristmas

var assert = require('assert');
var daysUntilChristmas = require('../library.js').daysUntilChristmas;

describe('daysUntilChristmas', function() {
  it('should return 0 if today is Christmas', function() {
    var christmas = new Date();
    christmas.setMonth(11);
    christmas.setDate(25);
    assert.equal(daysUntilChristmas(christmas), 0);
  });
  it('should return 1 if today is the day before Christmas', function() {
    var christmas = new Date();
    christmas.setMonth(11);
    christmas.setDate(24);
    assert.equal(daysUntilChristmas(christmas), 1);
  });
  it('should return 364 if today is the day after Christmas', function() {
    var christmas = new Date();
    christmas.setMonth(11);
    christmas.setDate(26);
    assert.equal(daysUntilChristmas(christmas), 364);
  });
});