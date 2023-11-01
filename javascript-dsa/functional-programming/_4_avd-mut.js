// avoid mutation and side effects using functional programming
// code to increment value of global variable without mutaations
let fixedvalue = 4;

function incrementer() {
  return fixedvalue + 1;
}

console.log(incrementer());
