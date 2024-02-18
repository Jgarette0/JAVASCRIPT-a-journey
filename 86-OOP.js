function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Only change code below this line
  constructor: Dog,
  numLegs: 4,
  eat: function () {
    console.log(`eat this nuts`);
  },
  describe: function () {
    console.log(`describe this nuts: ${this.numLegs} times`);
  },
};

const puppy = new Dog("gerald");
console.log(puppy);

console.log(Dog.prototype.isPrototypeOf(puppy));
