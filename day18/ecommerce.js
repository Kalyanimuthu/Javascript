console.log("===== Project 5: E-Commerce Inventory =====\n");

const products = [
  { id: 1, name: "Laptop", price: 60000, stock: 5, supplier: { email: "seller@shop.com" } },
  { id: 2, name: "Phone", price: 30000, stock: 10 }
];

// Destructure
products.forEach(({ name, price }) => console.log(`Product: ${name}, Price: ₹${price}`));

// Spread → Update stock
const updatedProducts = products.map(p => 
  p.id === 1 ? { ...p, stock: p.stock - 1 } : p
);

// Rest → Total order
function getTotal(...items) {
  return items.reduce((sum, item) => sum + item.price, 0);
}

const order = [products[0], products[1]];
console.log("\nOrder Total: ₹", getTotal(...order));

// Template Literal → Confirmation
console.log(`
===== Order Confirmation =====
${order.map(o => `${o.name} - ₹${o.price}`).join("\n")}
-------------------
Total: ₹${getTotal(...order)}
`);

// Optional Chaining → Supplier check
products.forEach(p => console.log(`${p.name} Supplier Email: ${p.supplier?.email ?? "Not Provided"}`));
