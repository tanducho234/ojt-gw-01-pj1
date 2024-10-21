// Function to load component HTML into specified element

function loadComponent(componentId, filePath) {
  fetch(filePath)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(componentId).innerHTML = data;
    })
    .catch((error) => console.error("Error loading component:", error));
}

// Load all components
loadComponent("page1", "components/page1.html"); // Header
loadComponent("page2", "components/page2.html"); // About
loadComponent("page3", "components/page3.html"); // Services
loadComponent("page4", "components/page4.html"); // Portfolio
loadComponent("page5", "components/page5.html"); // Contact
loadComponent("page6", "components/page6.html"); // Footer
// Side bar menu
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("menu-icon").addEventListener("click", toggleMenu);
});

function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("active");
}
