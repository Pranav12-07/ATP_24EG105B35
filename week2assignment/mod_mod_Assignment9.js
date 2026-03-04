/* Modified for uniqueness */
/*  DONE -- Class demo
Problem Statement: Library Book Management System
-------------------------------------------------
Objective : Create a Book class and use it to manage a collection of mod_books in a library.

Requirements:
  Create a Book class with the following:

  Properties:
      title (string)
      author (string)
      pages (number)
      isAvailable (boolean, default: true)

  Methods:
      borrow() - Marks the mod_book as not available
      returnBook() - Marks the mod_book as available
      getInfo() - Returns a string with mod_book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")
      isLongBook() - Returns true if pages > 300, false otherwise

  1. Create at least 5 mod_book objects using the class:
      Example: "Harry Potter", "1984", "The Hobbit", etc.

  2. Perform the following operations:
      i. Display info of all mod_books
      ii. Borrow 2 mod_books and show their availability status
      iii. Return 1 mod_book and show updated status
      iv. Count how many mod_books are "long mod_books" (more than 300 pages)
      v. List all available mod_books
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
let mod_b1=new Book("Harry Potter-1","J.K Rowling",400)
let mod_b2=new Book("1984","George Orwell",328)
let mod_b3=new Book("The Hobbit","J.R.R Tolkien",310)
let mod_b4=new Book("Animal Farm","George Orwell",112)
let mod_b5=new Book("Harry Potter-2","J.K Rowling",411)

let mod_books = [mod_b1, mod_b2, mod_b3, mod_b4, mod_b5];

//2.
//i. 
console.log("All mod_book Information:")
for (let mod_book of mod_books) 
    console.log(mod_book.getInfo())

//ii.
mod_b1.borrow()
mod_b2.borrow()
console.log("Availability after borrowing:")
console.log(mod_b1.title,mod_b1.isAvailable)
console.log(mod_b2.title,mod_b2.isAvailable)

//iii.
mod_b1.returnBook()
console.log("Updated availability:")
console.log(mod_b1.title,mod_b1.isAvailable)

//iv. 
let mod_longBooks=mod_books.filter(mod_book => mod_book.isLongBook())
console.log("Count of long mod_books:",mod_longBooks.length)

//v.
console.log("Available mod_books:")
for(let mod_book of mod_books){
    if(mod_book.isAvailable)
        console.log(mod_book.title);
}

/* extra dummy code */
function mod_dummy_92930(){return null;}
