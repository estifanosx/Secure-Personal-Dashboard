
let passwordStore = []
export function renderPasswordVault() {
  const container = document.querySelector(".stat-cards");
  container.innerHTML = `
  
 <div class="p-6 max-w-3xl mx-auto bg-slate-900 text-white space-y-6">
    
    <div>
      <h1 class="text-2xl font-bold">Password Dashboard</h1>
      <p class="text-xs text-slate-400 font-mono">Save and Secure Your passwords</p>
    </div>
    
    <div class="bg-slate-800 p-4 rounded-lg space-y-3 border border-slate-700">
      <div>
        <label class="block text-xs font-mono text-slate-400 mb-1">Description</label>
        <input type="text" id="pass-desc" class="w-full bg-slate-950 p-2 rounded border border-slate-700 text-sm focus:outline-none focus:border-emerald-500" placeholder="e.g.,instagram username">
      </div>
      
      <div>
        <label class="block text-xs font-mono text-slate-400 mb-1">Password</label>
        <input type="password" id="password-input" class="w-full bg-slate-950 p-2 rounded border border-slate-700 text-sm focus:outline-none focus:border-emerald-500" placeholder="Enter password">
      </div>
      
      <button id="save-btn" class="w-full bg-emerald-600 hover:bg-emerald-500 py-2 rounded text-sm font-bold font-mono transition cursor-pointer">
        Save Passwords
      </button>
    </div>

    <div class="bg-slate-800 p-4 rounded-lg border border-slate-700">
      <h2 class="text-xs font-mono text-slate-400 mb-3 uppercase tracking-wider">Password Manager</h2>
      
      <table class="w-full text-left text-sm border-collapse">
        <thead>
          <tr class="border-b border-slate-700 text-slate-400 text-xs font-mono">
            <th class="pb-2 font-semibold">Description</th>
            <th class="pb-2 font-semibold"> Password</th>
          </tr>
        </thead>
        <tbody id="table-body" class="divide-y divide-slate-700/40">
          
        </tbody>
      </table>
    </div>

  </div>
  `;
 const savedata = document.getElementById("table-body");
  const Description = document.getElementById("pass-desc");
  const passInput = document.getElementById("password-input");
  const saveBtn = document.getElementById("save-btn");

  if (!saveBtn) return;

  saveBtn.addEventListener("click", () => {


    const password = {
      description: Description.value, 
      pIn: passInput.value
    };

    passwordStore.push(password);
    console.log("Current Application State Array:", passwordStore);


    Description.value = "";
    passInput.value = "";

  
    renderPassword(savedata); 
  });
}

// FIXED: Receives target interface node container directly
function renderPassword(targetContainer) {
  if (!targetContainer) return;

 
  targetContainer.innerHTML = passwordStore.map((item) => {
    return `
      <tr class="border-b border-slate-800 hover:bg-slate-800/30">
        <td class="py-3 px-2 font-medium text-slate-200">${item.description}</td>
        <td class="py-3 px-2 font-mono text-emerald-400 font-bold">${item.pIn}</td>
      </tr>
    `;
  }).join("");
}