const menuIcon = document.querySelector(".menu-btn");
const closeIcon = document.querySelector(".close-btn");
const nav = document.querySelector("nav");
const body = document.querySelector("body");

menuIcon.addEventListener("click", () => {
  nav.classList.toggle("open");
});

closeIcon.addEventListener("click", () => {
  nav.classList.toggle("open");
});
