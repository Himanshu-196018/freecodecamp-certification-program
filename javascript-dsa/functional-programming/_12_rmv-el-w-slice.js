// Remove element from an array using slice Instead of splice
function nonMutatingSplice(cities) {
  return [...cities.slice(0, 3)];
}

console.log(
  nonMutatingSplice(["Chicago", "Delhi", "Islamabad", "London", "Berlin"])
);
