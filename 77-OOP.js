class Car {
  constructor() {
    this.color = "yellow";
    this.brand = "McLaren";
    this.release = 2022;
  }
  carDetail() {
    return this.brand + " " + this.color + " " + this.release;
  }
}

const myCar = new Car();
console.log(myCar.carDetail());
