// creating an object in JS
let dog = {
  name: "Dogo",
  numLegs: 4,
};

// Accessing Properties using dot notion
console.log(dog.name);

// Create a method on an object
dog.sayName = function () {
  return `The name of the dog is ${dog.name}.`;
};
console.log(dog.sayName());

// Using this keyword to make code reusable
dog.sayName = function () {
  return `The name of the dog is ${this.name}.`;
};
console.log(dog.sayName());

// Define a constructor function
// with capital letters using "this" keyword to define properties
function Cat() {
  this.name = "Kitty";
  this.color = "yellow";
  this.numLegs = 4;
}

// Using constructor to create an object
let newCat = new Cat();
console.log(newCat);

// Extending constructor to receive arguments
function WildCat(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 4;
}

let forestCat = new WildCat("Jimmy", "Brown");
console.log(forestCat);

// Verify an object's Constructor with instanceof
console.log(forestCat instanceof WildCat);
console.log(forestCat instanceof Cat);

// Understsan own properties
function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];

for (let prop in canary) {
  if (canary.hasOwnProperty(prop)) {
    ownProps.push(prop);
  }
}
console.log(ownProps);

// Use prototype properties to reduce duplicate code
function WildDog(name) {
  this.name = name;
}
WildDog.prototype.numLegs = 4; //all instance of WIldCat will have this prop
let newDog = new WildDog("Woffy");
console.log(newDog.numLegs);

// Iterate over properties (own and prototype)
ownProps = [];
let prototypeProps = [];

for (let prop in newDog) {
  if (newDog.hasOwnProperty(prop)) {
    ownProps.push(prop);
  } else {
    prototypeProps.push(prop);
  }
}

console.log(ownProps);
console.log(prototypeProps);

// Understand the constructor property
function JoinDogFraternity(candidate) {
  if (candidate.constructor === WildDog) {
    return true;
  }
  return false;
}
console.log(JoinDogFraternity(newDog));

// Change the prototype to a new Object
// i.e. adding multiple properties using prototype
function Human(name) {
  this.name = name;
}

Human.prototype = {
  constructor: Human /* set constructor when defining a new prototype */,
  numLegs: 4,
  describe: function () {
    console.log("My name is " + this.name);
  },
};

let freya = new Human("Freya");
console.log(freya);
freya.describe();

// Understanding Prototype
