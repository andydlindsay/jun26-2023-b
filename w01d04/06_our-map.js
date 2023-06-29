const ourMap = function(arr, callback) {
  // create a brand new array
  const newArr = [];

  // loop through the provided array
  for (const element of arr) {
    // call the callback for each element AND capture the return value
    const returnVal = callback(element);

    // push the return value into the new array
    newArr.push(returnVal);
  }

  // return the new array
  return newArr;
};

const names = ['alice', 'bob', 'carol'];

const doOnEachLoop = function(name) {
  const transformed = `you are logged in as ${name}`;
  return transformed;
};

console.log(names);

console.log(); // creates an empty line in the terminal

const builtInMap = names.map(doOnEachLoop);
console.log(builtInMap);

console.log(); // creates an empty line in the terminal

const ourMappedNames = ourMap(names, doOnEachLoop);
console.log(ourMappedNames);
