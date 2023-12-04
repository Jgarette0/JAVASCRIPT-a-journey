// declarative programming

//imperative
const arr = [1, 3, 2, 4, 5];
for (i = 0; i < arr.length; i++) {
 console.log(arr[i]);
}

//declerative code fucntion
const items = (item) => { console.log(item); }

arr.forEach(items);


//ternary operation
const item = true ? 'hi' : 'hello';
