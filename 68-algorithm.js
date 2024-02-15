function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target ? true : false;
}

console.log(confirmEnding("Bastian", "n"));

// confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain") should return false.
// Passed:confirmEnding("Abstraction", "action") should return true.
// Passed:Your code should not use the built-in method .endsWith() to solve the challenge.
