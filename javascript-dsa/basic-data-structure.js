// use array to store a collection of data
let myArr = ["hello", true, 45, false, 10];
console.log(myArr);

// Access array content using bracket notation
myArr[1] = "Not a bool anymore";
console.log(myArr);

// Add item using push (to last) and unshift (to start)
myArr.push("New Element with push");
myArr.unshift("Yay, with unshift");
console.log(myArr);

// Remove items from an array with pop() and shift()
let popped = myArr.pop();
let shifted = myArr.shift();
console.log(popped + " and " + shifted);

// Remove item using splice()
// 1st parameter defines the start index
// 2nd parameter defines the no. of element to be deleted
// program to remove element from array so sum of arr would be 10
const arr = [2, 4, 5, 1, 7, 5, 2, 1];

let sum = 0,
  i = 0;
while (i < arr.length) {
  if (sum + arr[i] > 10) {
    arr.splice(i, 1);
  } else {
    sum += arr[i];
    i++;
  }
}

console.log(arr);

// Add item using splice
// 3rd argument takes one or more elements and add them to array
function htmlColorNames(arr) {
  arr.splice(0, 2, "DarkSalmon", "BlanchedAlmond");
  return arr;
}

console.log(
  htmlColorNames([
    "DarkGoldenRod",
    "WhiteSmoke",
    "LavenderBlush",
    "PaleTurquoise",
    "FireBrick",
  ])
);

// copy array item using slice
// 2 parameters start and end
function forecast(arr) {
  return arr.slice(2, 4);
}

console.log(
  forecast(["cold", "rainy", "warm", "sunny", "cool", "thunderstorms"])
);

// copy array with spread operator
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    newArr.push([...arr]);
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));

// combine array with spread operator
function spreadOut() {
  let fragment = ["to", "code"];
  let sentence = ["learning", ...fragment, "is", "fun"];
  return sentence;
}

console.log(spreadOut());

// check for the presence of an element
// use of indexOf method
function quickCheck(arr, elem) {
  return arr.indexOf(elem) == -1 ? false : true;
}

console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms"));

// iterate through all an array's items using for loops
// remove array elements from an array containing targeet value
function filteredArray(arr, elem) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i].indexOf(elem) == -1 ? newArr.push(arr[i]) : "";
  }
  return newArr;
}

console.log(
  filteredArray(
    [
      [3, 2, 3],
      [1, 6, 3],
      [3, 13, 26],
      [19, 3, 9],
    ],
    3
  )
);

// Create Complex multi-dimensional arrays
const multiDimensionalArray = [
  [0, 1, ["hello", true, ["deeper", 4, ["deepest", 5]], "deep"]],
  [0, 1, ["hello", true, ["deeper", 4, ["deepest", 5]], "deep"]],
  [0, 1, ["hello", true, ["deeper", 4, ["deepest", 5]], "deep"]],
];

console.log(multiDimensionalArray[0]);
console.log(multiDimensionalArray[1][2]);
console.log(multiDimensionalArray[1][2][3]);
console.log(multiDimensionalArray[1][2][2][0]);
console.log(multiDimensionalArray[1][2][2][2][0]);

/****************
 * Objects
 ****************/
// add key-value pair to JS objects
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
};

foods.bananas = 13;
foods.grapes = 35;
foods["strawberries"] = 27;

console.log(foods);

// modify object nested insde an object
let userActivity = {
  id: 23894201352,
  date: "January 1, 2017",
  data: {
    totalUsers: 51,
    online: 42,
  },
};

userActivity.data.online = 45;
console.log(userActivity);

// Access Properties names with bracket notation
function checkInventory(scannedItem) {
  return foods[scannedItem];
}

console.log(checkInventory("apples"));

// using delete keyword to remove object properties
delete foods.oranges;
delete foods.plums;
delete foods.strawberries;

console.log(foods);

// check if object has a property
let users = {
  Alan: {
    age: 27,
    online: true,
  },
  Jeff: {
    age: 32,
    online: true,
  },
  Sarah: {
    age: 48,
    online: true,
  },
  Ryan: {
    age: 19,
    online: true,
  },
};

function isEveryoneHere(userObj) {
  return (
    userObj.hasOwnProperty("Alan") &&
    userObj.hasOwnProperty("Jeff") &&
    userObj.hasOwnProperty("Sarah") &&
    "Ryan" in userObj
  );
}

console.log(isEveryoneHere(users));

// Iterate through the keys of an object with a for...in statement
const onlineUsers = {
  Alan: {
    online: false,
  },
  Jeff: {
    online: true,
  },
  Sarah: {
    online: false,
  },
};

function countOnline(allUsers) {
  let count = 0;
  for (const user in allUsers) {
    if (allUsers[user].online) {
      count++;
    }
  }
  return count;
}

console.log(countOnline(onlineUsers));

// Generate an array of all object keys with Object.keys()
console.log(Object.keys(users));

// Modify an array stored in an Object
let user = {
  name: "Kenneth",
  age: 28,
  data: {
    username: "kennethCodesAllDay",
    joinDate: "March 26, 2016",
    organization: "freeCodeCamp",
    friends: ["Sam", "Kira", "Tomo"],
    location: {
      city: "San Francisco",
      state: "CA",
      country: "USA",
    },
  },
};

function addFriend(userObj, friend) {
  return (userObj.data.friends = [...userObj.data.friends, friend]);
}

console.log(addFriend(user, "Pete"));
