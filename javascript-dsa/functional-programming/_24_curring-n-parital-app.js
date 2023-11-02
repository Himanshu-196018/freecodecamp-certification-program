// Introduction to currying and partial application

function add(x) {
  return function (y) {
    return function (z) {
      return x + y + z;
    };
  };
}

console.log(add(10)(20)(30));
const curY = add(10);
const curZ = curY(40);
console.log(curZ(30));
