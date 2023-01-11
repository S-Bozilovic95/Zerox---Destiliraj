/* eslint-disable no-unused-vars */
let icon = document.querySelectorAll('.drop-bars__bars-box__bar__tab__icon');
let title = document.querySelectorAll('.drop-bars__bars-box__bar__tab__desc');

// /functions
function toggleBar (value) {
    value.forEach(el => {
        el.addEventListener('click', (e) => {
            e.target.parentNode.parentNode.classList.toggle('bar-active');
        });
    });
}

// toggle bars
if (icon && title) {
    toggleBar(icon);
    toggleBar(title);
}
