// Accept value from user and assign in the array
let prompt = require("prompt-sync")();
let size = Number(prompt("Enter array size: "));
let arr = new Array(size);
for (let i = 0; i < size; i++) {
  let userV = prompt("Enter array values: ");
  arr[i] = userV;
}
console.log(arr);
