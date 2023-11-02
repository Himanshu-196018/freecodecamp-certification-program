// Combine two arrays using the concat method
function nonMutatuingConcat(original, attach) {
  return original.concat(attach);
}

const first = [1, 2, 3];
const second = [4, 5];
console.log(nonMutatuingConcat(first, second));
