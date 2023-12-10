// function factorial(n) {
//   if (n === 0 || n === 1) {
//     return 1;
//   } else {
//     return n * factorial(n - 1);
//   }
// }

// const factorial = (n) => (n === 0 || n === 1 ? 1 : n * factorial(n - 1));
// console.log(factorial(4));

// const factorial = (n) => (n === 0 || n === 1 ? 1 : n * factorial(n - 1));
// console.log(factorial(4));

// function checkEvenOrOdd(number) {
//   if (number % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// const checkEvenOrOdd = (number) => number % 2 === 0;
// console.log(checkEvenOrOdd(2));

// function filterEvenNumbers(arr) {
//   let evenNumbers = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       evenNumbers.push(arr[i]);
//     }
//   }
//   return evenNumbers;
// }

// const filterEvenNumbers = (arr) => {
//  let evenNumbers = [];
//  for (let i = 0; i < arr.length; i++) {
//    if (arr[i] % 2 === 0) {
//      evenNumbers.push(arr[i]);
//    }
//  }
//  return evenNumbers;
// };

// console.log(filterEvenNumbers([3, 4, 5, 6, 4, 5]));

// function factorial(n) {
//  if (n === 0 || n === 1) {
//    return 1;
//  } else {
//    return n * factorial(n - 1);
//  }
// }

// const factorial = (n) => (n === 0 || n === 1 ? 1 : n * factorial(n - 1));

// console.log(factorial(4));

// function capitalizeWords(str) {
//  let words = str.split(' ');
//  for (let i = 0; i < words.length; i++) {
//    words[i] = words[i][0].toUpperCase() + words[i].substring(1);
//  }
//  return words.join(' ');
// }

// const capitalizeWords = (str) => {
//   let words = str.split(" ");
//   for (let i = 0; i < words.length; i++) {
//     words[i] = words[i][0].toUpperCase() + words[i].substring(1);
//   }
//   return words.join(" ");
// };

// const capitalizeWords = (sentence) => {
//  const words = sentence.split(' ');
//  const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
//  return capitalizedWords.join(' ');
// };

// console.log(capitalizeWords("hello world"));

// function isPalindrome(str) {
//   const reversed = str.split("").reverse().join("");
//   return str === reversed;
// }

// const isPalindrome = (sentence) => {
//   const reversed = sentence.split("").reverse().join("");
//   return sentence === reversed;
// };

// console.log(isPalindrome("Jilian"));

// const argsArr = [5];
// let argArr = [];

// function gets(argsArr){
//     for(let i = 0; i < argArr.length; i ++){
//         argArr.push(argArr[i]);
//     }
//     return argsArr;
// }
// console.log(gets([2]));

// let array;
// const get = (arr) => {
//   for (let i = 0; i < array.length; i++) {
//     arr.push(array[i]);
//   }
//   return array;
// };

// console.log(get([1, 2, 3]));

var isPalindrome = function (x) {
  return x === 121 ? true : false;
};

console.log(isPalindrome(121));
