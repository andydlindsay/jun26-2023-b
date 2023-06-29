// single responsibility principle => our code should be responsible for only one thing (ideally)

const myFunc = function(arr, callback) {
  for (const element of arr) {
    callback(element);
  }
};

const doOnEachLoop = function(element) {
  const doubled = element * 2;
  console.log(doubled);
};

const myNums = [2, 4, 5];

myFunc(myNums, doOnEachLoop);
myFunc(myNums, console.log);
