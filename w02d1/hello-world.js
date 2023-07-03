// implement a function called sayHello that takes the name of the saluted 
// and returns what would be said.

const sayHello = (param) => {
  return `Hello, ${param}`;
};

const sayGoodbye = (param) => {
  return `Goodbye, ${param}`;
};

module.exports = {
  sayHello: sayHello,
  sayGoodbye: sayGoodbye
};
