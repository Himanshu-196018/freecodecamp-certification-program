function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b);
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (num <= arr[i]) {
      return i;
    }
  }
  return arr.length;
}

console.log(getIndexToIns([40, 60, 10], 50));
console.log(getIndexToIns([5, 3, 20, 3], 5));
