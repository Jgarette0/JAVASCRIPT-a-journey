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
//reduce method is to reduce the entire array into a single value
const console = books.reduce((acc, props) => {
  const something = acc + props.numberOfPages;
  return something;
}, 0);

console;
