let storeTasks = JSON.parse(localStorage.getItem("tasks")) || [];
let currentFilter = "all";

//
export function renderTasks() {
  const container = document.querySelector(".stat-cards");
  if (!container) {
    window.alert("container is not found");
    return;
  }
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
            placeholder="e.g. Learn React " 
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

    <div class="filter-Btn flex gap-2 border-b border-slate-800 pb-3">
        <button data-filter ="all"
         class="bg-slate-800 hover:bg-emerald-700 text-slate-300 text-xs font-semibold px-4 py-2 rounded-md transition" >All</button>
        <button  data-filter ="pending"
        class="bg-slate-800 hover:bg-emerald-700 text-slate-300 text-xs font-semibold px-4 py-2 rounded-md transition">Pending</button>
        <button  data-filter ="completed"
        class="bg-slate-800 hover:bg-emerald-700 text-slate-300 text-xs font-semibold px-4 py-2 rounded-md transition">Completed</button>
    </div>

    <div id="js-task-list" class="space-y-3"> </div>
   
</div>`;

  const addtaskBtn = document.getElementById("add-task-btn");
  const taskPriority = document.getElementById("task-priority");
  const taskTitle = document.getElementById("task-title");
  const taskDate = document.getElementById("task-date");

  addtaskBtn.addEventListener("click", () => {
    if (taskTitle.value.trim() === "") {
      window.alert("the title can't be empty ");
      return;
    }
    let storenewTask = {
      id: Date.now(),
      title: taskTitle.value,
      completed: false,
      priority: taskPriority.value,
      Date: taskDate.value || new Date().toISOString().split("T")[0],
    };

    storeTasks.push(storenewTask);

    renderTaskList();
  });

  renderTaskList();
  filterEvent();
}
function renderTaskList() {
  const taskListRender = document.getElementById("js-task-list");
  let tasksShowUp = filterTasks();
  taskListRender.innerHTML = tasksShowUp
    .map((task) => {
      return `  <div class="bg-slate-800 border border-slate-700 rounded-xl p-4 flex items-center justify-between gap-4 group hover:border-slate-600 transition">
        
        <div class="flex items-center gap-4 min-w-0">
            <input 
            type="checkbox"
            data-id = "${task.id}" 
              ${task.completed ? "checked" : ""}

            class="w-4 h-4 rounded border-slate-700 bg-slate-900 text-emerald-600 focus:ring-emerald-500 focus:ring-offset-slate-900 cursor-pointer"
            />
            <div class="min-w-0">
            <h4 class="text-sm font-medium text-slate-200 truncate">${task.title}</h4>
            <span class="text-xs text-slate-400 block mt-0.5 font-mono">${task.Date}</span>
            </div>
        </div>
        <div class="flex items-center gap-3 shrink-0">
            <span class="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
            ${task.priority}
            </span>
            
            <button data-delete ="${task.id}"
             class="delete-Btn text-slate-500 hover:text-red-400 p-1 rounded transition" title="Delete Task">
          
            <img src="/icons/delete.svg" class="hover:brightness-100  cursor-pointer">
            </button>
        </div>

        </div>
        </div> `;
    })
    .join("");

  checkboxEvent();
  deleteEvent();
  savetoLocalStorage();
}

function checkboxEvent() {
  document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      const check = Number(checkbox.dataset.id);
      const tasks = storeTasks.find((task) => task.id === check);

      if (tasks) {
        tasks.completed = checkbox.checked;
      }
      savetoLocalStorage();
      renderTaskList();
    });
  });
}

function filterEvent() {
  document.querySelectorAll(".filter-Btn button").forEach((check) => {
    check.addEventListener("click", () => {
      currentFilter = check.dataset.filter;

      renderTaskList();
    });
  });
}

function filterTasks() {
  if (currentFilter === "pending") {
    return storeTasks.filter((task) => !task.completed);
  }

  if (currentFilter === "completed") {
    return storeTasks.filter((task) => task.completed);
  }

  return storeTasks;
}

function deleteEvent() {
  document.querySelectorAll(".delete-Btn").forEach((removeData) => {
    removeData.addEventListener("click", () => {
      const deleteItem = Number(removeData.dataset.delete);
      storeTasks = storeTasks.filter((remainItem) => {
        return remainItem.id !== deleteItem;
      });
      savetoLocalStorage();
      renderTaskList();
    });
  });
}
function savetoLocalStorage() {
  localStorage.setItem("tasks", JSON.stringify(storeTasks));
}
