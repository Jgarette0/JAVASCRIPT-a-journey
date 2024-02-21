// The global variable
const bookList = [
  "The Hound of the Baskervilles",
  "On The Electrodynamics of Moving Bodies",
  "Philosophiæ Naturalis Principia Mathematica",
  "Disquisitiones Arithmeticae",
  "jilian",
];

// Change code below this line
function add(arr, bookName) {
  let newArr = [...arr];
  newArr.push(bookName);
  return newArr;
  // Change code above this line
}

console.log(bookList);

// Change code below this line
function remove(arr, bookName) {
  // const book_index = bookList.indexOf(bookName);
  // if (book_index >= 0) {
  //   bookList.splice(book_index, 1);
  //   return bookList;
  let newArr = [...arr];
  if (newArr.indexOf(bookName) >= 0) {
    newArr.splice(newArr.indexOf(bookName), 1);
    return newArr;

    // Change code above this line
  }
}

const newBookList = add(bookList, "New Book");

console.log(newBookList);
const rmve = remove(bookList, "jilian");

console.log(rmve);
