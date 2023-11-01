// refacotor global variables Out of Functions
// The global variable
const bookList = [
  "The Hound of the Baskervilles",
  "On The Electrodynamics of Moving Bodies",
  "Philosophiæ Naturalis Principia Mathematica",
  "Disquisitiones Arithmeticae",
];

function add(list, bookName) {
  return [...list, bookName];
}

function remove(list, bookName) {
  const index = list.indexOf(bookName);
  if (index >= 0) {
    return [...list.slice(0, index), ...list.slice(index + 1)];
  }
}

console.log(add(bookList, "A Brief History of Time"));
console.log(remove(bookList, "On The Electrodynamics of Moving Bodies"));
console.log(bookList);
