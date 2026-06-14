/* classes
Library Book Management System
*/

class Book {
  constructor(title, author, pages, isAvailable = true) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isAvailable = isAvailable;
  }

  borrow() {
    if (this.isAvailable) {
      this.isAvailable = false;
    } else {
      console.log(`${this.title} is already borrowed`);
    }
  }

  returnBook() {
    this.isAvailable = true;
  }

  getInfo() {
    return `${this.title} by ${this.author} (${this.pages} pages)`;
  }

  isLongBook() {
    return this.pages > 300;
  }
}

// Create books
const books = [
  new Book("Harry Potter-1", "J.K Rowling", 400),
  new Book("1984", "George Orwell", 328),
  new Book("The Hobbit", "J.R.R Tolkien", 310),
  new Book("Animal Farm", "George Orwell", 112),
  new Book("Harry Potter-2", "J.K Rowling", 411)
];

// i. Display all book info
console.log("All Book Information:");
books.forEach(book => console.log(book.getInfo()));

// ii. Borrow 2 books
books[0].borrow();
books[1].borrow();

console.log("Availability after borrowing:");
console.log(books[0].title, books[0].isAvailable);
console.log(books[1].title, books[1].isAvailable);

// iii. Return 1 book
books[0].returnBook();

console.log("Updated availability:");
console.log(books[0].title, books[0].isAvailable);

// iv. Count long books
let longBooks = books.filter(book => book.isLongBook());
console.log("Count of long books:", longBooks.length);

// v. List available books
let availableBooks = books.filter(book => book.isAvailable);
console.log("Available books:");
availableBooks.forEach(book => console.log(book.title));