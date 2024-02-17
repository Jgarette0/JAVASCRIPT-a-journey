//create a object / constructor car
//the car has an argument of color
//which also check if they have propery using 'for..in loop.

function Car(color) {
  this.color = color;
  this.numLegs = 4;
  this.type = "Electric Vehicle";
}

const porsche = new Car("grey");
console.log(porsche);
const gtr = new Car("maroon");
console.log(gtr);

let properties = [];
for (let property in gtr) {
  if (gtr.hasOwnProperty(property)) {
    properties.push(property);
  }
}
console.log(properties);
