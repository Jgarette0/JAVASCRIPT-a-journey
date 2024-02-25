function uniteUnique(...arrays) {
  return [...new Set([].concat(...arrays))];
  //   const uniqueArray = [...new Set(mergedArray)]; // Convert to Set to remove duplicates, then back to array
  //   return uniqueArray;
}

const result = uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
console.log(result); // Output: [1, 3, 2, 5, 4]
