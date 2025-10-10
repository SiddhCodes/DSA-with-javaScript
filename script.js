// Max element from array
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let maxE = Math.max(arr[0], arr[1]);
for (let i = 2; i < arr.length; i++) {
  if (arr[i] > maxE) {
    maxE = arr[i];
  }
}
console.log(maxE);
