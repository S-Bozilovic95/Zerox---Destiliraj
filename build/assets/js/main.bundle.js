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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cyBzeW5jIFxcLihzdmd8cG5nfGpwZSIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9zdmcvbmV3c2xldHRlci5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMgc3luYyBeXFwuXFwvLipcXC5qcyQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvZHJvcC1iYXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc2NyaXB0cy9jb21wb25lbnRzL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvbGF6eWltYWdlbG9hZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc2NyaXB0cy9jb21wb25lbnRzL25hdmJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvY29tcG9uZW50cy9yZXNvdXJjZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvY29tcG9uZW50cy9zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvc3dpcGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc2NyaXB0cy9jb21wb25lbnRzL3V0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc3R5bGVzL21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZ3NhcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpRdWVyeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIlN3aXBlclwiIl0sIm5hbWVzIjpbInRhYiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInRvZ2dsZUJhciIsInZhbHVlIiwiZm9yRWFjaCIsImVsIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJ0YXJnZXQiLCJwYXJlbnROb2RlIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiZG9JbWFnZVByZWxvYWQiLCJ1cmwiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImltYWdlIiwiSW1hZ2UiLCJzcmNzZXQiLCJvbmxvYWQiLCJvbmVycm9yIiwiY2xhbXAiLCJtaW4iLCJtYXgiLCJNYXRoIiwiYXNzZXJ0IiwicHJlZGljYXRlIiwibWVzc2FnZSIsIkVycm9yIiwiTGF6eUltYWdlTG9hZGVyIiwiaW1hZ2VzIiwiUEVORElOR19DTEFTUyIsImNvbmZpZyIsInJvb3QiLCJyb290TWFyZ2luIiwidGhyZXNob2xkIiwiVEhSRVNIT0xEIiwiT0JTRVJWRVJfU1VQUE9SVEVEIiwibGxMb2FkSW1hZ2VzRGVmYXVsdCIsImxsQ291bnQiLCJsZW5ndGgiLCJsbEludGVyc2VjdGVkIiwiYmluZCIsImxsT2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImNvbnRhaW5zIiwiSEFORExFRF9DTEFTUyIsIm9ic2VydmUiLCJkaXNjb25uZWN0IiwiZW50cmllcyIsImVudHJ5IiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJpc0ludGVyc2VjdGluZyIsImxsUHJlbG9hZEltYWdlIiwidW5vYnNlcnZlIiwic3JjIiwiZGF0YXNldCIsIkhlbHBlcnMiLCJ0aGVuIiwibGxUYWdJbWFnZSIsIkFycmF5IiwiZnJvbSIsImltZyIsInF1ZXJ5U2VsZWN0b3IiLCJuZXdJbWciLCJhZGQiLCJMT0FERURfQ0xBU1MiLCJSRVZFQUxfQ0xBU1MiLCJhbHQiLCJhcHBlbmRDaGlsZCIsInJlbW92ZSIsIndpbmRvdyIsImxsSW5zdGFuY2UiLCJsbERpc2Nvbm5lY3QiLCJuYXZiYXIiLCJtZW51SWNvbiIsIm92ZXJsYXkiLCJ0b2dnbGVOYXZiYXIiLCJwYWdlWU9mZnNldCIsImdzYXAiLCIkIiwicmVzb3VyY2UiLCJTd2lwZXIiLCJzbGlkZXJNb21lbnR1bVJhdGlvIiwiSXNJbml0aWFsaXplZCIsImVsZSIsImhhc0NsYXNzIiwic3dpcGVySW5zdGFuY2VzIiwiY2F0ZWdvcnkiLCJpbnN0YW5jZSIsImluaXQiLCJiaWciLCJiaWdTbGlkZXIiLCJzZXR1cEJpZ1NsaWRlciIsImN1cnJlbnROdW1iZXIiLCJzbGlkZXNQZXJWaWV3Iiwic3BhY2VCZXR3ZWVuIiwiZnJlZU1vZGUiLCJmcmVlTW9kZU1vbWVudHVtUmF0aW8iLCJjZW50ZXJlZFNsaWRlcyIsImxvb3AiLCJvbiIsInNsaWRlQ2hhbmdlIiwiY29uc29sZSIsImxvZyIsImF0dHIiLCJ0ZXh0IiwiYWN0aXZlSW5kZXgiLCJwYXJzZUludCIsInBhZ2luYXRpb24iLCJ0eXBlIiwicHJvZ3Jlc3NiYXJGaWxsQ2xhc3MiLCJtb2RpZmllckNsYXNzIiwicmVuZGVyUHJvZ3Jlc3NiYXIiLCJjYXRlZ29yeVNsaWRlciIsInNldHVwQ2F0ZWdvcnlTbGlkZXIiLCJzd2lwZXJEZXNrdG9wU2luZ2xlIiwiYXV0b3BsYXkiLCJkaXNhYmxlT25JbnRlcmFjdGlvbiIsImNsaWNrYWJsZSIsInN3aXBlckRlc2t0b3BNdWx0aXBsZSIsInN3aXBlck1vYmlsZVNpbmdsZSIsInN3aXBlck1vYmlsZU11bHRpcGxlIiwiYnJlYWtwb2ludHMiLCJkZWJvdW5jZSIsImZ1bmMiLCJ3YWl0IiwiaW1tZWRpYXRlIiwidGltZW91dCIsImNvbnRleHQiLCJhcmdzIiwiYXJndW1lbnRzIiwibGF0ZXIiLCJhcHBseSIsImNhbGxOb3ciLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0Iiwid2FybiIsInRocm90dGxlIiwibGltaXQiLCJsYXN0RnVuYyIsImxhc3RSYW4iLCJEYXRlIiwibm93IiwibGVycCIsInN0YXJ0IiwiZW5kIiwiYW10IiwidmFsIiwiaXJhbmRvbSIsImZsb29yIiwicmFuZG9tIiwic2Vjb25kcyIsIm1zIiwibWVkaWFRdWVyeSIsInF1ZXJ5IiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJzdGJTY3JvbGxUbyIsInNwZWVkIiwicmVnaXN0ZXJQbHVnaW4iLCJTY3JvbGxUb1BsdWdpbiIsInRvIiwiZHVyYXRpb24iLCJlYXNlIiwic2Nyb2xsVG8iLCJ5Iiwib2Zmc2V0IiwidG9wIiwiZG9jdW1lbnRFbGVtZW50IiwiYm9keSIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJyZXF1aXJlIiwiaW5jbHVkZUNvbXBvbmVudCIsInNjcmlwdCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNFOzs7Ozs7Ozs7OztBQ3RCQSxnRDs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QkFBZ0IsQ0FBQyxRQUFELENBQWhCO0FBQ0FBLGdCQUFnQixDQUFDLFFBQUQsQ0FBaEI7QUFDQUEsZ0JBQWdCLENBQUMsUUFBRCxDQUFoQjtBQUNBQSxnQkFBZ0IsQ0FBQyxXQUFELENBQWhCLEM7Ozs7Ozs7Ozs7O0FDcEJBLHNCOzs7Ozs7Ozs7OztBQ0FBLHdCOzs7Ozs7Ozs7OztBQ0FBLHdCIiwiZmlsZSI6ImFzc2V0cy9qcy9tYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsInZhciBtYXAgPSB7XG5cdFwiLi9pbWFnZXMvc3ZnL25ld3NsZXR0ZXIuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9zdmcvbmV3c2xldHRlci5zdmdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvYXNzZXRzIHN5bmMgcmVjdXJzaXZlIFxcXFwuKHN2Z3xwbmd8anBlP2cpJFwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIuLi9pbWFnZXMvc3ZnL25ld3NsZXR0ZXIuc3ZnXCI7IiwidmFyIG1hcCA9IHtcblx0XCIuL2Ryb3AtYmFycy5qc1wiOiBcIi4vc3JjL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvZHJvcC1iYXJzLmpzXCIsXG5cdFwiLi9oZWxwZXJzLmpzXCI6IFwiLi9zcmMvYXNzZXRzL3NjcmlwdHMvY29tcG9uZW50cy9oZWxwZXJzLmpzXCIsXG5cdFwiLi9sYXp5aW1hZ2Vsb2FkZXIuanNcIjogXCIuL3NyYy9hc3NldHMvc2NyaXB0cy9jb21wb25lbnRzL2xhenlpbWFnZWxvYWRlci5qc1wiLFxuXHRcIi4vbmF2YmFyLmpzXCI6IFwiLi9zcmMvYXNzZXRzL3NjcmlwdHMvY29tcG9uZW50cy9uYXZiYXIuanNcIixcblx0XCIuL3Jlc291cmNlLmpzXCI6IFwiLi9zcmMvYXNzZXRzL3NjcmlwdHMvY29tcG9uZW50cy9yZXNvdXJjZS5qc1wiLFxuXHRcIi4vc2xpZGVyLmpzXCI6IFwiLi9zcmMvYXNzZXRzL3NjcmlwdHMvY29tcG9uZW50cy9zbGlkZXIuanNcIixcblx0XCIuL3N3aXBlci5qc1wiOiBcIi4vc3JjL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvc3dpcGVyLmpzXCIsXG5cdFwiLi91dGlscy5qc1wiOiBcIi4vc3JjL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvdXRpbHMuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvYXNzZXRzL3NjcmlwdHMvY29tcG9uZW50cyBzeW5jIHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qXFxcXC5qcyRcIjsiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xubGV0IHRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcm9wLWJhcnNfX2JhcnMtYm94X19iYXJfX3RhYicpO1xuXG4vLyAvZnVuY3Rpb25zXG5mdW5jdGlvbiB0b2dnbGVCYXIgKHZhbHVlKSB7XG4gICAgdmFsdWUuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LnRvZ2dsZSgnYmFyLWFjdGl2ZScpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cblxuLy8gdG9nZ2xlIGJhcnNcbmlmICh0YWIpIHtcbiAgICB0b2dnbGVCYXIodGFiKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZG9JbWFnZVByZWxvYWQgPSB1cmwgPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGltYWdlLnNyY3NldCA9IHVybDtcbiAgICAgICAgaW1hZ2Uub25sb2FkID0gcmVzb2x2ZTtcbiAgICAgICAgaW1hZ2Uub25lcnJvciA9IHJlamVjdDtcbiAgICB9KTtcbn07XG5cbmNvbnN0IGNsYW1wID0gKHZhbHVlLCBtaW4sIG1heCkgPT4gTWF0aC5tYXgobWluLCBNYXRoLm1pbihtYXgsIHZhbHVlKSk7XG5cbmNvbnN0IGFzc2VydCA9IChwcmVkaWNhdGUsIG1lc3NhZ2UpID0+IHtcbiAgICBpZiAocHJlZGljYXRlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgYXNzZXJ0LCBjbGFtcCwgZG9JbWFnZVByZWxvYWRcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBIZWxwZXJzIGZyb20gJy4vaGVscGVycyc7XG5cbmNsYXNzIExhenlJbWFnZUxvYWRlciB7XG4gICAgc3RhdGljIGdldCBPQlNFUlZFUl9TVVBQT1JURUQgKCkge1xuICAgICAgICByZXR1cm4gKCdJbnRlcnNlY3Rpb25PYnNlcnZlcicgaW4gd2luZG93KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IFBFTkRJTkdfQ0xBU1MgKCkge1xuICAgICAgICByZXR1cm4gJ2xhenktaW1hZ2UtLXBlbmRpbmcnO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgSEFORExFRF9DTEFTUyAoKSB7XG4gICAgICAgIHJldHVybiAnbGF6eS1pbWFnZS0tbG9hZGVkJztcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IExPQURFRF9DTEFTUyAoKSB7XG4gICAgICAgIHJldHVybiAnbGF6eS1pbWFnZV9fYWN0dWFsJztcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IFJFVkVBTF9DTEFTUyAoKSB7XG4gICAgICAgIHJldHVybiAnZmFkZS1pbic7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBUSFJFU0hPTEQgKCkge1xuICAgICAgICByZXR1cm4gMC4xO1xuICAgIH1cblxuICAgIHN0YXRpYyBpbml0ICgpIHtcbiAgICAgICAgaWYgKHRoaXMubGxJbnN0YW5jZSkge1xuICAgICAgICAgICAgdGhpcy5sbEluc3RhbmNlLmxsRGlzY29ubmVjdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5sbENvdW50ID0gMDtcbiAgICAgICAgdGhpcy5sbEluc3RhbmNlID0gbmV3IExhenlJbWFnZUxvYWRlcigpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgdmFyIGltYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke0xhenlJbWFnZUxvYWRlci5QRU5ESU5HX0NMQVNTfWApO1xuICAgICAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICAgICAgICByb290OiBudWxsLFxuICAgICAgICAgICAgcm9vdE1hcmdpbjogJzYwcHggMHB4JyxcbiAgICAgICAgICAgIHRocmVzaG9sZDogTGF6eUltYWdlTG9hZGVyLlRIUkVTSE9MRFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmICghTGF6eUltYWdlTG9hZGVyLk9CU0VSVkVSX1NVUFBPUlRFRCkge1xuICAgICAgICAgICAgdGhpcy5sbExvYWRJbWFnZXNEZWZhdWx0KGltYWdlcyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxsQ291bnQgPSBpbWFnZXMubGVuZ3RoO1xuICAgICAgICB0aGlzLmxsSW50ZXJzZWN0ZWQgPSB0aGlzLmxsSW50ZXJzZWN0ZWQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5sbE9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKHRoaXMubGxJbnRlcnNlY3RlZCwgY29uZmlnKTtcblxuICAgICAgICBpbWFnZXMuZm9yRWFjaChpbWFnZSA9PiB7XG4gICAgICAgICAgICBpZiAoaW1hZ2UuY2xhc3NMaXN0LmNvbnRhaW5zKExhenlJbWFnZUxvYWRlci5IQU5ETEVEX0NMQVNTKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5sbE9ic2VydmVyLm9ic2VydmUoaW1hZ2UpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBsbERpc2Nvbm5lY3QgKCkge1xuICAgICAgICBpZiAoIXRoaXMubGxPYnNlcnZlcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5sbE9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICB9XG5cbiAgICBsbEludGVyc2VjdGVkIChlbnRyaWVzKSB7XG4gICAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgICAgIGlmIChlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA8IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxsQ291bnQtLTtcbiAgICAgICAgICAgICAgICB0aGlzLmxsUHJlbG9hZEltYWdlKGVudHJ5LnRhcmdldCk7XG4gICAgICAgICAgICAgICAgdGhpcy5sbE9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGhpcy5sbENvdW50ID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5sbE9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICB9XG5cbiAgICBsbFByZWxvYWRJbWFnZSAoaW1hZ2UpIHtcbiAgICAgICAgY29uc3Qgc3JjID0gaW1hZ2UuZGF0YXNldC5zcmNzZXQ7XG4gICAgICAgIGlmICghc3JjKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gSGVscGVycy5kb0ltYWdlUHJlbG9hZChzcmMpLnRoZW4oKCkgPT4gdGhpcy5sbFRhZ0ltYWdlKGltYWdlLCBzcmMpKTtcbiAgICB9XG5cbiAgICBsbExvYWRJbWFnZXNEZWZhdWx0IChpbWFnZXMpIHtcbiAgICAgICAgQXJyYXkuZnJvbShpbWFnZXMpLmZvckVhY2goaW1hZ2UgPT4gdGhpcy5sbFByZWxvYWRJbWFnZShpbWFnZSkpO1xuICAgIH1cblxuICAgIGxsVGFnSW1hZ2UgKGltZywgc3JjKSB7XG4gICAgICAgIGNvbnN0IGVsID0gaW1nLnF1ZXJ5U2VsZWN0b3IoJy5sYXp5LWltYWdlX19jb250ZW50Jyk7XG4gICAgICAgIGlmICghZWwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaW1nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbmV3SW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgIG5ld0ltZy5jbGFzc0xpc3QuYWRkKExhenlJbWFnZUxvYWRlci5MT0FERURfQ0xBU1MpO1xuICAgICAgICBuZXdJbWcuc3Jjc2V0ID0gc3JjO1xuICAgICAgICBuZXdJbWcuY2xhc3NMaXN0LmFkZChMYXp5SW1hZ2VMb2FkZXIuUkVWRUFMX0NMQVNTKTtcbiAgICAgICAgbmV3SW1nLmFsdCA9IGVsLmFsdDtcbiAgICAgICAgaW1nLmFwcGVuZENoaWxkKG5ld0ltZyk7XG5cbiAgICAgICAgaW1nLmRhdGFzZXQuc3Jjc2V0ID0gJyc7XG4gICAgICAgIGltZy5jbGFzc0xpc3QucmVtb3ZlKExhenlJbWFnZUxvYWRlci5QRU5ESU5HX0NMQVNTKTtcbiAgICAgICAgaW1nLmNsYXNzTGlzdC5hZGQoTGF6eUltYWdlTG9hZGVyLkhBTkRMRURfQ0xBU1MpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF6eUltYWdlTG9hZGVyO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbmxldCBuYXZiYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2YmFyJyk7XG5sZXQgbWVudUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2YmFyX19zbWFsbC1tZW51X19pY29uJyk7XG5sZXQgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5Jyk7XG5cbi8vIGZ1bmN0aW9uc1xuZnVuY3Rpb24gdG9nZ2xlTmF2YmFyICgpIHtcbiAgICBuYXZiYXIuY2xhc3NMaXN0LnRvZ2dsZSgnbmF2YmFyLWFjdGl2ZScpO1xuICAgIG92ZXJsYXkuY2xhc3NMaXN0LnRvZ2dsZSgnb3ZlcmxheS1hY3RpdmUnKTtcbn1cblxuLy8gdG9nZ2xlIG5hdmJhclxuaWYgKG1lbnVJY29uICYmIG5hdmJhciAmJiBvdmVybGF5KSB7XG4gICAgbWVudUljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVOYXZiYXIpO1xuICAgIG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVOYXZiYXIpO1xufVxuXG4vLyB0b3AgdGV4dCBzbGlkZVxuaWYgKG5hdmJhcikge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XG4gICAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPiAyMDApIHtcbiAgICAgICAgICAgIG5hdmJhci5jbGFzc0xpc3QuYWRkKCd0b3AtYm94LXNsaWRlJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuYXZiYXIuY2xhc3NMaXN0LnJlbW92ZSgndG9wLWJveC1zbGlkZScpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBnc2FwIGZyb20gJ2dzYXAnO1xuXG5pZiAoZ3NhcCkge1xuICAgICQoZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCByZXNvdXJjZSA9ICQoJy5yZXNvdXJjZScpO1xuICAgICAgICAvLyBsZXQgc3dhcCA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChyZXNvdXJjZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvLyBjb25zdCBjaGFuZ2VDbGFzc2VzID0gKCkgPT4ge1xuICAgICAgICAgICAgLy8gICAgIGxldCByZWQgPSAkKCcucmVzb3VyY2VfX2Jsb2NrLXJlZCcpWzBdO1xuICAgICAgICAgICAgLy8gICAgIGxldCBibGFjayA9ICQoJy5yZXNvdXJjZV9fYmxvY2stYmxhY2snKVswXTtcblxuICAgICAgICAgICAgLy8gICAgIGlmICghc3dhcCkge1xuICAgICAgICAgICAgLy8gICAgICAgICByZWQuY2xhc3NMaXN0LmFkZCgnc3dhcCcpO1xuICAgICAgICAgICAgLy8gICAgICAgICBibGFjay5jbGFzc0xpc3QuYWRkKCdzd2FwJyk7XG4gICAgICAgICAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgcmVkLmNsYXNzTGlzdC5yZW1vdmUoJ3N3YXAnKTtcbiAgICAgICAgICAgIC8vICAgICAgICAgYmxhY2suY2xhc3NMaXN0LnJlbW92ZSgnc3dhcCcpO1xuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vICAgICBzd2FwID0gIXN3YXA7XG4gICAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICAgIC8vIFNjcm9sbFRyaWdnZXIuY3JlYXRlKHtcbiAgICAgICAgICAgIC8vICAgICB0YXJnZXQ6ICcucmVzb3VyY2VfX2Jsb2NrJyxcbiAgICAgICAgICAgIC8vICAgICBzdGFydDogJ3RvcCB0b3AnLFxuICAgICAgICAgICAgLy8gICAgIG1hcmtlcnM6IHRydWUsXG4gICAgICAgICAgICAvLyAgICAgLy8gZW5kOiBkb2N1bWVudC5pbm5lckhlaWdodCxcbiAgICAgICAgICAgIC8vICAgICBvblRvZ2dsZTogKCkgPT4gY2hhbmdlQ2xhc3NlcygpLFxuICAgICAgICAgICAgLy8gfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFN3aXBlciBmcm9tICdzd2lwZXInO1xuLy8gaW1wb3J0IGdzYXAgZnJvbSAnZ3NhcCc7XG4vLyBpbXBvcnQgeyBkZWJvdW5jZSxtZWRpYVF1ZXJ5IH0gZnJvbSAnLi91dGlscyc7XG5cbmlmIChTd2lwZXIpIHtcbiAgICAkKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gLS0tLSBBTEwgU0xJREVSUyAtLS0tLVxuICAgICAgICBjb25zdCBzbGlkZXJNb21lbnR1bVJhdGlvID0gMC40NTU7XG4gICAgICAgIGNvbnN0IElzSW5pdGlhbGl6ZWQgPSAoZWxlKSA9PiBlbGUuaGFzQ2xhc3MoJ3N3aXBlci1jb250YWluZXItaW5pdGlhbGl6ZWQnKTtcbiAgICAgICAgY29uc3Qgc3dpcGVySW5zdGFuY2VzID0ge1xuICAgICAgICAgICAgY2F0ZWdvcnk6ICAgICAgICAgeyBpbnN0YW5jZTogbnVsbCwgaW5pdDogZmFsc2UgfSxcbiAgICAgICAgICAgIGJpZzogICAgICAgICAgICAgIHsgaW5zdGFuY2U6IG51bGwsIGluaXQ6IGZhbHNlIH0sXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gY29uc3Qgc3dpcGVyU3RhdGUgPSAoc2xpZGVyLCBzd2lwZXJJbnN0YW5jZSwgc2V0dXApID0+IHtcbiAgICAgICAgLy8gICAgIGlmIChtZWRpYVF1ZXJ5KCcobWF4LXdpZHRoOiA5OTFweCknKSkge1xuICAgICAgICAvLyAgICAgICAgIGlmICghc3dpcGVySW5zdGFuY2UuaW5pdCkge1xuICAgICAgICAvLyAgICAgICAgICAgICBzd2lwZXJJbnN0YW5jZS5pbml0ID0gdHJ1ZTtcbiAgICAgICAgLy8gICAgICAgICAgICAgc2V0dXAoKTtcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vICAgICBpZiAobWVkaWFRdWVyeSgnKG1pbi13aWR0aDogOTkycHgpJykpIHtcbiAgICAgICAgLy8gICAgICAgICBpZiAoc3dpcGVySW5zdGFuY2UuaW5pdCkge1xuICAgICAgICAvLyAgICAgICAgICAgICBzd2lwZXJJbnN0YW5jZS5pbnN0YW5jZS5kZXN0cm95KCk7XG4gICAgICAgIC8vICAgICAgICAgICAgIHN3aXBlckluc3RhbmNlLmluaXQgPSBmYWxzZTtcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH07XG5cbiAgICAgICAgLy8gLS0tLS0tLS0gIEJJRyBTTElERVIgLS0tLS0tLS1cblxuICAgICAgICBjb25zdCBiaWdTbGlkZXIgPSAkKCcuYmlnLXNsaWRlcl9fc2xpZGVyJyk7XG5cbiAgICAgICAgZnVuY3Rpb24gc2V0dXBCaWdTbGlkZXIgKCkge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudE51bWJlciA9ICQoJy5iaWctc2xpZGVyX19jdXJyZW50LWFjdGl2ZScpO1xuICAgICAgICAgICAgc3dpcGVySW5zdGFuY2VzLmJpZy5pbnN0YW5jZSA9IG5ldyBTd2lwZXIoYmlnU2xpZGVyWzBdLCB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAnYXV0bycsXG4gICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiA1MCxcbiAgICAgICAgICAgICAgICBmcmVlTW9kZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgZnJlZU1vZGVNb21lbnR1bVJhdGlvOiBzbGlkZXJNb21lbnR1bVJhdGlvLFxuICAgICAgICAgICAgICAgIGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxuICAgICAgICAgICAgICAgIGxvb3A6IHRydWUsXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVDaGFuZ2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzd2lwZXJJbnN0YW5jZXMuYmlnLmluc3RhbmNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJCgnLmJpZy1zbGlkZXJfX2N1cnJlbnQtYWN0aXZlJykuYXR0cignZGF0YS1sZW5ndGgnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudE51bWJlci50ZXh0KHN3aXBlckluc3RhbmNlcy5iaWcuaW5zdGFuY2UuYWN0aXZlSW5kZXggJSBwYXJzZUludChjdXJyZW50TnVtYmVyLmF0dHIoJ2RhdGEtbGVuZ3RoJykpICsgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHBhZ2luYXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgZWw6ICcuYmlnLXNsaWRlcl9fcHJvZ3Jlc3MnLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAncHJvZ3Jlc3NiYXInLFxuICAgICAgICAgICAgICAgICAgICBwcm9ncmVzc2JhckZpbGxDbGFzczogJ2JpZy1zbGlkZXJfX2JhcicsXG4gICAgICAgICAgICAgICAgICAgIG1vZGlmaWVyQ2xhc3M6ICdiaWctc2xpZGVyX19iYXItLScsXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlclByb2dyZXNzYmFyOiBmdW5jdGlvbiAocHJvZ3Jlc3NiYXJGaWxsQ2xhc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnPHNwYW4gY2xhc3M9XCInICsgcHJvZ3Jlc3NiYXJGaWxsQ2xhc3MgKyAnXCI+PC9zcGFuPic7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJpZ1NsaWRlci5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpZiAoIUlzSW5pdGlhbGl6ZWQoYmlnU2xpZGVyKSkge1xuICAgICAgICAgICAgICAgIHNldHVwQmlnU2xpZGVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyAtLS0tLS0tLSBDQVRFR09SWSBTTElERVIgLS0tLS0tLS1cbiAgICAgICAgY29uc3QgY2F0ZWdvcnlTbGlkZXIgPSAkKCcuY2F0ZWdvcnktc2xpZGVyX19zbGlkZXInKTtcblxuICAgICAgICBmdW5jdGlvbiBzZXR1cENhdGVnb3J5U2xpZGVyICgpIHtcbiAgICAgICAgICAgIHN3aXBlckluc3RhbmNlcy5jYXRlZ29yeS5pbnN0YW5jZSA9IG5ldyBTd2lwZXIoY2F0ZWdvcnlTbGlkZXJbMF0sIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcbiAgICAgICAgICAgICAgICBmcmVlTW9kZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBmcmVlTW9kZU1vbWVudHVtUmF0aW86IHNsaWRlck1vbWVudHVtUmF0aW8sXG4gICAgICAgICAgICAgICAgcGFnaW5hdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICBlbDogJy5jYXRlZ29yeS1zbGlkZXJfX3Byb2dyZXNzJyxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3Byb2dyZXNzYmFyJyxcbiAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3NiYXJGaWxsQ2xhc3M6ICdjYXRlZ29yeS1zbGlkZXJfX2JhcicsXG4gICAgICAgICAgICAgICAgICAgIG1vZGlmaWVyQ2xhc3M6ICdjYXRlZ29yeS1zbGlkZXJfX2Jhci0tJyxcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyUHJvZ3Jlc3NiYXI6IGZ1bmN0aW9uIChwcm9ncmVzc2JhckZpbGxDbGFzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICc8c3BhbiBjbGFzcz1cIicgKyBwcm9ncmVzc2JhckZpbGxDbGFzcyArICdcIj48L3NwYW4+JztcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjYXRlZ29yeVNsaWRlci5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpZiAoIUlzSW5pdGlhbGl6ZWQoY2F0ZWdvcnlTbGlkZXIpKSB7XG4gICAgICAgICAgICAgICAgc2V0dXBDYXRlZ29yeVNsaWRlcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuaW1wb3J0IFN3aXBlciBmcm9tICdzd2lwZXInO1xuXG5jb25zdCBzd2lwZXJEZXNrdG9wU2luZ2xlID0gbmV3IFN3aXBlcignLnN3aXBlci1kZXNrdG9wLXNpbmdsZScsIHtcbiAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgIHNwYWNlQmV0d2VlbjogMSxcblxuICAgIGF1dG9wbGF5OntcbiAgICAgICAgYXV0b3BsYXk6dHJ1ZSxcbiAgICAgICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlLFxuICAgIH0sXG5cbiAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgIGVsOiAnLnN3aXBlci1wYWdpbmF0aW9uJyxcbiAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgfSxcbn0pO1xuXG5jb25zdCBzd2lwZXJEZXNrdG9wTXVsdGlwbGUgPSBuZXcgU3dpcGVyKCcuc3dpcGVyLWRlc2t0b3AtbXVsdGlwbGUnLCB7XG4gICAgc2xpZGVzUGVyVmlldzogNSxcbiAgICBzcGFjZUJldHdlZW46IDEsXG4gICAgbG9vcDogdHJ1ZSxcblxuICAgIGF1dG9wbGF5OntcbiAgICAgICAgYXV0b3BsYXk6dHJ1ZSxcbiAgICAgICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlLFxuICAgIH0sXG5cbiAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgIGVsOiAnLnN3aXBlci1wYWdpbmF0aW9uJyxcbiAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgfSxcbn0pO1xuXG5jb25zdCBzd2lwZXJNb2JpbGVTaW5nbGUgPSBuZXcgU3dpcGVyKCcuc3dpcGVyLW1vYmlsZS1zaW5nbGUnLCB7XG4gICAgbG9vcDogdHJ1ZSxcbiAgICBzbGlkZXNQZXJWaWV3OjEsXG4gICAgc3BhY2VCZXR3ZWVuOjEsXG5cbiAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgIGVsOiAnLnN3aXBlci1wYWdpbmF0aW9uJyxcbiAgICB9LFxuXG59KTtcblxuY29uc3Qgc3dpcGVyTW9iaWxlTXVsdGlwbGUgPSBuZXcgU3dpcGVyKCcuc3dpcGVyLW1vYmlsZS1tdWx0aXBsZScsIHtcbiAgICBsb29wOiB0cnVlLFxuICAgIHBhZ2luYXRpb246IHtcbiAgICAgICAgZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxuICAgIH0sXG4gICAgYnJlYWtwb2ludHM6IHtcbiAgICAgICAgNzY4OiB7XG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgICAgICB9LFxuICAgICAgICA0NTA6IHtcbiAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDEuNSxcbiAgICAgICAgfSxcbiAgICAgICAgMzAwOiB7XG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLjMsXG4gICAgICAgIH0sXG4gICAgfVxuXG59KTtcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IGdzYXAgZnJvbSAnZ3NhcCc7XG5cbmV4cG9ydCBjb25zdCBkZWJvdW5jZSA9IChmdW5jLCB3YWl0LCBpbW1lZGlhdGUpID0+IHtcbiAgICB2YXIgdGltZW91dDtcbiAgICBpZiAodHlwZW9mIGZ1bmMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICAgICAgICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgICAgICAgIHZhciBsYXRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICBpZiAoIWltbWVkaWF0ZSkgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgY2FsbE5vdyA9IGltbWVkaWF0ZSAmJiAhdGltZW91dDtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcbiAgICAgICAgICAgIGlmIChjYWxsTm93KSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUud2FybignQSBmdW5jdGlvbiBpcyB1bmRlZmluZWQhIERlYm91bmNlIG1pZ2h0IG5vdCB3b3JrIGFzIGludGVuZGVkOiAnLCBmdW5jKTtcbiAgICB9XG59O1xuXG5leHBvcnQgY29uc3QgdGhyb3R0bGUgPSAoZnVuYywgbGltaXQpID0+IHtcbiAgICBsZXQgbGFzdEZ1bmM7XG4gICAgbGV0IGxhc3RSYW47XG5cbiAgICBpZiAodHlwZW9mIGZ1bmMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcztcbiAgICAgICAgICAgIGNvbnN0IGFyZ3MgPSBhcmd1bWVudHM7XG5cbiAgICAgICAgICAgIGlmICghbGFzdFJhbikge1xuICAgICAgICAgICAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICAgICAgICAgICAgbGFzdFJhbiA9IERhdGUubm93KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChsYXN0RnVuYyk7XG5cbiAgICAgICAgICAgICAgICBsYXN0RnVuYyA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoKERhdGUubm93KCkgLSBsYXN0UmFuKSA+PSBsaW1pdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RSYW4gPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgbGltaXQgLSAoRGF0ZS5ub3coKSAtIGxhc3RSYW4pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLndhcm4oJ0EgZnVuY3Rpb24gaXMgdW5kZWZpbmVkISBUaHJvdHRsZSBtaWdodCBub3Qgd29yayBhcyBpbnRlbmRlZDogJywgZnVuYyk7XG4gICAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGxlcnAgPSAoc3RhcnQsIGVuZCwgYW10KSA9PiB7XG4gICAgcmV0dXJuICgxIC0gYW10KSAqIHN0YXJ0ICsgYW10ICogZW5kO1xufTtcblxuZXhwb3J0IGNvbnN0IGNsYW1wID0gKG1pbiwgdmFsLCBtYXgpID0+IHtcbiAgICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgodmFsLCBtaW4pLCBtYXgpO1xufTtcblxuZXhwb3J0IGNvbnN0IGlyYW5kb20gPSAobWF4KSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNYXRoLmZsb29yKG1heCkpO1xuZXhwb3J0IGNvbnN0IHNlY29uZHMgPSAobXMpID0+IG1zICogMTAwMDtcblxuZXhwb3J0IGNvbnN0IG1lZGlhUXVlcnkgPSAocXVlcnkpID0+ICh3aW5kb3cubWF0Y2hNZWRpYShxdWVyeSkpLm1hdGNoZXM7XG5cbmV4cG9ydCBjb25zdCBzdGJTY3JvbGxUbyA9IChlbGUsIHNwZWVkID0gMjAwKSA9PiB7XG4gICAgaWYgKGdzYXApIHtcbiAgICAgICAgZ3NhcC5yZWdpc3RlclBsdWdpbihTY3JvbGxUb1BsdWdpbik7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuICAgICAgICBnc2FwLnRvKHdpbmRvdywge1xuICAgICAgICAgICAgZHVyYXRpb246IHNwZWVkIC8gMTAwMCxcbiAgICAgICAgICAgIGVhc2U6ICdQb3dlcjMuZWFzZU91dCcsXG4gICAgICAgICAgICBzY3JvbGxUbzoge1xuICAgICAgICAgICAgICAgIHk6ICQoZWxlKS5vZmZzZXQoKS50b3BcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgJChbZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCBkb2N1bWVudC5ib2R5XSkuYW5pbWF0ZSh7XG4gICAgICAgICAgICBzY3JvbGxUb3A6ICQoZWxlKS5vZmZzZXQoKS50b3BcbiAgICAgICAgfSwgc3BlZWQpO1xuICAgIH1cbn07XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIndXNlIHN0cmljdCc7XG5cbi8vIC0tLS0tLS0tLS0gSW1hZ2UgLyBjc3MgYXNzZXRzIC0tLS0tLS0tLS0tLVxuXG5yZXF1aXJlLmNvbnRleHQoJy4vYXNzZXRzLycsIHRydWUsIC9cXC4oc3ZnfHBuZ3xqcGU/ZykkLyk7XG5yZXF1aXJlKCcuL2Fzc2V0cy9zdHlsZXMvbWFpbi5zY3NzJyk7XG5cbmNvbnN0IGluY2x1ZGVDb21wb25lbnQgPSAoc2NyaXB0KSA9PiByZXF1aXJlKGAuL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvJHtzY3JpcHR9LmpzYCk7XG5cbi8vIC0tLS0tLS0tLS0tLS0tIExhenkgbG9hZCAtLS0tLS0tLS0tLS0tLS0tLVxuXG4vKlxuICogaW1wb3J0IExhenlJbWFnZUxvYWRlciBmcm9tICcuL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvbGF6eWltYWdlbG9hZGVyLmpzJztcbiAqIExhenlJbWFnZUxvYWRlci5pbml0KCk7XG4gKi9cblxuLy8gLS0tLS0tLS0tLS0gQ3VzdG9tIHNjcmlwdHMgLS0tLS0tLS0tLS0tLS0tXG5pbmNsdWRlQ29tcG9uZW50KCdzbGlkZXInKTtcbmluY2x1ZGVDb21wb25lbnQoJ25hdmJhcicpO1xuaW5jbHVkZUNvbXBvbmVudCgnc3dpcGVyJyk7XG5pbmNsdWRlQ29tcG9uZW50KCdkcm9wLWJhcnMnKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZ3NhcDsiLCJtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTsiLCJtb2R1bGUuZXhwb3J0cyA9IFN3aXBlcjsiXSwic291cmNlUm9vdCI6IiJ9