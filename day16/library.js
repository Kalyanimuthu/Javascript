console.log("\n===== Project 3: Library Book Borrowing Tracker =====");
let books = [
    {title: "The Alchemist", author: "Paulo Coelho", dueDate: 5, returned: false},
    {title: "Atomic Habits", author: "James Clear", dueDate: 0, returned: true},
    {title: "Dune", author: "Frank Herbert", dueDate: 3, returned: false},
    {title: "1984", author: "George Orwell", dueDate: 7, returned: false}
];
let borrowedCount = 0;
// for...in loop to display all details of a book object (title, author, dueDate)
console.log("\nBook Details:");

for (let book of books) {
    for (let key in book) {
        console.log(`${key}: ${book[key]}`)
    }
    console.log("---------------------------");
}

// ---- 5. for...of loop to iterate over categories ----
const categories = ["Fiction", "Non-fiction", "Sci-Fi", "Biography"];

console.log("\nBook Categories Available:");
for (let category of categories) {
  console.log("- " + category);
}
console.log("\nBorrowed Books:\n\n");
// for loop to display all books borrowed by a user
for (let bookindex = 0; bookindex < books.length; bookindex++)
     {
    let book = books[bookindex];
    // continue to skip books that are already returned.
    if (book.returned == true) {
        continue;
    }
    borrowedCount++;
    console.log(`${borrowedCount}. ${book.title}`)
}
// while loop to keep counting overdue days until the book is returned
console.log("\nOverdue Tracking:");
for (let book of books) {
    if (book.returned){
        console.log(`${book.title} - Returned No overdue`);
        continue;
    } 
    let overdue = 0;
    let due = book.dueDate;
    while (due > 0) {
        overdue++;
        due--;
    }
    console.log(`${book.title} is overdue by ${overdue} day(s.)`);
}
// do...while loop to ensure a fine message is displayed at least once, even if the fine is zero
console.log("\nFine Details:");
for (let book of books) {
let fine = 0;
if (!book.returned)
{
    fine=book.dueDate * 5;
}
do
{
    console.log(`Fine for "${book.title}": ${fine}`);
}while (false);
}

const maxlimit = 3;
let borrowcount = 0;
console.log("\nCheking Maximum Limit");
for (let book of books) {
    if (book.returned) continue;
    borrowcount ++;
    // skipping returned books
    console.log(`${borrowcount}. ${book.title} (by ${book.author})`);
    // 7. Stop processing if maximum allowed books reached
    if (borrowcount >= maxlimit) {
        console.log("Reached maximum limit. Cannot borrow more books");
        break;
    }
}