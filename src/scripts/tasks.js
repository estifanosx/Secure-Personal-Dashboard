


const container = document.querySelector(".stat-cards");
export function renderTasks() {
  container.innerHTML = ` <div class="max-w-3xl mx-auto space-y-6">
    
    <div class="border-b border-slate-800 pb-4">
        <h1 class="text-2xl font-bold tracking-tight">Task Vault</h1>
        <p class="text-xs text-slate-400">Manage and isolate your daily operations.</p>
    </div>

    <div class="bg-slate-800 p-5 rounded-xl border border-slate-700 space-y-4">
        <h2 class="text-sm font-semibold text-slate-300 uppercase tracking-wider">Create New Task</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="md:col-span-3 flex flex-col gap-1.5">
            <label for="task-title" class="text-xs text-slate-400 font-medium">Task Description</label>
            <input 
            id="task-title"
            type="text" 
            placeholder="e.g., Complete project proposal" 
            class="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-500 transition"
            />
        </div>

        <div class="flex flex-col gap-1.5">
            <label for="task-date" class="text-xs text-slate-400 font-medium">Due Date</label>
            <input 
            id="task-date"
            type="date" 
            class="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-500 transition"
            />
        </div>

        <div class="flex flex-col gap-1.5">
            <label for="task-priority" class="text-xs text-slate-400 font-medium">Priority Level</label>
            <select 
            id="task-priority"
            class="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-500 transition cursor-pointer"
            >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
            </select>
        </div>

        <div class="flex items-end">
            <button 
            id="add-task-btn"
            class="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm py-2 px-4 rounded-lg transition shadow-md shadow-emerald-950/20"
            >
            Save Record
            </button>
        </div>
        </div>
    </div>

    <div class="flex gap-2 border-b border-slate-800 pb-3">
        <button class="bg-emerald-600 hover:bg-emerald-700 text-xs font-semibold px-4 py-2 rounded-md transition shadow">All</button>
        <button class="bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold px-4 py-2 rounded-md transition">Pending</button>
        <button class="bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold px-4 py-2 rounded-md transition">Completed</button>
    </div>

    <div id="js-task-list" class="space-y-3">
        
        <div class="bg-slate-800 border border-slate-700 rounded-xl p-4 flex items-center justify-between gap-4 group hover:border-slate-600 transition">
        
        <div class="flex items-center gap-4 min-w-0">
            <input 
            type="checkbox" 
            class="w-4 h-4 rounded border-slate-700 bg-slate-900 text-emerald-600 focus:ring-emerald-500 focus:ring-offset-slate-900 cursor-pointer"
            />
            <div class="min-w-0">
            <h4 class="text-sm font-medium text-slate-200 truncate">Complete project proposal</h4>
            <span class="text-xs text-slate-400 block mt-0.5 font-mono">Due: Jun 15, 2026</span>
            </div>
        </div>

        <div class="flex items-center gap-3 shrink-0">
            <span class="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
            Medium
            </span>
            
            <button class="text-slate-500 hover:text-red-400 p-1 rounded transition" title="Delete Task">
            <span class="text-sm">🗑️s</span>
            </button>
        </div>

        </div>
        </div>
</div>`;
}
