console.log("===== Project 2: Online Food Ordering App =====\n");

// Menu
const menu = [
  { id: 1, name: "Pizza", price: 250, category: "Main" },
  { id: 2, name: "Burger", price: 150, category: "Snacks" },
  { id: 3, name: "Pasta", price: 200, category: "Main" }
];

// Display menu
menu.forEach(({ name, price }) => console.log(`Item: ${name} - ₹${price}`));

// Spread → Add items to cart
let cart = [];
cart = [...cart, menu[0], menu[2]];

// Rest → Calculate bill
function calculateBill(...items) {
  return items.reduce((total, item) => total + item.price, 0);
}
console.log("\nFinal Bill: ₹", calculateBill(...cart));

// Template Literals → Invoice
console.log(`
===== Invoice =====
${cart.map(i => `${i.name} - ₹${i.price}`).join("\n")}
-------------------
Total: ₹${calculateBill(...cart)}
`);

// Optional Chaining → Missing customer contact
const customer = { name: "Kalyani" }; 
console.log("Customer Email:", customer.contact?.email ?? "Not Provided");
