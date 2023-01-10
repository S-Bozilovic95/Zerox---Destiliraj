/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets sync recursive \\.(svg|png|jpe?g)$":
/*!********************************************!*\
  !*** ./src/assets sync \.(svg|png|jpe?g)$ ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./images/svg/newsletter.svg": "./src/assets/images/svg/newsletter.svg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets sync recursive \\.(svg|png|jpe?g)$";

/***/ }),

/***/ "./src/assets/images/svg/newsletter.svg":
/*!**********************************************!*\
  !*** ./src/assets/images/svg/newsletter.svg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "../images/svg/newsletter.svg";

/***/ }),

/***/ "./src/assets/scripts/components sync recursive ^\\.\\/.*\\.js$":
/*!*********************************************************!*\
  !*** ./src/assets/scripts/components sync ^\.\/.*\.js$ ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./drop-bars.js": "./src/assets/scripts/components/drop-bars.js",
	"./helpers.js": "./src/assets/scripts/components/helpers.js",
	"./lazyimageloader.js": "./src/assets/scripts/components/lazyimageloader.js",
	"./navbar.js": "./src/assets/scripts/components/navbar.js",
	"./resource.js": "./src/assets/scripts/components/resource.js",
	"./slider.js": "./src/assets/scripts/components/slider.js",
	"./swiper.js": "./src/assets/scripts/components/swiper.js",
	"./utils.js": "./src/assets/scripts/components/utils.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets/scripts/components sync recursive ^\\.\\/.*\\.js$";

/***/ }),

/***/ "./src/assets/scripts/components/drop-bars.js":
/*!****************************************************!*\
  !*** ./src/assets/scripts/components/drop-bars.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* eslint-disable no-unused-vars */
var bar = document.querySelectorAll('.rop-bars__bars-box__bar');
var icon = document.querySelectorAll('.drop-bars__bars-box__bar__tab__icon-2');
icon.forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.target.parentNode.parentNode.classList.toggle('bar-active');
  });
});

/***/ }),

/***/ "./src/assets/scripts/components/helpers.js":
/*!**************************************************!*\
  !*** ./src/assets/scripts/components/helpers.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


var doImagePreload = function doImagePreload(url) {
  return new Promise(function (resolve, reject) {
    var image = new Image();
    image.srcset = url;
    image.onload = resolve;
    image.onerror = reject;
  });
};

var clamp = function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
};

var assert = function assert(predicate, message) {
  if (predicate) {
    return;
  }

  throw new Error(message);
};

/* harmony default export */ __webpack_exports__["default"] = ({
  assert: assert,
  clamp: clamp,
  doImagePreload: doImagePreload
});

/***/ }),

/***/ "./src/assets/scripts/components/lazyimageloader.js":
/*!**********************************************************!*\
  !*** ./src/assets/scripts/components/lazyimageloader.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./src/assets/scripts/components/helpers.js");


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var LazyImageLoader = /*#__PURE__*/function () {
  function LazyImageLoader() {
    var _this = this;

    _classCallCheck(this, LazyImageLoader);

    var images = document.querySelectorAll(".".concat(LazyImageLoader.PENDING_CLASS));
    var config = {
      root: null,
      rootMargin: '60px 0px',
      threshold: LazyImageLoader.THRESHOLD
    };

    if (!LazyImageLoader.OBSERVER_SUPPORTED) {
      this.llLoadImagesDefault(images);
      return;
    }

    this.llCount = images.length;
    this.llIntersected = this.llIntersected.bind(this);
    this.llObserver = new IntersectionObserver(this.llIntersected, config);
    images.forEach(function (image) {
      if (image.classList.contains(LazyImageLoader.HANDLED_CLASS)) {
        return;
      }

      _this.llObserver.observe(image);
    });
  }

  _createClass(LazyImageLoader, [{
    key: "llDisconnect",
    value: function llDisconnect() {
      if (!this.llObserver) {
        return;
      }

      this.llObserver.disconnect();
    }
  }, {
    key: "llIntersected",
    value: function llIntersected(entries) {
      var _this2 = this;

      entries.forEach(function (entry) {
        if (entry.intersectionRatio < 0) {
          return;
        }

        if (entry.isIntersecting) {
          _this2.llCount--;

          _this2.llPreloadImage(entry.target);

          _this2.llObserver.unobserve(entry.target);
        }
      });

      if (this.llCount > 0) {
        return;
      }

      this.llObserver.disconnect();
    }
  }, {
    key: "llPreloadImage",
    value: function llPreloadImage(image) {
      var _this3 = this;

      var src = image.dataset.srcset;

      if (!src) {
        return;
      }

      return _helpers__WEBPACK_IMPORTED_MODULE_0__["default"].doImagePreload(src).then(function () {
        return _this3.llTagImage(image, src);
      });
    }
  }, {
    key: "llLoadImagesDefault",
    value: function llLoadImagesDefault(images) {
      var _this4 = this;

      Array.from(images).forEach(function (image) {
        return _this4.llPreloadImage(image);
      });
    }
  }, {
    key: "llTagImage",
    value: function llTagImage(img, src) {
      var el = img.querySelector('.lazy-image__content');

      if (!el) {
        return;
      }

      if (!img) {
        return;
      }

      var newImg = new Image();
      newImg.classList.add(LazyImageLoader.LOADED_CLASS);
      newImg.srcset = src;
      newImg.classList.add(LazyImageLoader.REVEAL_CLASS);
      newImg.alt = el.alt;
      img.appendChild(newImg);
      img.dataset.srcset = '';
      img.classList.remove(LazyImageLoader.PENDING_CLASS);
      img.classList.add(LazyImageLoader.HANDLED_CLASS);
    }
  }], [{
    key: "OBSERVER_SUPPORTED",
    get: function get() {
      return 'IntersectionObserver' in window;
    }
  }, {
    key: "PENDING_CLASS",
    get: function get() {
      return 'lazy-image--pending';
    }
  }, {
    key: "HANDLED_CLASS",
    get: function get() {
      return 'lazy-image--loaded';
    }
  }, {
    key: "LOADED_CLASS",
    get: function get() {
      return 'lazy-image__actual';
    }
  }, {
    key: "REVEAL_CLASS",
    get: function get() {
      return 'fade-in';
    }
  }, {
    key: "THRESHOLD",
    get: function get() {
      return 0.1;
    }
  }, {
    key: "init",
    value: function init() {
      if (this.llInstance) {
        this.llInstance.llDisconnect();
      }

      this.llCount = 0;
      this.llInstance = new LazyImageLoader();
    }
  }]);

  return LazyImageLoader;
}();

/* harmony default export */ __webpack_exports__["default"] = (LazyImageLoader);

/***/ }),

/***/ "./src/assets/scripts/components/navbar.js":
/*!*************************************************!*\
  !*** ./src/assets/scripts/components/navbar.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* eslint-disable no-unused-vars */
var navbar = document.querySelector('.navbar');
var menuIcon = document.querySelector('.navbar__small-menu__icon');
var overlay = document.querySelector('.overlay'); // functions

function toggleNavbar() {
  navbar.classList.toggle('navbar-active');
  overlay.classList.toggle('overlay-active');
} // toggle navbar


if (menuIcon && navbar && overlay) {
  menuIcon.addEventListener('click', toggleNavbar);
  overlay.addEventListener('click', toggleNavbar);
} // top text slide


if (navbar) {
  window.addEventListener('scroll', function () {
    if (window.pageYOffset > 200) {
      navbar.classList.add('top-box-slide');
    } else {
      navbar.classList.remove('top-box-slide');
    }
  });
}

/***/ }),

/***/ "./src/assets/scripts/components/resource.js":
/*!***************************************************!*\
  !*** ./src/assets/scripts/components/resource.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "gsap");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_0__);




if (gsap__WEBPACK_IMPORTED_MODULE_0___default.a) {
  $(function () {
    var resource = $('.resource'); // let swap = false;

    if (resource.length > 0) {// const changeClasses = () => {
      //     let red = $('.resource__block-red')[0];
      //     let black = $('.resource__block-black')[0];
      //     if (!swap) {
      //         red.classList.add('swap');
      //         black.classList.add('swap');
      //     } else {
      //         red.classList.remove('swap');
      //         black.classList.remove('swap');
      //     }
      //     swap = !swap;
      // }
      // ScrollTrigger.create({
      //     target: '.resource__block',
      //     start: 'top top',
      //     markers: true,
      //     // end: document.innerHeight,
      //     onToggle: () => changeClasses(),
      // });
    }
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/assets/scripts/components/slider.js":
/*!*************************************************!*\
  !*** ./src/assets/scripts/components/slider.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "swiper");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(swiper__WEBPACK_IMPORTED_MODULE_0__);


 // import gsap from 'gsap';
// import { debounce,mediaQuery } from './utils';

if (swiper__WEBPACK_IMPORTED_MODULE_0___default.a) {
  $(function () {
    // ---- ALL SLIDERS -----
    var sliderMomentumRatio = 0.455;

    var IsInitialized = function IsInitialized(ele) {
      return ele.hasClass('swiper-container-initialized');
    };

    var swiperInstances = {
      category: {
        instance: null,
        init: false
      },
      big: {
        instance: null,
        init: false
      }
    }; // const swiperState = (slider, swiperInstance, setup) => {
    //     if (mediaQuery('(max-width: 991px)')) {
    //         if (!swiperInstance.init) {
    //             swiperInstance.init = true;
    //             setup();
    //         }
    //     }
    //     if (mediaQuery('(min-width: 992px)')) {
    //         if (swiperInstance.init) {
    //             swiperInstance.instance.destroy();
    //             swiperInstance.init = false;
    //         }
    //     }
    // };
    // --------  BIG SLIDER --------

    var bigSlider = $('.big-slider__slider');

    function setupBigSlider() {
      var currentNumber = $('.big-slider__current-active');
      swiperInstances.big.instance = new swiper__WEBPACK_IMPORTED_MODULE_0___default.a(bigSlider[0], {
        // eslint-disable-line
        slidesPerView: 'auto',
        spaceBetween: 50,
        freeMode: false,
        freeModeMomentumRatio: sliderMomentumRatio,
        centeredSlides: true,
        loop: true,
        on: {
          slideChange: function slideChange() {
            if (swiperInstances.big.instance) {
              console.log($('.big-slider__current-active').attr('data-length'));
              currentNumber.text(swiperInstances.big.instance.activeIndex % parseInt(currentNumber.attr('data-length')) + 1);
            }
          }
        },
        pagination: {
          el: '.big-slider__progress',
          type: 'progressbar',
          progressbarFillClass: 'big-slider__bar',
          modifierClass: 'big-slider__bar--',
          renderProgressbar: function renderProgressbar(progressbarFillClass) {
            return '<span class="' + progressbarFillClass + '"></span>';
          }
        }
      });
    }

    if (bigSlider.length > 0) {
      if (!IsInitialized(bigSlider)) {
        setupBigSlider();
      }
    } // -------- CATEGORY SLIDER --------


    var categorySlider = $('.category-slider__slider');

    function setupCategorySlider() {
      swiperInstances.category.instance = new swiper__WEBPACK_IMPORTED_MODULE_0___default.a(categorySlider[0], {
        // eslint-disable-line
        slidesPerView: 'auto',
        freeMode: true,
        freeModeMomentumRatio: sliderMomentumRatio,
        pagination: {
          el: '.category-slider__progress',
          type: 'progressbar',
          progressbarFillClass: 'category-slider__bar',
          modifierClass: 'category-slider__bar--',
          renderProgressbar: function renderProgressbar(progressbarFillClass) {
            return '<span class="' + progressbarFillClass + '"></span>';
          }
        }
      });
    }

    if (categorySlider.length > 0) {
      if (!IsInitialized(categorySlider)) {
        setupCategorySlider();
      }
    }
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/assets/scripts/components/swiper.js":
/*!*************************************************!*\
  !*** ./src/assets/scripts/components/swiper.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "swiper");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(swiper__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable no-unused-vars */

var swiperDesktopSingle = new swiper__WEBPACK_IMPORTED_MODULE_0___default.a('.swiper-desktop-single', {
  slidesPerView: 1,
  spaceBetween: 1,
  autoplay: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
});
var swiperDesktopMultiple = new swiper__WEBPACK_IMPORTED_MODULE_0___default.a('.swiper-desktop-multiple', {
  slidesPerView: 5,
  spaceBetween: 1,
  autoplay: true,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
});
var swiperMobileSingle = new swiper__WEBPACK_IMPORTED_MODULE_0___default.a('.swiper-mobile-single', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 1,
  pagination: {
    el: '.swiper-pagination'
  }
});
var swiperMobileMultiple = new swiper__WEBPACK_IMPORTED_MODULE_0___default.a('.swiper-mobile-multiple', {
  loop: true,
  pagination: {
    el: '.swiper-pagination'
  },
  breakpoints: {
    768: {
      slidesPerView: 2
    },
    450: {
      slidesPerView: 1.5
    },
    300: {
      slidesPerView: 1.3
    }
  }
});

/***/ }),

/***/ "./src/assets/scripts/components/utils.js":
/*!************************************************!*\
  !*** ./src/assets/scripts/components/utils.js ***!
  \************************************************/
/*! exports provided: debounce, throttle, lerp, clamp, irandom, seconds, mediaQuery, stbScrollTo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return throttle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lerp", function() { return lerp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clamp", function() { return clamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "irandom", function() { return irandom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "seconds", function() { return seconds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mediaQuery", function() { return mediaQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stbScrollTo", function() { return stbScrollTo; });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "gsap");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_0__);



var debounce = function debounce(func, wait, immediate) {
  var timeout;

  if (typeof func !== 'undefined') {
    return function () {
      var context = this;
      var args = arguments;

      var later = function later() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };

      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  } else {
    console.warn('A function is undefined! Debounce might not work as intended: ', func);
  }
};
var throttle = function throttle(func, limit) {
  var lastFunc;
  var lastRan;

  if (typeof func !== 'undefined') {
    return function () {
      var context = this;
      var args = arguments;

      if (!lastRan) {
        func.apply(context, args);
        lastRan = Date.now();
      } else {
        clearTimeout(lastFunc);
        lastFunc = setTimeout(function () {
          if (Date.now() - lastRan >= limit) {
            func.apply(context, args);
            lastRan = Date.now();
          }
        }, limit - (Date.now() - lastRan));
      }
    };
  } else {
    console.warn('A function is undefined! Throttle might not work as intended: ', func);
  }
};
var lerp = function lerp(start, end, amt) {
  return (1 - amt) * start + amt * end;
};
var clamp = function clamp(min, val, max) {
  return Math.min(Math.max(val, min), max);
};
var irandom = function irandom(max) {
  return Math.floor(Math.random() * Math.floor(max));
};
var seconds = function seconds(ms) {
  return ms * 1000;
};
var mediaQuery = function mediaQuery(query) {
  return window.matchMedia(query).matches;
};
var stbScrollTo = function stbScrollTo(ele) {
  var speed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;

  if (gsap__WEBPACK_IMPORTED_MODULE_0___default.a) {
    gsap__WEBPACK_IMPORTED_MODULE_0___default.a.registerPlugin(ScrollToPlugin); // eslint-disable-line

    gsap__WEBPACK_IMPORTED_MODULE_0___default.a.to(window, {
      duration: speed / 1000,
      ease: 'Power3.easeOut',
      scrollTo: {
        y: $(ele).offset().top
      }
    });
  } else {
    $([document.documentElement, document.body]).animate({
      scrollTop: $(ele).offset().top
    }, speed);
  }
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/assets/styles/main.scss":
/*!*************************************!*\
  !*** ./src/assets/styles/main.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // ---------- Image / css assets ------------

__webpack_require__("./src/assets sync recursive \\.(svg|png|jpe?g)$");

__webpack_require__(/*! ./assets/styles/main.scss */ "./src/assets/styles/main.scss");

var includeComponent = function includeComponent(script) {
  return __webpack_require__("./src/assets/scripts/components sync recursive ^\\.\\/.*\\.js$")("./".concat(script, ".js"));
}; // -------------- Lazy load -----------------

/*
 * import LazyImageLoader from './assets/scripts/components/lazyimageloader.js';
 * LazyImageLoader.init();
 */
// ----------- Custom scripts ---------------


includeComponent('slider');
includeComponent('navbar');
includeComponent('swiper');
includeComponent('drop-bars');

/***/ }),

/***/ "gsap":
/*!***********************!*\
  !*** external "gsap" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = gsap;

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),

/***/ "swiper":
/*!*************************!*\
  !*** external "Swiper" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Swiper;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cyBzeW5jIFxcLihzdmd8cG5nfGpwZSIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9zdmcvbmV3c2xldHRlci5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMgc3luYyBeXFwuXFwvLipcXC5qcyQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvZHJvcC1iYXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc2NyaXB0cy9jb21wb25lbnRzL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvbGF6eWltYWdlbG9hZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc2NyaXB0cy9jb21wb25lbnRzL25hdmJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvY29tcG9uZW50cy9yZXNvdXJjZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvY29tcG9uZW50cy9zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvc3dpcGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc2NyaXB0cy9jb21wb25lbnRzL3V0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc3R5bGVzL21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZ3NhcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpRdWVyeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIlN3aXBlclwiIl0sIm5hbWVzIjpbImJhciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImljb24iLCJmb3JFYWNoIiwiZWwiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInRhcmdldCIsInBhcmVudE5vZGUiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJkb0ltYWdlUHJlbG9hZCIsInVybCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiaW1hZ2UiLCJJbWFnZSIsInNyY3NldCIsIm9ubG9hZCIsIm9uZXJyb3IiLCJjbGFtcCIsInZhbHVlIiwibWluIiwibWF4IiwiTWF0aCIsImFzc2VydCIsInByZWRpY2F0ZSIsIm1lc3NhZ2UiLCJFcnJvciIsIkxhenlJbWFnZUxvYWRlciIsImltYWdlcyIsIlBFTkRJTkdfQ0xBU1MiLCJjb25maWciLCJyb290Iiwicm9vdE1hcmdpbiIsInRocmVzaG9sZCIsIlRIUkVTSE9MRCIsIk9CU0VSVkVSX1NVUFBPUlRFRCIsImxsTG9hZEltYWdlc0RlZmF1bHQiLCJsbENvdW50IiwibGVuZ3RoIiwibGxJbnRlcnNlY3RlZCIsImJpbmQiLCJsbE9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJjb250YWlucyIsIkhBTkRMRURfQ0xBU1MiLCJvYnNlcnZlIiwiZGlzY29ubmVjdCIsImVudHJpZXMiLCJlbnRyeSIsImludGVyc2VjdGlvblJhdGlvIiwiaXNJbnRlcnNlY3RpbmciLCJsbFByZWxvYWRJbWFnZSIsInVub2JzZXJ2ZSIsInNyYyIsImRhdGFzZXQiLCJIZWxwZXJzIiwidGhlbiIsImxsVGFnSW1hZ2UiLCJBcnJheSIsImZyb20iLCJpbWciLCJxdWVyeVNlbGVjdG9yIiwibmV3SW1nIiwiYWRkIiwiTE9BREVEX0NMQVNTIiwiUkVWRUFMX0NMQVNTIiwiYWx0IiwiYXBwZW5kQ2hpbGQiLCJyZW1vdmUiLCJ3aW5kb3ciLCJsbEluc3RhbmNlIiwibGxEaXNjb25uZWN0IiwibmF2YmFyIiwibWVudUljb24iLCJvdmVybGF5IiwidG9nZ2xlTmF2YmFyIiwicGFnZVlPZmZzZXQiLCJnc2FwIiwiJCIsInJlc291cmNlIiwiU3dpcGVyIiwic2xpZGVyTW9tZW50dW1SYXRpbyIsIklzSW5pdGlhbGl6ZWQiLCJlbGUiLCJoYXNDbGFzcyIsInN3aXBlckluc3RhbmNlcyIsImNhdGVnb3J5IiwiaW5zdGFuY2UiLCJpbml0IiwiYmlnIiwiYmlnU2xpZGVyIiwic2V0dXBCaWdTbGlkZXIiLCJjdXJyZW50TnVtYmVyIiwic2xpZGVzUGVyVmlldyIsInNwYWNlQmV0d2VlbiIsImZyZWVNb2RlIiwiZnJlZU1vZGVNb21lbnR1bVJhdGlvIiwiY2VudGVyZWRTbGlkZXMiLCJsb29wIiwib24iLCJzbGlkZUNoYW5nZSIsImNvbnNvbGUiLCJsb2ciLCJhdHRyIiwidGV4dCIsImFjdGl2ZUluZGV4IiwicGFyc2VJbnQiLCJwYWdpbmF0aW9uIiwidHlwZSIsInByb2dyZXNzYmFyRmlsbENsYXNzIiwibW9kaWZpZXJDbGFzcyIsInJlbmRlclByb2dyZXNzYmFyIiwiY2F0ZWdvcnlTbGlkZXIiLCJzZXR1cENhdGVnb3J5U2xpZGVyIiwic3dpcGVyRGVza3RvcFNpbmdsZSIsImF1dG9wbGF5IiwiY2xpY2thYmxlIiwic3dpcGVyRGVza3RvcE11bHRpcGxlIiwic3dpcGVyTW9iaWxlU2luZ2xlIiwic3dpcGVyTW9iaWxlTXVsdGlwbGUiLCJicmVha3BvaW50cyIsImRlYm91bmNlIiwiZnVuYyIsIndhaXQiLCJpbW1lZGlhdGUiLCJ0aW1lb3V0IiwiY29udGV4dCIsImFyZ3MiLCJhcmd1bWVudHMiLCJsYXRlciIsImFwcGx5IiwiY2FsbE5vdyIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJ3YXJuIiwidGhyb3R0bGUiLCJsaW1pdCIsImxhc3RGdW5jIiwibGFzdFJhbiIsIkRhdGUiLCJub3ciLCJsZXJwIiwic3RhcnQiLCJlbmQiLCJhbXQiLCJ2YWwiLCJpcmFuZG9tIiwiZmxvb3IiLCJyYW5kb20iLCJzZWNvbmRzIiwibXMiLCJtZWRpYVF1ZXJ5IiwicXVlcnkiLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsInN0YlNjcm9sbFRvIiwic3BlZWQiLCJyZWdpc3RlclBsdWdpbiIsIlNjcm9sbFRvUGx1Z2luIiwidG8iLCJkdXJhdGlvbiIsImVhc2UiLCJzY3JvbGxUbyIsInkiLCJvZmZzZXQiLCJ0b3AiLCJkb2N1bWVudEVsZW1lbnQiLCJib2R5IiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsInJlcXVpcmUiLCJpbmNsdWRlQ29tcG9uZW50Iiwic2NyaXB0Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0U7Ozs7Ozs7Ozs7O0FDdEJBLGdEOzs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QiIsImZpbGUiOiJhc3NldHMvanMvbWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vaW1hZ2VzL3N2Zy9uZXdzbGV0dGVyLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvc3ZnL25ld3NsZXR0ZXIuc3ZnXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2Fzc2V0cyBzeW5jIHJlY3Vyc2l2ZSBcXFxcLihzdmd8cG5nfGpwZT9nKSRcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLi4vaW1hZ2VzL3N2Zy9uZXdzbGV0dGVyLnN2Z1wiOyIsInZhciBtYXAgPSB7XG5cdFwiLi9kcm9wLWJhcnMuanNcIjogXCIuL3NyYy9hc3NldHMvc2NyaXB0cy9jb21wb25lbnRzL2Ryb3AtYmFycy5qc1wiLFxuXHRcIi4vaGVscGVycy5qc1wiOiBcIi4vc3JjL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvaGVscGVycy5qc1wiLFxuXHRcIi4vbGF6eWltYWdlbG9hZGVyLmpzXCI6IFwiLi9zcmMvYXNzZXRzL3NjcmlwdHMvY29tcG9uZW50cy9sYXp5aW1hZ2Vsb2FkZXIuanNcIixcblx0XCIuL25hdmJhci5qc1wiOiBcIi4vc3JjL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvbmF2YmFyLmpzXCIsXG5cdFwiLi9yZXNvdXJjZS5qc1wiOiBcIi4vc3JjL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvcmVzb3VyY2UuanNcIixcblx0XCIuL3NsaWRlci5qc1wiOiBcIi4vc3JjL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvc2xpZGVyLmpzXCIsXG5cdFwiLi9zd2lwZXIuanNcIjogXCIuL3NyYy9hc3NldHMvc2NyaXB0cy9jb21wb25lbnRzL3N3aXBlci5qc1wiLFxuXHRcIi4vdXRpbHMuanNcIjogXCIuL3NyYy9hc3NldHMvc2NyaXB0cy9jb21wb25lbnRzL3V0aWxzLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMgc3luYyByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKlxcXFwuanMkXCI7IiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cclxubGV0IGJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yb3AtYmFyc19fYmFycy1ib3hfX2JhcicpO1xyXG5sZXQgaWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcm9wLWJhcnNfX2JhcnMtYm94X19iYXJfX3RhYl9faWNvbi0yJyk7XHJcblxyXG5pY29uLmZvckVhY2goZWwgPT4ge1xyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5jbGFzc0xpc3QudG9nZ2xlKCdiYXItYWN0aXZlJyk7XHJcbiAgICB9KTtcclxufSk7XHJcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZG9JbWFnZVByZWxvYWQgPSB1cmwgPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGltYWdlLnNyY3NldCA9IHVybDtcbiAgICAgICAgaW1hZ2Uub25sb2FkID0gcmVzb2x2ZTtcbiAgICAgICAgaW1hZ2Uub25lcnJvciA9IHJlamVjdDtcbiAgICB9KTtcbn07XG5cbmNvbnN0IGNsYW1wID0gKHZhbHVlLCBtaW4sIG1heCkgPT4gTWF0aC5tYXgobWluLCBNYXRoLm1pbihtYXgsIHZhbHVlKSk7XG5cbmNvbnN0IGFzc2VydCA9IChwcmVkaWNhdGUsIG1lc3NhZ2UpID0+IHtcbiAgICBpZiAocHJlZGljYXRlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgYXNzZXJ0LCBjbGFtcCwgZG9JbWFnZVByZWxvYWRcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBIZWxwZXJzIGZyb20gJy4vaGVscGVycyc7XG5cbmNsYXNzIExhenlJbWFnZUxvYWRlciB7XG4gICAgc3RhdGljIGdldCBPQlNFUlZFUl9TVVBQT1JURUQgKCkge1xuICAgICAgICByZXR1cm4gKCdJbnRlcnNlY3Rpb25PYnNlcnZlcicgaW4gd2luZG93KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IFBFTkRJTkdfQ0xBU1MgKCkge1xuICAgICAgICByZXR1cm4gJ2xhenktaW1hZ2UtLXBlbmRpbmcnO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgSEFORExFRF9DTEFTUyAoKSB7XG4gICAgICAgIHJldHVybiAnbGF6eS1pbWFnZS0tbG9hZGVkJztcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IExPQURFRF9DTEFTUyAoKSB7XG4gICAgICAgIHJldHVybiAnbGF6eS1pbWFnZV9fYWN0dWFsJztcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IFJFVkVBTF9DTEFTUyAoKSB7XG4gICAgICAgIHJldHVybiAnZmFkZS1pbic7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBUSFJFU0hPTEQgKCkge1xuICAgICAgICByZXR1cm4gMC4xO1xuICAgIH1cblxuICAgIHN0YXRpYyBpbml0ICgpIHtcbiAgICAgICAgaWYgKHRoaXMubGxJbnN0YW5jZSkge1xuICAgICAgICAgICAgdGhpcy5sbEluc3RhbmNlLmxsRGlzY29ubmVjdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5sbENvdW50ID0gMDtcbiAgICAgICAgdGhpcy5sbEluc3RhbmNlID0gbmV3IExhenlJbWFnZUxvYWRlcigpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgdmFyIGltYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke0xhenlJbWFnZUxvYWRlci5QRU5ESU5HX0NMQVNTfWApO1xuICAgICAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICAgICAgICByb290OiBudWxsLFxuICAgICAgICAgICAgcm9vdE1hcmdpbjogJzYwcHggMHB4JyxcbiAgICAgICAgICAgIHRocmVzaG9sZDogTGF6eUltYWdlTG9hZGVyLlRIUkVTSE9MRFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmICghTGF6eUltYWdlTG9hZGVyLk9CU0VSVkVSX1NVUFBPUlRFRCkge1xuICAgICAgICAgICAgdGhpcy5sbExvYWRJbWFnZXNEZWZhdWx0KGltYWdlcyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxsQ291bnQgPSBpbWFnZXMubGVuZ3RoO1xuICAgICAgICB0aGlzLmxsSW50ZXJzZWN0ZWQgPSB0aGlzLmxsSW50ZXJzZWN0ZWQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5sbE9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKHRoaXMubGxJbnRlcnNlY3RlZCwgY29uZmlnKTtcblxuICAgICAgICBpbWFnZXMuZm9yRWFjaChpbWFnZSA9PiB7XG4gICAgICAgICAgICBpZiAoaW1hZ2UuY2xhc3NMaXN0LmNvbnRhaW5zKExhenlJbWFnZUxvYWRlci5IQU5ETEVEX0NMQVNTKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5sbE9ic2VydmVyLm9ic2VydmUoaW1hZ2UpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBsbERpc2Nvbm5lY3QgKCkge1xuICAgICAgICBpZiAoIXRoaXMubGxPYnNlcnZlcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5sbE9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICB9XG5cbiAgICBsbEludGVyc2VjdGVkIChlbnRyaWVzKSB7XG4gICAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgICAgIGlmIChlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA8IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxsQ291bnQtLTtcbiAgICAgICAgICAgICAgICB0aGlzLmxsUHJlbG9hZEltYWdlKGVudHJ5LnRhcmdldCk7XG4gICAgICAgICAgICAgICAgdGhpcy5sbE9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGhpcy5sbENvdW50ID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5sbE9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICB9XG5cbiAgICBsbFByZWxvYWRJbWFnZSAoaW1hZ2UpIHtcbiAgICAgICAgY29uc3Qgc3JjID0gaW1hZ2UuZGF0YXNldC5zcmNzZXQ7XG4gICAgICAgIGlmICghc3JjKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gSGVscGVycy5kb0ltYWdlUHJlbG9hZChzcmMpLnRoZW4oKCkgPT4gdGhpcy5sbFRhZ0ltYWdlKGltYWdlLCBzcmMpKTtcbiAgICB9XG5cbiAgICBsbExvYWRJbWFnZXNEZWZhdWx0IChpbWFnZXMpIHtcbiAgICAgICAgQXJyYXkuZnJvbShpbWFnZXMpLmZvckVhY2goaW1hZ2UgPT4gdGhpcy5sbFByZWxvYWRJbWFnZShpbWFnZSkpO1xuICAgIH1cblxuICAgIGxsVGFnSW1hZ2UgKGltZywgc3JjKSB7XG4gICAgICAgIGNvbnN0IGVsID0gaW1nLnF1ZXJ5U2VsZWN0b3IoJy5sYXp5LWltYWdlX19jb250ZW50Jyk7XG4gICAgICAgIGlmICghZWwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaW1nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbmV3SW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgIG5ld0ltZy5jbGFzc0xpc3QuYWRkKExhenlJbWFnZUxvYWRlci5MT0FERURfQ0xBU1MpO1xuICAgICAgICBuZXdJbWcuc3Jjc2V0ID0gc3JjO1xuICAgICAgICBuZXdJbWcuY2xhc3NMaXN0LmFkZChMYXp5SW1hZ2VMb2FkZXIuUkVWRUFMX0NMQVNTKTtcbiAgICAgICAgbmV3SW1nLmFsdCA9IGVsLmFsdDtcbiAgICAgICAgaW1nLmFwcGVuZENoaWxkKG5ld0ltZyk7XG5cbiAgICAgICAgaW1nLmRhdGFzZXQuc3Jjc2V0ID0gJyc7XG4gICAgICAgIGltZy5jbGFzc0xpc3QucmVtb3ZlKExhenlJbWFnZUxvYWRlci5QRU5ESU5HX0NMQVNTKTtcbiAgICAgICAgaW1nLmNsYXNzTGlzdC5hZGQoTGF6eUltYWdlTG9hZGVyLkhBTkRMRURfQ0xBU1MpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF6eUltYWdlTG9hZGVyO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cclxubGV0IG5hdmJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXInKTtcclxubGV0IG1lbnVJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJhcl9fc21hbGwtbWVudV9faWNvbicpO1xyXG5sZXQgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5Jyk7XHJcblxyXG4vLyBmdW5jdGlvbnNcclxuZnVuY3Rpb24gdG9nZ2xlTmF2YmFyICgpIHtcclxuICAgIG5hdmJhci5jbGFzc0xpc3QudG9nZ2xlKCduYXZiYXItYWN0aXZlJyk7XHJcbiAgICBvdmVybGF5LmNsYXNzTGlzdC50b2dnbGUoJ292ZXJsYXktYWN0aXZlJyk7XHJcbn1cclxuXHJcbi8vIHRvZ2dsZSBuYXZiYXJcclxuaWYgKG1lbnVJY29uICYmIG5hdmJhciAmJiBvdmVybGF5KSB7XHJcbiAgICBtZW51SWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZU5hdmJhcik7XHJcbiAgICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlTmF2YmFyKTtcclxufVxyXG5cclxuLy8gdG9wIHRleHQgc2xpZGVcclxuaWYgKG5hdmJhcikge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcclxuICAgICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID4gMjAwKSB7XHJcbiAgICAgICAgICAgIG5hdmJhci5jbGFzc0xpc3QuYWRkKCd0b3AtYm94LXNsaWRlJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbmF2YmFyLmNsYXNzTGlzdC5yZW1vdmUoJ3RvcC1ib3gtc2xpZGUnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBnc2FwIGZyb20gJ2dzYXAnO1xuXG5pZiAoZ3NhcCkge1xuICAgICQoZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCByZXNvdXJjZSA9ICQoJy5yZXNvdXJjZScpO1xuICAgICAgICAvLyBsZXQgc3dhcCA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChyZXNvdXJjZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvLyBjb25zdCBjaGFuZ2VDbGFzc2VzID0gKCkgPT4ge1xuICAgICAgICAgICAgLy8gICAgIGxldCByZWQgPSAkKCcucmVzb3VyY2VfX2Jsb2NrLXJlZCcpWzBdO1xuICAgICAgICAgICAgLy8gICAgIGxldCBibGFjayA9ICQoJy5yZXNvdXJjZV9fYmxvY2stYmxhY2snKVswXTtcblxuICAgICAgICAgICAgLy8gICAgIGlmICghc3dhcCkge1xuICAgICAgICAgICAgLy8gICAgICAgICByZWQuY2xhc3NMaXN0LmFkZCgnc3dhcCcpO1xuICAgICAgICAgICAgLy8gICAgICAgICBibGFjay5jbGFzc0xpc3QuYWRkKCdzd2FwJyk7XG4gICAgICAgICAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgcmVkLmNsYXNzTGlzdC5yZW1vdmUoJ3N3YXAnKTtcbiAgICAgICAgICAgIC8vICAgICAgICAgYmxhY2suY2xhc3NMaXN0LnJlbW92ZSgnc3dhcCcpO1xuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vICAgICBzd2FwID0gIXN3YXA7XG4gICAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICAgIC8vIFNjcm9sbFRyaWdnZXIuY3JlYXRlKHtcbiAgICAgICAgICAgIC8vICAgICB0YXJnZXQ6ICcucmVzb3VyY2VfX2Jsb2NrJyxcbiAgICAgICAgICAgIC8vICAgICBzdGFydDogJ3RvcCB0b3AnLFxuICAgICAgICAgICAgLy8gICAgIG1hcmtlcnM6IHRydWUsXG4gICAgICAgICAgICAvLyAgICAgLy8gZW5kOiBkb2N1bWVudC5pbm5lckhlaWdodCxcbiAgICAgICAgICAgIC8vICAgICBvblRvZ2dsZTogKCkgPT4gY2hhbmdlQ2xhc3NlcygpLFxuICAgICAgICAgICAgLy8gfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFN3aXBlciBmcm9tICdzd2lwZXInO1xuLy8gaW1wb3J0IGdzYXAgZnJvbSAnZ3NhcCc7XG4vLyBpbXBvcnQgeyBkZWJvdW5jZSxtZWRpYVF1ZXJ5IH0gZnJvbSAnLi91dGlscyc7XG5cbmlmIChTd2lwZXIpIHtcbiAgICAkKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gLS0tLSBBTEwgU0xJREVSUyAtLS0tLVxuICAgICAgICBjb25zdCBzbGlkZXJNb21lbnR1bVJhdGlvID0gMC40NTU7XG4gICAgICAgIGNvbnN0IElzSW5pdGlhbGl6ZWQgPSAoZWxlKSA9PiBlbGUuaGFzQ2xhc3MoJ3N3aXBlci1jb250YWluZXItaW5pdGlhbGl6ZWQnKTtcbiAgICAgICAgY29uc3Qgc3dpcGVySW5zdGFuY2VzID0ge1xuICAgICAgICAgICAgY2F0ZWdvcnk6ICAgICAgICAgeyBpbnN0YW5jZTogbnVsbCwgaW5pdDogZmFsc2UgfSxcbiAgICAgICAgICAgIGJpZzogICAgICAgICAgICAgIHsgaW5zdGFuY2U6IG51bGwsIGluaXQ6IGZhbHNlIH0sXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gY29uc3Qgc3dpcGVyU3RhdGUgPSAoc2xpZGVyLCBzd2lwZXJJbnN0YW5jZSwgc2V0dXApID0+IHtcbiAgICAgICAgLy8gICAgIGlmIChtZWRpYVF1ZXJ5KCcobWF4LXdpZHRoOiA5OTFweCknKSkge1xuICAgICAgICAvLyAgICAgICAgIGlmICghc3dpcGVySW5zdGFuY2UuaW5pdCkge1xuICAgICAgICAvLyAgICAgICAgICAgICBzd2lwZXJJbnN0YW5jZS5pbml0ID0gdHJ1ZTtcbiAgICAgICAgLy8gICAgICAgICAgICAgc2V0dXAoKTtcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vICAgICBpZiAobWVkaWFRdWVyeSgnKG1pbi13aWR0aDogOTkycHgpJykpIHtcbiAgICAgICAgLy8gICAgICAgICBpZiAoc3dpcGVySW5zdGFuY2UuaW5pdCkge1xuICAgICAgICAvLyAgICAgICAgICAgICBzd2lwZXJJbnN0YW5jZS5pbnN0YW5jZS5kZXN0cm95KCk7XG4gICAgICAgIC8vICAgICAgICAgICAgIHN3aXBlckluc3RhbmNlLmluaXQgPSBmYWxzZTtcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH07XG5cbiAgICAgICAgLy8gLS0tLS0tLS0gIEJJRyBTTElERVIgLS0tLS0tLS1cblxuICAgICAgICBjb25zdCBiaWdTbGlkZXIgPSAkKCcuYmlnLXNsaWRlcl9fc2xpZGVyJyk7XG5cbiAgICAgICAgZnVuY3Rpb24gc2V0dXBCaWdTbGlkZXIgKCkge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudE51bWJlciA9ICQoJy5iaWctc2xpZGVyX19jdXJyZW50LWFjdGl2ZScpO1xuICAgICAgICAgICAgc3dpcGVySW5zdGFuY2VzLmJpZy5pbnN0YW5jZSA9IG5ldyBTd2lwZXIoYmlnU2xpZGVyWzBdLCB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAnYXV0bycsXG4gICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiA1MCxcbiAgICAgICAgICAgICAgICBmcmVlTW9kZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgZnJlZU1vZGVNb21lbnR1bVJhdGlvOiBzbGlkZXJNb21lbnR1bVJhdGlvLFxuICAgICAgICAgICAgICAgIGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxuICAgICAgICAgICAgICAgIGxvb3A6IHRydWUsXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVDaGFuZ2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzd2lwZXJJbnN0YW5jZXMuYmlnLmluc3RhbmNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJCgnLmJpZy1zbGlkZXJfX2N1cnJlbnQtYWN0aXZlJykuYXR0cignZGF0YS1sZW5ndGgnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudE51bWJlci50ZXh0KHN3aXBlckluc3RhbmNlcy5iaWcuaW5zdGFuY2UuYWN0aXZlSW5kZXggJSBwYXJzZUludChjdXJyZW50TnVtYmVyLmF0dHIoJ2RhdGEtbGVuZ3RoJykpICsgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHBhZ2luYXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgZWw6ICcuYmlnLXNsaWRlcl9fcHJvZ3Jlc3MnLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAncHJvZ3Jlc3NiYXInLFxuICAgICAgICAgICAgICAgICAgICBwcm9ncmVzc2JhckZpbGxDbGFzczogJ2JpZy1zbGlkZXJfX2JhcicsXG4gICAgICAgICAgICAgICAgICAgIG1vZGlmaWVyQ2xhc3M6ICdiaWctc2xpZGVyX19iYXItLScsXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlclByb2dyZXNzYmFyOiBmdW5jdGlvbiAocHJvZ3Jlc3NiYXJGaWxsQ2xhc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnPHNwYW4gY2xhc3M9XCInICsgcHJvZ3Jlc3NiYXJGaWxsQ2xhc3MgKyAnXCI+PC9zcGFuPic7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJpZ1NsaWRlci5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpZiAoIUlzSW5pdGlhbGl6ZWQoYmlnU2xpZGVyKSkge1xuICAgICAgICAgICAgICAgIHNldHVwQmlnU2xpZGVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyAtLS0tLS0tLSBDQVRFR09SWSBTTElERVIgLS0tLS0tLS1cbiAgICAgICAgY29uc3QgY2F0ZWdvcnlTbGlkZXIgPSAkKCcuY2F0ZWdvcnktc2xpZGVyX19zbGlkZXInKTtcblxuICAgICAgICBmdW5jdGlvbiBzZXR1cENhdGVnb3J5U2xpZGVyICgpIHtcbiAgICAgICAgICAgIHN3aXBlckluc3RhbmNlcy5jYXRlZ29yeS5pbnN0YW5jZSA9IG5ldyBTd2lwZXIoY2F0ZWdvcnlTbGlkZXJbMF0sIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcbiAgICAgICAgICAgICAgICBmcmVlTW9kZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBmcmVlTW9kZU1vbWVudHVtUmF0aW86IHNsaWRlck1vbWVudHVtUmF0aW8sXG4gICAgICAgICAgICAgICAgcGFnaW5hdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICBlbDogJy5jYXRlZ29yeS1zbGlkZXJfX3Byb2dyZXNzJyxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3Byb2dyZXNzYmFyJyxcbiAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3NiYXJGaWxsQ2xhc3M6ICdjYXRlZ29yeS1zbGlkZXJfX2JhcicsXG4gICAgICAgICAgICAgICAgICAgIG1vZGlmaWVyQ2xhc3M6ICdjYXRlZ29yeS1zbGlkZXJfX2Jhci0tJyxcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyUHJvZ3Jlc3NiYXI6IGZ1bmN0aW9uIChwcm9ncmVzc2JhckZpbGxDbGFzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICc8c3BhbiBjbGFzcz1cIicgKyBwcm9ncmVzc2JhckZpbGxDbGFzcyArICdcIj48L3NwYW4+JztcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjYXRlZ29yeVNsaWRlci5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpZiAoIUlzSW5pdGlhbGl6ZWQoY2F0ZWdvcnlTbGlkZXIpKSB7XG4gICAgICAgICAgICAgICAgc2V0dXBDYXRlZ29yeVNsaWRlcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xyXG5pbXBvcnQgU3dpcGVyIGZyb20gJ3N3aXBlcic7XHJcblxyXG5jb25zdCBzd2lwZXJEZXNrdG9wU2luZ2xlID0gbmV3IFN3aXBlcignLnN3aXBlci1kZXNrdG9wLXNpbmdsZScsIHtcclxuICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICBzcGFjZUJldHdlZW46IDEsXHJcbiAgICBhdXRvcGxheTogdHJ1ZSxcclxuXHJcbiAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxyXG4gICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxyXG4gICAgfSxcclxufSk7XHJcblxyXG5jb25zdCBzd2lwZXJEZXNrdG9wTXVsdGlwbGUgPSBuZXcgU3dpcGVyKCcuc3dpcGVyLWRlc2t0b3AtbXVsdGlwbGUnLCB7XHJcbiAgICBzbGlkZXNQZXJWaWV3OiA1LFxyXG4gICAgc3BhY2VCZXR3ZWVuOiAxLFxyXG4gICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICBsb29wOiB0cnVlLFxyXG5cclxuICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICBlbDogJy5zd2lwZXItcGFnaW5hdGlvbicsXHJcbiAgICAgICAgY2xpY2thYmxlOiB0cnVlXHJcbiAgICB9LFxyXG59KTtcclxuXHJcbmNvbnN0IHN3aXBlck1vYmlsZVNpbmdsZSA9IG5ldyBTd2lwZXIoJy5zd2lwZXItbW9iaWxlLXNpbmdsZScsIHtcclxuICAgIGxvb3A6IHRydWUsXHJcbiAgICBzbGlkZXNQZXJWaWV3OjEsXHJcbiAgICBzcGFjZUJldHdlZW46MSxcclxuXHJcbiAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxyXG4gICAgfSxcclxuXHJcbn0pO1xyXG5cclxuY29uc3Qgc3dpcGVyTW9iaWxlTXVsdGlwbGUgPSBuZXcgU3dpcGVyKCcuc3dpcGVyLW1vYmlsZS1tdWx0aXBsZScsIHtcclxuICAgIGxvb3A6IHRydWUsXHJcbiAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxyXG4gICAgfSxcclxuICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgICAgNzY4OiB7XHJcbiAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICA0NTA6IHtcclxuICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMS41LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgMzAwOiB7XHJcbiAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDEuMyxcclxuICAgICAgICB9LFxyXG4gICAgfVxyXG5cclxufSk7XHJcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IGdzYXAgZnJvbSAnZ3NhcCc7XG5cbmV4cG9ydCBjb25zdCBkZWJvdW5jZSA9IChmdW5jLCB3YWl0LCBpbW1lZGlhdGUpID0+IHtcbiAgICB2YXIgdGltZW91dDtcbiAgICBpZiAodHlwZW9mIGZ1bmMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICAgICAgICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgICAgICAgIHZhciBsYXRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICBpZiAoIWltbWVkaWF0ZSkgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgY2FsbE5vdyA9IGltbWVkaWF0ZSAmJiAhdGltZW91dDtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcbiAgICAgICAgICAgIGlmIChjYWxsTm93KSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUud2FybignQSBmdW5jdGlvbiBpcyB1bmRlZmluZWQhIERlYm91bmNlIG1pZ2h0IG5vdCB3b3JrIGFzIGludGVuZGVkOiAnLCBmdW5jKTtcbiAgICB9XG59O1xuXG5leHBvcnQgY29uc3QgdGhyb3R0bGUgPSAoZnVuYywgbGltaXQpID0+IHtcbiAgICBsZXQgbGFzdEZ1bmM7XG4gICAgbGV0IGxhc3RSYW47XG5cbiAgICBpZiAodHlwZW9mIGZ1bmMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcztcbiAgICAgICAgICAgIGNvbnN0IGFyZ3MgPSBhcmd1bWVudHM7XG5cbiAgICAgICAgICAgIGlmICghbGFzdFJhbikge1xuICAgICAgICAgICAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICAgICAgICAgICAgbGFzdFJhbiA9IERhdGUubm93KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChsYXN0RnVuYyk7XG5cbiAgICAgICAgICAgICAgICBsYXN0RnVuYyA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoKERhdGUubm93KCkgLSBsYXN0UmFuKSA+PSBsaW1pdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RSYW4gPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgbGltaXQgLSAoRGF0ZS5ub3coKSAtIGxhc3RSYW4pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLndhcm4oJ0EgZnVuY3Rpb24gaXMgdW5kZWZpbmVkISBUaHJvdHRsZSBtaWdodCBub3Qgd29yayBhcyBpbnRlbmRlZDogJywgZnVuYyk7XG4gICAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGxlcnAgPSAoc3RhcnQsIGVuZCwgYW10KSA9PiB7XG4gICAgcmV0dXJuICgxIC0gYW10KSAqIHN0YXJ0ICsgYW10ICogZW5kO1xufTtcblxuZXhwb3J0IGNvbnN0IGNsYW1wID0gKG1pbiwgdmFsLCBtYXgpID0+IHtcbiAgICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgodmFsLCBtaW4pLCBtYXgpO1xufTtcblxuZXhwb3J0IGNvbnN0IGlyYW5kb20gPSAobWF4KSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNYXRoLmZsb29yKG1heCkpO1xuZXhwb3J0IGNvbnN0IHNlY29uZHMgPSAobXMpID0+IG1zICogMTAwMDtcblxuZXhwb3J0IGNvbnN0IG1lZGlhUXVlcnkgPSAocXVlcnkpID0+ICh3aW5kb3cubWF0Y2hNZWRpYShxdWVyeSkpLm1hdGNoZXM7XG5cbmV4cG9ydCBjb25zdCBzdGJTY3JvbGxUbyA9IChlbGUsIHNwZWVkID0gMjAwKSA9PiB7XG4gICAgaWYgKGdzYXApIHtcbiAgICAgICAgZ3NhcC5yZWdpc3RlclBsdWdpbihTY3JvbGxUb1BsdWdpbik7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuICAgICAgICBnc2FwLnRvKHdpbmRvdywge1xuICAgICAgICAgICAgZHVyYXRpb246IHNwZWVkIC8gMTAwMCxcbiAgICAgICAgICAgIGVhc2U6ICdQb3dlcjMuZWFzZU91dCcsXG4gICAgICAgICAgICBzY3JvbGxUbzoge1xuICAgICAgICAgICAgICAgIHk6ICQoZWxlKS5vZmZzZXQoKS50b3BcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgJChbZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCBkb2N1bWVudC5ib2R5XSkuYW5pbWF0ZSh7XG4gICAgICAgICAgICBzY3JvbGxUb3A6ICQoZWxlKS5vZmZzZXQoKS50b3BcbiAgICAgICAgfSwgc3BlZWQpO1xuICAgIH1cbn07XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIndXNlIHN0cmljdCc7XG5cbi8vIC0tLS0tLS0tLS0gSW1hZ2UgLyBjc3MgYXNzZXRzIC0tLS0tLS0tLS0tLVxuXG5yZXF1aXJlLmNvbnRleHQoJy4vYXNzZXRzLycsIHRydWUsIC9cXC4oc3ZnfHBuZ3xqcGU/ZykkLyk7XG5yZXF1aXJlKCcuL2Fzc2V0cy9zdHlsZXMvbWFpbi5zY3NzJyk7XG5cbmNvbnN0IGluY2x1ZGVDb21wb25lbnQgPSAoc2NyaXB0KSA9PiByZXF1aXJlKGAuL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvJHtzY3JpcHR9LmpzYCk7XG5cbi8vIC0tLS0tLS0tLS0tLS0tIExhenkgbG9hZCAtLS0tLS0tLS0tLS0tLS0tLVxuXG4vKlxuICogaW1wb3J0IExhenlJbWFnZUxvYWRlciBmcm9tICcuL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvbGF6eWltYWdlbG9hZGVyLmpzJztcbiAqIExhenlJbWFnZUxvYWRlci5pbml0KCk7XG4gKi9cblxuLy8gLS0tLS0tLS0tLS0gQ3VzdG9tIHNjcmlwdHMgLS0tLS0tLS0tLS0tLS0tXG5pbmNsdWRlQ29tcG9uZW50KCdzbGlkZXInKTtcbmluY2x1ZGVDb21wb25lbnQoJ25hdmJhcicpO1xuaW5jbHVkZUNvbXBvbmVudCgnc3dpcGVyJyk7XG5pbmNsdWRlQ29tcG9uZW50KCdkcm9wLWJhcnMnKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZ3NhcDsiLCJtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTsiLCJtb2R1bGUuZXhwb3J0cyA9IFN3aXBlcjsiXSwic291cmNlUm9vdCI6IiJ9