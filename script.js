// Multi D-Array
let prompt = require("prompt-sync")();
let arrSize = Number(prompt("Enter the size of the array: "));
let arr = new Array(arrSize);

for (let i = 0; i < arr.length; i++) {
  let innerArrSize = Number(prompt("Enter the size of the inner array: "));
  arr[i] = new Array(innerArrSize);
}

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    arr[i][j] = Number(
      prompt("Enter the element at position [" + i + "][" + j + "]: ")
    );
  }
}

console.log("Multi-Dimensional Array:");
console.log(arr);
