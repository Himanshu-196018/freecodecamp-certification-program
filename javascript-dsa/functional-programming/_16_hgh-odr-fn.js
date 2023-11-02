// use higher order functions map, filter, reduce to solve a complex problem
const squareList = (arr) => {
  return arr
    .filter((el) => el > 0 && Number.isInteger(el))
    .map((el) => el * el);

  // with reduce() method
  //return arr.reduce((sqrIntegers, num) => {
  //  return Number.isInteger(num) && num > 0
  //    ? sqrIntegers.concat(num * num)
  //    : sqrIntegers;
  //  }, []);
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
