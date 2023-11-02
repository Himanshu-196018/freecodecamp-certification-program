// Add elemetnt to the end of an array using concat Instead of push
function nonMutatingPush(original, newItem) {
  return original.concat(newItem);
}

const first = [1, 2, 3];
const second = [4, 5];
console.log(nonMutatingPush(first, second));
