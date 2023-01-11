/* eslint-disable no-unused-vars */
let bar = document.querySelectorAll('.drop-bars__bars-box__bar');

if (bar) {
    bar.forEach(el => {
        el.addEventListener('click', (e) => {
            if (e.target.parentNode.classList.contains('drop-bars__bars-box__bar')) {
                e.target.parentNode.classList.toggle('bar-active');
            }

            if (e.target.classList.contains('drop-bars__desc')) {
                e.target.parentNode.parentNode.classList.remove('bar-active');
            }
        });
    });
}
