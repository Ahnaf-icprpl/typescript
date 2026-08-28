/**
 * 
 * The school library is building a digital catalog to help students search for books. 
 * Every book must store its ISBN number, title, author's name, total number of pages, 
 * book category, and whether the book is currently available for borrowing.
 * 
 * Task:
 * 1. Define a proper type for the book information.
 * 2. Implement a type that you defined on 3 books data.
 * 
 * display the book data using console.log.
 */

type Book = {
  isbn: string;
  title: string;
  author: string;
  totalPages: number;
  category: string;
  isAvailable: boolean;
};

const book1: Book = {
  isbn: "978-602-03-8591-1",
  title: "Belajar TypeScript",
  author: "nabeel",
  totalPages: 250,
  category: "Programming",
  isAvailable: true,
};

const book2: Book = {
  isbn: "978-602-03-8592-2",
  title: "Laskar Pelangi",
  author: "zafrie",
  totalPages: 529,
  category: "Novel",
  isAvailable: false,
};

const book3: Book = {
  isbn: "978-602-03-8593-3",
  title: "Clean Code",
  author: "mario",
  totalPages: 464,
  category: "Software Engineering",
  isAvailable: true,
};

console.log(book1);
console.log(book2);
console.log(book3);