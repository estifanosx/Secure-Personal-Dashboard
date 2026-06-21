let storeNotes = [];
export function renderNotesPage() {
  const notesContainer = document.querySelector(".stat-cards");
  if (!notesContainer) {
    return;
  }

  notesContainer.innerHTML = `<div class="border-b border-slate-800 pb-4">
        <h1 class="text-2xl font-bold tracking-tight">Notes Vault</h1>
        <p class="text-xs text-slate-400">Manage Your Notes</p>
    </div>

    <div class="bg-slate-800 p-5 rounded-xl border border-slate-700 space-y-4">
        <h2 class="text-sm font-semibold text-slate-300 uppercase tracking-wider">Create New Note</h2>
      
        <div class="flex flex-col gap-1.5">
            <label for="notes-title" class="text-xs text-slate-400 font-medium">Note Title</label>
            <input id="notes-title" type="text" placeholder="e.g. JavaScript DOM Manipulation" class="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-500 transition">
        </div>

        <div class="flex flex-col gap-1.5">
            <label for="note-content" class="text-xs text-slate-400 font-medium">Notes</label>
            <textarea id="note-content" rows="10" placeholder="Write your notes here..." class="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-500 transition resize-none"></textarea>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="flex flex-col gap-1.5">
                <label for="note-date" class="text-xs text-slate-400 font-medium">Created Date</label>
                <input id="note-date" type="date" class="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-500 transition">
            </div>

            <div class="flex items-end">
                <button id="save-Btn" type="button" class="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 rounded-lg transition cursor-pointer">Save</button>
            </div>

            <div class="flex items-end">
                <button id="cancel-Btn" type="button" class="w-full bg-slate-700 hover:bg-slate-600 text-red-400 font-semibold py-2 rounded-lg transition cursor-pointer">Cancel</button>
            </div>
        </div>
    </div>

    <div class="js-note-container space-y-4 mt-6"></div>
  

`;

  const saveNote = document.getElementById("save-Btn");
  const notesTitle = document.getElementById("notes-title");
  const notesContent = document.getElementById("note-content");
  const noteDate = document.getElementById("note-date");
  const cancelBtn = document.getElementById("cancel-Btn");

  saveNote.addEventListener("click", () => {
    if (notesTitle.value.trim() === "") {
      window.alert("title is required");
      return;
    }
    const newNotes = {
      id: Date.now(),
      title: notesTitle.value,
      content: notesContent.value,
      Date: noteDate.value || new Date().toISOString().split("T")[0],
    };
    storeNotes.push(newNotes);

    renderNotes();
  });

  renderNotes();
}
function renderNotes() {
  const notesContainer = document.querySelector(".js-note-container");

  notesContainer.innerHTML = storeNotes.map((notes) => {
    return ` <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">

       
        <div class="flex-1 ">

            <span class="text-xs text-slate-400 font-mono">
                ${notes.Date}
            </span>

       
            <h4 class="text-sm font-semibold text-white mt-1 truncate">
              ${notes.title}
            </h4>

          
            <p class="text-sm text-slate-300 mt-2 ">
         ${notes.content}
            </p>

        </div>


        <div class="flex items-center gap-2 shrink-0">

          
            <button data-edit=${notes.id}
             
                class="edit-Btn p-2 rounded hover:bg-slate-700 transition"
                title="Edit Note"
            >
                <img
                    src="/icons/edit.svg"
                    class="w-5 h-5"
                >
            </button>

         
            <button  data-delete =${notes.id}
             
                class="delete-Btn p-2 rounded hover:bg-slate-700 transition"
                title="Delete Note"
            >
                <img
                    src="/icons/delete.svg"
                    class="w-5 h-5"
                >
            </button>

        </div>

`;
  });

  deleteItemEvent();
}
function deleteItemEvent() {
  document.querySelectorAll(".delete-Btn").forEach((deleteItem) => {
    deleteItem.addEventListener("click", () => {
      const removeData = Number(deleteItem.dataset.delete);

      storeNotes = storeNotes.filter(
        (remainItem) => remainItem.id !== removeData,
      );
      renderNotes();
    });
  });
}
