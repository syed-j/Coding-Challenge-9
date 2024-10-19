// Define a class named "Book" to represent individual book information
class Book {
    // The constructor is called when creating a new instance of the Book class
    constructor(title, author, ISBN) {
        this.title = title; 
        this.author = author; 
        this.ISBN = ISBN; 
        this._isAvailable = true; 
    }

    // Method to get the book details as a string, combining title, author, and ISBN
    getDetails() {
        return `${this.title} by ${this.author}, ISBN: ${this.ISBN}`;
    }

    // Getter for the "isAvailable" property, returns the current availability status of the book
    get isAvailable() {
        return this._isAvailable;
    }

    // Setter for the "isAvailable" property, allows updating the availability status of the book
    set isAvailable(status) {
        this._isAvailable = status;
    }
}

// Define a class named "Section" to represent a library section containing multiple books
class Section {
    constructor(name) {
        this.name = name; 
        this.books = []; 
    }

    // Method to add a Book object to the "books" array in the section
    addBook(book) {
        this.books.push(book);
    }

    // Method to get the total number of available books in the section
    getAvailableBooks() {
        return this.books.filter(book => book.isAvailable).length;
    }

    // Method to list all books in the section, displaying their title and availability status
    listBooks() {
        this.books.forEach(book => {
            console.log(`${book.getDetails()} - Available: ${book.isAvailable}`); // Display details of each book
        });
    }
    
    // Method to calculate the total number of books that can still be borrowed from the section
    calculateTotalBooksAvailable() {
        return this.getAvailableBooks(); // Use the getAvailableBooks() method for calculation
    }
}
