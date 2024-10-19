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

