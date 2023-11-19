var typed = new Typed(".input", {
  strings: [
    "E-commerce Website",
    "Fashion Store",
    "Grocery Website",
    "Shopping Website",
  ],
  typeSpeed: 70,
  backSpeed: 60,
  loop: true,
});

const toggleMenu = document.querySelector("#menu-icon");
const menu = document.querySelector(".menu");

toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("bx-x");
  menu.classList.toggle("active");
});
