// Create Strings using Template Literals
// failuresList should be an array containing result failure messages.
// Waiting:failuresList should be equal to the specified output.
// Waiting:Template strings and expression interpolation should be used.
// Waiting:An iterator should be used.

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"],
};
function makeList(arr) {
  // Only change code below this line
  const failureItems = [];
  // Only change code above this line

  return failureItems;
}

const failuresList = makeList(result.failure);
