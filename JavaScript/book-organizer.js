const books = [
  {
    title: "We who wrestle with God",
    authorName: "Jordan B. Peterson",
    releaseYear: 2024,
  },
   {
    title: "We who wrestle with God",
    authorName: "Jordan B. Peterson",
    releaseYear: 2024,
  },
   {
    title: "We who wrestle with God",
    authorName: "Jordan B. Peterson",
    releaseYear: 2024,
  },
];
const sortByYear = (a, b) => {
        if (a.releaseYear < b.releaseYear) {
            return -1;
        } else if (a.releaseYear > b.releaseYear) {
            return 1;
        } else {
            return 0;
        }
  }

const filteredBooks = [
    books.filter(book => book.releaseYear >= 2000)
];
filteredBooks.sort(sortByYear);
console.log(filteredBooks);