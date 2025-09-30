console.log("===== Project 2: Online Shopping Cart System =====\n");

const carts = [
  { name: "Laptop", price: 80000, quantity: 1, stock: 2 },
  { name: "Headphones", price: 2000, quantity: 2, stock: 3 },
  { name: "Mouse", price: 800, quantity: 1, stock: 1 }
];
console.log("Items in Cart:\n");
// for loop to list all items in the cart with prices.
for (let cartIndex = 0; cartIndex < carts.length; cartIndex++) {
  const cart = carts[cartIndex];
  console.log(`Product Name: ${cart.name} | Price: ₹${cart.price} | Quantity: ${cart.quantity} | Stock: ${cart.stock}`);
}
// while loop to keep reducing stock until inventory becomes empty
for (const cart of carts) {
    console.log(`\nProcessing stock for: ${cart.name}`);
while (cart.stock > 0) {
    console.log(`Stocks Remaining: ${cart.stock - 1}`);
    cart.stock--;
}    console.log(`${cart.name} is out of stock`);
}
// ---- 4. for...in loop to display all properties of each cart item ----
console.log("\nCart Item Details Using for...in:");
for (let cart of carts) {
    for (let key in cart) {
        console.log(`${key}: ${cart[key]}`);
    }
    console.log(`-----------------------------`);
}
// do...while loop to ensure that at least one bill is generated, even if the cart is empty.
let finalbill = 0;
do {
    console.log("\n---Generating Bill---");
    finalbill = 0;
    if (carts.length===0) {
        console.log("Cart is emply. No items to Bill");
    } else {
        
        for (let item of carts) {    
            let total = item.price * item.quantity;
            console.log(`${item.name} x ${item.quantity} = ${total}`)
            finalbill+=total;
        }
    }
    console.log(`Amount to Pay: ${finalbill}`);
} while (false);

// Use for...of loop to iterate over a coupon codes array and apply discounts
const coupons = ["SAVE10", "INVALID", "SAVE20"];
console.log("\nApplying Coupon:");
for (let code of coupons) {
    if (code === "SAVE10") {
        console.log(`SAVE10 coupon applied: 10% OFF`);
        finalbill *= 0.9;
    } else if (code === "SAVE20"){
        console.log(`SAVE20 coupon applied: 20% OFF`);
        finalbill *= 0.8;
    }else {
        console.log(`Invalid coupon`, code);
        continue;
    }
    if (finalbill > 60000) {
        console.log("Bill exceeds credit limit. Stop further coupons.");
        break;
    }
}
console.log("\nFinal Amount after Coupons applied:" + finalbill.toFixed(2));