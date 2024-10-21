function loadComponent(componentId, filePath, callback) {
  fetch(filePath)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(componentId).innerHTML = data;
      if (callback) callback(); // Gọi lại hàm sau khi thành phần được tải
    })
    .catch((error) => console.error("Error loading component:", error));
}

// Load all components
loadComponent("page1", "components/page1.html"); // Header
loadComponent("page2", "components/page2.html"); // About
loadComponent("page3", "components/page3.html"); // Services
loadComponent("page4", "components/page4.html", initCarousel); // Portfolio
loadComponent("page5", "components/page5.html"); // Contact
loadComponent("page6", "components/page6.html"); // Footer

function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  if (navLinks) {
    navLinks.classList.toggle("active");
  } else {
    console.error("Element with class 'nav-links' not found.");
  }
}
function initCarousel() {
  const carousel = document.querySelector(".carousel-inner");
  const items = carousel.querySelectorAll(".carousel-item");
  let currentIndex = 0;

  function showNextSlide() {
    items[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % items.length;
    items[currentIndex].classList.add("active");
  }

  // Create next button
  const nextBtn = document.createElement("button");
  nextBtn.textContent = ">";
  nextBtn.classList.add("carousel-control", "next");
  nextBtn.addEventListener("click", showNextSlide);

  // Append button to the carousel container
  const carouselContainer = carousel.closest(".carousel-container");
  carouselContainer.appendChild(nextBtn);

  // Auto-slide every 5 seconds
  setInterval(showNextSlide, 5000);
}
