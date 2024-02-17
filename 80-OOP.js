//using constructors
//constructor is like serving as a blueprint
//example

function Car() {
  (this.name = "toyota"), (this.model = "x"), (this.releases = 2022);
}

const myCar = new Car();

console.log(myCar.name);
