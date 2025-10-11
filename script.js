// Array left rotation by K elements
var prompt = require("prompt-sync")();
let k = Number(prompt("Enter the number of rotations:"));
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < k; i++) {
  let copy = arr[0];
  for (let j = 0; j < arr.length - 1; j++) {
    arr[j] = arr[j + 1];
  }
  arr[arr.length - 1] = copy;
}
console.log(arr);
