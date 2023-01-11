/* eslint-disable no-unused-vars */
let bar = document.querySelectorAll('.drop-bars__bars-box__bar');

if (bar) {
    bar.forEach(el => {
        el.addEventListener('click', (e) => {
            if (e.target.parentNode.classList.contains('drop-bars__bars-box__bar')) {
                e.target.parentNode.classList.toggle('bar-active');
            }
        });
    });
}
