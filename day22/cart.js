// cart.js

export class Cart {
  constructor() {
    this.items = JSON.parse(localStorage.getItem("cart")) || [];
    this.promo = sessionStorage.getItem("promo") || null;
  }

  addToCart(product, quantity = 1) {
    if (quantity <= 0 || quantity > product.stock) {
      alert("Invalid quantity or out of stock!");
      return;
    }

    const existing = this.items.find(item => item.id === product.id);
    if (existing) {
      existing.quantity += quantity;
      if (existing.quantity > product.stock) {
        existing.quantity = product.stock;
        alert("Not enough stock available.");
      }
    } else {
      this.items.push({ ...product, quantity });
    }

    this.save();
  }

  removeFromCart(id) {
    this.items = this.items.filter(item => item.id !== id);
    this.save();
  }

  updateQuantity(id, quantity) {
    const item = this.items.find(i => i.id === id);
    if (!item) return;

    if (quantity <= 0) {
      this.removeFromCart(id);
    } else if (quantity > item.stock) {
      alert("Exceeds stock!");
      item.quantity = item.stock;
    } else {
      item.quantity = quantity;
    }
    this.save();
  }

  applyPromo(code) {
    if (code === "SAVE10") {
      this.promo = code;
      sessionStorage.setItem("promo", code);
      alert("Promo code applied: 10% off!");
    } else {
      alert("Invalid promo code");
    }
  }

  getTotal() {
    const subtotal = this.items.reduce((sum, i) => sum + i.price * i.quantity, 0);
    return this.promo === "SAVE10" ? subtotal * 0.9 : subtotal;
  }

  save() {
    localStorage.setItem("cart", JSON.stringify(this.items));
  }

  clear() {
    this.items = [];
    this.promo = null;
    localStorage.removeItem("cart");
    sessionStorage.removeItem("promo");
  }
}
