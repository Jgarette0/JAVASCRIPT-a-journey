// Convert Celsius to Fahrenheit

function convertCtoF(celsius) {
  let fahrenheit = celsius * 9 / 5 + 32;
  return fahrenheit;
}

convertCtoF(30);
console.log(convertCtoF);
// convertCtoF(0) should return a number
// Waiting:convertCtoF(-30) should return a value of -22
// Waiting:convertCtoF(-10) should return a value of 14
// Waiting:convertCtoF(0) should return a value of 32
// Waiting:convertCtoF(20) should return a value of 68
// Waiting:convertCtoF(30) should return a value of 86
