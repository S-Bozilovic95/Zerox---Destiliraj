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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cyBzeW5jIFxcLihzdmd8cG5nfGpwZSIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9zdmcvbmV3c2xldHRlci5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMgc3luYyBeXFwuXFwvLipcXC5qcyQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvY29tcG9uZW50cy9sYXp5aW1hZ2Vsb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvbmF2YmFyLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc2NyaXB0cy9jb21wb25lbnRzL3Jlc291cmNlLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc2NyaXB0cy9jb21wb25lbnRzL3NsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvY29tcG9uZW50cy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3N0eWxlcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImdzYXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqUXVlcnlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJTd2lwZXJcIiJdLCJuYW1lcyI6WyJkb0ltYWdlUHJlbG9hZCIsInVybCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiaW1hZ2UiLCJJbWFnZSIsInNyY3NldCIsIm9ubG9hZCIsIm9uZXJyb3IiLCJjbGFtcCIsInZhbHVlIiwibWluIiwibWF4IiwiTWF0aCIsImFzc2VydCIsInByZWRpY2F0ZSIsIm1lc3NhZ2UiLCJFcnJvciIsIkxhenlJbWFnZUxvYWRlciIsImltYWdlcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsIlBFTkRJTkdfQ0xBU1MiLCJjb25maWciLCJyb290Iiwicm9vdE1hcmdpbiIsInRocmVzaG9sZCIsIlRIUkVTSE9MRCIsIk9CU0VSVkVSX1NVUFBPUlRFRCIsImxsTG9hZEltYWdlc0RlZmF1bHQiLCJsbENvdW50IiwibGVuZ3RoIiwibGxJbnRlcnNlY3RlZCIsImJpbmQiLCJsbE9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJmb3JFYWNoIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJIQU5ETEVEX0NMQVNTIiwib2JzZXJ2ZSIsImRpc2Nvbm5lY3QiLCJlbnRyaWVzIiwiZW50cnkiLCJpbnRlcnNlY3Rpb25SYXRpbyIsImlzSW50ZXJzZWN0aW5nIiwibGxQcmVsb2FkSW1hZ2UiLCJ0YXJnZXQiLCJ1bm9ic2VydmUiLCJzcmMiLCJkYXRhc2V0IiwiSGVscGVycyIsInRoZW4iLCJsbFRhZ0ltYWdlIiwiQXJyYXkiLCJmcm9tIiwiaW1nIiwiZWwiLCJxdWVyeVNlbGVjdG9yIiwibmV3SW1nIiwiYWRkIiwiTE9BREVEX0NMQVNTIiwiUkVWRUFMX0NMQVNTIiwiYWx0IiwiYXBwZW5kQ2hpbGQiLCJyZW1vdmUiLCJ3aW5kb3ciLCJsbEluc3RhbmNlIiwibGxEaXNjb25uZWN0IiwibmF2YmFyIiwibWVudUljb24iLCJvdmVybGF5IiwidG9nZ2xlTmF2YmFyIiwidG9nZ2xlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhZ2VZT2Zmc2V0IiwiZ3NhcCIsIiQiLCJyZXNvdXJjZSIsIlN3aXBlciIsInNsaWRlck1vbWVudHVtUmF0aW8iLCJJc0luaXRpYWxpemVkIiwiZWxlIiwiaGFzQ2xhc3MiLCJzd2lwZXJJbnN0YW5jZXMiLCJjYXRlZ29yeSIsImluc3RhbmNlIiwiaW5pdCIsImJpZyIsImJpZ1NsaWRlciIsInNldHVwQmlnU2xpZGVyIiwiY3VycmVudE51bWJlciIsInNsaWRlc1BlclZpZXciLCJzcGFjZUJldHdlZW4iLCJmcmVlTW9kZSIsImZyZWVNb2RlTW9tZW50dW1SYXRpbyIsImNlbnRlcmVkU2xpZGVzIiwibG9vcCIsIm9uIiwic2xpZGVDaGFuZ2UiLCJjb25zb2xlIiwibG9nIiwiYXR0ciIsInRleHQiLCJhY3RpdmVJbmRleCIsInBhcnNlSW50IiwicGFnaW5hdGlvbiIsInR5cGUiLCJwcm9ncmVzc2JhckZpbGxDbGFzcyIsIm1vZGlmaWVyQ2xhc3MiLCJyZW5kZXJQcm9ncmVzc2JhciIsImNhdGVnb3J5U2xpZGVyIiwic2V0dXBDYXRlZ29yeVNsaWRlciIsImRlYm91bmNlIiwiZnVuYyIsIndhaXQiLCJpbW1lZGlhdGUiLCJ0aW1lb3V0IiwiY29udGV4dCIsImFyZ3MiLCJhcmd1bWVudHMiLCJsYXRlciIsImFwcGx5IiwiY2FsbE5vdyIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJ3YXJuIiwidGhyb3R0bGUiLCJsaW1pdCIsImxhc3RGdW5jIiwibGFzdFJhbiIsIkRhdGUiLCJub3ciLCJsZXJwIiwic3RhcnQiLCJlbmQiLCJhbXQiLCJ2YWwiLCJpcmFuZG9tIiwiZmxvb3IiLCJyYW5kb20iLCJzZWNvbmRzIiwibXMiLCJtZWRpYVF1ZXJ5IiwicXVlcnkiLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsInN0YlNjcm9sbFRvIiwic3BlZWQiLCJyZWdpc3RlclBsdWdpbiIsIlNjcm9sbFRvUGx1Z2luIiwidG8iLCJkdXJhdGlvbiIsImVhc2UiLCJzY3JvbGxUbyIsInkiLCJvZmZzZXQiLCJ0b3AiLCJkb2N1bWVudEVsZW1lbnQiLCJib2R5IiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsInJlcXVpcmUiLCJpbmNsdWRlQ29tcG9uZW50Iiwic2NyaXB0Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7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QUFZRixzRkFBUSxZQUErQkUsTUFBaEMsU0FBbkI7QUFBQSxDQUF6QixDLENBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBQ0FELGdCQUFnQixDQUFDLFFBQUQsQ0FBaEI7QUFDQUEsZ0JBQWdCLENBQUMsUUFBRCxDQUFoQixDOzs7Ozs7Ozs7OztBQ2xCQSxzQjs7Ozs7Ozs7Ozs7QUNBQSx3Qjs7Ozs7Ozs7Ozs7QUNBQSx3QiIsImZpbGUiOiJhc3NldHMvanMvbWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vaW1hZ2VzL3N2Zy9uZXdzbGV0dGVyLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvc3ZnL25ld3NsZXR0ZXIuc3ZnXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2Fzc2V0cyBzeW5jIHJlY3Vyc2l2ZSBcXFxcLihzdmd8cG5nfGpwZT9nKSRcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLi4vaW1hZ2VzL3N2Zy9uZXdzbGV0dGVyLnN2Z1wiOyIsInZhciBtYXAgPSB7XG5cdFwiLi9oZWxwZXJzLmpzXCI6IFwiLi9zcmMvYXNzZXRzL3NjcmlwdHMvY29tcG9uZW50cy9oZWxwZXJzLmpzXCIsXG5cdFwiLi9sYXp5aW1hZ2Vsb2FkZXIuanNcIjogXCIuL3NyYy9hc3NldHMvc2NyaXB0cy9jb21wb25lbnRzL2xhenlpbWFnZWxvYWRlci5qc1wiLFxuXHRcIi4vbmF2YmFyLmpzXCI6IFwiLi9zcmMvYXNzZXRzL3NjcmlwdHMvY29tcG9uZW50cy9uYXZiYXIuanNcIixcblx0XCIuL3Jlc291cmNlLmpzXCI6IFwiLi9zcmMvYXNzZXRzL3NjcmlwdHMvY29tcG9uZW50cy9yZXNvdXJjZS5qc1wiLFxuXHRcIi4vc2xpZGVyLmpzXCI6IFwiLi9zcmMvYXNzZXRzL3NjcmlwdHMvY29tcG9uZW50cy9zbGlkZXIuanNcIixcblx0XCIuL3V0aWxzLmpzXCI6IFwiLi9zcmMvYXNzZXRzL3NjcmlwdHMvY29tcG9uZW50cy91dGlscy5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9hc3NldHMvc2NyaXB0cy9jb21wb25lbnRzIHN5bmMgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLipcXFxcLmpzJFwiOyIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZG9JbWFnZVByZWxvYWQgPSB1cmwgPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGltYWdlLnNyY3NldCA9IHVybDtcbiAgICAgICAgaW1hZ2Uub25sb2FkID0gcmVzb2x2ZTtcbiAgICAgICAgaW1hZ2Uub25lcnJvciA9IHJlamVjdDtcbiAgICB9KTtcbn07XG5cbmNvbnN0IGNsYW1wID0gKHZhbHVlLCBtaW4sIG1heCkgPT4gTWF0aC5tYXgobWluLCBNYXRoLm1pbihtYXgsIHZhbHVlKSk7XG5cbmNvbnN0IGFzc2VydCA9IChwcmVkaWNhdGUsIG1lc3NhZ2UpID0+IHtcbiAgICBpZiAocHJlZGljYXRlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgYXNzZXJ0LCBjbGFtcCwgZG9JbWFnZVByZWxvYWRcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBIZWxwZXJzIGZyb20gJy4vaGVscGVycyc7XG5cbmNsYXNzIExhenlJbWFnZUxvYWRlciB7XG4gICAgc3RhdGljIGdldCBPQlNFUlZFUl9TVVBQT1JURUQgKCkge1xuICAgICAgICByZXR1cm4gKCdJbnRlcnNlY3Rpb25PYnNlcnZlcicgaW4gd2luZG93KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IFBFTkRJTkdfQ0xBU1MgKCkge1xuICAgICAgICByZXR1cm4gJ2xhenktaW1hZ2UtLXBlbmRpbmcnO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgSEFORExFRF9DTEFTUyAoKSB7XG4gICAgICAgIHJldHVybiAnbGF6eS1pbWFnZS0tbG9hZGVkJztcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IExPQURFRF9DTEFTUyAoKSB7XG4gICAgICAgIHJldHVybiAnbGF6eS1pbWFnZV9fYWN0dWFsJztcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IFJFVkVBTF9DTEFTUyAoKSB7XG4gICAgICAgIHJldHVybiAnZmFkZS1pbic7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBUSFJFU0hPTEQgKCkge1xuICAgICAgICByZXR1cm4gMC4xO1xuICAgIH1cblxuICAgIHN0YXRpYyBpbml0ICgpIHtcbiAgICAgICAgaWYgKHRoaXMubGxJbnN0YW5jZSkge1xuICAgICAgICAgICAgdGhpcy5sbEluc3RhbmNlLmxsRGlzY29ubmVjdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5sbENvdW50ID0gMDtcbiAgICAgICAgdGhpcy5sbEluc3RhbmNlID0gbmV3IExhenlJbWFnZUxvYWRlcigpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgdmFyIGltYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke0xhenlJbWFnZUxvYWRlci5QRU5ESU5HX0NMQVNTfWApO1xuICAgICAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICAgICAgICByb290OiBudWxsLFxuICAgICAgICAgICAgcm9vdE1hcmdpbjogJzYwcHggMHB4JyxcbiAgICAgICAgICAgIHRocmVzaG9sZDogTGF6eUltYWdlTG9hZGVyLlRIUkVTSE9MRFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmICghTGF6eUltYWdlTG9hZGVyLk9CU0VSVkVSX1NVUFBPUlRFRCkge1xuICAgICAgICAgICAgdGhpcy5sbExvYWRJbWFnZXNEZWZhdWx0KGltYWdlcyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxsQ291bnQgPSBpbWFnZXMubGVuZ3RoO1xuICAgICAgICB0aGlzLmxsSW50ZXJzZWN0ZWQgPSB0aGlzLmxsSW50ZXJzZWN0ZWQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5sbE9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKHRoaXMubGxJbnRlcnNlY3RlZCwgY29uZmlnKTtcblxuICAgICAgICBpbWFnZXMuZm9yRWFjaChpbWFnZSA9PiB7XG4gICAgICAgICAgICBpZiAoaW1hZ2UuY2xhc3NMaXN0LmNvbnRhaW5zKExhenlJbWFnZUxvYWRlci5IQU5ETEVEX0NMQVNTKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5sbE9ic2VydmVyLm9ic2VydmUoaW1hZ2UpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBsbERpc2Nvbm5lY3QgKCkge1xuICAgICAgICBpZiAoIXRoaXMubGxPYnNlcnZlcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5sbE9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICB9XG5cbiAgICBsbEludGVyc2VjdGVkIChlbnRyaWVzKSB7XG4gICAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgICAgIGlmIChlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA8IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxsQ291bnQtLTtcbiAgICAgICAgICAgICAgICB0aGlzLmxsUHJlbG9hZEltYWdlKGVudHJ5LnRhcmdldCk7XG4gICAgICAgICAgICAgICAgdGhpcy5sbE9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGhpcy5sbENvdW50ID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5sbE9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICB9XG5cbiAgICBsbFByZWxvYWRJbWFnZSAoaW1hZ2UpIHtcbiAgICAgICAgY29uc3Qgc3JjID0gaW1hZ2UuZGF0YXNldC5zcmNzZXQ7XG4gICAgICAgIGlmICghc3JjKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gSGVscGVycy5kb0ltYWdlUHJlbG9hZChzcmMpLnRoZW4oKCkgPT4gdGhpcy5sbFRhZ0ltYWdlKGltYWdlLCBzcmMpKTtcbiAgICB9XG5cbiAgICBsbExvYWRJbWFnZXNEZWZhdWx0IChpbWFnZXMpIHtcbiAgICAgICAgQXJyYXkuZnJvbShpbWFnZXMpLmZvckVhY2goaW1hZ2UgPT4gdGhpcy5sbFByZWxvYWRJbWFnZShpbWFnZSkpO1xuICAgIH1cblxuICAgIGxsVGFnSW1hZ2UgKGltZywgc3JjKSB7XG4gICAgICAgIGNvbnN0IGVsID0gaW1nLnF1ZXJ5U2VsZWN0b3IoJy5sYXp5LWltYWdlX19jb250ZW50Jyk7XG4gICAgICAgIGlmICghZWwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaW1nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbmV3SW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgIG5ld0ltZy5jbGFzc0xpc3QuYWRkKExhenlJbWFnZUxvYWRlci5MT0FERURfQ0xBU1MpO1xuICAgICAgICBuZXdJbWcuc3Jjc2V0ID0gc3JjO1xuICAgICAgICBuZXdJbWcuY2xhc3NMaXN0LmFkZChMYXp5SW1hZ2VMb2FkZXIuUkVWRUFMX0NMQVNTKTtcbiAgICAgICAgbmV3SW1nLmFsdCA9IGVsLmFsdDtcbiAgICAgICAgaW1nLmFwcGVuZENoaWxkKG5ld0ltZyk7XG5cbiAgICAgICAgaW1nLmRhdGFzZXQuc3Jjc2V0ID0gJyc7XG4gICAgICAgIGltZy5jbGFzc0xpc3QucmVtb3ZlKExhenlJbWFnZUxvYWRlci5QRU5ESU5HX0NMQVNTKTtcbiAgICAgICAgaW1nLmNsYXNzTGlzdC5hZGQoTGF6eUltYWdlTG9hZGVyLkhBTkRMRURfQ0xBU1MpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF6eUltYWdlTG9hZGVyO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cclxubGV0IG5hdmJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXInKTtcclxubGV0IG1lbnVJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJhcl9fc21hbGwtbWVudV9faWNvbicpO1xyXG5sZXQgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5Jyk7XHJcblxyXG4vLyBmdW5jdGlvbnNcclxuZnVuY3Rpb24gdG9nZ2xlTmF2YmFyICgpIHtcclxuICAgIG5hdmJhci5jbGFzc0xpc3QudG9nZ2xlKCduYXZiYXItYWN0aXZlJyk7XHJcbiAgICBvdmVybGF5LmNsYXNzTGlzdC50b2dnbGUoJ292ZXJsYXktYWN0aXZlJyk7XHJcbn1cclxuXHJcbi8vIHRvZ2dsZSBuYXZiYXJcclxuaWYgKG1lbnVJY29uICYmIG5hdmJhciAmJiBvdmVybGF5KSB7XHJcbiAgICBtZW51SWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZU5hdmJhcik7XHJcbiAgICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlTmF2YmFyKTtcclxufVxyXG5cclxuLy8gdG9wIHRleHQgc2xpZGVcclxuaWYgKG5hdmJhcikge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcclxuICAgICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID4gMjAwKSB7XHJcbiAgICAgICAgICAgIG5hdmJhci5jbGFzc0xpc3QuYWRkKCd0b3AtYm94LXNsaWRlJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbmF2YmFyLmNsYXNzTGlzdC5yZW1vdmUoJ3RvcC1ib3gtc2xpZGUnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBnc2FwIGZyb20gJ2dzYXAnO1xuXG5pZiAoZ3NhcCkge1xuICAgICQoZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCByZXNvdXJjZSA9ICQoJy5yZXNvdXJjZScpO1xuICAgICAgICAvLyBsZXQgc3dhcCA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChyZXNvdXJjZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvLyBjb25zdCBjaGFuZ2VDbGFzc2VzID0gKCkgPT4ge1xuICAgICAgICAgICAgLy8gICAgIGxldCByZWQgPSAkKCcucmVzb3VyY2VfX2Jsb2NrLXJlZCcpWzBdO1xuICAgICAgICAgICAgLy8gICAgIGxldCBibGFjayA9ICQoJy5yZXNvdXJjZV9fYmxvY2stYmxhY2snKVswXTtcblxuICAgICAgICAgICAgLy8gICAgIGlmICghc3dhcCkge1xuICAgICAgICAgICAgLy8gICAgICAgICByZWQuY2xhc3NMaXN0LmFkZCgnc3dhcCcpO1xuICAgICAgICAgICAgLy8gICAgICAgICBibGFjay5jbGFzc0xpc3QuYWRkKCdzd2FwJyk7XG4gICAgICAgICAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgcmVkLmNsYXNzTGlzdC5yZW1vdmUoJ3N3YXAnKTtcbiAgICAgICAgICAgIC8vICAgICAgICAgYmxhY2suY2xhc3NMaXN0LnJlbW92ZSgnc3dhcCcpO1xuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vICAgICBzd2FwID0gIXN3YXA7XG4gICAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICAgIC8vIFNjcm9sbFRyaWdnZXIuY3JlYXRlKHtcbiAgICAgICAgICAgIC8vICAgICB0YXJnZXQ6ICcucmVzb3VyY2VfX2Jsb2NrJyxcbiAgICAgICAgICAgIC8vICAgICBzdGFydDogJ3RvcCB0b3AnLFxuICAgICAgICAgICAgLy8gICAgIG1hcmtlcnM6IHRydWUsXG4gICAgICAgICAgICAvLyAgICAgLy8gZW5kOiBkb2N1bWVudC5pbm5lckhlaWdodCxcbiAgICAgICAgICAgIC8vICAgICBvblRvZ2dsZTogKCkgPT4gY2hhbmdlQ2xhc3NlcygpLFxuICAgICAgICAgICAgLy8gfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFN3aXBlciBmcm9tICdzd2lwZXInO1xuLy8gaW1wb3J0IGdzYXAgZnJvbSAnZ3NhcCc7XG4vLyBpbXBvcnQgeyBkZWJvdW5jZSxtZWRpYVF1ZXJ5IH0gZnJvbSAnLi91dGlscyc7XG5cbmlmIChTd2lwZXIpIHtcbiAgICAkKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gLS0tLSBBTEwgU0xJREVSUyAtLS0tLVxuICAgICAgICBjb25zdCBzbGlkZXJNb21lbnR1bVJhdGlvID0gMC40NTU7XG4gICAgICAgIGNvbnN0IElzSW5pdGlhbGl6ZWQgPSAoZWxlKSA9PiBlbGUuaGFzQ2xhc3MoJ3N3aXBlci1jb250YWluZXItaW5pdGlhbGl6ZWQnKTtcbiAgICAgICAgY29uc3Qgc3dpcGVySW5zdGFuY2VzID0ge1xuICAgICAgICAgICAgY2F0ZWdvcnk6ICAgICAgICAgeyBpbnN0YW5jZTogbnVsbCwgaW5pdDogZmFsc2UgfSxcbiAgICAgICAgICAgIGJpZzogICAgICAgICAgICAgIHsgaW5zdGFuY2U6IG51bGwsIGluaXQ6IGZhbHNlIH0sXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gY29uc3Qgc3dpcGVyU3RhdGUgPSAoc2xpZGVyLCBzd2lwZXJJbnN0YW5jZSwgc2V0dXApID0+IHtcbiAgICAgICAgLy8gICAgIGlmIChtZWRpYVF1ZXJ5KCcobWF4LXdpZHRoOiA5OTFweCknKSkge1xuICAgICAgICAvLyAgICAgICAgIGlmICghc3dpcGVySW5zdGFuY2UuaW5pdCkge1xuICAgICAgICAvLyAgICAgICAgICAgICBzd2lwZXJJbnN0YW5jZS5pbml0ID0gdHJ1ZTtcbiAgICAgICAgLy8gICAgICAgICAgICAgc2V0dXAoKTtcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vICAgICBpZiAobWVkaWFRdWVyeSgnKG1pbi13aWR0aDogOTkycHgpJykpIHtcbiAgICAgICAgLy8gICAgICAgICBpZiAoc3dpcGVySW5zdGFuY2UuaW5pdCkge1xuICAgICAgICAvLyAgICAgICAgICAgICBzd2lwZXJJbnN0YW5jZS5pbnN0YW5jZS5kZXN0cm95KCk7XG4gICAgICAgIC8vICAgICAgICAgICAgIHN3aXBlckluc3RhbmNlLmluaXQgPSBmYWxzZTtcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH07XG5cbiAgICAgICAgLy8gLS0tLS0tLS0gIEJJRyBTTElERVIgLS0tLS0tLS1cblxuICAgICAgICBjb25zdCBiaWdTbGlkZXIgPSAkKCcuYmlnLXNsaWRlcl9fc2xpZGVyJyk7XG5cbiAgICAgICAgZnVuY3Rpb24gc2V0dXBCaWdTbGlkZXIgKCkge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudE51bWJlciA9ICQoJy5iaWctc2xpZGVyX19jdXJyZW50LWFjdGl2ZScpO1xuICAgICAgICAgICAgc3dpcGVySW5zdGFuY2VzLmJpZy5pbnN0YW5jZSA9IG5ldyBTd2lwZXIoYmlnU2xpZGVyWzBdLCB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAnYXV0bycsXG4gICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiA1MCxcbiAgICAgICAgICAgICAgICBmcmVlTW9kZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgZnJlZU1vZGVNb21lbnR1bVJhdGlvOiBzbGlkZXJNb21lbnR1bVJhdGlvLFxuICAgICAgICAgICAgICAgIGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxuICAgICAgICAgICAgICAgIGxvb3A6IHRydWUsXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVDaGFuZ2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzd2lwZXJJbnN0YW5jZXMuYmlnLmluc3RhbmNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJCgnLmJpZy1zbGlkZXJfX2N1cnJlbnQtYWN0aXZlJykuYXR0cignZGF0YS1sZW5ndGgnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudE51bWJlci50ZXh0KHN3aXBlckluc3RhbmNlcy5iaWcuaW5zdGFuY2UuYWN0aXZlSW5kZXggJSBwYXJzZUludChjdXJyZW50TnVtYmVyLmF0dHIoJ2RhdGEtbGVuZ3RoJykpICsgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHBhZ2luYXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgZWw6ICcuYmlnLXNsaWRlcl9fcHJvZ3Jlc3MnLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAncHJvZ3Jlc3NiYXInLFxuICAgICAgICAgICAgICAgICAgICBwcm9ncmVzc2JhckZpbGxDbGFzczogJ2JpZy1zbGlkZXJfX2JhcicsXG4gICAgICAgICAgICAgICAgICAgIG1vZGlmaWVyQ2xhc3M6ICdiaWctc2xpZGVyX19iYXItLScsXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlclByb2dyZXNzYmFyOiBmdW5jdGlvbiAocHJvZ3Jlc3NiYXJGaWxsQ2xhc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnPHNwYW4gY2xhc3M9XCInICsgcHJvZ3Jlc3NiYXJGaWxsQ2xhc3MgKyAnXCI+PC9zcGFuPic7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJpZ1NsaWRlci5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpZiAoIUlzSW5pdGlhbGl6ZWQoYmlnU2xpZGVyKSkge1xuICAgICAgICAgICAgICAgIHNldHVwQmlnU2xpZGVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyAtLS0tLS0tLSBDQVRFR09SWSBTTElERVIgLS0tLS0tLS1cbiAgICAgICAgY29uc3QgY2F0ZWdvcnlTbGlkZXIgPSAkKCcuY2F0ZWdvcnktc2xpZGVyX19zbGlkZXInKTtcblxuICAgICAgICBmdW5jdGlvbiBzZXR1cENhdGVnb3J5U2xpZGVyICgpIHtcbiAgICAgICAgICAgIHN3aXBlckluc3RhbmNlcy5jYXRlZ29yeS5pbnN0YW5jZSA9IG5ldyBTd2lwZXIoY2F0ZWdvcnlTbGlkZXJbMF0sIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcbiAgICAgICAgICAgICAgICBmcmVlTW9kZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBmcmVlTW9kZU1vbWVudHVtUmF0aW86IHNsaWRlck1vbWVudHVtUmF0aW8sXG4gICAgICAgICAgICAgICAgcGFnaW5hdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICBlbDogJy5jYXRlZ29yeS1zbGlkZXJfX3Byb2dyZXNzJyxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3Byb2dyZXNzYmFyJyxcbiAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3NiYXJGaWxsQ2xhc3M6ICdjYXRlZ29yeS1zbGlkZXJfX2JhcicsXG4gICAgICAgICAgICAgICAgICAgIG1vZGlmaWVyQ2xhc3M6ICdjYXRlZ29yeS1zbGlkZXJfX2Jhci0tJyxcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyUHJvZ3Jlc3NiYXI6IGZ1bmN0aW9uIChwcm9ncmVzc2JhckZpbGxDbGFzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICc8c3BhbiBjbGFzcz1cIicgKyBwcm9ncmVzc2JhckZpbGxDbGFzcyArICdcIj48L3NwYW4+JztcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjYXRlZ29yeVNsaWRlci5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpZiAoIUlzSW5pdGlhbGl6ZWQoY2F0ZWdvcnlTbGlkZXIpKSB7XG4gICAgICAgICAgICAgICAgc2V0dXBDYXRlZ29yeVNsaWRlcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBnc2FwIGZyb20gJ2dzYXAnO1xuXG5leHBvcnQgY29uc3QgZGVib3VuY2UgPSAoZnVuYywgd2FpdCwgaW1tZWRpYXRlKSA9PiB7XG4gICAgdmFyIHRpbWVvdXQ7XG4gICAgaWYgKHR5cGVvZiBmdW5jICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICAgICAgICB2YXIgbGF0ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgICAgICAgICAgICAgaWYgKCFpbW1lZGlhdGUpIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIGNhbGxOb3cgPSBpbW1lZGlhdGUgJiYgIXRpbWVvdXQ7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCk7XG4gICAgICAgICAgICBpZiAoY2FsbE5vdykgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLndhcm4oJ0EgZnVuY3Rpb24gaXMgdW5kZWZpbmVkISBEZWJvdW5jZSBtaWdodCBub3Qgd29yayBhcyBpbnRlbmRlZDogJywgZnVuYyk7XG4gICAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHRocm90dGxlID0gKGZ1bmMsIGxpbWl0KSA9PiB7XG4gICAgbGV0IGxhc3RGdW5jO1xuICAgIGxldCBsYXN0UmFuO1xuXG4gICAgaWYgKHR5cGVvZiBmdW5jICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXM7XG4gICAgICAgICAgICBjb25zdCBhcmdzID0gYXJndW1lbnRzO1xuXG4gICAgICAgICAgICBpZiAoIWxhc3RSYW4pIHtcbiAgICAgICAgICAgICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgICAgICAgICAgIGxhc3RSYW4gPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQobGFzdEZ1bmMpO1xuXG4gICAgICAgICAgICAgICAgbGFzdEZ1bmMgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChEYXRlLm5vdygpIC0gbGFzdFJhbikgPj0gbGltaXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0UmFuID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIGxpbWl0IC0gKERhdGUubm93KCkgLSBsYXN0UmFuKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdBIGZ1bmN0aW9uIGlzIHVuZGVmaW5lZCEgVGhyb3R0bGUgbWlnaHQgbm90IHdvcmsgYXMgaW50ZW5kZWQ6ICcsIGZ1bmMpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBjb25zdCBsZXJwID0gKHN0YXJ0LCBlbmQsIGFtdCkgPT4ge1xuICAgIHJldHVybiAoMSAtIGFtdCkgKiBzdGFydCArIGFtdCAqIGVuZDtcbn07XG5cbmV4cG9ydCBjb25zdCBjbGFtcCA9IChtaW4sIHZhbCwgbWF4KSA9PiB7XG4gICAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KHZhbCwgbWluKSwgbWF4KTtcbn07XG5cbmV4cG9ydCBjb25zdCBpcmFuZG9tID0gKG1heCkgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTWF0aC5mbG9vcihtYXgpKTtcbmV4cG9ydCBjb25zdCBzZWNvbmRzID0gKG1zKSA9PiBtcyAqIDEwMDA7XG5cbmV4cG9ydCBjb25zdCBtZWRpYVF1ZXJ5ID0gKHF1ZXJ5KSA9PiAod2luZG93Lm1hdGNoTWVkaWEocXVlcnkpKS5tYXRjaGVzO1xuXG5leHBvcnQgY29uc3Qgc3RiU2Nyb2xsVG8gPSAoZWxlLCBzcGVlZCA9IDIwMCkgPT4ge1xuICAgIGlmIChnc2FwKSB7XG4gICAgICAgIGdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVG9QbHVnaW4pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cbiAgICAgICAgZ3NhcC50byh3aW5kb3csIHtcbiAgICAgICAgICAgIGR1cmF0aW9uOiBzcGVlZCAvIDEwMDAsXG4gICAgICAgICAgICBlYXNlOiAnUG93ZXIzLmVhc2VPdXQnLFxuICAgICAgICAgICAgc2Nyb2xsVG86IHtcbiAgICAgICAgICAgICAgICB5OiAkKGVsZSkub2Zmc2V0KCkudG9wXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgICQoW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgZG9jdW1lbnQuYm9keV0pLmFuaW1hdGUoe1xuICAgICAgICAgICAgc2Nyb2xsVG9wOiAkKGVsZSkub2Zmc2V0KCkudG9wXG4gICAgICAgIH0sIHNwZWVkKTtcbiAgICB9XG59O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyAtLS0tLS0tLS0tIEltYWdlIC8gY3NzIGFzc2V0cyAtLS0tLS0tLS0tLS1cblxucmVxdWlyZS5jb250ZXh0KCcuL2Fzc2V0cy8nLCB0cnVlLCAvXFwuKHN2Z3xwbmd8anBlP2cpJC8pO1xucmVxdWlyZSgnLi9hc3NldHMvc3R5bGVzL21haW4uc2NzcycpO1xuXG5jb25zdCBpbmNsdWRlQ29tcG9uZW50ID0gKHNjcmlwdCkgPT4gcmVxdWlyZShgLi9hc3NldHMvc2NyaXB0cy9jb21wb25lbnRzLyR7c2NyaXB0fS5qc2ApO1xuXG4vLyAtLS0tLS0tLS0tLS0tLSBMYXp5IGxvYWQgLS0tLS0tLS0tLS0tLS0tLS1cblxuLypcbiAqIGltcG9ydCBMYXp5SW1hZ2VMb2FkZXIgZnJvbSAnLi9hc3NldHMvc2NyaXB0cy9jb21wb25lbnRzL2xhenlpbWFnZWxvYWRlci5qcyc7XG4gKiBMYXp5SW1hZ2VMb2FkZXIuaW5pdCgpO1xuICovXG5cbi8vIC0tLS0tLS0tLS0tIEN1c3RvbSBzY3JpcHRzIC0tLS0tLS0tLS0tLS0tLVxuaW5jbHVkZUNvbXBvbmVudCgnc2xpZGVyJyk7XG5pbmNsdWRlQ29tcG9uZW50KCduYXZiYXInKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZ3NhcDsiLCJtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTsiLCJtb2R1bGUuZXhwb3J0cyA9IFN3aXBlcjsiXSwic291cmNlUm9vdCI6IiJ9