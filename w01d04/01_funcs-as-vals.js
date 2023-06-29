// sayHello();

// function declaration
// function sayHello() {
//   console.log('hello there');
// }

// function expression

const addTwo = function(a, b) {
  return a + b;
};

const sayHello = function(name) {
  addTwo(2, 2);
  console.log(`hello there ${name}`);
};

const myFuncs = [];

myFuncs.push(sayHello);
myFuncs.push(console.log);

console.log(myFuncs);

delete myFuncs[0];

const retrievedFunc = myFuncs[0];

const username = 'carol';
retrievedFunc(username); // undefined();

// sayHello['myMessage'] = 'welcome to my site';

// console.log(sayHello.myMessage);

// console.log(sayHello.toString());
// console.log(console.log.toString());

// const var1 = sayHello;

// console.log(var1.toString());

// console.log(sayHello());

// sayHello();

// captures the return value of sayHello
// const var2 = sayHello();

// const var1 = sayHello;

// var1('bob'); // sayHello('bob');
// sayHello('alice'); // sayHello();
