/* eslint-disable no-unused-vars */
import Swiper from 'swiper';

const swiperDesktop = new Swiper('.swiper-desktop', {
    slidesPerView: 5,
    spaceBetween: 0,
    centeredSlides: true,
});

const swiperMobileSingle = new Swiper('.swiper-mobile-single', {
    loop: true,
    slidesPerView:1,
    spaceBetween:1,

    pagination: {
        el: '.swiper-pagination',
    },

});

const swiperMobileMultiple = new Swiper('.swiper-mobile-multiple', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        450: {
            slidesPerView: 1.5,
        },
        300: {
            slidesPerView: 1.3,
        },
    }

});
