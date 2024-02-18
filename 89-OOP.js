function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat,
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear,
};

function Animal() {}

Animal.prototype = {
  constructor: Animal,
  eat: function () {
    console.log("nom nom nom");
  },
};

const snowBear = new Bear("teddy");
const maineCoon = new Cat("tegre");

console.log(snowBear instanceof Bear && maineCoon instanceof Cat);

ownProperty = [];
for (let property in snowBear) {
  if (snowBear.hasOwnProperty(property)) {
    ownProperty.push(property);
  }
}

console.log(ownProperty);

console.log(
  maineCoon.hasOwnProperty("name") ? maineCoon.name : "No Name is shown"
);

console.log(typeof Bear.prototype);

console.log(Object.prototype.isPrototypeOf(Bear.prototype));
