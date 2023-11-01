// Pass arguments to avoid extenal dependencies in a function
let fixedValue = 4;

function incrementer(value) {
  return value + 1;
}

console.log(incrementer(fixedValue));
