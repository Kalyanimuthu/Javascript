// app.js
import { Product } from "./product.js";
import { Cart } from "./cart.js";

// DOM elements
const productList = document.getElementById("productList");
const cartList = document.getElementById("cartList");
const totalDisplay = document.getElementById("cartTotal");
const promoInput = document.getElementById("promoCode");
const applyPromoBtn = document.getElementById("applyPromo");

const cart = new Cart();

// Embedded products array (works offline)
const products = [
  new Product(1, "Laptop", 800, 5),
  new Product(2, "Headphones", 100, 10),
  new Product(3, "Keyboard", 50, 8),
  new Product(4, "Mouse", 30, 12)
];

// Render product list
function renderProducts() {
  productList.innerHTML = "";
  products.forEach(p => {
    const div = document.createElement("div");
    div.innerHTML = `
      <strong>${p.name}</strong> - $${p.price} (Stock: ${p.stock})
      <input type="number" id="qty-${p.id}" value="1" min="1" max="${p.stock}">
      <button id="add-${p.id}">Add to Cart</button>
    `;
    productList.appendChild(div);

    div.querySelector(`#add-${p.id}`).addEventListener("click", () => {
      const qty = parseInt(div.querySelector(`#qty-${p.id}`).value);
      cart.addToCart(p, qty);
      renderCart();
    });
  });
}

// Render cart items
function renderCart() {
  cartList.innerHTML = "";
  cart.items.forEach(item => {
    const div = document.createElement("div");
    div.innerHTML = `
      ${item.name} - $${item.price} × 
      <input type="number" id="cart-qty-${item.id}" value="${item.quantity}" min="1" max="${item.stock}">
      <button id="remove-${item.id}">Remove</button>
    `;
    cartList.appendChild(div);

    // Update quantity
    div.querySelector(`#cart-qty-${item.id}`).addEventListener("input", e => {
      const qty = parseInt(e.target.value);
      cart.updateQuantity(item.id, qty);
      renderCart();
    });

    // Remove item
    div.querySelector(`#remove-${item.id}`).addEventListener("click", () => {
      cart.removeFromCart(item.id);
      renderCart();
    });
  });

  totalDisplay.textContent = cart.getTotal().toFixed(2);
}

// Apply promo code
applyPromoBtn.addEventListener("click", () => {
  const code = promoInput.value.trim();
  cart.applyPromo(code);
  renderCart();
});

// Initialize
renderProducts();
renderCart();
