/* eslint-disable no-unused-vars */
let navbar = document.querySelector('.navbar');
let menuIcon = document.querySelector('.navbar__small-menu__icon');
let overlay = document.querySelector('.overlay');

// functions
function toggleNavbar () {
    navbar.classList.toggle('navbar-active');
    overlay.classList.toggle('overlay-active');
}

// toggle navbar
if (menuIcon && navbar && overlay) {
    menuIcon.addEventListener('click', toggleNavbar);
    overlay.addEventListener('click', toggleNavbar);
}

// top text slide
if (navbar) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 200) {
            navbar.classList.add('top-box-slide');
        } else {
            navbar.classList.remove('top-box-slide');
        }
    });
}
