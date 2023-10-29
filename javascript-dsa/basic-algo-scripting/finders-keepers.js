function findElement(arr, func) {
  // Method - 1 simple
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      return arr[i];
    }
  }
  return undefined;
  // Method - 2 inbuilt find()
  // return arr.find(func);
}

console.log(findElement([1, 2, 3, 4], (num) => num % 2 === 0));
