/* eslint-disable no-unused-vars */
let bar = document.querySelectorAll('.rop-bars__bars-box__bar');
let icon = document.querySelectorAll('.drop-bars__bars-box__bar__tab__icon-2');

icon.forEach(el => {
    el.addEventListener('click', (e) => {
        e.target.parentNode.parentNode.classList.toggle('bar-active');
    });
});
