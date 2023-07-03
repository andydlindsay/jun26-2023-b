const assert = require('assert');
const objectOfFunctions = require('../hello-world');

describe('test our salutations', () => {

  it('says hello to the entity we wish to salut', () => {
    const expected = 'Hello, Alex 2';
    const actual = objectOfFunctions.sayHello('Alex 2');
    
    assert.equal(actual, expected);  
  });

  it('says goodbye to the entity we wish to bid adieu', () => {
    const expected = 'Goodbye, Alex 2';
    const actual = objectOfFunctions.sayGoodbye('Alex 2');
    
    assert.equal(actual, expected);  
  });

});
