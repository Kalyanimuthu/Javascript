// app.js
import { FinanceManager } from "./finance.js";

const fm = new FinanceManager();

const form = document.getElementById("transactionForm");
const list = document.getElementById("transactionList");
const balanceDisplay = document.getElementById("balance");
const ctx = document.getElementById("financeChart");

let chart;

// Render all transactions
function renderTransactions() {
  list.innerHTML = "";
  fm.transactions.forEach(({ id, amount, category, type, date }) => {
    const div = document.createElement("div");
    div.dataset.id = id;
    div.textContent = `${category} - ${amount} (${type}) on ${date} `;
    
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";

    editBtn.addEventListener("click", () => {
      const newAmount = parseFloat(prompt("New amount:", amount));
      const newCategory = prompt("New category:", category);
      if (newAmount && newCategory) {
        fm.editTransaction(id, { amount: newAmount, category: newCategory });
        renderTransactions();
      }
    });

    delBtn.addEventListener("click", () => {
      fm.deleteTransaction(id);
      renderTransactions();
    });

    div.appendChild(editBtn);
    div.appendChild(delBtn);
    list.appendChild(div);
  });
  updateBalance();
  updateChart();
}

// Update total balance
async function updateBalance() {
  const balance = fm.getBalance();
  balanceDisplay.textContent = balance.toFixed(2);

  const rate = await fm.fetchConversionRate("INR", "USD");
  if (rate) {
    console.log(`1 INR = ${rate.toFixed(4)} USD`);
  }
}

// Update chart (smaller chart, fixed size)
function updateChart() {
  const income = fm.transactions
    .filter(t => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);
  const expense = fm.transactions
    .filter(t => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  if (chart) chart.destroy();

  chart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Income", "Expense"],
      datasets: [
        {
          data: [income, expense],
          backgroundColor: ["green", "red"]
        }
      ]
    },
    options: {
      responsive: false,          // ✅ disables auto-scaling
      maintainAspectRatio: false, // ✅ keeps consistent small size
    }
  });
}

// Handle form submission
form.addEventListener("submit", e => {
  e.preventDefault();
  const amount = parseFloat(document.getElementById("amount").value);
  const category = document.getElementById("category").value.trim();
  const type = document.getElementById("type").value;

  try {
    fm.addTransaction(amount, category, type);
    renderTransactions();
    form.reset();
  } catch (err) {
    alert(err.message);
  }
});

// Initial render
renderTransactions();
