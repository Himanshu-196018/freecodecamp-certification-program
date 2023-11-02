// Use some Method to chech that any elements in array meet a criteria
function checkPositive(arr) {
  return arr.some((el) => el > -1);
}

console.log(checkPositive([1, 2, 3, -4, 5]));
