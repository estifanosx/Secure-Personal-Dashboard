// import { Container } from "postcss";
import { renderTasks } from "./tasks.js";
import { renderNotesPage } from "./notes.js";
import { renderexpensesPage } from "./expensess.js";
import { renderWeatherPage } from "./weather.js";
import { renderPasswordVault } from "./passwordVault.js";
import { renderDashboard } from "./dashboard.js";

// listineing the toggle bar
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
// //

document.querySelectorAll("button").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    let loadPage = btn.dataset.page;
    if (loadPage === "Dashboard") {
      renderDashboard();
    } else if (loadPage == "tasks") {
      renderTasks();
    } else if (loadPage === "notes") {
      renderNotesPage();
    } else if (loadPage === "expenses") {
      renderexpensesPage();
    } else if (loadPage === "weather") {
      renderWeatherPage();
    } else if (loadPage === "password vault") {
      renderPasswordVault();
    }
  });
});
