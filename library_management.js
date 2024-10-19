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

// Define a class named "Patron" to represent a library member who can borrow and return books
class Patron {
    constructor(name) {
        this.name = name; 
        this.borrowedBooks = []; 
    }

    // Method for the patron to borrow a book, if it is available
    borrowBook(book) {
        if (book.isAvailable) { // Check if the book is available
            book.isAvailable = false; // Mark the book as not available
            this.borrowedBooks.push(book); // Add the book to the patron's borrowedBooks list
            console.log(`${this.name} borrowed "${book.title}".`);
        } else {
            console.log(`"${book.title}" is currently not available.`);
        }
    }

    // Method for the patron to return a previously borrowed book
    returnBook(book) {
        const index = this.borrowedBooks.indexOf(book); // Find the index of the book in the borrowedBooks array
        if (index !== -1) { // Check if the book is in the list of borrowed books
            book.isAvailable = true; // Mark the book as available again
            this.borrowedBooks.splice(index, 1); // Remove the book from the patron's borrowedBooks list
            console.log(`${this.name} returned "${book.title}".`); 
        } else {
            console.log(`${this.name} does not have "${book.title}" borrowed.`);
        }
    }
}

// Define a class named "VIPPatron" that extends the "Patron" class to represent a VIP library member
class VIPPatron extends Patron {
    constructor(name, priority) {
        super(name); 
        this.priority = priority;
    }

    // Override the borrowBook method to add VIP-specific borrowing logic
    borrowBook(book) {
        if (book.isAvailable || this.priority) { // VIP patron can borrow if the book is available or they have priority
            book.isAvailable = false; // Mark the book as not available
            this.borrowedBooks.push(book); // Add the book to the VIP patron's borrowedBooks list
            console.log(`VIP Patron ${this.name} borrowed "${book.title}".`);
        } else {
            console.log(`"${book.title}" is currently not available, even for VIP.`); // Inform if the book can't be borrowed, even by VIP
        }
    }
}

// Create two sections in the library
const fiction = new Section("Fiction"); 
const science = new Section("Science"); 

// Create three books with title, author, and ISBN
const book1 = new Book("1984", "George Orwell", "1234567890");
const book2 = new Book("Brave New World", "Aldous Huxley", "0987654321");
const book3 = new Book("The Selfish Gene", "Richard Dawkins", "1122334455");

// Add the books to their respective sections
fiction.addBook(book1); 
fiction.addBook(book2); 
science.addBook(book3);

// Create two patrons: a regular patron and a VIP patron
const regularPatron = new Patron("John Doe"); // Regular patron
const vipPatron = new VIPPatron("Jane Smith", true); // VIP patron with priority

// The regular patron tries to borrow "1984"
regularPatron.borrowBook(book1); 

// The VIP patron tries to borrow "1984" (VIPs have priority over regular patrons)
vipPatron.borrowBook(book1);

// The regular patron returns "1984"
regularPatron.returnBook(book1);

// List all books in the Fiction section, showing their availability
fiction.listBooks();

// Display the total number of books available for borrowing in each section
console.log(`Total available books in Fiction: ${fiction.calculateTotalBooksAvailable()}`);
console.log(`Total available books in Science: ${science.calculateTotalBooksAvailable()}`);

// Mixed step 5 and 6 so last commit