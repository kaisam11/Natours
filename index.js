const navToggle = document.querySelector(".navigation__button");
const navLinks = document.querySelectorAll(".navigation__link");

navToggle.addEventListener("click", () => {
    document.body.classList.toggle("navigation__check")
})

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        document.body.classList.remove("navigation__check")
    })
})

const preloader = document.querySelector('.preloader');

window.addEventListener('load', () => {
    preloader.classList.add('hide-preloader');
})