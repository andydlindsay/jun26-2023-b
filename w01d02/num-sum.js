/*

// Write a program that takes in an unlimited number of command line arguments and prints out the sum of them. If any argument is not a whole number, skip it. Do not support negative numbers.

// 1. use pseudocode (figure out the logic)

// 1. take in command line arguments

// console.log(process.argv);

// remove the first two elements from the process.argv array

// process.argv.shift(); // remove the first element
// process.argv.shift(); // remove the first element
// process.argv.splice(0, 2);

const numArray = process.argv.slice(2);
// const numArray = ['5', '10', '15', '3.14', '-100'];

// console.log(process.argv);
console.log(numArray);

// 2. sum the command line arguments together

// loop through the provided array
// c-style, for..in, for..of

// c-style
// for (let i = 2; i < numArray.length; i += 1) {
//   const element = numArray[i];
//   console.log(element);
// }

// console.log();

// // for..in
// for (const index in numArray) {
//   const element = numArray[index];
//   console.log(element);
// }

// console.log();

// for..of
// for (const element of numArray) {
//   console.log(element);
// }


// loop through the provided array
let total = 0;

for (const element of numArray) {
  // total += element;
  // total = total + element;

  const num = Number(element);

  // if (Number.isInteger(num) === true) {
  //   if (num > 0) {
  //     total = total + num;
  //   }
  // }

  // if (Number.isInteger(num) === true && num > 0) {
  if (Number.isInteger(num) && num > 0) {
    total = total + num;
  }
}

console.log('total', total);

*/

// code repeated below for clarity
const numArray = process.argv.slice(2);
let total = 0;

for (const element of numArray) {
  const num = Number(element);

  if (Number.isInteger(num) && num > 0) {
    total = total + num;
  }
}

console.log('total', total);
