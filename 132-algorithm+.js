function addTogether() {
  const [firstParam, secondParam] = arguments;

  if (typeof firstParam === "number") {
    if (typeof secondParam === "number") {
      return firstParam + secondParam;
    }
    if (arguments.length === 1) {
      return (secondParam) => {
        return addTogether(firstParam, secondParam);
      };
    }
  }
}

console.log(addTogether(2, 3));
