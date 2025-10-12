//  Linear Search an array - If element found print the index else -1
var prompt = require("prompt-sync")();

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let userN = Number(prompt("Enter the number to find its index: "));

let index = -1;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === userN) {
    index = i;
    break;
  }
}

if (index !== -1) {
  console.log(`The number ${userN} is found at index ${index} in the array.`);
} else {
  console.log(`The number ${userN} is not present in the array.`);
}
