// finance.js

// Transaction class
export class Transaction {
  constructor(id, amount, category, type, date = new Date().toLocaleDateString()) {
    this.id = id;
    this.amount = parseFloat(amount);
    this.category = category;
    this.type = type;
    this.date = date;
  }
}

// FinanceManager class
export class FinanceManager {
  constructor() {
    this.transactions = JSON.parse(localStorage.getItem("transactions")) || [];
  }

  addTransaction(amount, category, type) {
    if (!category || amount <= 0) {
      throw new Error("Invalid input: enter valid amount and category.");
    }
    const id = Date.now();
    const newTransaction = new Transaction(id, amount, category, type);
    this.transactions.push(newTransaction);
    this.save();
    return newTransaction;
  }

  deleteTransaction(id) {
    this.transactions = this.transactions.filter(t => t.id !== id);
    this.save();
  }

  editTransaction(id, updatedData) {
    const tx = this.transactions.find(t => t.id === id);
    if (tx) Object.assign(tx, updatedData);
    this.save();
  }

  getBalance() {
    const income = this.transactions
      .filter(t => t.type === "income")
      .reduce((sum, t) => sum + t.amount, 0);
    const expense = this.transactions
      .filter(t => t.type === "expense")
      .reduce((sum, t) => sum + t.amount, 0);
    return income - expense;
  }

  save() {
    localStorage.setItem("transactions", JSON.stringify(this.transactions));
  }

  // Fetch currency conversion rate (USD → INR)
  async fetchConversionRate(base = "USD", target = "INR") {
    try {
      const res = await fetch(`https://api.exchangerate.host/latest?base=${base}&symbols=${target}`);
      if (!res.ok) throw new Error("Failed to fetch currency rate");
      const data = await res.json();
      return data.rates[target];
    } catch (err) {
      console.error("Fetch error:", err);
      return null;
    }
  }
}
