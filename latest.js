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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({});

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getWindowSize */
/* harmony export (immutable) */ __webpack_exports__["c"] = hasOwnNestedProperty;
/* harmony export (immutable) */ __webpack_exports__["e"] = resizePopup;
/* harmony export (immutable) */ __webpack_exports__["f"] = arrayBufferToBase64;
/* harmony export (immutable) */ __webpack_exports__["a"] = loadScript;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Cookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return log; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__settings__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__session__ = __webpack_require__(0);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };




function getWindowSize() {
  var e = document.documentElement;
  var g = document.getElementsByTagName('body')[0];
  var width = window.innerWidth || e.clientWidth || g.clientWidth;
  var height = window.innerHeight || e.clientHeight || g.clientHeight;

  return { width: width, height: height };
}

function hasOwnNestedProperty(obj, prop) {
  var parts = prop.split('.');
  for (var i = 0, l = parts.length; i < l; i++) {
    var part = parts[i];
    if (obj !== null && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && part in obj) {
      obj = obj[part];
    } else {
      return false;
    }
  }
  return true;
}

function resizePopup(width, height) {
  var windowSize = getWindowSize();

  if (windowSize.width >= width) {
    $('.mf-wrapper').css({ width: width + 'px' });
  } else {
    $('.mf-wrapper').css({ width: '100%' });
  }

  if (windowSize.height >= height) {
    $('.mf-wrapper').css({ height: height + 'px' });
  } else {
    $('.mf-wrapper').css({ height: '100%' });
  }
}

function arrayBufferToBase64(buffer) {
  var binary = '';
  var bytes = new Uint8Array(buffer);
  var len = bytes.byteLength;
  for (var i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return window.btoa(binary);
}

function loadScript(url, loadCallback) {
  var l = document.createElement('script');
  l.src = url;
  l.type = 'text/javascript';
  l.async = true;
  l.onload = loadCallback;
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(l, s);
}

var Cookie = {
  PREFIX: 'mf_',

  get: function get(name) {
    var matches = document.cookie.match(new RegExp('(?:^|; )' + this.PREFIX + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'));
    return matches ? decodeURIComponent(matches[1]) : void 0;
  },

  set: function set(name, value, options) {
    options = options || {};
    /* Options can be:
     expires - msec / Date obj
     path - like /
     domain - site.com
     secure - true/false
     */

    // Force Defaults
    if (true) {
      if (typeof options.path === 'undefined') {
        options.path = '/';
      }
      if (typeof options.domain === 'undefined') {
        if (typeof __WEBPACK_IMPORTED_MODULE_0__settings__["a" /* default */].subscribe.cookie_domain !== 'undefined') {
          options.domain = __WEBPACK_IMPORTED_MODULE_0__settings__["a" /* default */].subscribe.cookie_domain;
        } else {
          options.domain = location.host;
        }
      }
    }

    var expires = options.expires;
    if (typeof expires === 'number' && expires) {
      var d = new Date();
      d.setTime(d.getTime() + expires);
      expires = options.expires = d.toUTCString();
    } else if (expires && expires.toUTCString) {
      options.expires = expires.toUTCString();
    } else {
      var _d = new Date();
      _d.setTime(_d.getTime() + 365 * 24 * 3600000);
      expires = options.expires = _d.toUTCString();
    }

    // Key and Value
    value = encodeURIComponent(value);
    var updatedCookie = this.PREFIX + name + '=' + value;

    // Options obj to string
    for (var propName in options) {
      updatedCookie += '; ' + propName;
      var propValue = options[propName];
      if (propValue !== true) {
        updatedCookie += '=' + propValue;
      }
    }

    document.cookie = updatedCookie;
  }
};

var log = function log() {
  var _console;

  if (__WEBPACK_IMPORTED_MODULE_1__session__["a" /* default */].debug) (_console = console).log.apply(_console, arguments);
};

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  showDelay: 10 * 1000,
  registeredNextDelay: 168 * 3600 * 1000,
  showedNextDelay: 168 * 3600 * 1000,
  showedKey: 'popup_showed_v1',
  resubShowedKey: 'popup_resub_showed_v1',
  showedSecondKey: 'popup_showed_second_v1',
  registeredKey: 'user_registered_v1',
  webpushShowed: 'webpush_showed_v1',
  webpushShowedTTL: 172800000, // 2 days
  enteredEmail: 'email',
  enteredEmailTTL: 5 * 60000 // 5 min
});

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return checkInvalid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return checkInvalidTimedOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getUserInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return loadSettings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__session__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(2);




var settings = { subscribe: {}, webpush: {}, invalid: null };
var windowProxy = void 0;
__WEBPACK_IMPORTED_MODULE_0__session__["a" /* default */].settingsLoading = false;
__WEBPACK_IMPORTED_MODULE_0__session__["a" /* default */].settingsLoaded = false;
__WEBPACK_IMPORTED_MODULE_0__session__["a" /* default */].settingsLoadedCb = function () {
  return false;
};

function onMessage(msg) {
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["c" /* hasOwnNestedProperty */])(msg, 'data.action')) {
    switch (msg.data.action) {
      case 'close':
        __WEBPACK_IMPORTED_MODULE_0__session__["a" /* default */].popup.remove({ action: 'close' });
        break;

      case 'mf-widget-loaded':
        console.log('mf-widget-loaded');
        windowProxy.post({ email: __WEBPACK_IMPORTED_MODULE_1__utils__["b" /* Cookie */].get(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].enteredEmail) });
        break;
    }
  }

  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["c" /* hasOwnNestedProperty */])(msg, 'data.email')) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["d" /* log */])('msg.data.email', msg.data.email);
    __WEBPACK_IMPORTED_MODULE_1__utils__["b" /* Cookie */].set(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].enteredEmail, msg.data.email, { expires: __WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].enteredEmailTTL });
  }
}

var isResubExpired = function isResubExpired() {
  var reg_ts = __WEBPACK_IMPORTED_MODULE_1__utils__["b" /* Cookie */].get('reg_ts');
  if (!reg_ts) return null;
  var diff = Date.now() - 1000 * reg_ts;
  var minSinceReg = Math.floor(diff / 60000);
  return minSinceReg > 5;
};

var resubShowedTimes = function resubShowedTimes() {
  var resubShowed = __WEBPACK_IMPORTED_MODULE_1__utils__["b" /* Cookie */].get(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].resubShowedKey);
  if (!resubShowed) return null;
  return +resubShowed;
};

var checkInvalid = function checkInvalid() {
  if (settings.invalid) {
    var resubShowed = resubShowedTimes();
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["d" /* log */])('resubShowed:', resubShowed);

    var exp = isResubExpired();
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["d" /* log */])('resubExpired:', exp);

    if (resubShowed && resubShowed >= 2 || exp) {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["d" /* log */])('🚫 checkInvalid noop. Reason:', 'showed ' + resubShowed + ' time(s) || exp: ' + exp);
      return;
    }

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["d" /* log */])('checkInvalid', 'userId: ' + __WEBPACK_IMPORTED_MODULE_0__session__["a" /* default */].userId + '; \uD83D\uDCEA: ' + __WEBPACK_IMPORTED_MODULE_1__utils__["b" /* Cookie */].get(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].enteredEmail));
    if (__WEBPACK_IMPORTED_MODULE_0__session__["a" /* default */].userId) {
      $.get(__WEBPACK_IMPORTED_MODULE_0__session__["a" /* default */].apiRoot + 'users/invalid/' + __WEBPACK_IMPORTED_MODULE_0__session__["a" /* default */].userId, function (res) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["d" /* log */])('checkInvalid done', 'unsub =', res.data);

        if (res.data /* invalid email entered */) {
            __WEBPACK_IMPORTED_MODULE_0__session__["a" /* default */].Actions.init.showPopup({ popupSettings: Object.assign(settings.invalid, { invalid: true }) });
          }
      });
    }
  }
};

var checkInvalidTimedOut = function checkInvalidTimedOut(userId) {
  return userId && setTimeout(checkInvalid, 1000);
};

var getUserInfo = function getUserInfo(callback) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["d" /* log */])('getUserInfo');

  if (__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* Cookie */].get('guest_id')) {
    __WEBPACK_IMPORTED_MODULE_0__session__["a" /* default */].guestId = __WEBPACK_IMPORTED_MODULE_1__utils__["b" /* Cookie */].get('guest_id');
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["d" /* log */])('mf_guest_id', __WEBPACK_IMPORTED_MODULE_0__session__["a" /* default */].guestId);
  }

  $.ajax({
    url: __WEBPACK_IMPORTED_MODULE_0__session__["a" /* default */].apiRoot + 'users/cookie',
    dataType: 'jsonp',
    success: function success(_ref) {
      var reg_ts = _ref.reg_ts,
          user_id = _ref.user_id,
          guest_id = _ref.guest_id;

      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["d" /* log */])('Tried to obtain userId', user_id);
      if (user_id || guest_id || reg_ts) {
        if (reg_ts) {
          __WEBPACK_IMPORTED_MODULE_1__utils__["b" /* Cookie */].set('reg_ts', reg_ts);
          __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["d" /* log */])('/users/cookie ->', '⏱', reg_ts);
        }
        if (user_id) {
          __WEBPACK_IMPORTED_MODULE_0__session__["a" /* default */].userId = user_id;
          __WEBPACK_IMPORTED_MODULE_1__utils__["b" /* Cookie */].set('user_id', user_id);
          __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["d" /* log */])('/users/cookie ->', '👤', user_id);
        }
        if (guest_id) {
          __WEBPACK_IMPORTED_MODULE_0__session__["a" /* default */].guestId = guest_id;
          __WEBPACK_IMPORTED_MODULE_1__utils__["b" /* Cookie */].set('guest_id', guest_id);
          __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["d" /* log */])('/users/cookie ->', '👽', guest_id);
        }
        if (callback) callback(__WEBPACK_IMPORTED_MODULE_0__session__["a" /* default */].userId);
      }
    },
    error: function error() {
      if (callback) callback(null);
    }
  });
};

var loadSettings = function loadSettings(callback) {
  __WEBPACK_IMPORTED_MODULE_0__session__["a" /* default */].settingsLoading = true;
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["d" /* log */])('settingsLoaded', __WEBPACK_IMPORTED_MODULE_0__session__["a" /* default */].settingsLoaded);

  if (__WEBPACK_IMPORTED_MODULE_0__session__["a" /* default */].settingsLoaded) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["d" /* log */])('Session.settingsLoaded');
    __WEBPACK_IMPORTED_MODULE_0__session__["a" /* default */].settingsLoadedCb(true);
    if (callback) callback();
    return;
  }

  $.get(__WEBPACK_IMPORTED_MODULE_0__session__["a" /* default */].apiRoot + 'widget/settings/' + __WEBPACK_IMPORTED_MODULE_0__session__["a" /* default */].project, function (res) {
    Object.keys(res.data).forEach(function (k) {
      return settings[k] = res.data[k];
    });

    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["c" /* hasOwnNestedProperty */])(settings, 'subscribe.version')) {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* loadScript */])('https://n.mailfire.io/scripts/widgets/porthole.min.js', function () {
        if (!windowProxy) {
          // Create a proxy window to send to and receive messages from the iFrame
          windowProxy = new Porthole.WindowProxy(settings.subscribe.url, 'guestFrame');
          windowProxy.addEventListener(onMessage);
          __WEBPACK_IMPORTED_MODULE_0__session__["a" /* default */].settingsLoading = false;
          __WEBPACK_IMPORTED_MODULE_0__session__["a" /* default */].settingsLoaded = true;
          __WEBPACK_IMPORTED_MODULE_0__session__["a" /* default */].settingsLoadedCb(true);
          __WEBPACK_IMPORTED_MODULE_0__session__["a" /* default */].version = 2;
          if (callback) callback();
          __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["d" /* log */])('settingsLoaded', __WEBPACK_IMPORTED_MODULE_0__session__["a" /* default */].settingsLoaded);
        }
      });
    } else {
      if (callback) callback();
    }
  });
};

/* harmony default export */ __webpack_exports__["a"] = (settings);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Popup2__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Popup3__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Popup4__ = __webpack_require__(11);




var Popups = { 2: __WEBPACK_IMPORTED_MODULE_0__Popup2__["a" /* default */], 3: __WEBPACK_IMPORTED_MODULE_1__Popup3__["a" /* default */], 4: __WEBPACK_IMPORTED_MODULE_2__Popup4__["a" /* default */] };

/* harmony default export */ __webpack_exports__["a"] = (function (settings) {
  return Popups[settings.appearence_id || 2](settings);
});

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var email = {
  checkForm: function checkForm(formSelector) {
    var $form = $(formSelector);

    var $input = $form.find('.emailCheck');
    if (!$input.length) {
      $input = $form.find('input[type:email]');
      if (!$input.length) {
        return false;
      }
    }

    $input = $($input[0]);

    $form.one('submit', checkHandler);

    function invalid() {
      $form.addClass('invalid');
      $input.addClass('invalid').focus();
    }

    function checkHandler() {
      var email = $input.val();

      if (!email || email === '' || email.indexOf('@') === -1 || email.indexOf('.') === -1) {
        invalid();
        return false;
      }

      $.post('https://api.mailfire.io/v1/email/check', { email: email }, function (res) {
        if (!res.data.valid) {
          invalid();
          // Rebind for next check
          $form.one('submit', checkHandler);
        } else {
          $form.submit();
        }
      });

      // Disable first submit
      return false;
    }
  }
};

/* harmony default export */ __webpack_exports__["a"] = (email);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__session__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Popup__ = __webpack_require__(4);






var init = {
  /* should fix popup's getting out of viewport in iOS */
  // _iOSFocusFix() {
  //   const $html = $('html')
  //   const $body = $('body')
  //   const css = {
  //     '-webkit-overflow-scrolling': 'touch',
  //     'overflow': 'auto',
  //     'height': '100%'
  //   }
  //   $body.css(css)
  //   $html.css(css)
  // },

  auto: function auto() {
    var _this = this;

    // Session.Actions.init._iOSFocusFix()
    if (!__WEBPACK_IMPORTED_MODULE_0__session__["a" /* default */].settingsLoading) {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__settings__["b" /* loadSettings */])(function () {
        return _this.subscribe();
      });
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__settings__["c" /* getUserInfo */])(__WEBPACK_IMPORTED_MODULE_3__settings__["d" /* checkInvalidTimedOut */]);
    }
  },
  custom: function custom() {
    // Session.Actions.init._iOSFocusFix()
    if (!__WEBPACK_IMPORTED_MODULE_0__session__["a" /* default */].settingsLoading) {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__settings__["b" /* loadSettings */])();
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__settings__["c" /* getUserInfo */])(__WEBPACK_IMPORTED_MODULE_3__settings__["d" /* checkInvalidTimedOut */]);
    }
  },
  watcher: function watcher() {
    var inFocus = true;
    $(window).on('blur', function () {
      return inFocus = false;
    });
    $(window).on('focus', function () {
      return inFocus = true;
    });

    setInterval(function () {
      if (inFocus) {
        var newImage = new Image();

        var params = ['ts=' + new Date().getTime()];

        if (__WEBPACK_IMPORTED_MODULE_0__session__["a" /* default */].userId) params.push('user_id=' + __WEBPACK_IMPORTED_MODULE_0__session__["a" /* default */].userId);

        if (__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* Cookie */].get('guest_id')) params.push('guest_id=' + __WEBPACK_IMPORTED_MODULE_1__utils__["b" /* Cookie */].get('guest_id'));

        newImage.src = 'https://n.mailfire.io/online/watch/' + __WEBPACK_IMPORTED_MODULE_0__session__["a" /* default */].project + '?' + params.join('&');
      }
    }, 35 * 1000);
  },
  subscribe: function subscribe() {
    var _this2 = this;

    if (__WEBPACK_IMPORTED_MODULE_0__session__["a" /* default */].userId || __WEBPACK_IMPORTED_MODULE_1__utils__["b" /* Cookie */].get(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].registeredKey) !== undefined || __WEBPACK_IMPORTED_MODULE_1__utils__["b" /* Cookie */].get(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].showedKey) !== undefined && __WEBPACK_IMPORTED_MODULE_1__utils__["b" /* Cookie */].get(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].showedSecondKey) !== undefined) return;

    var delay = void 0;
    if (__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* Cookie */].get(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].showedKey) !== undefined) {
      delay = 1;
      __WEBPACK_IMPORTED_MODULE_1__utils__["b" /* Cookie */].set(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].showedSecondKey, 1, { expires: __WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].showedNextDelay });
    } else {
      delay = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].showDelay;
    }

    setTimeout(function () {
      return _this2.showPopup({ popupSettings: __WEBPACK_IMPORTED_MODULE_3__settings__["a" /* default */].subscribe });
    }, delay);
  },
  removePopup: function removePopup() {
    __WEBPACK_IMPORTED_MODULE_0__session__["a" /* default */].popup.remove();
  },
  showPopup: function showPopup() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        popupSettings = _ref.popupSettings,
        showCallback = _ref.showCallback,
        closeCallback = _ref.closeCallback;

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["d" /* log */])('showPopup');
    var userId = __WEBPACK_IMPORTED_MODULE_1__utils__["b" /* Cookie */].get('user_id');
    var primaryShowed = +__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* Cookie */].get(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].showedKey) || 0;
    var resubShowed = +__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* Cookie */].get(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].resubShowedKey) || 0;

    if (!__WEBPACK_IMPORTED_MODULE_0__session__["a" /* default */].testPopup) {
      if (popupSettings && !popupSettings.invalid) {
        if (userId || primaryShowed) {
          __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["d" /* log */])('🚫 showPopup noop. Reason:', 'userId ' + userId + ' || showed ' + primaryShowed);
          return;
        }
      }
    }

    if (!$.isEmptyObject(popupSettings)) {
      __WEBPACK_IMPORTED_MODULE_0__session__["a" /* default */].popup = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__Popup__["a" /* default */])(popupSettings);

      if (closeCallback && typeof closeCallback === 'function') __WEBPACK_IMPORTED_MODULE_0__session__["a" /* default */].popup.closeCallback = closeCallback;

      __WEBPACK_IMPORTED_MODULE_0__session__["a" /* default */].popup.reloadCallback = function () {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["d" /* log */])('reloadCallback');
        if (!popupSettings.invalid /* primary subscribe popup */) {
            setTimeout(function () {
              return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__settings__["c" /* getUserInfo */])(__WEBPACK_IMPORTED_MODULE_3__settings__["e" /* checkInvalid */]);
            }, 5000);
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__settings__["e" /* checkInvalid */])();
          } else {
          __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__settings__["c" /* getUserInfo */])();
        }
        __WEBPACK_IMPORTED_MODULE_1__utils__["b" /* Cookie */].set(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].registeredKey, Date.now(), { expires: __WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].registeredNextDelay });
        __WEBPACK_IMPORTED_MODULE_0__session__["a" /* default */].popup.remove();
      };

      __WEBPACK_IMPORTED_MODULE_0__session__["a" /* default */].popup.show();
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["d" /* log */])('👁');

      if (!popupSettings.invalid) {
        __WEBPACK_IMPORTED_MODULE_1__utils__["b" /* Cookie */].set(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].showedKey, 1, { expires: __WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].showedNextDelay });
      }

      if (popupSettings.invalid) {
        __WEBPACK_IMPORTED_MODULE_1__utils__["b" /* Cookie */].set(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].resubShowedKey, resubShowed && resubShowed + 1 || 1);
      }

      if (showCallback && typeof showCallback === 'function') showCallback();
    }
    // else {
    //   const showPopup = () =>
    //     Session.Actions.init.showPopup({popupSettings: Settings.subscribe, showCallback, closeCallback})
    //
    //   if (!Session.settingsLoaded) {
    //     loadSettings()
    //   } else {
    //     showPopup()
    //   }
    //
    //   Session.settingsLoadedCb = showPopup
    // }
  }
};

/* harmony default export */ __webpack_exports__["a"] = (init);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__session__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__settings__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Popup__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__(2);






/* harmony default export */ __webpack_exports__["a"] = ({ init: init, auto: auto, showPopup: showPopup, subscribe: subscribe });

var initialize = function initialize() {
  return null;
};
var initInProgress = false;

function init() {
  if (initInProgress) return;
  initInProgress = true;

  if (!('serviceWorker' in navigator)) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["d" /* log */])('Service workers aren\'t supported in this browser.');
    initInProgress = false;
    return;
  }
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__settings__["b" /* loadSettings */])(function () {
    initInProgress = false;
    initialize();
  });
}

function auto() {
  init();

  if (initInProgress) {
    var webpushShowed = __WEBPACK_IMPORTED_MODULE_2__utils__["b" /* Cookie */].get(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* default */].webpushShowed);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["d" /* log */])('webpushShowed', webpushShowed);
    if (webpushShowed) {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["d" /* log */])('bailing out...');
      return;
    }

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["d" /* log */])('permission', Notification.permission);

    if (Notification.permission === 'denied') {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["d" /* log */])('bailing out...');
      return;
    }

    initialize = function initialize() {
      return setTimeout(function () {
        return showPopup();
      }, 3000);
    };
    // initialize = () => setTimeout(() => subscribe(), 3000)
    return;
  }
}

function showPopup() {
  if (initInProgress) {
    initialize = showPopup;
    return;
  }

  var _Settings$webpush = __WEBPACK_IMPORTED_MODULE_1__settings__["a" /* default */].webpush,
      url = _Settings$webpush.url,
      width = _Settings$webpush.width,
      height = _Settings$webpush.height,
      outside_click_close = _Settings$webpush.outside_click_close;
  // log('url, width, height', url, width, height)

  if (url && width && height) {
    __WEBPACK_IMPORTED_MODULE_0__session__["a" /* default */].popup = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__Popup__["a" /* default */])({ url: url, width: width, height: height, outside_click_close: outside_click_close });

    __WEBPACK_IMPORTED_MODULE_2__utils__["b" /* Cookie */].set(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* default */].webpushShowed, 1, { expires: __WEBPACK_IMPORTED_MODULE_4__config__["a" /* default */].webpushShowedTTL });
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["d" /* log */])(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* default */].webpushShowed, 1);

    trackAttempt({ popup_type: 1 });

    __WEBPACK_IMPORTED_MODULE_0__session__["a" /* default */].popup.closeCallback = function () {
      trackDeny({ popup_type: 1 });
    };

    __WEBPACK_IMPORTED_MODULE_0__session__["a" /* default */].popup.reloadCallback = function () {
      subscribe();
      __WEBPACK_IMPORTED_MODULE_0__session__["a" /* default */].popup.remove();
    };

    if ('serviceWorker' in navigator) {
      __WEBPACK_IMPORTED_MODULE_0__session__["a" /* default */].popup.show();
    }
  }
}

function trackAttempt(_ref) {
  var userId = _ref.userId,
      popup_type = _ref.popup_type;

  $.post('https://api.mailfire.io/v1/webpush/attempt/' + __WEBPACK_IMPORTED_MODULE_0__session__["a" /* default */].project, { user_id: userId && +userId || null, popup_type: popup_type }, function () {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["d" /* log */])('attempt ok;', 'popup_type', popup_type);
  });
}

function trackDeny(_ref2) {
  var popup_type = _ref2.popup_type;

  $.post('https://api.mailfire.io/v1/webpush/deny/' + __WEBPACK_IMPORTED_MODULE_0__session__["a" /* default */].project, { popup_type: popup_type }, function () {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["d" /* log */])('deny ok;', 'popup_type', popup_type);
  });
}

function subscribe() {
  if (initInProgress) {
    initialize = subscribe;
    return;
  }

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["d" /* log */])('>> Permission', Notification.permission);

  if (__WEBPACK_IMPORTED_MODULE_0__session__["a" /* default */].userId) {
    if (Notification.permission === 'default') {
      trackAttempt({ userId: __WEBPACK_IMPORTED_MODULE_0__session__["a" /* default */].userId, popup_type: 2 });
    }
    subscribeUser();
  } else {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__settings__["c" /* getUserInfo */])(function (userId) {
      if (Notification.permission === 'default') {
        trackAttempt({ userId: userId, popup_type: 2 });
      }
      subscribeUser();
    });
  }
}

function subscribeUser() {
  Notification.requestPermission().then(function (result) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["d" /* log */])('>> Permission', result);

    navigator.serviceWorker.ready.then(function (reg) {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["d" /* log */])('serviceWorker.ready');

      reg.pushManager.subscribe({ userVisibleOnly: true }).then(function (subscription) {
        var data = {
          meta: {
            url: subscription.endpoint,
            public_key: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["f" /* arrayBufferToBase64 */])(subscription.getKey('p256dh')),
            auth_token: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["f" /* arrayBufferToBase64 */])(subscription.getKey('auth'))
          }
        };

        if (__WEBPACK_IMPORTED_MODULE_0__session__["a" /* default */].userId) {
          data.user_id = +__WEBPACK_IMPORTED_MODULE_0__session__["a" /* default */].userId;
        } else {
          data.hash = __WEBPACK_IMPORTED_MODULE_0__session__["a" /* default */].guestId;
        }

        $.post('https://api.mailfire.io/v1/webpush/project/' + __WEBPACK_IMPORTED_MODULE_0__session__["a" /* default */].project, data, function (_ref3) {
          var data = _ref3.data;
          var push_user_id = data.push_user_id;

          if (push_user_id) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["d" /* log */])('push_user_id', push_user_id);
            __WEBPACK_IMPORTED_MODULE_2__utils__["b" /* Cookie */].set('push_user_id', push_user_id);

            var date = new Date();
            date.setDate(date.getDate() + 365);

            $.ajax({
              dataType: 'jsonp',
              url: 'https://n.mailfire.io/users/setcookie',
              data: {
                'push_user_id': {
                  value: push_user_id,
                  expire: date.toUTCString()
                }
              },
              jsonp: 'callback',
              success: function success(res) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["d" /* log */])(res);
              }
            });
          }
        });
      }).catch(function (err) {
        if (Notification.permission === 'denied') {
          __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["d" /* log */])('Permission denied.', err);
          trackDeny({ popup_type: 2 });
        } else {
          __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["d" /* log */])('Unable to subscribe to push.', err);
        }
      });
    });
  }).catch(function () {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["d" /* log */])('FAILED');
  });
}

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__session__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__settings__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Popup__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__(2);






/* harmony default export */ __webpack_exports__["a"] = ({ init: init, auto: auto, showPopup: showPopup, subscribe: subscribe });

var initialize = function initialize() {
  return null;
};
var initInProgress = false;

function init() {
  if (initInProgress) return;
  initInProgress = true;

  if (!('serviceWorker' in navigator)) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["d" /* log */])("Service workers aren't supported in this browser.");
    initInProgress = false;
    return;
  }

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["a" /* loadScript */])('https://www.gstatic.com/firebasejs/4.5.0/firebase-app.js', function () {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["a" /* loadScript */])('https://www.gstatic.com/firebasejs/4.5.0/firebase-messaging.js', function () {
      navigator.serviceWorker.register(__WEBPACK_IMPORTED_MODULE_0__session__["a" /* default */].sw).then(function (reg) {
        if (reg.installing) {
          console.log('Service worker installing');
        } else if (reg.waiting) {
          console.log('Service worker installed');
        } else if (reg.active) {
          console.log('Service worker active');
        }

        firebase.initializeApp({
          messagingSenderId: __WEBPACK_IMPORTED_MODULE_0__session__["a" /* default */].msgSenderId
        });
        __WEBPACK_IMPORTED_MODULE_0__session__["a" /* default */].messaging = firebase.messaging();
        __WEBPACK_IMPORTED_MODULE_0__session__["a" /* default */].messaging.useServiceWorker(reg);

        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__settings__["b" /* loadSettings */])(function () {
          initInProgress = false;
          initialize();
        });
      });
    });
  });
}

function auto() {
  init();

  if (initInProgress) {
    var webpushShowed = __WEBPACK_IMPORTED_MODULE_2__utils__["b" /* Cookie */].get(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* default */].webpushShowed);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["d" /* log */])('webpushShowed', webpushShowed);
    if (webpushShowed) {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["d" /* log */])('bailing out...');
      return;
    }

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["d" /* log */])('permission', Notification.permission);

    if (Notification.permission === 'denied') {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["d" /* log */])('bailing out...');
      return;
    }

    // initialize = () => setTimeout(() => showPopup(), 3000)
    initialize = function initialize() {
      return setTimeout(function () {
        return subscribe();
      }, 3000);
    };
    return;
  }
}

function showPopup() {
  if (initInProgress) {
    initialize = showPopup;
    return;
  }

  var _Settings$webpush = __WEBPACK_IMPORTED_MODULE_1__settings__["a" /* default */].webpush,
      url = _Settings$webpush.url,
      width = _Settings$webpush.width,
      height = _Settings$webpush.height,
      outside_click_close = _Settings$webpush.outside_click_close;
  // log('url, width, height', url, width, height)

  if (url && width && height) {
    __WEBPACK_IMPORTED_MODULE_0__session__["a" /* default */].popup = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__Popup__["a" /* default */])({ url: url, width: width, height: height, outside_click_close: outside_click_close });

    __WEBPACK_IMPORTED_MODULE_2__utils__["b" /* Cookie */].set(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* default */].webpushShowed, 1, { expires: __WEBPACK_IMPORTED_MODULE_4__config__["a" /* default */].webpushShowedTTL });
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["d" /* log */])(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* default */].webpushShowed, 1);

    trackAttempt({ popup_type: 1 });

    __WEBPACK_IMPORTED_MODULE_0__session__["a" /* default */].popup.closeCallback = function () {
      trackDeny({ popup_type: 1 });
    };

    __WEBPACK_IMPORTED_MODULE_0__session__["a" /* default */].popup.reloadCallback = function () {
      subscribe();
      __WEBPACK_IMPORTED_MODULE_0__session__["a" /* default */].popup.remove();
    };

    if ('serviceWorker' in navigator) {
      __WEBPACK_IMPORTED_MODULE_0__session__["a" /* default */].popup.show();
    }
  }
}

function trackAttempt(_ref) {
  var userId = _ref.userId,
      popup_type = _ref.popup_type;

  $.post('https://api.mailfire.io/v1/webpush/attempt/' + __WEBPACK_IMPORTED_MODULE_0__session__["a" /* default */].project, { user_id: userId && +userId || null, popup_type: popup_type }, function () {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["d" /* log */])('attempt ok;', 'popup_type', popup_type);
  });
}

function trackDeny(_ref2) {
  var popup_type = _ref2.popup_type;

  $.post('https://api.mailfire.io/v1/webpush/deny/' + __WEBPACK_IMPORTED_MODULE_0__session__["a" /* default */].project, { popup_type: popup_type }, function () {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["d" /* log */])('deny ok;', 'popup_type', popup_type);
  });
}

function subscribe() {
  if (initInProgress) {
    initialize = subscribe;
    return;
  }

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["d" /* log */])('>> Permission', Notification.permission);

  if (__WEBPACK_IMPORTED_MODULE_0__session__["a" /* default */].userId) {
    if (Notification.permission === 'default') {
      trackAttempt({ userId: __WEBPACK_IMPORTED_MODULE_0__session__["a" /* default */].userId, popup_type: 2 });
    }
    subscribeUser();
  } else {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__settings__["c" /* getUserInfo */])(function (userId) {
      if (Notification.permission === 'default') {
        trackAttempt({ userId: userId, popup_type: 2 });
      }
      subscribeUser();
    });
  }
}

function subscribeUser() {
  Notification.requestPermission().then(function (result) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["d" /* log */])('>> Permission', result);

    navigator.serviceWorker.ready.then(function (reg) {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["d" /* log */])('serviceWorker.ready');

      __WEBPACK_IMPORTED_MODULE_0__session__["a" /* default */].messaging.requestPermission().then(function () {
        __WEBPACK_IMPORTED_MODULE_0__session__["a" /* default */].messaging.getToken().then(function (currentToken) {
          __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["d" /* log */])(currentToken);
          if (currentToken) {
            sendTokenToServer(currentToken);
            // updateUIForPushEnabled(currentToken)
          } else {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["d" /* log */])('No Instance ID token available. Request permission to generate one.');
            setTokenSentToServer(false);
          }
        }).catch(function (err) {
          __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["d" /* log */])('An error occurred while retrieving token.', err);
          // updateUIForPushPermissionRequired()
          setTokenSentToServer(false);
        });
      }).catch(function (err) {
        if (Notification.permission === 'denied') {
          __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["d" /* log */])('Permission denied.', err);
          trackDeny({ popup_type: 2 });
        }
      });
    });
  }).catch(function () {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["d" /* log */])('FAILED');
  });
}

function isTokenSentToServer(currentToken) {
  return window.localStorage.getItem('sentFirebaseMessagingToken') === currentToken;
}

function setTokenSentToServer(currentToken) {
  window.localStorage.setItem('sentFirebaseMessagingToken', currentToken || '');
}

function sendTokenToServer(currentToken) {
  if (!isTokenSentToServer(currentToken)) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["d" /* log */])('Sending token to server...');

    var data = {
      fcm_meta: {
        token: currentToken
      }
    };

    if (__WEBPACK_IMPORTED_MODULE_0__session__["a" /* default */].userId) {
      data.user_id = +__WEBPACK_IMPORTED_MODULE_0__session__["a" /* default */].userId;
    } else {
      data.hash = __WEBPACK_IMPORTED_MODULE_0__session__["a" /* default */].guestId;
    }

    $.post('https://api.mailfire.io/v1/webpush/project/' + __WEBPACK_IMPORTED_MODULE_0__session__["a" /* default */].project, data, function (_ref3) {
      var data = _ref3.data;
      var push_user_id = data.push_user_id;

      if (push_user_id) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["d" /* log */])('push_user_id', push_user_id);
        __WEBPACK_IMPORTED_MODULE_2__utils__["b" /* Cookie */].set('push_user_id', push_user_id);

        var date = new Date();
        date.setDate(date.getDate() + 365);

        $.ajax({
          dataType: 'jsonp',
          url: 'https://n.mailfire.io/users/setcookie',
          data: {
            'push_user_id': {
              value: push_user_id,
              expire: date.toUTCString()
            }
          },
          jsonp: 'callback',
          success: function success(res) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["d" /* log */])(res);
          }
        });
      }
    });
    setTokenSentToServer(currentToken);
  }
}

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(1);


var Popup2 = function Popup2() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      url = _ref.url,
      _ref$width = _ref.width,
      width = _ref$width === undefined ? '100%' : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === undefined ? '245px' : _ref$height,
      outside_click_close = _ref.outside_click_close;

  var $body = document.body;

  var $style = document.createElement('style');
  $style.textContent = '\n    .mf-bg {\n      width: 100%;\n      height: 100%;\n      top: 0;\n      left: 0;\n      z-index: 99999999;\n      opacity: 0;\n      position: fixed;\n      background: rgba(0,0,0,0.7);\n      transition: opacity 1s ease;\n    }\n    .mf-wrapper {\n      width: ' + (+width && width + 'px' || width) + ';\n      height: ' + (+height && height + 'px' || height) + ';\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      margin: auto;\n      position: absolute;\n      min-width: 320px;\n    }\n    .mf-iframe {\n      width: 100%;\n      height: 100%;\n      border: 0;\n    }\n  ';
  var $bg = document.createElement('div');
  $bg.className = 'mf-bg';
  var $wrapper = document.createElement('div');
  $wrapper.className = 'mf-wrapper';

  var $iframe = document.createElement('iframe');
  $iframe.className = 'mf-iframe';
  $iframe.src = url;
  $iframe.scrolling = 'no';
  $iframe.name = 'guestFrame';

  $(window).resize(function () {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["e" /* resizePopup */])(width, height);
  });

  var pp = {
    closeCallback: false,

    show: function show() {
      var _this = this;

      $body.appendChild($style);
      $body.appendChild($bg);
      $bg.appendChild($wrapper);
      $wrapper.appendChild($iframe);

      $iframe.addEventListener('load', function () {
        $bg.style.opacity = 1;
        $iframe.addEventListener('load', function () {
          if (_this.reloadCallback) _this.reloadCallback();
        }, false);
      }, false);

      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["e" /* resizePopup */])(width, height);
    },
    remove: function remove() {
      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          action = _ref2.action;

      if (this.closeCallback && action === 'close') this.closeCallback();
      this.closeCallback = false;
      $bg.style.opacity = 0;
      setTimeout(function () {
        if ($bg.parentNode) $body.removeChild($bg);
      }, 1000);
    }
  };

  if (outside_click_close) {
    $bg.addEventListener('click', function () {
      pp.remove({ action: 'close' });
      return false;
    }, false);
  }

  return pp;
};

/* harmony default export */ __webpack_exports__["a"] = (Popup2);

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var Popup3 = function Popup3() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      url = _ref.url,
      _ref$width = _ref.width,
      width = _ref$width === undefined ? '100%' : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === undefined ? '245px' : _ref$height;

  var $body = document.body;
  var upperMid = window.matchMedia('(max-width: 1400px)');
  var mid = window.matchMedia('(max-width: 990px)');
  var small = window.matchMedia('(max-width: 735px)');

  var transitionTop = function transitionTop() {
    return 'all .5s cubic-bezier(0.06, 0.88, 0.26, 1.18)';
  };
  var transitionBottom = function transitionBottom() {
    return small.matches ? 'all 0.3s' : 'all 0.4s';
  };
  var revealed = function revealed() {
    return small.matches ? '0px' : mid.matches ? '-75px' : upperMid.matches ? '-120px' : '-182px';
  };

  var $style = document.createElement('style');
  $style.textContent = '\n    .mf-popup {\n      width: ' + (+width && width + 'px' || width) + ';\n      height: ' + (+height && height + 'px' || height) + ';\n      bottom: -250px;\n      left: 0;\n      right: 0;\n      margin: 0 auto;\n      z-index: 99999999;\n      position: fixed;\n    }\n    .mf-iframe {\n      width: 100%;\n      height: 100%;\n      border: 0;\n    }\n  ';
  var $popup = document.createElement('div');
  $popup.className = 'mf-popup';

  var $iframe = document.createElement('iframe');
  $iframe.className = 'mf-iframe';
  $iframe.src = url;
  $iframe.scrolling = 'no';
  $iframe.name = 'guestFrame';

  window.addEventListener('resize', function () {
    $popup.style.bottom = revealed();
  }, false);

  return {
    closeCallback: false,

    show: function show() {
      var _this = this;

      $body.appendChild($style);
      $body.appendChild($popup);
      $popup.appendChild($iframe);

      $iframe.addEventListener('load', function () {
        $popup.style.bottom = revealed();
        $popup.style.transition = transitionTop();
        $iframe.addEventListener('load', function () {
          if (_this.reloadCallback) _this.reloadCallback();
        }, false);
      }, false);
    },
    remove: function remove() {
      var _this2 = this;

      $popup.style.bottom = '-250px';
      $popup.style.transition = transitionBottom();
      setTimeout(function () {
        if (_this2.closeCallback) _this2.closeCallback();
        _this2.closeCallback = false;
        if ($popup.parentNode) $body.removeChild($popup);
        if ($style.parentNode) $body.removeChild($style);
      }, 500);
    }
  };
};

/* harmony default export */ __webpack_exports__["a"] = (Popup3);

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var Popup4 = function Popup4() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      url = _ref.url,
      _ref$width = _ref.width,
      width = _ref$width === undefined ? '100%' : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === undefined ? '245px' : _ref$height;

  var $body = document.body;
  var upperMid = window.matchMedia('(max-width: 1400px)');
  var mid = window.matchMedia('(max-width: 990px)');
  var small = window.matchMedia('(max-width: 735px)');
  var xsmall = window.matchMedia('(max-width: 360px)');

  var transitionReveal = function transitionReveal() {
    return 'all .5s cubic-bezier(0.06, 0.88, 0.26, 1.18)';
  };
  var transitionHide = function transitionHide() {
    return small.matches ? 'all 0.3s' : 'all 0.4s';
  };
  var revealed = function revealed() {
    return xsmall.matches ? '0px' : small.matches ? '-15px' : mid.matches ? '-70px' : upperMid.matches ? '-125px' : '-170px';
  };

  var $style = document.createElement('style');
  $style.textContent = '\n    .mf-popup {\n      width: ' + (+width && width + 'px' || width) + ';\n      height: ' + (+height && height + 'px' || height) + ';\n      top: -305px;\n      left: 0;\n      right: 0;\n      margin: 0 auto;\n      z-index: 10;\n      position: fixed;\n    }\n    .mf-iframe {\n      width: 100%;\n      height: 100%;\n      border: 0;\n    }\n  ';
  var $popup = document.createElement('div');
  $popup.className = 'mf-popup';

  var $iframe = document.createElement('iframe');
  $iframe.className = 'mf-iframe';
  $iframe.src = url;
  $iframe.scrolling = 'no';
  $iframe.name = 'guestFrame';

  window.addEventListener('resize', function () {
    $popup.style.top = revealed();
  }, false);

  return {
    closeCallback: false,

    show: function show() {
      var _this = this;

      $body.appendChild($style);
      $body.appendChild($popup);
      $popup.appendChild($iframe);

      $iframe.addEventListener('load', function () {
        $popup.style.top = revealed();
        $popup.style.transition = transitionReveal();
        $iframe.addEventListener('load', function () {
          if (_this.reloadCallback) _this.reloadCallback();
        }, false);
      }, false);
    },
    remove: function remove() {
      var _this2 = this;

      $popup.style.top = '-305px';
      $popup.style.transition = transitionHide();
      setTimeout(function () {
        if (_this2.closeCallback) _this2.closeCallback();
        _this2.closeCallback = false;
        if ($popup.parentNode) $body.removeChild($popup);
        if ($style.parentNode) $body.removeChild($style);
      }, 500);
    }
  };
};

/* harmony default export */ __webpack_exports__["a"] = (Popup4);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__session__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_init__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_webpush__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_webpushfcm__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_email__ = __webpack_require__(5);







if (typeof window.jQuery !== 'undefined') {
  jQuery(function () {
    return bootstrap(jQuery);
  });
} else {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* loadScript */])('https://cdnjs.cloudflare.com/ajax/libs/zepto/1.2.0/zepto.min.js', function () {
    return Zepto(function () {
      return bootstrap(Zepto);
    });
  });
}

function bootstrap($) {
  if (typeof Storage !== 'undefined') {
    __WEBPACK_IMPORTED_MODULE_0__session__["a" /* default */].debug = localStorage.getItem('mf-debug') === 'true';
  }
  var mfObject = window[window['_mf_object_name']];
  __WEBPACK_IMPORTED_MODULE_0__session__["a" /* default */].Actions = { init: __WEBPACK_IMPORTED_MODULE_2__actions_init__["a" /* default */], webpush: __WEBPACK_IMPORTED_MODULE_3__actions_webpush__["a" /* default */], webpushfcm: __WEBPACK_IMPORTED_MODULE_4__actions_webpushfcm__["a" /* default */], email: __WEBPACK_IMPORTED_MODULE_5__actions_email__["a" /* default */] };
  __WEBPACK_IMPORTED_MODULE_0__session__["a" /* default */].project = mfObject.project;
  __WEBPACK_IMPORTED_MODULE_0__session__["a" /* default */].msgSenderId = mfObject.msgSenderId;
  __WEBPACK_IMPORTED_MODULE_0__session__["a" /* default */].sw = mfObject.sw;
  __WEBPACK_IMPORTED_MODULE_0__session__["a" /* default */].apiRoot = mfObject.api || "https://n.mailfire.io/";
  __WEBPACK_IMPORTED_MODULE_0__session__["a" /* default */].testPopup = mfObject.testPopup || false;
  __WEBPACK_IMPORTED_MODULE_0__session__["a" /* default */].env = mfObject.env || 'prod';
  __WEBPACK_IMPORTED_MODULE_0__session__["a" /* default */].popupName = mfObject.popupName;
  __WEBPACK_IMPORTED_MODULE_0__session__["a" /* default */].userId = __WEBPACK_IMPORTED_MODULE_1__utils__["b" /* Cookie */].get('user_id');

  window['mf'] = function (obj, method, data) {
    __WEBPACK_IMPORTED_MODULE_0__session__["a" /* default */].Actions[obj][method].call(this, data);
  };

  for (var a in mfObject.q) {
    if (mfObject.q.hasOwnProperty(a)) {
      var obj = mfObject.q[a][0];
      var method = mfObject.q[a][1];
      var data = mfObject.q[a][2];
      __WEBPACK_IMPORTED_MODULE_0__session__["a" /* default */].Actions[obj][method](data);
    }
  }
}

/***/ })
/******/ ]);
//# sourceMappingURL=latest.js.map