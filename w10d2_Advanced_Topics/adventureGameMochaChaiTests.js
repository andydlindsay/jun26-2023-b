// mocha and chai tests for our adventure game

// import the chai assertion library
const assert = require('chai').assert;

// import the adventure game code
const game = require('../adventureGame');

// test the describeLocation function
describe('describeLocation', function() {
    it('should return the description of the current location', function() {
        assert.equal(game.describeLocation(), "You are in a dark room. There is a door to the north.");
    });
});

// test the move function

// test the takeItem function

// test the dropItem function

