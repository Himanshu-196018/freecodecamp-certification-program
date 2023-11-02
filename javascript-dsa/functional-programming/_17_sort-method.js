// Sort an array aphabetically using the sort method
function alphabeticalOrder(arr) {
  return arr.sort((a, b) => (a > b ? 1 : -1));
}

console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));
