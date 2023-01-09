/* eslint-disable no-unused-vars */

import Swiper from 'swiper';

const swiperDesktop = new Swiper('.swiper-desktop', {
    slidesPerView: 5,
    spaceBetween: 0,
    centeredSlides: true,
});

const swiperMobile = new Swiper('.swiper-mobile', {
    slidesPerView: 1.6,
    loop: true,

    spaceBetween: 0,
    pagination: {
        el: '.swiper-pagination',
    },
});
