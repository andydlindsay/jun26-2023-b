// mocha tests for the blackjack game

// import the game module
const game = require('./game.js');

// import the chai module
const chai = require('chai');

// import the assert function from chai
const assert = chai.assert;

describe('Blackjack', () => {
    describe('Game', () => {
        it('should have a deck of 52 cards', () => {
            assert.equal(game.deck.length, 52);
        });
        it('should shuffle the deck', () => {
            const deck = game.deck;
            const shuffledDeck = game.shuffle(deck);
            assert.notDeepEqual(deck, shuffledDeck);
        });
    });
}
);
