//es6 final

//getters and setters.
// Only change code below this line
class Thermostat {
  constructor(fahrenheit) {
    this._fahrenheit = fahrenheit;
  }
  get temperature() {
    return (5 / 9) * (this._fahrenheit - 32);
  }
  set temperature(celcius) {
    this._fahrenheit = (celcius * 9.0) / 5 + 32;
  }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius

// Thermostat should be a class with a defined constructor method.
// Passed:The class keyword should be used.
// Passed:Thermostat should be able to be instantiated.
// Failed:When instantiated with a Fahrenheit value, Thermostat should set the correct temperature.
// Passed:A getter should be defined.
// Passed:A setter should be defined.
// Passed:Calling the setter with a Celsius value should set the temperature.
