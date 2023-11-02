// use every() method to check that every element in an array meets a criteria
function checkPositive(arr) {
  return arr.every((el) => el >= 0);
}

console.log(checkPositive([1, 2, 3, -4, 5]));
