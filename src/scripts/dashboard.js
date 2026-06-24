export function renderDashboard() {
  const notes = JSON.parse(localStorage.getItem("notes")) || [];
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const expense = JSON.parse(localStorage.getItem("expense")) || [];
  const passwords = JSON.parse(localStorage.getItem("password")) || [];
  let totalExpense = expense.reduce(
    (accumulator, expense) => accumulator + Number(expense.Amount || 0),
    0,
  );

  const dashboardPage = document.querySelector(".stat-cards");
  dashboardPage.innerHTML = ` 
  
       <!--  top container  stat cards -->

          <div
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10"
          >
            <!-- Notes -->
            <div
              class="flex justify-between items-center p-4 bg-slate-800 border border-slate-700 rounded-xl"
            >
              <div>
                <h3 class="text-sm text-slate-400">Notes</h3>
                <h4 class="text-2xl font-bold">${notes.length}</h4>
                <span class="text-xs text-slate-500">Total Notes</span>
              </div>

              <img src="/icons/notes.svg" class="w-10 h-10" />
            </div>

            <!-- Tasks -->
            <div
              class="flex justify-between items-center p-4 bg-slate-800 border border-slate-700 rounded-xl"
            >
              <div>
                <h3 class="text-sm text-slate-400">Tasks</h3>
                <h4 class="text-2xl font-bold">${tasks.length}</h4>
                <span class="text-xs text-slate-500">Pending Tasks</span>
              </div>

              <img src="/icons/tasks.svg" class="w-10 h-10" />
            </div>

            <!-- Expenses -->
            <div
              class="flex justify-between items-center p-4 bg-slate-800 border border-slate-700 rounded-xl"
            >
              <div>
                <h3 class="text-sm text-slate-400">Expenses</h3>
                <h4 class="text-2xl font-bold">${totalExpense}</h4>
                <span class="text-xs text-slate-500">This Month</span>
              </div>

              <img src="/icons/expenses.svg" class="w-10 h-10" />
            </div>

            <!-- Passwords -->
            <div
              class="flex justify-between items-center p-4 bg-slate-800 border border-slate-700 rounded-xl"
            >
              <div>
                <h3 class="text-sm text-slate-400">Passwords</h3>
                <h4 class="text-2xl font-bold">${passwords.length}</h4>
                <span class="text-xs text-slate-500">Saved Items</span>
              </div>

              <img src="/icons/passwords.svg" class="w-10 h-10" />
            </div>
          </div>
          
          <!--  Middle stat Cards  -->

         <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <!-- weather stat card  -->
            <div class="p-4 bg-slate-900 border border-slate-800 rounded-xl">
              <h2 class="font-semibold">Weather Today</h2>
            </div>

            <div class="p-4 bg-slate-900 border border-slate-800 rounded-xl">
              <h2 class="font-semibold">Recent Tasks</h2>
            </div>
         </div>
         
      <!-- bottom stat cards -->


          <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <!-- notes stat card  -->
            <div class="p-4 bg-slate-900 border border-slate-800 rounded-xl">
              <h2 class="font-semibold">Recent Notes</h2>
            </div>

            <div class="p-4 bg-slate-900 border border-slate-800 rounded-xl">
              <h2 class="font-semibold">Expenses Overview</h2>
            </div>
          </div>`;
}
