const squareList = (arr) => {
  // Only change code below this line
  return arr
    .filter((item) => {
      return typeof item === "number" && item % 1 === 0 && item > 0;
    })
    .map((item) => {
      return item * item;
    });

  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);

// squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]) should return [16, 1764, 36].
