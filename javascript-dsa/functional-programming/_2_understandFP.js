// Understanding Funtional Programming Terminology
// Functions returns string representing a cup of green|black tea
const prepareGreenTea = () => "greenTea";
const prepareBlackTea = () => "blackTea";

// A function returning an array of string representing type of tea
const getTea = (prepareTea, numOfTea) => {
  const teaCups = [];
  for (let cup = 1; cup <= numOfTea; cup++) {
    teaCups.push(prepareTea());
  }
  return teaCups;
};

console.log(getTea(prepareBlackTea, 10));
console.log(getTea(prepareGreenTea, 5));
