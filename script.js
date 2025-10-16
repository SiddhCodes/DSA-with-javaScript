// selection sort
let arr = [3, 8, 9, 1, 4, 7, 2, 5, 6];

for (let i = 0; i < arr.length - 1; i++) {
  let small = i;
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[j] < arr[small]) {
      small = j;
    }
  }
  if (i != small) {
    let temp = arr[i];
    arr[i] = arr[small];
    arr[small] = temp;
  }
}

console.log(arr);
