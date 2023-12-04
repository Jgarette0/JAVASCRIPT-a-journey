// immutability basicly means it cannot be change
// it cannot be mutated thus it is consistent and safe

//example for that
// let salutation = "hi";
// // above code can be mutated or can be change because it is inconsistent
// const salutation = "hello";
// now this code cannot be change because it used a 'const' keyword

const indexes = Object.freeze([0, 1, 2, 3, 4, 5]);

const addElement = (arr) => {

 return Object.freeze([...arr, arr.length]);
}
console.log(addElement(addElement(indexes)));
// i dont know what happen but somehow it added the length of an array twice which means the array added '6' and '7' even though the array was immutable...?!#@!

