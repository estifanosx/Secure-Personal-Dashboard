export function renderexpensesPage() {
  const expensesContainer = document.querySelector(".stat-cards");
  expensesContainer.innerHTML = ` <div class="min-h-screen bg-slate-900 text-white antialiased">
  <div class="mx-auto max-w-7xl p-4 sm:p-6 space-y-6">
    
    <div class="flex flex-col gap-1 border-b border-slate-800 pb-4"> 
       <h1 class="text-2xl sm:text-3xl font-bold tracking-tight">Expenses Vault</h1>
       <p class="text-xs text-slate-400">Track and monitor your financial transaction footprints</p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
  
        <div class="rounded-xl bg-slate-800/50 border border-slate-700/60 p-4 flex flex-col justify-between hover:border-slate-600 transition duration-200">
            <div class="flex items-center justify-between gap-4">
                <p class="text-xs font-semibold text-slate-400 uppercase tracking-wider">Total Expenses</p>
                <div class="rounded-lg bg-slate-900/60 border border-slate-700/50 p-2 text-sm">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-red-400">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V13.5Zm0 2.25h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V18Zm2.498-6.75h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V13.5Zm0 2.25h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V18Zm2.504-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5Zm0 2.25h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V18Zm2.498-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5ZM8.25 6h7.5v2.25h-7.5V6ZM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 0 0 2.25 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0 0 12 2.25Z" />
                </svg>

                </div>
            </div>
            <p class="mt-4 text-2xl font-bold text-red-400">$0.00</p>
        </div>

        <div class="rounded-xl bg-slate-800/50 border border-slate-700/60 p-4 flex flex-col justify-between hover:border-slate-600 transition duration-200">
            <div class="flex items-center justify-between gap-4">
                <p class="text-xs font-semibold text-slate-400 uppercase tracking-wider">Average Expense</p>
                <div class="rounded-lg bg-slate-900/60 border border-slate-700/50 p-2 text-sm">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-blue-400">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V13.5Zm0 2.25h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V18Zm2.498-6.75h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V13.5Zm0 2.25h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V18Zm2.504-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5Zm0 2.25h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V18Zm2.498-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5ZM8.25 6h7.5v2.25h-7.5V6ZM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 0 0 2.25 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0 0 12 2.25Z" />
          </svg>

                </div>
            </div>
            <p id="amount" class="mt-4 text-2xl font-bold text-blue-400">$0.00</p>
        </div>

        <div class="rounded-xl bg-slate-800/50 border border-slate-700/60 p-4 flex flex-col justify-between hover:border-slate-600 transition duration-200">
            <div class="flex items-center justify-between gap-4">
                <p class="text-xs font-semibold text-slate-400 uppercase tracking-wider">Largest Expense</p>
                <div class="rounded-lg bg-slate-900/60 border border-slate-700/50 p-2 text-sm">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-amber-400">
    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
</svg>

                 
                 </div>
            </div>
            <p id="amount" class="mt-4 text-2xl font-bold text-amber-400">$0.00</p>
        </div>

        <div class="rounded-xl bg-slate-800/50 border border-slate-700/60 p-4 flex flex-col justify-between hover:border-slate-600 transition duration-200">
            <div class="flex items-center justify-between gap-4">
                <p class="text-xs font-semibold text-slate-400 uppercase tracking-wider">Available Pool</p>
                <div class="rounded-lg bg-slate-900/60 border border-slate-700/50 p-2 text-sm">

             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5      text-emerald-400">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>


                </div>
            </div>
            <p id="amount" class="mt-4 text-2xl font-bold text-emerald-400">$0.00</p>
        </div>
        
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6"> 
        
        <div class="rounded-xl bg-slate-800/50 border border-slate-700/60 p-5 space-y-4 h-fit">
            <h2 class="text-sm font-semibold text-slate-300 uppercase tracking-wider border-b border-slate-700/50 pb-2">
                Log New Transaction
            </h2>
            
            <div class="space-y-3">
                <div class="flex flex-col gap-1.5">
                    <label class="text-xs text-slate-400 font-medium">Category</label>
                    <select class="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-500 transition cursor-pointer"> 
                        <option>Food</option>
                        <option>Transport</option>
                        <option>Shopping</option>
                        <option>Bills</option>
                    </select>
                </div>

                <div class="flex flex-col gap-1.5">
                    <label class="text-xs text-slate-400 font-medium">Description</label>
                    <input type="text" placeholder="e.g. AWS Cloud Server Bill" class="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-500 transition">
                </div>

                <div class="flex flex-col gap-1.5">
                    <label class="text-xs text-slate-400 font-medium">Amount</label>
                    <input type="number" placeholder="0.00" class="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-500 transition">
                </div>

                <div class="flex flex-col gap-1.5">
                    <label class="text-xs text-slate-400 font-medium">Transaction Date</label>
                    <input type="date" class="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-500 transition">
                </div>
            </div>

            <div class="flex gap-3 pt-2">
                <button type="button" class="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 rounded-lg text-sm transition cursor-pointer shadow-lg shadow-emerald-900/20">
                    Add Expense
                </button>
                <button type="button" class="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-slate-300 font-semibold rounded-lg text-sm transition cursor-pointer">
                    Clear
                </button>
            </div>
        </div>

        <div class="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            
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
                        <tbody class="divide-y divide-slate-800 text-sm">
                            <tr class="hover:bg-slate-700/20 transition-colors">
                                <td class="py-3 font-mono text-xs text-slate-400">2026-06-22</td>
                                <td class="py-3 font-medium">Food</td>
                                <td class="py-3 text-red-400 font-semibold">-$12.00</td>
                                <td class="py-3 text-right">
                                    <button class="text-xs font-semibold text-red-400 hover:bg-red-300 bg-red-500/10 hover:bg-red-500/20 px-2 py-1 rounded border border-red-500/20 transition cursor-pointer">
                                  <img src="public/icons/delete.svg" class=" w-5" >
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="rounded-xl bg-slate-800/50 border border-slate-700/60 p-5 flex flex-col">
                <h2 class="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-4 border-b border-slate-700/50 pb-2">
                    Expense Breakdown
                </h2>
                
                <div class="flex-1 flex flex-col items-center justify-center min-h-[220px] bg-slate-900/40 border border-dashed border-slate-700 rounded-lg p-4 text-center">
                    <d!v> 
            
                    
              
                    </div>
                    <p class="text-xs text-slate-400 max-w-[200px] leading-relaxed">
                  
                    </p>
                </div>
            </div>

        </div> </div> </div>
</div>

`;
}
