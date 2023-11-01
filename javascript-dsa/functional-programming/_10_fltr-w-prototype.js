Array.prototype.myFilter = function (callback) {
  const newArray = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      newArray.push(this[i]);
    }
  }

  return newArray;
};

console.log([23, 65, 98, 5, 13].myFilter((item) => item % 2));
