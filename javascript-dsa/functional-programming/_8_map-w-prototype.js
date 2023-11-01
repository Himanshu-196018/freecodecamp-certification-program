// Implement map on a prototype
Array.prototype.myMap = function (callback) {
  const newArray = [];

  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this));
  }

  return newArray;
};

console.log([1, 2, 3, 4, 5, 6].myMap((el) => el * 2));
