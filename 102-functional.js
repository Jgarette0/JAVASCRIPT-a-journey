const cars = ["Porsche", "Lamborghini", "Gtr", "Ferrari", "Tesla"];

console.log(cars);

function add(supercars, car) {
  newCar = [...supercars];
  newCar.push(car);
  return newCar;
}

function remove(supercars, car) {
  let newCar = [...supercars];
  if (newCar.indexOf(car) >= 0) {
    newCar.splice(newCar.indexOf(car), 1);
    return newCar;
  }
}

const removeThs = remove(cars, "Tesla");
const newCars = add(cars, "Supra");

console.log(newCars);
console.log(removeThs);
