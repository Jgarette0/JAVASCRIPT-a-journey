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
    numberOfPages: 128,
    author: "George Orwell",
    genre: "Dystopian Fiction",
    publicationYear: 1949,
    hasAward: "most viewed",
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
    genre: "Romance",
    publicationYear: 1813,
  },
];

// const templateLiterals = books.map((props, index) => {
//   return `#${index + 1}, : ${props.publicationYear} `;
// });
// const templateLiterals = books.map(
//   (props, index) => `#${index + 1}, : ${props.publicationYear} `
// );

// const console = templateLiterals.join("");

// console;

// const filterBook = books.filter((props) => {
//   const small = props.numberOfPages <= 200;
//   const large = props.hasAward;
//   return small && large;
// });
// filterBook;

const romanceBook = books
  .filter((props) => {
    const genres = props.genre.toLowerCase();
    return genres.includes("fiction");
  })
  .map((props) => {
    return props.title;
  });

romanceBook;
