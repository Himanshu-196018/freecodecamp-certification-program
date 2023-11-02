// Combine an Array into a string using the join method
function sentensify(str) {
  return str.split(/\W/).join(" ");
}

console.log(sentensify("May-the-force-be-with-you"));
