let storeExpenses = JSON.parse(localStorage.getItem("expense")) || [];
let startingBudget = 100000
export function renderexpensesPage() {
  const expensesContainer = document.querySelector(".stat-cards");
  if (!expensesContainer) {
    return;
  }

  expensesContainer.innerHTML = ` <div class="min-h-screen bg-slate-900 text-white antialiased">
  <div class="mx-auto max-w-7xl p-4 sm:p-6 space-y-6">
    
    <div class="flex flex-col gap-1 border-b border-slate-800 pb-4"> 
       <h1 class="text-2xl sm:text-3xl font-bold tracking-tight">Expenses Vault</h1>
       <p class="text-xs text-slate-400">Track and monitor your financial transaction footprints</p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

  <!--   total expense stat card  -->

        <div  class="stat-cards rounded-xl bg-slate-800/50 border border-slate-700/60 p-4 flex flex-col justify-between hover:border-slate-600 transition duration-200">
            <div class="flex items-center justify-between gap-4">
                <p class="text-xs font-semibold text-slate-400 uppercase tracking-wider">Total Expenses</p>
                <div class="rounded-lg bg-slate-900/60 border border-slate-700/50 p-2 text-sm">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-red-400">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V13.5Zm0 2.25h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V18Zm2.498-6.75h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V13.5Zm0 2.25h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V18Zm2.504-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5Zm0 2.25h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V18Zm2.498-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5ZM8.25 6h7.5v2.25h-7.5V6ZM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 0 0 2.25 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0 0 12 2.25Z" />
                </svg>

                </div>
            </div>
            <p id="total-expense-card" class="mt-4 text-2xl font-bold text-red-400">$0.00</p>
        </div>
<!--   average expense stat card -->

        <div class="stat-cards rounded-xl bg-slate-800/50 border border-slate-700/60 p-4 flex flex-col justify-between hover:border-slate-600 transition duration-200">
            <div class="flex items-center justify-between gap-4">
                <p class="text-xs font-semibold text-slate-400 uppercase tracking-wider">Average Expense</p>
                <div class="rounded-lg bg-slate-900/60 border border-slate-700/50 p-2 text-sm">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-blue-400">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V13.5Zm0 2.25h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V18Zm2.498-6.75h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V13.5Zm0 2.25h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V18Zm2.504-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5Zm0 2.25h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V18Zm2.498-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5ZM8.25 6h7.5v2.25h-7.5V6ZM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 0 0 2.25 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0 0 12 2.25Z" />
          </svg>

                </div>
            </div>
            <p id="average-expense-card" class="mt-4 text-2xl font-bold text-blue-400">$0.00</p>
        </div>
<!--largest expense stat card  -->
        <div class="stat-cards rounded-xl bg-slate-800/50 border border-slate-700/60 p-4 flex flex-col justify-between hover:border-slate-600 transition duration-200">
            <div class="flex items-center justify-between gap-4">
                <p class="text-xs font-semibold text-slate-400 uppercase tracking-wider">Largest Expense</p>
                <div class="rounded-lg bg-slate-900/60 border border-slate-700/50 p-2 text-sm">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-amber-400">
    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
</svg>

                 
                 </div>
            </div>
            <p  id="largest-expense-card"class="mt-4 text-2xl font-bold text-amber-400">$0.00</p>
        </div>
<!-- avilable pool stat cards -->
        <div class="stat cards rounded-xl bg-slate-800/50 border border-slate-700/60 p-4 flex flex-col justify-between hover:border-slate-600 transition duration-200">
            <div class="flex items-center justify-between gap-4">
                <p class="text-xs font-semibold text-slate-400 uppercase tracking-wider">Available Pool</p>
                <div class="rounded-lg bg-slate-900/60 border border-slate-700/50 p-2 text-sm">

             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5      text-emerald-400">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>


                </div>
            </div>
            <p id="availabe-expense-card"  class="mt-4 text-2xl font-bold text-emerald-400">$0.00</p>
        </div>
        <!--     -->



    </div>



 <!--  form , graph and pie charts -->

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6"> 



        <!--  form container  --> 


                <div class="rounded-xl bg-slate-800/50 border border-slate-700/60 p-5 space-y-4 h-fit">
                    <h2 class="text-sm font-semibold text-slate-300 uppercase tracking-wider border-b border-slate-700/50 pb-2">
                        Log New Transaction
                    </h2>
                    
                    <div class="space-y-3">

                        <div  class="flex flex-col gap-1.5">
                            <label class="text-xs text-slate-400 font-medium">Category</label>
                            <select id="category"  class="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-500 transition cursor-pointer"> 
                                <option>Food</option>
                                <option>Transport</option>
                                <option>Shopping</option>
                                <option>Bills</option>
                            </select>
                        </div>

                        <div  class="flex flex-col gap-1.5">
                            <label class="text-xs text-slate-400 font-medium">Description</label>
                            <input id="description"  type="text" placeholder="e.g. AWS Cloud Server Bill" class="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-500 transition">
                        </div>

                        <div  class="flex flex-col gap-1.5">
                            <label class="text-xs text-slate-400 font-medium">Amount</label>
                            <input id="amount"   type="number" placeholder="0.00" class="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-500 transition">
                        </div>

                        <div  class="flex flex-col gap-1.5">
                            <label class="text-xs text-slate-400 font-medium">Transaction Date</label>
                            <input id="date" type="date" class="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-500 transition">
                        </div>

                    </div>

                    <div class="flex gap-3 pt-2">
                        <button id="addExpense-Btn" type="button" class="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 rounded-lg text-sm transition cursor-pointer shadow-lg shadow-emerald-900/20">
                            Add Expense
                        </button>

                        <button id="clearExpense-Btn" type="button" class="px-4 py-2 bg-red-600 hover:bg-slate-600 text-slate-300 font-semibold rounded-lg text-sm transition cursor-pointer">
                            Clear
                        </button>
                    </div>
                </div>


        <!-- table container  -->


        <div class = " lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div class="rounded-xl bg-slate-800/50 border border-slate-700/60 p-5 flex flex-col"> 
                <h2 class="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-4 border-b border-slate-700/50 pb-2">
                    Expense History
                </h2>
                <div class="overflow-x-auto flex-1">
                    <table class="w-full text-left border-collapse"> 
                        <thead> 
                            <tr class="text-xs font-mono text-slate-400 border-b border-slate-700">
                                <th class="pb-3 font-medium">Date</th>
                                <th class="pb-3 font-medium">Category</th>
                                <th class="pb-3 font-medium">Amount</th>
                                <th class="pb-3 font-medium text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody class="js-body-table divide-y divide-slate-800 text-sm">
                           
                        </tbody>
                    </table>
                </div>
            
            
            </div>

            <!-- graph container  -->

       <div class="rounded-xl bg-slate-800/50 border         border-slate-700/60 p-5 flex flex-col">
                  <h2 class="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-4 border-b border-slate-700/50 pb-2">Expense Breakdown</h2>
                  <div class="js-chart-container flex-1 flex flex-col items-center justify-center min-h-[220px] bg-slate-900/40 border border-dashed border-slate-700 rounded-lg p-4 text-center"> Coming soon
                      </div>
              </div>

           

        </div> </div> </div>

        <!--  -->
</div>


`;

  const addExpenseBtn = document.getElementById("addExpense-Btn");
  const clearExpenseBtn = document.getElementById("clearExpense-Btn");
  const date = document.getElementById("date");
  const amount = document.getElementById("amount");
  const description = document.getElementById("description");
  const category = document.getElementById("category");

  addExpenseBtn.addEventListener("click", () => {
    const expenseObject = {
      Id: Date.now(),
      Category: category.value,
      Description: description.value,
      Amount: amount.value,
      Date: date.value || new Date().toISOString().split("T")[0],
    };

    storeExpenses.push(expenseObject);
    updateExpenseTable();
    updateStatCards();
    savetoLocalStorage();
  });

  clearExpenseBtn.addEventListener("click", () => {
    (date.value || new Date().toISOString().split("T")[0],
      (description.value = ""));
    amount.value = "";
  });

  updateExpenseTable();
  updateStatCards();
}

function updateStatCards() {
  let totalExpense = storeExpenses.reduce((accumulator, expense) => {
    return accumulator + Number(expense.Amount);
  }, 0);

  let averageExpense = totalExpense / storeExpenses.length;

  const largestExpense = storeExpenses.reduce((largest, expense) => {
    return Math.max(largest, Number(expense.Amount));
  }, 0);

  document.getElementById("average-expense-card").textContent =
    `${averageExpense}`;
  document.getElementById("largest-expense-card").textContent =
    `${largestExpense}`;

  document.getElementById("total-expense-card").textContent = `${totalExpense}`;
  let availablePool = startingBudget - totalExpense;
  document.getElementById("availabe-expense-card").textContent =
    `${availablePool}`;
}
function updateExpenseTable() {
  const renderTableBody = document.querySelector(".js-body-table");

  let totalExpense = storeExpenses.reduce((accumulator, expense) => {
    return accumulator + Number(expense.Amount);
  }, 0);

  renderTableBody.innerHTML = storeExpenses
    .map((table) => {
      return `   <tr class="hover:bg-slate-700/20 transition-colors">
                         <td class="py-3 font-mono text-xs text-slate-400">${table.Date}</td>
                           <td class="py-3 font-medium">${table.Category}</td>
                             <td class="py-3 text-red-400 font-semibold">${table.Amount}</td>
                                <td class="py-3 text-right">
                                    <button data-delete="${table.Id}" 
                                    class="delete-icon text-xs font-semibold hover:bg-red-300  hover:bg-red-500/20 px-2 py-1 rounded border border-red-500/20 transition cursor-pointer">
                                  <img src="
                                  /icons/delete.svg" class=" w-5">
                                    </button>
                                </td>
             </tr>`;
    })
    .join("");
  deleteExpense();
  updatePieChart();
}

function deleteExpense() {
  document.querySelectorAll(".delete-icon").forEach((deleteItem) => {
    deleteItem.addEventListener("click", () => {
      const removedata = Number(deleteItem.dataset.delete);
      storeExpenses = storeExpenses.filter((item) => removedata !== item.Id);
      updateExpenseTable();
      updateStatCards();
      savetoLocalStorage();
    });
  });
}

function savetoLocalStorage() {
  localStorage.setItem("expense", JSON.stringify(storeExpenses));
}

function getCategoryTotals() {
  return storeExpenses.reduce((accumulator, expense) => {
    const cat = expense.Category;
    const amt = Number(expense.Amount) || 0;
    accumulator[cat] = (accumulator[cat] || 0) + amt;
    return accumulator;
  }, {});
}

function updatePieChart() {
  const totals = getCategoryTotals();
  const grandTotal = Object.values(totals).reduce(
    (sum, value) => sum + value,
    0,
  );

  // Cleaned Selector Architecture Hook
  const chartContainer = document.querySelector(".js-chart-container");
  if (!chartContainer) return;

  if (grandTotal === 0) {
    chartContainer.innerHTML = `<p class="text-xs text-slate-400">No transaction data footprint found.</p>`;
    return;
  }

  const colors = {
    Food: "#ef4444",
    Transport: "#3b82f6",
    Shopping: "#f59e0b",
    Bills: "#10b981",
  };

  let cumulativePercentage = 0;
  const gradientSlices = [];

  for (const category in totals) {
    const amount = totals[category];
    const percentage = (amount / grandTotal) * 100;
    const nextPercentage = cumulativePercentage + percentage;
    const color = colors[category] || "#64748b";

    gradientSlices.push(`${color} ${cumulativePercentage}% ${nextPercentage}%`);
    cumulativePercentage = nextPercentage;
  }

  const gradientString = gradientSlices.join(", ");

  chartContainer.innerHTML = `
    <div class="flex flex-col items-center gap-4 w-full">
      <div class="w-32 h-32 rounded-full border border-slate-700/40 shadow-xl" 
           style="background: conic-gradient(${gradientString})">
      </div>
      <div class="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs max-w-[240px]">
        ${Object.keys(totals)
          .map(
            (category) => `
            <div class="flex items-center gap-1.5">
              <span class="w-2.5 h-2.5 rounded-full" style="background-color: ${colors[category] || "#64748b"}"></span>
              <span class="text-slate-400 font-medium">${category}:</span>
              <span class="text-slate-200 font-semibold">${((totals[category] / grandTotal) * 100).toFixed(0)}%</span>
            </div>
          `,
          )
          .join("")}
      </div>
    </div>
  `;
}