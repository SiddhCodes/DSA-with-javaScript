// Second max element from array
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let maxE = Math.max(arr[0], arr[1]);
let sMaxE = Math.min(arr[0], arr[1]);
for (let i = 2; i < arr.length; i++) {
  if (arr[i] > maxE) {
    sMaxE = maxE;
    maxE = arr[i];
  } else if (arr[i] > sMaxE && arr[i] !== sMaxE) {
    sMaxE = arr[i];
  }
}
console.log(`max element is: ${maxE} and Second max element is: ${sMaxE}`);
