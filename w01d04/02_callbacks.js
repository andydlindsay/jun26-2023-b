// callback => a function that you pass to another function to be invoked/called by that other function
// higher order function (HOF) => a function that accepts another function as an argument OR a function that returns a function

const runMyFunc = function(cb) {
  // console.log(cb.toString());
  cb('dean'); // console.log('dean')
};

const sayHello = function(name) {
  console.log(`hello there ${name}`);
};

runMyFunc(sayHello);
runMyFunc(console.log);
