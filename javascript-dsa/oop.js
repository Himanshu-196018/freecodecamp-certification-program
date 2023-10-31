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
console.log(Human.prototype.isPrototypeOf(freya));

// Understand the prototype chain
// Object is supertype for all objects created
console.log(Object.prototype.isPrototypeOf(Human));

// Using inheritance
function Animal() {}

Animal.prototype = {
  constructor: Animal,
  eat: function () {
    console.log("nom nom nom");
  },
};

// Inheriting behaviors from supertype
freya = Object.create(Animal.prototype); // inheritance
freya.eat();

// Setting child's prototype to an Instaance of the parent
Human.prototype = Object.create(Animal.prototype);
let arcane = new Human("Arcane");
arcane.eat();

// Reset an inherited Constwructor Property
Human.prototype.constructor = Human;
console.log(arcane.constructor);

// Add method after inheritance
Human.prototype.describe = function () {
  console.log(`My name is ${this.name}`);
};
arcane.describe();

// Override Inherited method
Bird.prototype.fly = function () {
  console.log("I am flying!");
};

function Penguin() {}
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.fly = function () {
  console.log("Alas, this is a flightless bird.");
};

canary.fly();
let penguin = new Penguin();
penguin.fly();

// Using a mixin to add common behavior between unrelated Objects
let glideMixin = (obj) => {
  obj.glide = function () {
    console.log("Can glide.");
  };
};

let bird = {
  name: "Donald",
  numLegs: 2,
};

let boat = {
  name: "Warrior",
  type: "race-boat",
};

glideMixin(bird);
glideMixin(boat);

bird.glide();
boat.glide();

// Using closure to protect properties within an  object from being modified externally
// changing variable scope to local in constructor
function Car() {
  let model = "Sedan";
  this.getModel = function () {
    return model;
  };
}

let car = new Car();
console.log(car.getModel());

// Understanding the Immediately Invoked function Expression (IIFE)
(function () {
  console.log("This is damn good...");
})();

// Use IIFE to create a module
// Module
let funModule = (function () {
  return {
    isCuteMixin: function (obj) {
      obj.isCute = function () {
        return true;
      };
    },
    singMixin: function (obj) {
      obj.sing = function () {
        console.log("Singing to an awsome tune");
      };
    },
  };
})();

funModule.isCuteMixin(canary);
console.log(canary.isCute());
