// pure -- easy to predict and easy to use -- 'effecient'
// rules should contain parameters or something that pass on it like parameters
const add = (x, y) => {
 return x + y;
}
console.log(add(1, 2));
console.log(add(2, 2));
// this is 'pure' function --tho i don't totally get it


// this is impure function
const subtract = (x, y) => {
 console.log(x - y); // --external and produces an observable side effects--
 return x - y;
}
subtract(5, 3);

//summary and takes
// pure functions are pure for some reason because
//1 it is clean
//2 pure functions are consistent
//3 easy to test and predict