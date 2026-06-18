document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggleBtn");
  const sidebar = document.querySelector(".sidebar-container");

  if (toggleBtn && sidebar) {
    toggleBtn.addEventListener("click", () => {
      if (sidebar.classList.contains("md:flex")) {
        sidebar.classList.remove("md:flex");
        sidebar.classList.add("hidden");
      } else {
        sidebar.classList.add("md:flex");
        sidebar.classList.remove("hidden");
      }
    });
  }
});
