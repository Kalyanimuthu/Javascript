console.log("===== Project 4: Library Book Management System =====\n");

// --------------------
// Global Scope
// --------------------
var books = []; // global books array
var totalBooks; // demonstrate var hoisting
// let totalAvailable; // would throw error if used before declaration
// const libraryName = "City Library"; // const block scope

console.log("Total books before adding:", totalBooks); // undefined

// --------------------
// Hoisting Example
// --------------------
listBooks(); // works because listBooks is a function declaration

// --------------------
// Functions
// --------------------

// Function Declaration: list all books
function listBooks() {
    console.log("\n--- Listing all books ---");
    books.forEach((b, i) => {
        console.log(`${i + 1}. Title: ${b.title}, Author: ${b.author}, Available: ${b.available}`);
    });
}

// Function Expression: add a new book
const addBook = function (title = "Unknown", author = "Unknown") {
    books.push({ title, author, available: true });
};

// Arrow Function: issue a book
const issueBook = (title) => {
    let index = books.findIndex((b) => b.title === title);
    if (index !== -1 && books[index].available) {
        let issuedBook = books[index]; // local scope variable
        books[index].available = false;
        console.log(`Book issued: ${issuedBook.title} by ${issuedBook.author}`);
    } else {
        console.log(`Book not available: ${title}`);
    }
};

// Arrow Function: return a book
const returnBook = (title) => {
    let index = books.findIndex((b) => b.title === title);
    if (index !== -1 && !books[index].available) {
        let returnedBook = books[index]; // local variable
        books[index].available = true;
        console.log(`Book returned: ${returnedBook.title}`);
    } else {
        console.log(`Cannot return book: ${title}`);
    }
};

// Function Expression: search a book
const searchBook = function (title) {
    return books.some((b) => b.title === title);
};

// --------------------
// Adding Books
// --------------------
addBook("The Alchemist", "Paulo Coelho");
addBook("Atomic Habits", "James Clear");
addBook("Dune", "Frank Herbert");
addBook("1984", "George Orwell");

// --------------------
// Array Methods Demonstration
// --------------------
console.log("\nAll Books:");
listBooks();

// includes() → check if a book exists
let exists = books.map(b => b.title).includes("Dune");
console.log("\nIs 'Dune' in library?", exists);

// issueBook() and returnBook()
issueBook("Dune");
issueBook("1984");
returnBook("Dune");

// map() → extract only book titles
let bookTitles = books.map((b) => b.title);
console.log("\nBook Titles:", bookTitles.join(", "));

// filter() → show available books
let availableBooks = books.filter((b) => b.available);
console.log("Available Books:", availableBooks.map(b => b.title).join(", "));

// reduce() → count total issued books
let issuedCount = books.reduce((acc, b) => acc + (b.available ? 0 : 1), 0);
console.log("Total Issued Books:", issuedCount);

// every() → check if all books are returned
let allReturned = books.every((b) => b.available);
console.log("All books returned?", allReturned);

// splice() → remove a damaged book
let damagedIndex = books.findIndex((b) => b.title === "Atomic Habits");
if (damagedIndex !== -1) {
    let removedBook = books.splice(damagedIndex, 1);
    console.log(`Removed damaged book: ${removedBook[0].title}`);
}

// Final list after removal
console.log("\nFinal Book List:");
listBooks();
