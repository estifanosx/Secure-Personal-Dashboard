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

            <div class="flex items-end  ">
                <button type="button" class="cancel-Btn  w-full bg-slate-700 hover:bg-slate-600 text-red-400 font-semibold py-2 rounded-lg transition cursor-pointer">Cancel</button>
            </div>
        </div>
    </div>

<div class="js-note-container grid grid-cols-1 md:grid-cols-2 gap-4 mt-6"></div>`;

  const saveNote = document.getElementById("save-Btn");
  const notesTitle = document.getElementById("notes-title");
  const notesContent = document.getElementById("note-content");
  const noteDate = document.getElementById("note-date");

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
}
function renderNotes() {
  const notesContainer = document.querySelector(".js-note-container");

  notesContainer.innerHTML = storeNotes
    .map((notes) => {
      return ` <div class="bg-slate-800/60 border border-slate-700/60 rounded-xl p-5 flex flex-col justify-between gap-5 hover:border-slate-600 transition-all duration-200 shadow-xl backdrop-blur-sm min-h-[200px]">
          
          <div class="space-y-2 min-w-0">
              <div class="flex items-center justify-between gap-2">
                  <span class="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      ${notes.Date}
                  </span>
              </div>
              
              <h4 class="text-base font-semibold text-white tracking-tight truncate">
                  ${notes.title}
              </h4>
              
              <p class="text-sm text-slate-300 whitespace-pre-wrap break-words leading-relaxed line-clamp-6">
                  ${notes.content}
              </p>
          </div>

          <div class="flex items-center justify-end gap-1.5 pt-3 border-t border-slate-700/50 shrink-0">
              <button 
                  data-edit="${notes.id}"
                  class="edit-Btn p-2 rounded-lg bg-slate-900/40 border border-slate-700/40 hover:border-slate-600 text-slate-400 hover:text-emerald-400 hover:bg-slate-700/30 transition cursor-pointer"
                  title="Edit Note"
              >
                  <img src="/icons/edit.svg" class="w-4 h-4" alt="Edit">
              </button>

              <button 
                  data-delete="${notes.id}"
                  class="delete-Btn p-2 rounded-lg bg-slate-900/40 border border-slate-700/40 hover:border-slate-600 text-slate-400 hover:text-red-400 hover:bg-slate-700/30 transition cursor-pointer"
                  title="Delete Note"
              >
                  <img src="/icons/delete.svg" class="w-4 h-4" alt="Delete">
              </button>
          </div>

        </div>`;
    })
    .join("");

  deleteItemEvent();
  //   editItemEvent();
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

