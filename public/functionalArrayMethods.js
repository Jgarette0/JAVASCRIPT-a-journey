const books = [
  {
    title: "To Kill a Mockingbird",
    numberOfPages: 281,
    author: "Harper Lee",
    genre: "Fiction",
    publicationYear: 1960,
  },
  {
    title: "1984",
    numberOfPages: 328,
    author: "George Orwell",
    genre: "Dystopian Fiction",
    publicationYear: 1949,
  },
  {
    title: "The Great Gatsby",
    numberOfPages: 180,
    author: "F. Scott Fitzgerald",
    genre: "Classic Fiction",
    publicationYear: 1925,
  },
  {
    title: "Pride and Prejudice",
    numberOfPages: 279,
    author: "Jane Austen",
    genre: "Romantic Fiction",
    publicationYear: 1813,
  },
];

// const templateLiterals = books.map((props, index) => {
//   return `#${index + 1}, : ${props.publicationYear} `;
// });
const templateLiterals = books.map(
  (props, index) => `#${index + 1}, : ${props.publicationYear} `
);

const console = templateLiterals.join("");

console;
