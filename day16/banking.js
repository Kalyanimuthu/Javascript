console.log("===== Project 5: ATM Banking System Simulation =====\n");

// User account details
const user = {
  accountNo: "1234567890",
  name: "John Doe",
  balance: 5000,
  pin: 1234,
  transactions: [200, -500, 1000, -1500, 700] // positive = deposit, negative = withdrawal
};

// Available ATM services
const services = ["Deposit", "Withdraw", "Check Balance"];

// 1. for loop to display last 5 transactions
console.log("Last 5 Transactions:");
for (let i = 0; i < user.transactions.length; i++) {
  let t = user.transactions[i];
  console.log(`${i + 1}: ${t >= 0 ? "Deposit" : "Withdrawal"} ₹${Math.abs(t)}`);
}

// 2. while loop to keep withdrawing money until balance insufficient
console.log("\nWithdrawals:");
let withdrawAmount = 1000; // example withdrawal amount per attempt
while (user.balance >= withdrawAmount) {
  console.log(`Withdrawing ₹${withdrawAmount}...`);
  user.balance -= withdrawAmount;
  console.log(`Remaining Balance: ₹${user.balance}`);
}

// 3. do...while loop to display thank you message at least once
do {
  console.log("\nThank you for using our ATM service!");
} while (false);

// 4. for...in loop to display user account details
console.log("\nUser Account Details:");
for (let key in user) {
  if (key !== "transactions" && key !== "pin") { // hide sensitive info if needed
    console.log(`${key}: ${user[key]}`);
  }
}

// 5. for...of loop to iterate over available ATM services
console.log("\nATM Services Available:");
for (let service of services) {
  console.log("- " + service);
}

// 6 & 7. PIN validation with continue & break
console.log("\nPIN Validation:");
const pinAttempts = [1111, 2222, 1234]; // example attempts
let attempts = 0;
for (let enteredPin of pinAttempts) {
  attempts++;
  if (enteredPin !== user.pin) {
    console.log(`Attempt ${attempts}: Incorrect PIN. Try again.`);
    if (attempts >= 3) {
      console.log("Account locked due to 3 incorrect PIN attempts!");
      break; // 7. lock account after 3 incorrect attempts
    }
    continue; // 6. skip remaining logic in loop for invalid PIN
  }
  console.log(`Attempt ${attempts}: PIN correct. Access granted.`);
  break; // exit loop once correct PIN entered
}
