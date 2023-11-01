// Learn Functional programming
// Function that returns a string representing a cup of green tea
const prepareTea = () => "greenTea";

/********************
A function return number of cups needed for required cup of tea
*********************/
const getTea = (numOfCups) => {
  const teaCups = [];

  for (let cups = 1; cups <= numOfCups; cups++) {
    teaCups.push(prepareTea());
  }
  return teaCups;
};

console.log(getTea(40));
