/* eslint-disable no-unused-vars */
import Swiper from 'swiper';

const swiperDesktopSingle = new Swiper('.swiper-desktop-single', {
    slidesPerView: 1,
    spaceBetween: 1,
    autoplay: true,
    disableOnInteraction: false,

    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
});

const swiperDesktopMultiple = new Swiper('.swiper-desktop-multiple', {
    slidesPerView: 5,
    spaceBetween: 1,
    autoplay: true,
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
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
