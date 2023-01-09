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

var swiperDesktop = new swiper__WEBPACK_IMPORTED_MODULE_0___default.a('.swiper-desktop', {
  slidesPerView: 5,
  spaceBetween: 0,
  centeredSlides: true
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
var swiperMobile = new swiper__WEBPACK_IMPORTED_MODULE_0___default.a('.swiper-mobile', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 1,
  pagination: {
    el: '.swiper-pagination'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cyBzeW5jIFxcLihzdmd8cG5nfGpwZSIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9zdmcvbmV3c2xldHRlci5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMgc3luYyBeXFwuXFwvLipcXC5qcyQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvY29tcG9uZW50cy9sYXp5aW1hZ2Vsb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvbmF2YmFyLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc2NyaXB0cy9jb21wb25lbnRzL3Jlc291cmNlLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc2NyaXB0cy9jb21wb25lbnRzL3NsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvY29tcG9uZW50cy9zd2lwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zdHlsZXMvbWFpbi5zY3NzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJnc2FwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwialF1ZXJ5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiU3dpcGVyXCIiXSwibmFtZXMiOlsiZG9JbWFnZVByZWxvYWQiLCJ1cmwiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImltYWdlIiwiSW1hZ2UiLCJzcmNzZXQiLCJvbmxvYWQiLCJvbmVycm9yIiwiY2xhbXAiLCJ2YWx1ZSIsIm1pbiIsIm1heCIsIk1hdGgiLCJhc3NlcnQiLCJwcmVkaWNhdGUiLCJtZXNzYWdlIiwiRXJyb3IiLCJMYXp5SW1hZ2VMb2FkZXIiLCJpbWFnZXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJQRU5ESU5HX0NMQVNTIiwiY29uZmlnIiwicm9vdCIsInJvb3RNYXJnaW4iLCJ0aHJlc2hvbGQiLCJUSFJFU0hPTEQiLCJPQlNFUlZFUl9TVVBQT1JURUQiLCJsbExvYWRJbWFnZXNEZWZhdWx0IiwibGxDb3VudCIsImxlbmd0aCIsImxsSW50ZXJzZWN0ZWQiLCJiaW5kIiwibGxPYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZm9yRWFjaCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiSEFORExFRF9DTEFTUyIsIm9ic2VydmUiLCJkaXNjb25uZWN0IiwiZW50cmllcyIsImVudHJ5IiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJpc0ludGVyc2VjdGluZyIsImxsUHJlbG9hZEltYWdlIiwidGFyZ2V0IiwidW5vYnNlcnZlIiwic3JjIiwiZGF0YXNldCIsIkhlbHBlcnMiLCJ0aGVuIiwibGxUYWdJbWFnZSIsIkFycmF5IiwiZnJvbSIsImltZyIsImVsIiwicXVlcnlTZWxlY3RvciIsIm5ld0ltZyIsImFkZCIsIkxPQURFRF9DTEFTUyIsIlJFVkVBTF9DTEFTUyIsImFsdCIsImFwcGVuZENoaWxkIiwicmVtb3ZlIiwid2luZG93IiwibGxJbnN0YW5jZSIsImxsRGlzY29ubmVjdCIsIm5hdmJhciIsIm1lbnVJY29uIiwib3ZlcmxheSIsInRvZ2dsZU5hdmJhciIsInRvZ2dsZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYWdlWU9mZnNldCIsImdzYXAiLCIkIiwicmVzb3VyY2UiLCJTd2lwZXIiLCJzbGlkZXJNb21lbnR1bVJhdGlvIiwiSXNJbml0aWFsaXplZCIsImVsZSIsImhhc0NsYXNzIiwic3dpcGVySW5zdGFuY2VzIiwiY2F0ZWdvcnkiLCJpbnN0YW5jZSIsImluaXQiLCJiaWciLCJiaWdTbGlkZXIiLCJzZXR1cEJpZ1NsaWRlciIsImN1cnJlbnROdW1iZXIiLCJzbGlkZXNQZXJWaWV3Iiwic3BhY2VCZXR3ZWVuIiwiZnJlZU1vZGUiLCJmcmVlTW9kZU1vbWVudHVtUmF0aW8iLCJjZW50ZXJlZFNsaWRlcyIsImxvb3AiLCJvbiIsInNsaWRlQ2hhbmdlIiwiY29uc29sZSIsImxvZyIsImF0dHIiLCJ0ZXh0IiwiYWN0aXZlSW5kZXgiLCJwYXJzZUludCIsInBhZ2luYXRpb24iLCJ0eXBlIiwicHJvZ3Jlc3NiYXJGaWxsQ2xhc3MiLCJtb2RpZmllckNsYXNzIiwicmVuZGVyUHJvZ3Jlc3NiYXIiLCJjYXRlZ29yeVNsaWRlciIsInNldHVwQ2F0ZWdvcnlTbGlkZXIiLCJzd2lwZXJEZXNrdG9wIiwic3dpcGVyTW9iaWxlTXVsdGlwbGUiLCJicmVha3BvaW50cyIsInN3aXBlck1vYmlsZSIsImRlYm91bmNlIiwiZnVuYyIsIndhaXQiLCJpbW1lZGlhdGUiLCJ0aW1lb3V0IiwiY29udGV4dCIsImFyZ3MiLCJhcmd1bWVudHMiLCJsYXRlciIsImFwcGx5IiwiY2FsbE5vdyIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJ3YXJuIiwidGhyb3R0bGUiLCJsaW1pdCIsImxhc3RGdW5jIiwibGFzdFJhbiIsIkRhdGUiLCJub3ciLCJsZXJwIiwic3RhcnQiLCJlbmQiLCJhbXQiLCJ2YWwiLCJpcmFuZG9tIiwiZmxvb3IiLCJyYW5kb20iLCJzZWNvbmRzIiwibXMiLCJtZWRpYVF1ZXJ5IiwicXVlcnkiLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsInN0YlNjcm9sbFRvIiwic3BlZWQiLCJyZWdpc3RlclBsdWdpbiIsIlNjcm9sbFRvUGx1Z2luIiwidG8iLCJkdXJhdGlvbiIsImVhc2UiLCJzY3JvbGxUbyIsInkiLCJvZmZzZXQiLCJ0b3AiLCJkb2N1bWVudEVsZW1lbnQiLCJib2R5IiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsInJlcXVpcmUiLCJpbmNsdWRlQ29tcG9uZW50Iiwic2NyaXB0Il0s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QUFDLFFBQUQsQ0FBaEIsQzs7Ozs7Ozs7Ozs7QUNuQkEsc0I7Ozs7Ozs7Ozs7O0FDQUEsd0I7Ozs7Ozs7Ozs7O0FDQUEsd0IiLCJmaWxlIjoiYXNzZXRzL2pzL21haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwidmFyIG1hcCA9IHtcblx0XCIuL2ltYWdlcy9zdmcvbmV3c2xldHRlci5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3N2Zy9uZXdzbGV0dGVyLnN2Z1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9hc3NldHMgc3luYyByZWN1cnNpdmUgXFxcXC4oc3ZnfHBuZ3xqcGU/ZykkXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi4uL2ltYWdlcy9zdmcvbmV3c2xldHRlci5zdmdcIjsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vaGVscGVycy5qc1wiOiBcIi4vc3JjL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvaGVscGVycy5qc1wiLFxuXHRcIi4vbGF6eWltYWdlbG9hZGVyLmpzXCI6IFwiLi9zcmMvYXNzZXRzL3NjcmlwdHMvY29tcG9uZW50cy9sYXp5aW1hZ2Vsb2FkZXIuanNcIixcblx0XCIuL25hdmJhci5qc1wiOiBcIi4vc3JjL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvbmF2YmFyLmpzXCIsXG5cdFwiLi9yZXNvdXJjZS5qc1wiOiBcIi4vc3JjL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvcmVzb3VyY2UuanNcIixcblx0XCIuL3NsaWRlci5qc1wiOiBcIi4vc3JjL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvc2xpZGVyLmpzXCIsXG5cdFwiLi9zd2lwZXIuanNcIjogXCIuL3NyYy9hc3NldHMvc2NyaXB0cy9jb21wb25lbnRzL3N3aXBlci5qc1wiLFxuXHRcIi4vdXRpbHMuanNcIjogXCIuL3NyYy9hc3NldHMvc2NyaXB0cy9jb21wb25lbnRzL3V0aWxzLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMgc3luYyByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKlxcXFwuanMkXCI7IiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBkb0ltYWdlUHJlbG9hZCA9IHVybCA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaW1hZ2Uuc3Jjc2V0ID0gdXJsO1xuICAgICAgICBpbWFnZS5vbmxvYWQgPSByZXNvbHZlO1xuICAgICAgICBpbWFnZS5vbmVycm9yID0gcmVqZWN0O1xuICAgIH0pO1xufTtcblxuY29uc3QgY2xhbXAgPSAodmFsdWUsIG1pbiwgbWF4KSA9PiBNYXRoLm1heChtaW4sIE1hdGgubWluKG1heCwgdmFsdWUpKTtcblxuY29uc3QgYXNzZXJ0ID0gKHByZWRpY2F0ZSwgbWVzc2FnZSkgPT4ge1xuICAgIGlmIChwcmVkaWNhdGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBhc3NlcnQsIGNsYW1wLCBkb0ltYWdlUHJlbG9hZFxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IEhlbHBlcnMgZnJvbSAnLi9oZWxwZXJzJztcblxuY2xhc3MgTGF6eUltYWdlTG9hZGVyIHtcbiAgICBzdGF0aWMgZ2V0IE9CU0VSVkVSX1NVUFBPUlRFRCAoKSB7XG4gICAgICAgIHJldHVybiAoJ0ludGVyc2VjdGlvbk9ic2VydmVyJyBpbiB3aW5kb3cpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgUEVORElOR19DTEFTUyAoKSB7XG4gICAgICAgIHJldHVybiAnbGF6eS1pbWFnZS0tcGVuZGluZyc7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBIQU5ETEVEX0NMQVNTICgpIHtcbiAgICAgICAgcmV0dXJuICdsYXp5LWltYWdlLS1sb2FkZWQnO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgTE9BREVEX0NMQVNTICgpIHtcbiAgICAgICAgcmV0dXJuICdsYXp5LWltYWdlX19hY3R1YWwnO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgUkVWRUFMX0NMQVNTICgpIHtcbiAgICAgICAgcmV0dXJuICdmYWRlLWluJztcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IFRIUkVTSE9MRCAoKSB7XG4gICAgICAgIHJldHVybiAwLjE7XG4gICAgfVxuXG4gICAgc3RhdGljIGluaXQgKCkge1xuICAgICAgICBpZiAodGhpcy5sbEluc3RhbmNlKSB7XG4gICAgICAgICAgICB0aGlzLmxsSW5zdGFuY2UubGxEaXNjb25uZWN0KCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxsQ291bnQgPSAwO1xuICAgICAgICB0aGlzLmxsSW5zdGFuY2UgPSBuZXcgTGF6eUltYWdlTG9hZGVyKCk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICB2YXIgaW1hZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLiR7TGF6eUltYWdlTG9hZGVyLlBFTkRJTkdfQ0xBU1N9YCk7XG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgICAgICAgIHJvb3Q6IG51bGwsXG4gICAgICAgICAgICByb290TWFyZ2luOiAnNjBweCAwcHgnLFxuICAgICAgICAgICAgdGhyZXNob2xkOiBMYXp5SW1hZ2VMb2FkZXIuVEhSRVNIT0xEXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKCFMYXp5SW1hZ2VMb2FkZXIuT0JTRVJWRVJfU1VQUE9SVEVEKSB7XG4gICAgICAgICAgICB0aGlzLmxsTG9hZEltYWdlc0RlZmF1bHQoaW1hZ2VzKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubGxDb3VudCA9IGltYWdlcy5sZW5ndGg7XG4gICAgICAgIHRoaXMubGxJbnRlcnNlY3RlZCA9IHRoaXMubGxJbnRlcnNlY3RlZC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmxsT2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIodGhpcy5sbEludGVyc2VjdGVkLCBjb25maWcpO1xuXG4gICAgICAgIGltYWdlcy5mb3JFYWNoKGltYWdlID0+IHtcbiAgICAgICAgICAgIGlmIChpbWFnZS5jbGFzc0xpc3QuY29udGFpbnMoTGF6eUltYWdlTG9hZGVyLkhBTkRMRURfQ0xBU1MpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmxsT2JzZXJ2ZXIub2JzZXJ2ZShpbWFnZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGxsRGlzY29ubmVjdCAoKSB7XG4gICAgICAgIGlmICghdGhpcy5sbE9ic2VydmVyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxsT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgIH1cblxuICAgIGxsSW50ZXJzZWN0ZWQgKGVudHJpZXMpIHtcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgaWYgKGVudHJ5LmludGVyc2VjdGlvblJhdGlvIDwgMCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICAgICAgICAgIHRoaXMubGxDb3VudC0tO1xuICAgICAgICAgICAgICAgIHRoaXMubGxQcmVsb2FkSW1hZ2UoZW50cnkudGFyZ2V0KTtcbiAgICAgICAgICAgICAgICB0aGlzLmxsT2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0aGlzLmxsQ291bnQgPiAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxsT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgIH1cblxuICAgIGxsUHJlbG9hZEltYWdlIChpbWFnZSkge1xuICAgICAgICBjb25zdCBzcmMgPSBpbWFnZS5kYXRhc2V0LnNyY3NldDtcbiAgICAgICAgaWYgKCFzcmMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBIZWxwZXJzLmRvSW1hZ2VQcmVsb2FkKHNyYykudGhlbigoKSA9PiB0aGlzLmxsVGFnSW1hZ2UoaW1hZ2UsIHNyYykpO1xuICAgIH1cblxuICAgIGxsTG9hZEltYWdlc0RlZmF1bHQgKGltYWdlcykge1xuICAgICAgICBBcnJheS5mcm9tKGltYWdlcykuZm9yRWFjaChpbWFnZSA9PiB0aGlzLmxsUHJlbG9hZEltYWdlKGltYWdlKSk7XG4gICAgfVxuXG4gICAgbGxUYWdJbWFnZSAoaW1nLCBzcmMpIHtcbiAgICAgICAgY29uc3QgZWwgPSBpbWcucXVlcnlTZWxlY3RvcignLmxhenktaW1hZ2VfX2NvbnRlbnQnKTtcbiAgICAgICAgaWYgKCFlbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFpbWcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBuZXdJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgbmV3SW1nLmNsYXNzTGlzdC5hZGQoTGF6eUltYWdlTG9hZGVyLkxPQURFRF9DTEFTUyk7XG4gICAgICAgIG5ld0ltZy5zcmNzZXQgPSBzcmM7XG4gICAgICAgIG5ld0ltZy5jbGFzc0xpc3QuYWRkKExhenlJbWFnZUxvYWRlci5SRVZFQUxfQ0xBU1MpO1xuICAgICAgICBuZXdJbWcuYWx0ID0gZWwuYWx0O1xuICAgICAgICBpbWcuYXBwZW5kQ2hpbGQobmV3SW1nKTtcblxuICAgICAgICBpbWcuZGF0YXNldC5zcmNzZXQgPSAnJztcbiAgICAgICAgaW1nLmNsYXNzTGlzdC5yZW1vdmUoTGF6eUltYWdlTG9hZGVyLlBFTkRJTkdfQ0xBU1MpO1xuICAgICAgICBpbWcuY2xhc3NMaXN0LmFkZChMYXp5SW1hZ2VMb2FkZXIuSEFORExFRF9DTEFTUyk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMYXp5SW1hZ2VMb2FkZXI7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xyXG5sZXQgbmF2YmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJhcicpO1xyXG5sZXQgbWVudUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2YmFyX19zbWFsbC1tZW51X19pY29uJyk7XHJcbmxldCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJsYXknKTtcclxuXHJcbi8vIGZ1bmN0aW9uc1xyXG5mdW5jdGlvbiB0b2dnbGVOYXZiYXIgKCkge1xyXG4gICAgbmF2YmFyLmNsYXNzTGlzdC50b2dnbGUoJ25hdmJhci1hY3RpdmUnKTtcclxuICAgIG92ZXJsYXkuY2xhc3NMaXN0LnRvZ2dsZSgnb3ZlcmxheS1hY3RpdmUnKTtcclxufVxyXG5cclxuLy8gdG9nZ2xlIG5hdmJhclxyXG5pZiAobWVudUljb24gJiYgbmF2YmFyICYmIG92ZXJsYXkpIHtcclxuICAgIG1lbnVJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlTmF2YmFyKTtcclxuICAgIG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVOYXZiYXIpO1xyXG59XHJcblxyXG4vLyB0b3AgdGV4dCBzbGlkZVxyXG5pZiAobmF2YmFyKSB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xyXG4gICAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPiAyMDApIHtcclxuICAgICAgICAgICAgbmF2YmFyLmNsYXNzTGlzdC5hZGQoJ3RvcC1ib3gtc2xpZGUnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBuYXZiYXIuY2xhc3NMaXN0LnJlbW92ZSgndG9wLWJveC1zbGlkZScpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IGdzYXAgZnJvbSAnZ3NhcCc7XG5cbmlmIChnc2FwKSB7XG4gICAgJChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IHJlc291cmNlID0gJCgnLnJlc291cmNlJyk7XG4gICAgICAgIC8vIGxldCBzd2FwID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKHJlc291cmNlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIC8vIGNvbnN0IGNoYW5nZUNsYXNzZXMgPSAoKSA9PiB7XG4gICAgICAgICAgICAvLyAgICAgbGV0IHJlZCA9ICQoJy5yZXNvdXJjZV9fYmxvY2stcmVkJylbMF07XG4gICAgICAgICAgICAvLyAgICAgbGV0IGJsYWNrID0gJCgnLnJlc291cmNlX19ibG9jay1ibGFjaycpWzBdO1xuXG4gICAgICAgICAgICAvLyAgICAgaWYgKCFzd2FwKSB7XG4gICAgICAgICAgICAvLyAgICAgICAgIHJlZC5jbGFzc0xpc3QuYWRkKCdzd2FwJyk7XG4gICAgICAgICAgICAvLyAgICAgICAgIGJsYWNrLmNsYXNzTGlzdC5hZGQoJ3N3YXAnKTtcbiAgICAgICAgICAgIC8vICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gICAgICAgICByZWQuY2xhc3NMaXN0LnJlbW92ZSgnc3dhcCcpO1xuICAgICAgICAgICAgLy8gICAgICAgICBibGFjay5jbGFzc0xpc3QucmVtb3ZlKCdzd2FwJyk7XG4gICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgLy8gICAgIHN3YXAgPSAhc3dhcDtcbiAgICAgICAgICAgIC8vIH1cblxuICAgICAgICAgICAgLy8gU2Nyb2xsVHJpZ2dlci5jcmVhdGUoe1xuICAgICAgICAgICAgLy8gICAgIHRhcmdldDogJy5yZXNvdXJjZV9fYmxvY2snLFxuICAgICAgICAgICAgLy8gICAgIHN0YXJ0OiAndG9wIHRvcCcsXG4gICAgICAgICAgICAvLyAgICAgbWFya2VyczogdHJ1ZSxcbiAgICAgICAgICAgIC8vICAgICAvLyBlbmQ6IGRvY3VtZW50LmlubmVySGVpZ2h0LFxuICAgICAgICAgICAgLy8gICAgIG9uVG9nZ2xlOiAoKSA9PiBjaGFuZ2VDbGFzc2VzKCksXG4gICAgICAgICAgICAvLyB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgU3dpcGVyIGZyb20gJ3N3aXBlcic7XG4vLyBpbXBvcnQgZ3NhcCBmcm9tICdnc2FwJztcbi8vIGltcG9ydCB7IGRlYm91bmNlLG1lZGlhUXVlcnkgfSBmcm9tICcuL3V0aWxzJztcblxuaWYgKFN3aXBlcikge1xuICAgICQoZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyAtLS0tIEFMTCBTTElERVJTIC0tLS0tXG4gICAgICAgIGNvbnN0IHNsaWRlck1vbWVudHVtUmF0aW8gPSAwLjQ1NTtcbiAgICAgICAgY29uc3QgSXNJbml0aWFsaXplZCA9IChlbGUpID0+IGVsZS5oYXNDbGFzcygnc3dpcGVyLWNvbnRhaW5lci1pbml0aWFsaXplZCcpO1xuICAgICAgICBjb25zdCBzd2lwZXJJbnN0YW5jZXMgPSB7XG4gICAgICAgICAgICBjYXRlZ29yeTogICAgICAgICB7IGluc3RhbmNlOiBudWxsLCBpbml0OiBmYWxzZSB9LFxuICAgICAgICAgICAgYmlnOiAgICAgICAgICAgICAgeyBpbnN0YW5jZTogbnVsbCwgaW5pdDogZmFsc2UgfSxcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBjb25zdCBzd2lwZXJTdGF0ZSA9IChzbGlkZXIsIHN3aXBlckluc3RhbmNlLCBzZXR1cCkgPT4ge1xuICAgICAgICAvLyAgICAgaWYgKG1lZGlhUXVlcnkoJyhtYXgtd2lkdGg6IDk5MXB4KScpKSB7XG4gICAgICAgIC8vICAgICAgICAgaWYgKCFzd2lwZXJJbnN0YW5jZS5pbml0KSB7XG4gICAgICAgIC8vICAgICAgICAgICAgIHN3aXBlckluc3RhbmNlLmluaXQgPSB0cnVlO1xuICAgICAgICAvLyAgICAgICAgICAgICBzZXR1cCgpO1xuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gICAgIGlmIChtZWRpYVF1ZXJ5KCcobWluLXdpZHRoOiA5OTJweCknKSkge1xuICAgICAgICAvLyAgICAgICAgIGlmIChzd2lwZXJJbnN0YW5jZS5pbml0KSB7XG4gICAgICAgIC8vICAgICAgICAgICAgIHN3aXBlckluc3RhbmNlLmluc3RhbmNlLmRlc3Ryb3koKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgc3dpcGVySW5zdGFuY2UuaW5pdCA9IGZhbHNlO1xuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfTtcblxuICAgICAgICAvLyAtLS0tLS0tLSAgQklHIFNMSURFUiAtLS0tLS0tLVxuXG4gICAgICAgIGNvbnN0IGJpZ1NsaWRlciA9ICQoJy5iaWctc2xpZGVyX19zbGlkZXInKTtcblxuICAgICAgICBmdW5jdGlvbiBzZXR1cEJpZ1NsaWRlciAoKSB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50TnVtYmVyID0gJCgnLmJpZy1zbGlkZXJfX2N1cnJlbnQtYWN0aXZlJyk7XG4gICAgICAgICAgICBzd2lwZXJJbnN0YW5jZXMuYmlnLmluc3RhbmNlID0gbmV3IFN3aXBlcihiaWdTbGlkZXJbMF0sIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcbiAgICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDUwLFxuICAgICAgICAgICAgICAgIGZyZWVNb2RlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBmcmVlTW9kZU1vbWVudHVtUmF0aW86IHNsaWRlck1vbWVudHVtUmF0aW8sXG4gICAgICAgICAgICAgICAgY2VudGVyZWRTbGlkZXM6IHRydWUsXG4gICAgICAgICAgICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBzbGlkZUNoYW5nZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN3aXBlckluc3RhbmNlcy5iaWcuaW5zdGFuY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygkKCcuYmlnLXNsaWRlcl9fY3VycmVudC1hY3RpdmUnKS5hdHRyKCdkYXRhLWxlbmd0aCcpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50TnVtYmVyLnRleHQoc3dpcGVySW5zdGFuY2VzLmJpZy5pbnN0YW5jZS5hY3RpdmVJbmRleCAlIHBhcnNlSW50KGN1cnJlbnROdW1iZXIuYXR0cignZGF0YS1sZW5ndGgnKSkgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcGFnaW5hdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICBlbDogJy5iaWctc2xpZGVyX19wcm9ncmVzcycsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdwcm9ncmVzc2JhcicsXG4gICAgICAgICAgICAgICAgICAgIHByb2dyZXNzYmFyRmlsbENsYXNzOiAnYmlnLXNsaWRlcl9fYmFyJyxcbiAgICAgICAgICAgICAgICAgICAgbW9kaWZpZXJDbGFzczogJ2JpZy1zbGlkZXJfX2Jhci0tJyxcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyUHJvZ3Jlc3NiYXI6IGZ1bmN0aW9uIChwcm9ncmVzc2JhckZpbGxDbGFzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICc8c3BhbiBjbGFzcz1cIicgKyBwcm9ncmVzc2JhckZpbGxDbGFzcyArICdcIj48L3NwYW4+JztcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYmlnU2xpZGVyLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGlmICghSXNJbml0aWFsaXplZChiaWdTbGlkZXIpKSB7XG4gICAgICAgICAgICAgICAgc2V0dXBCaWdTbGlkZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIC0tLS0tLS0tIENBVEVHT1JZIFNMSURFUiAtLS0tLS0tLVxuICAgICAgICBjb25zdCBjYXRlZ29yeVNsaWRlciA9ICQoJy5jYXRlZ29yeS1zbGlkZXJfX3NsaWRlcicpO1xuXG4gICAgICAgIGZ1bmN0aW9uIHNldHVwQ2F0ZWdvcnlTbGlkZXIgKCkge1xuICAgICAgICAgICAgc3dpcGVySW5zdGFuY2VzLmNhdGVnb3J5Lmluc3RhbmNlID0gbmV3IFN3aXBlcihjYXRlZ29yeVNsaWRlclswXSwgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogJ2F1dG8nLFxuICAgICAgICAgICAgICAgIGZyZWVNb2RlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGZyZWVNb2RlTW9tZW50dW1SYXRpbzogc2xpZGVyTW9tZW50dW1SYXRpbyxcbiAgICAgICAgICAgICAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGVsOiAnLmNhdGVnb3J5LXNsaWRlcl9fcHJvZ3Jlc3MnLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAncHJvZ3Jlc3NiYXInLFxuICAgICAgICAgICAgICAgICAgICBwcm9ncmVzc2JhckZpbGxDbGFzczogJ2NhdGVnb3J5LXNsaWRlcl9fYmFyJyxcbiAgICAgICAgICAgICAgICAgICAgbW9kaWZpZXJDbGFzczogJ2NhdGVnb3J5LXNsaWRlcl9fYmFyLS0nLFxuICAgICAgICAgICAgICAgICAgICByZW5kZXJQcm9ncmVzc2JhcjogZnVuY3Rpb24gKHByb2dyZXNzYmFyRmlsbENsYXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJzxzcGFuIGNsYXNzPVwiJyArIHByb2dyZXNzYmFyRmlsbENsYXNzICsgJ1wiPjwvc3Bhbj4nO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNhdGVnb3J5U2xpZGVyLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGlmICghSXNJbml0aWFsaXplZChjYXRlZ29yeVNsaWRlcikpIHtcbiAgICAgICAgICAgICAgICBzZXR1cENhdGVnb3J5U2xpZGVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXHJcblxyXG5pbXBvcnQgU3dpcGVyIGZyb20gJ3N3aXBlcic7XHJcblxyXG5jb25zdCBzd2lwZXJEZXNrdG9wID0gbmV3IFN3aXBlcignLnN3aXBlci1kZXNrdG9wJywge1xyXG4gICAgc2xpZGVzUGVyVmlldzogNSxcclxuICAgIHNwYWNlQmV0d2VlbjogMCxcclxuICAgIGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxyXG59KTtcclxuXHJcbmNvbnN0IHN3aXBlck1vYmlsZU11bHRpcGxlID0gbmV3IFN3aXBlcignLnN3aXBlci1tb2JpbGUtbXVsdGlwbGUnLCB7XHJcbiAgICBsb29wOiB0cnVlLFxyXG5cclxuICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICBlbDogJy5zd2lwZXItcGFnaW5hdGlvbicsXHJcbiAgICB9LFxyXG4gICAgYnJlYWtwb2ludHM6IHtcclxuXHJcbiAgICAgICAgNzY4OiB7XHJcbiAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgNDUwOiB7XHJcbiAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDEuNSxcclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICAzMDA6IHtcclxuICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMS4zLFxyXG5cclxuICAgICAgICB9LFxyXG4gICAgfVxyXG5cclxufSk7XHJcblxyXG5jb25zdCBzd2lwZXJNb2JpbGUgPSBuZXcgU3dpcGVyKCcuc3dpcGVyLW1vYmlsZScsIHtcclxuICAgIGxvb3A6IHRydWUsXHJcbiAgICBzbGlkZXNQZXJWaWV3OjEsXHJcbiAgICBzcGFjZUJldHdlZW46MSxcclxuXHJcbiAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxyXG4gICAgfSxcclxuXHJcbn0pO1xyXG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBnc2FwIGZyb20gJ2dzYXAnO1xuXG5leHBvcnQgY29uc3QgZGVib3VuY2UgPSAoZnVuYywgd2FpdCwgaW1tZWRpYXRlKSA9PiB7XG4gICAgdmFyIHRpbWVvdXQ7XG4gICAgaWYgKHR5cGVvZiBmdW5jICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICAgICAgICB2YXIgbGF0ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgICAgICAgICAgICAgaWYgKCFpbW1lZGlhdGUpIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIGNhbGxOb3cgPSBpbW1lZGlhdGUgJiYgIXRpbWVvdXQ7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCk7XG4gICAgICAgICAgICBpZiAoY2FsbE5vdykgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLndhcm4oJ0EgZnVuY3Rpb24gaXMgdW5kZWZpbmVkISBEZWJvdW5jZSBtaWdodCBub3Qgd29yayBhcyBpbnRlbmRlZDogJywgZnVuYyk7XG4gICAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHRocm90dGxlID0gKGZ1bmMsIGxpbWl0KSA9PiB7XG4gICAgbGV0IGxhc3RGdW5jO1xuICAgIGxldCBsYXN0UmFuO1xuXG4gICAgaWYgKHR5cGVvZiBmdW5jICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXM7XG4gICAgICAgICAgICBjb25zdCBhcmdzID0gYXJndW1lbnRzO1xuXG4gICAgICAgICAgICBpZiAoIWxhc3RSYW4pIHtcbiAgICAgICAgICAgICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgICAgICAgICAgIGxhc3RSYW4gPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQobGFzdEZ1bmMpO1xuXG4gICAgICAgICAgICAgICAgbGFzdEZ1bmMgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChEYXRlLm5vdygpIC0gbGFzdFJhbikgPj0gbGltaXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0UmFuID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIGxpbWl0IC0gKERhdGUubm93KCkgLSBsYXN0UmFuKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdBIGZ1bmN0aW9uIGlzIHVuZGVmaW5lZCEgVGhyb3R0bGUgbWlnaHQgbm90IHdvcmsgYXMgaW50ZW5kZWQ6ICcsIGZ1bmMpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBjb25zdCBsZXJwID0gKHN0YXJ0LCBlbmQsIGFtdCkgPT4ge1xuICAgIHJldHVybiAoMSAtIGFtdCkgKiBzdGFydCArIGFtdCAqIGVuZDtcbn07XG5cbmV4cG9ydCBjb25zdCBjbGFtcCA9IChtaW4sIHZhbCwgbWF4KSA9PiB7XG4gICAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KHZhbCwgbWluKSwgbWF4KTtcbn07XG5cbmV4cG9ydCBjb25zdCBpcmFuZG9tID0gKG1heCkgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTWF0aC5mbG9vcihtYXgpKTtcbmV4cG9ydCBjb25zdCBzZWNvbmRzID0gKG1zKSA9PiBtcyAqIDEwMDA7XG5cbmV4cG9ydCBjb25zdCBtZWRpYVF1ZXJ5ID0gKHF1ZXJ5KSA9PiAod2luZG93Lm1hdGNoTWVkaWEocXVlcnkpKS5tYXRjaGVzO1xuXG5leHBvcnQgY29uc3Qgc3RiU2Nyb2xsVG8gPSAoZWxlLCBzcGVlZCA9IDIwMCkgPT4ge1xuICAgIGlmIChnc2FwKSB7XG4gICAgICAgIGdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVG9QbHVnaW4pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cbiAgICAgICAgZ3NhcC50byh3aW5kb3csIHtcbiAgICAgICAgICAgIGR1cmF0aW9uOiBzcGVlZCAvIDEwMDAsXG4gICAgICAgICAgICBlYXNlOiAnUG93ZXIzLmVhc2VPdXQnLFxuICAgICAgICAgICAgc2Nyb2xsVG86IHtcbiAgICAgICAgICAgICAgICB5OiAkKGVsZSkub2Zmc2V0KCkudG9wXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgICQoW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgZG9jdW1lbnQuYm9keV0pLmFuaW1hdGUoe1xuICAgICAgICAgICAgc2Nyb2xsVG9wOiAkKGVsZSkub2Zmc2V0KCkudG9wXG4gICAgICAgIH0sIHNwZWVkKTtcbiAgICB9XG59O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyAtLS0tLS0tLS0tIEltYWdlIC8gY3NzIGFzc2V0cyAtLS0tLS0tLS0tLS1cblxucmVxdWlyZS5jb250ZXh0KCcuL2Fzc2V0cy8nLCB0cnVlLCAvXFwuKHN2Z3xwbmd8anBlP2cpJC8pO1xucmVxdWlyZSgnLi9hc3NldHMvc3R5bGVzL21haW4uc2NzcycpO1xuXG5jb25zdCBpbmNsdWRlQ29tcG9uZW50ID0gKHNjcmlwdCkgPT4gcmVxdWlyZShgLi9hc3NldHMvc2NyaXB0cy9jb21wb25lbnRzLyR7c2NyaXB0fS5qc2ApO1xuXG4vLyAtLS0tLS0tLS0tLS0tLSBMYXp5IGxvYWQgLS0tLS0tLS0tLS0tLS0tLS1cblxuLypcbiAqIGltcG9ydCBMYXp5SW1hZ2VMb2FkZXIgZnJvbSAnLi9hc3NldHMvc2NyaXB0cy9jb21wb25lbnRzL2xhenlpbWFnZWxvYWRlci5qcyc7XG4gKiBMYXp5SW1hZ2VMb2FkZXIuaW5pdCgpO1xuICovXG5cbi8vIC0tLS0tLS0tLS0tIEN1c3RvbSBzY3JpcHRzIC0tLS0tLS0tLS0tLS0tLVxuaW5jbHVkZUNvbXBvbmVudCgnc2xpZGVyJyk7XG5pbmNsdWRlQ29tcG9uZW50KCduYXZiYXInKTtcbmluY2x1ZGVDb21wb25lbnQoJ3N3aXBlcicpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBnc2FwOyIsIm1vZHVsZS5leHBvcnRzID0galF1ZXJ5OyIsIm1vZHVsZS5leHBvcnRzID0gU3dpcGVyOyJdLCJzb3VyY2VSb290IjoiIn0=