// Split a string into an Array using the split method
function splitify(str) {
  return str.split(/[^a-z]/i); // /\W/ regex for non char split
}

console.log(splitify("Hello World,I-am code"));
