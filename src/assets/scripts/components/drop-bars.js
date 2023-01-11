/* eslint-disable no-unused-vars */
let tab = document.querySelectorAll('.drop-bars__bars-box__bar__tab');

// /functions
function toggleBar (value) {
    value.forEach(el => {
        el.addEventListener('click', (e) => {
            e.target.parentNode.classList.toggle('bar-active');
        });
    });
}

// toggle bars
if (tab) {
    toggleBar(tab);
}
