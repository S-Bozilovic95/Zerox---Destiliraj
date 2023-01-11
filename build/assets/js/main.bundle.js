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
var tab = document.querySelectorAll('.drop-bars__bars-box__bar__tab'); // /functions

function toggleBar(value) {
  value.forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.target.parentNode.classList.toggle('bar-active');
    });
  });
} // toggle bars


if (tab) {
  toggleBar(tab);
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
  autoplay: {
    autoplay: true,
    disableOnInteraction: false
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
});
var swiperDesktopMultiple = new swiper__WEBPACK_IMPORTED_MODULE_0___default.a('.swiper-desktop-multiple', {
  slidesPerView: 5,
  spaceBetween: 1,
  loop: true,
  autoplay: {
    autoplay: true,
    disableOnInteraction: false
  },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cyBzeW5jIFxcLihzdmd8cG5nfGpwZSIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9zdmcvbmV3c2xldHRlci5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMgc3luYyBeXFwuXFwvLipcXC5qcyQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvZHJvcC1iYXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc2NyaXB0cy9jb21wb25lbnRzL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvbGF6eWltYWdlbG9hZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc2NyaXB0cy9jb21wb25lbnRzL25hdmJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvY29tcG9uZW50cy9yZXNvdXJjZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvY29tcG9uZW50cy9zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvc3dpcGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc2NyaXB0cy9jb21wb25lbnRzL3V0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc3R5bGVzL21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZ3NhcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpRdWVyeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIlN3aXBlclwiIl0sIm5hbWVzIjpbInRhYiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInRvZ2dsZUJhciIsInZhbHVlIiwiZm9yRWFjaCIsImVsIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJ0YXJnZXQiLCJwYXJlbnROb2RlIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiZG9JbWFnZVByZWxvYWQiLCJ1cmwiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImltYWdlIiwiSW1hZ2UiLCJzcmNzZXQiLCJvbmxvYWQiLCJvbmVycm9yIiwiY2xhbXAiLCJtaW4iLCJtYXgiLCJNYXRoIiwiYXNzZXJ0IiwicHJlZGljYXRlIiwibWVzc2FnZSIsIkVycm9yIiwiTGF6eUltYWdlTG9hZGVyIiwiaW1hZ2VzIiwiUEVORElOR19DTEFTUyIsImNvbmZpZyIsInJvb3QiLCJyb290TWFyZ2luIiwidGhyZXNob2xkIiwiVEhSRVNIT0xEIiwiT0JTRVJWRVJfU1VQUE9SVEVEIiwibGxMb2FkSW1hZ2VzRGVmYXVsdCIsImxsQ291bnQiLCJsZW5ndGgiLCJsbEludGVyc2VjdGVkIiwiYmluZCIsImxsT2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImNvbnRhaW5zIiwiSEFORExFRF9DTEFTUyIsIm9ic2VydmUiLCJkaXNjb25uZWN0IiwiZW50cmllcyIsImVudHJ5IiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJpc0ludGVyc2VjdGluZyIsImxsUHJlbG9hZEltYWdlIiwidW5vYnNlcnZlIiwic3JjIiwiZGF0YXNldCIsIkhlbHBlcnMiLCJ0aGVuIiwibGxUYWdJbWFnZSIsIkFycmF5IiwiZnJvbSIsImltZyIsInF1ZXJ5U2VsZWN0b3IiLCJuZXdJbWciLCJhZGQiLCJMT0FERURfQ0xBU1MiLCJSRVZFQUxfQ0xBU1MiLCJhbHQiLCJhcHBlbmRDaGlsZCIsInJlbW92ZSIsIndpbmRvdyIsImxsSW5zdGFuY2UiLCJsbERpc2Nvbm5lY3QiLCJuYXZiYXIiLCJtZW51SWNvbiIsIm92ZXJsYXkiLCJ0b2dnbGVOYXZiYXIiLCJwYWdlWU9mZnNldCIsImdzYXAiLCIkIiwicmVzb3VyY2UiLCJTd2lwZXIiLCJzbGlkZXJNb21lbnR1bVJhdGlvIiwiSXNJbml0aWFsaXplZCIsImVsZSIsImhhc0NsYXNzIiwic3dpcGVySW5zdGFuY2VzIiwiY2F0ZWdvcnkiLCJpbnN0YW5jZSIsImluaXQiLCJiaWciLCJiaWdTbGlkZXIiLCJzZXR1cEJpZ1NsaWRlciIsImN1cnJlbnROdW1iZXIiLCJzbGlkZXNQZXJWaWV3Iiwic3BhY2VCZXR3ZWVuIiwiZnJlZU1vZGUiLCJmcmVlTW9kZU1vbWVudHVtUmF0aW8iLCJjZW50ZXJlZFNsaWRlcyIsImxvb3AiLCJvbiIsInNsaWRlQ2hhbmdlIiwiY29uc29sZSIsImxvZyIsImF0dHIiLCJ0ZXh0IiwiYWN0aXZlSW5kZXgiLCJwYXJzZUludCIsInBhZ2luYXRpb24iLCJ0eXBlIiwicHJvZ3Jlc3NiYXJGaWxsQ2xhc3MiLCJtb2RpZmllckNsYXNzIiwicmVuZGVyUHJvZ3Jlc3NiYXIiLCJjYXRlZ29yeVNsaWRlciIsInNldHVwQ2F0ZWdvcnlTbGlkZXIiLCJzd2lwZXJEZXNrdG9wU2luZ2xlIiwiYXV0b3BsYXkiLCJkaXNhYmxlT25JbnRlcmFjdGlvbiIsImNsaWNrYWJsZSIsInN3aXBlckRlc2t0b3BNdWx0aXBsZSIsInN3aXBlck1vYmlsZVNpbmdsZSIsInN3aXBlck1vYmlsZU11bHRpcGxlIiwiYnJlYWtwb2ludHMiLCJkZWJvdW5jZSIsImZ1bmMiLCJ3YWl0IiwiaW1tZWRpYXRlIiwidGltZW91dCIsImNvbnRleHQiLCJhcmdzIiwiYXJndW1lbnRzIiwibGF0ZXIiLCJhcHBseSIsImNhbGxOb3ciLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0Iiwid2FybiIsInRocm90dGxlIiwibGltaXQiLCJsYXN0RnVuYyIsImxhc3RSYW4iLCJEYXRlIiwibm93IiwibGVycCIsInN0YXJ0IiwiZW5kIiwiYW10IiwidmFsIiwiaXJhbmRvbSIsImZsb29yIiwicmFuZG9tIiwic2Vjb25kcyIsIm1zIiwibWVkaWFRdWVyeSIsInF1ZXJ5IiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJzdGJTY3JvbGxUbyIsInNwZWVkIiwicmVnaXN0ZXJQbHVnaW4iLCJTY3JvbGxUb1BsdWdpbiIsInRvIiwiZHVyYXRpb24iLCJlYXNlIiwic2Nyb2xsVG8iLCJ5Iiwib2Zmc2V0IiwidG9wIiwiZG9jdW1lbnRFbGVtZW50IiwiYm9keSIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJyZXF1aXJlIiwiaW5jbHVkZUNvbXBvbmVudCIsInNjcmlwdCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNFOzs7Ozs7Ozs7OztBQ3RCQSxnRDs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QkFBZ0IsQ0FBQyxRQUFELENBQWhCO0FBQ0FBLGdCQUFnQixDQUFDLFFBQUQsQ0FBaEI7QUFDQUEsZ0JBQWdCLENBQUMsUUFBRCxDQUFoQjtBQUNBQSxnQkFBZ0IsQ0FBQyxXQUFELENBQWhCLEM7Ozs7Ozs7Ozs7O0FDcEJBLHNCOzs7Ozs7Ozs7OztBQ0FBLHdCOzs7Ozs7Ozs7OztBQ0FBLHdCIiwiZmlsZSI6ImFzc2V0cy9qcy9tYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsInZhciBtYXAgPSB7XG5cdFwiLi9pbWFnZXMvc3ZnL25ld3NsZXR0ZXIuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9zdmcvbmV3c2xldHRlci5zdmdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvYXNzZXRzIHN5bmMgcmVjdXJzaXZlIFxcXFwuKHN2Z3xwbmd8anBlP2cpJFwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIuLi9pbWFnZXMvc3ZnL25ld3NsZXR0ZXIuc3ZnXCI7IiwidmFyIG1hcCA9IHtcblx0XCIuL2Ryb3AtYmFycy5qc1wiOiBcIi4vc3JjL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvZHJvcC1iYXJzLmpzXCIsXG5cdFwiLi9oZWxwZXJzLmpzXCI6IFwiLi9zcmMvYXNzZXRzL3NjcmlwdHMvY29tcG9uZW50cy9oZWxwZXJzLmpzXCIsXG5cdFwiLi9sYXp5aW1hZ2Vsb2FkZXIuanNcIjogXCIuL3NyYy9hc3NldHMvc2NyaXB0cy9jb21wb25lbnRzL2xhenlpbWFnZWxvYWRlci5qc1wiLFxuXHRcIi4vbmF2YmFyLmpzXCI6IFwiLi9zcmMvYXNzZXRzL3NjcmlwdHMvY29tcG9uZW50cy9uYXZiYXIuanNcIixcblx0XCIuL3Jlc291cmNlLmpzXCI6IFwiLi9zcmMvYXNzZXRzL3NjcmlwdHMvY29tcG9uZW50cy9yZXNvdXJjZS5qc1wiLFxuXHRcIi4vc2xpZGVyLmpzXCI6IFwiLi9zcmMvYXNzZXRzL3NjcmlwdHMvY29tcG9uZW50cy9zbGlkZXIuanNcIixcblx0XCIuL3N3aXBlci5qc1wiOiBcIi4vc3JjL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvc3dpcGVyLmpzXCIsXG5cdFwiLi91dGlscy5qc1wiOiBcIi4vc3JjL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvdXRpbHMuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvYXNzZXRzL3NjcmlwdHMvY29tcG9uZW50cyBzeW5jIHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qXFxcXC5qcyRcIjsiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xyXG5sZXQgdGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRyb3AtYmFyc19fYmFycy1ib3hfX2Jhcl9fdGFiJyk7XHJcblxyXG4vLyAvZnVuY3Rpb25zXHJcbmZ1bmN0aW9uIHRvZ2dsZUJhciAodmFsdWUpIHtcclxuICAgIHZhbHVlLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QudG9nZ2xlKCdiYXItYWN0aXZlJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy8gdG9nZ2xlIGJhcnNcclxuaWYgKHRhYikge1xyXG4gICAgdG9nZ2xlQmFyKHRhYik7XHJcbn1cclxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBkb0ltYWdlUHJlbG9hZCA9IHVybCA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaW1hZ2Uuc3Jjc2V0ID0gdXJsO1xuICAgICAgICBpbWFnZS5vbmxvYWQgPSByZXNvbHZlO1xuICAgICAgICBpbWFnZS5vbmVycm9yID0gcmVqZWN0O1xuICAgIH0pO1xufTtcblxuY29uc3QgY2xhbXAgPSAodmFsdWUsIG1pbiwgbWF4KSA9PiBNYXRoLm1heChtaW4sIE1hdGgubWluKG1heCwgdmFsdWUpKTtcblxuY29uc3QgYXNzZXJ0ID0gKHByZWRpY2F0ZSwgbWVzc2FnZSkgPT4ge1xuICAgIGlmIChwcmVkaWNhdGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBhc3NlcnQsIGNsYW1wLCBkb0ltYWdlUHJlbG9hZFxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IEhlbHBlcnMgZnJvbSAnLi9oZWxwZXJzJztcblxuY2xhc3MgTGF6eUltYWdlTG9hZGVyIHtcbiAgICBzdGF0aWMgZ2V0IE9CU0VSVkVSX1NVUFBPUlRFRCAoKSB7XG4gICAgICAgIHJldHVybiAoJ0ludGVyc2VjdGlvbk9ic2VydmVyJyBpbiB3aW5kb3cpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgUEVORElOR19DTEFTUyAoKSB7XG4gICAgICAgIHJldHVybiAnbGF6eS1pbWFnZS0tcGVuZGluZyc7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBIQU5ETEVEX0NMQVNTICgpIHtcbiAgICAgICAgcmV0dXJuICdsYXp5LWltYWdlLS1sb2FkZWQnO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgTE9BREVEX0NMQVNTICgpIHtcbiAgICAgICAgcmV0dXJuICdsYXp5LWltYWdlX19hY3R1YWwnO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgUkVWRUFMX0NMQVNTICgpIHtcbiAgICAgICAgcmV0dXJuICdmYWRlLWluJztcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IFRIUkVTSE9MRCAoKSB7XG4gICAgICAgIHJldHVybiAwLjE7XG4gICAgfVxuXG4gICAgc3RhdGljIGluaXQgKCkge1xuICAgICAgICBpZiAodGhpcy5sbEluc3RhbmNlKSB7XG4gICAgICAgICAgICB0aGlzLmxsSW5zdGFuY2UubGxEaXNjb25uZWN0KCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxsQ291bnQgPSAwO1xuICAgICAgICB0aGlzLmxsSW5zdGFuY2UgPSBuZXcgTGF6eUltYWdlTG9hZGVyKCk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICB2YXIgaW1hZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLiR7TGF6eUltYWdlTG9hZGVyLlBFTkRJTkdfQ0xBU1N9YCk7XG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgICAgICAgIHJvb3Q6IG51bGwsXG4gICAgICAgICAgICByb290TWFyZ2luOiAnNjBweCAwcHgnLFxuICAgICAgICAgICAgdGhyZXNob2xkOiBMYXp5SW1hZ2VMb2FkZXIuVEhSRVNIT0xEXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKCFMYXp5SW1hZ2VMb2FkZXIuT0JTRVJWRVJfU1VQUE9SVEVEKSB7XG4gICAgICAgICAgICB0aGlzLmxsTG9hZEltYWdlc0RlZmF1bHQoaW1hZ2VzKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubGxDb3VudCA9IGltYWdlcy5sZW5ndGg7XG4gICAgICAgIHRoaXMubGxJbnRlcnNlY3RlZCA9IHRoaXMubGxJbnRlcnNlY3RlZC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmxsT2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIodGhpcy5sbEludGVyc2VjdGVkLCBjb25maWcpO1xuXG4gICAgICAgIGltYWdlcy5mb3JFYWNoKGltYWdlID0+IHtcbiAgICAgICAgICAgIGlmIChpbWFnZS5jbGFzc0xpc3QuY29udGFpbnMoTGF6eUltYWdlTG9hZGVyLkhBTkRMRURfQ0xBU1MpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmxsT2JzZXJ2ZXIub2JzZXJ2ZShpbWFnZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGxsRGlzY29ubmVjdCAoKSB7XG4gICAgICAgIGlmICghdGhpcy5sbE9ic2VydmVyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxsT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgIH1cblxuICAgIGxsSW50ZXJzZWN0ZWQgKGVudHJpZXMpIHtcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgaWYgKGVudHJ5LmludGVyc2VjdGlvblJhdGlvIDwgMCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICAgICAgICAgIHRoaXMubGxDb3VudC0tO1xuICAgICAgICAgICAgICAgIHRoaXMubGxQcmVsb2FkSW1hZ2UoZW50cnkudGFyZ2V0KTtcbiAgICAgICAgICAgICAgICB0aGlzLmxsT2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0aGlzLmxsQ291bnQgPiAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxsT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgIH1cblxuICAgIGxsUHJlbG9hZEltYWdlIChpbWFnZSkge1xuICAgICAgICBjb25zdCBzcmMgPSBpbWFnZS5kYXRhc2V0LnNyY3NldDtcbiAgICAgICAgaWYgKCFzcmMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBIZWxwZXJzLmRvSW1hZ2VQcmVsb2FkKHNyYykudGhlbigoKSA9PiB0aGlzLmxsVGFnSW1hZ2UoaW1hZ2UsIHNyYykpO1xuICAgIH1cblxuICAgIGxsTG9hZEltYWdlc0RlZmF1bHQgKGltYWdlcykge1xuICAgICAgICBBcnJheS5mcm9tKGltYWdlcykuZm9yRWFjaChpbWFnZSA9PiB0aGlzLmxsUHJlbG9hZEltYWdlKGltYWdlKSk7XG4gICAgfVxuXG4gICAgbGxUYWdJbWFnZSAoaW1nLCBzcmMpIHtcbiAgICAgICAgY29uc3QgZWwgPSBpbWcucXVlcnlTZWxlY3RvcignLmxhenktaW1hZ2VfX2NvbnRlbnQnKTtcbiAgICAgICAgaWYgKCFlbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFpbWcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBuZXdJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgbmV3SW1nLmNsYXNzTGlzdC5hZGQoTGF6eUltYWdlTG9hZGVyLkxPQURFRF9DTEFTUyk7XG4gICAgICAgIG5ld0ltZy5zcmNzZXQgPSBzcmM7XG4gICAgICAgIG5ld0ltZy5jbGFzc0xpc3QuYWRkKExhenlJbWFnZUxvYWRlci5SRVZFQUxfQ0xBU1MpO1xuICAgICAgICBuZXdJbWcuYWx0ID0gZWwuYWx0O1xuICAgICAgICBpbWcuYXBwZW5kQ2hpbGQobmV3SW1nKTtcblxuICAgICAgICBpbWcuZGF0YXNldC5zcmNzZXQgPSAnJztcbiAgICAgICAgaW1nLmNsYXNzTGlzdC5yZW1vdmUoTGF6eUltYWdlTG9hZGVyLlBFTkRJTkdfQ0xBU1MpO1xuICAgICAgICBpbWcuY2xhc3NMaXN0LmFkZChMYXp5SW1hZ2VMb2FkZXIuSEFORExFRF9DTEFTUyk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMYXp5SW1hZ2VMb2FkZXI7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xyXG5sZXQgbmF2YmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJhcicpO1xyXG5sZXQgbWVudUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2YmFyX19zbWFsbC1tZW51X19pY29uJyk7XHJcbmxldCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJsYXknKTtcclxuXHJcbi8vIGZ1bmN0aW9uc1xyXG5mdW5jdGlvbiB0b2dnbGVOYXZiYXIgKCkge1xyXG4gICAgbmF2YmFyLmNsYXNzTGlzdC50b2dnbGUoJ25hdmJhci1hY3RpdmUnKTtcclxuICAgIG92ZXJsYXkuY2xhc3NMaXN0LnRvZ2dsZSgnb3ZlcmxheS1hY3RpdmUnKTtcclxufVxyXG5cclxuLy8gdG9nZ2xlIG5hdmJhclxyXG5pZiAobWVudUljb24gJiYgbmF2YmFyICYmIG92ZXJsYXkpIHtcclxuICAgIG1lbnVJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlTmF2YmFyKTtcclxuICAgIG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVOYXZiYXIpO1xyXG59XHJcblxyXG4vLyB0b3AgdGV4dCBzbGlkZVxyXG5pZiAobmF2YmFyKSB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xyXG4gICAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPiAyMDApIHtcclxuICAgICAgICAgICAgbmF2YmFyLmNsYXNzTGlzdC5hZGQoJ3RvcC1ib3gtc2xpZGUnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBuYXZiYXIuY2xhc3NMaXN0LnJlbW92ZSgndG9wLWJveC1zbGlkZScpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IGdzYXAgZnJvbSAnZ3NhcCc7XG5cbmlmIChnc2FwKSB7XG4gICAgJChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IHJlc291cmNlID0gJCgnLnJlc291cmNlJyk7XG4gICAgICAgIC8vIGxldCBzd2FwID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKHJlc291cmNlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIC8vIGNvbnN0IGNoYW5nZUNsYXNzZXMgPSAoKSA9PiB7XG4gICAgICAgICAgICAvLyAgICAgbGV0IHJlZCA9ICQoJy5yZXNvdXJjZV9fYmxvY2stcmVkJylbMF07XG4gICAgICAgICAgICAvLyAgICAgbGV0IGJsYWNrID0gJCgnLnJlc291cmNlX19ibG9jay1ibGFjaycpWzBdO1xuXG4gICAgICAgICAgICAvLyAgICAgaWYgKCFzd2FwKSB7XG4gICAgICAgICAgICAvLyAgICAgICAgIHJlZC5jbGFzc0xpc3QuYWRkKCdzd2FwJyk7XG4gICAgICAgICAgICAvLyAgICAgICAgIGJsYWNrLmNsYXNzTGlzdC5hZGQoJ3N3YXAnKTtcbiAgICAgICAgICAgIC8vICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gICAgICAgICByZWQuY2xhc3NMaXN0LnJlbW92ZSgnc3dhcCcpO1xuICAgICAgICAgICAgLy8gICAgICAgICBibGFjay5jbGFzc0xpc3QucmVtb3ZlKCdzd2FwJyk7XG4gICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgLy8gICAgIHN3YXAgPSAhc3dhcDtcbiAgICAgICAgICAgIC8vIH1cblxuICAgICAgICAgICAgLy8gU2Nyb2xsVHJpZ2dlci5jcmVhdGUoe1xuICAgICAgICAgICAgLy8gICAgIHRhcmdldDogJy5yZXNvdXJjZV9fYmxvY2snLFxuICAgICAgICAgICAgLy8gICAgIHN0YXJ0OiAndG9wIHRvcCcsXG4gICAgICAgICAgICAvLyAgICAgbWFya2VyczogdHJ1ZSxcbiAgICAgICAgICAgIC8vICAgICAvLyBlbmQ6IGRvY3VtZW50LmlubmVySGVpZ2h0LFxuICAgICAgICAgICAgLy8gICAgIG9uVG9nZ2xlOiAoKSA9PiBjaGFuZ2VDbGFzc2VzKCksXG4gICAgICAgICAgICAvLyB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgU3dpcGVyIGZyb20gJ3N3aXBlcic7XG4vLyBpbXBvcnQgZ3NhcCBmcm9tICdnc2FwJztcbi8vIGltcG9ydCB7IGRlYm91bmNlLG1lZGlhUXVlcnkgfSBmcm9tICcuL3V0aWxzJztcblxuaWYgKFN3aXBlcikge1xuICAgICQoZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyAtLS0tIEFMTCBTTElERVJTIC0tLS0tXG4gICAgICAgIGNvbnN0IHNsaWRlck1vbWVudHVtUmF0aW8gPSAwLjQ1NTtcbiAgICAgICAgY29uc3QgSXNJbml0aWFsaXplZCA9IChlbGUpID0+IGVsZS5oYXNDbGFzcygnc3dpcGVyLWNvbnRhaW5lci1pbml0aWFsaXplZCcpO1xuICAgICAgICBjb25zdCBzd2lwZXJJbnN0YW5jZXMgPSB7XG4gICAgICAgICAgICBjYXRlZ29yeTogICAgICAgICB7IGluc3RhbmNlOiBudWxsLCBpbml0OiBmYWxzZSB9LFxuICAgICAgICAgICAgYmlnOiAgICAgICAgICAgICAgeyBpbnN0YW5jZTogbnVsbCwgaW5pdDogZmFsc2UgfSxcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBjb25zdCBzd2lwZXJTdGF0ZSA9IChzbGlkZXIsIHN3aXBlckluc3RhbmNlLCBzZXR1cCkgPT4ge1xuICAgICAgICAvLyAgICAgaWYgKG1lZGlhUXVlcnkoJyhtYXgtd2lkdGg6IDk5MXB4KScpKSB7XG4gICAgICAgIC8vICAgICAgICAgaWYgKCFzd2lwZXJJbnN0YW5jZS5pbml0KSB7XG4gICAgICAgIC8vICAgICAgICAgICAgIHN3aXBlckluc3RhbmNlLmluaXQgPSB0cnVlO1xuICAgICAgICAvLyAgICAgICAgICAgICBzZXR1cCgpO1xuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gICAgIGlmIChtZWRpYVF1ZXJ5KCcobWluLXdpZHRoOiA5OTJweCknKSkge1xuICAgICAgICAvLyAgICAgICAgIGlmIChzd2lwZXJJbnN0YW5jZS5pbml0KSB7XG4gICAgICAgIC8vICAgICAgICAgICAgIHN3aXBlckluc3RhbmNlLmluc3RhbmNlLmRlc3Ryb3koKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgc3dpcGVySW5zdGFuY2UuaW5pdCA9IGZhbHNlO1xuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfTtcblxuICAgICAgICAvLyAtLS0tLS0tLSAgQklHIFNMSURFUiAtLS0tLS0tLVxuXG4gICAgICAgIGNvbnN0IGJpZ1NsaWRlciA9ICQoJy5iaWctc2xpZGVyX19zbGlkZXInKTtcblxuICAgICAgICBmdW5jdGlvbiBzZXR1cEJpZ1NsaWRlciAoKSB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50TnVtYmVyID0gJCgnLmJpZy1zbGlkZXJfX2N1cnJlbnQtYWN0aXZlJyk7XG4gICAgICAgICAgICBzd2lwZXJJbnN0YW5jZXMuYmlnLmluc3RhbmNlID0gbmV3IFN3aXBlcihiaWdTbGlkZXJbMF0sIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcbiAgICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDUwLFxuICAgICAgICAgICAgICAgIGZyZWVNb2RlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBmcmVlTW9kZU1vbWVudHVtUmF0aW86IHNsaWRlck1vbWVudHVtUmF0aW8sXG4gICAgICAgICAgICAgICAgY2VudGVyZWRTbGlkZXM6IHRydWUsXG4gICAgICAgICAgICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBzbGlkZUNoYW5nZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN3aXBlckluc3RhbmNlcy5iaWcuaW5zdGFuY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygkKCcuYmlnLXNsaWRlcl9fY3VycmVudC1hY3RpdmUnKS5hdHRyKCdkYXRhLWxlbmd0aCcpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50TnVtYmVyLnRleHQoc3dpcGVySW5zdGFuY2VzLmJpZy5pbnN0YW5jZS5hY3RpdmVJbmRleCAlIHBhcnNlSW50KGN1cnJlbnROdW1iZXIuYXR0cignZGF0YS1sZW5ndGgnKSkgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcGFnaW5hdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICBlbDogJy5iaWctc2xpZGVyX19wcm9ncmVzcycsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdwcm9ncmVzc2JhcicsXG4gICAgICAgICAgICAgICAgICAgIHByb2dyZXNzYmFyRmlsbENsYXNzOiAnYmlnLXNsaWRlcl9fYmFyJyxcbiAgICAgICAgICAgICAgICAgICAgbW9kaWZpZXJDbGFzczogJ2JpZy1zbGlkZXJfX2Jhci0tJyxcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyUHJvZ3Jlc3NiYXI6IGZ1bmN0aW9uIChwcm9ncmVzc2JhckZpbGxDbGFzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICc8c3BhbiBjbGFzcz1cIicgKyBwcm9ncmVzc2JhckZpbGxDbGFzcyArICdcIj48L3NwYW4+JztcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYmlnU2xpZGVyLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGlmICghSXNJbml0aWFsaXplZChiaWdTbGlkZXIpKSB7XG4gICAgICAgICAgICAgICAgc2V0dXBCaWdTbGlkZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIC0tLS0tLS0tIENBVEVHT1JZIFNMSURFUiAtLS0tLS0tLVxuICAgICAgICBjb25zdCBjYXRlZ29yeVNsaWRlciA9ICQoJy5jYXRlZ29yeS1zbGlkZXJfX3NsaWRlcicpO1xuXG4gICAgICAgIGZ1bmN0aW9uIHNldHVwQ2F0ZWdvcnlTbGlkZXIgKCkge1xuICAgICAgICAgICAgc3dpcGVySW5zdGFuY2VzLmNhdGVnb3J5Lmluc3RhbmNlID0gbmV3IFN3aXBlcihjYXRlZ29yeVNsaWRlclswXSwgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogJ2F1dG8nLFxuICAgICAgICAgICAgICAgIGZyZWVNb2RlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGZyZWVNb2RlTW9tZW50dW1SYXRpbzogc2xpZGVyTW9tZW50dW1SYXRpbyxcbiAgICAgICAgICAgICAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGVsOiAnLmNhdGVnb3J5LXNsaWRlcl9fcHJvZ3Jlc3MnLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAncHJvZ3Jlc3NiYXInLFxuICAgICAgICAgICAgICAgICAgICBwcm9ncmVzc2JhckZpbGxDbGFzczogJ2NhdGVnb3J5LXNsaWRlcl9fYmFyJyxcbiAgICAgICAgICAgICAgICAgICAgbW9kaWZpZXJDbGFzczogJ2NhdGVnb3J5LXNsaWRlcl9fYmFyLS0nLFxuICAgICAgICAgICAgICAgICAgICByZW5kZXJQcm9ncmVzc2JhcjogZnVuY3Rpb24gKHByb2dyZXNzYmFyRmlsbENsYXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJzxzcGFuIGNsYXNzPVwiJyArIHByb2dyZXNzYmFyRmlsbENsYXNzICsgJ1wiPjwvc3Bhbj4nO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNhdGVnb3J5U2xpZGVyLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGlmICghSXNJbml0aWFsaXplZChjYXRlZ29yeVNsaWRlcikpIHtcbiAgICAgICAgICAgICAgICBzZXR1cENhdGVnb3J5U2xpZGVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXHJcbmltcG9ydCBTd2lwZXIgZnJvbSAnc3dpcGVyJztcclxuXHJcbmNvbnN0IHN3aXBlckRlc2t0b3BTaW5nbGUgPSBuZXcgU3dpcGVyKCcuc3dpcGVyLWRlc2t0b3Atc2luZ2xlJywge1xyXG4gICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgIHNwYWNlQmV0d2VlbjogMSxcclxuXHJcbiAgICBhdXRvcGxheTp7XHJcbiAgICAgICAgYXV0b3BsYXk6dHJ1ZSxcclxuICAgICAgICBkaXNhYmxlT25JbnRlcmFjdGlvbjogZmFsc2UsXHJcbiAgICB9LFxyXG5cclxuICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICBlbDogJy5zd2lwZXItcGFnaW5hdGlvbicsXHJcbiAgICAgICAgY2xpY2thYmxlOiB0cnVlXHJcbiAgICB9LFxyXG59KTtcclxuXHJcbmNvbnN0IHN3aXBlckRlc2t0b3BNdWx0aXBsZSA9IG5ldyBTd2lwZXIoJy5zd2lwZXItZGVza3RvcC1tdWx0aXBsZScsIHtcclxuICAgIHNsaWRlc1BlclZpZXc6IDUsXHJcbiAgICBzcGFjZUJldHdlZW46IDEsXHJcbiAgICBsb29wOiB0cnVlLFxyXG5cclxuICAgIGF1dG9wbGF5OntcclxuICAgICAgICBhdXRvcGxheTp0cnVlLFxyXG4gICAgICAgIGRpc2FibGVPbkludGVyYWN0aW9uOiBmYWxzZSxcclxuICAgIH0sXHJcblxyXG4gICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICAgIGVsOiAnLnN3aXBlci1wYWdpbmF0aW9uJyxcclxuICAgICAgICBjbGlja2FibGU6IHRydWVcclxuICAgIH0sXHJcbn0pO1xyXG5cclxuY29uc3Qgc3dpcGVyTW9iaWxlU2luZ2xlID0gbmV3IFN3aXBlcignLnN3aXBlci1tb2JpbGUtc2luZ2xlJywge1xyXG4gICAgbG9vcDogdHJ1ZSxcclxuICAgIHNsaWRlc1BlclZpZXc6MSxcclxuICAgIHNwYWNlQmV0d2VlbjoxLFxyXG5cclxuICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICBlbDogJy5zd2lwZXItcGFnaW5hdGlvbicsXHJcbiAgICB9LFxyXG5cclxufSk7XHJcblxyXG5jb25zdCBzd2lwZXJNb2JpbGVNdWx0aXBsZSA9IG5ldyBTd2lwZXIoJy5zd2lwZXItbW9iaWxlLW11bHRpcGxlJywge1xyXG4gICAgbG9vcDogdHJ1ZSxcclxuICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICBlbDogJy5zd2lwZXItcGFnaW5hdGlvbicsXHJcbiAgICB9LFxyXG4gICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICA3Njg6IHtcclxuICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgICB9LFxyXG4gICAgICAgIDQ1MDoge1xyXG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLjUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAzMDA6IHtcclxuICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMS4zLFxyXG4gICAgICAgIH0sXHJcbiAgICB9XHJcblxyXG59KTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgZ3NhcCBmcm9tICdnc2FwJztcblxuZXhwb3J0IGNvbnN0IGRlYm91bmNlID0gKGZ1bmMsIHdhaXQsIGltbWVkaWF0ZSkgPT4ge1xuICAgIHZhciB0aW1lb3V0O1xuICAgIGlmICh0eXBlb2YgZnVuYyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgICAgICAgIHZhciBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgICAgICAgdmFyIGxhdGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgICAgICAgICAgICAgIGlmICghaW1tZWRpYXRlKSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBjYWxsTm93ID0gaW1tZWRpYXRlICYmICF0aW1lb3V0O1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xuICAgICAgICAgICAgaWYgKGNhbGxOb3cpIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdBIGZ1bmN0aW9uIGlzIHVuZGVmaW5lZCEgRGVib3VuY2UgbWlnaHQgbm90IHdvcmsgYXMgaW50ZW5kZWQ6ICcsIGZ1bmMpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBjb25zdCB0aHJvdHRsZSA9IChmdW5jLCBsaW1pdCkgPT4ge1xuICAgIGxldCBsYXN0RnVuYztcbiAgICBsZXQgbGFzdFJhbjtcblxuICAgIGlmICh0eXBlb2YgZnVuYyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzO1xuICAgICAgICAgICAgY29uc3QgYXJncyA9IGFyZ3VtZW50cztcblxuICAgICAgICAgICAgaWYgKCFsYXN0UmFuKSB7XG4gICAgICAgICAgICAgICAgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgICAgICAgICAgICBsYXN0UmFuID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGxhc3RGdW5jKTtcblxuICAgICAgICAgICAgICAgIGxhc3RGdW5jID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoRGF0ZS5ub3coKSAtIGxhc3RSYW4pID49IGxpbWl0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFzdFJhbiA9IERhdGUubm93KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCBsaW1pdCAtIChEYXRlLm5vdygpIC0gbGFzdFJhbikpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUud2FybignQSBmdW5jdGlvbiBpcyB1bmRlZmluZWQhIFRocm90dGxlIG1pZ2h0IG5vdCB3b3JrIGFzIGludGVuZGVkOiAnLCBmdW5jKTtcbiAgICB9XG59O1xuXG5leHBvcnQgY29uc3QgbGVycCA9IChzdGFydCwgZW5kLCBhbXQpID0+IHtcbiAgICByZXR1cm4gKDEgLSBhbXQpICogc3RhcnQgKyBhbXQgKiBlbmQ7XG59O1xuXG5leHBvcnQgY29uc3QgY2xhbXAgPSAobWluLCB2YWwsIG1heCkgPT4ge1xuICAgIHJldHVybiBNYXRoLm1pbihNYXRoLm1heCh2YWwsIG1pbiksIG1heCk7XG59O1xuXG5leHBvcnQgY29uc3QgaXJhbmRvbSA9IChtYXgpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGguZmxvb3IobWF4KSk7XG5leHBvcnQgY29uc3Qgc2Vjb25kcyA9IChtcykgPT4gbXMgKiAxMDAwO1xuXG5leHBvcnQgY29uc3QgbWVkaWFRdWVyeSA9IChxdWVyeSkgPT4gKHdpbmRvdy5tYXRjaE1lZGlhKHF1ZXJ5KSkubWF0Y2hlcztcblxuZXhwb3J0IGNvbnN0IHN0YlNjcm9sbFRvID0gKGVsZSwgc3BlZWQgPSAyMDApID0+IHtcbiAgICBpZiAoZ3NhcCkge1xuICAgICAgICBnc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRvUGx1Z2luKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG4gICAgICAgIGdzYXAudG8od2luZG93LCB7XG4gICAgICAgICAgICBkdXJhdGlvbjogc3BlZWQgLyAxMDAwLFxuICAgICAgICAgICAgZWFzZTogJ1Bvd2VyMy5lYXNlT3V0JyxcbiAgICAgICAgICAgIHNjcm9sbFRvOiB7XG4gICAgICAgICAgICAgICAgeTogJChlbGUpLm9mZnNldCgpLnRvcFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAkKFtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIGRvY3VtZW50LmJvZHldKS5hbmltYXRlKHtcbiAgICAgICAgICAgIHNjcm9sbFRvcDogJChlbGUpLm9mZnNldCgpLnRvcFxuICAgICAgICB9LCBzcGVlZCk7XG4gICAgfVxufTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIid1c2Ugc3RyaWN0JztcblxuLy8gLS0tLS0tLS0tLSBJbWFnZSAvIGNzcyBhc3NldHMgLS0tLS0tLS0tLS0tXG5cbnJlcXVpcmUuY29udGV4dCgnLi9hc3NldHMvJywgdHJ1ZSwgL1xcLihzdmd8cG5nfGpwZT9nKSQvKTtcbnJlcXVpcmUoJy4vYXNzZXRzL3N0eWxlcy9tYWluLnNjc3MnKTtcblxuY29uc3QgaW5jbHVkZUNvbXBvbmVudCA9IChzY3JpcHQpID0+IHJlcXVpcmUoYC4vYXNzZXRzL3NjcmlwdHMvY29tcG9uZW50cy8ke3NjcmlwdH0uanNgKTtcblxuLy8gLS0tLS0tLS0tLS0tLS0gTGF6eSBsb2FkIC0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qXG4gKiBpbXBvcnQgTGF6eUltYWdlTG9hZGVyIGZyb20gJy4vYXNzZXRzL3NjcmlwdHMvY29tcG9uZW50cy9sYXp5aW1hZ2Vsb2FkZXIuanMnO1xuICogTGF6eUltYWdlTG9hZGVyLmluaXQoKTtcbiAqL1xuXG4vLyAtLS0tLS0tLS0tLSBDdXN0b20gc2NyaXB0cyAtLS0tLS0tLS0tLS0tLS1cbmluY2x1ZGVDb21wb25lbnQoJ3NsaWRlcicpO1xuaW5jbHVkZUNvbXBvbmVudCgnbmF2YmFyJyk7XG5pbmNsdWRlQ29tcG9uZW50KCdzd2lwZXInKTtcbmluY2x1ZGVDb21wb25lbnQoJ2Ryb3AtYmFycycpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBnc2FwOyIsIm1vZHVsZS5leHBvcnRzID0galF1ZXJ5OyIsIm1vZHVsZS5leHBvcnRzID0gU3dpcGVyOyJdLCJzb3VyY2VSb290IjoiIn0=