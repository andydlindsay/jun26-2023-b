// shuffle a deck of cards
const shuffle = (deck) => {
  // Fisher-Yates shuffle algorithm
  let m = deck.length, t, i;
  while (m) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
      // And swap it with the current element.
      t = deck[m];
      deck[m] = deck[i];
      deck[i] = t;
  }
  return deck;
};

// draw a card from the deck



module.exports = {
  shuffle: shuffle
};