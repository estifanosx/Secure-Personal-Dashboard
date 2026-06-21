export function renderNotes() {
  const notesContainer = document.querySelector(".stat-cards");
  if (!notesContainer) {
    return;
  }

  notesContainer.innerHTML = `<div class="max-w-3xl mx-auto space-y-6">

  
    <div class="border-b border-slate-800 pb-4">
        <h1 class="text-2xl font-bold tracking-tight">
            Notes Vault
        </h1>

        <p class="text-xs text-slate-400">
            Manage Your Notes
        </p>
    </div>


    <div class="bg-slate-800 p-5 rounded-xl border border-slate-700 space-y-4">

        <h2 class="text-sm font-semibold text-slate-300 ">
            Create New Note
        </h2>

        <!-- Title -->
        <div class="flex flex-col gap-1.5">
            <label
                for="notes-title"
                class="text-xs text-slate-400 font-medium"
            >
                Note Title
            </label>

            <input
                id="notes-title"
                type="text"
                placeholder="e.g. JavaScript DOM Manipulation"
                class="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-500 transition"
            >
        </div>

       
        <div class="flex flex-col gap-1.5">
            <label
                for="note-content"
                class="text-xs text-slate-400 font-medium"
            >
                Notes
            </label>

            <textarea
                id="note-content"
                rows="10"
                placeholder="Write your notes here..."
                class="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-500 transition resize-none"
            ></textarea>
        </div>

      
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">

            <!-- Date -->
            <div class="flex flex-col gap-1.5">
                <label
                    for="note-date"
                    class="text-xs text-slate-400 font-medium"
                >
                    Due Date
                </label>

                <input
                    id="note-date"
                    type="date"
                    class="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-500 transition"
                >
            </div>

           
            <div class="flex items-end">
                <button
                    class="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 rounded-lg transition"
                >
                    Save
                </button>
            </div>

            
            <div class="flex items-end">
                <button
                    class="w-full bg-slate-700 hover:bg-slate-600 text-red-400 font-semibold py-2 rounded-lg transition"
                >
                    Cancel
                </button>
            </div>

        </div>

    </div>
    <div class="js-note-container  bg-slate-800 border border-slate-700 rounded-xl p-4 hover:border-slate-600 transition  ">

   

    <div class="flex justify-between items-start gap-4">

       
        <div class="flex-1 ">

            <span class="text-xs text-slate-400 font-mono">
                2026-06-20
            </span>

       
            <h4 class="text-sm font-semibold text-white mt-1 truncate">
                JavaScript DOM Notes
            </h4>

          
            <p class="text-sm text-slate-300 mt-2 ">
                This is notes for event delegation, rendering,
                and localStorage...
            </p>

        </div>

        <!-- Right Side -->
        <div class="flex items-center gap-2 shrink-0">

          
            <button
             
                class="edit-Btn p-2 rounded hover:bg-slate-700 transition"
                title="Edit Note"
            >
                <img
                    src="/icons/edit.svg"
                    class="w-5 h-5"
                >
            </button>

            <!-- Delete -->
            <button
             
                class="delete-Btn p-2 rounded hover:bg-slate-700 transition"
                title="Delete Note"
            >
                <img
                    src="/icons/delete.svg"
                    class="w-5 h-5"
                >
            </button>

        </div>

    </div>


</div>`;
}
