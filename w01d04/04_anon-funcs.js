const myNum = 42;
console.log(myNum);

console.log(84); // anonymous

// naming things is hard

const runMyFunc = function(cb) {
  const returnVal = cb('dean');

  if (returnVal === true) {
    // do something
  }
};

const sayHello = function(name) {
  console.log(`hello there ${name}`);
};

runMyFunc(sayHello);

runMyFunc(function(name) {
  console.log(`hello there ${name}`);
  return true;
});
