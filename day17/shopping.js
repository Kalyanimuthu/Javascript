console.log("===== Project 2: Online Shopping Cart System =====\n");

// --------------------
// Global Scope
// --------------------
var cart = []; // global cart array
var totalItems; // hoisting example

console.log("Total items before adding to cart:", totalItems); // undefined

// --------------------
// Function Expressions / Arrow Functions
// --------------------

// Function Expression: add item to cart
const addToCart = function (itemName, price, quantity, inStock) {
  cart.push({ itemName, price, quantity, inStock });
};

// Arrow Function: remove item from cart by index
const removeFromCart = (index) => {
  if (index >= 0 && index < cart.length) {
    cart.splice(index, 1);
  }
};

// Function Expression: calculate total price
const calculateTotal = function () {
  return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
};

// Arrow Function: apply discount
const applyDiscount = (total) => {
  let discountedPrice = total; // local scope
  if (total > 500) { // block scope
    const discount = 0.1; // 10%
    discountedPrice = total * (1 - discount);
  }
  return discountedPrice;
};

// Arrow Function: apply tax (18%) to all items
const applyTax = (price) => price * 1.18;

// --------------------
// Adding Items
// --------------------
addToCart("Laptop", 50000, 1, true);
addToCart("Headphones", 2000, 2, true);
addToCart("Mouse", 800, 1, true);
addToCart("USB Cable", 200, 3, true);

console.log("\nItems in Cart:", cart.map((i) => i.itemName).join(", "));

// --------------------
// Removing an Item
// --------------------
removeFromCart(3); // remove "USB Cable"
console.log("Cart after removal:", cart.map((i) => i.itemName).join(", "));

// --------------------
// Checkout Function (Hoisting Demonstration)
// --------------------
checkout(); // called before function declaration

function checkout() {
  totalItems = cart.length; // assign value after hoisting
  console.log("\n--- Checkout Function Called ---");
  console.log("Number of Items:", totalItems);

  // Total before discount & tax
  let total = calculateTotal();
  console.log("Total Price before discount & tax:", total.toFixed(2));

  // Apply discount
  let discountedTotal = applyDiscount(total);
  console.log("Total Price after discount:", discountedTotal.toFixed(2));

  // Apply tax to each item
  let pricesWithTax = cart.map((item) => applyTax(item.price) * item.quantity);
  console.log("Price with Tax per Item:", pricesWithTax.map(p => p.toFixed(2)));

  // Final total including tax
  let finalTotal = pricesWithTax.reduce((a, b) => a + b, 0);
  finalTotal = applyDiscount(finalTotal); // apply discount again if needed
  console.log("Final Total after Discount & Tax:", finalTotal.toFixed(2));

  // Checkout Summary
  let summary = cart.map((item) => `${item.itemName} x ${item.quantity}`).join(", ");
  console.log("Checkout Summary:", summary);
}

// --------------------
// Additional Array Method Demonstrations
// --------------------

// some() → check if cart contains expensive items (>10000)
let hasExpensive = cart.some((item) => item.price > 10000);
console.log("\nCart has expensive items (>10000)?", hasExpensive);

// every() → check if all items are in stock
let allInStock = cart.every((item) => item.inStock);
console.log("All items in stock?", allInStock);
