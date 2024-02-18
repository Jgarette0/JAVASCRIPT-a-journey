function Car(dateToBuy, color) {
  this.dateToBuy = dateToBuy;
  this.color = color;
  this.numLegs = 4;
}
const supra = new Car(2032, "Neon Yellow");
const gtr = new Car(2035, "flame");

console.log(supra instanceof Car);
console.log(gtr instanceof Car);

let ownProperty = [];
let prototypeProperty = [];
for (let property in supra) {
  if (supra.hasOwnProperty(property)) {
    ownProperty.push(property);
  } else {
    prototypeProperty.push(property);
  }
}

console.log(ownProperty, prototypeProperty);
