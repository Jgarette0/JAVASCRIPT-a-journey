//function is also a 'first class objects'
//Function is also a data type?!!
// nvm i don't even know about datatypes


//define a function that accept x and y
//the function add1 is better than add2 function
//function decleration
const add1 = (x, y) => {
 return x + y;
}
//function expression
function add2(x, y) {
 return x + y;
}
console.log(add1(1, 2));
console.log(add2(1, 2));
//simply because function expression can pass a function to another function as an argument?
//wtf does this mean

//example
//note that salutation is something like 'hi','hello','wazzaps'
//this can be done as an normal declaration function
function greet(salutation, firstname) {
 return `${salutation} ${firstname}`;
}
console.log(greet("hello", "groot")); //hello groot

//example passing function expression as an argument or passing function to another function using function expression
const classroomStatus = (status) => {
 return (classroom) => {
  return `${status} ${classroom}`;
 };
}

const vacant = classroomStatus('vacant');
const occupied = classroomStatus('occupied');

console.log(vacant('Computer Laboratory'));
console.log(vacant('Lecture'));
console.log(occupied('TVL'));
//so simply you can return a function and assign it to the parameter

