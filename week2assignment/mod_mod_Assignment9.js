/* Modified for uniqueness */
/*  DONE -- Class demo
Problem Statement: Library Book Management System
-------------------------------------------------
Objective : Create a Book class and use it to manage a collection of books in a library.

Requirements:
  Create a Book class with the following:

  Properties:
      title (string)
      author (string)
      pages (number)
      isAvailable (boolean, default: true)

  Methods:
      borrow() - Marks the book as not available
      returnBook() - Marks the book as available
      getInfo() - Returns a string with book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")
      isLongBook() - Returns true if pages > 300, false otherwise

  1. Create at least 5 book objects using the class:
      Example: "Harry Potter", "1984", "The Hobbit", etc.

  2. Perform the following operations:
      i. Display info of all books
      ii. Borrow 2 books and show their availability status
      iii. Return 1 book and show updated status
      iv. Count how many books are "long books" (more than 300 pages)
      v. List all available books
*/
class Book{
    constructor(title,author,pages,isAvailable=true){
        this.title=title
        this.author=author
        this.pages=pages
        this.isAvailable=isAvailable
    }

    borrow(){
        if(this.isAvailable) 
            this.isAvailable=false
        else 
            console.log(this.title + " is already borrowed")
    }

    returnBook(){
        this.isAvailable=true
    }

    getInfo(){
        return `${this.title} by ${this.author} (${this.pages} pages)`
    }

    isLongBook(){
        return this.pages>300
    }
}

//1. 
let b1=new Book("Harry Potter-1","J.K Rowling",400)
let b2=new Book("1984","George Orwell",328)
let b3=new Book("The Hobbit","J.R.R Tolkien",310)
let b4=new Book("Animal Farm","George Orwell",112)
let b5=new Book("Harry Potter-2","J.K Rowling",411)

let books = [b1, b2, b3, b4, b5];

//2.
//i. 
console.log("All book Information:")
for (let book of books) 
    console.log(book.getInfo())

//ii.
b1.borrow()
b2.borrow()
console.log("Availability after borrowing:")
console.log(b1.title,b1.isAvailable)
console.log(b2.title,b2.isAvailable)

//iii.
b1.returnBook()
console.log("Updated availability:")
console.log(b1.title,b1.isAvailable)

//iv. 
let longBooks=books.filter(book => book.isLongBook())
console.log("Count of long books:",longBooks.length)

//v.
console.log("Available books:")
for(let book of books){
    if(book.isAvailable)
        console.log(book.title);
}
