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
var bar = document.querySelectorAll('.drop-bars__bars-box__bar');

if (bar) {
  bar.forEach(function (el) {
    el.addEventListener('click', function (e) {
      if (e.target.parentNode.classList.contains('drop-bars__bars-box__bar')) {
        e.target.parentNode.classList.toggle('bar-active');
      }

      if (e.target.classList.contains('drop-bars__desc')) {
        e.target.parentNode.parentNode.classList.remove('bar-active');
      }
    });
  });
}

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
  disableOnInteraction: false,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cyBzeW5jIFxcLihzdmd8cG5nfGpwZSIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9zdmcvbmV3c2xldHRlci5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMgc3luYyBeXFwuXFwvLipcXC5qcyQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvZHJvcC1iYXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc2NyaXB0cy9jb21wb25lbnRzL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvbGF6eWltYWdlbG9hZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc2NyaXB0cy9jb21wb25lbnRzL25hdmJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvY29tcG9uZW50cy9yZXNvdXJjZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvY29tcG9uZW50cy9zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvc3dpcGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc2NyaXB0cy9jb21wb25lbnRzL3V0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc3R5bGVzL21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZ3NhcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpRdWVyeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIlN3aXBlclwiIl0sIm5hbWVzIjpbImJhciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwidGFyZ2V0IiwicGFyZW50Tm9kZSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwidG9nZ2xlIiwicmVtb3ZlIiwiZG9JbWFnZVByZWxvYWQiLCJ1cmwiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImltYWdlIiwiSW1hZ2UiLCJzcmNzZXQiLCJvbmxvYWQiLCJvbmVycm9yIiwiY2xhbXAiLCJ2YWx1ZSIsIm1pbiIsIm1heCIsIk1hdGgiLCJhc3NlcnQiLCJwcmVkaWNhdGUiLCJtZXNzYWdlIiwiRXJyb3IiLCJMYXp5SW1hZ2VMb2FkZXIiLCJpbWFnZXMiLCJQRU5ESU5HX0NMQVNTIiwiY29uZmlnIiwicm9vdCIsInJvb3RNYXJnaW4iLCJ0aHJlc2hvbGQiLCJUSFJFU0hPTEQiLCJPQlNFUlZFUl9TVVBQT1JURUQiLCJsbExvYWRJbWFnZXNEZWZhdWx0IiwibGxDb3VudCIsImxlbmd0aCIsImxsSW50ZXJzZWN0ZWQiLCJiaW5kIiwibGxPYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiSEFORExFRF9DTEFTUyIsIm9ic2VydmUiLCJkaXNjb25uZWN0IiwiZW50cmllcyIsImVudHJ5IiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJpc0ludGVyc2VjdGluZyIsImxsUHJlbG9hZEltYWdlIiwidW5vYnNlcnZlIiwic3JjIiwiZGF0YXNldCIsIkhlbHBlcnMiLCJ0aGVuIiwibGxUYWdJbWFnZSIsIkFycmF5IiwiZnJvbSIsImltZyIsInF1ZXJ5U2VsZWN0b3IiLCJuZXdJbWciLCJhZGQiLCJMT0FERURfQ0xBU1MiLCJSRVZFQUxfQ0xBU1MiLCJhbHQiLCJhcHBlbmRDaGlsZCIsIndpbmRvdyIsImxsSW5zdGFuY2UiLCJsbERpc2Nvbm5lY3QiLCJuYXZiYXIiLCJtZW51SWNvbiIsIm92ZXJsYXkiLCJ0b2dnbGVOYXZiYXIiLCJwYWdlWU9mZnNldCIsImdzYXAiLCIkIiwicmVzb3VyY2UiLCJTd2lwZXIiLCJzbGlkZXJNb21lbnR1bVJhdGlvIiwiSXNJbml0aWFsaXplZCIsImVsZSIsImhhc0NsYXNzIiwic3dpcGVySW5zdGFuY2VzIiwiY2F0ZWdvcnkiLCJpbnN0YW5jZSIsImluaXQiLCJiaWciLCJiaWdTbGlkZXIiLCJzZXR1cEJpZ1NsaWRlciIsImN1cnJlbnROdW1iZXIiLCJzbGlkZXNQZXJWaWV3Iiwic3BhY2VCZXR3ZWVuIiwiZnJlZU1vZGUiLCJmcmVlTW9kZU1vbWVudHVtUmF0aW8iLCJjZW50ZXJlZFNsaWRlcyIsImxvb3AiLCJvbiIsInNsaWRlQ2hhbmdlIiwiY29uc29sZSIsImxvZyIsImF0dHIiLCJ0ZXh0IiwiYWN0aXZlSW5kZXgiLCJwYXJzZUludCIsInBhZ2luYXRpb24iLCJ0eXBlIiwicHJvZ3Jlc3NiYXJGaWxsQ2xhc3MiLCJtb2RpZmllckNsYXNzIiwicmVuZGVyUHJvZ3Jlc3NiYXIiLCJjYXRlZ29yeVNsaWRlciIsInNldHVwQ2F0ZWdvcnlTbGlkZXIiLCJzd2lwZXJEZXNrdG9wU2luZ2xlIiwiYXV0b3BsYXkiLCJkaXNhYmxlT25JbnRlcmFjdGlvbiIsImNsaWNrYWJsZSIsInN3aXBlckRlc2t0b3BNdWx0aXBsZSIsInN3aXBlck1vYmlsZVNpbmdsZSIsInN3aXBlck1vYmlsZU11bHRpcGxlIiwiYnJlYWtwb2ludHMiLCJkZWJvdW5jZSIsImZ1bmMiLCJ3YWl0IiwiaW1tZWRpYXRlIiwidGltZW91dCIsImNvbnRleHQiLCJhcmdzIiwiYXJndW1lbnRzIiwibGF0ZXIiLCJhcHBseSIsImNhbGxOb3ciLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0Iiwid2FybiIsInRocm90dGxlIiwibGltaXQiLCJsYXN0RnVuYyIsImxhc3RSYW4iLCJEYXRlIiwibm93IiwibGVycCIsInN0YXJ0IiwiZW5kIiwiYW10IiwidmFsIiwiaXJhbmRvbSIsImZsb29yIiwicmFuZG9tIiwic2Vjb25kcyIsIm1zIiwibWVkaWFRdWVyeSIsInF1ZXJ5IiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJzdGJTY3JvbGxUbyIsInNwZWVkIiwicmVnaXN0ZXJQbHVnaW4iLCJTY3JvbGxUb1BsdWdpbiIsInRvIiwiZHVyYXRpb24iLCJlYXNlIiwic2Nyb2xsVG8iLCJ5Iiwib2Zmc2V0IiwidG9wIiwiZG9jdW1lbnRFbGVtZW50IiwiYm9keSIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJyZXF1aXJlIiwiaW5jbHVkZUNvbXBvbmVudCIsInNjcmlwdCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNFOzs7Ozs7Ozs7OztBQ3RCQSxnRDs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUQ7QUFBQSxTQUFZRixzRkFBUSxZQUErQkUsTUFBaEMsU0FBbkI7QUFBQSxDQUF6QixDLENBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBQ0FELGdCQUFnQixDQUFDLFFBQUQsQ0FBaEI7QUFDQUEsZ0JBQWdCLENBQUMsUUFBRCxDQUFoQjtBQUNBQSxnQkFBZ0IsQ0FBQyxRQUFELENBQWhCO0FBQ0FBLGdCQUFnQixDQUFDLFdBQUQsQ0FBaEIsQzs7Ozs7Ozs7Ozs7QUNwQkEsc0I7Ozs7Ozs7Ozs7O0FDQUEsd0I7Ozs7Ozs7Ozs7O0FDQUEsd0IiLCJmaWxlIjoiYXNzZXRzL2pzL21haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwidmFyIG1hcCA9IHtcblx0XCIuL2ltYWdlcy9zdmcvbmV3c2xldHRlci5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3N2Zy9uZXdzbGV0dGVyLnN2Z1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9hc3NldHMgc3luYyByZWN1cnNpdmUgXFxcXC4oc3ZnfHBuZ3xqcGU/ZykkXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi4uL2ltYWdlcy9zdmcvbmV3c2xldHRlci5zdmdcIjsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vZHJvcC1iYXJzLmpzXCI6IFwiLi9zcmMvYXNzZXRzL3NjcmlwdHMvY29tcG9uZW50cy9kcm9wLWJhcnMuanNcIixcblx0XCIuL2hlbHBlcnMuanNcIjogXCIuL3NyYy9hc3NldHMvc2NyaXB0cy9jb21wb25lbnRzL2hlbHBlcnMuanNcIixcblx0XCIuL2xhenlpbWFnZWxvYWRlci5qc1wiOiBcIi4vc3JjL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvbGF6eWltYWdlbG9hZGVyLmpzXCIsXG5cdFwiLi9uYXZiYXIuanNcIjogXCIuL3NyYy9hc3NldHMvc2NyaXB0cy9jb21wb25lbnRzL25hdmJhci5qc1wiLFxuXHRcIi4vcmVzb3VyY2UuanNcIjogXCIuL3NyYy9hc3NldHMvc2NyaXB0cy9jb21wb25lbnRzL3Jlc291cmNlLmpzXCIsXG5cdFwiLi9zbGlkZXIuanNcIjogXCIuL3NyYy9hc3NldHMvc2NyaXB0cy9jb21wb25lbnRzL3NsaWRlci5qc1wiLFxuXHRcIi4vc3dpcGVyLmpzXCI6IFwiLi9zcmMvYXNzZXRzL3NjcmlwdHMvY29tcG9uZW50cy9zd2lwZXIuanNcIixcblx0XCIuL3V0aWxzLmpzXCI6IFwiLi9zcmMvYXNzZXRzL3NjcmlwdHMvY29tcG9uZW50cy91dGlscy5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9hc3NldHMvc2NyaXB0cy9jb21wb25lbnRzIHN5bmMgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLipcXFxcLmpzJFwiOyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXHJcbmxldCBiYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZHJvcC1iYXJzX19iYXJzLWJveF9fYmFyJyk7XHJcblxyXG5pZiAoYmFyKSB7XHJcbiAgICBiYXIuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ2Ryb3AtYmFyc19fYmFycy1ib3hfX2JhcicpKSB7XHJcbiAgICAgICAgICAgICAgICBlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC50b2dnbGUoJ2Jhci1hY3RpdmUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkcm9wLWJhcnNfX2Rlc2MnKSkge1xyXG4gICAgICAgICAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2Jhci1hY3RpdmUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBkb0ltYWdlUHJlbG9hZCA9IHVybCA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaW1hZ2Uuc3Jjc2V0ID0gdXJsO1xuICAgICAgICBpbWFnZS5vbmxvYWQgPSByZXNvbHZlO1xuICAgICAgICBpbWFnZS5vbmVycm9yID0gcmVqZWN0O1xuICAgIH0pO1xufTtcblxuY29uc3QgY2xhbXAgPSAodmFsdWUsIG1pbiwgbWF4KSA9PiBNYXRoLm1heChtaW4sIE1hdGgubWluKG1heCwgdmFsdWUpKTtcblxuY29uc3QgYXNzZXJ0ID0gKHByZWRpY2F0ZSwgbWVzc2FnZSkgPT4ge1xuICAgIGlmIChwcmVkaWNhdGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBhc3NlcnQsIGNsYW1wLCBkb0ltYWdlUHJlbG9hZFxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IEhlbHBlcnMgZnJvbSAnLi9oZWxwZXJzJztcblxuY2xhc3MgTGF6eUltYWdlTG9hZGVyIHtcbiAgICBzdGF0aWMgZ2V0IE9CU0VSVkVSX1NVUFBPUlRFRCAoKSB7XG4gICAgICAgIHJldHVybiAoJ0ludGVyc2VjdGlvbk9ic2VydmVyJyBpbiB3aW5kb3cpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgUEVORElOR19DTEFTUyAoKSB7XG4gICAgICAgIHJldHVybiAnbGF6eS1pbWFnZS0tcGVuZGluZyc7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBIQU5ETEVEX0NMQVNTICgpIHtcbiAgICAgICAgcmV0dXJuICdsYXp5LWltYWdlLS1sb2FkZWQnO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgTE9BREVEX0NMQVNTICgpIHtcbiAgICAgICAgcmV0dXJuICdsYXp5LWltYWdlX19hY3R1YWwnO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgUkVWRUFMX0NMQVNTICgpIHtcbiAgICAgICAgcmV0dXJuICdmYWRlLWluJztcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IFRIUkVTSE9MRCAoKSB7XG4gICAgICAgIHJldHVybiAwLjE7XG4gICAgfVxuXG4gICAgc3RhdGljIGluaXQgKCkge1xuICAgICAgICBpZiAodGhpcy5sbEluc3RhbmNlKSB7XG4gICAgICAgICAgICB0aGlzLmxsSW5zdGFuY2UubGxEaXNjb25uZWN0KCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxsQ291bnQgPSAwO1xuICAgICAgICB0aGlzLmxsSW5zdGFuY2UgPSBuZXcgTGF6eUltYWdlTG9hZGVyKCk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICB2YXIgaW1hZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLiR7TGF6eUltYWdlTG9hZGVyLlBFTkRJTkdfQ0xBU1N9YCk7XG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgICAgICAgIHJvb3Q6IG51bGwsXG4gICAgICAgICAgICByb290TWFyZ2luOiAnNjBweCAwcHgnLFxuICAgICAgICAgICAgdGhyZXNob2xkOiBMYXp5SW1hZ2VMb2FkZXIuVEhSRVNIT0xEXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKCFMYXp5SW1hZ2VMb2FkZXIuT0JTRVJWRVJfU1VQUE9SVEVEKSB7XG4gICAgICAgICAgICB0aGlzLmxsTG9hZEltYWdlc0RlZmF1bHQoaW1hZ2VzKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubGxDb3VudCA9IGltYWdlcy5sZW5ndGg7XG4gICAgICAgIHRoaXMubGxJbnRlcnNlY3RlZCA9IHRoaXMubGxJbnRlcnNlY3RlZC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmxsT2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIodGhpcy5sbEludGVyc2VjdGVkLCBjb25maWcpO1xuXG4gICAgICAgIGltYWdlcy5mb3JFYWNoKGltYWdlID0+IHtcbiAgICAgICAgICAgIGlmIChpbWFnZS5jbGFzc0xpc3QuY29udGFpbnMoTGF6eUltYWdlTG9hZGVyLkhBTkRMRURfQ0xBU1MpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmxsT2JzZXJ2ZXIub2JzZXJ2ZShpbWFnZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGxsRGlzY29ubmVjdCAoKSB7XG4gICAgICAgIGlmICghdGhpcy5sbE9ic2VydmVyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxsT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgIH1cblxuICAgIGxsSW50ZXJzZWN0ZWQgKGVudHJpZXMpIHtcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgaWYgKGVudHJ5LmludGVyc2VjdGlvblJhdGlvIDwgMCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICAgICAgICAgIHRoaXMubGxDb3VudC0tO1xuICAgICAgICAgICAgICAgIHRoaXMubGxQcmVsb2FkSW1hZ2UoZW50cnkudGFyZ2V0KTtcbiAgICAgICAgICAgICAgICB0aGlzLmxsT2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0aGlzLmxsQ291bnQgPiAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxsT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgIH1cblxuICAgIGxsUHJlbG9hZEltYWdlIChpbWFnZSkge1xuICAgICAgICBjb25zdCBzcmMgPSBpbWFnZS5kYXRhc2V0LnNyY3NldDtcbiAgICAgICAgaWYgKCFzcmMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBIZWxwZXJzLmRvSW1hZ2VQcmVsb2FkKHNyYykudGhlbigoKSA9PiB0aGlzLmxsVGFnSW1hZ2UoaW1hZ2UsIHNyYykpO1xuICAgIH1cblxuICAgIGxsTG9hZEltYWdlc0RlZmF1bHQgKGltYWdlcykge1xuICAgICAgICBBcnJheS5mcm9tKGltYWdlcykuZm9yRWFjaChpbWFnZSA9PiB0aGlzLmxsUHJlbG9hZEltYWdlKGltYWdlKSk7XG4gICAgfVxuXG4gICAgbGxUYWdJbWFnZSAoaW1nLCBzcmMpIHtcbiAgICAgICAgY29uc3QgZWwgPSBpbWcucXVlcnlTZWxlY3RvcignLmxhenktaW1hZ2VfX2NvbnRlbnQnKTtcbiAgICAgICAgaWYgKCFlbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFpbWcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBuZXdJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgbmV3SW1nLmNsYXNzTGlzdC5hZGQoTGF6eUltYWdlTG9hZGVyLkxPQURFRF9DTEFTUyk7XG4gICAgICAgIG5ld0ltZy5zcmNzZXQgPSBzcmM7XG4gICAgICAgIG5ld0ltZy5jbGFzc0xpc3QuYWRkKExhenlJbWFnZUxvYWRlci5SRVZFQUxfQ0xBU1MpO1xuICAgICAgICBuZXdJbWcuYWx0ID0gZWwuYWx0O1xuICAgICAgICBpbWcuYXBwZW5kQ2hpbGQobmV3SW1nKTtcblxuICAgICAgICBpbWcuZGF0YXNldC5zcmNzZXQgPSAnJztcbiAgICAgICAgaW1nLmNsYXNzTGlzdC5yZW1vdmUoTGF6eUltYWdlTG9hZGVyLlBFTkRJTkdfQ0xBU1MpO1xuICAgICAgICBpbWcuY2xhc3NMaXN0LmFkZChMYXp5SW1hZ2VMb2FkZXIuSEFORExFRF9DTEFTUyk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMYXp5SW1hZ2VMb2FkZXI7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xyXG5sZXQgbmF2YmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJhcicpO1xyXG5sZXQgbWVudUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2YmFyX19zbWFsbC1tZW51X19pY29uJyk7XHJcbmxldCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJsYXknKTtcclxuXHJcbi8vIGZ1bmN0aW9uc1xyXG5mdW5jdGlvbiB0b2dnbGVOYXZiYXIgKCkge1xyXG4gICAgbmF2YmFyLmNsYXNzTGlzdC50b2dnbGUoJ25hdmJhci1hY3RpdmUnKTtcclxuICAgIG92ZXJsYXkuY2xhc3NMaXN0LnRvZ2dsZSgnb3ZlcmxheS1hY3RpdmUnKTtcclxufVxyXG5cclxuLy8gdG9nZ2xlIG5hdmJhclxyXG5pZiAobWVudUljb24gJiYgbmF2YmFyICYmIG92ZXJsYXkpIHtcclxuICAgIG1lbnVJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlTmF2YmFyKTtcclxuICAgIG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVOYXZiYXIpO1xyXG59XHJcblxyXG4vLyB0b3AgdGV4dCBzbGlkZVxyXG5pZiAobmF2YmFyKSB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xyXG4gICAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPiAyMDApIHtcclxuICAgICAgICAgICAgbmF2YmFyLmNsYXNzTGlzdC5hZGQoJ3RvcC1ib3gtc2xpZGUnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBuYXZiYXIuY2xhc3NMaXN0LnJlbW92ZSgndG9wLWJveC1zbGlkZScpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IGdzYXAgZnJvbSAnZ3NhcCc7XG5cbmlmIChnc2FwKSB7XG4gICAgJChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IHJlc291cmNlID0gJCgnLnJlc291cmNlJyk7XG4gICAgICAgIC8vIGxldCBzd2FwID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKHJlc291cmNlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIC8vIGNvbnN0IGNoYW5nZUNsYXNzZXMgPSAoKSA9PiB7XG4gICAgICAgICAgICAvLyAgICAgbGV0IHJlZCA9ICQoJy5yZXNvdXJjZV9fYmxvY2stcmVkJylbMF07XG4gICAgICAgICAgICAvLyAgICAgbGV0IGJsYWNrID0gJCgnLnJlc291cmNlX19ibG9jay1ibGFjaycpWzBdO1xuXG4gICAgICAgICAgICAvLyAgICAgaWYgKCFzd2FwKSB7XG4gICAgICAgICAgICAvLyAgICAgICAgIHJlZC5jbGFzc0xpc3QuYWRkKCdzd2FwJyk7XG4gICAgICAgICAgICAvLyAgICAgICAgIGJsYWNrLmNsYXNzTGlzdC5hZGQoJ3N3YXAnKTtcbiAgICAgICAgICAgIC8vICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gICAgICAgICByZWQuY2xhc3NMaXN0LnJlbW92ZSgnc3dhcCcpO1xuICAgICAgICAgICAgLy8gICAgICAgICBibGFjay5jbGFzc0xpc3QucmVtb3ZlKCdzd2FwJyk7XG4gICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgLy8gICAgIHN3YXAgPSAhc3dhcDtcbiAgICAgICAgICAgIC8vIH1cblxuICAgICAgICAgICAgLy8gU2Nyb2xsVHJpZ2dlci5jcmVhdGUoe1xuICAgICAgICAgICAgLy8gICAgIHRhcmdldDogJy5yZXNvdXJjZV9fYmxvY2snLFxuICAgICAgICAgICAgLy8gICAgIHN0YXJ0OiAndG9wIHRvcCcsXG4gICAgICAgICAgICAvLyAgICAgbWFya2VyczogdHJ1ZSxcbiAgICAgICAgICAgIC8vICAgICAvLyBlbmQ6IGRvY3VtZW50LmlubmVySGVpZ2h0LFxuICAgICAgICAgICAgLy8gICAgIG9uVG9nZ2xlOiAoKSA9PiBjaGFuZ2VDbGFzc2VzKCksXG4gICAgICAgICAgICAvLyB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgU3dpcGVyIGZyb20gJ3N3aXBlcic7XG4vLyBpbXBvcnQgZ3NhcCBmcm9tICdnc2FwJztcbi8vIGltcG9ydCB7IGRlYm91bmNlLG1lZGlhUXVlcnkgfSBmcm9tICcuL3V0aWxzJztcblxuaWYgKFN3aXBlcikge1xuICAgICQoZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyAtLS0tIEFMTCBTTElERVJTIC0tLS0tXG4gICAgICAgIGNvbnN0IHNsaWRlck1vbWVudHVtUmF0aW8gPSAwLjQ1NTtcbiAgICAgICAgY29uc3QgSXNJbml0aWFsaXplZCA9IChlbGUpID0+IGVsZS5oYXNDbGFzcygnc3dpcGVyLWNvbnRhaW5lci1pbml0aWFsaXplZCcpO1xuICAgICAgICBjb25zdCBzd2lwZXJJbnN0YW5jZXMgPSB7XG4gICAgICAgICAgICBjYXRlZ29yeTogICAgICAgICB7IGluc3RhbmNlOiBudWxsLCBpbml0OiBmYWxzZSB9LFxuICAgICAgICAgICAgYmlnOiAgICAgICAgICAgICAgeyBpbnN0YW5jZTogbnVsbCwgaW5pdDogZmFsc2UgfSxcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBjb25zdCBzd2lwZXJTdGF0ZSA9IChzbGlkZXIsIHN3aXBlckluc3RhbmNlLCBzZXR1cCkgPT4ge1xuICAgICAgICAvLyAgICAgaWYgKG1lZGlhUXVlcnkoJyhtYXgtd2lkdGg6IDk5MXB4KScpKSB7XG4gICAgICAgIC8vICAgICAgICAgaWYgKCFzd2lwZXJJbnN0YW5jZS5pbml0KSB7XG4gICAgICAgIC8vICAgICAgICAgICAgIHN3aXBlckluc3RhbmNlLmluaXQgPSB0cnVlO1xuICAgICAgICAvLyAgICAgICAgICAgICBzZXR1cCgpO1xuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gICAgIGlmIChtZWRpYVF1ZXJ5KCcobWluLXdpZHRoOiA5OTJweCknKSkge1xuICAgICAgICAvLyAgICAgICAgIGlmIChzd2lwZXJJbnN0YW5jZS5pbml0KSB7XG4gICAgICAgIC8vICAgICAgICAgICAgIHN3aXBlckluc3RhbmNlLmluc3RhbmNlLmRlc3Ryb3koKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgc3dpcGVySW5zdGFuY2UuaW5pdCA9IGZhbHNlO1xuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfTtcblxuICAgICAgICAvLyAtLS0tLS0tLSAgQklHIFNMSURFUiAtLS0tLS0tLVxuXG4gICAgICAgIGNvbnN0IGJpZ1NsaWRlciA9ICQoJy5iaWctc2xpZGVyX19zbGlkZXInKTtcblxuICAgICAgICBmdW5jdGlvbiBzZXR1cEJpZ1NsaWRlciAoKSB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50TnVtYmVyID0gJCgnLmJpZy1zbGlkZXJfX2N1cnJlbnQtYWN0aXZlJyk7XG4gICAgICAgICAgICBzd2lwZXJJbnN0YW5jZXMuYmlnLmluc3RhbmNlID0gbmV3IFN3aXBlcihiaWdTbGlkZXJbMF0sIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcbiAgICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDUwLFxuICAgICAgICAgICAgICAgIGZyZWVNb2RlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBmcmVlTW9kZU1vbWVudHVtUmF0aW86IHNsaWRlck1vbWVudHVtUmF0aW8sXG4gICAgICAgICAgICAgICAgY2VudGVyZWRTbGlkZXM6IHRydWUsXG4gICAgICAgICAgICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBzbGlkZUNoYW5nZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN3aXBlckluc3RhbmNlcy5iaWcuaW5zdGFuY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygkKCcuYmlnLXNsaWRlcl9fY3VycmVudC1hY3RpdmUnKS5hdHRyKCdkYXRhLWxlbmd0aCcpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50TnVtYmVyLnRleHQoc3dpcGVySW5zdGFuY2VzLmJpZy5pbnN0YW5jZS5hY3RpdmVJbmRleCAlIHBhcnNlSW50KGN1cnJlbnROdW1iZXIuYXR0cignZGF0YS1sZW5ndGgnKSkgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcGFnaW5hdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICBlbDogJy5iaWctc2xpZGVyX19wcm9ncmVzcycsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdwcm9ncmVzc2JhcicsXG4gICAgICAgICAgICAgICAgICAgIHByb2dyZXNzYmFyRmlsbENsYXNzOiAnYmlnLXNsaWRlcl9fYmFyJyxcbiAgICAgICAgICAgICAgICAgICAgbW9kaWZpZXJDbGFzczogJ2JpZy1zbGlkZXJfX2Jhci0tJyxcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyUHJvZ3Jlc3NiYXI6IGZ1bmN0aW9uIChwcm9ncmVzc2JhckZpbGxDbGFzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICc8c3BhbiBjbGFzcz1cIicgKyBwcm9ncmVzc2JhckZpbGxDbGFzcyArICdcIj48L3NwYW4+JztcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYmlnU2xpZGVyLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGlmICghSXNJbml0aWFsaXplZChiaWdTbGlkZXIpKSB7XG4gICAgICAgICAgICAgICAgc2V0dXBCaWdTbGlkZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIC0tLS0tLS0tIENBVEVHT1JZIFNMSURFUiAtLS0tLS0tLVxuICAgICAgICBjb25zdCBjYXRlZ29yeVNsaWRlciA9ICQoJy5jYXRlZ29yeS1zbGlkZXJfX3NsaWRlcicpO1xuXG4gICAgICAgIGZ1bmN0aW9uIHNldHVwQ2F0ZWdvcnlTbGlkZXIgKCkge1xuICAgICAgICAgICAgc3dpcGVySW5zdGFuY2VzLmNhdGVnb3J5Lmluc3RhbmNlID0gbmV3IFN3aXBlcihjYXRlZ29yeVNsaWRlclswXSwgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogJ2F1dG8nLFxuICAgICAgICAgICAgICAgIGZyZWVNb2RlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGZyZWVNb2RlTW9tZW50dW1SYXRpbzogc2xpZGVyTW9tZW50dW1SYXRpbyxcbiAgICAgICAgICAgICAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGVsOiAnLmNhdGVnb3J5LXNsaWRlcl9fcHJvZ3Jlc3MnLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAncHJvZ3Jlc3NiYXInLFxuICAgICAgICAgICAgICAgICAgICBwcm9ncmVzc2JhckZpbGxDbGFzczogJ2NhdGVnb3J5LXNsaWRlcl9fYmFyJyxcbiAgICAgICAgICAgICAgICAgICAgbW9kaWZpZXJDbGFzczogJ2NhdGVnb3J5LXNsaWRlcl9fYmFyLS0nLFxuICAgICAgICAgICAgICAgICAgICByZW5kZXJQcm9ncmVzc2JhcjogZnVuY3Rpb24gKHByb2dyZXNzYmFyRmlsbENsYXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJzxzcGFuIGNsYXNzPVwiJyArIHByb2dyZXNzYmFyRmlsbENsYXNzICsgJ1wiPjwvc3Bhbj4nO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNhdGVnb3J5U2xpZGVyLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGlmICghSXNJbml0aWFsaXplZChjYXRlZ29yeVNsaWRlcikpIHtcbiAgICAgICAgICAgICAgICBzZXR1cENhdGVnb3J5U2xpZGVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXHJcbmltcG9ydCBTd2lwZXIgZnJvbSAnc3dpcGVyJztcclxuXHJcbmNvbnN0IHN3aXBlckRlc2t0b3BTaW5nbGUgPSBuZXcgU3dpcGVyKCcuc3dpcGVyLWRlc2t0b3Atc2luZ2xlJywge1xyXG4gICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgIHNwYWNlQmV0d2VlbjogMSxcclxuICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlLFxyXG5cclxuICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICBlbDogJy5zd2lwZXItcGFnaW5hdGlvbicsXHJcbiAgICAgICAgY2xpY2thYmxlOiB0cnVlXHJcbiAgICB9LFxyXG59KTtcclxuXHJcbmNvbnN0IHN3aXBlckRlc2t0b3BNdWx0aXBsZSA9IG5ldyBTd2lwZXIoJy5zd2lwZXItZGVza3RvcC1tdWx0aXBsZScsIHtcclxuICAgIHNsaWRlc1BlclZpZXc6IDUsXHJcbiAgICBzcGFjZUJldHdlZW46IDEsXHJcbiAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgIGxvb3A6IHRydWUsXHJcblxyXG4gICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICAgIGVsOiAnLnN3aXBlci1wYWdpbmF0aW9uJyxcclxuICAgICAgICBjbGlja2FibGU6IHRydWVcclxuICAgIH0sXHJcbn0pO1xyXG5cclxuY29uc3Qgc3dpcGVyTW9iaWxlU2luZ2xlID0gbmV3IFN3aXBlcignLnN3aXBlci1tb2JpbGUtc2luZ2xlJywge1xyXG4gICAgbG9vcDogdHJ1ZSxcclxuICAgIHNsaWRlc1BlclZpZXc6MSxcclxuICAgIHNwYWNlQmV0d2VlbjoxLFxyXG5cclxuICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICBlbDogJy5zd2lwZXItcGFnaW5hdGlvbicsXHJcbiAgICB9LFxyXG5cclxufSk7XHJcblxyXG5jb25zdCBzd2lwZXJNb2JpbGVNdWx0aXBsZSA9IG5ldyBTd2lwZXIoJy5zd2lwZXItbW9iaWxlLW11bHRpcGxlJywge1xyXG4gICAgbG9vcDogdHJ1ZSxcclxuICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICBlbDogJy5zd2lwZXItcGFnaW5hdGlvbicsXHJcbiAgICB9LFxyXG4gICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICA3Njg6IHtcclxuICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgICB9LFxyXG4gICAgICAgIDQ1MDoge1xyXG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLjUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAzMDA6IHtcclxuICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMS4zLFxyXG4gICAgICAgIH0sXHJcbiAgICB9XHJcblxyXG59KTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgZ3NhcCBmcm9tICdnc2FwJztcblxuZXhwb3J0IGNvbnN0IGRlYm91bmNlID0gKGZ1bmMsIHdhaXQsIGltbWVkaWF0ZSkgPT4ge1xuICAgIHZhciB0aW1lb3V0O1xuICAgIGlmICh0eXBlb2YgZnVuYyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgICAgICAgIHZhciBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgICAgICAgdmFyIGxhdGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgICAgICAgICAgICAgIGlmICghaW1tZWRpYXRlKSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBjYWxsTm93ID0gaW1tZWRpYXRlICYmICF0aW1lb3V0O1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xuICAgICAgICAgICAgaWYgKGNhbGxOb3cpIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdBIGZ1bmN0aW9uIGlzIHVuZGVmaW5lZCEgRGVib3VuY2UgbWlnaHQgbm90IHdvcmsgYXMgaW50ZW5kZWQ6ICcsIGZ1bmMpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBjb25zdCB0aHJvdHRsZSA9IChmdW5jLCBsaW1pdCkgPT4ge1xuICAgIGxldCBsYXN0RnVuYztcbiAgICBsZXQgbGFzdFJhbjtcblxuICAgIGlmICh0eXBlb2YgZnVuYyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzO1xuICAgICAgICAgICAgY29uc3QgYXJncyA9IGFyZ3VtZW50cztcblxuICAgICAgICAgICAgaWYgKCFsYXN0UmFuKSB7XG4gICAgICAgICAgICAgICAgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgICAgICAgICAgICBsYXN0UmFuID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGxhc3RGdW5jKTtcblxuICAgICAgICAgICAgICAgIGxhc3RGdW5jID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoRGF0ZS5ub3coKSAtIGxhc3RSYW4pID49IGxpbWl0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFzdFJhbiA9IERhdGUubm93KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCBsaW1pdCAtIChEYXRlLm5vdygpIC0gbGFzdFJhbikpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUud2FybignQSBmdW5jdGlvbiBpcyB1bmRlZmluZWQhIFRocm90dGxlIG1pZ2h0IG5vdCB3b3JrIGFzIGludGVuZGVkOiAnLCBmdW5jKTtcbiAgICB9XG59O1xuXG5leHBvcnQgY29uc3QgbGVycCA9IChzdGFydCwgZW5kLCBhbXQpID0+IHtcbiAgICByZXR1cm4gKDEgLSBhbXQpICogc3RhcnQgKyBhbXQgKiBlbmQ7XG59O1xuXG5leHBvcnQgY29uc3QgY2xhbXAgPSAobWluLCB2YWwsIG1heCkgPT4ge1xuICAgIHJldHVybiBNYXRoLm1pbihNYXRoLm1heCh2YWwsIG1pbiksIG1heCk7XG59O1xuXG5leHBvcnQgY29uc3QgaXJhbmRvbSA9IChtYXgpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGguZmxvb3IobWF4KSk7XG5leHBvcnQgY29uc3Qgc2Vjb25kcyA9IChtcykgPT4gbXMgKiAxMDAwO1xuXG5leHBvcnQgY29uc3QgbWVkaWFRdWVyeSA9IChxdWVyeSkgPT4gKHdpbmRvdy5tYXRjaE1lZGlhKHF1ZXJ5KSkubWF0Y2hlcztcblxuZXhwb3J0IGNvbnN0IHN0YlNjcm9sbFRvID0gKGVsZSwgc3BlZWQgPSAyMDApID0+IHtcbiAgICBpZiAoZ3NhcCkge1xuICAgICAgICBnc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRvUGx1Z2luKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG4gICAgICAgIGdzYXAudG8od2luZG93LCB7XG4gICAgICAgICAgICBkdXJhdGlvbjogc3BlZWQgLyAxMDAwLFxuICAgICAgICAgICAgZWFzZTogJ1Bvd2VyMy5lYXNlT3V0JyxcbiAgICAgICAgICAgIHNjcm9sbFRvOiB7XG4gICAgICAgICAgICAgICAgeTogJChlbGUpLm9mZnNldCgpLnRvcFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAkKFtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIGRvY3VtZW50LmJvZHldKS5hbmltYXRlKHtcbiAgICAgICAgICAgIHNjcm9sbFRvcDogJChlbGUpLm9mZnNldCgpLnRvcFxuICAgICAgICB9LCBzcGVlZCk7XG4gICAgfVxufTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIid1c2Ugc3RyaWN0JztcblxuLy8gLS0tLS0tLS0tLSBJbWFnZSAvIGNzcyBhc3NldHMgLS0tLS0tLS0tLS0tXG5cbnJlcXVpcmUuY29udGV4dCgnLi9hc3NldHMvJywgdHJ1ZSwgL1xcLihzdmd8cG5nfGpwZT9nKSQvKTtcbnJlcXVpcmUoJy4vYXNzZXRzL3N0eWxlcy9tYWluLnNjc3MnKTtcblxuY29uc3QgaW5jbHVkZUNvbXBvbmVudCA9IChzY3JpcHQpID0+IHJlcXVpcmUoYC4vYXNzZXRzL3NjcmlwdHMvY29tcG9uZW50cy8ke3NjcmlwdH0uanNgKTtcblxuLy8gLS0tLS0tLS0tLS0tLS0gTGF6eSBsb2FkIC0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qXG4gKiBpbXBvcnQgTGF6eUltYWdlTG9hZGVyIGZyb20gJy4vYXNzZXRzL3NjcmlwdHMvY29tcG9uZW50cy9sYXp5aW1hZ2Vsb2FkZXIuanMnO1xuICogTGF6eUltYWdlTG9hZGVyLmluaXQoKTtcbiAqL1xuXG4vLyAtLS0tLS0tLS0tLSBDdXN0b20gc2NyaXB0cyAtLS0tLS0tLS0tLS0tLS1cbmluY2x1ZGVDb21wb25lbnQoJ3NsaWRlcicpO1xuaW5jbHVkZUNvbXBvbmVudCgnbmF2YmFyJyk7XG5pbmNsdWRlQ29tcG9uZW50KCdzd2lwZXInKTtcbmluY2x1ZGVDb21wb25lbnQoJ2Ryb3AtYmFycycpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBnc2FwOyIsIm1vZHVsZS5leHBvcnRzID0galF1ZXJ5OyIsIm1vZHVsZS5leHBvcnRzID0gU3dpcGVyOyJdLCJzb3VyY2VSb290IjoiIn0=