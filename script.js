// Matrix Diagonal Sum
let arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

let leftSum = 0;
let rightSum = 0;

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    if (i === j) {
      leftSum += arr[i][j];
    }
    if (i + j === arr.length - 1) {
      rightSum += arr[i][j];
    }
  }
}
let totalSum = leftSum + rightSum;

console.log("leftSum = " + leftSum);
console.log("rightSum = " + rightSum);
console.log("totalSum = " + totalSum);
