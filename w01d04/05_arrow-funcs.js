// added in ES6 (2015)
// advantages of arrow functions:
// 1. no need for the function keyword
// 2. if only one argument, no need for parens
// 3. if only one line of code, no need for curly braces
// 4. if there are no curly braces, the line of code is implicitly returned
// 5. arrow functions DO NOT create `this`

const sayHello1 = function(name) {
  return `hello there ${name}`;
};

const sayHello2 = (name) => `hello there ${name}`;

const returnVal = sayHello2('elise');
console.log('returnVal', returnVal);

// if (true) console.log('it is true');
// if (err) 
//   throw err;
