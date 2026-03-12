/*  DONE -- Class Demo
Library Book Management System
*/

class Book {
  constructor(title, author, pages, isAvailable = true) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isAvailable = isAvailable;
  }

  // Marks book as borrowed
  borrow() {
    if (this.isAvailable) {
      this.isAvailable = false;
      console.log(`${this.title} has been borrowed.`);
    } else {
      console.log(`${this.title} is already borrowed.`);
    }
  }

  // Marks book as returned
  returnBook() {
    if (!this.isAvailable) {
      this.isAvailable = true;
      console.log(`${this.title} has been returned.`);
    }
  }

  // Returns book information
  getInfo() {
    return `${this.title} by ${this.author} (${this.pages} pages)`;
  }

  // Checks if book has more than 300 pages
  isLongBook() {
    return this.pages > 300;
  }
}


// 1️⃣ Creating 5 book objects
let books = [
  new Book("Harry Potter-1", "J.K Rowling", 400),
  new Book("1984", "George Orwell", 328),
  new Book("The Hobbit", "J.R.R Tolkien", 310),
  new Book("Animal Farm", "George Orwell", 112),
  new Book("Harry Potter-2", "J.K Rowling", 411)
];


// 2️⃣ Operations

// i. Display info of all books
console.log("📚 All Book Information:");
books.forEach(book => console.log(book.getInfo()));


// ii. Borrow 2 books and show availability
books[0].borrow();
books[1].borrow();

console.log("Availability after borrowing:");
console.log(books[0].title, books[0].isAvailable);
console.log(books[1].title, books[1].isAvailable);


// iii. Return 1 book and show updated status
books[0].returnBook();

console.log("Updated availability:");
console.log(books[0].title, books[0].isAvailable);


// iv. Count long books (>300 pages)
let longBooksCount = books.filter(book => book.isLongBook()).length;
console.log("Count of long books:", longBooksCount);


// v. List all available books
console.log("Available books:");
books
  .filter(book => book.isAvailable)
  .forEach(book => console.log(book.title));