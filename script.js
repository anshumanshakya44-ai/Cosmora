let menuBtn = document.querySelector(".open-close");
let navLinks = document.querySelector(".nav-link");

menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("nav-open");
    menuBtn.classList.toggle("menu-opened");
});