// Reverse the array with extra space
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let temp = new Array(arr.length);
let i = 0;
for (let j = arr.length - 1; j >= 0; j--) {
  temp[i] = arr[j];
  i++;
}
console.log(temp);
