// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/swiper/swiper-bundle.js":[function(require,module,exports) {
var define;
var global = arguments[3];
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/**
 * Swiper 8.4.4
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2022 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: October 12, 2022
 */

(function (global, factory) {
  (typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Swiper = factory());
})(this, function () {
  'use strict';

  /**
   * SSR Window 4.0.2
   * Better handling for window object in SSR environment
   * https://github.com/nolimits4web/ssr-window
   *
   * Copyright 2021, Vladimir Kharlampidi
   *
   * Licensed under MIT
   *
   * Released on: December 13, 2021
   */

  /* eslint-disable no-param-reassign */
  function isObject$1(obj) {
    return obj !== null && _typeof(obj) === 'object' && 'constructor' in obj && obj.constructor === Object;
  }
  function extend$1(target, src) {
    if (target === void 0) {
      target = {};
    }
    if (src === void 0) {
      src = {};
    }
    Object.keys(src).forEach(key => {
      if (typeof target[key] === 'undefined') target[key] = src[key];else if (isObject$1(src[key]) && isObject$1(target[key]) && Object.keys(src[key]).length > 0) {
        extend$1(target[key], src[key]);
      }
    });
  }
  const ssrDocument = {
    body: {},
    addEventListener: function () {},
    removeEventListener: function () {},
    activeElement: {
      blur: function () {},
      nodeName: ''
    },
    querySelector: function () {
      return null;
    },
    querySelectorAll: function () {
      return [];
    },
    getElementById: function () {
      return null;
    },
    createEvent: function () {
      return {
        initEvent: function () {}
      };
    },
    createElement: function () {
      return {
        children: [],
        childNodes: [],
        style: {},
        setAttribute: function () {},
        getElementsByTagName: function () {
          return [];
        }
      };
    },
    createElementNS: function () {
      return {};
    },
    importNode: function () {
      return null;
    },
    location: {
      hash: '',
      host: '',
      hostname: '',
      href: '',
      origin: '',
      pathname: '',
      protocol: '',
      search: ''
    }
  };
  function getDocument() {
    const doc = typeof document !== 'undefined' ? document : {};
    extend$1(doc, ssrDocument);
    return doc;
  }
  const ssrWindow = {
    document: ssrDocument,
    navigator: {
      userAgent: ''
    },
    location: {
      hash: '',
      host: '',
      hostname: '',
      href: '',
      origin: '',
      pathname: '',
      protocol: '',
      search: ''
    },
    history: {
      replaceState: function () {},
      pushState: function () {},
      go: function () {},
      back: function () {}
    },
    CustomEvent: function CustomEvent() {
      return this;
    },
    addEventListener: function () {},
    removeEventListener: function () {},
    getComputedStyle: function () {
      return {
        getPropertyValue: function () {
          return '';
        }
      };
    },
    Image: function () {},
    Date: function () {},
    screen: {},
    setTimeout: function () {},
    clearTimeout: function () {},
    matchMedia: function () {
      return {};
    },
    requestAnimationFrame: function (callback) {
      if (typeof setTimeout === 'undefined') {
        callback();
        return null;
      }
      return setTimeout(callback, 0);
    },
    cancelAnimationFrame: function (id) {
      if (typeof setTimeout === 'undefined') {
        return;
      }
      clearTimeout(id);
    }
  };
  function getWindow() {
    const win = typeof window !== 'undefined' ? window : {};
    extend$1(win, ssrWindow);
    return win;
  }

  /**
   * Dom7 4.0.4
   * Minimalistic JavaScript library for DOM manipulation, with a jQuery-compatible API
   * https://framework7.io/docs/dom7.html
   *
   * Copyright 2022, Vladimir Kharlampidi
   *
   * Licensed under MIT
   *
   * Released on: January 11, 2022
   */
  /* eslint-disable no-proto */

  function makeReactive(obj) {
    const proto = obj.__proto__;
    Object.defineProperty(obj, '__proto__', {
      get: function () {
        return proto;
      },
      set: function (value) {
        proto.__proto__ = value;
      }
    });
  }
  class Dom7 extends Array {
    constructor(items) {
      if (typeof items === 'number') {
        super(items);
      } else {
        super(...(items || []));
        makeReactive(this);
      }
    }
  }
  function arrayFlat(arr) {
    if (arr === void 0) {
      arr = [];
    }
    const res = [];
    arr.forEach(el => {
      if (Array.isArray(el)) {
        res.push(...arrayFlat(el));
      } else {
        res.push(el);
      }
    });
    return res;
  }
  function arrayFilter(arr, callback) {
    return Array.prototype.filter.call(arr, callback);
  }
  function arrayUnique(arr) {
    const uniqueArray = [];
    for (let i = 0; i < arr.length; i += 1) {
      if (uniqueArray.indexOf(arr[i]) === -1) uniqueArray.push(arr[i]);
    }
    return uniqueArray;
  }
  function qsa(selector, context) {
    if (typeof selector !== 'string') {
      return [selector];
    }
    const a = [];
    const res = context.querySelectorAll(selector);
    for (let i = 0; i < res.length; i += 1) {
      a.push(res[i]);
    }
    return a;
  }
  function $(selector, context) {
    const window = getWindow();
    const document = getDocument();
    let arr = [];
    if (!context && selector instanceof Dom7) {
      return selector;
    }
    if (!selector) {
      return new Dom7(arr);
    }
    if (typeof selector === 'string') {
      const html = selector.trim();
      if (html.indexOf('<') >= 0 && html.indexOf('>') >= 0) {
        let toCreate = 'div';
        if (html.indexOf('<li') === 0) toCreate = 'ul';
        if (html.indexOf('<tr') === 0) toCreate = 'tbody';
        if (html.indexOf('<td') === 0 || html.indexOf('<th') === 0) toCreate = 'tr';
        if (html.indexOf('<tbody') === 0) toCreate = 'table';
        if (html.indexOf('<option') === 0) toCreate = 'select';
        const tempParent = document.createElement(toCreate);
        tempParent.innerHTML = html;
        for (let i = 0; i < tempParent.childNodes.length; i += 1) {
          arr.push(tempParent.childNodes[i]);
        }
      } else {
        arr = qsa(selector.trim(), context || document);
      } // arr = qsa(selector, document);
    } else if (selector.nodeType || selector === window || selector === document) {
      arr.push(selector);
    } else if (Array.isArray(selector)) {
      if (selector instanceof Dom7) return selector;
      arr = selector;
    }
    return new Dom7(arrayUnique(arr));
  }
  $.fn = Dom7.prototype; // eslint-disable-next-line

  function addClass() {
    for (var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++) {
      classes[_key] = arguments[_key];
    }
    const classNames = arrayFlat(classes.map(c => c.split(' ')));
    this.forEach(el => {
      el.classList.add(...classNames);
    });
    return this;
  }
  function removeClass() {
    for (var _len2 = arguments.length, classes = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      classes[_key2] = arguments[_key2];
    }
    const classNames = arrayFlat(classes.map(c => c.split(' ')));
    this.forEach(el => {
      el.classList.remove(...classNames);
    });
    return this;
  }
  function toggleClass() {
    for (var _len3 = arguments.length, classes = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      classes[_key3] = arguments[_key3];
    }
    const classNames = arrayFlat(classes.map(c => c.split(' ')));
    this.forEach(el => {
      classNames.forEach(className => {
        el.classList.toggle(className);
      });
    });
  }
  function hasClass() {
    for (var _len4 = arguments.length, classes = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      classes[_key4] = arguments[_key4];
    }
    const classNames = arrayFlat(classes.map(c => c.split(' ')));
    return arrayFilter(this, el => {
      return classNames.filter(className => el.classList.contains(className)).length > 0;
    }).length > 0;
  }
  function attr(attrs, value) {
    if (arguments.length === 1 && typeof attrs === 'string') {
      // Get attr
      if (this[0]) return this[0].getAttribute(attrs);
      return undefined;
    } // Set attrs

    for (let i = 0; i < this.length; i += 1) {
      if (arguments.length === 2) {
        // String
        this[i].setAttribute(attrs, value);
      } else {
        // Object
        for (const attrName in attrs) {
          this[i][attrName] = attrs[attrName];
          this[i].setAttribute(attrName, attrs[attrName]);
        }
      }
    }
    return this;
  }
  function removeAttr(attr) {
    for (let i = 0; i < this.length; i += 1) {
      this[i].removeAttribute(attr);
    }
    return this;
  }
  function transform(transform) {
    for (let i = 0; i < this.length; i += 1) {
      this[i].style.transform = transform;
    }
    return this;
  }
  function transition$1(duration) {
    for (let i = 0; i < this.length; i += 1) {
      this[i].style.transitionDuration = typeof duration !== 'string' ? "".concat(duration, "ms") : duration;
    }
    return this;
  }
  function on() {
    for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      args[_key5] = arguments[_key5];
    }
    let [eventType, targetSelector, listener, capture] = args;
    if (typeof args[1] === 'function') {
      [eventType, listener, capture] = args;
      targetSelector = undefined;
    }
    if (!capture) capture = false;
    function handleLiveEvent(e) {
      const target = e.target;
      if (!target) return;
      const eventData = e.target.dom7EventData || [];
      if (eventData.indexOf(e) < 0) {
        eventData.unshift(e);
      }
      if ($(target).is(targetSelector)) listener.apply(target, eventData);else {
        const parents = $(target).parents(); // eslint-disable-line

        for (let k = 0; k < parents.length; k += 1) {
          if ($(parents[k]).is(targetSelector)) listener.apply(parents[k], eventData);
        }
      }
    }
    function handleEvent(e) {
      const eventData = e && e.target ? e.target.dom7EventData || [] : [];
      if (eventData.indexOf(e) < 0) {
        eventData.unshift(e);
      }
      listener.apply(this, eventData);
    }
    const events = eventType.split(' ');
    let j;
    for (let i = 0; i < this.length; i += 1) {
      const el = this[i];
      if (!targetSelector) {
        for (j = 0; j < events.length; j += 1) {
          const event = events[j];
          if (!el.dom7Listeners) el.dom7Listeners = {};
          if (!el.dom7Listeners[event]) el.dom7Listeners[event] = [];
          el.dom7Listeners[event].push({
            listener: listener,
            proxyListener: handleEvent
          });
          el.addEventListener(event, handleEvent, capture);
        }
      } else {
        // Live events
        for (j = 0; j < events.length; j += 1) {
          const event = events[j];
          if (!el.dom7LiveListeners) el.dom7LiveListeners = {};
          if (!el.dom7LiveListeners[event]) el.dom7LiveListeners[event] = [];
          el.dom7LiveListeners[event].push({
            listener: listener,
            proxyListener: handleLiveEvent
          });
          el.addEventListener(event, handleLiveEvent, capture);
        }
      }
    }
    return this;
  }
  function off() {
    for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
      args[_key6] = arguments[_key6];
    }
    let [eventType, targetSelector, listener, capture] = args;
    if (typeof args[1] === 'function') {
      [eventType, listener, capture] = args;
      targetSelector = undefined;
    }
    if (!capture) capture = false;
    const events = eventType.split(' ');
    for (let i = 0; i < events.length; i += 1) {
      const event = events[i];
      for (let j = 0; j < this.length; j += 1) {
        const el = this[j];
        let handlers;
        if (!targetSelector && el.dom7Listeners) {
          handlers = el.dom7Listeners[event];
        } else if (targetSelector && el.dom7LiveListeners) {
          handlers = el.dom7LiveListeners[event];
        }
        if (handlers && handlers.length) {
          for (let k = handlers.length - 1; k >= 0; k -= 1) {
            const handler = handlers[k];
            if (listener && handler.listener === listener) {
              el.removeEventListener(event, handler.proxyListener, capture);
              handlers.splice(k, 1);
            } else if (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener) {
              el.removeEventListener(event, handler.proxyListener, capture);
              handlers.splice(k, 1);
            } else if (!listener) {
              el.removeEventListener(event, handler.proxyListener, capture);
              handlers.splice(k, 1);
            }
          }
        }
      }
    }
    return this;
  }
  function trigger() {
    const window = getWindow();
    for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
      args[_key9] = arguments[_key9];
    }
    const events = args[0].split(' ');
    const eventData = args[1];
    for (let i = 0; i < events.length; i += 1) {
      const event = events[i];
      for (let j = 0; j < this.length; j += 1) {
        const el = this[j];
        if (window.CustomEvent) {
          const evt = new window.CustomEvent(event, {
            detail: eventData,
            bubbles: true,
            cancelable: true
          });
          el.dom7EventData = args.filter((data, dataIndex) => dataIndex > 0);
          el.dispatchEvent(evt);
          el.dom7EventData = [];
          delete el.dom7EventData;
        }
      }
    }
    return this;
  }
  function transitionEnd$1(callback) {
    const dom = this;
    function fireCallBack(e) {
      if (e.target !== this) return;
      callback.call(this, e);
      dom.off('transitionend', fireCallBack);
    }
    if (callback) {
      dom.on('transitionend', fireCallBack);
    }
    return this;
  }
  function outerWidth(includeMargins) {
    if (this.length > 0) {
      if (includeMargins) {
        const styles = this.styles();
        return this[0].offsetWidth + parseFloat(styles.getPropertyValue('margin-right')) + parseFloat(styles.getPropertyValue('margin-left'));
      }
      return this[0].offsetWidth;
    }
    return null;
  }
  function outerHeight(includeMargins) {
    if (this.length > 0) {
      if (includeMargins) {
        const styles = this.styles();
        return this[0].offsetHeight + parseFloat(styles.getPropertyValue('margin-top')) + parseFloat(styles.getPropertyValue('margin-bottom'));
      }
      return this[0].offsetHeight;
    }
    return null;
  }
  function offset() {
    if (this.length > 0) {
      const window = getWindow();
      const document = getDocument();
      const el = this[0];
      const box = el.getBoundingClientRect();
      const body = document.body;
      const clientTop = el.clientTop || body.clientTop || 0;
      const clientLeft = el.clientLeft || body.clientLeft || 0;
      const scrollTop = el === window ? window.scrollY : el.scrollTop;
      const scrollLeft = el === window ? window.scrollX : el.scrollLeft;
      return {
        top: box.top + scrollTop - clientTop,
        left: box.left + scrollLeft - clientLeft
      };
    }
    return null;
  }
  function styles() {
    const window = getWindow();
    if (this[0]) return window.getComputedStyle(this[0], null);
    return {};
  }
  function css(props, value) {
    const window = getWindow();
    let i;
    if (arguments.length === 1) {
      if (typeof props === 'string') {
        // .css('width')
        if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(props);
      } else {
        // .css({ width: '100px' })
        for (i = 0; i < this.length; i += 1) {
          for (const prop in props) {
            this[i].style[prop] = props[prop];
          }
        }
        return this;
      }
    }
    if (arguments.length === 2 && typeof props === 'string') {
      // .css('width', '100px')
      for (i = 0; i < this.length; i += 1) {
        this[i].style[props] = value;
      }
      return this;
    }
    return this;
  }
  function each(callback) {
    if (!callback) return this;
    this.forEach((el, index) => {
      callback.apply(el, [el, index]);
    });
    return this;
  }
  function filter(callback) {
    const result = arrayFilter(this, callback);
    return $(result);
  }
  function html(html) {
    if (typeof html === 'undefined') {
      return this[0] ? this[0].innerHTML : null;
    }
    for (let i = 0; i < this.length; i += 1) {
      this[i].innerHTML = html;
    }
    return this;
  }
  function text(text) {
    if (typeof text === 'undefined') {
      return this[0] ? this[0].textContent.trim() : null;
    }
    for (let i = 0; i < this.length; i += 1) {
      this[i].textContent = text;
    }
    return this;
  }
  function is(selector) {
    const window = getWindow();
    const document = getDocument();
    const el = this[0];
    let compareWith;
    let i;
    if (!el || typeof selector === 'undefined') return false;
    if (typeof selector === 'string') {
      if (el.matches) return el.matches(selector);
      if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);
      if (el.msMatchesSelector) return el.msMatchesSelector(selector);
      compareWith = $(selector);
      for (i = 0; i < compareWith.length; i += 1) {
        if (compareWith[i] === el) return true;
      }
      return false;
    }
    if (selector === document) {
      return el === document;
    }
    if (selector === window) {
      return el === window;
    }
    if (selector.nodeType || selector instanceof Dom7) {
      compareWith = selector.nodeType ? [selector] : selector;
      for (i = 0; i < compareWith.length; i += 1) {
        if (compareWith[i] === el) return true;
      }
      return false;
    }
    return false;
  }
  function index() {
    let child = this[0];
    let i;
    if (child) {
      i = 0; // eslint-disable-next-line

      while ((child = child.previousSibling) !== null) {
        if (child.nodeType === 1) i += 1;
      }
      return i;
    }
    return undefined;
  }
  function eq(index) {
    if (typeof index === 'undefined') return this;
    const length = this.length;
    if (index > length - 1) {
      return $([]);
    }
    if (index < 0) {
      const returnIndex = length + index;
      if (returnIndex < 0) return $([]);
      return $([this[returnIndex]]);
    }
    return $([this[index]]);
  }
  function append() {
    let newChild;
    const document = getDocument();
    for (let k = 0; k < arguments.length; k += 1) {
      newChild = k < 0 || arguments.length <= k ? undefined : arguments[k];
      for (let i = 0; i < this.length; i += 1) {
        if (typeof newChild === 'string') {
          const tempDiv = document.createElement('div');
          tempDiv.innerHTML = newChild;
          while (tempDiv.firstChild) {
            this[i].appendChild(tempDiv.firstChild);
          }
        } else if (newChild instanceof Dom7) {
          for (let j = 0; j < newChild.length; j += 1) {
            this[i].appendChild(newChild[j]);
          }
        } else {
          this[i].appendChild(newChild);
        }
      }
    }
    return this;
  }
  function prepend(newChild) {
    const document = getDocument();
    let i;
    let j;
    for (i = 0; i < this.length; i += 1) {
      if (typeof newChild === 'string') {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = newChild;
        for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) {
          this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
        }
      } else if (newChild instanceof Dom7) {
        for (j = 0; j < newChild.length; j += 1) {
          this[i].insertBefore(newChild[j], this[i].childNodes[0]);
        }
      } else {
        this[i].insertBefore(newChild, this[i].childNodes[0]);
      }
    }
    return this;
  }
  function next(selector) {
    if (this.length > 0) {
      if (selector) {
        if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) {
          return $([this[0].nextElementSibling]);
        }
        return $([]);
      }
      if (this[0].nextElementSibling) return $([this[0].nextElementSibling]);
      return $([]);
    }
    return $([]);
  }
  function nextAll(selector) {
    const nextEls = [];
    let el = this[0];
    if (!el) return $([]);
    while (el.nextElementSibling) {
      const next = el.nextElementSibling; // eslint-disable-line

      if (selector) {
        if ($(next).is(selector)) nextEls.push(next);
      } else nextEls.push(next);
      el = next;
    }
    return $(nextEls);
  }
  function prev(selector) {
    if (this.length > 0) {
      const el = this[0];
      if (selector) {
        if (el.previousElementSibling && $(el.previousElementSibling).is(selector)) {
          return $([el.previousElementSibling]);
        }
        return $([]);
      }
      if (el.previousElementSibling) return $([el.previousElementSibling]);
      return $([]);
    }
    return $([]);
  }
  function prevAll(selector) {
    const prevEls = [];
    let el = this[0];
    if (!el) return $([]);
    while (el.previousElementSibling) {
      const prev = el.previousElementSibling; // eslint-disable-line

      if (selector) {
        if ($(prev).is(selector)) prevEls.push(prev);
      } else prevEls.push(prev);
      el = prev;
    }
    return $(prevEls);
  }
  function parent(selector) {
    const parents = []; // eslint-disable-line

    for (let i = 0; i < this.length; i += 1) {
      if (this[i].parentNode !== null) {
        if (selector) {
          if ($(this[i].parentNode).is(selector)) parents.push(this[i].parentNode);
        } else {
          parents.push(this[i].parentNode);
        }
      }
    }
    return $(parents);
  }
  function parents(selector) {
    const parents = []; // eslint-disable-line

    for (let i = 0; i < this.length; i += 1) {
      let parent = this[i].parentNode; // eslint-disable-line

      while (parent) {
        if (selector) {
          if ($(parent).is(selector)) parents.push(parent);
        } else {
          parents.push(parent);
        }
        parent = parent.parentNode;
      }
    }
    return $(parents);
  }
  function closest(selector) {
    let closest = this; // eslint-disable-line

    if (typeof selector === 'undefined') {
      return $([]);
    }
    if (!closest.is(selector)) {
      closest = closest.parents(selector).eq(0);
    }
    return closest;
  }
  function find(selector) {
    const foundElements = [];
    for (let i = 0; i < this.length; i += 1) {
      const found = this[i].querySelectorAll(selector);
      for (let j = 0; j < found.length; j += 1) {
        foundElements.push(found[j]);
      }
    }
    return $(foundElements);
  }
  function children(selector) {
    const children = []; // eslint-disable-line

    for (let i = 0; i < this.length; i += 1) {
      const childNodes = this[i].children;
      for (let j = 0; j < childNodes.length; j += 1) {
        if (!selector || $(childNodes[j]).is(selector)) {
          children.push(childNodes[j]);
        }
      }
    }
    return $(children);
  }
  function remove() {
    for (let i = 0; i < this.length; i += 1) {
      if (this[i].parentNode) this[i].parentNode.removeChild(this[i]);
    }
    return this;
  }
  const Methods = {
    addClass: addClass,
    removeClass: removeClass,
    hasClass: hasClass,
    toggleClass: toggleClass,
    attr: attr,
    removeAttr: removeAttr,
    transform: transform,
    transition: transition$1,
    on: on,
    off: off,
    trigger: trigger,
    transitionEnd: transitionEnd$1,
    outerWidth: outerWidth,
    outerHeight: outerHeight,
    styles: styles,
    offset: offset,
    css: css,
    each: each,
    html: html,
    text: text,
    is: is,
    index: index,
    eq: eq,
    append: append,
    prepend: prepend,
    next: next,
    nextAll: nextAll,
    prev: prev,
    prevAll: prevAll,
    parent: parent,
    parents: parents,
    closest: closest,
    find: find,
    children: children,
    filter: filter,
    remove: remove
  };
  Object.keys(Methods).forEach(methodName => {
    Object.defineProperty($.fn, methodName, {
      value: Methods[methodName],
      writable: true
    });
  });
  function deleteProps(obj) {
    const object = obj;
    Object.keys(object).forEach(key => {
      try {
        object[key] = null;
      } catch (e) {// no getter for object
      }
      try {
        delete object[key];
      } catch (e) {// something got wrong
      }
    });
  }
  function nextTick(callback, delay) {
    if (delay === void 0) {
      delay = 0;
    }
    return setTimeout(callback, delay);
  }
  function now() {
    return Date.now();
  }
  function getComputedStyle$1(el) {
    const window = getWindow();
    let style;
    if (window.getComputedStyle) {
      style = window.getComputedStyle(el, null);
    }
    if (!style && el.currentStyle) {
      style = el.currentStyle;
    }
    if (!style) {
      style = el.style;
    }
    return style;
  }
  function getTranslate(el, axis) {
    if (axis === void 0) {
      axis = 'x';
    }
    const window = getWindow();
    let matrix;
    let curTransform;
    let transformMatrix;
    const curStyle = getComputedStyle$1(el);
    if (window.WebKitCSSMatrix) {
      curTransform = curStyle.transform || curStyle.webkitTransform;
      if (curTransform.split(',').length > 6) {
        curTransform = curTransform.split(', ').map(a => a.replace(',', '.')).join(', ');
      } // Some old versions of Webkit choke when 'none' is passed; pass
      // empty string instead in this case

      transformMatrix = new window.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
    } else {
      transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
      matrix = transformMatrix.toString().split(',');
    }
    if (axis === 'x') {
      // Latest Chrome and webkits Fix
      if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41; // Crazy IE10 Matrix
      else if (matrix.length === 16) curTransform = parseFloat(matrix[12]); // Normal Browsers
      else curTransform = parseFloat(matrix[4]);
    }
    if (axis === 'y') {
      // Latest Chrome and webkits Fix
      if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42; // Crazy IE10 Matrix
      else if (matrix.length === 16) curTransform = parseFloat(matrix[13]); // Normal Browsers
      else curTransform = parseFloat(matrix[5]);
    }
    return curTransform || 0;
  }
  function isObject(o) {
    return _typeof(o) === 'object' && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === 'Object';
  }
  function isNode(node) {
    // eslint-disable-next-line
    if (typeof window !== 'undefined' && typeof window.HTMLElement !== 'undefined') {
      return node instanceof HTMLElement;
    }
    return node && (node.nodeType === 1 || node.nodeType === 11);
  }
  function extend() {
    const to = Object(arguments.length <= 0 ? undefined : arguments[0]);
    const noExtend = ['__proto__', 'constructor', 'prototype'];
    for (let i = 1; i < arguments.length; i += 1) {
      const nextSource = i < 0 || arguments.length <= i ? undefined : arguments[i];
      if (nextSource !== undefined && nextSource !== null && !isNode(nextSource)) {
        const keysArray = Object.keys(Object(nextSource)).filter(key => noExtend.indexOf(key) < 0);
        for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
          const nextKey = keysArray[nextIndex];
          const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
          if (desc !== undefined && desc.enumerable) {
            if (isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
              if (nextSource[nextKey].__swiper__) {
                to[nextKey] = nextSource[nextKey];
              } else {
                extend(to[nextKey], nextSource[nextKey]);
              }
            } else if (!isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
              to[nextKey] = {};
              if (nextSource[nextKey].__swiper__) {
                to[nextKey] = nextSource[nextKey];
              } else {
                extend(to[nextKey], nextSource[nextKey]);
              }
            } else {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
    }
    return to;
  }
  function setCSSProperty(el, varName, varValue) {
    el.style.setProperty(varName, varValue);
  }
  function animateCSSModeScroll(_ref) {
    let {
      swiper: swiper,
      targetPosition: targetPosition,
      side: side
    } = _ref;
    const window = getWindow();
    const startPosition = -swiper.translate;
    let startTime = null;
    let time;
    const duration = swiper.params.speed;
    swiper.wrapperEl.style.scrollSnapType = 'none';
    window.cancelAnimationFrame(swiper.cssModeFrameID);
    const dir = targetPosition > startPosition ? 'next' : 'prev';
    const isOutOfBound = (current, target) => {
      return dir === 'next' && current >= target || dir === 'prev' && current <= target;
    };
    const animate = () => {
      time = new Date().getTime();
      if (startTime === null) {
        startTime = time;
      }
      const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
      const easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
      let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
      if (isOutOfBound(currentPosition, targetPosition)) {
        currentPosition = targetPosition;
      }
      swiper.wrapperEl.scrollTo(_defineProperty({}, side, currentPosition));
      if (isOutOfBound(currentPosition, targetPosition)) {
        swiper.wrapperEl.style.overflow = 'hidden';
        swiper.wrapperEl.style.scrollSnapType = '';
        setTimeout(() => {
          swiper.wrapperEl.style.overflow = '';
          swiper.wrapperEl.scrollTo(_defineProperty({}, side, currentPosition));
        });
        window.cancelAnimationFrame(swiper.cssModeFrameID);
        return;
      }
      swiper.cssModeFrameID = window.requestAnimationFrame(animate);
    };
    animate();
  }
  let support;
  function calcSupport() {
    const window = getWindow();
    const document = getDocument();
    return {
      smoothScroll: document.documentElement && 'scrollBehavior' in document.documentElement.style,
      touch: !!('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch),
      passiveListener: function checkPassiveListener() {
        let supportsPassive = false;
        try {
          const opts = Object.defineProperty({}, 'passive', {
            // eslint-disable-next-line
            get: function () {
              supportsPassive = true;
            }
          });
          window.addEventListener('testPassiveListener', null, opts);
        } catch (e) {// No support
        }
        return supportsPassive;
      }(),
      gestures: function checkGestures() {
        return 'ongesturestart' in window;
      }()
    };
  }
  function getSupport() {
    if (!support) {
      support = calcSupport();
    }
    return support;
  }
  let deviceCached;
  function calcDevice(_temp) {
    let {
      userAgent: userAgent
    } = _temp === void 0 ? {} : _temp;
    const support = getSupport();
    const window = getWindow();
    const platform = window.navigator.platform;
    const ua = userAgent || window.navigator.userAgent;
    const device = {
      ios: false,
      android: false
    };
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line

    let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
    const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
    const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
    const windows = platform === 'Win32';
    let macos = platform === 'MacIntel'; // iPadOs 13 fix

    const iPadScreens = ['1024x1366', '1366x1024', '834x1194', '1194x834', '834x1112', '1112x834', '768x1024', '1024x768', '820x1180', '1180x820', '810x1080', '1080x810'];
    if (!ipad && macos && support.touch && iPadScreens.indexOf("".concat(screenWidth, "x").concat(screenHeight)) >= 0) {
      ipad = ua.match(/(Version)\/([\d.]+)/);
      if (!ipad) ipad = [0, 1, '13_0_0'];
      macos = false;
    } // Android

    if (android && !windows) {
      device.os = 'android';
      device.android = true;
    }
    if (ipad || iphone || ipod) {
      device.os = 'ios';
      device.ios = true;
    } // Export object

    return device;
  }
  function getDevice(overrides) {
    if (overrides === void 0) {
      overrides = {};
    }
    if (!deviceCached) {
      deviceCached = calcDevice(overrides);
    }
    return deviceCached;
  }
  let browser;
  function calcBrowser() {
    const window = getWindow();
    function isSafari() {
      const ua = window.navigator.userAgent.toLowerCase();
      return ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0;
    }
    return {
      isSafari: isSafari(),
      isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent)
    };
  }
  function getBrowser() {
    if (!browser) {
      browser = calcBrowser();
    }
    return browser;
  }
  function Resize(_ref) {
    let {
      swiper: swiper,
      on: on,
      emit: emit
    } = _ref;
    const window = getWindow();
    let observer = null;
    let animationFrame = null;
    const resizeHandler = () => {
      if (!swiper || swiper.destroyed || !swiper.initialized) return;
      emit('beforeResize');
      emit('resize');
    };
    const createObserver = () => {
      if (!swiper || swiper.destroyed || !swiper.initialized) return;
      observer = new ResizeObserver(entries => {
        animationFrame = window.requestAnimationFrame(() => {
          const {
            width: width,
            height: height
          } = swiper;
          let newWidth = width;
          let newHeight = height;
          entries.forEach(_ref2 => {
            let {
              contentBoxSize: contentBoxSize,
              contentRect: contentRect,
              target: target
            } = _ref2;
            if (target && target !== swiper.el) return;
            newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
            newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
          });
          if (newWidth !== width || newHeight !== height) {
            resizeHandler();
          }
        });
      });
      observer.observe(swiper.el);
    };
    const removeObserver = () => {
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }
      if (observer && observer.unobserve && swiper.el) {
        observer.unobserve(swiper.el);
        observer = null;
      }
    };
    const orientationChangeHandler = () => {
      if (!swiper || swiper.destroyed || !swiper.initialized) return;
      emit('orientationchange');
    };
    on('init', () => {
      if (swiper.params.resizeObserver && typeof window.ResizeObserver !== 'undefined') {
        createObserver();
        return;
      }
      window.addEventListener('resize', resizeHandler);
      window.addEventListener('orientationchange', orientationChangeHandler);
    });
    on('destroy', () => {
      removeObserver();
      window.removeEventListener('resize', resizeHandler);
      window.removeEventListener('orientationchange', orientationChangeHandler);
    });
  }
  function Observer(_ref) {
    let {
      swiper: swiper,
      extendParams: extendParams,
      on: on,
      emit: emit
    } = _ref;
    const observers = [];
    const window = getWindow();
    const attach = function (target, options) {
      if (options === void 0) {
        options = {};
      }
      const ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
      const observer = new ObserverFunc(mutations => {
        // The observerUpdate event should only be triggered
        // once despite the number of mutations.  Additional
        // triggers are redundant and are very costly
        if (mutations.length === 1) {
          emit('observerUpdate', mutations[0]);
          return;
        }
        const observerUpdate = function observerUpdate() {
          emit('observerUpdate', mutations[0]);
        };
        if (window.requestAnimationFrame) {
          window.requestAnimationFrame(observerUpdate);
        } else {
          window.setTimeout(observerUpdate, 0);
        }
      });
      observer.observe(target, {
        attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
        childList: typeof options.childList === 'undefined' ? true : options.childList,
        characterData: typeof options.characterData === 'undefined' ? true : options.characterData
      });
      observers.push(observer);
    };
    const init = () => {
      if (!swiper.params.observer) return;
      if (swiper.params.observeParents) {
        const containerParents = swiper.$el.parents();
        for (let i = 0; i < containerParents.length; i += 1) {
          attach(containerParents[i]);
        }
      } // Observe container

      attach(swiper.$el[0], {
        childList: swiper.params.observeSlideChildren
      }); // Observe wrapper

      attach(swiper.$wrapperEl[0], {
        attributes: false
      });
    };
    const destroy = () => {
      observers.forEach(observer => {
        observer.disconnect();
      });
      observers.splice(0, observers.length);
    };
    extendParams({
      observer: false,
      observeParents: false,
      observeSlideChildren: false
    });
    on('init', init);
    on('destroy', destroy);
  }

  /* eslint-disable no-underscore-dangle */
  var eventsEmitter = {
    on: function (events, handler, priority) {
      const self = this;
      if (!self.eventsListeners || self.destroyed) return self;
      if (typeof handler !== 'function') return self;
      const method = priority ? 'unshift' : 'push';
      events.split(' ').forEach(event => {
        if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
        self.eventsListeners[event][method](handler);
      });
      return self;
    },
    once: function (events, handler, priority) {
      const self = this;
      if (!self.eventsListeners || self.destroyed) return self;
      if (typeof handler !== 'function') return self;
      function onceHandler() {
        self.off(events, onceHandler);
        if (onceHandler.__emitterProxy) {
          delete onceHandler.__emitterProxy;
        }
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        handler.apply(self, args);
      }
      onceHandler.__emitterProxy = handler;
      return self.on(events, onceHandler, priority);
    },
    onAny: function (handler, priority) {
      const self = this;
      if (!self.eventsListeners || self.destroyed) return self;
      if (typeof handler !== 'function') return self;
      const method = priority ? 'unshift' : 'push';
      if (self.eventsAnyListeners.indexOf(handler) < 0) {
        self.eventsAnyListeners[method](handler);
      }
      return self;
    },
    offAny: function (handler) {
      const self = this;
      if (!self.eventsListeners || self.destroyed) return self;
      if (!self.eventsAnyListeners) return self;
      const index = self.eventsAnyListeners.indexOf(handler);
      if (index >= 0) {
        self.eventsAnyListeners.splice(index, 1);
      }
      return self;
    },
    off: function (events, handler) {
      const self = this;
      if (!self.eventsListeners || self.destroyed) return self;
      if (!self.eventsListeners) return self;
      events.split(' ').forEach(event => {
        if (typeof handler === 'undefined') {
          self.eventsListeners[event] = [];
        } else if (self.eventsListeners[event]) {
          self.eventsListeners[event].forEach((eventHandler, index) => {
            if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) {
              self.eventsListeners[event].splice(index, 1);
            }
          });
        }
      });
      return self;
    },
    emit: function () {
      const self = this;
      if (!self.eventsListeners || self.destroyed) return self;
      if (!self.eventsListeners) return self;
      let events;
      let data;
      let context;
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      if (typeof args[0] === 'string' || Array.isArray(args[0])) {
        events = args[0];
        data = args.slice(1, args.length);
        context = self;
      } else {
        events = args[0].events;
        data = args[0].data;
        context = args[0].context || self;
      }
      data.unshift(context);
      const eventsArray = Array.isArray(events) ? events : events.split(' ');
      eventsArray.forEach(event => {
        if (self.eventsAnyListeners && self.eventsAnyListeners.length) {
          self.eventsAnyListeners.forEach(eventHandler => {
            eventHandler.apply(context, [event, ...data]);
          });
        }
        if (self.eventsListeners && self.eventsListeners[event]) {
          self.eventsListeners[event].forEach(eventHandler => {
            eventHandler.apply(context, data);
          });
        }
      });
      return self;
    }
  };
  function updateSize() {
    const swiper = this;
    let width;
    let height;
    const $el = swiper.$el;
    if (typeof swiper.params.width !== 'undefined' && swiper.params.width !== null) {
      width = swiper.params.width;
    } else {
      width = $el[0].clientWidth;
    }
    if (typeof swiper.params.height !== 'undefined' && swiper.params.height !== null) {
      height = swiper.params.height;
    } else {
      height = $el[0].clientHeight;
    }
    if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {
      return;
    } // Subtract paddings

    width = width - parseInt($el.css('padding-left') || 0, 10) - parseInt($el.css('padding-right') || 0, 10);
    height = height - parseInt($el.css('padding-top') || 0, 10) - parseInt($el.css('padding-bottom') || 0, 10);
    if (Number.isNaN(width)) width = 0;
    if (Number.isNaN(height)) height = 0;
    Object.assign(swiper, {
      width: width,
      height: height,
      size: swiper.isHorizontal() ? width : height
    });
  }
  function updateSlides() {
    const swiper = this;
    function getDirectionLabel(property) {
      if (swiper.isHorizontal()) {
        return property;
      } // prettier-ignore

      return {
        'width': 'height',
        'margin-top': 'margin-left',
        'margin-bottom ': 'margin-right',
        'margin-left': 'margin-top',
        'margin-right': 'margin-bottom',
        'padding-left': 'padding-top',
        'padding-right': 'padding-bottom',
        'marginRight': 'marginBottom'
      }[property];
    }
    function getDirectionPropertyValue(node, label) {
      return parseFloat(node.getPropertyValue(getDirectionLabel(label)) || 0);
    }
    const params = swiper.params;
    const {
      $wrapperEl: $wrapperEl,
      size: swiperSize,
      rtlTranslate: rtl,
      wrongRTL: wrongRTL
    } = swiper;
    const isVirtual = swiper.virtual && params.virtual.enabled;
    const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
    const slides = $wrapperEl.children(".".concat(swiper.params.slideClass));
    const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
    let snapGrid = [];
    const slidesGrid = [];
    const slidesSizesGrid = [];
    let offsetBefore = params.slidesOffsetBefore;
    if (typeof offsetBefore === 'function') {
      offsetBefore = params.slidesOffsetBefore.call(swiper);
    }
    let offsetAfter = params.slidesOffsetAfter;
    if (typeof offsetAfter === 'function') {
      offsetAfter = params.slidesOffsetAfter.call(swiper);
    }
    const previousSnapGridLength = swiper.snapGrid.length;
    const previousSlidesGridLength = swiper.slidesGrid.length;
    let spaceBetween = params.spaceBetween;
    let slidePosition = -offsetBefore;
    let prevSlideSize = 0;
    let index = 0;
    if (typeof swiperSize === 'undefined') {
      return;
    }
    if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
      spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiperSize;
    }
    swiper.virtualSize = -spaceBetween; // reset margins

    if (rtl) slides.css({
      marginLeft: '',
      marginBottom: '',
      marginTop: ''
    });else slides.css({
      marginRight: '',
      marginBottom: '',
      marginTop: ''
    }); // reset cssMode offsets

    if (params.centeredSlides && params.cssMode) {
      setCSSProperty(swiper.wrapperEl, '--swiper-centered-offset-before', '');
      setCSSProperty(swiper.wrapperEl, '--swiper-centered-offset-after', '');
    }
    const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
    if (gridEnabled) {
      swiper.grid.initSlides(slidesLength);
    } // Calc slides

    let slideSize;
    const shouldResetSlideSize = params.slidesPerView === 'auto' && params.breakpoints && Object.keys(params.breakpoints).filter(key => {
      return typeof params.breakpoints[key].slidesPerView !== 'undefined';
    }).length > 0;
    for (let i = 0; i < slidesLength; i += 1) {
      slideSize = 0;
      const slide = slides.eq(i);
      if (gridEnabled) {
        swiper.grid.updateSlide(i, slide, slidesLength, getDirectionLabel);
      }
      if (slide.css('display') === 'none') continue; // eslint-disable-line

      if (params.slidesPerView === 'auto') {
        if (shouldResetSlideSize) {
          slides[i].style[getDirectionLabel('width')] = "";
        }
        const slideStyles = getComputedStyle(slide[0]);
        const currentTransform = slide[0].style.transform;
        const currentWebKitTransform = slide[0].style.webkitTransform;
        if (currentTransform) {
          slide[0].style.transform = 'none';
        }
        if (currentWebKitTransform) {
          slide[0].style.webkitTransform = 'none';
        }
        if (params.roundLengths) {
          slideSize = swiper.isHorizontal() ? slide.outerWidth(true) : slide.outerHeight(true);
        } else {
          // eslint-disable-next-line
          const width = getDirectionPropertyValue(slideStyles, 'width');
          const paddingLeft = getDirectionPropertyValue(slideStyles, 'padding-left');
          const paddingRight = getDirectionPropertyValue(slideStyles, 'padding-right');
          const marginLeft = getDirectionPropertyValue(slideStyles, 'margin-left');
          const marginRight = getDirectionPropertyValue(slideStyles, 'margin-right');
          const boxSizing = slideStyles.getPropertyValue('box-sizing');
          if (boxSizing && boxSizing === 'border-box') {
            slideSize = width + marginLeft + marginRight;
          } else {
            const {
              clientWidth: clientWidth,
              offsetWidth: offsetWidth
            } = slide[0];
            slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
          }
        }
        if (currentTransform) {
          slide[0].style.transform = currentTransform;
        }
        if (currentWebKitTransform) {
          slide[0].style.webkitTransform = currentWebKitTransform;
        }
        if (params.roundLengths) slideSize = Math.floor(slideSize);
      } else {
        slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
        if (params.roundLengths) slideSize = Math.floor(slideSize);
        if (slides[i]) {
          slides[i].style[getDirectionLabel('width')] = "".concat(slideSize, "px");
        }
      }
      if (slides[i]) {
        slides[i].swiperSlideSize = slideSize;
      }
      slidesSizesGrid.push(slideSize);
      if (params.centeredSlides) {
        slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
        if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
        if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
        if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;
        if (params.roundLengths) slidePosition = Math.floor(slidePosition);
        if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
        slidesGrid.push(slidePosition);
      } else {
        if (params.roundLengths) slidePosition = Math.floor(slidePosition);
        if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
        slidesGrid.push(slidePosition);
        slidePosition = slidePosition + slideSize + spaceBetween;
      }
      swiper.virtualSize += slideSize + spaceBetween;
      prevSlideSize = slideSize;
      index += 1;
    }
    swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
    if (rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {
      $wrapperEl.css({
        width: "".concat(swiper.virtualSize + params.spaceBetween, "px")
      });
    }
    if (params.setWrapperSize) {
      $wrapperEl.css(_defineProperty({}, getDirectionLabel('width'), "".concat(swiper.virtualSize + params.spaceBetween, "px")));
    }
    if (gridEnabled) {
      swiper.grid.updateWrapperSize(slideSize, snapGrid, getDirectionLabel);
    } // Remove last grid elements depending on width

    if (!params.centeredSlides) {
      const newSlidesGrid = [];
      for (let i = 0; i < snapGrid.length; i += 1) {
        let slidesGridItem = snapGrid[i];
        if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
        if (snapGrid[i] <= swiper.virtualSize - swiperSize) {
          newSlidesGrid.push(slidesGridItem);
        }
      }
      snapGrid = newSlidesGrid;
      if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
        snapGrid.push(swiper.virtualSize - swiperSize);
      }
    }
    if (snapGrid.length === 0) snapGrid = [0];
    if (params.spaceBetween !== 0) {
      const key = swiper.isHorizontal() && rtl ? 'marginLeft' : getDirectionLabel('marginRight');
      slides.filter((_, slideIndex) => {
        if (!params.cssMode) return true;
        if (slideIndex === slides.length - 1) {
          return false;
        }
        return true;
      }).css(_defineProperty({}, key, "".concat(spaceBetween, "px")));
    }
    if (params.centeredSlides && params.centeredSlidesBounds) {
      let allSlidesSize = 0;
      slidesSizesGrid.forEach(slideSizeValue => {
        allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
      });
      allSlidesSize -= params.spaceBetween;
      const maxSnap = allSlidesSize - swiperSize;
      snapGrid = snapGrid.map(snap => {
        if (snap < 0) return -offsetBefore;
        if (snap > maxSnap) return maxSnap + offsetAfter;
        return snap;
      });
    }
    if (params.centerInsufficientSlides) {
      let allSlidesSize = 0;
      slidesSizesGrid.forEach(slideSizeValue => {
        allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
      });
      allSlidesSize -= params.spaceBetween;
      if (allSlidesSize < swiperSize) {
        const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
        snapGrid.forEach((snap, snapIndex) => {
          snapGrid[snapIndex] = snap - allSlidesOffset;
        });
        slidesGrid.forEach((snap, snapIndex) => {
          slidesGrid[snapIndex] = snap + allSlidesOffset;
        });
      }
    }
    Object.assign(swiper, {
      slides: slides,
      snapGrid: snapGrid,
      slidesGrid: slidesGrid,
      slidesSizesGrid: slidesSizesGrid
    });
    if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
      setCSSProperty(swiper.wrapperEl, '--swiper-centered-offset-before', "".concat(-snapGrid[0], "px"));
      setCSSProperty(swiper.wrapperEl, '--swiper-centered-offset-after', "".concat(swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2, "px"));
      const addToSnapGrid = -swiper.snapGrid[0];
      const addToSlidesGrid = -swiper.slidesGrid[0];
      swiper.snapGrid = swiper.snapGrid.map(v => v + addToSnapGrid);
      swiper.slidesGrid = swiper.slidesGrid.map(v => v + addToSlidesGrid);
    }
    if (slidesLength !== previousSlidesLength) {
      swiper.emit('slidesLengthChange');
    }
    if (snapGrid.length !== previousSnapGridLength) {
      if (swiper.params.watchOverflow) swiper.checkOverflow();
      swiper.emit('snapGridLengthChange');
    }
    if (slidesGrid.length !== previousSlidesGridLength) {
      swiper.emit('slidesGridLengthChange');
    }
    if (params.watchSlidesProgress) {
      swiper.updateSlidesOffset();
    }
    if (!isVirtual && !params.cssMode && (params.effect === 'slide' || params.effect === 'fade')) {
      const backFaceHiddenClass = "".concat(params.containerModifierClass, "backface-hidden");
      const hasClassBackfaceClassAdded = swiper.$el.hasClass(backFaceHiddenClass);
      if (slidesLength <= params.maxBackfaceHiddenSlides) {
        if (!hasClassBackfaceClassAdded) swiper.$el.addClass(backFaceHiddenClass);
      } else if (hasClassBackfaceClassAdded) {
        swiper.$el.removeClass(backFaceHiddenClass);
      }
    }
  }
  function updateAutoHeight(speed) {
    const swiper = this;
    const activeSlides = [];
    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    let newHeight = 0;
    let i;
    if (typeof speed === 'number') {
      swiper.setTransition(speed);
    } else if (speed === true) {
      swiper.setTransition(swiper.params.speed);
    }
    const getSlideByIndex = index => {
      if (isVirtual) {
        return swiper.slides.filter(el => parseInt(el.getAttribute('data-swiper-slide-index'), 10) === index)[0];
      }
      return swiper.slides.eq(index)[0];
    }; // Find slides currently in view

    if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
      if (swiper.params.centeredSlides) {
        (swiper.visibleSlides || $([])).each(slide => {
          activeSlides.push(slide);
        });
      } else {
        for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
          const index = swiper.activeIndex + i;
          if (index > swiper.slides.length && !isVirtual) break;
          activeSlides.push(getSlideByIndex(index));
        }
      }
    } else {
      activeSlides.push(getSlideByIndex(swiper.activeIndex));
    } // Find new height from highest slide in view

    for (i = 0; i < activeSlides.length; i += 1) {
      if (typeof activeSlides[i] !== 'undefined') {
        const height = activeSlides[i].offsetHeight;
        newHeight = height > newHeight ? height : newHeight;
      }
    } // Update Height

    if (newHeight || newHeight === 0) swiper.$wrapperEl.css('height', "".concat(newHeight, "px"));
  }
  function updateSlidesOffset() {
    const swiper = this;
    const slides = swiper.slides;
    for (let i = 0; i < slides.length; i += 1) {
      slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
    }
  }
  function updateSlidesProgress(translate) {
    if (translate === void 0) {
      translate = this && this.translate || 0;
    }
    const swiper = this;
    const params = swiper.params;
    const {
      slides: slides,
      rtlTranslate: rtl,
      snapGrid: snapGrid
    } = swiper;
    if (slides.length === 0) return;
    if (typeof slides[0].swiperSlideOffset === 'undefined') swiper.updateSlidesOffset();
    let offsetCenter = -translate;
    if (rtl) offsetCenter = translate; // Visible Slides

    slides.removeClass(params.slideVisibleClass);
    swiper.visibleSlidesIndexes = [];
    swiper.visibleSlides = [];
    for (let i = 0; i < slides.length; i += 1) {
      const slide = slides[i];
      let slideOffset = slide.swiperSlideOffset;
      if (params.cssMode && params.centeredSlides) {
        slideOffset -= slides[0].swiperSlideOffset;
      }
      const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + params.spaceBetween);
      const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + params.spaceBetween);
      const slideBefore = -(offsetCenter - slideOffset);
      const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
      const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
      if (isVisible) {
        swiper.visibleSlides.push(slide);
        swiper.visibleSlidesIndexes.push(i);
        slides.eq(i).addClass(params.slideVisibleClass);
      }
      slide.progress = rtl ? -slideProgress : slideProgress;
      slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
    }
    swiper.visibleSlides = $(swiper.visibleSlides);
  }
  function updateProgress(translate) {
    const swiper = this;
    if (typeof translate === 'undefined') {
      const multiplier = swiper.rtlTranslate ? -1 : 1; // eslint-disable-next-line

      translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
    }
    const params = swiper.params;
    const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    let {
      progress: progress,
      isBeginning: isBeginning,
      isEnd: isEnd
    } = swiper;
    const wasBeginning = isBeginning;
    const wasEnd = isEnd;
    if (translatesDiff === 0) {
      progress = 0;
      isBeginning = true;
      isEnd = true;
    } else {
      progress = (translate - swiper.minTranslate()) / translatesDiff;
      isBeginning = progress <= 0;
      isEnd = progress >= 1;
    }
    Object.assign(swiper, {
      progress: progress,
      isBeginning: isBeginning,
      isEnd: isEnd
    });
    if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);
    if (isBeginning && !wasBeginning) {
      swiper.emit('reachBeginning toEdge');
    }
    if (isEnd && !wasEnd) {
      swiper.emit('reachEnd toEdge');
    }
    if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
      swiper.emit('fromEdge');
    }
    swiper.emit('progress', progress);
  }
  function updateSlidesClasses() {
    const swiper = this;
    const {
      slides: slides,
      params: params,
      $wrapperEl: $wrapperEl,
      activeIndex: activeIndex,
      realIndex: realIndex
    } = swiper;
    const isVirtual = swiper.virtual && params.virtual.enabled;
    slides.removeClass("".concat(params.slideActiveClass, " ").concat(params.slideNextClass, " ").concat(params.slidePrevClass, " ").concat(params.slideDuplicateActiveClass, " ").concat(params.slideDuplicateNextClass, " ").concat(params.slideDuplicatePrevClass));
    let activeSlide;
    if (isVirtual) {
      activeSlide = swiper.$wrapperEl.find(".".concat(params.slideClass, "[data-swiper-slide-index=\"").concat(activeIndex, "\"]"));
    } else {
      activeSlide = slides.eq(activeIndex);
    } // Active classes

    activeSlide.addClass(params.slideActiveClass);
    if (params.loop) {
      // Duplicate to all looped slides
      if (activeSlide.hasClass(params.slideDuplicateClass)) {
        $wrapperEl.children(".".concat(params.slideClass, ":not(.").concat(params.slideDuplicateClass, ")[data-swiper-slide-index=\"").concat(realIndex, "\"]")).addClass(params.slideDuplicateActiveClass);
      } else {
        $wrapperEl.children(".".concat(params.slideClass, ".").concat(params.slideDuplicateClass, "[data-swiper-slide-index=\"").concat(realIndex, "\"]")).addClass(params.slideDuplicateActiveClass);
      }
    } // Next Slide

    let nextSlide = activeSlide.nextAll(".".concat(params.slideClass)).eq(0).addClass(params.slideNextClass);
    if (params.loop && nextSlide.length === 0) {
      nextSlide = slides.eq(0);
      nextSlide.addClass(params.slideNextClass);
    } // Prev Slide

    let prevSlide = activeSlide.prevAll(".".concat(params.slideClass)).eq(0).addClass(params.slidePrevClass);
    if (params.loop && prevSlide.length === 0) {
      prevSlide = slides.eq(-1);
      prevSlide.addClass(params.slidePrevClass);
    }
    if (params.loop) {
      // Duplicate to all looped slides
      if (nextSlide.hasClass(params.slideDuplicateClass)) {
        $wrapperEl.children(".".concat(params.slideClass, ":not(.").concat(params.slideDuplicateClass, ")[data-swiper-slide-index=\"").concat(nextSlide.attr('data-swiper-slide-index'), "\"]")).addClass(params.slideDuplicateNextClass);
      } else {
        $wrapperEl.children(".".concat(params.slideClass, ".").concat(params.slideDuplicateClass, "[data-swiper-slide-index=\"").concat(nextSlide.attr('data-swiper-slide-index'), "\"]")).addClass(params.slideDuplicateNextClass);
      }
      if (prevSlide.hasClass(params.slideDuplicateClass)) {
        $wrapperEl.children(".".concat(params.slideClass, ":not(.").concat(params.slideDuplicateClass, ")[data-swiper-slide-index=\"").concat(prevSlide.attr('data-swiper-slide-index'), "\"]")).addClass(params.slideDuplicatePrevClass);
      } else {
        $wrapperEl.children(".".concat(params.slideClass, ".").concat(params.slideDuplicateClass, "[data-swiper-slide-index=\"").concat(prevSlide.attr('data-swiper-slide-index'), "\"]")).addClass(params.slideDuplicatePrevClass);
      }
    }
    swiper.emitSlidesClasses();
  }
  function updateActiveIndex(newActiveIndex) {
    const swiper = this;
    const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    const {
      slidesGrid: slidesGrid,
      snapGrid: snapGrid,
      params: params,
      activeIndex: previousIndex,
      realIndex: previousRealIndex,
      snapIndex: previousSnapIndex
    } = swiper;
    let activeIndex = newActiveIndex;
    let snapIndex;
    if (typeof activeIndex === 'undefined') {
      for (let i = 0; i < slidesGrid.length; i += 1) {
        if (typeof slidesGrid[i + 1] !== 'undefined') {
          if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {
            activeIndex = i;
          } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
            activeIndex = i + 1;
          }
        } else if (translate >= slidesGrid[i]) {
          activeIndex = i;
        }
      } // Normalize slideIndex

      if (params.normalizeSlideIndex) {
        if (activeIndex < 0 || typeof activeIndex === 'undefined') activeIndex = 0;
      }
    }
    if (snapGrid.indexOf(translate) >= 0) {
      snapIndex = snapGrid.indexOf(translate);
    } else {
      const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
      snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
    }
    if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
    if (activeIndex === previousIndex) {
      if (snapIndex !== previousSnapIndex) {
        swiper.snapIndex = snapIndex;
        swiper.emit('snapIndexChange');
      }
      return;
    } // Get real index

    const realIndex = parseInt(swiper.slides.eq(activeIndex).attr('data-swiper-slide-index') || activeIndex, 10);
    Object.assign(swiper, {
      snapIndex: snapIndex,
      realIndex: realIndex,
      previousIndex: previousIndex,
      activeIndex: activeIndex
    });
    swiper.emit('activeIndexChange');
    swiper.emit('snapIndexChange');
    if (previousRealIndex !== realIndex) {
      swiper.emit('realIndexChange');
    }
    if (swiper.initialized || swiper.params.runCallbacksOnInit) {
      swiper.emit('slideChange');
    }
  }
  function updateClickedSlide(e) {
    const swiper = this;
    const params = swiper.params;
    const slide = $(e).closest(".".concat(params.slideClass))[0];
    let slideFound = false;
    let slideIndex;
    if (slide) {
      for (let i = 0; i < swiper.slides.length; i += 1) {
        if (swiper.slides[i] === slide) {
          slideFound = true;
          slideIndex = i;
          break;
        }
      }
    }
    if (slide && slideFound) {
      swiper.clickedSlide = slide;
      if (swiper.virtual && swiper.params.virtual.enabled) {
        swiper.clickedIndex = parseInt($(slide).attr('data-swiper-slide-index'), 10);
      } else {
        swiper.clickedIndex = slideIndex;
      }
    } else {
      swiper.clickedSlide = undefined;
      swiper.clickedIndex = undefined;
      return;
    }
    if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) {
      swiper.slideToClickedSlide();
    }
  }
  var update = {
    updateSize: updateSize,
    updateSlides: updateSlides,
    updateAutoHeight: updateAutoHeight,
    updateSlidesOffset: updateSlidesOffset,
    updateSlidesProgress: updateSlidesProgress,
    updateProgress: updateProgress,
    updateSlidesClasses: updateSlidesClasses,
    updateActiveIndex: updateActiveIndex,
    updateClickedSlide: updateClickedSlide
  };
  function getSwiperTranslate(axis) {
    if (axis === void 0) {
      axis = this.isHorizontal() ? 'x' : 'y';
    }
    const swiper = this;
    const {
      params: params,
      rtlTranslate: rtl,
      translate: translate,
      $wrapperEl: $wrapperEl
    } = swiper;
    if (params.virtualTranslate) {
      return rtl ? -translate : translate;
    }
    if (params.cssMode) {
      return translate;
    }
    let currentTranslate = getTranslate($wrapperEl[0], axis);
    if (rtl) currentTranslate = -currentTranslate;
    return currentTranslate || 0;
  }
  function setTranslate(translate, byController) {
    const swiper = this;
    const {
      rtlTranslate: rtl,
      params: params,
      $wrapperEl: $wrapperEl,
      wrapperEl: wrapperEl,
      progress: progress
    } = swiper;
    let x = 0;
    let y = 0;
    const z = 0;
    if (swiper.isHorizontal()) {
      x = rtl ? -translate : translate;
    } else {
      y = translate;
    }
    if (params.roundLengths) {
      x = Math.floor(x);
      y = Math.floor(y);
    }
    if (params.cssMode) {
      wrapperEl[swiper.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = swiper.isHorizontal() ? -x : -y;
    } else if (!params.virtualTranslate) {
      $wrapperEl.transform("translate3d(".concat(x, "px, ").concat(y, "px, ").concat(z, "px)"));
    }
    swiper.previousTranslate = swiper.translate;
    swiper.translate = swiper.isHorizontal() ? x : y; // Check if we need to update progress

    let newProgress;
    const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    if (translatesDiff === 0) {
      newProgress = 0;
    } else {
      newProgress = (translate - swiper.minTranslate()) / translatesDiff;
    }
    if (newProgress !== progress) {
      swiper.updateProgress(translate);
    }
    swiper.emit('setTranslate', swiper.translate, byController);
  }
  function minTranslate() {
    return -this.snapGrid[0];
  }
  function maxTranslate() {
    return -this.snapGrid[this.snapGrid.length - 1];
  }
  function translateTo(translate, speed, runCallbacks, translateBounds, internal) {
    if (translate === void 0) {
      translate = 0;
    }
    if (speed === void 0) {
      speed = this.params.speed;
    }
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    if (translateBounds === void 0) {
      translateBounds = true;
    }
    const swiper = this;
    const {
      params: params,
      wrapperEl: wrapperEl
    } = swiper;
    if (swiper.animating && params.preventInteractionOnTransition) {
      return false;
    }
    const minTranslate = swiper.minTranslate();
    const maxTranslate = swiper.maxTranslate();
    let newTranslate;
    if (translateBounds && translate > minTranslate) newTranslate = minTranslate;else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate;else newTranslate = translate; // Update progress

    swiper.updateProgress(newTranslate);
    if (params.cssMode) {
      const isH = swiper.isHorizontal();
      if (speed === 0) {
        wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
      } else {
        var _wrapperEl$scrollTo;
        if (!swiper.support.smoothScroll) {
          animateCSSModeScroll({
            swiper: swiper,
            targetPosition: -newTranslate,
            side: isH ? 'left' : 'top'
          });
          return true;
        }
        wrapperEl.scrollTo((_wrapperEl$scrollTo = {}, _defineProperty(_wrapperEl$scrollTo, isH ? 'left' : 'top', -newTranslate), _defineProperty(_wrapperEl$scrollTo, "behavior", 'smooth'), _wrapperEl$scrollTo));
      }
      return true;
    }
    if (speed === 0) {
      swiper.setTransition(0);
      swiper.setTranslate(newTranslate);
      if (runCallbacks) {
        swiper.emit('beforeTransitionStart', speed, internal);
        swiper.emit('transitionEnd');
      }
    } else {
      swiper.setTransition(speed);
      swiper.setTranslate(newTranslate);
      if (runCallbacks) {
        swiper.emit('beforeTransitionStart', speed, internal);
        swiper.emit('transitionStart');
      }
      if (!swiper.animating) {
        swiper.animating = true;
        if (!swiper.onTranslateToWrapperTransitionEnd) {
          swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
            if (!swiper || swiper.destroyed) return;
            if (e.target !== this) return;
            swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
            swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);
            swiper.onTranslateToWrapperTransitionEnd = null;
            delete swiper.onTranslateToWrapperTransitionEnd;
            if (runCallbacks) {
              swiper.emit('transitionEnd');
            }
          };
        }
        swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
        swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);
      }
    }
    return true;
  }
  var translate = {
    getTranslate: getSwiperTranslate,
    setTranslate: setTranslate,
    minTranslate: minTranslate,
    maxTranslate: maxTranslate,
    translateTo: translateTo
  };
  function setTransition(duration, byController) {
    const swiper = this;
    if (!swiper.params.cssMode) {
      swiper.$wrapperEl.transition(duration);
    }
    swiper.emit('setTransition', duration, byController);
  }
  function transitionEmit(_ref) {
    let {
      swiper: swiper,
      runCallbacks: runCallbacks,
      direction: direction,
      step: step
    } = _ref;
    const {
      activeIndex: activeIndex,
      previousIndex: previousIndex
    } = swiper;
    let dir = direction;
    if (!dir) {
      if (activeIndex > previousIndex) dir = 'next';else if (activeIndex < previousIndex) dir = 'prev';else dir = 'reset';
    }
    swiper.emit("transition".concat(step));
    if (runCallbacks && activeIndex !== previousIndex) {
      if (dir === 'reset') {
        swiper.emit("slideResetTransition".concat(step));
        return;
      }
      swiper.emit("slideChangeTransition".concat(step));
      if (dir === 'next') {
        swiper.emit("slideNextTransition".concat(step));
      } else {
        swiper.emit("slidePrevTransition".concat(step));
      }
    }
  }
  function transitionStart(runCallbacks, direction) {
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    const swiper = this;
    const {
      params: params
    } = swiper;
    if (params.cssMode) return;
    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }
    transitionEmit({
      swiper: swiper,
      runCallbacks: runCallbacks,
      direction: direction,
      step: 'Start'
    });
  }
  function transitionEnd(runCallbacks, direction) {
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    const swiper = this;
    const {
      params: params
    } = swiper;
    swiper.animating = false;
    if (params.cssMode) return;
    swiper.setTransition(0);
    transitionEmit({
      swiper: swiper,
      runCallbacks: runCallbacks,
      direction: direction,
      step: 'End'
    });
  }
  var transition = {
    setTransition: setTransition,
    transitionStart: transitionStart,
    transitionEnd: transitionEnd
  };
  function slideTo(index, speed, runCallbacks, internal, initial) {
    if (index === void 0) {
      index = 0;
    }
    if (speed === void 0) {
      speed = this.params.speed;
    }
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    if (typeof index !== 'number' && typeof index !== 'string') {
      throw new Error("The 'index' argument cannot have type other than 'number' or 'string'. [".concat(_typeof(index), "] given."));
    }
    if (typeof index === 'string') {
      /**
       * The `index` argument converted from `string` to `number`.
       * @type {number}
       */
      const indexAsNumber = parseInt(index, 10);
      /**
       * Determines whether the `index` argument is a valid `number`
       * after being converted from the `string` type.
       * @type {boolean}
       */

      const isValidNumber = isFinite(indexAsNumber);
      if (!isValidNumber) {
        throw new Error("The passed-in 'index' (string) couldn't be converted to 'number'. [".concat(index, "] given."));
      } // Knowing that the converted `index` is a valid number,
      // we can update the original argument's value.

      index = indexAsNumber;
    }
    const swiper = this;
    let slideIndex = index;
    if (slideIndex < 0) slideIndex = 0;
    const {
      params: params,
      snapGrid: snapGrid,
      slidesGrid: slidesGrid,
      previousIndex: previousIndex,
      activeIndex: activeIndex,
      rtlTranslate: rtl,
      wrapperEl: wrapperEl,
      enabled: enabled
    } = swiper;
    if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial) {
      return false;
    }
    const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
    let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
    if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
    const translate = -snapGrid[snapIndex]; // Normalize slideIndex

    if (params.normalizeSlideIndex) {
      for (let i = 0; i < slidesGrid.length; i += 1) {
        const normalizedTranslate = -Math.floor(translate * 100);
        const normalizedGrid = Math.floor(slidesGrid[i] * 100);
        const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
        if (typeof slidesGrid[i + 1] !== 'undefined') {
          if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) {
            slideIndex = i;
          } else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) {
            slideIndex = i + 1;
          }
        } else if (normalizedTranslate >= normalizedGrid) {
          slideIndex = i;
        }
      }
    } // Directions locks

    if (swiper.initialized && slideIndex !== activeIndex) {
      if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) {
        return false;
      }
      if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
        if ((activeIndex || 0) !== slideIndex) return false;
      }
    }
    if (slideIndex !== (previousIndex || 0) && runCallbacks) {
      swiper.emit('beforeSlideChangeStart');
    } // Update progress

    swiper.updateProgress(translate);
    let direction;
    if (slideIndex > activeIndex) direction = 'next';else if (slideIndex < activeIndex) direction = 'prev';else direction = 'reset'; // Update Index

    if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
      swiper.updateActiveIndex(slideIndex); // Update Height

      if (params.autoHeight) {
        swiper.updateAutoHeight();
      }
      swiper.updateSlidesClasses();
      if (params.effect !== 'slide') {
        swiper.setTranslate(translate);
      }
      if (direction !== 'reset') {
        swiper.transitionStart(runCallbacks, direction);
        swiper.transitionEnd(runCallbacks, direction);
      }
      return false;
    }
    if (params.cssMode) {
      const isH = swiper.isHorizontal();
      const t = rtl ? translate : -translate;
      if (speed === 0) {
        const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
        if (isVirtual) {
          swiper.wrapperEl.style.scrollSnapType = 'none';
          swiper._immediateVirtual = true;
        }
        wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
        if (isVirtual) {
          requestAnimationFrame(() => {
            swiper.wrapperEl.style.scrollSnapType = '';
            swiper._swiperImmediateVirtual = false;
          });
        }
      } else {
        var _wrapperEl$scrollTo2;
        if (!swiper.support.smoothScroll) {
          animateCSSModeScroll({
            swiper: swiper,
            targetPosition: t,
            side: isH ? 'left' : 'top'
          });
          return true;
        }
        wrapperEl.scrollTo((_wrapperEl$scrollTo2 = {}, _defineProperty(_wrapperEl$scrollTo2, isH ? 'left' : 'top', t), _defineProperty(_wrapperEl$scrollTo2, "behavior", 'smooth'), _wrapperEl$scrollTo2));
      }
      return true;
    }
    swiper.setTransition(speed);
    swiper.setTranslate(translate);
    swiper.updateActiveIndex(slideIndex);
    swiper.updateSlidesClasses();
    swiper.emit('beforeTransitionStart', speed, internal);
    swiper.transitionStart(runCallbacks, direction);
    if (speed === 0) {
      swiper.transitionEnd(runCallbacks, direction);
    } else if (!swiper.animating) {
      swiper.animating = true;
      if (!swiper.onSlideToWrapperTransitionEnd) {
        swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
          if (!swiper || swiper.destroyed) return;
          if (e.target !== this) return;
          swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
          swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
          swiper.onSlideToWrapperTransitionEnd = null;
          delete swiper.onSlideToWrapperTransitionEnd;
          swiper.transitionEnd(runCallbacks, direction);
        };
      }
      swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
      swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
    }
    return true;
  }
  function slideToLoop(index, speed, runCallbacks, internal) {
    if (index === void 0) {
      index = 0;
    }
    if (speed === void 0) {
      speed = this.params.speed;
    }
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    if (typeof index === 'string') {
      /**
       * The `index` argument converted from `string` to `number`.
       * @type {number}
       */
      const indexAsNumber = parseInt(index, 10);
      /**
       * Determines whether the `index` argument is a valid `number`
       * after being converted from the `string` type.
       * @type {boolean}
       */

      const isValidNumber = isFinite(indexAsNumber);
      if (!isValidNumber) {
        throw new Error("The passed-in 'index' (string) couldn't be converted to 'number'. [".concat(index, "] given."));
      } // Knowing that the converted `index` is a valid number,
      // we can update the original argument's value.

      index = indexAsNumber;
    }
    const swiper = this;
    let newIndex = index;
    if (swiper.params.loop) {
      newIndex += swiper.loopedSlides;
    }
    return swiper.slideTo(newIndex, speed, runCallbacks, internal);
  }

  /* eslint no-unused-vars: "off" */
  function slideNext(speed, runCallbacks, internal) {
    if (speed === void 0) {
      speed = this.params.speed;
    }
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    const swiper = this;
    const {
      animating: animating,
      enabled: enabled,
      params: params
    } = swiper;
    if (!enabled) return swiper;
    let perGroup = params.slidesPerGroup;
    if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
      perGroup = Math.max(swiper.slidesPerViewDynamic('current', true), 1);
    }
    const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
    if (params.loop) {
      if (animating && params.loopPreventsSlide) return false;
      swiper.loopFix(); // eslint-disable-next-line

      swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
    }
    if (params.rewind && swiper.isEnd) {
      return swiper.slideTo(0, speed, runCallbacks, internal);
    }
    return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
  }

  /* eslint no-unused-vars: "off" */
  function slidePrev(speed, runCallbacks, internal) {
    if (speed === void 0) {
      speed = this.params.speed;
    }
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    const swiper = this;
    const {
      params: params,
      animating: animating,
      snapGrid: snapGrid,
      slidesGrid: slidesGrid,
      rtlTranslate: rtlTranslate,
      enabled: enabled
    } = swiper;
    if (!enabled) return swiper;
    if (params.loop) {
      if (animating && params.loopPreventsSlide) return false;
      swiper.loopFix(); // eslint-disable-next-line

      swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
    }
    const translate = rtlTranslate ? swiper.translate : -swiper.translate;
    function normalize(val) {
      if (val < 0) return -Math.floor(Math.abs(val));
      return Math.floor(val);
    }
    const normalizedTranslate = normalize(translate);
    const normalizedSnapGrid = snapGrid.map(val => normalize(val));
    let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
    if (typeof prevSnap === 'undefined' && params.cssMode) {
      let prevSnapIndex;
      snapGrid.forEach((snap, snapIndex) => {
        if (normalizedTranslate >= snap) {
          // prevSnap = snap;
          prevSnapIndex = snapIndex;
        }
      });
      if (typeof prevSnapIndex !== 'undefined') {
        prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
      }
    }
    let prevIndex = 0;
    if (typeof prevSnap !== 'undefined') {
      prevIndex = slidesGrid.indexOf(prevSnap);
      if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
      if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
        prevIndex = prevIndex - swiper.slidesPerViewDynamic('previous', true) + 1;
        prevIndex = Math.max(prevIndex, 0);
      }
    }
    if (params.rewind && swiper.isBeginning) {
      const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
      return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
    }
    return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
  }

  /* eslint no-unused-vars: "off" */
  function slideReset(speed, runCallbacks, internal) {
    if (speed === void 0) {
      speed = this.params.speed;
    }
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    const swiper = this;
    return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
  }

  /* eslint no-unused-vars: "off" */
  function slideToClosest(speed, runCallbacks, internal, threshold) {
    if (speed === void 0) {
      speed = this.params.speed;
    }
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    if (threshold === void 0) {
      threshold = 0.5;
    }
    const swiper = this;
    let index = swiper.activeIndex;
    const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
    const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
    const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    if (translate >= swiper.snapGrid[snapIndex]) {
      // The current translate is on or after the current snap index, so the choice
      // is between the current index and the one after it.
      const currentSnap = swiper.snapGrid[snapIndex];
      const nextSnap = swiper.snapGrid[snapIndex + 1];
      if (translate - currentSnap > (nextSnap - currentSnap) * threshold) {
        index += swiper.params.slidesPerGroup;
      }
    } else {
      // The current translate is before the current snap index, so the choice
      // is between the current index and the one before it.
      const prevSnap = swiper.snapGrid[snapIndex - 1];
      const currentSnap = swiper.snapGrid[snapIndex];
      if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) {
        index -= swiper.params.slidesPerGroup;
      }
    }
    index = Math.max(index, 0);
    index = Math.min(index, swiper.slidesGrid.length - 1);
    return swiper.slideTo(index, speed, runCallbacks, internal);
  }
  function slideToClickedSlide() {
    const swiper = this;
    const {
      params: params,
      $wrapperEl: $wrapperEl
    } = swiper;
    const slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
    let slideToIndex = swiper.clickedIndex;
    let realIndex;
    if (params.loop) {
      if (swiper.animating) return;
      realIndex = parseInt($(swiper.clickedSlide).attr('data-swiper-slide-index'), 10);
      if (params.centeredSlides) {
        if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
          swiper.loopFix();
          slideToIndex = $wrapperEl.children(".".concat(params.slideClass, "[data-swiper-slide-index=\"").concat(realIndex, "\"]:not(.").concat(params.slideDuplicateClass, ")")).eq(0).index();
          nextTick(() => {
            swiper.slideTo(slideToIndex);
          });
        } else {
          swiper.slideTo(slideToIndex);
        }
      } else if (slideToIndex > swiper.slides.length - slidesPerView) {
        swiper.loopFix();
        slideToIndex = $wrapperEl.children(".".concat(params.slideClass, "[data-swiper-slide-index=\"").concat(realIndex, "\"]:not(.").concat(params.slideDuplicateClass, ")")).eq(0).index();
        nextTick(() => {
          swiper.slideTo(slideToIndex);
        });
      } else {
        swiper.slideTo(slideToIndex);
      }
    } else {
      swiper.slideTo(slideToIndex);
    }
  }
  var slide = {
    slideTo: slideTo,
    slideToLoop: slideToLoop,
    slideNext: slideNext,
    slidePrev: slidePrev,
    slideReset: slideReset,
    slideToClosest: slideToClosest,
    slideToClickedSlide: slideToClickedSlide
  };
  function loopCreate() {
    const swiper = this;
    const document = getDocument();
    const {
      params: params,
      $wrapperEl: $wrapperEl
    } = swiper; // Remove duplicated slides

    const $selector = $wrapperEl.children().length > 0 ? $($wrapperEl.children()[0].parentNode) : $wrapperEl;
    $selector.children(".".concat(params.slideClass, ".").concat(params.slideDuplicateClass)).remove();
    let slides = $selector.children(".".concat(params.slideClass));
    if (params.loopFillGroupWithBlank) {
      const blankSlidesNum = params.slidesPerGroup - slides.length % params.slidesPerGroup;
      if (blankSlidesNum !== params.slidesPerGroup) {
        for (let i = 0; i < blankSlidesNum; i += 1) {
          const blankNode = $(document.createElement('div')).addClass("".concat(params.slideClass, " ").concat(params.slideBlankClass));
          $selector.append(blankNode);
        }
        slides = $selector.children(".".concat(params.slideClass));
      }
    }
    if (params.slidesPerView === 'auto' && !params.loopedSlides) params.loopedSlides = slides.length;
    swiper.loopedSlides = Math.ceil(parseFloat(params.loopedSlides || params.slidesPerView, 10));
    swiper.loopedSlides += params.loopAdditionalSlides;
    if (swiper.loopedSlides > slides.length && swiper.params.loopedSlidesLimit) {
      swiper.loopedSlides = slides.length;
    }
    const prependSlides = [];
    const appendSlides = [];
    slides.each((el, index) => {
      const slide = $(el);
      slide.attr('data-swiper-slide-index', index);
    });
    for (let i = 0; i < swiper.loopedSlides; i += 1) {
      const index = i - Math.floor(i / slides.length) * slides.length;
      appendSlides.push(slides.eq(index)[0]);
      prependSlides.unshift(slides.eq(slides.length - index - 1)[0]);
    }
    for (let i = 0; i < appendSlides.length; i += 1) {
      $selector.append($(appendSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));
    }
    for (let i = prependSlides.length - 1; i >= 0; i -= 1) {
      $selector.prepend($(prependSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));
    }
  }
  function loopFix() {
    const swiper = this;
    swiper.emit('beforeLoopFix');
    const {
      activeIndex: activeIndex,
      slides: slides,
      loopedSlides: loopedSlides,
      allowSlidePrev: allowSlidePrev,
      allowSlideNext: allowSlideNext,
      snapGrid: snapGrid,
      rtlTranslate: rtl
    } = swiper;
    let newIndex;
    swiper.allowSlidePrev = true;
    swiper.allowSlideNext = true;
    const snapTranslate = -snapGrid[activeIndex];
    const diff = snapTranslate - swiper.getTranslate(); // Fix For Negative Oversliding

    if (activeIndex < loopedSlides) {
      newIndex = slides.length - loopedSlides * 3 + activeIndex;
      newIndex += loopedSlides;
      const slideChanged = swiper.slideTo(newIndex, 0, false, true);
      if (slideChanged && diff !== 0) {
        swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
      }
    } else if (activeIndex >= slides.length - loopedSlides) {
      // Fix For Positive Oversliding
      newIndex = -slides.length + activeIndex + loopedSlides;
      newIndex += loopedSlides;
      const slideChanged = swiper.slideTo(newIndex, 0, false, true);
      if (slideChanged && diff !== 0) {
        swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
      }
    }
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    swiper.emit('loopFix');
  }
  function loopDestroy() {
    const swiper = this;
    const {
      $wrapperEl: $wrapperEl,
      params: params,
      slides: slides
    } = swiper;
    $wrapperEl.children(".".concat(params.slideClass, ".").concat(params.slideDuplicateClass, ",.").concat(params.slideClass, ".").concat(params.slideBlankClass)).remove();
    slides.removeAttr('data-swiper-slide-index');
  }
  var loop = {
    loopCreate: loopCreate,
    loopFix: loopFix,
    loopDestroy: loopDestroy
  };
  function setGrabCursor(moving) {
    const swiper = this;
    if (swiper.support.touch || !swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
    const el = swiper.params.touchEventsTarget === 'container' ? swiper.el : swiper.wrapperEl;
    el.style.cursor = 'move';
    el.style.cursor = moving ? 'grabbing' : 'grab';
  }
  function unsetGrabCursor() {
    const swiper = this;
    if (swiper.support.touch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) {
      return;
    }
    swiper[swiper.params.touchEventsTarget === 'container' ? 'el' : 'wrapperEl'].style.cursor = '';
  }
  var grabCursor = {
    setGrabCursor: setGrabCursor,
    unsetGrabCursor: unsetGrabCursor
  };
  function closestElement(selector, base) {
    if (base === void 0) {
      base = this;
    }
    function __closestFrom(el) {
      if (!el || el === getDocument() || el === getWindow()) return null;
      if (el.assignedSlot) el = el.assignedSlot;
      const found = el.closest(selector);
      if (!found && !el.getRootNode) {
        return null;
      }
      return found || __closestFrom(el.getRootNode().host);
    }
    return __closestFrom(base);
  }
  function onTouchStart(event) {
    const swiper = this;
    const document = getDocument();
    const window = getWindow();
    const data = swiper.touchEventsData;
    const {
      params: params,
      touches: touches,
      enabled: enabled
    } = swiper;
    if (!enabled) return;
    if (swiper.animating && params.preventInteractionOnTransition) {
      return;
    }
    if (!swiper.animating && params.cssMode && params.loop) {
      swiper.loopFix();
    }
    let e = event;
    if (e.originalEvent) e = e.originalEvent;
    let $targetEl = $(e.target);
    if (params.touchEventsTarget === 'wrapper') {
      if (!$targetEl.closest(swiper.wrapperEl).length) return;
    }
    data.isTouchEvent = e.type === 'touchstart';
    if (!data.isTouchEvent && 'which' in e && e.which === 3) return;
    if (!data.isTouchEvent && 'button' in e && e.button > 0) return;
    if (data.isTouched && data.isMoved) return; // change target el for shadow root component

    const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== ''; // eslint-disable-next-line

    const eventPath = event.composedPath ? event.composedPath() : event.path;
    if (swipingClassHasValue && e.target && e.target.shadowRoot && eventPath) {
      $targetEl = $(eventPath[0]);
    }
    const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : ".".concat(params.noSwipingClass);
    const isTargetShadow = !!(e.target && e.target.shadowRoot); // use closestElement for shadow root element to get the actual closest for nested shadow root element

    if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, $targetEl[0]) : $targetEl.closest(noSwipingSelector)[0])) {
      swiper.allowClick = true;
      return;
    }
    if (params.swipeHandler) {
      if (!$targetEl.closest(params.swipeHandler)[0]) return;
    }
    touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
    touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
    const startX = touches.currentX;
    const startY = touches.currentY; // Do NOT start if iOS edge swipe is detected. Otherwise iOS app cannot swipe-to-go-back anymore

    const edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
    const edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
    if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) {
      if (edgeSwipeDetection === 'prevent') {
        event.preventDefault();
      } else {
        return;
      }
    }
    Object.assign(data, {
      isTouched: true,
      isMoved: false,
      allowTouchCallbacks: true,
      isScrolling: undefined,
      startMoving: undefined
    });
    touches.startX = startX;
    touches.startY = startY;
    data.touchStartTime = now();
    swiper.allowClick = true;
    swiper.updateSize();
    swiper.swipeDirection = undefined;
    if (params.threshold > 0) data.allowThresholdMove = false;
    if (e.type !== 'touchstart') {
      let preventDefault = true;
      if ($targetEl.is(data.focusableElements)) {
        preventDefault = false;
        if ($targetEl[0].nodeName === 'SELECT') {
          data.isTouched = false;
        }
      }
      if (document.activeElement && $(document.activeElement).is(data.focusableElements) && document.activeElement !== $targetEl[0]) {
        document.activeElement.blur();
      }
      const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
      if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !$targetEl[0].isContentEditable) {
        e.preventDefault();
      }
    }
    if (swiper.params.freeMode && swiper.params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) {
      swiper.freeMode.onTouchStart();
    }
    swiper.emit('touchStart', e);
  }
  function onTouchMove(event) {
    const document = getDocument();
    const swiper = this;
    const data = swiper.touchEventsData;
    const {
      params: params,
      touches: touches,
      rtlTranslate: rtl,
      enabled: enabled
    } = swiper;
    if (!enabled) return;
    let e = event;
    if (e.originalEvent) e = e.originalEvent;
    if (!data.isTouched) {
      if (data.startMoving && data.isScrolling) {
        swiper.emit('touchMoveOpposite', e);
      }
      return;
    }
    if (data.isTouchEvent && e.type !== 'touchmove') return;
    const targetTouch = e.type === 'touchmove' && e.targetTouches && (e.targetTouches[0] || e.changedTouches[0]);
    const pageX = e.type === 'touchmove' ? targetTouch.pageX : e.pageX;
    const pageY = e.type === 'touchmove' ? targetTouch.pageY : e.pageY;
    if (e.preventedByNestedSwiper) {
      touches.startX = pageX;
      touches.startY = pageY;
      return;
    }
    if (!swiper.allowTouchMove) {
      if (!$(e.target).is(data.focusableElements)) {
        swiper.allowClick = false;
      }
      if (data.isTouched) {
        Object.assign(touches, {
          startX: pageX,
          startY: pageY,
          currentX: pageX,
          currentY: pageY
        });
        data.touchStartTime = now();
      }
      return;
    }
    if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {
      if (swiper.isVertical()) {
        // Vertical
        if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
          data.isTouched = false;
          data.isMoved = false;
          return;
        }
      } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) {
        return;
      }
    }
    if (data.isTouchEvent && document.activeElement) {
      if (e.target === document.activeElement && $(e.target).is(data.focusableElements)) {
        data.isMoved = true;
        swiper.allowClick = false;
        return;
      }
    }
    if (data.allowTouchCallbacks) {
      swiper.emit('touchMove', e);
    }
    if (e.targetTouches && e.targetTouches.length > 1) return;
    touches.currentX = pageX;
    touches.currentY = pageY;
    const diffX = touches.currentX - touches.startX;
    const diffY = touches.currentY - touches.startY;
    if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;
    if (typeof data.isScrolling === 'undefined') {
      let touchAngle;
      if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) {
        data.isScrolling = false;
      } else {
        // eslint-disable-next-line
        if (diffX * diffX + diffY * diffY >= 25) {
          touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
          data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
        }
      }
    }
    if (data.isScrolling) {
      swiper.emit('touchMoveOpposite', e);
    }
    if (typeof data.startMoving === 'undefined') {
      if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
        data.startMoving = true;
      }
    }
    if (data.isScrolling) {
      data.isTouched = false;
      return;
    }
    if (!data.startMoving) {
      return;
    }
    swiper.allowClick = false;
    if (!params.cssMode && e.cancelable) {
      e.preventDefault();
    }
    if (params.touchMoveStopPropagation && !params.nested) {
      e.stopPropagation();
    }
    if (!data.isMoved) {
      if (params.loop && !params.cssMode) {
        swiper.loopFix();
      }
      data.startTranslate = swiper.getTranslate();
      swiper.setTransition(0);
      if (swiper.animating) {
        swiper.$wrapperEl.trigger('webkitTransitionEnd transitionend');
      }
      data.allowMomentumBounce = false; // Grab Cursor

      if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
        swiper.setGrabCursor(true);
      }
      swiper.emit('sliderFirstMove', e);
    }
    swiper.emit('sliderMove', e);
    data.isMoved = true;
    let diff = swiper.isHorizontal() ? diffX : diffY;
    touches.diff = diff;
    diff *= params.touchRatio;
    if (rtl) diff = -diff;
    swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
    data.currentTranslate = diff + data.startTranslate;
    let disableParentSwiper = true;
    let resistanceRatio = params.resistanceRatio;
    if (params.touchReleaseOnEdges) {
      resistanceRatio = 0;
    }
    if (diff > 0 && data.currentTranslate > swiper.minTranslate()) {
      disableParentSwiper = false;
      if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
    } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
      disableParentSwiper = false;
      if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
    }
    if (disableParentSwiper) {
      e.preventedByNestedSwiper = true;
    } // Directions locks

    if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) {
      data.currentTranslate = data.startTranslate;
    }
    if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) {
      data.currentTranslate = data.startTranslate;
    }
    if (!swiper.allowSlidePrev && !swiper.allowSlideNext) {
      data.currentTranslate = data.startTranslate;
    } // Threshold

    if (params.threshold > 0) {
      if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
        if (!data.allowThresholdMove) {
          data.allowThresholdMove = true;
          touches.startX = touches.currentX;
          touches.startY = touches.currentY;
          data.currentTranslate = data.startTranslate;
          touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
          return;
        }
      } else {
        data.currentTranslate = data.startTranslate;
        return;
      }
    }
    if (!params.followFinger || params.cssMode) return; // Update active index in free mode

    if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    if (swiper.params.freeMode && params.freeMode.enabled && swiper.freeMode) {
      swiper.freeMode.onTouchMove();
    } // Update progress

    swiper.updateProgress(data.currentTranslate); // Update translate

    swiper.setTranslate(data.currentTranslate);
  }
  function onTouchEnd(event) {
    const swiper = this;
    const data = swiper.touchEventsData;
    const {
      params: params,
      touches: touches,
      rtlTranslate: rtl,
      slidesGrid: slidesGrid,
      enabled: enabled
    } = swiper;
    if (!enabled) return;
    let e = event;
    if (e.originalEvent) e = e.originalEvent;
    if (data.allowTouchCallbacks) {
      swiper.emit('touchEnd', e);
    }
    data.allowTouchCallbacks = false;
    if (!data.isTouched) {
      if (data.isMoved && params.grabCursor) {
        swiper.setGrabCursor(false);
      }
      data.isMoved = false;
      data.startMoving = false;
      return;
    } // Return Grab Cursor

    if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
      swiper.setGrabCursor(false);
    } // Time diff

    const touchEndTime = now();
    const timeDiff = touchEndTime - data.touchStartTime; // Tap, doubleTap, Click

    if (swiper.allowClick) {
      const pathTree = e.path || e.composedPath && e.composedPath();
      swiper.updateClickedSlide(pathTree && pathTree[0] || e.target);
      swiper.emit('tap click', e);
      if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
        swiper.emit('doubleTap doubleClick', e);
      }
    }
    data.lastClickTime = now();
    nextTick(() => {
      if (!swiper.destroyed) swiper.allowClick = true;
    });
    if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
      data.isTouched = false;
      data.isMoved = false;
      data.startMoving = false;
      return;
    }
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;
    let currentPos;
    if (params.followFinger) {
      currentPos = rtl ? swiper.translate : -swiper.translate;
    } else {
      currentPos = -data.currentTranslate;
    }
    if (params.cssMode) {
      return;
    }
    if (swiper.params.freeMode && params.freeMode.enabled) {
      swiper.freeMode.onTouchEnd({
        currentPos: currentPos
      });
      return;
    } // Find current slide

    let stopIndex = 0;
    let groupSize = swiper.slidesSizesGrid[0];
    for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
      const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
      if (typeof slidesGrid[i + increment] !== 'undefined') {
        if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
          stopIndex = i;
          groupSize = slidesGrid[i + increment] - slidesGrid[i];
        }
      } else if (currentPos >= slidesGrid[i]) {
        stopIndex = i;
        groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
      }
    }
    let rewindFirstIndex = null;
    let rewindLastIndex = null;
    if (params.rewind) {
      if (swiper.isBeginning) {
        rewindLastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
      } else if (swiper.isEnd) {
        rewindFirstIndex = 0;
      }
    } // Find current slide size

    const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
    const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
    if (timeDiff > params.longSwipesMs) {
      // Long touches
      if (!params.longSwipes) {
        swiper.slideTo(swiper.activeIndex);
        return;
      }
      if (swiper.swipeDirection === 'next') {
        if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment);else swiper.slideTo(stopIndex);
      }
      if (swiper.swipeDirection === 'prev') {
        if (ratio > 1 - params.longSwipesRatio) {
          swiper.slideTo(stopIndex + increment);
        } else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) {
          swiper.slideTo(rewindLastIndex);
        } else {
          swiper.slideTo(stopIndex);
        }
      }
    } else {
      // Short swipes
      if (!params.shortSwipes) {
        swiper.slideTo(swiper.activeIndex);
        return;
      }
      const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
      if (!isNavButtonTarget) {
        if (swiper.swipeDirection === 'next') {
          swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
        }
        if (swiper.swipeDirection === 'prev') {
          swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
        }
      } else if (e.target === swiper.navigation.nextEl) {
        swiper.slideTo(stopIndex + increment);
      } else {
        swiper.slideTo(stopIndex);
      }
    }
  }
  function onResize() {
    const swiper = this;
    const {
      params: params,
      el: el
    } = swiper;
    if (el && el.offsetWidth === 0) return; // Breakpoints

    if (params.breakpoints) {
      swiper.setBreakpoint();
    } // Save locks

    const {
      allowSlideNext: allowSlideNext,
      allowSlidePrev: allowSlidePrev,
      snapGrid: snapGrid
    } = swiper; // Disable locks on resize

    swiper.allowSlideNext = true;
    swiper.allowSlidePrev = true;
    swiper.updateSize();
    swiper.updateSlides();
    swiper.updateSlidesClasses();
    if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides) {
      swiper.slideTo(swiper.slides.length - 1, 0, false, true);
    } else {
      swiper.slideTo(swiper.activeIndex, 0, false, true);
    }
    if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
      swiper.autoplay.run();
    } // Return locks after resize

    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
      swiper.checkOverflow();
    }
  }
  function onClick(e) {
    const swiper = this;
    if (!swiper.enabled) return;
    if (!swiper.allowClick) {
      if (swiper.params.preventClicks) e.preventDefault();
      if (swiper.params.preventClicksPropagation && swiper.animating) {
        e.stopPropagation();
        e.stopImmediatePropagation();
      }
    }
  }
  function onScroll() {
    const swiper = this;
    const {
      wrapperEl: wrapperEl,
      rtlTranslate: rtlTranslate,
      enabled: enabled
    } = swiper;
    if (!enabled) return;
    swiper.previousTranslate = swiper.translate;
    if (swiper.isHorizontal()) {
      swiper.translate = -wrapperEl.scrollLeft;
    } else {
      swiper.translate = -wrapperEl.scrollTop;
    } // eslint-disable-next-line

    if (swiper.translate === 0) swiper.translate = 0;
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
    let newProgress;
    const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    if (translatesDiff === 0) {
      newProgress = 0;
    } else {
      newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
    }
    if (newProgress !== swiper.progress) {
      swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
    }
    swiper.emit('setTranslate', swiper.translate, false);
  }
  let dummyEventAttached = false;
  function dummyEventListener() {}
  const events = (swiper, method) => {
    const document = getDocument();
    const {
      params: params,
      touchEvents: touchEvents,
      el: el,
      wrapperEl: wrapperEl,
      device: device,
      support: support
    } = swiper;
    const capture = !!params.nested;
    const domMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';
    const swiperMethod = method; // Touch Events

    if (!support.touch) {
      el[domMethod](touchEvents.start, swiper.onTouchStart, false);
      document[domMethod](touchEvents.move, swiper.onTouchMove, capture);
      document[domMethod](touchEvents.end, swiper.onTouchEnd, false);
    } else {
      const passiveListener = touchEvents.start === 'touchstart' && support.passiveListener && params.passiveListeners ? {
        passive: true,
        capture: false
      } : false;
      el[domMethod](touchEvents.start, swiper.onTouchStart, passiveListener);
      el[domMethod](touchEvents.move, swiper.onTouchMove, support.passiveListener ? {
        passive: false,
        capture: capture
      } : capture);
      el[domMethod](touchEvents.end, swiper.onTouchEnd, passiveListener);
      if (touchEvents.cancel) {
        el[domMethod](touchEvents.cancel, swiper.onTouchEnd, passiveListener);
      }
    } // Prevent Links Clicks

    if (params.preventClicks || params.preventClicksPropagation) {
      el[domMethod]('click', swiper.onClick, true);
    }
    if (params.cssMode) {
      wrapperEl[domMethod]('scroll', swiper.onScroll);
    } // Resize handler

    if (params.updateOnWindowResize) {
      swiper[swiperMethod](device.ios || device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', onResize, true);
    } else {
      swiper[swiperMethod]('observerUpdate', onResize, true);
    }
  };
  function attachEvents() {
    const swiper = this;
    const document = getDocument();
    const {
      params: params,
      support: support
    } = swiper;
    swiper.onTouchStart = onTouchStart.bind(swiper);
    swiper.onTouchMove = onTouchMove.bind(swiper);
    swiper.onTouchEnd = onTouchEnd.bind(swiper);
    if (params.cssMode) {
      swiper.onScroll = onScroll.bind(swiper);
    }
    swiper.onClick = onClick.bind(swiper);
    if (support.touch && !dummyEventAttached) {
      document.addEventListener('touchstart', dummyEventListener);
      dummyEventAttached = true;
    }
    events(swiper, 'on');
  }
  function detachEvents() {
    const swiper = this;
    events(swiper, 'off');
  }
  var events$1 = {
    attachEvents: attachEvents,
    detachEvents: detachEvents
  };
  const isGridEnabled = (swiper, params) => {
    return swiper.grid && params.grid && params.grid.rows > 1;
  };
  function setBreakpoint() {
    const swiper = this;
    const {
      activeIndex: activeIndex,
      initialized: initialized,
      loopedSlides = 0,
      params: params,
      $el: $el
    } = swiper;
    const breakpoints = params.breakpoints;
    if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return; // Get breakpoint for window width and update parameters

    const breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);
    if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
    const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;
    const breakpointParams = breakpointOnlyParams || swiper.originalParams;
    const wasMultiRow = isGridEnabled(swiper, params);
    const isMultiRow = isGridEnabled(swiper, breakpointParams);
    const wasEnabled = params.enabled;
    if (wasMultiRow && !isMultiRow) {
      $el.removeClass("".concat(params.containerModifierClass, "grid ").concat(params.containerModifierClass, "grid-column"));
      swiper.emitContainerClasses();
    } else if (!wasMultiRow && isMultiRow) {
      $el.addClass("".concat(params.containerModifierClass, "grid"));
      if (breakpointParams.grid.fill && breakpointParams.grid.fill === 'column' || !breakpointParams.grid.fill && params.grid.fill === 'column') {
        $el.addClass("".concat(params.containerModifierClass, "grid-column"));
      }
      swiper.emitContainerClasses();
    } // Toggle navigation, pagination, scrollbar

    ['navigation', 'pagination', 'scrollbar'].forEach(prop => {
      const wasModuleEnabled = params[prop] && params[prop].enabled;
      const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
      if (wasModuleEnabled && !isModuleEnabled) {
        swiper[prop].disable();
      }
      if (!wasModuleEnabled && isModuleEnabled) {
        swiper[prop].enable();
      }
    });
    const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
    const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
    if (directionChanged && initialized) {
      swiper.changeDirection();
    }
    extend(swiper.params, breakpointParams);
    const isEnabled = swiper.params.enabled;
    Object.assign(swiper, {
      allowTouchMove: swiper.params.allowTouchMove,
      allowSlideNext: swiper.params.allowSlideNext,
      allowSlidePrev: swiper.params.allowSlidePrev
    });
    if (wasEnabled && !isEnabled) {
      swiper.disable();
    } else if (!wasEnabled && isEnabled) {
      swiper.enable();
    }
    swiper.currentBreakpoint = breakpoint;
    swiper.emit('_beforeBreakpoint', breakpointParams);
    if (needsReLoop && initialized) {
      swiper.loopDestroy();
      swiper.loopCreate();
      swiper.updateSlides();
      swiper.slideTo(activeIndex - loopedSlides + swiper.loopedSlides, 0, false);
    }
    swiper.emit('breakpoint', breakpointParams);
  }
  function getBreakpoint(breakpoints, base, containerEl) {
    if (base === void 0) {
      base = 'window';
    }
    if (!breakpoints || base === 'container' && !containerEl) return undefined;
    let breakpoint = false;
    const window = getWindow();
    const currentHeight = base === 'window' ? window.innerHeight : containerEl.clientHeight;
    const points = Object.keys(breakpoints).map(point => {
      if (typeof point === 'string' && point.indexOf('@') === 0) {
        const minRatio = parseFloat(point.substr(1));
        const value = currentHeight * minRatio;
        return {
          value: value,
          point: point
        };
      }
      return {
        value: point,
        point: point
      };
    });
    points.sort((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10));
    for (let i = 0; i < points.length; i += 1) {
      const {
        point: point,
        value: value
      } = points[i];
      if (base === 'window') {
        if (window.matchMedia("(min-width: ".concat(value, "px)")).matches) {
          breakpoint = point;
        }
      } else if (value <= containerEl.clientWidth) {
        breakpoint = point;
      }
    }
    return breakpoint || 'max';
  }
  var breakpoints = {
    setBreakpoint: setBreakpoint,
    getBreakpoint: getBreakpoint
  };
  function prepareClasses(entries, prefix) {
    const resultClasses = [];
    entries.forEach(item => {
      if (_typeof(item) === 'object') {
        Object.keys(item).forEach(classNames => {
          if (item[classNames]) {
            resultClasses.push(prefix + classNames);
          }
        });
      } else if (typeof item === 'string') {
        resultClasses.push(prefix + item);
      }
    });
    return resultClasses;
  }
  function addClasses() {
    const swiper = this;
    const {
      classNames: classNames,
      params: params,
      rtl: rtl,
      $el: $el,
      device: device,
      support: support
    } = swiper; // prettier-ignore

    const suffixes = prepareClasses(['initialized', params.direction, {
      'pointer-events': !support.touch
    }, {
      'free-mode': swiper.params.freeMode && params.freeMode.enabled
    }, {
      'autoheight': params.autoHeight
    }, {
      'rtl': rtl
    }, {
      'grid': params.grid && params.grid.rows > 1
    }, {
      'grid-column': params.grid && params.grid.rows > 1 && params.grid.fill === 'column'
    }, {
      'android': device.android
    }, {
      'ios': device.ios
    }, {
      'css-mode': params.cssMode
    }, {
      'centered': params.cssMode && params.centeredSlides
    }, {
      'watch-progress': params.watchSlidesProgress
    }], params.containerModifierClass);
    classNames.push(...suffixes);
    $el.addClass([...classNames].join(' '));
    swiper.emitContainerClasses();
  }
  function removeClasses() {
    const swiper = this;
    const {
      $el: $el,
      classNames: classNames
    } = swiper;
    $el.removeClass(classNames.join(' '));
    swiper.emitContainerClasses();
  }
  var classes = {
    addClasses: addClasses,
    removeClasses: removeClasses
  };
  function loadImage(imageEl, src, srcset, sizes, checkForComplete, callback) {
    const window = getWindow();
    let image;
    function onReady() {
      if (callback) callback();
    }
    const isPicture = $(imageEl).parent('picture')[0];
    if (!isPicture && (!imageEl.complete || !checkForComplete)) {
      if (src) {
        image = new window.Image();
        image.onload = onReady;
        image.onerror = onReady;
        if (sizes) {
          image.sizes = sizes;
        }
        if (srcset) {
          image.srcset = srcset;
        }
        if (src) {
          image.src = src;
        }
      } else {
        onReady();
      }
    } else {
      // image already loaded...
      onReady();
    }
  }
  function preloadImages() {
    const swiper = this;
    swiper.imagesToLoad = swiper.$el.find('img');
    function onReady() {
      if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper.destroyed) return;
      if (swiper.imagesLoaded !== undefined) swiper.imagesLoaded += 1;
      if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
        if (swiper.params.updateOnImagesReady) swiper.update();
        swiper.emit('imagesReady');
      }
    }
    for (let i = 0; i < swiper.imagesToLoad.length; i += 1) {
      const imageEl = swiper.imagesToLoad[i];
      swiper.loadImage(imageEl, imageEl.currentSrc || imageEl.getAttribute('src'), imageEl.srcset || imageEl.getAttribute('srcset'), imageEl.sizes || imageEl.getAttribute('sizes'), true, onReady);
    }
  }
  var images = {
    loadImage: loadImage,
    preloadImages: preloadImages
  };
  function checkOverflow() {
    const swiper = this;
    const {
      isLocked: wasLocked,
      params: params
    } = swiper;
    const {
      slidesOffsetBefore: slidesOffsetBefore
    } = params;
    if (slidesOffsetBefore) {
      const lastSlideIndex = swiper.slides.length - 1;
      const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
      swiper.isLocked = swiper.size > lastSlideRightEdge;
    } else {
      swiper.isLocked = swiper.snapGrid.length === 1;
    }
    if (params.allowSlideNext === true) {
      swiper.allowSlideNext = !swiper.isLocked;
    }
    if (params.allowSlidePrev === true) {
      swiper.allowSlidePrev = !swiper.isLocked;
    }
    if (wasLocked && wasLocked !== swiper.isLocked) {
      swiper.isEnd = false;
    }
    if (wasLocked !== swiper.isLocked) {
      swiper.emit(swiper.isLocked ? 'lock' : 'unlock');
    }
  }
  var checkOverflow$1 = {
    checkOverflow: checkOverflow
  };
  var defaults = {
    init: true,
    direction: 'horizontal',
    touchEventsTarget: 'wrapper',
    initialSlide: 0,
    speed: 300,
    cssMode: false,
    updateOnWindowResize: true,
    resizeObserver: true,
    nested: false,
    createElements: false,
    enabled: true,
    focusableElements: 'input, select, option, textarea, button, video, label',
    // Overrides
    width: null,
    height: null,
    //
    preventInteractionOnTransition: false,
    // ssr
    userAgent: null,
    url: null,
    // To support iOS's swipe-to-go-back gesture (when being used in-app).
    edgeSwipeDetection: false,
    edgeSwipeThreshold: 20,
    // Autoheight
    autoHeight: false,
    // Set wrapper width
    setWrapperSize: false,
    // Virtual Translate
    virtualTranslate: false,
    // Effects
    effect: 'slide',
    // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
    // Breakpoints
    breakpoints: undefined,
    breakpointsBase: 'window',
    // Slides grid
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: false,
    centeredSlides: false,
    centeredSlidesBounds: false,
    slidesOffsetBefore: 0,
    // in px
    slidesOffsetAfter: 0,
    // in px
    normalizeSlideIndex: true,
    centerInsufficientSlides: false,
    // Disable swiper and hide navigation when container not overflow
    watchOverflow: true,
    // Round length
    roundLengths: false,
    // Touches
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: true,
    shortSwipes: true,
    longSwipes: true,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: true,
    allowTouchMove: true,
    threshold: 0,
    touchMoveStopPropagation: false,
    touchStartPreventDefault: true,
    touchStartForcePreventDefault: false,
    touchReleaseOnEdges: false,
    // Unique Navigation Elements
    uniqueNavElements: true,
    // Resistance
    resistance: true,
    resistanceRatio: 0.85,
    // Progress
    watchSlidesProgress: false,
    // Cursor
    grabCursor: false,
    // Clicks
    preventClicks: true,
    preventClicksPropagation: true,
    slideToClickedSlide: false,
    // Images
    preloadImages: true,
    updateOnImagesReady: true,
    // loop
    loop: false,
    loopAdditionalSlides: 0,
    loopedSlides: null,
    loopedSlidesLimit: true,
    loopFillGroupWithBlank: false,
    loopPreventsSlide: true,
    // rewind
    rewind: false,
    // Swiping/no swiping
    allowSlidePrev: true,
    allowSlideNext: true,
    swipeHandler: null,
    // '.swipe-handler',
    noSwiping: true,
    noSwipingClass: 'swiper-no-swiping',
    noSwipingSelector: null,
    // Passive Listeners
    passiveListeners: true,
    maxBackfaceHiddenSlides: 10,
    // NS
    containerModifierClass: 'swiper-',
    // NEW
    slideClass: 'swiper-slide',
    slideBlankClass: 'swiper-slide-invisible-blank',
    slideActiveClass: 'swiper-slide-active',
    slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
    slideVisibleClass: 'swiper-slide-visible',
    slideDuplicateClass: 'swiper-slide-duplicate',
    slideNextClass: 'swiper-slide-next',
    slideDuplicateNextClass: 'swiper-slide-duplicate-next',
    slidePrevClass: 'swiper-slide-prev',
    slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
    wrapperClass: 'swiper-wrapper',
    // Callbacks
    runCallbacksOnInit: true,
    // Internals
    _emitClasses: false
  };
  function moduleExtendParams(params, allModulesParams) {
    return function extendParams(obj) {
      if (obj === void 0) {
        obj = {};
      }
      const moduleParamName = Object.keys(obj)[0];
      const moduleParams = obj[moduleParamName];
      if (_typeof(moduleParams) !== 'object' || moduleParams === null) {
        extend(allModulesParams, obj);
        return;
      }
      if (['navigation', 'pagination', 'scrollbar'].indexOf(moduleParamName) >= 0 && params[moduleParamName] === true) {
        params[moduleParamName] = {
          auto: true
        };
      }
      if (!(moduleParamName in params && 'enabled' in moduleParams)) {
        extend(allModulesParams, obj);
        return;
      }
      if (params[moduleParamName] === true) {
        params[moduleParamName] = {
          enabled: true
        };
      }
      if (_typeof(params[moduleParamName]) === 'object' && !('enabled' in params[moduleParamName])) {
        params[moduleParamName].enabled = true;
      }
      if (!params[moduleParamName]) params[moduleParamName] = {
        enabled: false
      };
      extend(allModulesParams, obj);
    };
  }

  /* eslint no-param-reassign: "off" */
  const prototypes = {
    eventsEmitter: eventsEmitter,
    update: update,
    translate: translate,
    transition: transition,
    slide: slide,
    loop: loop,
    grabCursor: grabCursor,
    events: events$1,
    breakpoints: breakpoints,
    checkOverflow: checkOverflow$1,
    classes: classes,
    images: images
  };
  const extendedDefaults = {};
  class Swiper {
    constructor() {
      let el;
      let params;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === 'Object') {
        params = args[0];
      } else {
        [el, params] = args;
      }
      if (!params) params = {};
      params = extend({}, params);
      if (el && !params.el) params.el = el;
      if (params.el && $(params.el).length > 1) {
        const swipers = [];
        $(params.el).each(containerEl => {
          const newParams = extend({}, params, {
            el: containerEl
          });
          swipers.push(new Swiper(newParams));
        }); // eslint-disable-next-line no-constructor-return

        return swipers;
      } // Swiper Instance

      const swiper = this;
      swiper.__swiper__ = true;
      swiper.support = getSupport();
      swiper.device = getDevice({
        userAgent: params.userAgent
      });
      swiper.browser = getBrowser();
      swiper.eventsListeners = {};
      swiper.eventsAnyListeners = [];
      swiper.modules = [...swiper.__modules__];
      if (params.modules && Array.isArray(params.modules)) {
        swiper.modules.push(...params.modules);
      }
      const allModulesParams = {};
      swiper.modules.forEach(mod => {
        mod({
          swiper: swiper,
          extendParams: moduleExtendParams(params, allModulesParams),
          on: swiper.on.bind(swiper),
          once: swiper.once.bind(swiper),
          off: swiper.off.bind(swiper),
          emit: swiper.emit.bind(swiper)
        });
      }); // Extend defaults with modules params

      const swiperParams = extend({}, defaults, allModulesParams); // Extend defaults with passed params

      swiper.params = extend({}, swiperParams, extendedDefaults, params);
      swiper.originalParams = extend({}, swiper.params);
      swiper.passedParams = extend({}, params); // add event listeners

      if (swiper.params && swiper.params.on) {
        Object.keys(swiper.params.on).forEach(eventName => {
          swiper.on(eventName, swiper.params.on[eventName]);
        });
      }
      if (swiper.params && swiper.params.onAny) {
        swiper.onAny(swiper.params.onAny);
      } // Save Dom lib

      swiper.$ = $; // Extend Swiper

      Object.assign(swiper, {
        enabled: swiper.params.enabled,
        el: el,
        // Classes
        classNames: [],
        // Slides
        slides: $(),
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        // isDirection
        isHorizontal: function () {
          return swiper.params.direction === 'horizontal';
        },
        isVertical: function () {
          return swiper.params.direction === 'vertical';
        },
        // Indexes
        activeIndex: 0,
        realIndex: 0,
        //
        isBeginning: true,
        isEnd: false,
        // Props
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: false,
        // Locks
        allowSlideNext: swiper.params.allowSlideNext,
        allowSlidePrev: swiper.params.allowSlidePrev,
        // Touch Events
        touchEvents: function touchEvents() {
          const touch = ['touchstart', 'touchmove', 'touchend', 'touchcancel'];
          const desktop = ['pointerdown', 'pointermove', 'pointerup'];
          swiper.touchEventsTouch = {
            start: touch[0],
            move: touch[1],
            end: touch[2],
            cancel: touch[3]
          };
          swiper.touchEventsDesktop = {
            start: desktop[0],
            move: desktop[1],
            end: desktop[2]
          };
          return swiper.support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
        }(),
        touchEventsData: {
          isTouched: undefined,
          isMoved: undefined,
          allowTouchCallbacks: undefined,
          touchStartTime: undefined,
          isScrolling: undefined,
          currentTranslate: undefined,
          startTranslate: undefined,
          allowThresholdMove: undefined,
          // Form elements to match
          focusableElements: swiper.params.focusableElements,
          // Last click time
          lastClickTime: now(),
          clickTimeout: undefined,
          // Velocities
          velocities: [],
          allowMomentumBounce: undefined,
          isTouchEvent: undefined,
          startMoving: undefined
        },
        // Clicks
        allowClick: true,
        // Touches
        allowTouchMove: swiper.params.allowTouchMove,
        touches: {
          startX: 0,
          startY: 0,
          currentX: 0,
          currentY: 0,
          diff: 0
        },
        // Images
        imagesToLoad: [],
        imagesLoaded: 0
      });
      swiper.emit('_swiper'); // Init

      if (swiper.params.init) {
        swiper.init();
      } // Return app instance
      // eslint-disable-next-line no-constructor-return

      return swiper;
    }
    enable() {
      const swiper = this;
      if (swiper.enabled) return;
      swiper.enabled = true;
      if (swiper.params.grabCursor) {
        swiper.setGrabCursor();
      }
      swiper.emit('enable');
    }
    disable() {
      const swiper = this;
      if (!swiper.enabled) return;
      swiper.enabled = false;
      if (swiper.params.grabCursor) {
        swiper.unsetGrabCursor();
      }
      swiper.emit('disable');
    }
    setProgress(progress, speed) {
      const swiper = this;
      progress = Math.min(Math.max(progress, 0), 1);
      const min = swiper.minTranslate();
      const max = swiper.maxTranslate();
      const current = (max - min) * progress + min;
      swiper.translateTo(current, typeof speed === 'undefined' ? 0 : speed);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    emitContainerClasses() {
      const swiper = this;
      if (!swiper.params._emitClasses || !swiper.el) return;
      const cls = swiper.el.className.split(' ').filter(className => {
        return className.indexOf('swiper') === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
      });
      swiper.emit('_containerClasses', cls.join(' '));
    }
    getSlideClasses(slideEl) {
      const swiper = this;
      if (swiper.destroyed) return '';
      return slideEl.className.split(' ').filter(className => {
        return className.indexOf('swiper-slide') === 0 || className.indexOf(swiper.params.slideClass) === 0;
      }).join(' ');
    }
    emitSlidesClasses() {
      const swiper = this;
      if (!swiper.params._emitClasses || !swiper.el) return;
      const updates = [];
      swiper.slides.each(slideEl => {
        const classNames = swiper.getSlideClasses(slideEl);
        updates.push({
          slideEl: slideEl,
          classNames: classNames
        });
        swiper.emit('_slideClass', slideEl, classNames);
      });
      swiper.emit('_slideClasses', updates);
    }
    slidesPerViewDynamic(view, exact) {
      if (view === void 0) {
        view = 'current';
      }
      if (exact === void 0) {
        exact = false;
      }
      const swiper = this;
      const {
        params: params,
        slides: slides,
        slidesGrid: slidesGrid,
        slidesSizesGrid: slidesSizesGrid,
        size: swiperSize,
        activeIndex: activeIndex
      } = swiper;
      let spv = 1;
      if (params.centeredSlides) {
        let slideSize = slides[activeIndex].swiperSlideSize;
        let breakLoop;
        for (let i = activeIndex + 1; i < slides.length; i += 1) {
          if (slides[i] && !breakLoop) {
            slideSize += slides[i].swiperSlideSize;
            spv += 1;
            if (slideSize > swiperSize) breakLoop = true;
          }
        }
        for (let i = activeIndex - 1; i >= 0; i -= 1) {
          if (slides[i] && !breakLoop) {
            slideSize += slides[i].swiperSlideSize;
            spv += 1;
            if (slideSize > swiperSize) breakLoop = true;
          }
        }
      } else {
        // eslint-disable-next-line
        if (view === 'current') {
          for (let i = activeIndex + 1; i < slides.length; i += 1) {
            const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
            if (slideInView) {
              spv += 1;
            }
          }
        } else {
          // previous
          for (let i = activeIndex - 1; i >= 0; i -= 1) {
            const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
            if (slideInView) {
              spv += 1;
            }
          }
        }
      }
      return spv;
    }
    update() {
      const swiper = this;
      if (!swiper || swiper.destroyed) return;
      const {
        snapGrid: snapGrid,
        params: params
      } = swiper; // Breakpoints

      if (params.breakpoints) {
        swiper.setBreakpoint();
      }
      swiper.updateSize();
      swiper.updateSlides();
      swiper.updateProgress();
      swiper.updateSlidesClasses();
      function setTranslate() {
        const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
        const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
        swiper.setTranslate(newTranslate);
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      }
      let translated;
      if (swiper.params.freeMode && swiper.params.freeMode.enabled) {
        setTranslate();
        if (swiper.params.autoHeight) {
          swiper.updateAutoHeight();
        }
      } else {
        if ((swiper.params.slidesPerView === 'auto' || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
          translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true);
        } else {
          translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
        }
        if (!translated) {
          setTranslate();
        }
      }
      if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
        swiper.checkOverflow();
      }
      swiper.emit('update');
    }
    changeDirection(newDirection, needUpdate) {
      if (needUpdate === void 0) {
        needUpdate = true;
      }
      const swiper = this;
      const currentDirection = swiper.params.direction;
      if (!newDirection) {
        // eslint-disable-next-line
        newDirection = currentDirection === 'horizontal' ? 'vertical' : 'horizontal';
      }
      if (newDirection === currentDirection || newDirection !== 'horizontal' && newDirection !== 'vertical') {
        return swiper;
      }
      swiper.$el.removeClass("".concat(swiper.params.containerModifierClass).concat(currentDirection)).addClass("".concat(swiper.params.containerModifierClass).concat(newDirection));
      swiper.emitContainerClasses();
      swiper.params.direction = newDirection;
      swiper.slides.each(slideEl => {
        if (newDirection === 'vertical') {
          slideEl.style.width = '';
        } else {
          slideEl.style.height = '';
        }
      });
      swiper.emit('changeDirection');
      if (needUpdate) swiper.update();
      return swiper;
    }
    changeLanguageDirection(direction) {
      const swiper = this;
      if (swiper.rtl && direction === 'rtl' || !swiper.rtl && direction === 'ltr') return;
      swiper.rtl = direction === 'rtl';
      swiper.rtlTranslate = swiper.params.direction === 'horizontal' && swiper.rtl;
      if (swiper.rtl) {
        swiper.$el.addClass("".concat(swiper.params.containerModifierClass, "rtl"));
        swiper.el.dir = 'rtl';
      } else {
        swiper.$el.removeClass("".concat(swiper.params.containerModifierClass, "rtl"));
        swiper.el.dir = 'ltr';
      }
      swiper.update();
    }
    mount(el) {
      const swiper = this;
      if (swiper.mounted) return true; // Find el

      const $el = $(el || swiper.params.el);
      el = $el[0];
      if (!el) {
        return false;
      }
      el.swiper = swiper;
      const getWrapperSelector = () => {
        return ".".concat((swiper.params.wrapperClass || '').trim().split(' ').join('.'));
      };
      const getWrapper = () => {
        if (el && el.shadowRoot && el.shadowRoot.querySelector) {
          const res = $(el.shadowRoot.querySelector(getWrapperSelector())); // Children needs to return slot items

          res.children = options => $el.children(options);
          return res;
        }
        if (!$el.children) {
          return $($el).children(getWrapperSelector());
        }
        return $el.children(getWrapperSelector());
      }; // Find Wrapper

      let $wrapperEl = getWrapper();
      if ($wrapperEl.length === 0 && swiper.params.createElements) {
        const document = getDocument();
        const wrapper = document.createElement('div');
        $wrapperEl = $(wrapper);
        wrapper.className = swiper.params.wrapperClass;
        $el.append(wrapper);
        $el.children(".".concat(swiper.params.slideClass)).each(slideEl => {
          $wrapperEl.append(slideEl);
        });
      }
      Object.assign(swiper, {
        $el: $el,
        el: el,
        $wrapperEl: $wrapperEl,
        wrapperEl: $wrapperEl[0],
        mounted: true,
        // RTL
        rtl: el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl',
        rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
        wrongRTL: $wrapperEl.css('display') === '-webkit-box'
      });
      return true;
    }
    init(el) {
      const swiper = this;
      if (swiper.initialized) return swiper;
      const mounted = swiper.mount(el);
      if (mounted === false) return swiper;
      swiper.emit('beforeInit'); // Set breakpoint

      if (swiper.params.breakpoints) {
        swiper.setBreakpoint();
      } // Add Classes

      swiper.addClasses(); // Create loop

      if (swiper.params.loop) {
        swiper.loopCreate();
      } // Update size

      swiper.updateSize(); // Update slides

      swiper.updateSlides();
      if (swiper.params.watchOverflow) {
        swiper.checkOverflow();
      } // Set Grab Cursor

      if (swiper.params.grabCursor && swiper.enabled) {
        swiper.setGrabCursor();
      }
      if (swiper.params.preloadImages) {
        swiper.preloadImages();
      } // Slide To Initial Slide

      if (swiper.params.loop) {
        swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit, false, true);
      } else {
        swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
      } // Attach events

      swiper.attachEvents(); // Init Flag

      swiper.initialized = true; // Emit

      swiper.emit('init');
      swiper.emit('afterInit');
      return swiper;
    }
    destroy(deleteInstance, cleanStyles) {
      if (deleteInstance === void 0) {
        deleteInstance = true;
      }
      if (cleanStyles === void 0) {
        cleanStyles = true;
      }
      const swiper = this;
      const {
        params: params,
        $el: $el,
        $wrapperEl: $wrapperEl,
        slides: slides
      } = swiper;
      if (typeof swiper.params === 'undefined' || swiper.destroyed) {
        return null;
      }
      swiper.emit('beforeDestroy'); // Init Flag

      swiper.initialized = false; // Detach events

      swiper.detachEvents(); // Destroy loop

      if (params.loop) {
        swiper.loopDestroy();
      } // Cleanup styles

      if (cleanStyles) {
        swiper.removeClasses();
        $el.removeAttr('style');
        $wrapperEl.removeAttr('style');
        if (slides && slides.length) {
          slides.removeClass([params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass].join(' ')).removeAttr('style').removeAttr('data-swiper-slide-index');
        }
      }
      swiper.emit('destroy'); // Detach emitter events

      Object.keys(swiper.eventsListeners).forEach(eventName => {
        swiper.off(eventName);
      });
      if (deleteInstance !== false) {
        swiper.$el[0].swiper = null;
        deleteProps(swiper);
      }
      swiper.destroyed = true;
      return null;
    }
    static extendDefaults(newDefaults) {
      extend(extendedDefaults, newDefaults);
    }
    static get extendedDefaults() {
      return extendedDefaults;
    }
    static get defaults() {
      return defaults;
    }
    static installModule(mod) {
      if (!Swiper.prototype.__modules__) Swiper.prototype.__modules__ = [];
      const modules = Swiper.prototype.__modules__;
      if (typeof mod === 'function' && modules.indexOf(mod) < 0) {
        modules.push(mod);
      }
    }
    static use(module) {
      if (Array.isArray(module)) {
        module.forEach(m => Swiper.installModule(m));
        return Swiper;
      }
      Swiper.installModule(module);
      return Swiper;
    }
  }
  Object.keys(prototypes).forEach(prototypeGroup => {
    Object.keys(prototypes[prototypeGroup]).forEach(protoMethod => {
      Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
    });
  });
  Swiper.use([Resize, Observer]);
  function Virtual(_ref) {
    let {
      swiper: swiper,
      extendParams: extendParams,
      on: on,
      emit: emit
    } = _ref;
    extendParams({
      virtual: {
        enabled: false,
        slides: [],
        cache: true,
        renderSlide: null,
        renderExternal: null,
        renderExternalUpdate: true,
        addSlidesBefore: 0,
        addSlidesAfter: 0
      }
    });
    let cssModeTimeout;
    swiper.virtual = {
      cache: {},
      from: undefined,
      to: undefined,
      slides: [],
      offset: 0,
      slidesGrid: []
    };
    function renderSlide(slide, index) {
      const params = swiper.params.virtual;
      if (params.cache && swiper.virtual.cache[index]) {
        return swiper.virtual.cache[index];
      }
      const $slideEl = params.renderSlide ? $(params.renderSlide.call(swiper, slide, index)) : $("<div class=\"".concat(swiper.params.slideClass, "\" data-swiper-slide-index=\"").concat(index, "\">").concat(slide, "</div>"));
      if (!$slideEl.attr('data-swiper-slide-index')) $slideEl.attr('data-swiper-slide-index', index);
      if (params.cache) swiper.virtual.cache[index] = $slideEl;
      return $slideEl;
    }
    function update(force) {
      const {
        slidesPerView: slidesPerView,
        slidesPerGroup: slidesPerGroup,
        centeredSlides: centeredSlides
      } = swiper.params;
      const {
        addSlidesBefore: addSlidesBefore,
        addSlidesAfter: addSlidesAfter
      } = swiper.params.virtual;
      const {
        from: previousFrom,
        to: previousTo,
        slides: slides,
        slidesGrid: previousSlidesGrid,
        offset: previousOffset
      } = swiper.virtual;
      if (!swiper.params.cssMode) {
        swiper.updateActiveIndex();
      }
      const activeIndex = swiper.activeIndex || 0;
      let offsetProp;
      if (swiper.rtlTranslate) offsetProp = 'right';else offsetProp = swiper.isHorizontal() ? 'left' : 'top';
      let slidesAfter;
      let slidesBefore;
      if (centeredSlides) {
        slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
        slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
      } else {
        slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesAfter;
        slidesBefore = slidesPerGroup + addSlidesBefore;
      }
      const from = Math.max((activeIndex || 0) - slidesBefore, 0);
      const to = Math.min((activeIndex || 0) + slidesAfter, slides.length - 1);
      const offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);
      Object.assign(swiper.virtual, {
        from: from,
        to: to,
        offset: offset,
        slidesGrid: swiper.slidesGrid
      });
      function onRendered() {
        swiper.updateSlides();
        swiper.updateProgress();
        swiper.updateSlidesClasses();
        if (swiper.lazy && swiper.params.lazy.enabled) {
          swiper.lazy.load();
        }
        emit('virtualUpdate');
      }
      if (previousFrom === from && previousTo === to && !force) {
        if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) {
          swiper.slides.css(offsetProp, "".concat(offset, "px"));
        }
        swiper.updateProgress();
        emit('virtualUpdate');
        return;
      }
      if (swiper.params.virtual.renderExternal) {
        swiper.params.virtual.renderExternal.call(swiper, {
          offset: offset,
          from: from,
          to: to,
          slides: function getSlides() {
            const slidesToRender = [];
            for (let i = from; i <= to; i += 1) {
              slidesToRender.push(slides[i]);
            }
            return slidesToRender;
          }()
        });
        if (swiper.params.virtual.renderExternalUpdate) {
          onRendered();
        } else {
          emit('virtualUpdate');
        }
        return;
      }
      const prependIndexes = [];
      const appendIndexes = [];
      if (force) {
        swiper.$wrapperEl.find(".".concat(swiper.params.slideClass)).remove();
      } else {
        for (let i = previousFrom; i <= previousTo; i += 1) {
          if (i < from || i > to) {
            swiper.$wrapperEl.find(".".concat(swiper.params.slideClass, "[data-swiper-slide-index=\"").concat(i, "\"]")).remove();
          }
        }
      }
      for (let i = 0; i < slides.length; i += 1) {
        if (i >= from && i <= to) {
          if (typeof previousTo === 'undefined' || force) {
            appendIndexes.push(i);
          } else {
            if (i > previousTo) appendIndexes.push(i);
            if (i < previousFrom) prependIndexes.push(i);
          }
        }
      }
      appendIndexes.forEach(index => {
        swiper.$wrapperEl.append(renderSlide(slides[index], index));
      });
      prependIndexes.sort((a, b) => b - a).forEach(index => {
        swiper.$wrapperEl.prepend(renderSlide(slides[index], index));
      });
      swiper.$wrapperEl.children('.swiper-slide').css(offsetProp, "".concat(offset, "px"));
      onRendered();
    }
    function appendSlide(slides) {
      if (_typeof(slides) === 'object' && 'length' in slides) {
        for (let i = 0; i < slides.length; i += 1) {
          if (slides[i]) swiper.virtual.slides.push(slides[i]);
        }
      } else {
        swiper.virtual.slides.push(slides);
      }
      update(true);
    }
    function prependSlide(slides) {
      const activeIndex = swiper.activeIndex;
      let newActiveIndex = activeIndex + 1;
      let numberOfNewSlides = 1;
      if (Array.isArray(slides)) {
        for (let i = 0; i < slides.length; i += 1) {
          if (slides[i]) swiper.virtual.slides.unshift(slides[i]);
        }
        newActiveIndex = activeIndex + slides.length;
        numberOfNewSlides = slides.length;
      } else {
        swiper.virtual.slides.unshift(slides);
      }
      if (swiper.params.virtual.cache) {
        const cache = swiper.virtual.cache;
        const newCache = {};
        Object.keys(cache).forEach(cachedIndex => {
          const $cachedEl = cache[cachedIndex];
          const cachedElIndex = $cachedEl.attr('data-swiper-slide-index');
          if (cachedElIndex) {
            $cachedEl.attr('data-swiper-slide-index', parseInt(cachedElIndex, 10) + numberOfNewSlides);
          }
          newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = $cachedEl;
        });
        swiper.virtual.cache = newCache;
      }
      update(true);
      swiper.slideTo(newActiveIndex, 0);
    }
    function removeSlide(slidesIndexes) {
      if (typeof slidesIndexes === 'undefined' || slidesIndexes === null) return;
      let activeIndex = swiper.activeIndex;
      if (Array.isArray(slidesIndexes)) {
        for (let i = slidesIndexes.length - 1; i >= 0; i -= 1) {
          swiper.virtual.slides.splice(slidesIndexes[i], 1);
          if (swiper.params.virtual.cache) {
            delete swiper.virtual.cache[slidesIndexes[i]];
          }
          if (slidesIndexes[i] < activeIndex) activeIndex -= 1;
          activeIndex = Math.max(activeIndex, 0);
        }
      } else {
        swiper.virtual.slides.splice(slidesIndexes, 1);
        if (swiper.params.virtual.cache) {
          delete swiper.virtual.cache[slidesIndexes];
        }
        if (slidesIndexes < activeIndex) activeIndex -= 1;
        activeIndex = Math.max(activeIndex, 0);
      }
      update(true);
      swiper.slideTo(activeIndex, 0);
    }
    function removeAllSlides() {
      swiper.virtual.slides = [];
      if (swiper.params.virtual.cache) {
        swiper.virtual.cache = {};
      }
      update(true);
      swiper.slideTo(0, 0);
    }
    on('beforeInit', () => {
      if (!swiper.params.virtual.enabled) return;
      swiper.virtual.slides = swiper.params.virtual.slides;
      swiper.classNames.push("".concat(swiper.params.containerModifierClass, "virtual"));
      swiper.params.watchSlidesProgress = true;
      swiper.originalParams.watchSlidesProgress = true;
      if (!swiper.params.initialSlide) {
        update();
      }
    });
    on('setTranslate', () => {
      if (!swiper.params.virtual.enabled) return;
      if (swiper.params.cssMode && !swiper._immediateVirtual) {
        clearTimeout(cssModeTimeout);
        cssModeTimeout = setTimeout(() => {
          update();
        }, 100);
      } else {
        update();
      }
    });
    on('init update resize', () => {
      if (!swiper.params.virtual.enabled) return;
      if (swiper.params.cssMode) {
        setCSSProperty(swiper.wrapperEl, '--swiper-virtual-size', "".concat(swiper.virtualSize, "px"));
      }
    });
    Object.assign(swiper.virtual, {
      appendSlide: appendSlide,
      prependSlide: prependSlide,
      removeSlide: removeSlide,
      removeAllSlides: removeAllSlides,
      update: update
    });
  }

  /* eslint-disable consistent-return */
  function Keyboard(_ref) {
    let {
      swiper: swiper,
      extendParams: extendParams,
      on: on,
      emit: emit
    } = _ref;
    const document = getDocument();
    const window = getWindow();
    swiper.keyboard = {
      enabled: false
    };
    extendParams({
      keyboard: {
        enabled: false,
        onlyInViewport: true,
        pageUpDown: true
      }
    });
    function handle(event) {
      if (!swiper.enabled) return;
      const {
        rtlTranslate: rtl
      } = swiper;
      let e = event;
      if (e.originalEvent) e = e.originalEvent; // jquery fix

      const kc = e.keyCode || e.charCode;
      const pageUpDown = swiper.params.keyboard.pageUpDown;
      const isPageUp = pageUpDown && kc === 33;
      const isPageDown = pageUpDown && kc === 34;
      const isArrowLeft = kc === 37;
      const isArrowRight = kc === 39;
      const isArrowUp = kc === 38;
      const isArrowDown = kc === 40; // Directions locks

      if (!swiper.allowSlideNext && (swiper.isHorizontal() && isArrowRight || swiper.isVertical() && isArrowDown || isPageDown)) {
        return false;
      }
      if (!swiper.allowSlidePrev && (swiper.isHorizontal() && isArrowLeft || swiper.isVertical() && isArrowUp || isPageUp)) {
        return false;
      }
      if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
        return undefined;
      }
      if (document.activeElement && document.activeElement.nodeName && (document.activeElement.nodeName.toLowerCase() === 'input' || document.activeElement.nodeName.toLowerCase() === 'textarea')) {
        return undefined;
      }
      if (swiper.params.keyboard.onlyInViewport && (isPageUp || isPageDown || isArrowLeft || isArrowRight || isArrowUp || isArrowDown)) {
        let inView = false; // Check that swiper should be inside of visible area of window

        if (swiper.$el.parents(".".concat(swiper.params.slideClass)).length > 0 && swiper.$el.parents(".".concat(swiper.params.slideActiveClass)).length === 0) {
          return undefined;
        }
        const $el = swiper.$el;
        const swiperWidth = $el[0].clientWidth;
        const swiperHeight = $el[0].clientHeight;
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        const swiperOffset = swiper.$el.offset();
        if (rtl) swiperOffset.left -= swiper.$el[0].scrollLeft;
        const swiperCoord = [[swiperOffset.left, swiperOffset.top], [swiperOffset.left + swiperWidth, swiperOffset.top], [swiperOffset.left, swiperOffset.top + swiperHeight], [swiperOffset.left + swiperWidth, swiperOffset.top + swiperHeight]];
        for (let i = 0; i < swiperCoord.length; i += 1) {
          const point = swiperCoord[i];
          if (point[0] >= 0 && point[0] <= windowWidth && point[1] >= 0 && point[1] <= windowHeight) {
            if (point[0] === 0 && point[1] === 0) continue; // eslint-disable-line

            inView = true;
          }
        }
        if (!inView) return undefined;
      }
      if (swiper.isHorizontal()) {
        if (isPageUp || isPageDown || isArrowLeft || isArrowRight) {
          if (e.preventDefault) e.preventDefault();else e.returnValue = false;
        }
        if ((isPageDown || isArrowRight) && !rtl || (isPageUp || isArrowLeft) && rtl) swiper.slideNext();
        if ((isPageUp || isArrowLeft) && !rtl || (isPageDown || isArrowRight) && rtl) swiper.slidePrev();
      } else {
        if (isPageUp || isPageDown || isArrowUp || isArrowDown) {
          if (e.preventDefault) e.preventDefault();else e.returnValue = false;
        }
        if (isPageDown || isArrowDown) swiper.slideNext();
        if (isPageUp || isArrowUp) swiper.slidePrev();
      }
      emit('keyPress', kc);
      return undefined;
    }
    function enable() {
      if (swiper.keyboard.enabled) return;
      $(document).on('keydown', handle);
      swiper.keyboard.enabled = true;
    }
    function disable() {
      if (!swiper.keyboard.enabled) return;
      $(document).off('keydown', handle);
      swiper.keyboard.enabled = false;
    }
    on('init', () => {
      if (swiper.params.keyboard.enabled) {
        enable();
      }
    });
    on('destroy', () => {
      if (swiper.keyboard.enabled) {
        disable();
      }
    });
    Object.assign(swiper.keyboard, {
      enable: enable,
      disable: disable
    });
  }

  /* eslint-disable consistent-return */
  function Mousewheel(_ref) {
    let {
      swiper: swiper,
      extendParams: extendParams,
      on: on,
      emit: emit
    } = _ref;
    const window = getWindow();
    extendParams({
      mousewheel: {
        enabled: false,
        releaseOnEdges: false,
        invert: false,
        forceToAxis: false,
        sensitivity: 1,
        eventsTarget: 'container',
        thresholdDelta: null,
        thresholdTime: null
      }
    });
    swiper.mousewheel = {
      enabled: false
    };
    let timeout;
    let lastScrollTime = now();
    let lastEventBeforeSnap;
    const recentWheelEvents = [];
    function normalize(e) {
      // Reasonable defaults
      const PIXEL_STEP = 10;
      const LINE_HEIGHT = 40;
      const PAGE_HEIGHT = 800;
      let sX = 0;
      let sY = 0; // spinX, spinY

      let pX = 0;
      let pY = 0; // pixelX, pixelY
      // Legacy

      if ('detail' in e) {
        sY = e.detail;
      }
      if ('wheelDelta' in e) {
        sY = -e.wheelDelta / 120;
      }
      if ('wheelDeltaY' in e) {
        sY = -e.wheelDeltaY / 120;
      }
      if ('wheelDeltaX' in e) {
        sX = -e.wheelDeltaX / 120;
      } // side scrolling on FF with DOMMouseScroll

      if ('axis' in e && e.axis === e.HORIZONTAL_AXIS) {
        sX = sY;
        sY = 0;
      }
      pX = sX * PIXEL_STEP;
      pY = sY * PIXEL_STEP;
      if ('deltaY' in e) {
        pY = e.deltaY;
      }
      if ('deltaX' in e) {
        pX = e.deltaX;
      }
      if (e.shiftKey && !pX) {
        // if user scrolls with shift he wants horizontal scroll
        pX = pY;
        pY = 0;
      }
      if ((pX || pY) && e.deltaMode) {
        if (e.deltaMode === 1) {
          // delta in LINE units
          pX *= LINE_HEIGHT;
          pY *= LINE_HEIGHT;
        } else {
          // delta in PAGE units
          pX *= PAGE_HEIGHT;
          pY *= PAGE_HEIGHT;
        }
      } // Fall-back if spin cannot be determined

      if (pX && !sX) {
        sX = pX < 1 ? -1 : 1;
      }
      if (pY && !sY) {
        sY = pY < 1 ? -1 : 1;
      }
      return {
        spinX: sX,
        spinY: sY,
        pixelX: pX,
        pixelY: pY
      };
    }
    function handleMouseEnter() {
      if (!swiper.enabled) return;
      swiper.mouseEntered = true;
    }
    function handleMouseLeave() {
      if (!swiper.enabled) return;
      swiper.mouseEntered = false;
    }
    function animateSlider(newEvent) {
      if (swiper.params.mousewheel.thresholdDelta && newEvent.delta < swiper.params.mousewheel.thresholdDelta) {
        // Prevent if delta of wheel scroll delta is below configured threshold
        return false;
      }
      if (swiper.params.mousewheel.thresholdTime && now() - lastScrollTime < swiper.params.mousewheel.thresholdTime) {
        // Prevent if time between scrolls is below configured threshold
        return false;
      } // If the movement is NOT big enough and
      // if the last time the user scrolled was too close to the current one (avoid continuously triggering the slider):
      //   Don't go any further (avoid insignificant scroll movement).

      if (newEvent.delta >= 6 && now() - lastScrollTime < 60) {
        // Return false as a default
        return true;
      } // If user is scrolling towards the end:
      //   If the slider hasn't hit the latest slide or
      //   if the slider is a loop and
      //   if the slider isn't moving right now:
      //     Go to next slide and
      //     emit a scroll event.
      // Else (the user is scrolling towards the beginning) and
      // if the slider hasn't hit the first slide or
      // if the slider is a loop and
      // if the slider isn't moving right now:
      //   Go to prev slide and
      //   emit a scroll event.

      if (newEvent.direction < 0) {
        if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
          swiper.slideNext();
          emit('scroll', newEvent.raw);
        }
      } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
        swiper.slidePrev();
        emit('scroll', newEvent.raw);
      } // If you got here is because an animation has been triggered so store the current time

      lastScrollTime = new window.Date().getTime(); // Return false as a default

      return false;
    }
    function releaseScroll(newEvent) {
      const params = swiper.params.mousewheel;
      if (newEvent.direction < 0) {
        if (swiper.isEnd && !swiper.params.loop && params.releaseOnEdges) {
          // Return true to animate scroll on edges
          return true;
        }
      } else if (swiper.isBeginning && !swiper.params.loop && params.releaseOnEdges) {
        // Return true to animate scroll on edges
        return true;
      }
      return false;
    }
    function handle(event) {
      let e = event;
      let disableParentSwiper = true;
      if (!swiper.enabled) return;
      const params = swiper.params.mousewheel;
      if (swiper.params.cssMode) {
        e.preventDefault();
      }
      let target = swiper.$el;
      if (swiper.params.mousewheel.eventsTarget !== 'container') {
        target = $(swiper.params.mousewheel.eventsTarget);
      }
      if (!swiper.mouseEntered && !target[0].contains(e.target) && !params.releaseOnEdges) return true;
      if (e.originalEvent) e = e.originalEvent; // jquery fix

      let delta = 0;
      const rtlFactor = swiper.rtlTranslate ? -1 : 1;
      const data = normalize(e);
      if (params.forceToAxis) {
        if (swiper.isHorizontal()) {
          if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = -data.pixelX * rtlFactor;else return true;
        } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = -data.pixelY;else return true;
      } else {
        delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
      }
      if (delta === 0) return true;
      if (params.invert) delta = -delta; // Get the scroll positions

      let positions = swiper.getTranslate() + delta * params.sensitivity;
      if (positions >= swiper.minTranslate()) positions = swiper.minTranslate();
      if (positions <= swiper.maxTranslate()) positions = swiper.maxTranslate(); // When loop is true:
      //     the disableParentSwiper will be true.
      // When loop is false:
      //     if the scroll positions is not on edge,
      //     then the disableParentSwiper will be true.
      //     if the scroll on edge positions,
      //     then the disableParentSwiper will be false.

      disableParentSwiper = swiper.params.loop ? true : !(positions === swiper.minTranslate() || positions === swiper.maxTranslate());
      if (disableParentSwiper && swiper.params.nested) e.stopPropagation();
      if (!swiper.params.freeMode || !swiper.params.freeMode.enabled) {
        // Register the new event in a variable which stores the relevant data
        const newEvent = {
          time: now(),
          delta: Math.abs(delta),
          direction: Math.sign(delta),
          raw: event
        }; // Keep the most recent events

        if (recentWheelEvents.length >= 2) {
          recentWheelEvents.shift(); // only store the last N events
        }

        const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
        recentWheelEvents.push(newEvent); // If there is at least one previous recorded event:
        //   If direction has changed or
        //   if the scroll is quicker than the previous one:
        //     Animate the slider.
        // Else (this is the first time the wheel is moved):
        //     Animate the slider.

        if (prevEvent) {
          if (newEvent.direction !== prevEvent.direction || newEvent.delta > prevEvent.delta || newEvent.time > prevEvent.time + 150) {
            animateSlider(newEvent);
          }
        } else {
          animateSlider(newEvent);
        } // If it's time to release the scroll:
        //   Return now so you don't hit the preventDefault.

        if (releaseScroll(newEvent)) {
          return true;
        }
      } else {
        // Freemode or scrollContainer:
        // If we recently snapped after a momentum scroll, then ignore wheel events
        // to give time for the deceleration to finish. Stop ignoring after 500 msecs
        // or if it's a new scroll (larger delta or inverse sign as last event before
        // an end-of-momentum snap).
        const newEvent = {
          time: now(),
          delta: Math.abs(delta),
          direction: Math.sign(delta)
        };
        const ignoreWheelEvents = lastEventBeforeSnap && newEvent.time < lastEventBeforeSnap.time + 500 && newEvent.delta <= lastEventBeforeSnap.delta && newEvent.direction === lastEventBeforeSnap.direction;
        if (!ignoreWheelEvents) {
          lastEventBeforeSnap = undefined;
          if (swiper.params.loop) {
            swiper.loopFix();
          }
          let position = swiper.getTranslate() + delta * params.sensitivity;
          const wasBeginning = swiper.isBeginning;
          const wasEnd = swiper.isEnd;
          if (position >= swiper.minTranslate()) position = swiper.minTranslate();
          if (position <= swiper.maxTranslate()) position = swiper.maxTranslate();
          swiper.setTransition(0);
          swiper.setTranslate(position);
          swiper.updateProgress();
          swiper.updateActiveIndex();
          swiper.updateSlidesClasses();
          if (!wasBeginning && swiper.isBeginning || !wasEnd && swiper.isEnd) {
            swiper.updateSlidesClasses();
          }
          if (swiper.params.freeMode.sticky) {
            // When wheel scrolling starts with sticky (aka snap) enabled, then detect
            // the end of a momentum scroll by storing recent (N=15?) wheel events.
            // 1. do all N events have decreasing or same (absolute value) delta?
            // 2. did all N events arrive in the last M (M=500?) msecs?
            // 3. does the earliest event have an (absolute value) delta that's
            //    at least P (P=1?) larger than the most recent event's delta?
            // 4. does the latest event have a delta that's smaller than Q (Q=6?) pixels?
            // If 1-4 are "yes" then we're near the end of a momentum scroll deceleration.
            // Snap immediately and ignore remaining wheel events in this scroll.
            // See comment above for "remaining wheel events in this scroll" determination.
            // If 1-4 aren't satisfied, then wait to snap until 500ms after the last event.
            clearTimeout(timeout);
            timeout = undefined;
            if (recentWheelEvents.length >= 15) {
              recentWheelEvents.shift(); // only store the last N events
            }

            const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
            const firstEvent = recentWheelEvents[0];
            recentWheelEvents.push(newEvent);
            if (prevEvent && (newEvent.delta > prevEvent.delta || newEvent.direction !== prevEvent.direction)) {
              // Increasing or reverse-sign delta means the user started scrolling again. Clear the wheel event log.
              recentWheelEvents.splice(0);
            } else if (recentWheelEvents.length >= 15 && newEvent.time - firstEvent.time < 500 && firstEvent.delta - newEvent.delta >= 1 && newEvent.delta <= 6) {
              // We're at the end of the deceleration of a momentum scroll, so there's no need
              // to wait for more events. Snap ASAP on the next tick.
              // Also, because there's some remaining momentum we'll bias the snap in the
              // direction of the ongoing scroll because it's better UX for the scroll to snap
              // in the same direction as the scroll instead of reversing to snap.  Therefore,
              // if it's already scrolled more than 20% in the current direction, keep going.
              const snapToThreshold = delta > 0 ? 0.8 : 0.2;
              lastEventBeforeSnap = newEvent;
              recentWheelEvents.splice(0);
              timeout = nextTick(() => {
                swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
              }, 0); // no delay; move on next tick
            }

            if (!timeout) {
              // if we get here, then we haven't detected the end of a momentum scroll, so
              // we'll consider a scroll "complete" when there haven't been any wheel events
              // for 500ms.
              timeout = nextTick(() => {
                const snapToThreshold = 0.5;
                lastEventBeforeSnap = newEvent;
                recentWheelEvents.splice(0);
                swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
              }, 500);
            }
          } // Emit event

          if (!ignoreWheelEvents) emit('scroll', e); // Stop autoplay

          if (swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction) swiper.autoplay.stop(); // Return page scroll on edge positions

          if (position === swiper.minTranslate() || position === swiper.maxTranslate()) return true;
        }
      }
      if (e.preventDefault) e.preventDefault();else e.returnValue = false;
      return false;
    }
    function events(method) {
      let target = swiper.$el;
      if (swiper.params.mousewheel.eventsTarget !== 'container') {
        target = $(swiper.params.mousewheel.eventsTarget);
      }
      target[method]('mouseenter', handleMouseEnter);
      target[method]('mouseleave', handleMouseLeave);
      target[method]('wheel', handle);
    }
    function enable() {
      if (swiper.params.cssMode) {
        swiper.wrapperEl.removeEventListener('wheel', handle);
        return true;
      }
      if (swiper.mousewheel.enabled) return false;
      events('on');
      swiper.mousewheel.enabled = true;
      return true;
    }
    function disable() {
      if (swiper.params.cssMode) {
        swiper.wrapperEl.addEventListener(event, handle);
        return true;
      }
      if (!swiper.mousewheel.enabled) return false;
      events('off');
      swiper.mousewheel.enabled = false;
      return true;
    }
    on('init', () => {
      if (!swiper.params.mousewheel.enabled && swiper.params.cssMode) {
        disable();
      }
      if (swiper.params.mousewheel.enabled) enable();
    });
    on('destroy', () => {
      if (swiper.params.cssMode) {
        enable();
      }
      if (swiper.mousewheel.enabled) disable();
    });
    Object.assign(swiper.mousewheel, {
      enable: enable,
      disable: disable
    });
  }
  function createElementIfNotDefined(swiper, originalParams, params, checkProps) {
    const document = getDocument();
    if (swiper.params.createElements) {
      Object.keys(checkProps).forEach(key => {
        if (!params[key] && params.auto === true) {
          let element = swiper.$el.children(".".concat(checkProps[key]))[0];
          if (!element) {
            element = document.createElement('div');
            element.className = checkProps[key];
            swiper.$el.append(element);
          }
          params[key] = element;
          originalParams[key] = element;
        }
      });
    }
    return params;
  }
  function Navigation(_ref) {
    let {
      swiper: swiper,
      extendParams: extendParams,
      on: on,
      emit: emit
    } = _ref;
    extendParams({
      navigation: {
        nextEl: null,
        prevEl: null,
        hideOnClick: false,
        disabledClass: 'swiper-button-disabled',
        hiddenClass: 'swiper-button-hidden',
        lockClass: 'swiper-button-lock',
        navigationDisabledClass: 'swiper-navigation-disabled'
      }
    });
    swiper.navigation = {
      nextEl: null,
      $nextEl: null,
      prevEl: null,
      $prevEl: null
    };
    function getEl(el) {
      let $el;
      if (el) {
        $el = $(el);
        if (swiper.params.uniqueNavElements && typeof el === 'string' && $el.length > 1 && swiper.$el.find(el).length === 1) {
          $el = swiper.$el.find(el);
        }
      }
      return $el;
    }
    function toggleEl($el, disabled) {
      const params = swiper.params.navigation;
      if ($el && $el.length > 0) {
        $el[disabled ? 'addClass' : 'removeClass'](params.disabledClass);
        if ($el[0] && $el[0].tagName === 'BUTTON') $el[0].disabled = disabled;
        if (swiper.params.watchOverflow && swiper.enabled) {
          $el[swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
        }
      }
    }
    function update() {
      // Update Navigation Buttons
      if (swiper.params.loop) return;
      const {
        $nextEl: $nextEl,
        $prevEl: $prevEl
      } = swiper.navigation;
      toggleEl($prevEl, swiper.isBeginning && !swiper.params.rewind);
      toggleEl($nextEl, swiper.isEnd && !swiper.params.rewind);
    }
    function onPrevClick(e) {
      e.preventDefault();
      if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return;
      swiper.slidePrev();
      emit('navigationPrev');
    }
    function onNextClick(e) {
      e.preventDefault();
      if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;
      swiper.slideNext();
      emit('navigationNext');
    }
    function init() {
      const params = swiper.params.navigation;
      swiper.params.navigation = createElementIfNotDefined(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
        nextEl: 'swiper-button-next',
        prevEl: 'swiper-button-prev'
      });
      if (!(params.nextEl || params.prevEl)) return;
      const $nextEl = getEl(params.nextEl);
      const $prevEl = getEl(params.prevEl);
      if ($nextEl && $nextEl.length > 0) {
        $nextEl.on('click', onNextClick);
      }
      if ($prevEl && $prevEl.length > 0) {
        $prevEl.on('click', onPrevClick);
      }
      Object.assign(swiper.navigation, {
        $nextEl: $nextEl,
        nextEl: $nextEl && $nextEl[0],
        $prevEl: $prevEl,
        prevEl: $prevEl && $prevEl[0]
      });
      if (!swiper.enabled) {
        if ($nextEl) $nextEl.addClass(params.lockClass);
        if ($prevEl) $prevEl.addClass(params.lockClass);
      }
    }
    function destroy() {
      const {
        $nextEl: $nextEl,
        $prevEl: $prevEl
      } = swiper.navigation;
      if ($nextEl && $nextEl.length) {
        $nextEl.off('click', onNextClick);
        $nextEl.removeClass(swiper.params.navigation.disabledClass);
      }
      if ($prevEl && $prevEl.length) {
        $prevEl.off('click', onPrevClick);
        $prevEl.removeClass(swiper.params.navigation.disabledClass);
      }
    }
    on('init', () => {
      if (swiper.params.navigation.enabled === false) {
        // eslint-disable-next-line
        disable();
      } else {
        init();
        update();
      }
    });
    on('toEdge fromEdge lock unlock', () => {
      update();
    });
    on('destroy', () => {
      destroy();
    });
    on('enable disable', () => {
      const {
        $nextEl: $nextEl,
        $prevEl: $prevEl
      } = swiper.navigation;
      if ($nextEl) {
        $nextEl[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.navigation.lockClass);
      }
      if ($prevEl) {
        $prevEl[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.navigation.lockClass);
      }
    });
    on('click', (_s, e) => {
      const {
        $nextEl: $nextEl,
        $prevEl: $prevEl
      } = swiper.navigation;
      const targetEl = e.target;
      if (swiper.params.navigation.hideOnClick && !$(targetEl).is($prevEl) && !$(targetEl).is($nextEl)) {
        if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
        let isHidden;
        if ($nextEl) {
          isHidden = $nextEl.hasClass(swiper.params.navigation.hiddenClass);
        } else if ($prevEl) {
          isHidden = $prevEl.hasClass(swiper.params.navigation.hiddenClass);
        }
        if (isHidden === true) {
          emit('navigationShow');
        } else {
          emit('navigationHide');
        }
        if ($nextEl) {
          $nextEl.toggleClass(swiper.params.navigation.hiddenClass);
        }
        if ($prevEl) {
          $prevEl.toggleClass(swiper.params.navigation.hiddenClass);
        }
      }
    });
    const enable = () => {
      swiper.$el.removeClass(swiper.params.navigation.navigationDisabledClass);
      init();
      update();
    };
    const disable = () => {
      swiper.$el.addClass(swiper.params.navigation.navigationDisabledClass);
      destroy();
    };
    Object.assign(swiper.navigation, {
      enable: enable,
      disable: disable,
      update: update,
      init: init,
      destroy: destroy
    });
  }
  function classesToSelector(classes) {
    if (classes === void 0) {
      classes = '';
    }
    return ".".concat(classes.trim().replace(/([\.:!\/])/g, '\\$1') // eslint-disable-line
    .replace(/ /g, '.'));
  }
  function Pagination(_ref) {
    let {
      swiper: swiper,
      extendParams: extendParams,
      on: on,
      emit: emit
    } = _ref;
    const pfx = 'swiper-pagination';
    extendParams({
      pagination: {
        el: null,
        bulletElement: 'span',
        clickable: false,
        hideOnClick: false,
        renderBullet: null,
        renderProgressbar: null,
        renderFraction: null,
        renderCustom: null,
        progressbarOpposite: false,
        type: 'bullets',
        // 'bullets' or 'progressbar' or 'fraction' or 'custom'
        dynamicBullets: false,
        dynamicMainBullets: 1,
        formatFractionCurrent: number => number,
        formatFractionTotal: number => number,
        bulletClass: "".concat(pfx, "-bullet"),
        bulletActiveClass: "".concat(pfx, "-bullet-active"),
        modifierClass: "".concat(pfx, "-"),
        currentClass: "".concat(pfx, "-current"),
        totalClass: "".concat(pfx, "-total"),
        hiddenClass: "".concat(pfx, "-hidden"),
        progressbarFillClass: "".concat(pfx, "-progressbar-fill"),
        progressbarOppositeClass: "".concat(pfx, "-progressbar-opposite"),
        clickableClass: "".concat(pfx, "-clickable"),
        lockClass: "".concat(pfx, "-lock"),
        horizontalClass: "".concat(pfx, "-horizontal"),
        verticalClass: "".concat(pfx, "-vertical"),
        paginationDisabledClass: "".concat(pfx, "-disabled")
      }
    });
    swiper.pagination = {
      el: null,
      $el: null,
      bullets: []
    };
    let bulletSize;
    let dynamicBulletIndex = 0;
    function isPaginationDisabled() {
      return !swiper.params.pagination.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0;
    }
    function setSideBullets($bulletEl, position) {
      const {
        bulletActiveClass: bulletActiveClass
      } = swiper.params.pagination;
      $bulletEl[position]().addClass("".concat(bulletActiveClass, "-").concat(position))[position]().addClass("".concat(bulletActiveClass, "-").concat(position, "-").concat(position));
    }
    function update() {
      // Render || Update Pagination bullets/items
      const rtl = swiper.rtl;
      const params = swiper.params.pagination;
      if (isPaginationDisabled()) return;
      const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
      const $el = swiper.pagination.$el; // Current/Total

      let current;
      const total = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
      if (swiper.params.loop) {
        current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup);
        if (current > slidesLength - 1 - swiper.loopedSlides * 2) {
          current -= slidesLength - swiper.loopedSlides * 2;
        }
        if (current > total - 1) current -= total;
        if (current < 0 && swiper.params.paginationType !== 'bullets') current = total + current;
      } else if (typeof swiper.snapIndex !== 'undefined') {
        current = swiper.snapIndex;
      } else {
        current = swiper.activeIndex || 0;
      } // Types

      if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
        const bullets = swiper.pagination.bullets;
        let firstIndex;
        let lastIndex;
        let midIndex;
        if (params.dynamicBullets) {
          bulletSize = bullets.eq(0)[swiper.isHorizontal() ? 'outerWidth' : 'outerHeight'](true);
          $el.css(swiper.isHorizontal() ? 'width' : 'height', "".concat(bulletSize * (params.dynamicMainBullets + 4), "px"));
          if (params.dynamicMainBullets > 1 && swiper.previousIndex !== undefined) {
            dynamicBulletIndex += current - (swiper.previousIndex - swiper.loopedSlides || 0);
            if (dynamicBulletIndex > params.dynamicMainBullets - 1) {
              dynamicBulletIndex = params.dynamicMainBullets - 1;
            } else if (dynamicBulletIndex < 0) {
              dynamicBulletIndex = 0;
            }
          }
          firstIndex = Math.max(current - dynamicBulletIndex, 0);
          lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
          midIndex = (lastIndex + firstIndex) / 2;
        }
        bullets.removeClass(['', '-next', '-next-next', '-prev', '-prev-prev', '-main'].map(suffix => "".concat(params.bulletActiveClass).concat(suffix)).join(' '));
        if ($el.length > 1) {
          bullets.each(bullet => {
            const $bullet = $(bullet);
            const bulletIndex = $bullet.index();
            if (bulletIndex === current) {
              $bullet.addClass(params.bulletActiveClass);
            }
            if (params.dynamicBullets) {
              if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
                $bullet.addClass("".concat(params.bulletActiveClass, "-main"));
              }
              if (bulletIndex === firstIndex) {
                setSideBullets($bullet, 'prev');
              }
              if (bulletIndex === lastIndex) {
                setSideBullets($bullet, 'next');
              }
            }
          });
        } else {
          const $bullet = bullets.eq(current);
          const bulletIndex = $bullet.index();
          $bullet.addClass(params.bulletActiveClass);
          if (params.dynamicBullets) {
            const $firstDisplayedBullet = bullets.eq(firstIndex);
            const $lastDisplayedBullet = bullets.eq(lastIndex);
            for (let i = firstIndex; i <= lastIndex; i += 1) {
              bullets.eq(i).addClass("".concat(params.bulletActiveClass, "-main"));
            }
            if (swiper.params.loop) {
              if (bulletIndex >= bullets.length) {
                for (let i = params.dynamicMainBullets; i >= 0; i -= 1) {
                  bullets.eq(bullets.length - i).addClass("".concat(params.bulletActiveClass, "-main"));
                }
                bullets.eq(bullets.length - params.dynamicMainBullets - 1).addClass("".concat(params.bulletActiveClass, "-prev"));
              } else {
                setSideBullets($firstDisplayedBullet, 'prev');
                setSideBullets($lastDisplayedBullet, 'next');
              }
            } else {
              setSideBullets($firstDisplayedBullet, 'prev');
              setSideBullets($lastDisplayedBullet, 'next');
            }
          }
        }
        if (params.dynamicBullets) {
          const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
          const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
          const offsetProp = rtl ? 'right' : 'left';
          bullets.css(swiper.isHorizontal() ? offsetProp : 'top', "".concat(bulletsOffset, "px"));
        }
      }
      if (params.type === 'fraction') {
        $el.find(classesToSelector(params.currentClass)).text(params.formatFractionCurrent(current + 1));
        $el.find(classesToSelector(params.totalClass)).text(params.formatFractionTotal(total));
      }
      if (params.type === 'progressbar') {
        let progressbarDirection;
        if (params.progressbarOpposite) {
          progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal';
        } else {
          progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical';
        }
        const scale = (current + 1) / total;
        let scaleX = 1;
        let scaleY = 1;
        if (progressbarDirection === 'horizontal') {
          scaleX = scale;
        } else {
          scaleY = scale;
        }
        $el.find(classesToSelector(params.progressbarFillClass)).transform("translate3d(0,0,0) scaleX(".concat(scaleX, ") scaleY(").concat(scaleY, ")")).transition(swiper.params.speed);
      }
      if (params.type === 'custom' && params.renderCustom) {
        $el.html(params.renderCustom(swiper, current + 1, total));
        emit('paginationRender', $el[0]);
      } else {
        emit('paginationUpdate', $el[0]);
      }
      if (swiper.params.watchOverflow && swiper.enabled) {
        $el[swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
      }
    }
    function render() {
      // Render Container
      const params = swiper.params.pagination;
      if (isPaginationDisabled()) return;
      const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
      const $el = swiper.pagination.$el;
      let paginationHTML = '';
      if (params.type === 'bullets') {
        let numberOfBullets = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
        if (swiper.params.freeMode && swiper.params.freeMode.enabled && !swiper.params.loop && numberOfBullets > slidesLength) {
          numberOfBullets = slidesLength;
        }
        for (let i = 0; i < numberOfBullets; i += 1) {
          if (params.renderBullet) {
            paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
          } else {
            paginationHTML += "<".concat(params.bulletElement, " class=\"").concat(params.bulletClass, "\"></").concat(params.bulletElement, ">");
          }
        }
        $el.html(paginationHTML);
        swiper.pagination.bullets = $el.find(classesToSelector(params.bulletClass));
      }
      if (params.type === 'fraction') {
        if (params.renderFraction) {
          paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
        } else {
          paginationHTML = "<span class=\"".concat(params.currentClass, "\"></span>") + ' / ' + "<span class=\"".concat(params.totalClass, "\"></span>");
        }
        $el.html(paginationHTML);
      }
      if (params.type === 'progressbar') {
        if (params.renderProgressbar) {
          paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
        } else {
          paginationHTML = "<span class=\"".concat(params.progressbarFillClass, "\"></span>");
        }
        $el.html(paginationHTML);
      }
      if (params.type !== 'custom') {
        emit('paginationRender', swiper.pagination.$el[0]);
      }
    }
    function init() {
      swiper.params.pagination = createElementIfNotDefined(swiper, swiper.originalParams.pagination, swiper.params.pagination, {
        el: 'swiper-pagination'
      });
      const params = swiper.params.pagination;
      if (!params.el) return;
      let $el = $(params.el);
      if ($el.length === 0) return;
      if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1) {
        $el = swiper.$el.find(params.el); // check if it belongs to another nested Swiper

        if ($el.length > 1) {
          $el = $el.filter(el => {
            if ($(el).parents('.swiper')[0] !== swiper.el) return false;
            return true;
          });
        }
      }
      if (params.type === 'bullets' && params.clickable) {
        $el.addClass(params.clickableClass);
      }
      $el.addClass(params.modifierClass + params.type);
      $el.addClass(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
      if (params.type === 'bullets' && params.dynamicBullets) {
        $el.addClass("".concat(params.modifierClass).concat(params.type, "-dynamic"));
        dynamicBulletIndex = 0;
        if (params.dynamicMainBullets < 1) {
          params.dynamicMainBullets = 1;
        }
      }
      if (params.type === 'progressbar' && params.progressbarOpposite) {
        $el.addClass(params.progressbarOppositeClass);
      }
      if (params.clickable) {
        $el.on('click', classesToSelector(params.bulletClass), function onClick(e) {
          e.preventDefault();
          let index = $(this).index() * swiper.params.slidesPerGroup;
          if (swiper.params.loop) index += swiper.loopedSlides;
          swiper.slideTo(index);
        });
      }
      Object.assign(swiper.pagination, {
        $el: $el,
        el: $el[0]
      });
      if (!swiper.enabled) {
        $el.addClass(params.lockClass);
      }
    }
    function destroy() {
      const params = swiper.params.pagination;
      if (isPaginationDisabled()) return;
      const $el = swiper.pagination.$el;
      $el.removeClass(params.hiddenClass);
      $el.removeClass(params.modifierClass + params.type);
      $el.removeClass(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
      if (swiper.pagination.bullets && swiper.pagination.bullets.removeClass) swiper.pagination.bullets.removeClass(params.bulletActiveClass);
      if (params.clickable) {
        $el.off('click', classesToSelector(params.bulletClass));
      }
    }
    on('init', () => {
      if (swiper.params.pagination.enabled === false) {
        // eslint-disable-next-line
        disable();
      } else {
        init();
        render();
        update();
      }
    });
    on('activeIndexChange', () => {
      if (swiper.params.loop) {
        update();
      } else if (typeof swiper.snapIndex === 'undefined') {
        update();
      }
    });
    on('snapIndexChange', () => {
      if (!swiper.params.loop) {
        update();
      }
    });
    on('slidesLengthChange', () => {
      if (swiper.params.loop) {
        render();
        update();
      }
    });
    on('snapGridLengthChange', () => {
      if (!swiper.params.loop) {
        render();
        update();
      }
    });
    on('destroy', () => {
      destroy();
    });
    on('enable disable', () => {
      const {
        $el: $el
      } = swiper.pagination;
      if ($el) {
        $el[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.pagination.lockClass);
      }
    });
    on('lock unlock', () => {
      update();
    });
    on('click', (_s, e) => {
      const targetEl = e.target;
      const {
        $el: $el
      } = swiper.pagination;
      if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && $el && $el.length > 0 && !$(targetEl).hasClass(swiper.params.pagination.bulletClass)) {
        if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)) return;
        const isHidden = $el.hasClass(swiper.params.pagination.hiddenClass);
        if (isHidden === true) {
          emit('paginationShow');
        } else {
          emit('paginationHide');
        }
        $el.toggleClass(swiper.params.pagination.hiddenClass);
      }
    });
    const enable = () => {
      swiper.$el.removeClass(swiper.params.pagination.paginationDisabledClass);
      if (swiper.pagination.$el) {
        swiper.pagination.$el.removeClass(swiper.params.pagination.paginationDisabledClass);
      }
      init();
      render();
      update();
    };
    const disable = () => {
      swiper.$el.addClass(swiper.params.pagination.paginationDisabledClass);
      if (swiper.pagination.$el) {
        swiper.pagination.$el.addClass(swiper.params.pagination.paginationDisabledClass);
      }
      destroy();
    };
    Object.assign(swiper.pagination, {
      enable: enable,
      disable: disable,
      render: render,
      update: update,
      init: init,
      destroy: destroy
    });
  }
  function Scrollbar(_ref) {
    let {
      swiper: swiper,
      extendParams: extendParams,
      on: on,
      emit: emit
    } = _ref;
    const document = getDocument();
    let isTouched = false;
    let timeout = null;
    let dragTimeout = null;
    let dragStartPos;
    let dragSize;
    let trackSize;
    let divider;
    extendParams({
      scrollbar: {
        el: null,
        dragSize: 'auto',
        hide: false,
        draggable: false,
        snapOnRelease: true,
        lockClass: 'swiper-scrollbar-lock',
        dragClass: 'swiper-scrollbar-drag',
        scrollbarDisabledClass: 'swiper-scrollbar-disabled',
        horizontalClass: "swiper-scrollbar-horizontal",
        verticalClass: "swiper-scrollbar-vertical"
      }
    });
    swiper.scrollbar = {
      el: null,
      dragEl: null,
      $el: null,
      $dragEl: null
    };
    function setTranslate() {
      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
      const {
        scrollbar: scrollbar,
        rtlTranslate: rtl,
        progress: progress
      } = swiper;
      const {
        $dragEl: $dragEl,
        $el: $el
      } = scrollbar;
      const params = swiper.params.scrollbar;
      let newSize = dragSize;
      let newPos = (trackSize - dragSize) * progress;
      if (rtl) {
        newPos = -newPos;
        if (newPos > 0) {
          newSize = dragSize - newPos;
          newPos = 0;
        } else if (-newPos + dragSize > trackSize) {
          newSize = trackSize + newPos;
        }
      } else if (newPos < 0) {
        newSize = dragSize + newPos;
        newPos = 0;
      } else if (newPos + dragSize > trackSize) {
        newSize = trackSize - newPos;
      }
      if (swiper.isHorizontal()) {
        $dragEl.transform("translate3d(".concat(newPos, "px, 0, 0)"));
        $dragEl[0].style.width = "".concat(newSize, "px");
      } else {
        $dragEl.transform("translate3d(0px, ".concat(newPos, "px, 0)"));
        $dragEl[0].style.height = "".concat(newSize, "px");
      }
      if (params.hide) {
        clearTimeout(timeout);
        $el[0].style.opacity = 1;
        timeout = setTimeout(() => {
          $el[0].style.opacity = 0;
          $el.transition(400);
        }, 1000);
      }
    }
    function setTransition(duration) {
      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
      swiper.scrollbar.$dragEl.transition(duration);
    }
    function updateSize() {
      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
      const {
        scrollbar: scrollbar
      } = swiper;
      const {
        $dragEl: $dragEl,
        $el: $el
      } = scrollbar;
      $dragEl[0].style.width = '';
      $dragEl[0].style.height = '';
      trackSize = swiper.isHorizontal() ? $el[0].offsetWidth : $el[0].offsetHeight;
      divider = swiper.size / (swiper.virtualSize + swiper.params.slidesOffsetBefore - (swiper.params.centeredSlides ? swiper.snapGrid[0] : 0));
      if (swiper.params.scrollbar.dragSize === 'auto') {
        dragSize = trackSize * divider;
      } else {
        dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
      }
      if (swiper.isHorizontal()) {
        $dragEl[0].style.width = "".concat(dragSize, "px");
      } else {
        $dragEl[0].style.height = "".concat(dragSize, "px");
      }
      if (divider >= 1) {
        $el[0].style.display = 'none';
      } else {
        $el[0].style.display = '';
      }
      if (swiper.params.scrollbar.hide) {
        $el[0].style.opacity = 0;
      }
      if (swiper.params.watchOverflow && swiper.enabled) {
        scrollbar.$el[swiper.isLocked ? 'addClass' : 'removeClass'](swiper.params.scrollbar.lockClass);
      }
    }
    function getPointerPosition(e) {
      if (swiper.isHorizontal()) {
        return e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].clientX : e.clientX;
      }
      return e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].clientY : e.clientY;
    }
    function setDragPosition(e) {
      const {
        scrollbar: scrollbar,
        rtlTranslate: rtl
      } = swiper;
      const {
        $el: $el
      } = scrollbar;
      let positionRatio;
      positionRatio = (getPointerPosition(e) - $el.offset()[swiper.isHorizontal() ? 'left' : 'top'] - (dragStartPos !== null ? dragStartPos : dragSize / 2)) / (trackSize - dragSize);
      positionRatio = Math.max(Math.min(positionRatio, 1), 0);
      if (rtl) {
        positionRatio = 1 - positionRatio;
      }
      const position = swiper.minTranslate() + (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio;
      swiper.updateProgress(position);
      swiper.setTranslate(position);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    function onDragStart(e) {
      const params = swiper.params.scrollbar;
      const {
        scrollbar: scrollbar,
        $wrapperEl: $wrapperEl
      } = swiper;
      const {
        $el: $el,
        $dragEl: $dragEl
      } = scrollbar;
      isTouched = true;
      dragStartPos = e.target === $dragEl[0] || e.target === $dragEl ? getPointerPosition(e) - e.target.getBoundingClientRect()[swiper.isHorizontal() ? 'left' : 'top'] : null;
      e.preventDefault();
      e.stopPropagation();
      $wrapperEl.transition(100);
      $dragEl.transition(100);
      setDragPosition(e);
      clearTimeout(dragTimeout);
      $el.transition(0);
      if (params.hide) {
        $el.css('opacity', 1);
      }
      if (swiper.params.cssMode) {
        swiper.$wrapperEl.css('scroll-snap-type', 'none');
      }
      emit('scrollbarDragStart', e);
    }
    function onDragMove(e) {
      const {
        scrollbar: scrollbar,
        $wrapperEl: $wrapperEl
      } = swiper;
      const {
        $el: $el,
        $dragEl: $dragEl
      } = scrollbar;
      if (!isTouched) return;
      if (e.preventDefault) e.preventDefault();else e.returnValue = false;
      setDragPosition(e);
      $wrapperEl.transition(0);
      $el.transition(0);
      $dragEl.transition(0);
      emit('scrollbarDragMove', e);
    }
    function onDragEnd(e) {
      const params = swiper.params.scrollbar;
      const {
        scrollbar: scrollbar,
        $wrapperEl: $wrapperEl
      } = swiper;
      const {
        $el: $el
      } = scrollbar;
      if (!isTouched) return;
      isTouched = false;
      if (swiper.params.cssMode) {
        swiper.$wrapperEl.css('scroll-snap-type', '');
        $wrapperEl.transition('');
      }
      if (params.hide) {
        clearTimeout(dragTimeout);
        dragTimeout = nextTick(() => {
          $el.css('opacity', 0);
          $el.transition(400);
        }, 1000);
      }
      emit('scrollbarDragEnd', e);
      if (params.snapOnRelease) {
        swiper.slideToClosest();
      }
    }
    function events(method) {
      const {
        scrollbar: scrollbar,
        touchEventsTouch: touchEventsTouch,
        touchEventsDesktop: touchEventsDesktop,
        params: params,
        support: support
      } = swiper;
      const $el = scrollbar.$el;
      if (!$el) return;
      const target = $el[0];
      const activeListener = support.passiveListener && params.passiveListeners ? {
        passive: false,
        capture: false
      } : false;
      const passiveListener = support.passiveListener && params.passiveListeners ? {
        passive: true,
        capture: false
      } : false;
      if (!target) return;
      const eventMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';
      if (!support.touch) {
        target[eventMethod](touchEventsDesktop.start, onDragStart, activeListener);
        document[eventMethod](touchEventsDesktop.move, onDragMove, activeListener);
        document[eventMethod](touchEventsDesktop.end, onDragEnd, passiveListener);
      } else {
        target[eventMethod](touchEventsTouch.start, onDragStart, activeListener);
        target[eventMethod](touchEventsTouch.move, onDragMove, activeListener);
        target[eventMethod](touchEventsTouch.end, onDragEnd, passiveListener);
      }
    }
    function enableDraggable() {
      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
      events('on');
    }
    function disableDraggable() {
      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
      events('off');
    }
    function init() {
      const {
        scrollbar: scrollbar,
        $el: $swiperEl
      } = swiper;
      swiper.params.scrollbar = createElementIfNotDefined(swiper, swiper.originalParams.scrollbar, swiper.params.scrollbar, {
        el: 'swiper-scrollbar'
      });
      const params = swiper.params.scrollbar;
      if (!params.el) return;
      let $el = $(params.el);
      if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1 && $swiperEl.find(params.el).length === 1) {
        $el = $swiperEl.find(params.el);
      }
      $el.addClass(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
      let $dragEl = $el.find(".".concat(swiper.params.scrollbar.dragClass));
      if ($dragEl.length === 0) {
        $dragEl = $("<div class=\"".concat(swiper.params.scrollbar.dragClass, "\"></div>"));
        $el.append($dragEl);
      }
      Object.assign(scrollbar, {
        $el: $el,
        el: $el[0],
        $dragEl: $dragEl,
        dragEl: $dragEl[0]
      });
      if (params.draggable) {
        enableDraggable();
      }
      if ($el) {
        $el[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.scrollbar.lockClass);
      }
    }
    function destroy() {
      const params = swiper.params.scrollbar;
      const $el = swiper.scrollbar.$el;
      if ($el) {
        $el.removeClass(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
      }
      disableDraggable();
    }
    on('init', () => {
      if (swiper.params.scrollbar.enabled === false) {
        // eslint-disable-next-line
        disable();
      } else {
        init();
        updateSize();
        setTranslate();
      }
    });
    on('update resize observerUpdate lock unlock', () => {
      updateSize();
    });
    on('setTranslate', () => {
      setTranslate();
    });
    on('setTransition', (_s, duration) => {
      setTransition(duration);
    });
    on('enable disable', () => {
      const {
        $el: $el
      } = swiper.scrollbar;
      if ($el) {
        $el[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.scrollbar.lockClass);
      }
    });
    on('destroy', () => {
      destroy();
    });
    const enable = () => {
      swiper.$el.removeClass(swiper.params.scrollbar.scrollbarDisabledClass);
      if (swiper.scrollbar.$el) {
        swiper.scrollbar.$el.removeClass(swiper.params.scrollbar.scrollbarDisabledClass);
      }
      init();
      updateSize();
      setTranslate();
    };
    const disable = () => {
      swiper.$el.addClass(swiper.params.scrollbar.scrollbarDisabledClass);
      if (swiper.scrollbar.$el) {
        swiper.scrollbar.$el.addClass(swiper.params.scrollbar.scrollbarDisabledClass);
      }
      destroy();
    };
    Object.assign(swiper.scrollbar, {
      enable: enable,
      disable: disable,
      updateSize: updateSize,
      setTranslate: setTranslate,
      init: init,
      destroy: destroy
    });
  }
  function Parallax(_ref) {
    let {
      swiper: swiper,
      extendParams: extendParams,
      on: on
    } = _ref;
    extendParams({
      parallax: {
        enabled: false
      }
    });
    const setTransform = (el, progress) => {
      const {
        rtl: rtl
      } = swiper;
      const $el = $(el);
      const rtlFactor = rtl ? -1 : 1;
      const p = $el.attr('data-swiper-parallax') || '0';
      let x = $el.attr('data-swiper-parallax-x');
      let y = $el.attr('data-swiper-parallax-y');
      const scale = $el.attr('data-swiper-parallax-scale');
      const opacity = $el.attr('data-swiper-parallax-opacity');
      if (x || y) {
        x = x || '0';
        y = y || '0';
      } else if (swiper.isHorizontal()) {
        x = p;
        y = '0';
      } else {
        y = p;
        x = '0';
      }
      if (x.indexOf('%') >= 0) {
        x = "".concat(parseInt(x, 10) * progress * rtlFactor, "%");
      } else {
        x = "".concat(x * progress * rtlFactor, "px");
      }
      if (y.indexOf('%') >= 0) {
        y = "".concat(parseInt(y, 10) * progress, "%");
      } else {
        y = "".concat(y * progress, "px");
      }
      if (typeof opacity !== 'undefined' && opacity !== null) {
        const currentOpacity = opacity - (opacity - 1) * (1 - Math.abs(progress));
        $el[0].style.opacity = currentOpacity;
      }
      if (typeof scale === 'undefined' || scale === null) {
        $el.transform("translate3d(".concat(x, ", ").concat(y, ", 0px)"));
      } else {
        const currentScale = scale - (scale - 1) * (1 - Math.abs(progress));
        $el.transform("translate3d(".concat(x, ", ").concat(y, ", 0px) scale(").concat(currentScale, ")"));
      }
    };
    const setTranslate = () => {
      const {
        $el: $el,
        slides: slides,
        progress: progress,
        snapGrid: snapGrid
      } = swiper;
      $el.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(el => {
        setTransform(el, progress);
      });
      slides.each((slideEl, slideIndex) => {
        let slideProgress = slideEl.progress;
        if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== 'auto') {
          slideProgress += Math.ceil(slideIndex / 2) - progress * (snapGrid.length - 1);
        }
        slideProgress = Math.min(Math.max(slideProgress, -1), 1);
        $(slideEl).find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(el => {
          setTransform(el, slideProgress);
        });
      });
    };
    const setTransition = function (duration) {
      if (duration === void 0) {
        duration = swiper.params.speed;
      }
      const {
        $el: $el
      } = swiper;
      $el.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(parallaxEl => {
        const $parallaxEl = $(parallaxEl);
        let parallaxDuration = parseInt($parallaxEl.attr('data-swiper-parallax-duration'), 10) || duration;
        if (duration === 0) parallaxDuration = 0;
        $parallaxEl.transition(parallaxDuration);
      });
    };
    on('beforeInit', () => {
      if (!swiper.params.parallax.enabled) return;
      swiper.params.watchSlidesProgress = true;
      swiper.originalParams.watchSlidesProgress = true;
    });
    on('init', () => {
      if (!swiper.params.parallax.enabled) return;
      setTranslate();
    });
    on('setTranslate', () => {
      if (!swiper.params.parallax.enabled) return;
      setTranslate();
    });
    on('setTransition', (_swiper, duration) => {
      if (!swiper.params.parallax.enabled) return;
      setTransition(duration);
    });
  }
  function Zoom(_ref) {
    let {
      swiper: swiper,
      extendParams: extendParams,
      on: on,
      emit: emit
    } = _ref;
    const window = getWindow();
    extendParams({
      zoom: {
        enabled: false,
        maxRatio: 3,
        minRatio: 1,
        toggle: true,
        containerClass: 'swiper-zoom-container',
        zoomedSlideClass: 'swiper-slide-zoomed'
      }
    });
    swiper.zoom = {
      enabled: false
    };
    let currentScale = 1;
    let isScaling = false;
    let gesturesEnabled;
    let fakeGestureTouched;
    let fakeGestureMoved;
    const gesture = {
      $slideEl: undefined,
      slideWidth: undefined,
      slideHeight: undefined,
      $imageEl: undefined,
      $imageWrapEl: undefined,
      maxRatio: 3
    };
    const image = {
      isTouched: undefined,
      isMoved: undefined,
      currentX: undefined,
      currentY: undefined,
      minX: undefined,
      minY: undefined,
      maxX: undefined,
      maxY: undefined,
      width: undefined,
      height: undefined,
      startX: undefined,
      startY: undefined,
      touchesStart: {},
      touchesCurrent: {}
    };
    const velocity = {
      x: undefined,
      y: undefined,
      prevPositionX: undefined,
      prevPositionY: undefined,
      prevTime: undefined
    };
    let scale = 1;
    Object.defineProperty(swiper.zoom, 'scale', {
      get: function () {
        return scale;
      },
      set: function (value) {
        if (scale !== value) {
          const imageEl = gesture.$imageEl ? gesture.$imageEl[0] : undefined;
          const slideEl = gesture.$slideEl ? gesture.$slideEl[0] : undefined;
          emit('zoomChange', value, imageEl, slideEl);
        }
        scale = value;
      }
    });
    function getDistanceBetweenTouches(e) {
      if (e.targetTouches.length < 2) return 1;
      const x1 = e.targetTouches[0].pageX;
      const y1 = e.targetTouches[0].pageY;
      const x2 = e.targetTouches[1].pageX;
      const y2 = e.targetTouches[1].pageY;
      const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
      return distance;
    } // Events

    function onGestureStart(e) {
      const support = swiper.support;
      const params = swiper.params.zoom;
      fakeGestureTouched = false;
      fakeGestureMoved = false;
      if (!support.gestures) {
        if (e.type !== 'touchstart' || e.type === 'touchstart' && e.targetTouches.length < 2) {
          return;
        }
        fakeGestureTouched = true;
        gesture.scaleStart = getDistanceBetweenTouches(e);
      }
      if (!gesture.$slideEl || !gesture.$slideEl.length) {
        gesture.$slideEl = $(e.target).closest(".".concat(swiper.params.slideClass));
        if (gesture.$slideEl.length === 0) gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
        gesture.$imageEl = gesture.$slideEl.find(".".concat(params.containerClass)).eq(0).find('picture, img, svg, canvas, .swiper-zoom-target').eq(0);
        gesture.$imageWrapEl = gesture.$imageEl.parent(".".concat(params.containerClass));
        gesture.maxRatio = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
        if (gesture.$imageWrapEl.length === 0) {
          gesture.$imageEl = undefined;
          return;
        }
      }
      if (gesture.$imageEl) {
        gesture.$imageEl.transition(0);
      }
      isScaling = true;
    }
    function onGestureChange(e) {
      const support = swiper.support;
      const params = swiper.params.zoom;
      const zoom = swiper.zoom;
      if (!support.gestures) {
        if (e.type !== 'touchmove' || e.type === 'touchmove' && e.targetTouches.length < 2) {
          return;
        }
        fakeGestureMoved = true;
        gesture.scaleMove = getDistanceBetweenTouches(e);
      }
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
        if (e.type === 'gesturechange') onGestureStart(e);
        return;
      }
      if (support.gestures) {
        zoom.scale = e.scale * currentScale;
      } else {
        zoom.scale = gesture.scaleMove / gesture.scaleStart * currentScale;
      }
      if (zoom.scale > gesture.maxRatio) {
        zoom.scale = gesture.maxRatio - 1 + (zoom.scale - gesture.maxRatio + 1) ** 0.5;
      }
      if (zoom.scale < params.minRatio) {
        zoom.scale = params.minRatio + 1 - (params.minRatio - zoom.scale + 1) ** 0.5;
      }
      gesture.$imageEl.transform("translate3d(0,0,0) scale(".concat(zoom.scale, ")"));
    }
    function onGestureEnd(e) {
      const device = swiper.device;
      const support = swiper.support;
      const params = swiper.params.zoom;
      const zoom = swiper.zoom;
      if (!support.gestures) {
        if (!fakeGestureTouched || !fakeGestureMoved) {
          return;
        }
        if (e.type !== 'touchend' || e.type === 'touchend' && e.changedTouches.length < 2 && !device.android) {
          return;
        }
        fakeGestureTouched = false;
        fakeGestureMoved = false;
      }
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
      zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
      gesture.$imageEl.transition(swiper.params.speed).transform("translate3d(0,0,0) scale(".concat(zoom.scale, ")"));
      currentScale = zoom.scale;
      isScaling = false;
      if (zoom.scale === 1) gesture.$slideEl = undefined;
    }
    function onTouchStart(e) {
      const device = swiper.device;
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
      if (image.isTouched) return;
      if (device.android && e.cancelable) e.preventDefault();
      image.isTouched = true;
      image.touchesStart.x = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
      image.touchesStart.y = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
    }
    function onTouchMove(e) {
      const zoom = swiper.zoom;
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
      swiper.allowClick = false;
      if (!image.isTouched || !gesture.$slideEl) return;
      if (!image.isMoved) {
        image.width = gesture.$imageEl[0].offsetWidth;
        image.height = gesture.$imageEl[0].offsetHeight;
        image.startX = getTranslate(gesture.$imageWrapEl[0], 'x') || 0;
        image.startY = getTranslate(gesture.$imageWrapEl[0], 'y') || 0;
        gesture.slideWidth = gesture.$slideEl[0].offsetWidth;
        gesture.slideHeight = gesture.$slideEl[0].offsetHeight;
        gesture.$imageWrapEl.transition(0);
      } // Define if we need image drag

      const scaledWidth = image.width * zoom.scale;
      const scaledHeight = image.height * zoom.scale;
      if (scaledWidth < gesture.slideWidth && scaledHeight < gesture.slideHeight) return;
      image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
      image.maxX = -image.minX;
      image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
      image.maxY = -image.minY;
      image.touchesCurrent.x = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
      image.touchesCurrent.y = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
      if (!image.isMoved && !isScaling) {
        if (swiper.isHorizontal() && (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x || Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)) {
          image.isTouched = false;
          return;
        }
        if (!swiper.isHorizontal() && (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y || Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)) {
          image.isTouched = false;
          return;
        }
      }
      if (e.cancelable) {
        e.preventDefault();
      }
      e.stopPropagation();
      image.isMoved = true;
      image.currentX = image.touchesCurrent.x - image.touchesStart.x + image.startX;
      image.currentY = image.touchesCurrent.y - image.touchesStart.y + image.startY;
      if (image.currentX < image.minX) {
        image.currentX = image.minX + 1 - (image.minX - image.currentX + 1) ** 0.8;
      }
      if (image.currentX > image.maxX) {
        image.currentX = image.maxX - 1 + (image.currentX - image.maxX + 1) ** 0.8;
      }
      if (image.currentY < image.minY) {
        image.currentY = image.minY + 1 - (image.minY - image.currentY + 1) ** 0.8;
      }
      if (image.currentY > image.maxY) {
        image.currentY = image.maxY - 1 + (image.currentY - image.maxY + 1) ** 0.8;
      } // Velocity

      if (!velocity.prevPositionX) velocity.prevPositionX = image.touchesCurrent.x;
      if (!velocity.prevPositionY) velocity.prevPositionY = image.touchesCurrent.y;
      if (!velocity.prevTime) velocity.prevTime = Date.now();
      velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
      velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
      if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) velocity.x = 0;
      if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) velocity.y = 0;
      velocity.prevPositionX = image.touchesCurrent.x;
      velocity.prevPositionY = image.touchesCurrent.y;
      velocity.prevTime = Date.now();
      gesture.$imageWrapEl.transform("translate3d(".concat(image.currentX, "px, ").concat(image.currentY, "px,0)"));
    }
    function onTouchEnd() {
      const zoom = swiper.zoom;
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
      if (!image.isTouched || !image.isMoved) {
        image.isTouched = false;
        image.isMoved = false;
        return;
      }
      image.isTouched = false;
      image.isMoved = false;
      let momentumDurationX = 300;
      let momentumDurationY = 300;
      const momentumDistanceX = velocity.x * momentumDurationX;
      const newPositionX = image.currentX + momentumDistanceX;
      const momentumDistanceY = velocity.y * momentumDurationY;
      const newPositionY = image.currentY + momentumDistanceY; // Fix duration

      if (velocity.x !== 0) momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x);
      if (velocity.y !== 0) momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y);
      const momentumDuration = Math.max(momentumDurationX, momentumDurationY);
      image.currentX = newPositionX;
      image.currentY = newPositionY; // Define if we need image drag

      const scaledWidth = image.width * zoom.scale;
      const scaledHeight = image.height * zoom.scale;
      image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
      image.maxX = -image.minX;
      image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
      image.maxY = -image.minY;
      image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
      image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);
      gesture.$imageWrapEl.transition(momentumDuration).transform("translate3d(".concat(image.currentX, "px, ").concat(image.currentY, "px,0)"));
    }
    function onTransitionEnd() {
      const zoom = swiper.zoom;
      if (gesture.$slideEl && swiper.previousIndex !== swiper.activeIndex) {
        if (gesture.$imageEl) {
          gesture.$imageEl.transform('translate3d(0,0,0) scale(1)');
        }
        if (gesture.$imageWrapEl) {
          gesture.$imageWrapEl.transform('translate3d(0,0,0)');
        }
        zoom.scale = 1;
        currentScale = 1;
        gesture.$slideEl = undefined;
        gesture.$imageEl = undefined;
        gesture.$imageWrapEl = undefined;
      }
    }
    function zoomIn(e) {
      const zoom = swiper.zoom;
      const params = swiper.params.zoom;
      if (!gesture.$slideEl) {
        if (e && e.target) {
          gesture.$slideEl = $(e.target).closest(".".concat(swiper.params.slideClass));
        }
        if (!gesture.$slideEl) {
          if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
            gesture.$slideEl = swiper.$wrapperEl.children(".".concat(swiper.params.slideActiveClass));
          } else {
            gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
          }
        }
        gesture.$imageEl = gesture.$slideEl.find(".".concat(params.containerClass)).eq(0).find('picture, img, svg, canvas, .swiper-zoom-target').eq(0);
        gesture.$imageWrapEl = gesture.$imageEl.parent(".".concat(params.containerClass));
      }
      if (!gesture.$imageEl || gesture.$imageEl.length === 0 || !gesture.$imageWrapEl || gesture.$imageWrapEl.length === 0) return;
      if (swiper.params.cssMode) {
        swiper.wrapperEl.style.overflow = 'hidden';
        swiper.wrapperEl.style.touchAction = 'none';
      }
      gesture.$slideEl.addClass("".concat(params.zoomedSlideClass));
      let touchX;
      let touchY;
      let offsetX;
      let offsetY;
      let diffX;
      let diffY;
      let translateX;
      let translateY;
      let imageWidth;
      let imageHeight;
      let scaledWidth;
      let scaledHeight;
      let translateMinX;
      let translateMinY;
      let translateMaxX;
      let translateMaxY;
      let slideWidth;
      let slideHeight;
      if (typeof image.touchesStart.x === 'undefined' && e) {
        touchX = e.type === 'touchend' ? e.changedTouches[0].pageX : e.pageX;
        touchY = e.type === 'touchend' ? e.changedTouches[0].pageY : e.pageY;
      } else {
        touchX = image.touchesStart.x;
        touchY = image.touchesStart.y;
      }
      zoom.scale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
      currentScale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
      if (e) {
        slideWidth = gesture.$slideEl[0].offsetWidth;
        slideHeight = gesture.$slideEl[0].offsetHeight;
        offsetX = gesture.$slideEl.offset().left + window.scrollX;
        offsetY = gesture.$slideEl.offset().top + window.scrollY;
        diffX = offsetX + slideWidth / 2 - touchX;
        diffY = offsetY + slideHeight / 2 - touchY;
        imageWidth = gesture.$imageEl[0].offsetWidth;
        imageHeight = gesture.$imageEl[0].offsetHeight;
        scaledWidth = imageWidth * zoom.scale;
        scaledHeight = imageHeight * zoom.scale;
        translateMinX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
        translateMinY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
        translateMaxX = -translateMinX;
        translateMaxY = -translateMinY;
        translateX = diffX * zoom.scale;
        translateY = diffY * zoom.scale;
        if (translateX < translateMinX) {
          translateX = translateMinX;
        }
        if (translateX > translateMaxX) {
          translateX = translateMaxX;
        }
        if (translateY < translateMinY) {
          translateY = translateMinY;
        }
        if (translateY > translateMaxY) {
          translateY = translateMaxY;
        }
      } else {
        translateX = 0;
        translateY = 0;
      }
      gesture.$imageWrapEl.transition(300).transform("translate3d(".concat(translateX, "px, ").concat(translateY, "px,0)"));
      gesture.$imageEl.transition(300).transform("translate3d(0,0,0) scale(".concat(zoom.scale, ")"));
    }
    function zoomOut() {
      const zoom = swiper.zoom;
      const params = swiper.params.zoom;
      if (!gesture.$slideEl) {
        if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
          gesture.$slideEl = swiper.$wrapperEl.children(".".concat(swiper.params.slideActiveClass));
        } else {
          gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
        }
        gesture.$imageEl = gesture.$slideEl.find(".".concat(params.containerClass)).eq(0).find('picture, img, svg, canvas, .swiper-zoom-target').eq(0);
        gesture.$imageWrapEl = gesture.$imageEl.parent(".".concat(params.containerClass));
      }
      if (!gesture.$imageEl || gesture.$imageEl.length === 0 || !gesture.$imageWrapEl || gesture.$imageWrapEl.length === 0) return;
      if (swiper.params.cssMode) {
        swiper.wrapperEl.style.overflow = '';
        swiper.wrapperEl.style.touchAction = '';
      }
      zoom.scale = 1;
      currentScale = 1;
      gesture.$imageWrapEl.transition(300).transform('translate3d(0,0,0)');
      gesture.$imageEl.transition(300).transform('translate3d(0,0,0) scale(1)');
      gesture.$slideEl.removeClass("".concat(params.zoomedSlideClass));
      gesture.$slideEl = undefined;
    } // Toggle Zoom

    function zoomToggle(e) {
      const zoom = swiper.zoom;
      if (zoom.scale && zoom.scale !== 1) {
        // Zoom Out
        zoomOut();
      } else {
        // Zoom In
        zoomIn(e);
      }
    }
    function getListeners() {
      const support = swiper.support;
      const passiveListener = swiper.touchEvents.start === 'touchstart' && support.passiveListener && swiper.params.passiveListeners ? {
        passive: true,
        capture: false
      } : false;
      const activeListenerWithCapture = support.passiveListener ? {
        passive: false,
        capture: true
      } : true;
      return {
        passiveListener: passiveListener,
        activeListenerWithCapture: activeListenerWithCapture
      };
    }
    function getSlideSelector() {
      return ".".concat(swiper.params.slideClass);
    }
    function toggleGestures(method) {
      const {
        passiveListener: passiveListener
      } = getListeners();
      const slideSelector = getSlideSelector();
      swiper.$wrapperEl[method]('gesturestart', slideSelector, onGestureStart, passiveListener);
      swiper.$wrapperEl[method]('gesturechange', slideSelector, onGestureChange, passiveListener);
      swiper.$wrapperEl[method]('gestureend', slideSelector, onGestureEnd, passiveListener);
    }
    function enableGestures() {
      if (gesturesEnabled) return;
      gesturesEnabled = true;
      toggleGestures('on');
    }
    function disableGestures() {
      if (!gesturesEnabled) return;
      gesturesEnabled = false;
      toggleGestures('off');
    } // Attach/Detach Events

    function enable() {
      const zoom = swiper.zoom;
      if (zoom.enabled) return;
      zoom.enabled = true;
      const support = swiper.support;
      const {
        passiveListener: passiveListener,
        activeListenerWithCapture: activeListenerWithCapture
      } = getListeners();
      const slideSelector = getSlideSelector(); // Scale image

      if (support.gestures) {
        swiper.$wrapperEl.on(swiper.touchEvents.start, enableGestures, passiveListener);
        swiper.$wrapperEl.on(swiper.touchEvents.end, disableGestures, passiveListener);
      } else if (swiper.touchEvents.start === 'touchstart') {
        swiper.$wrapperEl.on(swiper.touchEvents.start, slideSelector, onGestureStart, passiveListener);
        swiper.$wrapperEl.on(swiper.touchEvents.move, slideSelector, onGestureChange, activeListenerWithCapture);
        swiper.$wrapperEl.on(swiper.touchEvents.end, slideSelector, onGestureEnd, passiveListener);
        if (swiper.touchEvents.cancel) {
          swiper.$wrapperEl.on(swiper.touchEvents.cancel, slideSelector, onGestureEnd, passiveListener);
        }
      } // Move image

      swiper.$wrapperEl.on(swiper.touchEvents.move, ".".concat(swiper.params.zoom.containerClass), onTouchMove, activeListenerWithCapture);
    }
    function disable() {
      const zoom = swiper.zoom;
      if (!zoom.enabled) return;
      const support = swiper.support;
      zoom.enabled = false;
      const {
        passiveListener: passiveListener,
        activeListenerWithCapture: activeListenerWithCapture
      } = getListeners();
      const slideSelector = getSlideSelector(); // Scale image

      if (support.gestures) {
        swiper.$wrapperEl.off(swiper.touchEvents.start, enableGestures, passiveListener);
        swiper.$wrapperEl.off(swiper.touchEvents.end, disableGestures, passiveListener);
      } else if (swiper.touchEvents.start === 'touchstart') {
        swiper.$wrapperEl.off(swiper.touchEvents.start, slideSelector, onGestureStart, passiveListener);
        swiper.$wrapperEl.off(swiper.touchEvents.move, slideSelector, onGestureChange, activeListenerWithCapture);
        swiper.$wrapperEl.off(swiper.touchEvents.end, slideSelector, onGestureEnd, passiveListener);
        if (swiper.touchEvents.cancel) {
          swiper.$wrapperEl.off(swiper.touchEvents.cancel, slideSelector, onGestureEnd, passiveListener);
        }
      } // Move image

      swiper.$wrapperEl.off(swiper.touchEvents.move, ".".concat(swiper.params.zoom.containerClass), onTouchMove, activeListenerWithCapture);
    }
    on('init', () => {
      if (swiper.params.zoom.enabled) {
        enable();
      }
    });
    on('destroy', () => {
      disable();
    });
    on('touchStart', (_s, e) => {
      if (!swiper.zoom.enabled) return;
      onTouchStart(e);
    });
    on('touchEnd', (_s, e) => {
      if (!swiper.zoom.enabled) return;
      onTouchEnd();
    });
    on('doubleTap', (_s, e) => {
      if (!swiper.animating && swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) {
        zoomToggle(e);
      }
    });
    on('transitionEnd', () => {
      if (swiper.zoom.enabled && swiper.params.zoom.enabled) {
        onTransitionEnd();
      }
    });
    on('slideChange', () => {
      if (swiper.zoom.enabled && swiper.params.zoom.enabled && swiper.params.cssMode) {
        onTransitionEnd();
      }
    });
    Object.assign(swiper.zoom, {
      enable: enable,
      disable: disable,
      in: zoomIn,
      out: zoomOut,
      toggle: zoomToggle
    });
  }
  function Lazy(_ref) {
    let {
      swiper: swiper,
      extendParams: extendParams,
      on: on,
      emit: emit
    } = _ref;
    extendParams({
      lazy: {
        checkInView: false,
        enabled: false,
        loadPrevNext: false,
        loadPrevNextAmount: 1,
        loadOnTransitionStart: false,
        scrollingElement: '',
        elementClass: 'swiper-lazy',
        loadingClass: 'swiper-lazy-loading',
        loadedClass: 'swiper-lazy-loaded',
        preloaderClass: 'swiper-lazy-preloader'
      }
    });
    swiper.lazy = {};
    let scrollHandlerAttached = false;
    let initialImageLoaded = false;
    function loadInSlide(index, loadInDuplicate) {
      if (loadInDuplicate === void 0) {
        loadInDuplicate = true;
      }
      const params = swiper.params.lazy;
      if (typeof index === 'undefined') return;
      if (swiper.slides.length === 0) return;
      const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
      const $slideEl = isVirtual ? swiper.$wrapperEl.children(".".concat(swiper.params.slideClass, "[data-swiper-slide-index=\"").concat(index, "\"]")) : swiper.slides.eq(index);
      const $images = $slideEl.find(".".concat(params.elementClass, ":not(.").concat(params.loadedClass, "):not(.").concat(params.loadingClass, ")"));
      if ($slideEl.hasClass(params.elementClass) && !$slideEl.hasClass(params.loadedClass) && !$slideEl.hasClass(params.loadingClass)) {
        $images.push($slideEl[0]);
      }
      if ($images.length === 0) return;
      $images.each(imageEl => {
        const $imageEl = $(imageEl);
        $imageEl.addClass(params.loadingClass);
        const background = $imageEl.attr('data-background');
        const src = $imageEl.attr('data-src');
        const srcset = $imageEl.attr('data-srcset');
        const sizes = $imageEl.attr('data-sizes');
        const $pictureEl = $imageEl.parent('picture');
        swiper.loadImage($imageEl[0], src || background, srcset, sizes, false, () => {
          if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper && !swiper.params || swiper.destroyed) return;
          if (background) {
            $imageEl.css('background-image', "url(\"".concat(background, "\")"));
            $imageEl.removeAttr('data-background');
          } else {
            if (srcset) {
              $imageEl.attr('srcset', srcset);
              $imageEl.removeAttr('data-srcset');
            }
            if (sizes) {
              $imageEl.attr('sizes', sizes);
              $imageEl.removeAttr('data-sizes');
            }
            if ($pictureEl.length) {
              $pictureEl.children('source').each(sourceEl => {
                const $source = $(sourceEl);
                if ($source.attr('data-srcset')) {
                  $source.attr('srcset', $source.attr('data-srcset'));
                  $source.removeAttr('data-srcset');
                }
              });
            }
            if (src) {
              $imageEl.attr('src', src);
              $imageEl.removeAttr('data-src');
            }
          }
          $imageEl.addClass(params.loadedClass).removeClass(params.loadingClass);
          $slideEl.find(".".concat(params.preloaderClass)).remove();
          if (swiper.params.loop && loadInDuplicate) {
            const slideOriginalIndex = $slideEl.attr('data-swiper-slide-index');
            if ($slideEl.hasClass(swiper.params.slideDuplicateClass)) {
              const originalSlide = swiper.$wrapperEl.children("[data-swiper-slide-index=\"".concat(slideOriginalIndex, "\"]:not(.").concat(swiper.params.slideDuplicateClass, ")"));
              loadInSlide(originalSlide.index(), false);
            } else {
              const duplicatedSlide = swiper.$wrapperEl.children(".".concat(swiper.params.slideDuplicateClass, "[data-swiper-slide-index=\"").concat(slideOriginalIndex, "\"]"));
              loadInSlide(duplicatedSlide.index(), false);
            }
          }
          emit('lazyImageReady', $slideEl[0], $imageEl[0]);
          if (swiper.params.autoHeight) {
            swiper.updateAutoHeight();
          }
        });
        emit('lazyImageLoad', $slideEl[0], $imageEl[0]);
      });
    }
    function load() {
      const {
        $wrapperEl: $wrapperEl,
        params: swiperParams,
        slides: slides,
        activeIndex: activeIndex
      } = swiper;
      const isVirtual = swiper.virtual && swiperParams.virtual.enabled;
      const params = swiperParams.lazy;
      let slidesPerView = swiperParams.slidesPerView;
      if (slidesPerView === 'auto') {
        slidesPerView = 0;
      }
      function slideExist(index) {
        if (isVirtual) {
          if ($wrapperEl.children(".".concat(swiperParams.slideClass, "[data-swiper-slide-index=\"").concat(index, "\"]")).length) {
            return true;
          }
        } else if (slides[index]) return true;
        return false;
      }
      function slideIndex(slideEl) {
        if (isVirtual) {
          return $(slideEl).attr('data-swiper-slide-index');
        }
        return $(slideEl).index();
      }
      if (!initialImageLoaded) initialImageLoaded = true;
      if (swiper.params.watchSlidesProgress) {
        $wrapperEl.children(".".concat(swiperParams.slideVisibleClass)).each(slideEl => {
          const index = isVirtual ? $(slideEl).attr('data-swiper-slide-index') : $(slideEl).index();
          loadInSlide(index);
        });
      } else if (slidesPerView > 1) {
        for (let i = activeIndex; i < activeIndex + slidesPerView; i += 1) {
          if (slideExist(i)) loadInSlide(i);
        }
      } else {
        loadInSlide(activeIndex);
      }
      if (params.loadPrevNext) {
        if (slidesPerView > 1 || params.loadPrevNextAmount && params.loadPrevNextAmount > 1) {
          const amount = params.loadPrevNextAmount;
          const spv = Math.ceil(slidesPerView);
          const maxIndex = Math.min(activeIndex + spv + Math.max(amount, spv), slides.length);
          const minIndex = Math.max(activeIndex - Math.max(spv, amount), 0); // Next Slides

          for (let i = activeIndex + spv; i < maxIndex; i += 1) {
            if (slideExist(i)) loadInSlide(i);
          } // Prev Slides

          for (let i = minIndex; i < activeIndex; i += 1) {
            if (slideExist(i)) loadInSlide(i);
          }
        } else {
          const nextSlide = $wrapperEl.children(".".concat(swiperParams.slideNextClass));
          if (nextSlide.length > 0) loadInSlide(slideIndex(nextSlide));
          const prevSlide = $wrapperEl.children(".".concat(swiperParams.slidePrevClass));
          if (prevSlide.length > 0) loadInSlide(slideIndex(prevSlide));
        }
      }
    }
    function checkInViewOnLoad() {
      const window = getWindow();
      if (!swiper || swiper.destroyed) return;
      const $scrollElement = swiper.params.lazy.scrollingElement ? $(swiper.params.lazy.scrollingElement) : $(window);
      const isWindow = $scrollElement[0] === window;
      const scrollElementWidth = isWindow ? window.innerWidth : $scrollElement[0].offsetWidth;
      const scrollElementHeight = isWindow ? window.innerHeight : $scrollElement[0].offsetHeight;
      const swiperOffset = swiper.$el.offset();
      const {
        rtlTranslate: rtl
      } = swiper;
      let inView = false;
      if (rtl) swiperOffset.left -= swiper.$el[0].scrollLeft;
      const swiperCoord = [[swiperOffset.left, swiperOffset.top], [swiperOffset.left + swiper.width, swiperOffset.top], [swiperOffset.left, swiperOffset.top + swiper.height], [swiperOffset.left + swiper.width, swiperOffset.top + swiper.height]];
      for (let i = 0; i < swiperCoord.length; i += 1) {
        const point = swiperCoord[i];
        if (point[0] >= 0 && point[0] <= scrollElementWidth && point[1] >= 0 && point[1] <= scrollElementHeight) {
          if (point[0] === 0 && point[1] === 0) continue; // eslint-disable-line

          inView = true;
        }
      }
      const passiveListener = swiper.touchEvents.start === 'touchstart' && swiper.support.passiveListener && swiper.params.passiveListeners ? {
        passive: true,
        capture: false
      } : false;
      if (inView) {
        load();
        $scrollElement.off('scroll', checkInViewOnLoad, passiveListener);
      } else if (!scrollHandlerAttached) {
        scrollHandlerAttached = true;
        $scrollElement.on('scroll', checkInViewOnLoad, passiveListener);
      }
    }
    on('beforeInit', () => {
      if (swiper.params.lazy.enabled && swiper.params.preloadImages) {
        swiper.params.preloadImages = false;
      }
    });
    on('init', () => {
      if (swiper.params.lazy.enabled) {
        if (swiper.params.lazy.checkInView) {
          checkInViewOnLoad();
        } else {
          load();
        }
      }
    });
    on('scroll', () => {
      if (swiper.params.freeMode && swiper.params.freeMode.enabled && !swiper.params.freeMode.sticky) {
        load();
      }
    });
    on('scrollbarDragMove resize _freeModeNoMomentumRelease', () => {
      if (swiper.params.lazy.enabled) {
        if (swiper.params.lazy.checkInView) {
          checkInViewOnLoad();
        } else {
          load();
        }
      }
    });
    on('transitionStart', () => {
      if (swiper.params.lazy.enabled) {
        if (swiper.params.lazy.loadOnTransitionStart || !swiper.params.lazy.loadOnTransitionStart && !initialImageLoaded) {
          if (swiper.params.lazy.checkInView) {
            checkInViewOnLoad();
          } else {
            load();
          }
        }
      }
    });
    on('transitionEnd', () => {
      if (swiper.params.lazy.enabled && !swiper.params.lazy.loadOnTransitionStart) {
        if (swiper.params.lazy.checkInView) {
          checkInViewOnLoad();
        } else {
          load();
        }
      }
    });
    on('slideChange', () => {
      const {
        lazy: lazy,
        cssMode: cssMode,
        watchSlidesProgress: watchSlidesProgress,
        touchReleaseOnEdges: touchReleaseOnEdges,
        resistanceRatio: resistanceRatio
      } = swiper.params;
      if (lazy.enabled && (cssMode || watchSlidesProgress && (touchReleaseOnEdges || resistanceRatio === 0))) {
        load();
      }
    });
    on('destroy', () => {
      if (!swiper.$el) return;
      swiper.$el.find(".".concat(swiper.params.lazy.loadingClass)).removeClass(swiper.params.lazy.loadingClass);
    });
    Object.assign(swiper.lazy, {
      load: load,
      loadInSlide: loadInSlide
    });
  }

  /* eslint no-bitwise: ["error", { "allow": [">>"] }] */
  function Controller(_ref) {
    let {
      swiper: swiper,
      extendParams: extendParams,
      on: on
    } = _ref;
    extendParams({
      controller: {
        control: undefined,
        inverse: false,
        by: 'slide' // or 'container'
      }
    });

    swiper.controller = {
      control: undefined
    };
    function LinearSpline(x, y) {
      const binarySearch = function search() {
        let maxIndex;
        let minIndex;
        let guess;
        return (array, val) => {
          minIndex = -1;
          maxIndex = array.length;
          while (maxIndex - minIndex > 1) {
            guess = maxIndex + minIndex >> 1;
            if (array[guess] <= val) {
              minIndex = guess;
            } else {
              maxIndex = guess;
            }
          }
          return maxIndex;
        };
      }();
      this.x = x;
      this.y = y;
      this.lastIndex = x.length - 1; // Given an x value (x2), return the expected y2 value:
      // (x1,y1) is the known point before given value,
      // (x3,y3) is the known point after given value.

      let i1;
      let i3;
      this.interpolate = function interpolate(x2) {
        if (!x2) return 0; // Get the indexes of x1 and x3 (the array indexes before and after given x2):

        i3 = binarySearch(this.x, x2);
        i1 = i3 - 1; // We have our indexes i1 & i3, so we can calculate already:
        // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1

        return (x2 - this.x[i1]) * (this.y[i3] - this.y[i1]) / (this.x[i3] - this.x[i1]) + this.y[i1];
      };
      return this;
    } // xxx: for now i will just save one spline function to to

    function getInterpolateFunction(c) {
      if (!swiper.controller.spline) {
        swiper.controller.spline = swiper.params.loop ? new LinearSpline(swiper.slidesGrid, c.slidesGrid) : new LinearSpline(swiper.snapGrid, c.snapGrid);
      }
    }
    function setTranslate(_t, byController) {
      const controlled = swiper.controller.control;
      let multiplier;
      let controlledTranslate;
      const Swiper = swiper.constructor;
      function setControlledTranslate(c) {
        // this will create an Interpolate function based on the snapGrids
        // x is the Grid of the scrolled scroller and y will be the controlled scroller
        // it makes sense to create this only once and recall it for the interpolation
        // the function does a lot of value caching for performance
        const translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;
        if (swiper.params.controller.by === 'slide') {
          getInterpolateFunction(c); // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
          // but it did not work out

          controlledTranslate = -swiper.controller.spline.interpolate(-translate);
        }
        if (!controlledTranslate || swiper.params.controller.by === 'container') {
          multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
          controlledTranslate = (translate - swiper.minTranslate()) * multiplier + c.minTranslate();
        }
        if (swiper.params.controller.inverse) {
          controlledTranslate = c.maxTranslate() - controlledTranslate;
        }
        c.updateProgress(controlledTranslate);
        c.setTranslate(controlledTranslate, swiper);
        c.updateActiveIndex();
        c.updateSlidesClasses();
      }
      if (Array.isArray(controlled)) {
        for (let i = 0; i < controlled.length; i += 1) {
          if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
            setControlledTranslate(controlled[i]);
          }
        }
      } else if (controlled instanceof Swiper && byController !== controlled) {
        setControlledTranslate(controlled);
      }
    }
    function setTransition(duration, byController) {
      const Swiper = swiper.constructor;
      const controlled = swiper.controller.control;
      let i;
      function setControlledTransition(c) {
        c.setTransition(duration, swiper);
        if (duration !== 0) {
          c.transitionStart();
          if (c.params.autoHeight) {
            nextTick(() => {
              c.updateAutoHeight();
            });
          }
          c.$wrapperEl.transitionEnd(() => {
            if (!controlled) return;
            if (c.params.loop && swiper.params.controller.by === 'slide') {
              c.loopFix();
            }
            c.transitionEnd();
          });
        }
      }
      if (Array.isArray(controlled)) {
        for (i = 0; i < controlled.length; i += 1) {
          if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
            setControlledTransition(controlled[i]);
          }
        }
      } else if (controlled instanceof Swiper && byController !== controlled) {
        setControlledTransition(controlled);
      }
    }
    function removeSpline() {
      if (!swiper.controller.control) return;
      if (swiper.controller.spline) {
        swiper.controller.spline = undefined;
        delete swiper.controller.spline;
      }
    }
    on('beforeInit', () => {
      swiper.controller.control = swiper.params.controller.control;
    });
    on('update', () => {
      removeSpline();
    });
    on('resize', () => {
      removeSpline();
    });
    on('observerUpdate', () => {
      removeSpline();
    });
    on('setTranslate', (_s, translate, byController) => {
      if (!swiper.controller.control) return;
      swiper.controller.setTranslate(translate, byController);
    });
    on('setTransition', (_s, duration, byController) => {
      if (!swiper.controller.control) return;
      swiper.controller.setTransition(duration, byController);
    });
    Object.assign(swiper.controller, {
      setTranslate: setTranslate,
      setTransition: setTransition
    });
  }
  function A11y(_ref) {
    let {
      swiper: swiper,
      extendParams: extendParams,
      on: on
    } = _ref;
    extendParams({
      a11y: {
        enabled: true,
        notificationClass: 'swiper-notification',
        prevSlideMessage: 'Previous slide',
        nextSlideMessage: 'Next slide',
        firstSlideMessage: 'This is the first slide',
        lastSlideMessage: 'This is the last slide',
        paginationBulletMessage: 'Go to slide {{index}}',
        slideLabelMessage: '{{index}} / {{slidesLength}}',
        containerMessage: null,
        containerRoleDescriptionMessage: null,
        itemRoleDescriptionMessage: null,
        slideRole: 'group',
        id: null
      }
    });
    swiper.a11y = {
      clicked: false
    };
    let liveRegion = null;
    function notify(message) {
      const notification = liveRegion;
      if (notification.length === 0) return;
      notification.html('');
      notification.html(message);
    }
    function getRandomNumber(size) {
      if (size === void 0) {
        size = 16;
      }
      const randomChar = () => Math.round(16 * Math.random()).toString(16);
      return 'x'.repeat(size).replace(/x/g, randomChar);
    }
    function makeElFocusable($el) {
      $el.attr('tabIndex', '0');
    }
    function makeElNotFocusable($el) {
      $el.attr('tabIndex', '-1');
    }
    function addElRole($el, role) {
      $el.attr('role', role);
    }
    function addElRoleDescription($el, description) {
      $el.attr('aria-roledescription', description);
    }
    function addElControls($el, controls) {
      $el.attr('aria-controls', controls);
    }
    function addElLabel($el, label) {
      $el.attr('aria-label', label);
    }
    function addElId($el, id) {
      $el.attr('id', id);
    }
    function addElLive($el, live) {
      $el.attr('aria-live', live);
    }
    function disableEl($el) {
      $el.attr('aria-disabled', true);
    }
    function enableEl($el) {
      $el.attr('aria-disabled', false);
    }
    function onEnterOrSpaceKey(e) {
      if (e.keyCode !== 13 && e.keyCode !== 32) return;
      const params = swiper.params.a11y;
      const $targetEl = $(e.target);
      if (swiper.navigation && swiper.navigation.$nextEl && $targetEl.is(swiper.navigation.$nextEl)) {
        if (!(swiper.isEnd && !swiper.params.loop)) {
          swiper.slideNext();
        }
        if (swiper.isEnd) {
          notify(params.lastSlideMessage);
        } else {
          notify(params.nextSlideMessage);
        }
      }
      if (swiper.navigation && swiper.navigation.$prevEl && $targetEl.is(swiper.navigation.$prevEl)) {
        if (!(swiper.isBeginning && !swiper.params.loop)) {
          swiper.slidePrev();
        }
        if (swiper.isBeginning) {
          notify(params.firstSlideMessage);
        } else {
          notify(params.prevSlideMessage);
        }
      }
      if (swiper.pagination && $targetEl.is(classesToSelector(swiper.params.pagination.bulletClass))) {
        $targetEl[0].click();
      }
    }
    function updateNavigation() {
      if (swiper.params.loop || swiper.params.rewind || !swiper.navigation) return;
      const {
        $nextEl: $nextEl,
        $prevEl: $prevEl
      } = swiper.navigation;
      if ($prevEl && $prevEl.length > 0) {
        if (swiper.isBeginning) {
          disableEl($prevEl);
          makeElNotFocusable($prevEl);
        } else {
          enableEl($prevEl);
          makeElFocusable($prevEl);
        }
      }
      if ($nextEl && $nextEl.length > 0) {
        if (swiper.isEnd) {
          disableEl($nextEl);
          makeElNotFocusable($nextEl);
        } else {
          enableEl($nextEl);
          makeElFocusable($nextEl);
        }
      }
    }
    function hasPagination() {
      return swiper.pagination && swiper.pagination.bullets && swiper.pagination.bullets.length;
    }
    function hasClickablePagination() {
      return hasPagination() && swiper.params.pagination.clickable;
    }
    function updatePagination() {
      const params = swiper.params.a11y;
      if (!hasPagination()) return;
      swiper.pagination.bullets.each(bulletEl => {
        const $bulletEl = $(bulletEl);
        if (swiper.params.pagination.clickable) {
          makeElFocusable($bulletEl);
          if (!swiper.params.pagination.renderBullet) {
            addElRole($bulletEl, 'button');
            addElLabel($bulletEl, params.paginationBulletMessage.replace(/\{\{index\}\}/, $bulletEl.index() + 1));
          }
        }
        if ($bulletEl.is(".".concat(swiper.params.pagination.bulletActiveClass))) {
          $bulletEl.attr('aria-current', 'true');
        } else {
          $bulletEl.removeAttr('aria-current');
        }
      });
    }
    const initNavEl = ($el, wrapperId, message) => {
      makeElFocusable($el);
      if ($el[0].tagName !== 'BUTTON') {
        addElRole($el, 'button');
        $el.on('keydown', onEnterOrSpaceKey);
      }
      addElLabel($el, message);
      addElControls($el, wrapperId);
    };
    const handlePointerDown = () => {
      swiper.a11y.clicked = true;
    };
    const handlePointerUp = () => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          swiper.a11y.clicked = false;
        });
      });
    };
    const handleFocus = e => {
      if (swiper.a11y.clicked) return;
      const slideEl = e.target.closest(".".concat(swiper.params.slideClass));
      if (!slideEl || !swiper.slides.includes(slideEl)) return;
      const isActive = swiper.slides.indexOf(slideEl) === swiper.activeIndex;
      const isVisible = swiper.params.watchSlidesProgress && swiper.visibleSlides && swiper.visibleSlides.includes(slideEl);
      if (isActive || isVisible) return;
      if (swiper.isHorizontal()) {
        swiper.el.scrollLeft = 0;
      } else {
        swiper.el.scrollTop = 0;
      }
      swiper.slideTo(swiper.slides.indexOf(slideEl), 0);
    };
    const initSlides = () => {
      const params = swiper.params.a11y;
      if (params.itemRoleDescriptionMessage) {
        addElRoleDescription($(swiper.slides), params.itemRoleDescriptionMessage);
      }
      if (params.slideRole) {
        addElRole($(swiper.slides), params.slideRole);
      }
      const slidesLength = swiper.params.loop ? swiper.slides.filter(el => !el.classList.contains(swiper.params.slideDuplicateClass)).length : swiper.slides.length;
      if (params.slideLabelMessage) {
        swiper.slides.each((slideEl, index) => {
          const $slideEl = $(slideEl);
          const slideIndex = swiper.params.loop ? parseInt($slideEl.attr('data-swiper-slide-index'), 10) : index;
          const ariaLabelMessage = params.slideLabelMessage.replace(/\{\{index\}\}/, slideIndex + 1).replace(/\{\{slidesLength\}\}/, slidesLength);
          addElLabel($slideEl, ariaLabelMessage);
        });
      }
    };
    const init = () => {
      const params = swiper.params.a11y;
      swiper.$el.append(liveRegion); // Container

      const $containerEl = swiper.$el;
      if (params.containerRoleDescriptionMessage) {
        addElRoleDescription($containerEl, params.containerRoleDescriptionMessage);
      }
      if (params.containerMessage) {
        addElLabel($containerEl, params.containerMessage);
      } // Wrapper

      const $wrapperEl = swiper.$wrapperEl;
      const wrapperId = params.id || $wrapperEl.attr('id') || "swiper-wrapper-".concat(getRandomNumber(16));
      const live = swiper.params.autoplay && swiper.params.autoplay.enabled ? 'off' : 'polite';
      addElId($wrapperEl, wrapperId);
      addElLive($wrapperEl, live); // Slide

      initSlides(); // Navigation

      let $nextEl;
      let $prevEl;
      if (swiper.navigation && swiper.navigation.$nextEl) {
        $nextEl = swiper.navigation.$nextEl;
      }
      if (swiper.navigation && swiper.navigation.$prevEl) {
        $prevEl = swiper.navigation.$prevEl;
      }
      if ($nextEl && $nextEl.length) {
        initNavEl($nextEl, wrapperId, params.nextSlideMessage);
      }
      if ($prevEl && $prevEl.length) {
        initNavEl($prevEl, wrapperId, params.prevSlideMessage);
      } // Pagination

      if (hasClickablePagination()) {
        swiper.pagination.$el.on('keydown', classesToSelector(swiper.params.pagination.bulletClass), onEnterOrSpaceKey);
      } // Tab focus

      swiper.$el.on('focus', handleFocus, true);
      swiper.$el.on('pointerdown', handlePointerDown, true);
      swiper.$el.on('pointerup', handlePointerUp, true);
    };
    function destroy() {
      if (liveRegion && liveRegion.length > 0) liveRegion.remove();
      let $nextEl;
      let $prevEl;
      if (swiper.navigation && swiper.navigation.$nextEl) {
        $nextEl = swiper.navigation.$nextEl;
      }
      if (swiper.navigation && swiper.navigation.$prevEl) {
        $prevEl = swiper.navigation.$prevEl;
      }
      if ($nextEl) {
        $nextEl.off('keydown', onEnterOrSpaceKey);
      }
      if ($prevEl) {
        $prevEl.off('keydown', onEnterOrSpaceKey);
      } // Pagination

      if (hasClickablePagination()) {
        swiper.pagination.$el.off('keydown', classesToSelector(swiper.params.pagination.bulletClass), onEnterOrSpaceKey);
      } // Tab focus

      swiper.$el.off('focus', handleFocus, true);
      swiper.$el.off('pointerdown', handlePointerDown, true);
      swiper.$el.off('pointerup', handlePointerUp, true);
    }
    on('beforeInit', () => {
      liveRegion = $("<span class=\"".concat(swiper.params.a11y.notificationClass, "\" aria-live=\"assertive\" aria-atomic=\"true\"></span>"));
    });
    on('afterInit', () => {
      if (!swiper.params.a11y.enabled) return;
      init();
    });
    on('slidesLengthChange snapGridLengthChange slidesGridLengthChange', () => {
      if (!swiper.params.a11y.enabled) return;
      initSlides();
    });
    on('fromEdge toEdge afterInit lock unlock', () => {
      if (!swiper.params.a11y.enabled) return;
      updateNavigation();
    });
    on('paginationUpdate', () => {
      if (!swiper.params.a11y.enabled) return;
      updatePagination();
    });
    on('destroy', () => {
      if (!swiper.params.a11y.enabled) return;
      destroy();
    });
  }
  function History(_ref) {
    let {
      swiper: swiper,
      extendParams: extendParams,
      on: on
    } = _ref;
    extendParams({
      history: {
        enabled: false,
        root: '',
        replaceState: false,
        key: 'slides',
        keepQuery: false
      }
    });
    let initialized = false;
    let paths = {};
    const slugify = text => {
      return text.toString().replace(/\s+/g, '-').replace(/[^\w-]+/g, '').replace(/--+/g, '-').replace(/^-+/, '').replace(/-+$/, '');
    };
    const getPathValues = urlOverride => {
      const window = getWindow();
      let location;
      if (urlOverride) {
        location = new URL(urlOverride);
      } else {
        location = window.location;
      }
      const pathArray = location.pathname.slice(1).split('/').filter(part => part !== '');
      const total = pathArray.length;
      const key = pathArray[total - 2];
      const value = pathArray[total - 1];
      return {
        key: key,
        value: value
      };
    };
    const setHistory = (key, index) => {
      const window = getWindow();
      if (!initialized || !swiper.params.history.enabled) return;
      let location;
      if (swiper.params.url) {
        location = new URL(swiper.params.url);
      } else {
        location = window.location;
      }
      const slide = swiper.slides.eq(index);
      let value = slugify(slide.attr('data-history'));
      if (swiper.params.history.root.length > 0) {
        let root = swiper.params.history.root;
        if (root[root.length - 1] === '/') root = root.slice(0, root.length - 1);
        value = "".concat(root, "/").concat(key, "/").concat(value);
      } else if (!location.pathname.includes(key)) {
        value = "".concat(key, "/").concat(value);
      }
      if (swiper.params.history.keepQuery) {
        value += location.search;
      }
      const currentState = window.history.state;
      if (currentState && currentState.value === value) {
        return;
      }
      if (swiper.params.history.replaceState) {
        window.history.replaceState({
          value: value
        }, null, value);
      } else {
        window.history.pushState({
          value: value
        }, null, value);
      }
    };
    const scrollToSlide = (speed, value, runCallbacks) => {
      if (value) {
        for (let i = 0, length = swiper.slides.length; i < length; i += 1) {
          const slide = swiper.slides.eq(i);
          const slideHistory = slugify(slide.attr('data-history'));
          if (slideHistory === value && !slide.hasClass(swiper.params.slideDuplicateClass)) {
            const index = slide.index();
            swiper.slideTo(index, speed, runCallbacks);
          }
        }
      } else {
        swiper.slideTo(0, speed, runCallbacks);
      }
    };
    const setHistoryPopState = () => {
      paths = getPathValues(swiper.params.url);
      scrollToSlide(swiper.params.speed, paths.value, false);
    };
    const init = () => {
      const window = getWindow();
      if (!swiper.params.history) return;
      if (!window.history || !window.history.pushState) {
        swiper.params.history.enabled = false;
        swiper.params.hashNavigation.enabled = true;
        return;
      }
      initialized = true;
      paths = getPathValues(swiper.params.url);
      if (!paths.key && !paths.value) return;
      scrollToSlide(0, paths.value, swiper.params.runCallbacksOnInit);
      if (!swiper.params.history.replaceState) {
        window.addEventListener('popstate', setHistoryPopState);
      }
    };
    const destroy = () => {
      const window = getWindow();
      if (!swiper.params.history.replaceState) {
        window.removeEventListener('popstate', setHistoryPopState);
      }
    };
    on('init', () => {
      if (swiper.params.history.enabled) {
        init();
      }
    });
    on('destroy', () => {
      if (swiper.params.history.enabled) {
        destroy();
      }
    });
    on('transitionEnd _freeModeNoMomentumRelease', () => {
      if (initialized) {
        setHistory(swiper.params.history.key, swiper.activeIndex);
      }
    });
    on('slideChange', () => {
      if (initialized && swiper.params.cssMode) {
        setHistory(swiper.params.history.key, swiper.activeIndex);
      }
    });
  }
  function HashNavigation(_ref) {
    let {
      swiper: swiper,
      extendParams: extendParams,
      emit: emit,
      on: on
    } = _ref;
    let initialized = false;
    const document = getDocument();
    const window = getWindow();
    extendParams({
      hashNavigation: {
        enabled: false,
        replaceState: false,
        watchState: false
      }
    });
    const onHashChange = () => {
      emit('hashChange');
      const newHash = document.location.hash.replace('#', '');
      const activeSlideHash = swiper.slides.eq(swiper.activeIndex).attr('data-hash');
      if (newHash !== activeSlideHash) {
        const newIndex = swiper.$wrapperEl.children(".".concat(swiper.params.slideClass, "[data-hash=\"").concat(newHash, "\"]")).index();
        if (typeof newIndex === 'undefined') return;
        swiper.slideTo(newIndex);
      }
    };
    const setHash = () => {
      if (!initialized || !swiper.params.hashNavigation.enabled) return;
      if (swiper.params.hashNavigation.replaceState && window.history && window.history.replaceState) {
        window.history.replaceState(null, null, "#".concat(swiper.slides.eq(swiper.activeIndex).attr('data-hash')) || '');
        emit('hashSet');
      } else {
        const slide = swiper.slides.eq(swiper.activeIndex);
        const hash = slide.attr('data-hash') || slide.attr('data-history');
        document.location.hash = hash || '';
        emit('hashSet');
      }
    };
    const init = () => {
      if (!swiper.params.hashNavigation.enabled || swiper.params.history && swiper.params.history.enabled) return;
      initialized = true;
      const hash = document.location.hash.replace('#', '');
      if (hash) {
        const speed = 0;
        for (let i = 0, length = swiper.slides.length; i < length; i += 1) {
          const slide = swiper.slides.eq(i);
          const slideHash = slide.attr('data-hash') || slide.attr('data-history');
          if (slideHash === hash && !slide.hasClass(swiper.params.slideDuplicateClass)) {
            const index = slide.index();
            swiper.slideTo(index, speed, swiper.params.runCallbacksOnInit, true);
          }
        }
      }
      if (swiper.params.hashNavigation.watchState) {
        $(window).on('hashchange', onHashChange);
      }
    };
    const destroy = () => {
      if (swiper.params.hashNavigation.watchState) {
        $(window).off('hashchange', onHashChange);
      }
    };
    on('init', () => {
      if (swiper.params.hashNavigation.enabled) {
        init();
      }
    });
    on('destroy', () => {
      if (swiper.params.hashNavigation.enabled) {
        destroy();
      }
    });
    on('transitionEnd _freeModeNoMomentumRelease', () => {
      if (initialized) {
        setHash();
      }
    });
    on('slideChange', () => {
      if (initialized && swiper.params.cssMode) {
        setHash();
      }
    });
  }

  /* eslint no-underscore-dangle: "off" */
  function Autoplay(_ref) {
    let {
      swiper: swiper,
      extendParams: extendParams,
      on: on,
      emit: emit
    } = _ref;
    let timeout;
    swiper.autoplay = {
      running: false,
      paused: false
    };
    extendParams({
      autoplay: {
        enabled: false,
        delay: 3000,
        waitForTransition: true,
        disableOnInteraction: true,
        stopOnLastSlide: false,
        reverseDirection: false,
        pauseOnMouseEnter: false
      }
    });
    function run() {
      if (!swiper.size) {
        swiper.autoplay.running = false;
        swiper.autoplay.paused = false;
        return;
      }
      const $activeSlideEl = swiper.slides.eq(swiper.activeIndex);
      let delay = swiper.params.autoplay.delay;
      if ($activeSlideEl.attr('data-swiper-autoplay')) {
        delay = $activeSlideEl.attr('data-swiper-autoplay') || swiper.params.autoplay.delay;
      }
      clearTimeout(timeout);
      timeout = nextTick(() => {
        let autoplayResult;
        if (swiper.params.autoplay.reverseDirection) {
          if (swiper.params.loop) {
            swiper.loopFix();
            autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
            emit('autoplay');
          } else if (!swiper.isBeginning) {
            autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
            emit('autoplay');
          } else if (!swiper.params.autoplay.stopOnLastSlide) {
            autoplayResult = swiper.slideTo(swiper.slides.length - 1, swiper.params.speed, true, true);
            emit('autoplay');
          } else {
            stop();
          }
        } else if (swiper.params.loop) {
          swiper.loopFix();
          autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
          emit('autoplay');
        } else if (!swiper.isEnd) {
          autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
          emit('autoplay');
        } else if (!swiper.params.autoplay.stopOnLastSlide) {
          autoplayResult = swiper.slideTo(0, swiper.params.speed, true, true);
          emit('autoplay');
        } else {
          stop();
        }
        if (swiper.params.cssMode && swiper.autoplay.running) run();else if (autoplayResult === false) {
          run();
        }
      }, delay);
    }
    function start() {
      if (typeof timeout !== 'undefined') return false;
      if (swiper.autoplay.running) return false;
      swiper.autoplay.running = true;
      emit('autoplayStart');
      run();
      return true;
    }
    function stop() {
      if (!swiper.autoplay.running) return false;
      if (typeof timeout === 'undefined') return false;
      if (timeout) {
        clearTimeout(timeout);
        timeout = undefined;
      }
      swiper.autoplay.running = false;
      emit('autoplayStop');
      return true;
    }
    function pause(speed) {
      if (!swiper.autoplay.running) return;
      if (swiper.autoplay.paused) return;
      if (timeout) clearTimeout(timeout);
      swiper.autoplay.paused = true;
      if (speed === 0 || !swiper.params.autoplay.waitForTransition) {
        swiper.autoplay.paused = false;
        run();
      } else {
        ['transitionend', 'webkitTransitionEnd'].forEach(event => {
          swiper.$wrapperEl[0].addEventListener(event, onTransitionEnd);
        });
      }
    }
    function onVisibilityChange() {
      const document = getDocument();
      if (document.visibilityState === 'hidden' && swiper.autoplay.running) {
        pause();
      }
      if (document.visibilityState === 'visible' && swiper.autoplay.paused) {
        run();
        swiper.autoplay.paused = false;
      }
    }
    function onTransitionEnd(e) {
      if (!swiper || swiper.destroyed || !swiper.$wrapperEl) return;
      if (e.target !== swiper.$wrapperEl[0]) return;
      ['transitionend', 'webkitTransitionEnd'].forEach(event => {
        swiper.$wrapperEl[0].removeEventListener(event, onTransitionEnd);
      });
      swiper.autoplay.paused = false;
      if (!swiper.autoplay.running) {
        stop();
      } else {
        run();
      }
    }
    function onMouseEnter() {
      if (swiper.params.autoplay.disableOnInteraction) {
        stop();
      } else {
        emit('autoplayPause');
        pause();
      }
      ['transitionend', 'webkitTransitionEnd'].forEach(event => {
        swiper.$wrapperEl[0].removeEventListener(event, onTransitionEnd);
      });
    }
    function onMouseLeave() {
      if (swiper.params.autoplay.disableOnInteraction) {
        return;
      }
      swiper.autoplay.paused = false;
      emit('autoplayResume');
      run();
    }
    function attachMouseEvents() {
      if (swiper.params.autoplay.pauseOnMouseEnter) {
        swiper.$el.on('mouseenter', onMouseEnter);
        swiper.$el.on('mouseleave', onMouseLeave);
      }
    }
    function detachMouseEvents() {
      swiper.$el.off('mouseenter', onMouseEnter);
      swiper.$el.off('mouseleave', onMouseLeave);
    }
    on('init', () => {
      if (swiper.params.autoplay.enabled) {
        start();
        const document = getDocument();
        document.addEventListener('visibilitychange', onVisibilityChange);
        attachMouseEvents();
      }
    });
    on('beforeTransitionStart', (_s, speed, internal) => {
      if (swiper.autoplay.running) {
        if (internal || !swiper.params.autoplay.disableOnInteraction) {
          swiper.autoplay.pause(speed);
        } else {
          stop();
        }
      }
    });
    on('sliderFirstMove', () => {
      if (swiper.autoplay.running) {
        if (swiper.params.autoplay.disableOnInteraction) {
          stop();
        } else {
          pause();
        }
      }
    });
    on('touchEnd', () => {
      if (swiper.params.cssMode && swiper.autoplay.paused && !swiper.params.autoplay.disableOnInteraction) {
        run();
      }
    });
    on('destroy', () => {
      detachMouseEvents();
      if (swiper.autoplay.running) {
        stop();
      }
      const document = getDocument();
      document.removeEventListener('visibilitychange', onVisibilityChange);
    });
    Object.assign(swiper.autoplay, {
      pause: pause,
      run: run,
      start: start,
      stop: stop
    });
  }
  function Thumb(_ref) {
    let {
      swiper: swiper,
      extendParams: extendParams,
      on: on
    } = _ref;
    extendParams({
      thumbs: {
        swiper: null,
        multipleActiveThumbs: true,
        autoScrollOffset: 0,
        slideThumbActiveClass: 'swiper-slide-thumb-active',
        thumbsContainerClass: 'swiper-thumbs'
      }
    });
    let initialized = false;
    let swiperCreated = false;
    swiper.thumbs = {
      swiper: null
    };
    function onThumbClick() {
      const thumbsSwiper = swiper.thumbs.swiper;
      if (!thumbsSwiper || thumbsSwiper.destroyed) return;
      const clickedIndex = thumbsSwiper.clickedIndex;
      const clickedSlide = thumbsSwiper.clickedSlide;
      if (clickedSlide && $(clickedSlide).hasClass(swiper.params.thumbs.slideThumbActiveClass)) return;
      if (typeof clickedIndex === 'undefined' || clickedIndex === null) return;
      let slideToIndex;
      if (thumbsSwiper.params.loop) {
        slideToIndex = parseInt($(thumbsSwiper.clickedSlide).attr('data-swiper-slide-index'), 10);
      } else {
        slideToIndex = clickedIndex;
      }
      if (swiper.params.loop) {
        let currentIndex = swiper.activeIndex;
        if (swiper.slides.eq(currentIndex).hasClass(swiper.params.slideDuplicateClass)) {
          swiper.loopFix(); // eslint-disable-next-line

          swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
          currentIndex = swiper.activeIndex;
        }
        const prevIndex = swiper.slides.eq(currentIndex).prevAll("[data-swiper-slide-index=\"".concat(slideToIndex, "\"]")).eq(0).index();
        const nextIndex = swiper.slides.eq(currentIndex).nextAll("[data-swiper-slide-index=\"".concat(slideToIndex, "\"]")).eq(0).index();
        if (typeof prevIndex === 'undefined') slideToIndex = nextIndex;else if (typeof nextIndex === 'undefined') slideToIndex = prevIndex;else if (nextIndex - currentIndex < currentIndex - prevIndex) slideToIndex = nextIndex;else slideToIndex = prevIndex;
      }
      swiper.slideTo(slideToIndex);
    }
    function init() {
      const {
        thumbs: thumbsParams
      } = swiper.params;
      if (initialized) return false;
      initialized = true;
      const SwiperClass = swiper.constructor;
      if (thumbsParams.swiper instanceof SwiperClass) {
        swiper.thumbs.swiper = thumbsParams.swiper;
        Object.assign(swiper.thumbs.swiper.originalParams, {
          watchSlidesProgress: true,
          slideToClickedSlide: false
        });
        Object.assign(swiper.thumbs.swiper.params, {
          watchSlidesProgress: true,
          slideToClickedSlide: false
        });
      } else if (isObject(thumbsParams.swiper)) {
        const thumbsSwiperParams = Object.assign({}, thumbsParams.swiper);
        Object.assign(thumbsSwiperParams, {
          watchSlidesProgress: true,
          slideToClickedSlide: false
        });
        swiper.thumbs.swiper = new SwiperClass(thumbsSwiperParams);
        swiperCreated = true;
      }
      swiper.thumbs.swiper.$el.addClass(swiper.params.thumbs.thumbsContainerClass);
      swiper.thumbs.swiper.on('tap', onThumbClick);
      return true;
    }
    function update(initial) {
      const thumbsSwiper = swiper.thumbs.swiper;
      if (!thumbsSwiper || thumbsSwiper.destroyed) return;
      const slidesPerView = thumbsSwiper.params.slidesPerView === 'auto' ? thumbsSwiper.slidesPerViewDynamic() : thumbsSwiper.params.slidesPerView; // Activate thumbs

      let thumbsToActivate = 1;
      const thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;
      if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) {
        thumbsToActivate = swiper.params.slidesPerView;
      }
      if (!swiper.params.thumbs.multipleActiveThumbs) {
        thumbsToActivate = 1;
      }
      thumbsToActivate = Math.floor(thumbsToActivate);
      thumbsSwiper.slides.removeClass(thumbActiveClass);
      if (thumbsSwiper.params.loop || thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled) {
        for (let i = 0; i < thumbsToActivate; i += 1) {
          thumbsSwiper.$wrapperEl.children("[data-swiper-slide-index=\"".concat(swiper.realIndex + i, "\"]")).addClass(thumbActiveClass);
        }
      } else {
        for (let i = 0; i < thumbsToActivate; i += 1) {
          thumbsSwiper.slides.eq(swiper.realIndex + i).addClass(thumbActiveClass);
        }
      }
      const autoScrollOffset = swiper.params.thumbs.autoScrollOffset;
      const useOffset = autoScrollOffset && !thumbsSwiper.params.loop;
      if (swiper.realIndex !== thumbsSwiper.realIndex || useOffset) {
        let currentThumbsIndex = thumbsSwiper.activeIndex;
        let newThumbsIndex;
        let direction;
        if (thumbsSwiper.params.loop) {
          if (thumbsSwiper.slides.eq(currentThumbsIndex).hasClass(thumbsSwiper.params.slideDuplicateClass)) {
            thumbsSwiper.loopFix(); // eslint-disable-next-line

            thumbsSwiper._clientLeft = thumbsSwiper.$wrapperEl[0].clientLeft;
            currentThumbsIndex = thumbsSwiper.activeIndex;
          } // Find actual thumbs index to slide to

          const prevThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).prevAll("[data-swiper-slide-index=\"".concat(swiper.realIndex, "\"]")).eq(0).index();
          const nextThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).nextAll("[data-swiper-slide-index=\"".concat(swiper.realIndex, "\"]")).eq(0).index();
          if (typeof prevThumbsIndex === 'undefined') {
            newThumbsIndex = nextThumbsIndex;
          } else if (typeof nextThumbsIndex === 'undefined') {
            newThumbsIndex = prevThumbsIndex;
          } else if (nextThumbsIndex - currentThumbsIndex === currentThumbsIndex - prevThumbsIndex) {
            newThumbsIndex = thumbsSwiper.params.slidesPerGroup > 1 ? nextThumbsIndex : currentThumbsIndex;
          } else if (nextThumbsIndex - currentThumbsIndex < currentThumbsIndex - prevThumbsIndex) {
            newThumbsIndex = nextThumbsIndex;
          } else {
            newThumbsIndex = prevThumbsIndex;
          }
          direction = swiper.activeIndex > swiper.previousIndex ? 'next' : 'prev';
        } else {
          newThumbsIndex = swiper.realIndex;
          direction = newThumbsIndex > swiper.previousIndex ? 'next' : 'prev';
        }
        if (useOffset) {
          newThumbsIndex += direction === 'next' ? autoScrollOffset : -1 * autoScrollOffset;
        }
        if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
          if (thumbsSwiper.params.centeredSlides) {
            if (newThumbsIndex > currentThumbsIndex) {
              newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
            } else {
              newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
            }
          } else if (newThumbsIndex > currentThumbsIndex && thumbsSwiper.params.slidesPerGroup === 1) ;
          thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined);
        }
      }
    }
    on('beforeInit', () => {
      const {
        thumbs: thumbs
      } = swiper.params;
      if (!thumbs || !thumbs.swiper) return;
      init();
      update(true);
    });
    on('slideChange update resize observerUpdate', () => {
      update();
    });
    on('setTransition', (_s, duration) => {
      const thumbsSwiper = swiper.thumbs.swiper;
      if (!thumbsSwiper || thumbsSwiper.destroyed) return;
      thumbsSwiper.setTransition(duration);
    });
    on('beforeDestroy', () => {
      const thumbsSwiper = swiper.thumbs.swiper;
      if (!thumbsSwiper || thumbsSwiper.destroyed) return;
      if (swiperCreated) {
        thumbsSwiper.destroy();
      }
    });
    Object.assign(swiper.thumbs, {
      init: init,
      update: update
    });
  }
  function freeMode(_ref) {
    let {
      swiper: swiper,
      extendParams: extendParams,
      emit: emit,
      once: once
    } = _ref;
    extendParams({
      freeMode: {
        enabled: false,
        momentum: true,
        momentumRatio: 1,
        momentumBounce: true,
        momentumBounceRatio: 1,
        momentumVelocityRatio: 1,
        sticky: false,
        minimumVelocity: 0.02
      }
    });
    function onTouchStart() {
      const translate = swiper.getTranslate();
      swiper.setTranslate(translate);
      swiper.setTransition(0);
      swiper.touchEventsData.velocities.length = 0;
      swiper.freeMode.onTouchEnd({
        currentPos: swiper.rtl ? swiper.translate : -swiper.translate
      });
    }
    function onTouchMove() {
      const {
        touchEventsData: data,
        touches: touches
      } = swiper; // Velocity

      if (data.velocities.length === 0) {
        data.velocities.push({
          position: touches[swiper.isHorizontal() ? 'startX' : 'startY'],
          time: data.touchStartTime
        });
      }
      data.velocities.push({
        position: touches[swiper.isHorizontal() ? 'currentX' : 'currentY'],
        time: now()
      });
    }
    function onTouchEnd(_ref2) {
      let {
        currentPos: currentPos
      } = _ref2;
      const {
        params: params,
        $wrapperEl: $wrapperEl,
        rtlTranslate: rtl,
        snapGrid: snapGrid,
        touchEventsData: data
      } = swiper; // Time diff

      const touchEndTime = now();
      const timeDiff = touchEndTime - data.touchStartTime;
      if (currentPos < -swiper.minTranslate()) {
        swiper.slideTo(swiper.activeIndex);
        return;
      }
      if (currentPos > -swiper.maxTranslate()) {
        if (swiper.slides.length < snapGrid.length) {
          swiper.slideTo(snapGrid.length - 1);
        } else {
          swiper.slideTo(swiper.slides.length - 1);
        }
        return;
      }
      if (params.freeMode.momentum) {
        if (data.velocities.length > 1) {
          const lastMoveEvent = data.velocities.pop();
          const velocityEvent = data.velocities.pop();
          const distance = lastMoveEvent.position - velocityEvent.position;
          const time = lastMoveEvent.time - velocityEvent.time;
          swiper.velocity = distance / time;
          swiper.velocity /= 2;
          if (Math.abs(swiper.velocity) < params.freeMode.minimumVelocity) {
            swiper.velocity = 0;
          } // this implies that the user stopped moving a finger then released.
          // There would be no events with distance zero, so the last event is stale.

          if (time > 150 || now() - lastMoveEvent.time > 300) {
            swiper.velocity = 0;
          }
        } else {
          swiper.velocity = 0;
        }
        swiper.velocity *= params.freeMode.momentumVelocityRatio;
        data.velocities.length = 0;
        let momentumDuration = 1000 * params.freeMode.momentumRatio;
        const momentumDistance = swiper.velocity * momentumDuration;
        let newPosition = swiper.translate + momentumDistance;
        if (rtl) newPosition = -newPosition;
        let doBounce = false;
        let afterBouncePosition;
        const bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeMode.momentumBounceRatio;
        let needsLoopFix;
        if (newPosition < swiper.maxTranslate()) {
          if (params.freeMode.momentumBounce) {
            if (newPosition + swiper.maxTranslate() < -bounceAmount) {
              newPosition = swiper.maxTranslate() - bounceAmount;
            }
            afterBouncePosition = swiper.maxTranslate();
            doBounce = true;
            data.allowMomentumBounce = true;
          } else {
            newPosition = swiper.maxTranslate();
          }
          if (params.loop && params.centeredSlides) needsLoopFix = true;
        } else if (newPosition > swiper.minTranslate()) {
          if (params.freeMode.momentumBounce) {
            if (newPosition - swiper.minTranslate() > bounceAmount) {
              newPosition = swiper.minTranslate() + bounceAmount;
            }
            afterBouncePosition = swiper.minTranslate();
            doBounce = true;
            data.allowMomentumBounce = true;
          } else {
            newPosition = swiper.minTranslate();
          }
          if (params.loop && params.centeredSlides) needsLoopFix = true;
        } else if (params.freeMode.sticky) {
          let nextSlide;
          for (let j = 0; j < snapGrid.length; j += 1) {
            if (snapGrid[j] > -newPosition) {
              nextSlide = j;
              break;
            }
          }
          if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === 'next') {
            newPosition = snapGrid[nextSlide];
          } else {
            newPosition = snapGrid[nextSlide - 1];
          }
          newPosition = -newPosition;
        }
        if (needsLoopFix) {
          once('transitionEnd', () => {
            swiper.loopFix();
          });
        } // Fix duration

        if (swiper.velocity !== 0) {
          if (rtl) {
            momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
          } else {
            momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
          }
          if (params.freeMode.sticky) {
            // If freeMode.sticky is active and the user ends a swipe with a slow-velocity
            // event, then durations can be 20+ seconds to slide one (or zero!) slides.
            // It's easy to see this when simulating touch with mouse events. To fix this,
            // limit single-slide swipes to the default slide duration. This also has the
            // nice side effect of matching slide speed if the user stopped moving before
            // lifting finger or mouse vs. moving slowly before lifting the finger/mouse.
            // For faster swipes, also apply limits (albeit higher ones).
            const moveDistance = Math.abs((rtl ? -newPosition : newPosition) - swiper.translate);
            const currentSlideSize = swiper.slidesSizesGrid[swiper.activeIndex];
            if (moveDistance < currentSlideSize) {
              momentumDuration = params.speed;
            } else if (moveDistance < 2 * currentSlideSize) {
              momentumDuration = params.speed * 1.5;
            } else {
              momentumDuration = params.speed * 2.5;
            }
          }
        } else if (params.freeMode.sticky) {
          swiper.slideToClosest();
          return;
        }
        if (params.freeMode.momentumBounce && doBounce) {
          swiper.updateProgress(afterBouncePosition);
          swiper.setTransition(momentumDuration);
          swiper.setTranslate(newPosition);
          swiper.transitionStart(true, swiper.swipeDirection);
          swiper.animating = true;
          $wrapperEl.transitionEnd(() => {
            if (!swiper || swiper.destroyed || !data.allowMomentumBounce) return;
            emit('momentumBounce');
            swiper.setTransition(params.speed);
            setTimeout(() => {
              swiper.setTranslate(afterBouncePosition);
              $wrapperEl.transitionEnd(() => {
                if (!swiper || swiper.destroyed) return;
                swiper.transitionEnd();
              });
            }, 0);
          });
        } else if (swiper.velocity) {
          emit('_freeModeNoMomentumRelease');
          swiper.updateProgress(newPosition);
          swiper.setTransition(momentumDuration);
          swiper.setTranslate(newPosition);
          swiper.transitionStart(true, swiper.swipeDirection);
          if (!swiper.animating) {
            swiper.animating = true;
            $wrapperEl.transitionEnd(() => {
              if (!swiper || swiper.destroyed) return;
              swiper.transitionEnd();
            });
          }
        } else {
          swiper.updateProgress(newPosition);
        }
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      } else if (params.freeMode.sticky) {
        swiper.slideToClosest();
        return;
      } else if (params.freeMode) {
        emit('_freeModeNoMomentumRelease');
      }
      if (!params.freeMode.momentum || timeDiff >= params.longSwipesMs) {
        swiper.updateProgress();
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      }
    }
    Object.assign(swiper, {
      freeMode: {
        onTouchStart: onTouchStart,
        onTouchMove: onTouchMove,
        onTouchEnd: onTouchEnd
      }
    });
  }
  function Grid(_ref) {
    let {
      swiper: swiper,
      extendParams: extendParams
    } = _ref;
    extendParams({
      grid: {
        rows: 1,
        fill: 'column'
      }
    });
    let slidesNumberEvenToRows;
    let slidesPerRow;
    let numFullColumns;
    const initSlides = slidesLength => {
      const {
        slidesPerView: slidesPerView
      } = swiper.params;
      const {
        rows: rows,
        fill: fill
      } = swiper.params.grid;
      slidesPerRow = slidesNumberEvenToRows / rows;
      numFullColumns = Math.floor(slidesLength / rows);
      if (Math.floor(slidesLength / rows) === slidesLength / rows) {
        slidesNumberEvenToRows = slidesLength;
      } else {
        slidesNumberEvenToRows = Math.ceil(slidesLength / rows) * rows;
      }
      if (slidesPerView !== 'auto' && fill === 'row') {
        slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, slidesPerView * rows);
      }
    };
    const updateSlide = (i, slide, slidesLength, getDirectionLabel) => {
      const {
        slidesPerGroup: slidesPerGroup,
        spaceBetween: spaceBetween
      } = swiper.params;
      const {
        rows: rows,
        fill: fill
      } = swiper.params.grid; // Set slides order

      let newSlideOrderIndex;
      let column;
      let row;
      if (fill === 'row' && slidesPerGroup > 1) {
        const groupIndex = Math.floor(i / (slidesPerGroup * rows));
        const slideIndexInGroup = i - rows * slidesPerGroup * groupIndex;
        const columnsInGroup = groupIndex === 0 ? slidesPerGroup : Math.min(Math.ceil((slidesLength - groupIndex * rows * slidesPerGroup) / rows), slidesPerGroup);
        row = Math.floor(slideIndexInGroup / columnsInGroup);
        column = slideIndexInGroup - row * columnsInGroup + groupIndex * slidesPerGroup;
        newSlideOrderIndex = column + row * slidesNumberEvenToRows / rows;
        slide.css({
          '-webkit-order': newSlideOrderIndex,
          order: newSlideOrderIndex
        });
      } else if (fill === 'column') {
        column = Math.floor(i / rows);
        row = i - column * rows;
        if (column > numFullColumns || column === numFullColumns && row === rows - 1) {
          row += 1;
          if (row >= rows) {
            row = 0;
            column += 1;
          }
        }
      } else {
        row = Math.floor(i / slidesPerRow);
        column = i - row * slidesPerRow;
      }
      slide.css(getDirectionLabel('margin-top'), row !== 0 ? spaceBetween && "".concat(spaceBetween, "px") : '');
    };
    const updateWrapperSize = (slideSize, snapGrid, getDirectionLabel) => {
      const {
        spaceBetween: spaceBetween,
        centeredSlides: centeredSlides,
        roundLengths: roundLengths
      } = swiper.params;
      const {
        rows: rows
      } = swiper.params.grid;
      swiper.virtualSize = (slideSize + spaceBetween) * slidesNumberEvenToRows;
      swiper.virtualSize = Math.ceil(swiper.virtualSize / rows) - spaceBetween;
      swiper.$wrapperEl.css(_defineProperty({}, getDirectionLabel('width'), "".concat(swiper.virtualSize + spaceBetween, "px")));
      if (centeredSlides) {
        snapGrid.splice(0, snapGrid.length);
        const newSlidesGrid = [];
        for (let i = 0; i < snapGrid.length; i += 1) {
          let slidesGridItem = snapGrid[i];
          if (roundLengths) slidesGridItem = Math.floor(slidesGridItem);
          if (snapGrid[i] < swiper.virtualSize + snapGrid[0]) newSlidesGrid.push(slidesGridItem);
        }
        snapGrid.push(...newSlidesGrid);
      }
    };
    swiper.grid = {
      initSlides: initSlides,
      updateSlide: updateSlide,
      updateWrapperSize: updateWrapperSize
    };
  }
  function appendSlide(slides) {
    const swiper = this;
    const {
      $wrapperEl: $wrapperEl,
      params: params
    } = swiper;
    if (params.loop) {
      swiper.loopDestroy();
    }
    if (_typeof(slides) === 'object' && 'length' in slides) {
      for (let i = 0; i < slides.length; i += 1) {
        if (slides[i]) $wrapperEl.append(slides[i]);
      }
    } else {
      $wrapperEl.append(slides);
    }
    if (params.loop) {
      swiper.loopCreate();
    }
    if (!params.observer) {
      swiper.update();
    }
  }
  function prependSlide(slides) {
    const swiper = this;
    const {
      params: params,
      $wrapperEl: $wrapperEl,
      activeIndex: activeIndex
    } = swiper;
    if (params.loop) {
      swiper.loopDestroy();
    }
    let newActiveIndex = activeIndex + 1;
    if (_typeof(slides) === 'object' && 'length' in slides) {
      for (let i = 0; i < slides.length; i += 1) {
        if (slides[i]) $wrapperEl.prepend(slides[i]);
      }
      newActiveIndex = activeIndex + slides.length;
    } else {
      $wrapperEl.prepend(slides);
    }
    if (params.loop) {
      swiper.loopCreate();
    }
    if (!params.observer) {
      swiper.update();
    }
    swiper.slideTo(newActiveIndex, 0, false);
  }
  function addSlide(index, slides) {
    const swiper = this;
    const {
      $wrapperEl: $wrapperEl,
      params: params,
      activeIndex: activeIndex
    } = swiper;
    let activeIndexBuffer = activeIndex;
    if (params.loop) {
      activeIndexBuffer -= swiper.loopedSlides;
      swiper.loopDestroy();
      swiper.slides = $wrapperEl.children(".".concat(params.slideClass));
    }
    const baseLength = swiper.slides.length;
    if (index <= 0) {
      swiper.prependSlide(slides);
      return;
    }
    if (index >= baseLength) {
      swiper.appendSlide(slides);
      return;
    }
    let newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;
    const slidesBuffer = [];
    for (let i = baseLength - 1; i >= index; i -= 1) {
      const currentSlide = swiper.slides.eq(i);
      currentSlide.remove();
      slidesBuffer.unshift(currentSlide);
    }
    if (_typeof(slides) === 'object' && 'length' in slides) {
      for (let i = 0; i < slides.length; i += 1) {
        if (slides[i]) $wrapperEl.append(slides[i]);
      }
      newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
    } else {
      $wrapperEl.append(slides);
    }
    for (let i = 0; i < slidesBuffer.length; i += 1) {
      $wrapperEl.append(slidesBuffer[i]);
    }
    if (params.loop) {
      swiper.loopCreate();
    }
    if (!params.observer) {
      swiper.update();
    }
    if (params.loop) {
      swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
    } else {
      swiper.slideTo(newActiveIndex, 0, false);
    }
  }
  function removeSlide(slidesIndexes) {
    const swiper = this;
    const {
      params: params,
      $wrapperEl: $wrapperEl,
      activeIndex: activeIndex
    } = swiper;
    let activeIndexBuffer = activeIndex;
    if (params.loop) {
      activeIndexBuffer -= swiper.loopedSlides;
      swiper.loopDestroy();
      swiper.slides = $wrapperEl.children(".".concat(params.slideClass));
    }
    let newActiveIndex = activeIndexBuffer;
    let indexToRemove;
    if (_typeof(slidesIndexes) === 'object' && 'length' in slidesIndexes) {
      for (let i = 0; i < slidesIndexes.length; i += 1) {
        indexToRemove = slidesIndexes[i];
        if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
        if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
      }
      newActiveIndex = Math.max(newActiveIndex, 0);
    } else {
      indexToRemove = slidesIndexes;
      if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
      if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
      newActiveIndex = Math.max(newActiveIndex, 0);
    }
    if (params.loop) {
      swiper.loopCreate();
    }
    if (!params.observer) {
      swiper.update();
    }
    if (params.loop) {
      swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
    } else {
      swiper.slideTo(newActiveIndex, 0, false);
    }
  }
  function removeAllSlides() {
    const swiper = this;
    const slidesIndexes = [];
    for (let i = 0; i < swiper.slides.length; i += 1) {
      slidesIndexes.push(i);
    }
    swiper.removeSlide(slidesIndexes);
  }
  function Manipulation(_ref) {
    let {
      swiper: swiper
    } = _ref;
    Object.assign(swiper, {
      appendSlide: appendSlide.bind(swiper),
      prependSlide: prependSlide.bind(swiper),
      addSlide: addSlide.bind(swiper),
      removeSlide: removeSlide.bind(swiper),
      removeAllSlides: removeAllSlides.bind(swiper)
    });
  }
  function effectInit(params) {
    const {
      effect: effect,
      swiper: swiper,
      on: on,
      setTranslate: setTranslate,
      setTransition: setTransition,
      overwriteParams: overwriteParams,
      perspective: perspective,
      recreateShadows: recreateShadows,
      getEffectParams: getEffectParams
    } = params;
    on('beforeInit', () => {
      if (swiper.params.effect !== effect) return;
      swiper.classNames.push("".concat(swiper.params.containerModifierClass).concat(effect));
      if (perspective && perspective()) {
        swiper.classNames.push("".concat(swiper.params.containerModifierClass, "3d"));
      }
      const overwriteParamsResult = overwriteParams ? overwriteParams() : {};
      Object.assign(swiper.params, overwriteParamsResult);
      Object.assign(swiper.originalParams, overwriteParamsResult);
    });
    on('setTranslate', () => {
      if (swiper.params.effect !== effect) return;
      setTranslate();
    });
    on('setTransition', (_s, duration) => {
      if (swiper.params.effect !== effect) return;
      setTransition(duration);
    });
    on('transitionEnd', () => {
      if (swiper.params.effect !== effect) return;
      if (recreateShadows) {
        if (!getEffectParams || !getEffectParams().slideShadows) return; // remove shadows

        swiper.slides.each(slideEl => {
          const $slideEl = swiper.$(slideEl);
          $slideEl.find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').remove();
        }); // create new one

        recreateShadows();
      }
    });
    let requireUpdateOnVirtual;
    on('virtualUpdate', () => {
      if (swiper.params.effect !== effect) return;
      if (!swiper.slides.length) {
        requireUpdateOnVirtual = true;
      }
      requestAnimationFrame(() => {
        if (requireUpdateOnVirtual && swiper.slides && swiper.slides.length) {
          setTranslate();
          requireUpdateOnVirtual = false;
        }
      });
    });
  }
  function effectTarget(effectParams, $slideEl) {
    if (effectParams.transformEl) {
      return $slideEl.find(effectParams.transformEl).css({
        'backface-visibility': 'hidden',
        '-webkit-backface-visibility': 'hidden'
      });
    }
    return $slideEl;
  }
  function effectVirtualTransitionEnd(_ref) {
    let {
      swiper: swiper,
      duration: duration,
      transformEl: transformEl,
      allSlides: allSlides
    } = _ref;
    const {
      slides: slides,
      activeIndex: activeIndex,
      $wrapperEl: $wrapperEl
    } = swiper;
    if (swiper.params.virtualTranslate && duration !== 0) {
      let eventTriggered = false;
      let $transitionEndTarget;
      if (allSlides) {
        $transitionEndTarget = transformEl ? slides.find(transformEl) : slides;
      } else {
        $transitionEndTarget = transformEl ? slides.eq(activeIndex).find(transformEl) : slides.eq(activeIndex);
      }
      $transitionEndTarget.transitionEnd(() => {
        if (eventTriggered) return;
        if (!swiper || swiper.destroyed) return;
        eventTriggered = true;
        swiper.animating = false;
        const triggerEvents = ['webkitTransitionEnd', 'transitionend'];
        for (let i = 0; i < triggerEvents.length; i += 1) {
          $wrapperEl.trigger(triggerEvents[i]);
        }
      });
    }
  }
  function EffectFade(_ref) {
    let {
      swiper: swiper,
      extendParams: extendParams,
      on: on
    } = _ref;
    extendParams({
      fadeEffect: {
        crossFade: false,
        transformEl: null
      }
    });
    const setTranslate = () => {
      const {
        slides: slides
      } = swiper;
      const params = swiper.params.fadeEffect;
      for (let i = 0; i < slides.length; i += 1) {
        const $slideEl = swiper.slides.eq(i);
        const offset = $slideEl[0].swiperSlideOffset;
        let tx = -offset;
        if (!swiper.params.virtualTranslate) tx -= swiper.translate;
        let ty = 0;
        if (!swiper.isHorizontal()) {
          ty = tx;
          tx = 0;
        }
        const slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs($slideEl[0].progress), 0) : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
        const $targetEl = effectTarget(params, $slideEl);
        $targetEl.css({
          opacity: slideOpacity
        }).transform("translate3d(".concat(tx, "px, ").concat(ty, "px, 0px)"));
      }
    };
    const setTransition = duration => {
      const {
        transformEl: transformEl
      } = swiper.params.fadeEffect;
      const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
      $transitionElements.transition(duration);
      effectVirtualTransitionEnd({
        swiper: swiper,
        duration: duration,
        transformEl: transformEl,
        allSlides: true
      });
    };
    effectInit({
      effect: 'fade',
      swiper: swiper,
      on: on,
      setTranslate: setTranslate,
      setTransition: setTransition,
      overwriteParams: () => ({
        slidesPerView: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: true,
        spaceBetween: 0,
        virtualTranslate: !swiper.params.cssMode
      })
    });
  }
  function EffectCube(_ref) {
    let {
      swiper: swiper,
      extendParams: extendParams,
      on: on
    } = _ref;
    extendParams({
      cubeEffect: {
        slideShadows: true,
        shadow: true,
        shadowOffset: 20,
        shadowScale: 0.94
      }
    });
    const createSlideShadows = ($slideEl, progress, isHorizontal) => {
      let shadowBefore = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
      let shadowAfter = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
      if (shadowBefore.length === 0) {
        shadowBefore = $("<div class=\"swiper-slide-shadow-".concat(isHorizontal ? 'left' : 'top', "\"></div>"));
        $slideEl.append(shadowBefore);
      }
      if (shadowAfter.length === 0) {
        shadowAfter = $("<div class=\"swiper-slide-shadow-".concat(isHorizontal ? 'right' : 'bottom', "\"></div>"));
        $slideEl.append(shadowAfter);
      }
      if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
      if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
    };
    const recreateShadows = () => {
      // create new ones
      const isHorizontal = swiper.isHorizontal();
      swiper.slides.each(slideEl => {
        const progress = Math.max(Math.min(slideEl.progress, 1), -1);
        createSlideShadows($(slideEl), progress, isHorizontal);
      });
    };
    const setTranslate = () => {
      const {
        $el: $el,
        $wrapperEl: $wrapperEl,
        slides: slides,
        width: swiperWidth,
        height: swiperHeight,
        rtlTranslate: rtl,
        size: swiperSize,
        browser: browser
      } = swiper;
      const params = swiper.params.cubeEffect;
      const isHorizontal = swiper.isHorizontal();
      const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
      let wrapperRotate = 0;
      let $cubeShadowEl;
      if (params.shadow) {
        if (isHorizontal) {
          $cubeShadowEl = $wrapperEl.find('.swiper-cube-shadow');
          if ($cubeShadowEl.length === 0) {
            $cubeShadowEl = $('<div class="swiper-cube-shadow"></div>');
            $wrapperEl.append($cubeShadowEl);
          }
          $cubeShadowEl.css({
            height: "".concat(swiperWidth, "px")
          });
        } else {
          $cubeShadowEl = $el.find('.swiper-cube-shadow');
          if ($cubeShadowEl.length === 0) {
            $cubeShadowEl = $('<div class="swiper-cube-shadow"></div>');
            $el.append($cubeShadowEl);
          }
        }
      }
      for (let i = 0; i < slides.length; i += 1) {
        const $slideEl = slides.eq(i);
        let slideIndex = i;
        if (isVirtual) {
          slideIndex = parseInt($slideEl.attr('data-swiper-slide-index'), 10);
        }
        let slideAngle = slideIndex * 90;
        let round = Math.floor(slideAngle / 360);
        if (rtl) {
          slideAngle = -slideAngle;
          round = Math.floor(-slideAngle / 360);
        }
        const progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
        let tx = 0;
        let ty = 0;
        let tz = 0;
        if (slideIndex % 4 === 0) {
          tx = -round * 4 * swiperSize;
          tz = 0;
        } else if ((slideIndex - 1) % 4 === 0) {
          tx = 0;
          tz = -round * 4 * swiperSize;
        } else if ((slideIndex - 2) % 4 === 0) {
          tx = swiperSize + round * 4 * swiperSize;
          tz = swiperSize;
        } else if ((slideIndex - 3) % 4 === 0) {
          tx = -swiperSize;
          tz = 3 * swiperSize + swiperSize * 4 * round;
        }
        if (rtl) {
          tx = -tx;
        }
        if (!isHorizontal) {
          ty = tx;
          tx = 0;
        }
        const transform = "rotateX(".concat(isHorizontal ? 0 : -slideAngle, "deg) rotateY(").concat(isHorizontal ? slideAngle : 0, "deg) translate3d(").concat(tx, "px, ").concat(ty, "px, ").concat(tz, "px)");
        if (progress <= 1 && progress > -1) {
          wrapperRotate = slideIndex * 90 + progress * 90;
          if (rtl) wrapperRotate = -slideIndex * 90 - progress * 90;
        }
        $slideEl.transform(transform);
        if (params.slideShadows) {
          createSlideShadows($slideEl, progress, isHorizontal);
        }
      }
      $wrapperEl.css({
        '-webkit-transform-origin': "50% 50% -".concat(swiperSize / 2, "px"),
        'transform-origin': "50% 50% -".concat(swiperSize / 2, "px")
      });
      if (params.shadow) {
        if (isHorizontal) {
          $cubeShadowEl.transform("translate3d(0px, ".concat(swiperWidth / 2 + params.shadowOffset, "px, ").concat(-swiperWidth / 2, "px) rotateX(90deg) rotateZ(0deg) scale(").concat(params.shadowScale, ")"));
        } else {
          const shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
          const multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
          const scale1 = params.shadowScale;
          const scale2 = params.shadowScale / multiplier;
          const offset = params.shadowOffset;
          $cubeShadowEl.transform("scale3d(".concat(scale1, ", 1, ").concat(scale2, ") translate3d(0px, ").concat(swiperHeight / 2 + offset, "px, ").concat(-swiperHeight / 2 / scale2, "px) rotateX(-90deg)"));
        }
      }
      const zFactor = browser.isSafari || browser.isWebView ? -swiperSize / 2 : 0;
      $wrapperEl.transform("translate3d(0px,0,".concat(zFactor, "px) rotateX(").concat(swiper.isHorizontal() ? 0 : wrapperRotate, "deg) rotateY(").concat(swiper.isHorizontal() ? -wrapperRotate : 0, "deg)"));
      $wrapperEl[0].style.setProperty('--swiper-cube-translate-z', "".concat(zFactor, "px"));
    };
    const setTransition = duration => {
      const {
        $el: $el,
        slides: slides
      } = swiper;
      slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
      if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
        $el.find('.swiper-cube-shadow').transition(duration);
      }
    };
    effectInit({
      effect: 'cube',
      swiper: swiper,
      on: on,
      setTranslate: setTranslate,
      setTransition: setTransition,
      recreateShadows: recreateShadows,
      getEffectParams: () => swiper.params.cubeEffect,
      perspective: () => true,
      overwriteParams: () => ({
        slidesPerView: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: true,
        resistanceRatio: 0,
        spaceBetween: 0,
        centeredSlides: false,
        virtualTranslate: true
      })
    });
  }
  function createShadow(params, $slideEl, side) {
    const shadowClass = "swiper-slide-shadow".concat(side ? "-".concat(side) : '');
    const $shadowContainer = params.transformEl ? $slideEl.find(params.transformEl) : $slideEl;
    let $shadowEl = $shadowContainer.children(".".concat(shadowClass));
    if (!$shadowEl.length) {
      $shadowEl = $("<div class=\"swiper-slide-shadow".concat(side ? "-".concat(side) : '', "\"></div>"));
      $shadowContainer.append($shadowEl);
    }
    return $shadowEl;
  }
  function EffectFlip(_ref) {
    let {
      swiper: swiper,
      extendParams: extendParams,
      on: on
    } = _ref;
    extendParams({
      flipEffect: {
        slideShadows: true,
        limitRotation: true,
        transformEl: null
      }
    });
    const createSlideShadows = ($slideEl, progress, params) => {
      let shadowBefore = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
      let shadowAfter = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
      if (shadowBefore.length === 0) {
        shadowBefore = createShadow(params, $slideEl, swiper.isHorizontal() ? 'left' : 'top');
      }
      if (shadowAfter.length === 0) {
        shadowAfter = createShadow(params, $slideEl, swiper.isHorizontal() ? 'right' : 'bottom');
      }
      if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
      if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
    };
    const recreateShadows = () => {
      // Set shadows
      const params = swiper.params.flipEffect;
      swiper.slides.each(slideEl => {
        const $slideEl = $(slideEl);
        let progress = $slideEl[0].progress;
        if (swiper.params.flipEffect.limitRotation) {
          progress = Math.max(Math.min(slideEl.progress, 1), -1);
        }
        createSlideShadows($slideEl, progress, params);
      });
    };
    const setTranslate = () => {
      const {
        slides: slides,
        rtlTranslate: rtl
      } = swiper;
      const params = swiper.params.flipEffect;
      for (let i = 0; i < slides.length; i += 1) {
        const $slideEl = slides.eq(i);
        let progress = $slideEl[0].progress;
        if (swiper.params.flipEffect.limitRotation) {
          progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
        }
        const offset = $slideEl[0].swiperSlideOffset;
        const rotate = -180 * progress;
        let rotateY = rotate;
        let rotateX = 0;
        let tx = swiper.params.cssMode ? -offset - swiper.translate : -offset;
        let ty = 0;
        if (!swiper.isHorizontal()) {
          ty = tx;
          tx = 0;
          rotateX = -rotateY;
          rotateY = 0;
        } else if (rtl) {
          rotateY = -rotateY;
        }
        $slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length;
        if (params.slideShadows) {
          createSlideShadows($slideEl, progress, params);
        }
        const transform = "translate3d(".concat(tx, "px, ").concat(ty, "px, 0px) rotateX(").concat(rotateX, "deg) rotateY(").concat(rotateY, "deg)");
        const $targetEl = effectTarget(params, $slideEl);
        $targetEl.transform(transform);
      }
    };
    const setTransition = duration => {
      const {
        transformEl: transformEl
      } = swiper.params.flipEffect;
      const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
      $transitionElements.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
      effectVirtualTransitionEnd({
        swiper: swiper,
        duration: duration,
        transformEl: transformEl
      });
    };
    effectInit({
      effect: 'flip',
      swiper: swiper,
      on: on,
      setTranslate: setTranslate,
      setTransition: setTransition,
      recreateShadows: recreateShadows,
      getEffectParams: () => swiper.params.flipEffect,
      perspective: () => true,
      overwriteParams: () => ({
        slidesPerView: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: true,
        spaceBetween: 0,
        virtualTranslate: !swiper.params.cssMode
      })
    });
  }
  function EffectCoverflow(_ref) {
    let {
      swiper: swiper,
      extendParams: extendParams,
      on: on
    } = _ref;
    extendParams({
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        scale: 1,
        modifier: 1,
        slideShadows: true,
        transformEl: null
      }
    });
    const setTranslate = () => {
      const {
        width: swiperWidth,
        height: swiperHeight,
        slides: slides,
        slidesSizesGrid: slidesSizesGrid
      } = swiper;
      const params = swiper.params.coverflowEffect;
      const isHorizontal = swiper.isHorizontal();
      const transform = swiper.translate;
      const center = isHorizontal ? -transform + swiperWidth / 2 : -transform + swiperHeight / 2;
      const rotate = isHorizontal ? params.rotate : -params.rotate;
      const translate = params.depth; // Each slide offset from center

      for (let i = 0, length = slides.length; i < length; i += 1) {
        const $slideEl = slides.eq(i);
        const slideSize = slidesSizesGrid[i];
        const slideOffset = $slideEl[0].swiperSlideOffset;
        const centerOffset = (center - slideOffset - slideSize / 2) / slideSize;
        const offsetMultiplier = typeof params.modifier === 'function' ? params.modifier(centerOffset) : centerOffset * params.modifier;
        let rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
        let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier; // var rotateZ = 0

        let translateZ = -translate * Math.abs(offsetMultiplier);
        let stretch = params.stretch; // Allow percentage to make a relative stretch for responsive sliders

        if (typeof stretch === 'string' && stretch.indexOf('%') !== -1) {
          stretch = parseFloat(params.stretch) / 100 * slideSize;
        }
        let translateY = isHorizontal ? 0 : stretch * offsetMultiplier;
        let translateX = isHorizontal ? stretch * offsetMultiplier : 0;
        let scale = 1 - (1 - params.scale) * Math.abs(offsetMultiplier); // Fix for ultra small values

        if (Math.abs(translateX) < 0.001) translateX = 0;
        if (Math.abs(translateY) < 0.001) translateY = 0;
        if (Math.abs(translateZ) < 0.001) translateZ = 0;
        if (Math.abs(rotateY) < 0.001) rotateY = 0;
        if (Math.abs(rotateX) < 0.001) rotateX = 0;
        if (Math.abs(scale) < 0.001) scale = 0;
        const slideTransform = "translate3d(".concat(translateX, "px,").concat(translateY, "px,").concat(translateZ, "px)  rotateX(").concat(rotateX, "deg) rotateY(").concat(rotateY, "deg) scale(").concat(scale, ")");
        const $targetEl = effectTarget(params, $slideEl);
        $targetEl.transform(slideTransform);
        $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
        if (params.slideShadows) {
          // Set shadows
          let $shadowBeforeEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
          let $shadowAfterEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
          if ($shadowBeforeEl.length === 0) {
            $shadowBeforeEl = createShadow(params, $slideEl, isHorizontal ? 'left' : 'top');
          }
          if ($shadowAfterEl.length === 0) {
            $shadowAfterEl = createShadow(params, $slideEl, isHorizontal ? 'right' : 'bottom');
          }
          if ($shadowBeforeEl.length) $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
          if ($shadowAfterEl.length) $shadowAfterEl[0].style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;
        }
      }
    };
    const setTransition = duration => {
      const {
        transformEl: transformEl
      } = swiper.params.coverflowEffect;
      const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
      $transitionElements.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
    };
    effectInit({
      effect: 'coverflow',
      swiper: swiper,
      on: on,
      setTranslate: setTranslate,
      setTransition: setTransition,
      perspective: () => true,
      overwriteParams: () => ({
        watchSlidesProgress: true
      })
    });
  }
  function EffectCreative(_ref) {
    let {
      swiper: swiper,
      extendParams: extendParams,
      on: on
    } = _ref;
    extendParams({
      creativeEffect: {
        transformEl: null,
        limitProgress: 1,
        shadowPerProgress: false,
        progressMultiplier: 1,
        perspective: true,
        prev: {
          translate: [0, 0, 0],
          rotate: [0, 0, 0],
          opacity: 1,
          scale: 1
        },
        next: {
          translate: [0, 0, 0],
          rotate: [0, 0, 0],
          opacity: 1,
          scale: 1
        }
      }
    });
    const getTranslateValue = value => {
      if (typeof value === 'string') return value;
      return "".concat(value, "px");
    };
    const setTranslate = () => {
      const {
        slides: slides,
        $wrapperEl: $wrapperEl,
        slidesSizesGrid: slidesSizesGrid
      } = swiper;
      const params = swiper.params.creativeEffect;
      const {
        progressMultiplier: multiplier
      } = params;
      const isCenteredSlides = swiper.params.centeredSlides;
      if (isCenteredSlides) {
        const margin = slidesSizesGrid[0] / 2 - swiper.params.slidesOffsetBefore || 0;
        $wrapperEl.transform("translateX(calc(50% - ".concat(margin, "px))"));
      }
      for (let i = 0; i < slides.length; i += 1) {
        const $slideEl = slides.eq(i);
        const slideProgress = $slideEl[0].progress;
        const progress = Math.min(Math.max($slideEl[0].progress, -params.limitProgress), params.limitProgress);
        let originalProgress = progress;
        if (!isCenteredSlides) {
          originalProgress = Math.min(Math.max($slideEl[0].originalProgress, -params.limitProgress), params.limitProgress);
        }
        const offset = $slideEl[0].swiperSlideOffset;
        const t = [swiper.params.cssMode ? -offset - swiper.translate : -offset, 0, 0];
        const r = [0, 0, 0];
        let custom = false;
        if (!swiper.isHorizontal()) {
          t[1] = t[0];
          t[0] = 0;
        }
        let data = {
          translate: [0, 0, 0],
          rotate: [0, 0, 0],
          scale: 1,
          opacity: 1
        };
        if (progress < 0) {
          data = params.next;
          custom = true;
        } else if (progress > 0) {
          data = params.prev;
          custom = true;
        } // set translate

        t.forEach((value, index) => {
          t[index] = "calc(".concat(value, "px + (").concat(getTranslateValue(data.translate[index]), " * ").concat(Math.abs(progress * multiplier), "))");
        }); // set rotates

        r.forEach((value, index) => {
          r[index] = data.rotate[index] * Math.abs(progress * multiplier);
        });
        $slideEl[0].style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
        const translateString = t.join(', ');
        const rotateString = "rotateX(".concat(r[0], "deg) rotateY(").concat(r[1], "deg) rotateZ(").concat(r[2], "deg)");
        const scaleString = originalProgress < 0 ? "scale(".concat(1 + (1 - data.scale) * originalProgress * multiplier, ")") : "scale(".concat(1 - (1 - data.scale) * originalProgress * multiplier, ")");
        const opacityString = originalProgress < 0 ? 1 + (1 - data.opacity) * originalProgress * multiplier : 1 - (1 - data.opacity) * originalProgress * multiplier;
        const transform = "translate3d(".concat(translateString, ") ").concat(rotateString, " ").concat(scaleString); // Set shadows

        if (custom && data.shadow || !custom) {
          let $shadowEl = $slideEl.children('.swiper-slide-shadow');
          if ($shadowEl.length === 0 && data.shadow) {
            $shadowEl = createShadow(params, $slideEl);
          }
          if ($shadowEl.length) {
            const shadowOpacity = params.shadowPerProgress ? progress * (1 / params.limitProgress) : progress;
            $shadowEl[0].style.opacity = Math.min(Math.max(Math.abs(shadowOpacity), 0), 1);
          }
        }
        const $targetEl = effectTarget(params, $slideEl);
        $targetEl.transform(transform).css({
          opacity: opacityString
        });
        if (data.origin) {
          $targetEl.css('transform-origin', data.origin);
        }
      }
    };
    const setTransition = duration => {
      const {
        transformEl: transformEl
      } = swiper.params.creativeEffect;
      const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
      $transitionElements.transition(duration).find('.swiper-slide-shadow').transition(duration);
      effectVirtualTransitionEnd({
        swiper: swiper,
        duration: duration,
        transformEl: transformEl,
        allSlides: true
      });
    };
    effectInit({
      effect: 'creative',
      swiper: swiper,
      on: on,
      setTranslate: setTranslate,
      setTransition: setTransition,
      perspective: () => swiper.params.creativeEffect.perspective,
      overwriteParams: () => ({
        watchSlidesProgress: true,
        virtualTranslate: !swiper.params.cssMode
      })
    });
  }
  function EffectCards(_ref) {
    let {
      swiper: swiper,
      extendParams: extendParams,
      on: on
    } = _ref;
    extendParams({
      cardsEffect: {
        slideShadows: true,
        transformEl: null,
        rotate: true,
        perSlideRotate: 2,
        perSlideOffset: 8
      }
    });
    const setTranslate = () => {
      const {
        slides: slides,
        activeIndex: activeIndex
      } = swiper;
      const params = swiper.params.cardsEffect;
      const {
        startTranslate: startTranslate,
        isTouched: isTouched
      } = swiper.touchEventsData;
      const currentTranslate = swiper.translate;
      for (let i = 0; i < slides.length; i += 1) {
        const $slideEl = slides.eq(i);
        const slideProgress = $slideEl[0].progress;
        const progress = Math.min(Math.max(slideProgress, -4), 4);
        let offset = $slideEl[0].swiperSlideOffset;
        if (swiper.params.centeredSlides && !swiper.params.cssMode) {
          swiper.$wrapperEl.transform("translateX(".concat(swiper.minTranslate(), "px)"));
        }
        if (swiper.params.centeredSlides && swiper.params.cssMode) {
          offset -= slides[0].swiperSlideOffset;
        }
        let tX = swiper.params.cssMode ? -offset - swiper.translate : -offset;
        let tY = 0;
        const tZ = -100 * Math.abs(progress);
        let scale = 1;
        let rotate = -params.perSlideRotate * progress;
        let tXAdd = params.perSlideOffset - Math.abs(progress) * 0.75;
        const slideIndex = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.from + i : i;
        const isSwipeToNext = (slideIndex === activeIndex || slideIndex === activeIndex - 1) && progress > 0 && progress < 1 && (isTouched || swiper.params.cssMode) && currentTranslate < startTranslate;
        const isSwipeToPrev = (slideIndex === activeIndex || slideIndex === activeIndex + 1) && progress < 0 && progress > -1 && (isTouched || swiper.params.cssMode) && currentTranslate > startTranslate;
        if (isSwipeToNext || isSwipeToPrev) {
          const subProgress = (1 - Math.abs((Math.abs(progress) - 0.5) / 0.5)) ** 0.5;
          rotate += -28 * progress * subProgress;
          scale += -0.5 * subProgress;
          tXAdd += 96 * subProgress;
          tY = "".concat(-25 * subProgress * Math.abs(progress), "%");
        }
        if (progress < 0) {
          // next
          tX = "calc(".concat(tX, "px + (").concat(tXAdd * Math.abs(progress), "%))");
        } else if (progress > 0) {
          // prev
          tX = "calc(".concat(tX, "px + (-").concat(tXAdd * Math.abs(progress), "%))");
        } else {
          tX = "".concat(tX, "px");
        }
        if (!swiper.isHorizontal()) {
          const prevY = tY;
          tY = tX;
          tX = prevY;
        }
        const scaleString = progress < 0 ? "".concat(1 + (1 - scale) * progress) : "".concat(1 - (1 - scale) * progress);
        const transform = "\n        translate3d(".concat(tX, ", ").concat(tY, ", ").concat(tZ, "px)\n        rotateZ(").concat(params.rotate ? rotate : 0, "deg)\n        scale(").concat(scaleString, ")\n      ");
        if (params.slideShadows) {
          // Set shadows
          let $shadowEl = $slideEl.find('.swiper-slide-shadow');
          if ($shadowEl.length === 0) {
            $shadowEl = createShadow(params, $slideEl);
          }
          if ($shadowEl.length) $shadowEl[0].style.opacity = Math.min(Math.max((Math.abs(progress) - 0.5) / 0.5, 0), 1);
        }
        $slideEl[0].style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
        const $targetEl = effectTarget(params, $slideEl);
        $targetEl.transform(transform);
      }
    };
    const setTransition = duration => {
      const {
        transformEl: transformEl
      } = swiper.params.cardsEffect;
      const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
      $transitionElements.transition(duration).find('.swiper-slide-shadow').transition(duration);
      effectVirtualTransitionEnd({
        swiper: swiper,
        duration: duration,
        transformEl: transformEl
      });
    };
    effectInit({
      effect: 'cards',
      swiper: swiper,
      on: on,
      setTranslate: setTranslate,
      setTransition: setTransition,
      perspective: () => true,
      overwriteParams: () => ({
        watchSlidesProgress: true,
        virtualTranslate: !swiper.params.cssMode
      })
    });
  }

  // Swiper Class
  const modules = [Virtual, Keyboard, Mousewheel, Navigation, Pagination, Scrollbar, Parallax, Zoom, Lazy, Controller, A11y, History, HashNavigation, Autoplay, Thumb, freeMode, Grid, Manipulation, EffectFade, EffectCube, EffectFlip, EffectCoverflow, EffectCreative, EffectCards];
  Swiper.use(modules);
  return Swiper;
});
},{}],"../node_modules/@fancyapps/ui/dist/fancybox.esm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Panzoom = exports.Fancybox = exports.Carousel = void 0;
// @fancyapps/ui/Fancybox v4.0.31
const t = t => "object" == typeof t && null !== t && t.constructor === Object && "[object Object]" === Object.prototype.toString.call(t),
  e = (...i) => {
    let s = !1;
    "boolean" == typeof i[0] && (s = i.shift());
    let o = i[0];
    if (!o || "object" != typeof o) throw new Error("extendee must be an object");
    const n = i.slice(1),
      a = n.length;
    for (let i = 0; i < a; i++) {
      const a = n[i];
      for (let i in a) if (a.hasOwnProperty(i)) {
        const n = a[i];
        if (s && (Array.isArray(n) || t(n))) {
          const t = Array.isArray(n) ? [] : {};
          o[i] = e(!0, o.hasOwnProperty(i) ? o[i] : t, n);
        } else o[i] = n;
      }
    }
    return o;
  },
  i = (t, e = 1e4) => (t = parseFloat(t) || 0, Math.round((t + Number.EPSILON) * e) / e),
  s = function (t) {
    return !!(t && "object" == typeof t && t instanceof Element && t !== document.body) && !t.__Panzoom && (function (t) {
      const e = getComputedStyle(t)["overflow-y"],
        i = getComputedStyle(t)["overflow-x"],
        s = ("scroll" === e || "auto" === e) && Math.abs(t.scrollHeight - t.clientHeight) > 1,
        o = ("scroll" === i || "auto" === i) && Math.abs(t.scrollWidth - t.clientWidth) > 1;
      return s || o;
    }(t) ? t : s(t.parentNode));
  },
  o = "undefined" != typeof window && window.ResizeObserver || class {
    constructor(t) {
      this.observables = [], this.boundCheck = this.check.bind(this), this.boundCheck(), this.callback = t;
    }
    observe(t) {
      if (this.observables.some(e => e.el === t)) return;
      const e = {
        el: t,
        size: {
          height: t.clientHeight,
          width: t.clientWidth
        }
      };
      this.observables.push(e);
    }
    unobserve(t) {
      this.observables = this.observables.filter(e => e.el !== t);
    }
    disconnect() {
      this.observables = [];
    }
    check() {
      const t = this.observables.filter(t => {
        const e = t.el.clientHeight,
          i = t.el.clientWidth;
        if (t.size.height !== e || t.size.width !== i) return t.size.height = e, t.size.width = i, !0;
      }).map(t => t.el);
      t.length > 0 && this.callback(t), window.requestAnimationFrame(this.boundCheck);
    }
  };
class n {
  constructor(t) {
    this.id = self.Touch && t instanceof Touch ? t.identifier : -1, this.pageX = t.pageX, this.pageY = t.pageY, this.clientX = t.clientX, this.clientY = t.clientY;
  }
}
const a = (t, e) => e ? Math.sqrt((e.clientX - t.clientX) ** 2 + (e.clientY - t.clientY) ** 2) : 0,
  r = (t, e) => e ? {
    clientX: (t.clientX + e.clientX) / 2,
    clientY: (t.clientY + e.clientY) / 2
  } : t;
class h {
  constructor(t, {
    start: e = () => !0,
    move: i = () => {},
    end: s = () => {}
  } = {}) {
    this._element = t, this.startPointers = [], this.currentPointers = [], this._pointerStart = t => {
      if (t.buttons > 0 && 0 !== t.button) return;
      const e = new n(t);
      this.currentPointers.some(t => t.id === e.id) || this._triggerPointerStart(e, t) && (window.addEventListener("mousemove", this._move), window.addEventListener("mouseup", this._pointerEnd));
    }, this._touchStart = t => {
      for (const e of Array.from(t.changedTouches || [])) this._triggerPointerStart(new n(e), t);
    }, this._move = t => {
      const e = this.currentPointers.slice(),
        i = (t => "changedTouches" in t)(t) ? Array.from(t.changedTouches).map(t => new n(t)) : [new n(t)];
      for (const t of i) {
        const e = this.currentPointers.findIndex(e => e.id === t.id);
        e < 0 || (this.currentPointers[e] = t);
      }
      this._moveCallback(e, this.currentPointers.slice(), t);
    }, this._triggerPointerEnd = (t, e) => {
      const i = this.currentPointers.findIndex(e => e.id === t.id);
      return !(i < 0) && (this.currentPointers.splice(i, 1), this.startPointers.splice(i, 1), this._endCallback(t, e), !0);
    }, this._pointerEnd = t => {
      t.buttons > 0 && 0 !== t.button || this._triggerPointerEnd(new n(t), t) && (window.removeEventListener("mousemove", this._move, {
        passive: !1
      }), window.removeEventListener("mouseup", this._pointerEnd, {
        passive: !1
      }));
    }, this._touchEnd = t => {
      for (const e of Array.from(t.changedTouches || [])) this._triggerPointerEnd(new n(e), t);
    }, this._startCallback = e, this._moveCallback = i, this._endCallback = s, this._element.addEventListener("mousedown", this._pointerStart, {
      passive: !1
    }), this._element.addEventListener("touchstart", this._touchStart, {
      passive: !1
    }), this._element.addEventListener("touchmove", this._move, {
      passive: !1
    }), this._element.addEventListener("touchend", this._touchEnd), this._element.addEventListener("touchcancel", this._touchEnd);
  }
  stop() {
    this._element.removeEventListener("mousedown", this._pointerStart, {
      passive: !1
    }), this._element.removeEventListener("touchstart", this._touchStart, {
      passive: !1
    }), this._element.removeEventListener("touchmove", this._move, {
      passive: !1
    }), this._element.removeEventListener("touchend", this._touchEnd), this._element.removeEventListener("touchcancel", this._touchEnd), window.removeEventListener("mousemove", this._move), window.removeEventListener("mouseup", this._pointerEnd);
  }
  _triggerPointerStart(t, e) {
    return !!this._startCallback(t, e) && (this.currentPointers.push(t), this.startPointers.push(t), !0);
  }
}
class l {
  constructor(t = {}) {
    this.options = e(!0, {}, t), this.plugins = [], this.events = {};
    for (const t of ["on", "once"]) for (const e of Object.entries(this.options[t] || {})) this[t](...e);
  }
  option(t, e, ...i) {
    t = String(t);
    let s = (o = t, n = this.options, o.split(".").reduce(function (t, e) {
      return t && t[e];
    }, n));
    var o, n;
    return "function" == typeof s && (s = s.call(this, this, ...i)), void 0 === s ? e : s;
  }
  localize(t, e = []) {
    return t = (t = String(t).replace(/\{\{(\w+).?(\w+)?\}\}/g, (t, i, s) => {
      let o = "";
      s ? o = this.option(`${i[0] + i.toLowerCase().substring(1)}.l10n.${s}`) : i && (o = this.option(`l10n.${i}`)), o || (o = t);
      for (let t = 0; t < e.length; t++) o = o.split(e[t][0]).join(e[t][1]);
      return o;
    })).replace(/\{\{(.*)\}\}/, (t, e) => e);
  }
  on(e, i) {
    if (t(e)) {
      for (const t of Object.entries(e)) this.on(...t);
      return this;
    }
    return String(e).split(" ").forEach(t => {
      const e = this.events[t] = this.events[t] || [];
      -1 == e.indexOf(i) && e.push(i);
    }), this;
  }
  once(e, i) {
    if (t(e)) {
      for (const t of Object.entries(e)) this.once(...t);
      return this;
    }
    return String(e).split(" ").forEach(t => {
      const e = (...s) => {
        this.off(t, e), i.call(this, this, ...s);
      };
      e._ = i, this.on(t, e);
    }), this;
  }
  off(e, i) {
    if (!t(e)) return e.split(" ").forEach(t => {
      const e = this.events[t];
      if (!e || !e.length) return this;
      let s = -1;
      for (let t = 0, o = e.length; t < o; t++) {
        const o = e[t];
        if (o && (o === i || o._ === i)) {
          s = t;
          break;
        }
      }
      -1 != s && e.splice(s, 1);
    }), this;
    for (const t of Object.entries(e)) this.off(...t);
  }
  trigger(t, ...e) {
    for (const i of [...(this.events[t] || [])].slice()) if (i && !1 === i.call(this, this, ...e)) return !1;
    for (const i of [...(this.events["*"] || [])].slice()) if (i && !1 === i.call(this, t, this, ...e)) return !1;
    return !0;
  }
  attachPlugins(t) {
    const i = {};
    for (const [s, o] of Object.entries(t || {})) !1 === this.options[s] || this.plugins[s] || (this.options[s] = e({}, o.defaults || {}, this.options[s]), i[s] = new o(this));
    for (const [t, e] of Object.entries(i)) e.attach(this);
    return this.plugins = Object.assign({}, this.plugins, i), this;
  }
  detachPlugins() {
    for (const t in this.plugins) {
      let e;
      (e = this.plugins[t]) && "function" == typeof e.detach && e.detach(this);
    }
    return this.plugins = {}, this;
  }
}
const c = {
  touch: !0,
  zoom: !0,
  pinchToZoom: !0,
  panOnlyZoomed: !1,
  lockAxis: !1,
  friction: .64,
  decelFriction: .88,
  zoomFriction: .74,
  bounceForce: .2,
  baseScale: 1,
  minScale: 1,
  maxScale: 2,
  step: .5,
  textSelection: !1,
  click: "toggleZoom",
  wheel: "zoom",
  wheelFactor: 42,
  wheelLimit: 5,
  draggableClass: "is-draggable",
  draggingClass: "is-dragging",
  ratio: 1
};
class d extends l {
  constructor(t, i = {}) {
    super(e(!0, {}, c, i)), this.state = "init", this.$container = t;
    for (const t of ["onLoad", "onWheel", "onClick"]) this[t] = this[t].bind(this);
    this.initLayout(), this.resetValues(), this.attachPlugins(d.Plugins), this.trigger("init"), this.updateMetrics(), this.attachEvents(), this.trigger("ready"), !1 === this.option("centerOnStart") ? this.state = "ready" : this.panTo({
      friction: 0
    }), t.__Panzoom = this;
  }
  initLayout() {
    const t = this.$container;
    if (!(t instanceof HTMLElement)) throw new Error("Panzoom: Container not found");
    const e = this.option("content") || t.querySelector(".panzoom__content");
    if (!e) throw new Error("Panzoom: Content not found");
    this.$content = e;
    let i = this.option("viewport") || t.querySelector(".panzoom__viewport");
    i || !1 === this.option("wrapInner") || (i = document.createElement("div"), i.classList.add("panzoom__viewport"), i.append(...t.childNodes), t.appendChild(i)), this.$viewport = i || e.parentNode;
  }
  resetValues() {
    this.updateRate = this.option("updateRate", /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ? 250 : 24), this.container = {
      width: 0,
      height: 0
    }, this.viewport = {
      width: 0,
      height: 0
    }, this.content = {
      origWidth: 0,
      origHeight: 0,
      width: 0,
      height: 0,
      x: this.option("x", 0),
      y: this.option("y", 0),
      scale: this.option("baseScale")
    }, this.transform = {
      x: 0,
      y: 0,
      scale: 1
    }, this.resetDragPosition();
  }
  onLoad(t) {
    this.updateMetrics(), this.panTo({
      scale: this.option("baseScale"),
      friction: 0
    }), this.trigger("load", t);
  }
  onClick(t) {
    if (t.defaultPrevented) return;
    if (document.activeElement && document.activeElement.closest("[contenteditable]")) return;
    if (this.option("textSelection") && window.getSelection().toString().length && (!t.target || !t.target.hasAttribute("data-fancybox-close"))) return void t.stopPropagation();
    const e = this.$content.getClientRects()[0];
    if ("ready" !== this.state && (this.dragPosition.midPoint || Math.abs(e.top - this.dragStart.rect.top) > 1 || Math.abs(e.left - this.dragStart.rect.left) > 1)) return t.preventDefault(), void t.stopPropagation();
    !1 !== this.trigger("click", t) && this.option("zoom") && "toggleZoom" === this.option("click") && (t.preventDefault(), t.stopPropagation(), this.zoomWithClick(t));
  }
  onWheel(t) {
    !1 !== this.trigger("wheel", t) && this.option("zoom") && this.option("wheel") && this.zoomWithWheel(t);
  }
  zoomWithWheel(t) {
    void 0 === this.changedDelta && (this.changedDelta = 0);
    const e = Math.max(-1, Math.min(1, -t.deltaY || -t.deltaX || t.wheelDelta || -t.detail)),
      i = this.content.scale;
    let s = i * (100 + e * this.option("wheelFactor")) / 100;
    if (e < 0 && Math.abs(i - this.option("minScale")) < .01 || e > 0 && Math.abs(i - this.option("maxScale")) < .01 ? (this.changedDelta += Math.abs(e), s = i) : (this.changedDelta = 0, s = Math.max(Math.min(s, this.option("maxScale")), this.option("minScale"))), this.changedDelta > this.option("wheelLimit")) return;
    if (t.preventDefault(), s === i) return;
    const o = this.$content.getBoundingClientRect(),
      n = t.clientX - o.left,
      a = t.clientY - o.top;
    this.zoomTo(s, {
      x: n,
      y: a
    });
  }
  zoomWithClick(t) {
    const e = this.$content.getClientRects()[0],
      i = t.clientX - e.left,
      s = t.clientY - e.top;
    this.toggleZoom({
      x: i,
      y: s
    });
  }
  attachEvents() {
    this.$content.addEventListener("load", this.onLoad), this.$container.addEventListener("wheel", this.onWheel, {
      passive: !1
    }), this.$container.addEventListener("click", this.onClick, {
      passive: !1
    }), this.initObserver();
    const t = new h(this.$container, {
      start: (e, i) => {
        if (!this.option("touch")) return !1;
        if (this.velocity.scale < 0) return !1;
        const o = i.composedPath()[0];
        if (!t.currentPointers.length) {
          if (-1 !== ["BUTTON", "TEXTAREA", "OPTION", "INPUT", "SELECT", "VIDEO"].indexOf(o.nodeName)) return !1;
          if (this.option("textSelection") && ((t, e, i) => {
            const s = t.childNodes,
              o = document.createRange();
            for (let t = 0; t < s.length; t++) {
              const n = s[t];
              if (n.nodeType !== Node.TEXT_NODE) continue;
              o.selectNodeContents(n);
              const a = o.getBoundingClientRect();
              if (e >= a.left && i >= a.top && e <= a.right && i <= a.bottom) return n;
            }
            return !1;
          })(o, e.clientX, e.clientY)) return !1;
        }
        return !s(o) && !1 !== this.trigger("touchStart", i) && ("mousedown" === i.type && i.preventDefault(), this.state = "pointerdown", this.resetDragPosition(), this.dragPosition.midPoint = null, this.dragPosition.time = Date.now(), !0);
      },
      move: (e, i, s) => {
        if ("pointerdown" !== this.state) return;
        if (!1 === this.trigger("touchMove", s)) return void s.preventDefault();
        if (i.length < 2 && !0 === this.option("panOnlyZoomed") && this.content.width <= this.viewport.width && this.content.height <= this.viewport.height && this.transform.scale <= this.option("baseScale")) return;
        if (i.length > 1 && (!this.option("zoom") || !1 === this.option("pinchToZoom"))) return;
        const o = r(e[0], e[1]),
          n = r(i[0], i[1]),
          h = n.clientX - o.clientX,
          l = n.clientY - o.clientY,
          c = a(e[0], e[1]),
          d = a(i[0], i[1]),
          u = c && d ? d / c : 1;
        this.dragOffset.x += h, this.dragOffset.y += l, this.dragOffset.scale *= u, this.dragOffset.time = Date.now() - this.dragPosition.time;
        const f = 1 === this.dragStart.scale && this.option("lockAxis");
        if (f && !this.lockAxis) {
          if (Math.abs(this.dragOffset.x) < 6 && Math.abs(this.dragOffset.y) < 6) return void s.preventDefault();
          const t = Math.abs(180 * Math.atan2(this.dragOffset.y, this.dragOffset.x) / Math.PI);
          this.lockAxis = t > 45 && t < 135 ? "y" : "x";
        }
        if ("xy" === f || "y" !== this.lockAxis) {
          if (s.preventDefault(), s.stopPropagation(), s.stopImmediatePropagation(), this.lockAxis && (this.dragOffset["x" === this.lockAxis ? "y" : "x"] = 0), this.$container.classList.add(this.option("draggingClass")), this.transform.scale === this.option("baseScale") && "y" === this.lockAxis || (this.dragPosition.x = this.dragStart.x + this.dragOffset.x), this.transform.scale === this.option("baseScale") && "x" === this.lockAxis || (this.dragPosition.y = this.dragStart.y + this.dragOffset.y), this.dragPosition.scale = this.dragStart.scale * this.dragOffset.scale, i.length > 1) {
            const e = r(t.startPointers[0], t.startPointers[1]),
              i = e.clientX - this.dragStart.rect.x,
              s = e.clientY - this.dragStart.rect.y,
              {
                deltaX: o,
                deltaY: a
              } = this.getZoomDelta(this.content.scale * this.dragOffset.scale, i, s);
            this.dragPosition.x -= o, this.dragPosition.y -= a, this.dragPosition.midPoint = n;
          } else this.setDragResistance();
          this.transform = {
            x: this.dragPosition.x,
            y: this.dragPosition.y,
            scale: this.dragPosition.scale
          }, this.startAnimation();
        }
      },
      end: (e, i) => {
        if ("pointerdown" !== this.state) return;
        if (this._dragOffset = {
          ...this.dragOffset
        }, t.currentPointers.length) return void this.resetDragPosition();
        if (this.state = "decel", this.friction = this.option("decelFriction"), this.recalculateTransform(), this.$container.classList.remove(this.option("draggingClass")), !1 === this.trigger("touchEnd", i)) return;
        if ("decel" !== this.state) return;
        const s = this.option("minScale");
        if (this.transform.scale < s) return void this.zoomTo(s, {
          friction: .64
        });
        const o = this.option("maxScale");
        if (this.transform.scale - o > .01) {
          const t = this.dragPosition.midPoint || e,
            i = this.$content.getClientRects()[0];
          this.zoomTo(o, {
            friction: .64,
            x: t.clientX - i.left,
            y: t.clientY - i.top
          });
        } else ;
      }
    });
    this.pointerTracker = t;
  }
  initObserver() {
    this.resizeObserver || (this.resizeObserver = new o(() => {
      this.updateTimer || (this.updateTimer = setTimeout(() => {
        const t = this.$container.getBoundingClientRect();
        t.width && t.height ? ((Math.abs(t.width - this.container.width) > 1 || Math.abs(t.height - this.container.height) > 1) && (this.isAnimating() && this.endAnimation(!0), this.updateMetrics(), this.panTo({
          x: this.content.x,
          y: this.content.y,
          scale: this.option("baseScale"),
          friction: 0
        })), this.updateTimer = null) : this.updateTimer = null;
      }, this.updateRate));
    }), this.resizeObserver.observe(this.$container));
  }
  resetDragPosition() {
    this.lockAxis = null, this.friction = this.option("friction"), this.velocity = {
      x: 0,
      y: 0,
      scale: 0
    };
    const {
      x: t,
      y: e,
      scale: i
    } = this.content;
    this.dragStart = {
      rect: this.$content.getBoundingClientRect(),
      x: t,
      y: e,
      scale: i
    }, this.dragPosition = {
      ...this.dragPosition,
      x: t,
      y: e,
      scale: i
    }, this.dragOffset = {
      x: 0,
      y: 0,
      scale: 1,
      time: 0
    };
  }
  updateMetrics(t) {
    !0 !== t && this.trigger("beforeUpdate");
    const e = this.$container,
      s = this.$content,
      o = this.$viewport,
      n = s instanceof HTMLImageElement,
      a = this.option("zoom"),
      r = this.option("resizeParent", a);
    let h = this.option("width"),
      l = this.option("height"),
      c = h || (d = s, Math.max(parseFloat(d.naturalWidth || 0), parseFloat(d.width && d.width.baseVal && d.width.baseVal.value || 0), parseFloat(d.offsetWidth || 0), parseFloat(d.scrollWidth || 0)));
    var d;
    let u = l || (t => Math.max(parseFloat(t.naturalHeight || 0), parseFloat(t.height && t.height.baseVal && t.height.baseVal.value || 0), parseFloat(t.offsetHeight || 0), parseFloat(t.scrollHeight || 0)))(s);
    Object.assign(s.style, {
      width: h ? `${h}px` : "",
      height: l ? `${l}px` : "",
      maxWidth: "",
      maxHeight: ""
    }), r && Object.assign(o.style, {
      width: "",
      height: ""
    });
    const f = this.option("ratio");
    c = i(c * f), u = i(u * f), h = c, l = u;
    const g = s.getBoundingClientRect(),
      p = o.getBoundingClientRect(),
      m = o == e ? p : e.getBoundingClientRect();
    let y = Math.max(o.offsetWidth, i(p.width)),
      v = Math.max(o.offsetHeight, i(p.height)),
      b = window.getComputedStyle(o);
    if (y -= parseFloat(b.paddingLeft) + parseFloat(b.paddingRight), v -= parseFloat(b.paddingTop) + parseFloat(b.paddingBottom), this.viewport.width = y, this.viewport.height = v, a) {
      if (Math.abs(c - g.width) > .1 || Math.abs(u - g.height) > .1) {
        const t = ((t, e, i, s) => {
          const o = Math.min(i / t || 0, s / e);
          return {
            width: t * o || 0,
            height: e * o || 0
          };
        })(c, u, Math.min(c, g.width), Math.min(u, g.height));
        h = i(t.width), l = i(t.height);
      }
      Object.assign(s.style, {
        width: `${h}px`,
        height: `${l}px`,
        transform: ""
      });
    }
    if (r && (Object.assign(o.style, {
      width: `${h}px`,
      height: `${l}px`
    }), this.viewport = {
      ...this.viewport,
      width: h,
      height: l
    }), n && a && "function" != typeof this.options.maxScale) {
      const t = this.option("maxScale");
      this.options.maxScale = function () {
        return this.content.origWidth > 0 && this.content.fitWidth > 0 ? this.content.origWidth / this.content.fitWidth : t;
      };
    }
    this.content = {
      ...this.content,
      origWidth: c,
      origHeight: u,
      fitWidth: h,
      fitHeight: l,
      width: h,
      height: l,
      scale: 1,
      isZoomable: a
    }, this.container = {
      width: m.width,
      height: m.height
    }, !0 !== t && this.trigger("afterUpdate");
  }
  zoomIn(t) {
    this.zoomTo(this.content.scale + (t || this.option("step")));
  }
  zoomOut(t) {
    this.zoomTo(this.content.scale - (t || this.option("step")));
  }
  toggleZoom(t = {}) {
    const e = this.option("maxScale"),
      i = this.option("baseScale"),
      s = this.content.scale > i + .5 * (e - i) ? i : e;
    this.zoomTo(s, t);
  }
  zoomTo(t = this.option("baseScale"), {
    x: e = null,
    y: s = null
  } = {}) {
    t = Math.max(Math.min(t, this.option("maxScale")), this.option("minScale"));
    const o = i(this.content.scale / (this.content.width / this.content.fitWidth), 1e7);
    null === e && (e = this.content.width * o * .5), null === s && (s = this.content.height * o * .5);
    const {
      deltaX: n,
      deltaY: a
    } = this.getZoomDelta(t, e, s);
    e = this.content.x - n, s = this.content.y - a, this.panTo({
      x: e,
      y: s,
      scale: t,
      friction: this.option("zoomFriction")
    });
  }
  getZoomDelta(t, e = 0, i = 0) {
    const s = this.content.fitWidth * this.content.scale,
      o = this.content.fitHeight * this.content.scale,
      n = e > 0 && s ? e / s : 0,
      a = i > 0 && o ? i / o : 0;
    return {
      deltaX: (this.content.fitWidth * t - s) * n,
      deltaY: (this.content.fitHeight * t - o) * a
    };
  }
  panTo({
    x: t = this.content.x,
    y: e = this.content.y,
    scale: i,
    friction: s = this.option("friction"),
    ignoreBounds: o = !1
  } = {}) {
    if (i = i || this.content.scale || 1, !o) {
      const {
        boundX: s,
        boundY: o
      } = this.getBounds(i);
      s && (t = Math.max(Math.min(t, s.to), s.from)), o && (e = Math.max(Math.min(e, o.to), o.from));
    }
    this.friction = s, this.transform = {
      ...this.transform,
      x: t,
      y: e,
      scale: i
    }, s ? (this.state = "panning", this.velocity = {
      x: (1 / this.friction - 1) * (t - this.content.x),
      y: (1 / this.friction - 1) * (e - this.content.y),
      scale: (1 / this.friction - 1) * (i - this.content.scale)
    }, this.startAnimation()) : this.endAnimation();
  }
  startAnimation() {
    this.rAF ? cancelAnimationFrame(this.rAF) : this.trigger("startAnimation"), this.rAF = requestAnimationFrame(() => this.animate());
  }
  animate() {
    if (this.setEdgeForce(), this.setDragForce(), this.velocity.x *= this.friction, this.velocity.y *= this.friction, this.velocity.scale *= this.friction, this.content.x += this.velocity.x, this.content.y += this.velocity.y, this.content.scale += this.velocity.scale, this.isAnimating()) this.setTransform();else if ("pointerdown" !== this.state) return void this.endAnimation();
    this.rAF = requestAnimationFrame(() => this.animate());
  }
  getBounds(t) {
    let e = this.boundX,
      s = this.boundY;
    if (void 0 !== e && void 0 !== s) return {
      boundX: e,
      boundY: s
    };
    e = {
      from: 0,
      to: 0
    }, s = {
      from: 0,
      to: 0
    }, t = t || this.transform.scale;
    const o = this.content.fitWidth * t,
      n = this.content.fitHeight * t,
      a = this.viewport.width,
      r = this.viewport.height;
    if (o < a) {
      const t = i(.5 * (a - o));
      e.from = t, e.to = t;
    } else e.from = i(a - o);
    if (n < r) {
      const t = .5 * (r - n);
      s.from = t, s.to = t;
    } else s.from = i(r - n);
    return {
      boundX: e,
      boundY: s
    };
  }
  setEdgeForce() {
    if ("decel" !== this.state) return;
    const t = this.option("bounceForce"),
      {
        boundX: e,
        boundY: i
      } = this.getBounds(Math.max(this.transform.scale, this.content.scale));
    let s, o, n, a;
    if (e && (s = this.content.x < e.from, o = this.content.x > e.to), i && (n = this.content.y < i.from, a = this.content.y > i.to), s || o) {
      let i = ((s ? e.from : e.to) - this.content.x) * t;
      const o = this.content.x + (this.velocity.x + i) / this.friction;
      o >= e.from && o <= e.to && (i += this.velocity.x), this.velocity.x = i, this.recalculateTransform();
    }
    if (n || a) {
      let e = ((n ? i.from : i.to) - this.content.y) * t;
      const s = this.content.y + (e + this.velocity.y) / this.friction;
      s >= i.from && s <= i.to && (e += this.velocity.y), this.velocity.y = e, this.recalculateTransform();
    }
  }
  setDragResistance() {
    if ("pointerdown" !== this.state) return;
    const {
      boundX: t,
      boundY: e
    } = this.getBounds(this.dragPosition.scale);
    let i, s, o, n;
    if (t && (i = this.dragPosition.x < t.from, s = this.dragPosition.x > t.to), e && (o = this.dragPosition.y < e.from, n = this.dragPosition.y > e.to), (i || s) && (!i || !s)) {
      const e = i ? t.from : t.to,
        s = e - this.dragPosition.x;
      this.dragPosition.x = e - .3 * s;
    }
    if ((o || n) && (!o || !n)) {
      const t = o ? e.from : e.to,
        i = t - this.dragPosition.y;
      this.dragPosition.y = t - .3 * i;
    }
  }
  setDragForce() {
    "pointerdown" === this.state && (this.velocity.x = this.dragPosition.x - this.content.x, this.velocity.y = this.dragPosition.y - this.content.y, this.velocity.scale = this.dragPosition.scale - this.content.scale);
  }
  recalculateTransform() {
    this.transform.x = this.content.x + this.velocity.x / (1 / this.friction - 1), this.transform.y = this.content.y + this.velocity.y / (1 / this.friction - 1), this.transform.scale = this.content.scale + this.velocity.scale / (1 / this.friction - 1);
  }
  isAnimating() {
    return !(!this.friction || !(Math.abs(this.velocity.x) > .05 || Math.abs(this.velocity.y) > .05 || Math.abs(this.velocity.scale) > .05));
  }
  setTransform(t) {
    let e, s, o;
    if (t ? (e = i(this.transform.x), s = i(this.transform.y), o = this.transform.scale, this.content = {
      ...this.content,
      x: e,
      y: s,
      scale: o
    }) : (e = i(this.content.x), s = i(this.content.y), o = this.content.scale / (this.content.width / this.content.fitWidth), this.content = {
      ...this.content,
      x: e,
      y: s
    }), this.trigger("beforeTransform"), e = i(this.content.x), s = i(this.content.y), t && this.option("zoom")) {
      let t, n;
      t = i(this.content.fitWidth * o), n = i(this.content.fitHeight * o), this.content.width = t, this.content.height = n, this.transform = {
        ...this.transform,
        width: t,
        height: n,
        scale: o
      }, Object.assign(this.$content.style, {
        width: `${t}px`,
        height: `${n}px`,
        maxWidth: "none",
        maxHeight: "none",
        transform: `translate3d(${e}px, ${s}px, 0) scale(1)`
      });
    } else this.$content.style.transform = `translate3d(${e}px, ${s}px, 0) scale(${o})`;
    this.trigger("afterTransform");
  }
  endAnimation(t) {
    cancelAnimationFrame(this.rAF), this.rAF = null, this.velocity = {
      x: 0,
      y: 0,
      scale: 0
    }, this.setTransform(!0), this.state = "ready", this.handleCursor(), !0 !== t && this.trigger("endAnimation");
  }
  handleCursor() {
    const t = this.option("draggableClass");
    t && this.option("touch") && (1 == this.option("panOnlyZoomed") && this.content.width <= this.viewport.width && this.content.height <= this.viewport.height && this.transform.scale <= this.option("baseScale") ? this.$container.classList.remove(t) : this.$container.classList.add(t));
  }
  detachEvents() {
    this.$content.removeEventListener("load", this.onLoad), this.$container.removeEventListener("wheel", this.onWheel, {
      passive: !1
    }), this.$container.removeEventListener("click", this.onClick, {
      passive: !1
    }), this.pointerTracker && (this.pointerTracker.stop(), this.pointerTracker = null), this.resizeObserver && (this.resizeObserver.disconnect(), this.resizeObserver = null);
  }
  destroy() {
    "destroy" !== this.state && (this.state = "destroy", clearTimeout(this.updateTimer), this.updateTimer = null, cancelAnimationFrame(this.rAF), this.rAF = null, this.detachEvents(), this.detachPlugins(), this.resetDragPosition());
  }
}
exports.Panzoom = d;
d.version = "4.0.31", d.Plugins = {};
const u = (t, e) => {
  let i = 0;
  return function (...s) {
    const o = new Date().getTime();
    if (!(o - i < e)) return i = o, t(...s);
  };
};
class f {
  constructor(t) {
    this.$container = null, this.$prev = null, this.$next = null, this.carousel = t, this.onRefresh = this.onRefresh.bind(this);
  }
  option(t) {
    return this.carousel.option(`Navigation.${t}`);
  }
  createButton(t) {
    const e = document.createElement("button");
    e.setAttribute("title", this.carousel.localize(`{{${t.toUpperCase()}}}`));
    const i = this.option("classNames.button") + " " + this.option(`classNames.${t}`);
    return e.classList.add(...i.split(" ")), e.setAttribute("tabindex", "0"), e.innerHTML = this.carousel.localize(this.option(`${t}Tpl`)), e.addEventListener("click", e => {
      e.preventDefault(), e.stopPropagation(), this.carousel["slide" + ("next" === t ? "Next" : "Prev")]();
    }), e;
  }
  build() {
    this.$container || (this.$container = document.createElement("div"), this.$container.classList.add(...this.option("classNames.main").split(" ")), this.carousel.$container.appendChild(this.$container)), this.$next || (this.$next = this.createButton("next"), this.$container.appendChild(this.$next)), this.$prev || (this.$prev = this.createButton("prev"), this.$container.appendChild(this.$prev));
  }
  onRefresh() {
    const t = this.carousel.pages.length;
    t <= 1 || t > 1 && this.carousel.elemDimWidth < this.carousel.wrapDimWidth && !Number.isInteger(this.carousel.option("slidesPerPage")) ? this.cleanup() : (this.build(), this.$prev.removeAttribute("disabled"), this.$next.removeAttribute("disabled"), this.carousel.option("infiniteX", this.carousel.option("infinite")) || (this.carousel.page <= 0 && this.$prev.setAttribute("disabled", ""), this.carousel.page >= t - 1 && this.$next.setAttribute("disabled", "")));
  }
  cleanup() {
    this.$prev && this.$prev.remove(), this.$prev = null, this.$next && this.$next.remove(), this.$next = null, this.$container && this.$container.remove(), this.$container = null;
  }
  attach() {
    this.carousel.on("refresh change", this.onRefresh);
  }
  detach() {
    this.carousel.off("refresh change", this.onRefresh), this.cleanup();
  }
}
f.defaults = {
  prevTpl: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M15 3l-9 9 9 9"/></svg>',
  nextTpl: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M9 3l9 9-9 9"/></svg>',
  classNames: {
    main: "carousel__nav",
    button: "carousel__button",
    next: "is-next",
    prev: "is-prev"
  }
};
class g {
  constructor(t) {
    this.carousel = t, this.selectedIndex = null, this.friction = 0, this.onNavReady = this.onNavReady.bind(this), this.onNavClick = this.onNavClick.bind(this), this.onNavCreateSlide = this.onNavCreateSlide.bind(this), this.onTargetChange = this.onTargetChange.bind(this);
  }
  addAsTargetFor(t) {
    this.target = this.carousel, this.nav = t, this.attachEvents();
  }
  addAsNavFor(t) {
    this.target = t, this.nav = this.carousel, this.attachEvents();
  }
  attachEvents() {
    this.nav.options.initialSlide = this.target.options.initialPage, this.nav.on("ready", this.onNavReady), this.nav.on("createSlide", this.onNavCreateSlide), this.nav.on("Panzoom.click", this.onNavClick), this.target.on("change", this.onTargetChange), this.target.on("Panzoom.afterUpdate", this.onTargetChange);
  }
  onNavReady() {
    this.onTargetChange(!0);
  }
  onNavClick(t, e, i) {
    const s = i.target.closest(".carousel__slide");
    if (!s) return;
    i.stopPropagation();
    const o = parseInt(s.dataset.index, 10),
      n = this.target.findPageForSlide(o);
    this.target.page !== n && this.target.slideTo(n, {
      friction: this.friction
    }), this.markSelectedSlide(o);
  }
  onNavCreateSlide(t, e) {
    e.index === this.selectedIndex && this.markSelectedSlide(e.index);
  }
  onTargetChange() {
    const t = this.target.pages[this.target.page].indexes[0],
      e = this.nav.findPageForSlide(t);
    this.nav.slideTo(e), this.markSelectedSlide(t);
  }
  markSelectedSlide(t) {
    this.selectedIndex = t, [...this.nav.slides].filter(t => t.$el && t.$el.classList.remove("is-nav-selected"));
    const e = this.nav.slides[t];
    e && e.$el && e.$el.classList.add("is-nav-selected");
  }
  attach(t) {
    const e = t.options.Sync;
    (e.target || e.nav) && (e.target ? this.addAsNavFor(e.target) : e.nav && this.addAsTargetFor(e.nav), this.friction = e.friction);
  }
  detach() {
    this.nav && (this.nav.off("ready", this.onNavReady), this.nav.off("Panzoom.click", this.onNavClick), this.nav.off("createSlide", this.onNavCreateSlide)), this.target && (this.target.off("Panzoom.afterUpdate", this.onTargetChange), this.target.off("change", this.onTargetChange));
  }
}
g.defaults = {
  friction: .92
};
const p = {
  Navigation: f,
  Dots: class {
    constructor(t) {
      this.carousel = t, this.$list = null, this.events = {
        change: this.onChange.bind(this),
        refresh: this.onRefresh.bind(this)
      };
    }
    buildList() {
      if (this.carousel.pages.length < this.carousel.option("Dots.minSlideCount")) return;
      const t = document.createElement("ol");
      return t.classList.add("carousel__dots"), t.addEventListener("click", t => {
        if (!("page" in t.target.dataset)) return;
        t.preventDefault(), t.stopPropagation();
        const e = parseInt(t.target.dataset.page, 10),
          i = this.carousel;
        e !== i.page && (i.pages.length < 3 && i.option("infinite") ? i[0 == e ? "slidePrev" : "slideNext"]() : i.slideTo(e));
      }), this.$list = t, this.carousel.$container.appendChild(t), this.carousel.$container.classList.add("has-dots"), t;
    }
    removeList() {
      this.$list && (this.$list.parentNode.removeChild(this.$list), this.$list = null), this.carousel.$container.classList.remove("has-dots");
    }
    rebuildDots() {
      let t = this.$list;
      const e = !!t,
        i = this.carousel.pages.length;
      if (i < 2) return void (e && this.removeList());
      e || (t = this.buildList());
      const s = this.$list.children.length;
      if (s > i) for (let t = i; t < s; t++) this.$list.removeChild(this.$list.lastChild);else {
        for (let t = s; t < i; t++) {
          const e = document.createElement("li");
          e.classList.add("carousel__dot"), e.dataset.page = t, e.setAttribute("role", "button"), e.setAttribute("tabindex", "0"), e.setAttribute("title", this.carousel.localize("{{GOTO}}", [["%d", t + 1]])), e.addEventListener("keydown", t => {
            const i = t.code;
            let s;
            "Enter" === i || "NumpadEnter" === i ? s = e : "ArrowRight" === i ? s = e.nextSibling : "ArrowLeft" === i && (s = e.previousSibling), s && s.click();
          }), this.$list.appendChild(e);
        }
        this.setActiveDot();
      }
    }
    setActiveDot() {
      if (!this.$list) return;
      this.$list.childNodes.forEach(t => {
        t.classList.remove("is-selected");
      });
      const t = this.$list.childNodes[this.carousel.page];
      t && t.classList.add("is-selected");
    }
    onChange() {
      this.setActiveDot();
    }
    onRefresh() {
      this.rebuildDots();
    }
    attach() {
      this.carousel.on(this.events);
    }
    detach() {
      this.removeList(), this.carousel.off(this.events), this.carousel = null;
    }
  },
  Sync: g
};
const m = {
  slides: [],
  preload: 0,
  slidesPerPage: "auto",
  initialPage: null,
  initialSlide: null,
  friction: .92,
  center: !0,
  infinite: !0,
  fill: !0,
  dragFree: !1,
  prefix: "",
  classNames: {
    viewport: "carousel__viewport",
    track: "carousel__track",
    slide: "carousel__slide",
    slideSelected: "is-selected"
  },
  l10n: {
    NEXT: "Next slide",
    PREV: "Previous slide",
    GOTO: "Go to slide #%d"
  }
};
class y extends l {
  constructor(t, i = {}) {
    if (super(i = e(!0, {}, m, i)), this.state = "init", this.$container = t, !(this.$container instanceof HTMLElement)) throw new Error("No root element provided");
    this.slideNext = u(this.slideNext.bind(this), 250), this.slidePrev = u(this.slidePrev.bind(this), 250), this.init(), t.__Carousel = this;
  }
  init() {
    this.pages = [], this.page = this.pageIndex = null, this.prevPage = this.prevPageIndex = null, this.attachPlugins(y.Plugins), this.trigger("init"), this.initLayout(), this.initSlides(), this.updateMetrics(), this.$track && this.pages.length && (this.$track.style.transform = `translate3d(${-1 * this.pages[this.page].left}px, 0px, 0) scale(1)`), this.manageSlideVisiblity(), this.initPanzoom(), this.state = "ready", this.trigger("ready");
  }
  initLayout() {
    const t = this.option("prefix"),
      e = this.option("classNames");
    this.$viewport = this.option("viewport") || this.$container.querySelector(`.${t}${e.viewport}`), this.$viewport || (this.$viewport = document.createElement("div"), this.$viewport.classList.add(...(t + e.viewport).split(" ")), this.$viewport.append(...this.$container.childNodes), this.$container.appendChild(this.$viewport)), this.$track = this.option("track") || this.$container.querySelector(`.${t}${e.track}`), this.$track || (this.$track = document.createElement("div"), this.$track.classList.add(...(t + e.track).split(" ")), this.$track.append(...this.$viewport.childNodes), this.$viewport.appendChild(this.$track));
  }
  initSlides() {
    this.slides = [];
    this.$viewport.querySelectorAll(`.${this.option("prefix")}${this.option("classNames.slide")}`).forEach(t => {
      const e = {
        $el: t,
        isDom: !0
      };
      this.slides.push(e), this.trigger("createSlide", e, this.slides.length);
    }), Array.isArray(this.options.slides) && (this.slides = e(!0, [...this.slides], this.options.slides));
  }
  updateMetrics() {
    let t,
      e = 0,
      s = [];
    this.slides.forEach((i, o) => {
      const n = i.$el,
        a = i.isDom || !t ? this.getSlideMetrics(n) : t;
      i.index = o, i.width = a, i.left = e, t = a, e += a, s.push(o);
    });
    let o = Math.max(this.$track.offsetWidth, i(this.$track.getBoundingClientRect().width)),
      n = getComputedStyle(this.$track);
    o -= parseFloat(n.paddingLeft) + parseFloat(n.paddingRight), this.contentWidth = e, this.viewportWidth = o;
    const a = [],
      r = this.option("slidesPerPage");
    if (Number.isInteger(r) && e > o) for (let t = 0; t < this.slides.length; t += r) a.push({
      indexes: s.slice(t, t + r),
      slides: this.slides.slice(t, t + r)
    });else {
      let t = 0,
        e = 0;
      for (let i = 0; i < this.slides.length; i += 1) {
        let s = this.slides[i];
        (!a.length || e + s.width > o) && (a.push({
          indexes: [],
          slides: []
        }), t = a.length - 1, e = 0), e += s.width, a[t].indexes.push(i), a[t].slides.push(s);
      }
    }
    const h = this.option("center"),
      l = this.option("fill");
    a.forEach((t, i) => {
      t.index = i, t.width = t.slides.reduce((t, e) => t + e.width, 0), t.left = t.slides[0].left, h && (t.left += .5 * (o - t.width) * -1), l && !this.option("infiniteX", this.option("infinite")) && e > o && (t.left = Math.max(t.left, 0), t.left = Math.min(t.left, e - o));
    });
    const c = [];
    let d;
    a.forEach(t => {
      const e = {
        ...t
      };
      d && e.left === d.left ? (d.width += e.width, d.slides = [...d.slides, ...e.slides], d.indexes = [...d.indexes, ...e.indexes]) : (e.index = c.length, d = e, c.push(e));
    }), this.pages = c;
    let u = this.page;
    if (null === u) {
      const t = this.option("initialSlide");
      u = null !== t ? this.findPageForSlide(t) : parseInt(this.option("initialPage", 0), 10) || 0, c[u] || (u = c.length && u > c.length ? c[c.length - 1].index : 0), this.page = u, this.pageIndex = u;
    }
    this.updatePanzoom(), this.trigger("refresh");
  }
  getSlideMetrics(t) {
    if (!t) {
      const e = this.slides[0];
      (t = document.createElement("div")).dataset.isTestEl = 1, t.style.visibility = "hidden", t.classList.add(...(this.option("prefix") + this.option("classNames.slide")).split(" ")), e.customClass && t.classList.add(...e.customClass.split(" ")), this.$track.prepend(t);
    }
    let e = Math.max(t.offsetWidth, i(t.getBoundingClientRect().width));
    const s = t.currentStyle || window.getComputedStyle(t);
    return e = e + (parseFloat(s.marginLeft) || 0) + (parseFloat(s.marginRight) || 0), t.dataset.isTestEl && t.remove(), e;
  }
  findPageForSlide(t) {
    t = parseInt(t, 10) || 0;
    const e = this.pages.find(e => e.indexes.indexOf(t) > -1);
    return e ? e.index : null;
  }
  slideNext() {
    this.slideTo(this.pageIndex + 1);
  }
  slidePrev() {
    this.slideTo(this.pageIndex - 1);
  }
  slideTo(t, e = {}) {
    const {
      x: i = -1 * this.setPage(t, !0),
      y: s = 0,
      friction: o = this.option("friction")
    } = e;
    this.Panzoom.content.x === i && !this.Panzoom.velocity.x && o || (this.Panzoom.panTo({
      x: i,
      y: s,
      friction: o,
      ignoreBounds: !0
    }), "ready" === this.state && "ready" === this.Panzoom.state && this.trigger("settle"));
  }
  initPanzoom() {
    this.Panzoom && this.Panzoom.destroy();
    const t = e(!0, {}, {
      content: this.$track,
      wrapInner: !1,
      resizeParent: !1,
      zoom: !1,
      click: !1,
      lockAxis: "x",
      x: this.pages.length ? -1 * this.pages[this.page].left : 0,
      centerOnStart: !1,
      textSelection: () => this.option("textSelection", !1),
      panOnlyZoomed: function () {
        return this.content.width <= this.viewport.width;
      }
    }, this.option("Panzoom"));
    this.Panzoom = new d(this.$container, t), this.Panzoom.on({
      "*": (t, ...e) => this.trigger(`Panzoom.${t}`, ...e),
      afterUpdate: () => {
        this.updatePage();
      },
      beforeTransform: this.onBeforeTransform.bind(this),
      touchEnd: this.onTouchEnd.bind(this),
      endAnimation: () => {
        this.trigger("settle");
      }
    }), this.updateMetrics(), this.manageSlideVisiblity();
  }
  updatePanzoom() {
    this.Panzoom && (this.Panzoom.content = {
      ...this.Panzoom.content,
      fitWidth: this.contentWidth,
      origWidth: this.contentWidth,
      width: this.contentWidth
    }, this.pages.length > 1 && this.option("infiniteX", this.option("infinite")) ? this.Panzoom.boundX = null : this.pages.length && (this.Panzoom.boundX = {
      from: -1 * this.pages[this.pages.length - 1].left,
      to: -1 * this.pages[0].left
    }), this.option("infiniteY", this.option("infinite")) ? this.Panzoom.boundY = null : this.Panzoom.boundY = {
      from: 0,
      to: 0
    }, this.Panzoom.handleCursor());
  }
  manageSlideVisiblity() {
    const t = this.contentWidth,
      e = this.viewportWidth;
    let i = this.Panzoom ? -1 * this.Panzoom.content.x : this.pages.length ? this.pages[this.page].left : 0;
    const s = this.option("preload"),
      o = this.option("infiniteX", this.option("infinite")),
      n = parseFloat(getComputedStyle(this.$viewport, null).getPropertyValue("padding-left")),
      a = parseFloat(getComputedStyle(this.$viewport, null).getPropertyValue("padding-right"));
    this.slides.forEach(r => {
      let h,
        l,
        c = 0;
      h = i - n, l = i + e + a, h -= s * (e + n + a), l += s * (e + n + a);
      const d = r.left + r.width > h && r.left < l;
      h = i + t - n, l = i + t + e + a, h -= s * (e + n + a);
      const u = o && r.left + r.width > h && r.left < l;
      h = i - t - n, l = i - t + e + a, h -= s * (e + n + a);
      const f = o && r.left + r.width > h && r.left < l;
      u || d || f ? (this.createSlideEl(r), d && (c = 0), u && (c = -1), f && (c = 1), r.left + r.width > i && r.left <= i + e + a && (c = 0)) : this.removeSlideEl(r), r.hasDiff = c;
    });
    let r = 0,
      h = 0;
    this.slides.forEach((e, i) => {
      let s = 0;
      e.$el ? (i !== r || e.hasDiff ? s = h + e.hasDiff * t : h = 0, e.$el.style.left = Math.abs(s) > .1 ? `${h + e.hasDiff * t}px` : "", r++) : h += e.width;
    }), this.markSelectedSlides();
  }
  createSlideEl(t) {
    if (!t) return;
    if (t.$el) {
      let e = t.$el.dataset.index;
      if (!e || parseInt(e, 10) !== t.index) {
        let e;
        t.$el.dataset.index = t.index, t.$el.querySelectorAll("[data-lazy-srcset]").forEach(t => {
          t.srcset = t.dataset.lazySrcset;
        }), t.$el.querySelectorAll("[data-lazy-src]").forEach(t => {
          let e = t.dataset.lazySrc;
          t instanceof HTMLImageElement ? t.src = e : t.style.backgroundImage = `url('${e}')`;
        }), (e = t.$el.dataset.lazySrc) && (t.$el.style.backgroundImage = `url('${e}')`), t.state = "ready";
      }
      return;
    }
    const e = document.createElement("div");
    e.dataset.index = t.index, e.classList.add(...(this.option("prefix") + this.option("classNames.slide")).split(" ")), t.customClass && e.classList.add(...t.customClass.split(" ")), t.html && (e.innerHTML = t.html);
    const i = [];
    this.slides.forEach((t, e) => {
      t.$el && i.push(e);
    });
    const s = t.index;
    let o = null;
    if (i.length) {
      let t = i.reduce((t, e) => Math.abs(e - s) < Math.abs(t - s) ? e : t);
      o = this.slides[t];
    }
    return this.$track.insertBefore(e, o && o.$el ? o.index < t.index ? o.$el.nextSibling : o.$el : null), t.$el = e, this.trigger("createSlide", t, s), t;
  }
  removeSlideEl(t) {
    t.$el && !t.isDom && (this.trigger("removeSlide", t), t.$el.remove(), t.$el = null);
  }
  markSelectedSlides() {
    const t = this.option("classNames.slideSelected"),
      e = "aria-hidden";
    this.slides.forEach((i, s) => {
      const o = i.$el;
      if (!o) return;
      const n = this.pages[this.page];
      n && n.indexes && n.indexes.indexOf(s) > -1 ? (t && !o.classList.contains(t) && (o.classList.add(t), this.trigger("selectSlide", i)), o.removeAttribute(e)) : (t && o.classList.contains(t) && (o.classList.remove(t), this.trigger("unselectSlide", i)), o.setAttribute(e, !0));
    });
  }
  updatePage() {
    this.updateMetrics(), this.slideTo(this.page, {
      friction: 0
    });
  }
  onBeforeTransform() {
    this.option("infiniteX", this.option("infinite")) && this.manageInfiniteTrack(), this.manageSlideVisiblity();
  }
  manageInfiniteTrack() {
    const t = this.contentWidth,
      e = this.viewportWidth;
    if (!this.option("infiniteX", this.option("infinite")) || this.pages.length < 2 || t < e) return;
    const i = this.Panzoom;
    let s = !1;
    return i.content.x < -1 * (t - e) && (i.content.x += t, this.pageIndex = this.pageIndex - this.pages.length, s = !0), i.content.x > e && (i.content.x -= t, this.pageIndex = this.pageIndex + this.pages.length, s = !0), s && "pointerdown" === i.state && i.resetDragPosition(), s;
  }
  onTouchEnd(t, e) {
    const i = this.option("dragFree");
    if (!i && this.pages.length > 1 && t.dragOffset.time < 350 && Math.abs(t.dragOffset.y) < 1 && Math.abs(t.dragOffset.x) > 5) this[t.dragOffset.x < 0 ? "slideNext" : "slidePrev"]();else if (i) {
      const [, e] = this.getPageFromPosition(-1 * t.transform.x);
      this.setPage(e);
    } else this.slideToClosest();
  }
  slideToClosest(t = {}) {
    let [, e] = this.getPageFromPosition(-1 * this.Panzoom.content.x);
    this.slideTo(e, t);
  }
  getPageFromPosition(t) {
    const e = this.pages.length;
    this.option("center") && (t += .5 * this.viewportWidth);
    const i = Math.floor(t / this.contentWidth);
    t -= i * this.contentWidth;
    let s = this.slides.find(e => e.left <= t && e.left + e.width > t);
    if (s) {
      let t = this.findPageForSlide(s.index);
      return [t, t + i * e];
    }
    return [0, 0];
  }
  setPage(t, e) {
    let i = 0,
      s = parseInt(t, 10) || 0;
    const o = this.page,
      n = this.pageIndex,
      a = this.pages.length,
      r = this.contentWidth,
      h = this.viewportWidth;
    if (t = (s % a + a) % a, this.option("infiniteX", this.option("infinite")) && r > h) {
      const o = Math.floor(s / a) || 0,
        n = r;
      if (i = this.pages[t].left + o * n, !0 === e && a > 2) {
        let t = -1 * this.Panzoom.content.x;
        const e = i - n,
          o = i + n,
          r = Math.abs(t - i),
          h = Math.abs(t - e),
          l = Math.abs(t - o);
        l < r && l <= h ? (i = o, s += a) : h < r && h < l && (i = e, s -= a);
      }
    } else t = s = Math.max(0, Math.min(s, a - 1)), i = this.pages.length ? this.pages[t].left : 0;
    return this.page = t, this.pageIndex = s, null !== o && t !== o && (this.prevPage = o, this.prevPageIndex = n, this.trigger("change", t, o)), i;
  }
  destroy() {
    this.state = "destroy", this.slides.forEach(t => {
      this.removeSlideEl(t);
    }), this.slides = [], this.Panzoom.destroy(), this.detachPlugins();
  }
}
exports.Carousel = y;
y.version = "4.0.31", y.Plugins = p;
const v = !("undefined" == typeof window || !window.document || !window.document.createElement);
let b = null;
const x = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden])", "iframe", "object", "embed", "video", "audio", "[contenteditable]", '[tabindex]:not([tabindex^="-"]):not([disabled]):not([aria-hidden])'],
  w = t => {
    if (t && v) {
      null === b && document.createElement("div").focus({
        get preventScroll() {
          return b = !0, !1;
        }
      });
      try {
        if (t.setActive) t.setActive();else if (b) t.focus({
          preventScroll: !0
        });else {
          const e = window.pageXOffset || document.body.scrollTop,
            i = window.pageYOffset || document.body.scrollLeft;
          t.focus(), document.body.scrollTo({
            top: e,
            left: i,
            behavior: "auto"
          });
        }
      } catch (t) {}
    }
  };
const $ = {
  minSlideCount: 2,
  minScreenHeight: 500,
  autoStart: !0,
  key: "t",
  Carousel: {},
  tpl: '<div class="fancybox__thumb" style="background-image:url(\'{{src}}\')"></div>'
};
class C {
  constructor(t) {
    this.fancybox = t, this.$container = null, this.state = "init";
    for (const t of ["onPrepare", "onClosing", "onKeydown"]) this[t] = this[t].bind(this);
    this.events = {
      prepare: this.onPrepare,
      closing: this.onClosing,
      keydown: this.onKeydown
    };
  }
  onPrepare() {
    this.getSlides().length < this.fancybox.option("Thumbs.minSlideCount") ? this.state = "disabled" : !0 === this.fancybox.option("Thumbs.autoStart") && this.fancybox.Carousel.Panzoom.content.height >= this.fancybox.option("Thumbs.minScreenHeight") && this.build();
  }
  onClosing() {
    this.Carousel && this.Carousel.Panzoom.detachEvents();
  }
  onKeydown(t, e) {
    e === t.option("Thumbs.key") && this.toggle();
  }
  build() {
    if (this.$container) return;
    const t = document.createElement("div");
    t.classList.add("fancybox__thumbs"), this.fancybox.$carousel.parentNode.insertBefore(t, this.fancybox.$carousel.nextSibling), this.Carousel = new y(t, e(!0, {
      Dots: !1,
      Navigation: !1,
      Sync: {
        friction: 0
      },
      infinite: !1,
      center: !0,
      fill: !0,
      dragFree: !0,
      slidesPerPage: 1,
      preload: 1
    }, this.fancybox.option("Thumbs.Carousel"), {
      Sync: {
        target: this.fancybox.Carousel
      },
      slides: this.getSlides()
    })), this.Carousel.Panzoom.on("wheel", (t, e) => {
      e.preventDefault(), this.fancybox[e.deltaY < 0 ? "prev" : "next"]();
    }), this.$container = t, this.state = "visible";
  }
  getSlides() {
    const t = [];
    for (const e of this.fancybox.items) {
      const i = e.thumb;
      i && t.push({
        html: this.fancybox.option("Thumbs.tpl").replace(/\{\{src\}\}/gi, i),
        customClass: `has-thumb has-${e.type || "image"}`
      });
    }
    return t;
  }
  toggle() {
    "visible" === this.state ? this.hide() : "hidden" === this.state ? this.show() : this.build();
  }
  show() {
    "hidden" === this.state && (this.$container.style.display = "", this.Carousel.Panzoom.attachEvents(), this.state = "visible");
  }
  hide() {
    "visible" === this.state && (this.Carousel.Panzoom.detachEvents(), this.$container.style.display = "none", this.state = "hidden");
  }
  cleanup() {
    this.Carousel && (this.Carousel.destroy(), this.Carousel = null), this.$container && (this.$container.remove(), this.$container = null), this.state = "init";
  }
  attach() {
    this.fancybox.on(this.events);
  }
  detach() {
    this.fancybox.off(this.events), this.cleanup();
  }
}
C.defaults = $;
const S = (t, e) => {
    const i = new URL(t),
      s = new URLSearchParams(i.search);
    let o = new URLSearchParams();
    for (const [t, i] of [...s, ...Object.entries(e)]) "t" === t ? o.set("start", parseInt(i)) : o.set(t, i);
    o = o.toString();
    let n = t.match(/#t=((.*)?\d+s)/);
    return n && (o += `#t=${n[1]}`), o;
  },
  E = {
    video: {
      autoplay: !0,
      ratio: 16 / 9
    },
    youtube: {
      autohide: 1,
      fs: 1,
      rel: 0,
      hd: 1,
      wmode: "transparent",
      enablejsapi: 1,
      html5: 1
    },
    vimeo: {
      hd: 1,
      show_title: 1,
      show_byline: 1,
      show_portrait: 0,
      fullscreen: 1
    },
    html5video: {
      tpl: '<video class="fancybox__html5video" playsinline controls controlsList="nodownload" poster="{{poster}}">\n  <source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos.</video>',
      format: ""
    }
  };
class P {
  constructor(t) {
    this.fancybox = t;
    for (const t of ["onInit", "onReady", "onCreateSlide", "onRemoveSlide", "onSelectSlide", "onUnselectSlide", "onRefresh", "onMessage"]) this[t] = this[t].bind(this);
    this.events = {
      init: this.onInit,
      ready: this.onReady,
      "Carousel.createSlide": this.onCreateSlide,
      "Carousel.removeSlide": this.onRemoveSlide,
      "Carousel.selectSlide": this.onSelectSlide,
      "Carousel.unselectSlide": this.onUnselectSlide,
      "Carousel.refresh": this.onRefresh
    };
  }
  onInit() {
    for (const t of this.fancybox.items) this.processType(t);
  }
  processType(t) {
    if (t.html) return t.src = t.html, t.type = "html", void delete t.html;
    const i = t.src || "";
    let s = t.type || this.fancybox.options.type,
      o = null;
    if (!i || "string" == typeof i) {
      if (o = i.match(/(?:youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(?:watch\?(?:.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(?:.*)|[\w-]{11}|\?listType=(?:.*)&list=(?:.*))(?:.*)/i)) {
        const e = S(i, this.fancybox.option("Html.youtube")),
          n = encodeURIComponent(o[1]);
        t.videoId = n, t.src = `https://www.youtube-nocookie.com/embed/${n}?${e}`, t.thumb = t.thumb || `https://i.ytimg.com/vi/${n}/mqdefault.jpg`, t.vendor = "youtube", s = "video";
      } else if (o = i.match(/^.+vimeo.com\/(?:\/)?([\d]+)(.*)?/)) {
        const e = S(i, this.fancybox.option("Html.vimeo")),
          n = encodeURIComponent(o[1]);
        t.videoId = n, t.src = `https://player.vimeo.com/video/${n}?${e}`, t.vendor = "vimeo", s = "video";
      } else (o = i.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:(?:(?:maps\/(?:place\/(?:.*)\/)?\@(.*),(\d+.?\d+?)z))|(?:\?ll=))(.*)?/i)) ? (t.src = `//maps.google.${o[1]}/?ll=${(o[2] ? o[2] + "&z=" + Math.floor(o[3]) + (o[4] ? o[4].replace(/^\//, "&") : "") : o[4] + "").replace(/\?/, "&")}&output=${o[4] && o[4].indexOf("layer=c") > 0 ? "svembed" : "embed"}`, s = "map") : (o = i.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:maps\/search\/)(.*)/i)) && (t.src = `//maps.google.${o[1]}/maps?q=${o[2].replace("query=", "q=").replace("api=1", "")}&output=embed`, s = "map");
      s || ("#" === i.charAt(0) ? s = "inline" : (o = i.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i)) ? (s = "html5video", t.format = t.format || "video/" + ("ogv" === o[1] ? "ogg" : o[1])) : i.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? s = "image" : i.match(/\.(pdf)((\?|#).*)?$/i) && (s = "pdf")), t.type = s || this.fancybox.option("defaultType", "image"), "html5video" !== s && "video" !== s || (t.video = e({}, this.fancybox.option("Html.video"), t.video), t._width && t._height ? t.ratio = parseFloat(t._width) / parseFloat(t._height) : t.ratio = t.ratio || t.video.ratio || E.video.ratio);
    }
  }
  onReady() {
    this.fancybox.Carousel.slides.forEach(t => {
      t.$el && (this.setContent(t), t.index === this.fancybox.getSlide().index && this.playVideo(t));
    });
  }
  onCreateSlide(t, e, i) {
    "ready" === this.fancybox.state && this.setContent(i);
  }
  loadInlineContent(t) {
    let e;
    if (t.src instanceof HTMLElement) e = t.src;else if ("string" == typeof t.src) {
      const i = t.src.split("#", 2),
        s = 2 === i.length && "" === i[0] ? i[1] : i[0];
      e = document.getElementById(s);
    }
    if (e) {
      if ("clone" === t.type || e.$placeHolder) {
        e = e.cloneNode(!0);
        let i = e.getAttribute("id");
        i = i ? `${i}--clone` : `clone-${this.fancybox.id}-${t.index}`, e.setAttribute("id", i);
      } else {
        const t = document.createElement("div");
        t.classList.add("fancybox-placeholder"), e.parentNode.insertBefore(t, e), e.$placeHolder = t;
      }
      this.fancybox.setContent(t, e);
    } else this.fancybox.setError(t, "{{ELEMENT_NOT_FOUND}}");
  }
  loadAjaxContent(t) {
    const e = this.fancybox,
      i = new XMLHttpRequest();
    e.showLoading(t), i.onreadystatechange = function () {
      i.readyState === XMLHttpRequest.DONE && "ready" === e.state && (e.hideLoading(t), 200 === i.status ? e.setContent(t, i.responseText) : e.setError(t, 404 === i.status ? "{{AJAX_NOT_FOUND}}" : "{{AJAX_FORBIDDEN}}"));
    };
    const s = t.ajax || null;
    i.open(s ? "POST" : "GET", t.src), i.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), i.setRequestHeader("X-Requested-With", "XMLHttpRequest"), i.send(s), t.xhr = i;
  }
  loadIframeContent(t) {
    const e = this.fancybox,
      i = document.createElement("iframe");
    if (i.className = "fancybox__iframe", i.setAttribute("id", `fancybox__iframe_${e.id}_${t.index}`), i.setAttribute("allow", "autoplay; fullscreen"), i.setAttribute("scrolling", "auto"), t.$iframe = i, "iframe" !== t.type || !1 === t.preload) return i.setAttribute("src", t.src), this.fancybox.setContent(t, i), void this.resizeIframe(t);
    e.showLoading(t);
    const s = document.createElement("div");
    s.style.visibility = "hidden", this.fancybox.setContent(t, s), s.appendChild(i), i.onerror = () => {
      e.setError(t, "{{IFRAME_ERROR}}");
    }, i.onload = () => {
      e.hideLoading(t);
      let s = !1;
      i.isReady || (i.isReady = !0, s = !0), i.src.length && (i.parentNode.style.visibility = "", this.resizeIframe(t), s && e.revealContent(t));
    }, i.setAttribute("src", t.src);
  }
  setAspectRatio(t) {
    const e = t.$content,
      i = t.ratio;
    if (!e) return;
    let s = t._width,
      o = t._height;
    if (i || s && o) {
      Object.assign(e.style, {
        width: s && o ? "100%" : "",
        height: s && o ? "100%" : "",
        maxWidth: "",
        maxHeight: ""
      });
      let t = e.offsetWidth,
        n = e.offsetHeight;
      if (s = s || t, o = o || n, s > t || o > n) {
        let e = Math.min(t / s, n / o);
        s *= e, o *= e;
      }
      Math.abs(s / o - i) > .01 && (i < s / o ? s = o * i : o = s / i), Object.assign(e.style, {
        width: `${s}px`,
        height: `${o}px`
      });
    }
  }
  resizeIframe(t) {
    const e = t.$iframe;
    if (!e) return;
    let i = t._width || 0,
      s = t._height || 0;
    i && s && (t.autoSize = !1);
    const o = e.parentNode,
      n = o && o.style;
    if (!1 !== t.preload && !1 !== t.autoSize && n) try {
      const t = window.getComputedStyle(o),
        a = parseFloat(t.paddingLeft) + parseFloat(t.paddingRight),
        r = parseFloat(t.paddingTop) + parseFloat(t.paddingBottom),
        h = e.contentWindow.document,
        l = h.getElementsByTagName("html")[0],
        c = h.body;
      n.width = "", c.style.overflow = "hidden", i = i || l.scrollWidth + a, n.width = `${i}px`, c.style.overflow = "", n.flex = "0 0 auto", n.height = `${c.scrollHeight}px`, s = l.scrollHeight + r;
    } catch (t) {}
    if (i || s) {
      const t = {
        flex: "0 1 auto"
      };
      i && (t.width = `${i}px`), s && (t.height = `${s}px`), Object.assign(n, t);
    }
  }
  onRefresh(t, e) {
    e.slides.forEach(t => {
      t.$el && (t.$iframe && this.resizeIframe(t), t.ratio && this.setAspectRatio(t));
    });
  }
  setContent(t) {
    if (t && !t.isDom) {
      switch (t.type) {
        case "html":
          this.fancybox.setContent(t, t.src);
          break;
        case "html5video":
          this.fancybox.setContent(t, this.fancybox.option("Html.html5video.tpl").replace(/\{\{src\}\}/gi, t.src).replace("{{format}}", t.format || t.html5video && t.html5video.format || "").replace("{{poster}}", t.poster || t.thumb || ""));
          break;
        case "inline":
        case "clone":
          this.loadInlineContent(t);
          break;
        case "ajax":
          this.loadAjaxContent(t);
          break;
        case "pdf":
        case "video":
        case "map":
          t.preload = !1;
        case "iframe":
          this.loadIframeContent(t);
      }
      t.ratio && this.setAspectRatio(t);
    }
  }
  onSelectSlide(t, e, i) {
    "ready" === t.state && this.playVideo(i);
  }
  playVideo(t) {
    if ("html5video" === t.type && t.video.autoplay) try {
      const e = t.$el.querySelector("video");
      if (e) {
        const t = e.play();
        void 0 !== t && t.then(() => {}).catch(t => {
          e.muted = !0, e.play();
        });
      }
    } catch (t) {}
    if ("video" !== t.type || !t.$iframe || !t.$iframe.contentWindow) return;
    const e = () => {
      if ("done" === t.state && t.$iframe && t.$iframe.contentWindow) {
        let e;
        if (t.$iframe.isReady) return t.video && t.video.autoplay && (e = "youtube" == t.vendor ? {
          event: "command",
          func: "playVideo"
        } : {
          method: "play",
          value: "true"
        }), void (e && t.$iframe.contentWindow.postMessage(JSON.stringify(e), "*"));
        "youtube" === t.vendor && (e = {
          event: "listening",
          id: t.$iframe.getAttribute("id")
        }, t.$iframe.contentWindow.postMessage(JSON.stringify(e), "*"));
      }
      t.poller = setTimeout(e, 250);
    };
    e();
  }
  onUnselectSlide(t, e, i) {
    if ("html5video" === i.type) {
      try {
        i.$el.querySelector("video").pause();
      } catch (t) {}
      return;
    }
    let s = !1;
    "vimeo" == i.vendor ? s = {
      method: "pause",
      value: "true"
    } : "youtube" === i.vendor && (s = {
      event: "command",
      func: "pauseVideo"
    }), s && i.$iframe && i.$iframe.contentWindow && i.$iframe.contentWindow.postMessage(JSON.stringify(s), "*"), clearTimeout(i.poller);
  }
  onRemoveSlide(t, e, i) {
    i.xhr && (i.xhr.abort(), i.xhr = null), i.$iframe && (i.$iframe.onload = i.$iframe.onerror = null, i.$iframe.src = "//about:blank", i.$iframe = null);
    const s = i.$content;
    "inline" === i.type && s && (s.classList.remove("fancybox__content"), "none" !== s.style.display && (s.style.display = "none")), i.$closeButton && (i.$closeButton.remove(), i.$closeButton = null);
    const o = s && s.$placeHolder;
    o && (o.parentNode.insertBefore(s, o), o.remove(), s.$placeHolder = null);
  }
  onMessage(t) {
    try {
      let e = JSON.parse(t.data);
      if ("https://player.vimeo.com" === t.origin) {
        if ("ready" === e.event) for (let e of document.getElementsByClassName("fancybox__iframe")) e.contentWindow === t.source && (e.isReady = 1);
      } else "https://www.youtube-nocookie.com" === t.origin && "onReady" === e.event && (document.getElementById(e.id).isReady = 1);
    } catch (t) {}
  }
  attach() {
    this.fancybox.on(this.events), window.addEventListener("message", this.onMessage, !1);
  }
  detach() {
    this.fancybox.off(this.events), window.removeEventListener("message", this.onMessage, !1);
  }
}
P.defaults = E;
class T {
  constructor(t) {
    this.fancybox = t;
    for (const t of ["onReady", "onClosing", "onDone", "onPageChange", "onCreateSlide", "onRemoveSlide", "onImageStatusChange"]) this[t] = this[t].bind(this);
    this.events = {
      ready: this.onReady,
      closing: this.onClosing,
      done: this.onDone,
      "Carousel.change": this.onPageChange,
      "Carousel.createSlide": this.onCreateSlide,
      "Carousel.removeSlide": this.onRemoveSlide
    };
  }
  onReady() {
    this.fancybox.Carousel.slides.forEach(t => {
      t.$el && this.setContent(t);
    });
  }
  onDone(t, e) {
    this.handleCursor(e);
  }
  onClosing(t) {
    clearTimeout(this.clickTimer), this.clickTimer = null, t.Carousel.slides.forEach(t => {
      t.$image && (t.state = "destroy"), t.Panzoom && t.Panzoom.detachEvents();
    }), "closing" === this.fancybox.state && this.canZoom(t.getSlide()) && this.zoomOut();
  }
  onCreateSlide(t, e, i) {
    "ready" === this.fancybox.state && this.setContent(i);
  }
  onRemoveSlide(t, e, i) {
    i.$image && (i.$el.classList.remove(t.option("Image.canZoomInClass")), i.$image.remove(), i.$image = null), i.Panzoom && (i.Panzoom.destroy(), i.Panzoom = null), i.$el && i.$el.dataset && delete i.$el.dataset.imageFit;
  }
  setContent(t) {
    if (t.isDom || t.html || t.type && "image" !== t.type) return;
    if (t.$image) return;
    t.type = "image", t.state = "loading";
    const e = document.createElement("div");
    e.style.visibility = "hidden";
    const i = document.createElement("img");
    i.addEventListener("load", e => {
      e.stopImmediatePropagation(), this.onImageStatusChange(t);
    }), i.addEventListener("error", () => {
      this.onImageStatusChange(t);
    }), i.src = t.src, i.alt = "", i.draggable = !1, i.classList.add("fancybox__image"), t.srcset && i.setAttribute("srcset", t.srcset), t.sizes && i.setAttribute("sizes", t.sizes), t.$image = i;
    const s = this.fancybox.option("Image.wrap");
    if (s) {
      const o = document.createElement("div");
      o.classList.add("string" == typeof s ? s : "fancybox__image-wrap"), o.appendChild(i), e.appendChild(o), t.$wrap = o;
    } else e.appendChild(i);
    t.$el.dataset.imageFit = this.fancybox.option("Image.fit"), this.fancybox.setContent(t, e), i.complete || i.error ? this.onImageStatusChange(t) : this.fancybox.showLoading(t);
  }
  onImageStatusChange(t) {
    const e = t.$image;
    e && "loading" === t.state && (e.complete && e.naturalWidth && e.naturalHeight ? (this.fancybox.hideLoading(t), "contain" === this.fancybox.option("Image.fit") && this.initSlidePanzoom(t), t.$el.addEventListener("wheel", e => this.onWheel(t, e), {
      passive: !1
    }), t.$content.addEventListener("click", e => this.onClick(t, e), {
      passive: !1
    }), this.revealContent(t)) : this.fancybox.setError(t, "{{IMAGE_ERROR}}"));
  }
  initSlidePanzoom(t) {
    t.Panzoom || (t.Panzoom = new d(t.$el, e(!0, this.fancybox.option("Image.Panzoom", {}), {
      viewport: t.$wrap,
      content: t.$image,
      width: t._width,
      height: t._height,
      wrapInner: !1,
      textSelection: !0,
      touch: this.fancybox.option("Image.touch"),
      panOnlyZoomed: !0,
      click: !1,
      wheel: !1
    })), t.Panzoom.on("startAnimation", () => {
      this.fancybox.trigger("Image.startAnimation", t);
    }), t.Panzoom.on("endAnimation", () => {
      "zoomIn" === t.state && this.fancybox.done(t), this.handleCursor(t), this.fancybox.trigger("Image.endAnimation", t);
    }), t.Panzoom.on("afterUpdate", () => {
      this.handleCursor(t), this.fancybox.trigger("Image.afterUpdate", t);
    }));
  }
  revealContent(t) {
    null === this.fancybox.Carousel.prevPage && t.index === this.fancybox.options.startIndex && this.canZoom(t) ? this.zoomIn() : this.fancybox.revealContent(t);
  }
  getZoomInfo(t) {
    const e = t.$thumb.getBoundingClientRect(),
      i = e.width,
      s = e.height,
      o = t.$content.getBoundingClientRect(),
      n = o.width,
      a = o.height,
      r = o.top - e.top,
      h = o.left - e.left;
    let l = this.fancybox.option("Image.zoomOpacity");
    return "auto" === l && (l = Math.abs(i / s - n / a) > .1), {
      top: r,
      left: h,
      scale: n && i ? i / n : 1,
      opacity: l
    };
  }
  canZoom(t) {
    const e = this.fancybox,
      i = e.$container;
    if (window.visualViewport && 1 !== window.visualViewport.scale) return !1;
    if (t.Panzoom && !t.Panzoom.content.width) return !1;
    if (!e.option("Image.zoom") || "contain" !== e.option("Image.fit")) return !1;
    const s = t.$thumb;
    if (!s || "loading" === t.state) return !1;
    i.classList.add("fancybox__no-click");
    const o = s.getBoundingClientRect();
    let n;
    if (this.fancybox.option("Image.ignoreCoveredThumbnail")) {
      const t = document.elementFromPoint(o.left + 1, o.top + 1) === s,
        e = document.elementFromPoint(o.right - 1, o.bottom - 1) === s;
      n = t && e;
    } else n = document.elementFromPoint(o.left + .5 * o.width, o.top + .5 * o.height) === s;
    return i.classList.remove("fancybox__no-click"), n;
  }
  zoomIn() {
    const t = this.fancybox,
      e = t.getSlide(),
      i = e.Panzoom,
      {
        top: s,
        left: o,
        scale: n,
        opacity: a
      } = this.getZoomInfo(e);
    t.trigger("reveal", e), i.panTo({
      x: -1 * o,
      y: -1 * s,
      scale: n,
      friction: 0,
      ignoreBounds: !0
    }), e.$content.style.visibility = "", e.state = "zoomIn", !0 === a && i.on("afterTransform", t => {
      "zoomIn" !== e.state && "zoomOut" !== e.state || (t.$content.style.opacity = Math.min(1, 1 - (1 - t.content.scale) / (1 - n)));
    }), i.panTo({
      x: 0,
      y: 0,
      scale: 1,
      friction: this.fancybox.option("Image.zoomFriction")
    });
  }
  zoomOut() {
    const t = this.fancybox,
      e = t.getSlide(),
      i = e.Panzoom;
    if (!i) return;
    e.state = "zoomOut", t.state = "customClosing", e.$caption && (e.$caption.style.visibility = "hidden");
    let s = this.fancybox.option("Image.zoomFriction");
    const o = t => {
      const {
        top: o,
        left: n,
        scale: a,
        opacity: r
      } = this.getZoomInfo(e);
      t || r || (s *= .82), i.panTo({
        x: -1 * n,
        y: -1 * o,
        scale: a,
        friction: s,
        ignoreBounds: !0
      }), s *= .98;
    };
    window.addEventListener("scroll", o), i.once("endAnimation", () => {
      window.removeEventListener("scroll", o), t.destroy();
    }), o();
  }
  handleCursor(t) {
    if ("image" !== t.type || !t.$el) return;
    const e = t.Panzoom,
      i = this.fancybox.option("Image.click", !1, t),
      s = this.fancybox.option("Image.touch"),
      o = t.$el.classList,
      n = this.fancybox.option("Image.canZoomInClass"),
      a = this.fancybox.option("Image.canZoomOutClass");
    if (o.remove(a), o.remove(n), e && "toggleZoom" === i) {
      e && 1 === e.content.scale && e.option("maxScale") - e.content.scale > .01 ? o.add(n) : e.content.scale > 1 && !s && o.add(a);
    } else "close" === i && o.add(a);
  }
  onWheel(t, e) {
    if ("ready" === this.fancybox.state && !1 !== this.fancybox.trigger("Image.wheel", e)) switch (this.fancybox.option("Image.wheel")) {
      case "zoom":
        "done" === t.state && t.Panzoom && t.Panzoom.zoomWithWheel(e);
        break;
      case "close":
        this.fancybox.close();
        break;
      case "slide":
        this.fancybox[e.deltaY < 0 ? "prev" : "next"]();
    }
  }
  onClick(t, e) {
    if ("ready" !== this.fancybox.state) return;
    const i = t.Panzoom;
    if (i && (i.dragPosition.midPoint || 0 !== i.dragOffset.x || 0 !== i.dragOffset.y || 1 !== i.dragOffset.scale)) return;
    if (this.fancybox.Carousel.Panzoom.lockAxis) return !1;
    const s = i => {
        switch (i) {
          case "toggleZoom":
            e.stopPropagation(), t.Panzoom && t.Panzoom.zoomWithClick(e);
            break;
          case "close":
            this.fancybox.close();
            break;
          case "next":
            e.stopPropagation(), this.fancybox.next();
        }
      },
      o = this.fancybox.option("Image.click"),
      n = this.fancybox.option("Image.doubleClick");
    n ? this.clickTimer ? (clearTimeout(this.clickTimer), this.clickTimer = null, s(n)) : this.clickTimer = setTimeout(() => {
      this.clickTimer = null, s(o);
    }, 300) : s(o);
  }
  onPageChange(t, e) {
    const i = t.getSlide();
    e.slides.forEach(t => {
      t.Panzoom && "done" === t.state && t.index !== i.index && t.Panzoom.panTo({
        x: 0,
        y: 0,
        scale: 1,
        friction: .8
      });
    });
  }
  attach() {
    this.fancybox.on(this.events);
  }
  detach() {
    this.fancybox.off(this.events);
  }
}
T.defaults = {
  canZoomInClass: "can-zoom_in",
  canZoomOutClass: "can-zoom_out",
  zoom: !0,
  zoomOpacity: "auto",
  zoomFriction: .82,
  ignoreCoveredThumbnail: !1,
  touch: !0,
  click: "toggleZoom",
  doubleClick: null,
  wheel: "zoom",
  fit: "contain",
  wrap: !1,
  Panzoom: {
    ratio: 1
  }
};
class L {
  constructor(t) {
    this.fancybox = t;
    for (const t of ["onChange", "onClosing"]) this[t] = this[t].bind(this);
    this.events = {
      initCarousel: this.onChange,
      "Carousel.change": this.onChange,
      closing: this.onClosing
    }, this.hasCreatedHistory = !1, this.origHash = "", this.timer = null;
  }
  onChange(t) {
    const e = t.Carousel;
    this.timer && clearTimeout(this.timer);
    const i = null === e.prevPage,
      s = t.getSlide(),
      o = new URL(document.URL).hash;
    let n = !1;
    if (s.slug) n = "#" + s.slug;else {
      const i = s.$trigger && s.$trigger.dataset,
        o = t.option("slug") || i && i.fancybox;
      o && o.length && "true" !== o && (n = "#" + o + (e.slides.length > 1 ? "-" + (s.index + 1) : ""));
    }
    i && (this.origHash = o !== n ? o : ""), n && o !== n && (this.timer = setTimeout(() => {
      try {
        window.history[i ? "pushState" : "replaceState"]({}, document.title, window.location.pathname + window.location.search + n), i && (this.hasCreatedHistory = !0);
      } catch (t) {}
    }, 300));
  }
  onClosing() {
    if (this.timer && clearTimeout(this.timer), !0 !== this.hasSilentClose) try {
      return void window.history.replaceState({}, document.title, window.location.pathname + window.location.search + (this.origHash || ""));
    } catch (t) {}
  }
  attach(t) {
    t.on(this.events);
  }
  detach(t) {
    t.off(this.events);
  }
  static startFromUrl() {
    const t = L.Fancybox;
    if (!t || t.getInstance() || !1 === t.defaults.Hash) return;
    const {
      hash: e,
      slug: i,
      index: s
    } = L.getParsedURL();
    if (!i) return;
    let o = document.querySelector(`[data-slug="${e}"]`);
    if (o && o.dispatchEvent(new CustomEvent("click", {
      bubbles: !0,
      cancelable: !0
    })), t.getInstance()) return;
    const n = document.querySelectorAll(`[data-fancybox="${i}"]`);
    n.length && (null === s && 1 === n.length ? o = n[0] : s && (o = n[s - 1]), o && o.dispatchEvent(new CustomEvent("click", {
      bubbles: !0,
      cancelable: !0
    })));
  }
  static onHashChange() {
    const {
        slug: t,
        index: e
      } = L.getParsedURL(),
      i = L.Fancybox,
      s = i && i.getInstance();
    if (s && s.plugins.Hash) {
      if (t) {
        const i = s.Carousel;
        if (t === s.option("slug")) return i.slideTo(e - 1);
        for (let e of i.slides) if (e.slug && e.slug === t) return i.slideTo(e.index);
        const o = s.getSlide(),
          n = o.$trigger && o.$trigger.dataset;
        if (n && n.fancybox === t) return i.slideTo(e - 1);
      }
      s.plugins.Hash.hasSilentClose = !0, s.close();
    }
    L.startFromUrl();
  }
  static create(t) {
    function e() {
      window.addEventListener("hashchange", L.onHashChange, !1), L.startFromUrl();
    }
    L.Fancybox = t, v && window.requestAnimationFrame(() => {
      /complete|interactive|loaded/.test(document.readyState) ? e() : document.addEventListener("DOMContentLoaded", e);
    });
  }
  static destroy() {
    window.removeEventListener("hashchange", L.onHashChange, !1);
  }
  static getParsedURL() {
    const t = window.location.hash.substr(1),
      e = t.split("-"),
      i = e.length > 1 && /^\+?\d+$/.test(e[e.length - 1]) && parseInt(e.pop(-1), 10) || null;
    return {
      hash: t,
      slug: e.join("-"),
      index: i
    };
  }
}
const _ = {
  pageXOffset: 0,
  pageYOffset: 0,
  element: () => document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement,
  activate(t) {
    _.pageXOffset = window.pageXOffset, _.pageYOffset = window.pageYOffset, t.requestFullscreen ? t.requestFullscreen() : t.mozRequestFullScreen ? t.mozRequestFullScreen() : t.webkitRequestFullscreen ? t.webkitRequestFullscreen() : t.msRequestFullscreen && t.msRequestFullscreen();
  },
  deactivate() {
    document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen();
  }
};
class A {
  constructor(t) {
    this.fancybox = t, this.active = !1, this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
  }
  isActive() {
    return this.active;
  }
  setTimer() {
    if (!this.active || this.timer) return;
    const t = this.fancybox.option("slideshow.delay", 3e3);
    this.timer = setTimeout(() => {
      this.timer = null, this.fancybox.option("infinite") || this.fancybox.getSlide().index !== this.fancybox.Carousel.slides.length - 1 ? this.fancybox.next() : this.fancybox.jumpTo(0, {
        friction: 0
      });
    }, t);
    let e = this.$progress;
    e || (e = document.createElement("div"), e.classList.add("fancybox__progress"), this.fancybox.$carousel.parentNode.insertBefore(e, this.fancybox.$carousel), this.$progress = e, e.offsetHeight), e.style.transitionDuration = `${t}ms`, e.style.transform = "scaleX(1)";
  }
  clearTimer() {
    clearTimeout(this.timer), this.timer = null, this.$progress && (this.$progress.style.transitionDuration = "", this.$progress.style.transform = "", this.$progress.offsetHeight);
  }
  activate() {
    this.active || (this.active = !0, this.fancybox.$container.classList.add("has-slideshow"), "done" === this.fancybox.getSlide().state && this.setTimer(), document.addEventListener("visibilitychange", this.handleVisibilityChange, !1));
  }
  handleVisibilityChange() {
    this.deactivate();
  }
  deactivate() {
    this.active = !1, this.clearTimer(), this.fancybox.$container.classList.remove("has-slideshow"), document.removeEventListener("visibilitychange", this.handleVisibilityChange, !1);
  }
  toggle() {
    this.active ? this.deactivate() : this.fancybox.Carousel.slides.length > 1 && this.activate();
  }
}
const z = {
  display: ["counter", "zoom", "slideshow", "fullscreen", "thumbs", "close"],
  autoEnable: !0,
  items: {
    counter: {
      position: "left",
      type: "div",
      class: "fancybox__counter",
      html: '<span data-fancybox-index=""></span>&nbsp;/&nbsp;<span data-fancybox-count=""></span>',
      attr: {
        tabindex: -1
      }
    },
    prev: {
      type: "button",
      class: "fancybox__button--prev",
      label: "PREV",
      html: '<svg viewBox="0 0 24 24"><path d="M15 4l-8 8 8 8"/></svg>',
      attr: {
        "data-fancybox-prev": ""
      }
    },
    next: {
      type: "button",
      class: "fancybox__button--next",
      label: "NEXT",
      html: '<svg viewBox="0 0 24 24"><path d="M8 4l8 8-8 8"/></svg>',
      attr: {
        "data-fancybox-next": ""
      }
    },
    fullscreen: {
      type: "button",
      class: "fancybox__button--fullscreen",
      label: "TOGGLE_FULLSCREEN",
      html: '<svg viewBox="0 0 24 24">\n                <g><path d="M3 8 V3h5"></path><path d="M21 8V3h-5"></path><path d="M8 21H3v-5"></path><path d="M16 21h5v-5"></path></g>\n                <g><path d="M7 2v5H2M17 2v5h5M2 17h5v5M22 17h-5v5"/></g>\n            </svg>',
      click: function (t) {
        t.preventDefault(), _.element() ? _.deactivate() : _.activate(this.fancybox.$container);
      }
    },
    slideshow: {
      type: "button",
      class: "fancybox__button--slideshow",
      label: "TOGGLE_SLIDESHOW",
      html: '<svg viewBox="0 0 24 24">\n                <g><path d="M6 4v16"/><path d="M20 12L6 20"/><path d="M20 12L6 4"/></g>\n                <g><path d="M7 4v15M17 4v15"/></g>\n            </svg>',
      click: function (t) {
        t.preventDefault(), this.Slideshow.toggle();
      }
    },
    zoom: {
      type: "button",
      class: "fancybox__button--zoom",
      label: "TOGGLE_ZOOM",
      html: '<svg viewBox="0 0 24 24"><circle cx="10" cy="10" r="7"></circle><path d="M16 16 L21 21"></svg>',
      click: function (t) {
        t.preventDefault();
        const e = this.fancybox.getSlide().Panzoom;
        e && e.toggleZoom();
      }
    },
    download: {
      type: "link",
      label: "DOWNLOAD",
      class: "fancybox__button--download",
      html: '<svg viewBox="0 0 24 24"><path d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.62 2.48A2 2 0 004.56 21h14.88a2 2 0 001.94-1.51L22 17"/></svg>',
      click: function (t) {
        t.stopPropagation();
      }
    },
    thumbs: {
      type: "button",
      label: "TOGGLE_THUMBS",
      class: "fancybox__button--thumbs",
      html: '<svg viewBox="0 0 24 24"><circle cx="4" cy="4" r="1" /><circle cx="12" cy="4" r="1" transform="rotate(90 12 4)"/><circle cx="20" cy="4" r="1" transform="rotate(90 20 4)"/><circle cx="4" cy="12" r="1" transform="rotate(90 4 12)"/><circle cx="12" cy="12" r="1" transform="rotate(90 12 12)"/><circle cx="20" cy="12" r="1" transform="rotate(90 20 12)"/><circle cx="4" cy="20" r="1" transform="rotate(90 4 20)"/><circle cx="12" cy="20" r="1" transform="rotate(90 12 20)"/><circle cx="20" cy="20" r="1" transform="rotate(90 20 20)"/></svg>',
      click: function (t) {
        t.stopPropagation();
        const e = this.fancybox.plugins.Thumbs;
        e && e.toggle();
      }
    },
    close: {
      type: "button",
      label: "CLOSE",
      class: "fancybox__button--close",
      html: '<svg viewBox="0 0 24 24"><path d="M20 20L4 4m16 0L4 20"></path></svg>',
      attr: {
        "data-fancybox-close": "",
        tabindex: 0
      }
    }
  }
};
class k {
  constructor(t) {
    this.fancybox = t, this.$container = null, this.state = "init";
    for (const t of ["onInit", "onPrepare", "onDone", "onKeydown", "onClosing", "onChange", "onSettle", "onRefresh"]) this[t] = this[t].bind(this);
    this.events = {
      init: this.onInit,
      prepare: this.onPrepare,
      done: this.onDone,
      keydown: this.onKeydown,
      closing: this.onClosing,
      "Carousel.change": this.onChange,
      "Carousel.settle": this.onSettle,
      "Carousel.Panzoom.touchStart": () => this.onRefresh(),
      "Image.startAnimation": (t, e) => this.onRefresh(e),
      "Image.afterUpdate": (t, e) => this.onRefresh(e)
    };
  }
  onInit() {
    if (this.fancybox.option("Toolbar.autoEnable")) {
      let t = !1;
      for (const e of this.fancybox.items) if ("image" === e.type) {
        t = !0;
        break;
      }
      if (!t) return void (this.state = "disabled");
    }
    for (const e of this.fancybox.option("Toolbar.display")) {
      if ("close" === (t(e) ? e.id : e)) {
        this.fancybox.options.closeButton = !1;
        break;
      }
    }
  }
  onPrepare() {
    const t = this.fancybox;
    if ("init" === this.state && (this.build(), this.update(), this.Slideshow = new A(t), !t.Carousel.prevPage && (t.option("slideshow.autoStart") && this.Slideshow.activate(), t.option("fullscreen.autoStart") && !_.element()))) try {
      _.activate(t.$container);
    } catch (t) {}
  }
  onFsChange() {
    window.scrollTo(_.pageXOffset, _.pageYOffset);
  }
  onSettle() {
    const t = this.fancybox,
      e = this.Slideshow;
    e && e.isActive() && (t.getSlide().index !== t.Carousel.slides.length - 1 || t.option("infinite") ? "done" === t.getSlide().state && e.setTimer() : e.deactivate());
  }
  onChange() {
    this.update(), this.Slideshow && this.Slideshow.isActive() && this.Slideshow.clearTimer();
  }
  onDone(t, e) {
    const i = this.Slideshow;
    e.index === t.getSlide().index && (this.update(), i && i.isActive() && (t.option("infinite") || e.index !== t.Carousel.slides.length - 1 ? i.setTimer() : i.deactivate()));
  }
  onRefresh(t) {
    t && t.index !== this.fancybox.getSlide().index || (this.update(), !this.Slideshow || !this.Slideshow.isActive() || t && "done" !== t.state || this.Slideshow.deactivate());
  }
  onKeydown(t, e, i) {
    " " === e && this.Slideshow && (this.Slideshow.toggle(), i.preventDefault());
  }
  onClosing() {
    this.Slideshow && this.Slideshow.deactivate(), document.removeEventListener("fullscreenchange", this.onFsChange);
  }
  createElement(t) {
    let e;
    "div" === t.type ? e = document.createElement("div") : (e = document.createElement("link" === t.type ? "a" : "button"), e.classList.add("carousel__button")), e.innerHTML = t.html, e.setAttribute("tabindex", t.tabindex || 0), t.class && e.classList.add(...t.class.split(" "));
    for (const i in t.attr) e.setAttribute(i, t.attr[i]);
    t.label && e.setAttribute("title", this.fancybox.localize(`{{${t.label}}}`)), t.click && e.addEventListener("click", t.click.bind(this)), "prev" === t.id && e.setAttribute("data-fancybox-prev", ""), "next" === t.id && e.setAttribute("data-fancybox-next", "");
    const i = e.querySelector("svg");
    return i && (i.setAttribute("role", "img"), i.setAttribute("tabindex", "-1"), i.setAttribute("xmlns", "http://www.w3.org/2000/svg")), e;
  }
  build() {
    this.cleanup();
    const i = this.fancybox.option("Toolbar.items"),
      s = [{
        position: "left",
        items: []
      }, {
        position: "center",
        items: []
      }, {
        position: "right",
        items: []
      }],
      o = this.fancybox.plugins.Thumbs;
    for (const n of this.fancybox.option("Toolbar.display")) {
      let a, r;
      if (t(n) ? (a = n.id, r = e({}, i[a], n)) : (a = n, r = i[a]), ["counter", "next", "prev", "slideshow"].includes(a) && this.fancybox.items.length < 2) continue;
      if ("fullscreen" === a) {
        if (!document.fullscreenEnabled || window.fullScreen) continue;
        document.addEventListener("fullscreenchange", this.onFsChange);
      }
      if ("thumbs" === a && (!o || "disabled" === o.state)) continue;
      if (!r) continue;
      let h = r.position || "right",
        l = s.find(t => t.position === h);
      l && l.items.push(r);
    }
    const n = document.createElement("div");
    n.classList.add("fancybox__toolbar");
    for (const t of s) if (t.items.length) {
      const e = document.createElement("div");
      e.classList.add("fancybox__toolbar__items"), e.classList.add(`fancybox__toolbar__items--${t.position}`);
      for (const i of t.items) e.appendChild(this.createElement(i));
      n.appendChild(e);
    }
    this.fancybox.$carousel.parentNode.insertBefore(n, this.fancybox.$carousel), this.$container = n;
  }
  update() {
    const t = this.fancybox.getSlide(),
      e = t.index,
      i = this.fancybox.items.length,
      s = t.downloadSrc || ("image" !== t.type || t.error ? null : t.src);
    for (const t of this.fancybox.$container.querySelectorAll("a.fancybox__button--download")) s ? (t.removeAttribute("disabled"), t.removeAttribute("tabindex"), t.setAttribute("href", s), t.setAttribute("download", s), t.setAttribute("target", "_blank")) : (t.setAttribute("disabled", ""), t.setAttribute("tabindex", -1), t.removeAttribute("href"), t.removeAttribute("download"));
    const o = t.Panzoom,
      n = o && o.option("maxScale") > o.option("baseScale");
    for (const t of this.fancybox.$container.querySelectorAll(".fancybox__button--zoom")) n ? t.removeAttribute("disabled") : t.setAttribute("disabled", "");
    for (const e of this.fancybox.$container.querySelectorAll("[data-fancybox-index]")) e.innerHTML = t.index + 1;
    for (const t of this.fancybox.$container.querySelectorAll("[data-fancybox-count]")) t.innerHTML = i;
    if (!this.fancybox.option("infinite")) {
      for (const t of this.fancybox.$container.querySelectorAll("[data-fancybox-prev]")) 0 === e ? t.setAttribute("disabled", "") : t.removeAttribute("disabled");
      for (const t of this.fancybox.$container.querySelectorAll("[data-fancybox-next]")) e === i - 1 ? t.setAttribute("disabled", "") : t.removeAttribute("disabled");
    }
  }
  cleanup() {
    this.Slideshow && this.Slideshow.isActive() && this.Slideshow.clearTimer(), this.$container && this.$container.remove(), this.$container = null;
  }
  attach() {
    this.fancybox.on(this.events);
  }
  detach() {
    this.fancybox.off(this.events), this.cleanup();
  }
}
k.defaults = z;
const O = {
  ScrollLock: class {
    constructor(t) {
      this.fancybox = t, this.viewport = null, this.pendingUpdate = null;
      for (const t of ["onReady", "onResize", "onTouchstart", "onTouchmove"]) this[t] = this[t].bind(this);
    }
    onReady() {
      const t = window.visualViewport;
      t && (this.viewport = t, this.startY = 0, t.addEventListener("resize", this.onResize), this.updateViewport()), window.addEventListener("touchstart", this.onTouchstart, {
        passive: !1
      }), window.addEventListener("touchmove", this.onTouchmove, {
        passive: !1
      }), window.addEventListener("wheel", this.onWheel, {
        passive: !1
      });
    }
    onResize() {
      this.updateViewport();
    }
    updateViewport() {
      const t = this.fancybox,
        e = this.viewport,
        i = e.scale || 1,
        s = t.$container;
      if (!s) return;
      let o = "",
        n = "",
        a = "";
      i - 1 > .1 && (o = e.width * i + "px", n = e.height * i + "px", a = `translate3d(${e.offsetLeft}px, ${e.offsetTop}px, 0) scale(${1 / i})`), s.style.width = o, s.style.height = n, s.style.transform = a;
    }
    onTouchstart(t) {
      this.startY = t.touches ? t.touches[0].screenY : t.screenY;
    }
    onTouchmove(t) {
      const e = this.startY,
        i = window.innerWidth / window.document.documentElement.clientWidth;
      if (!t.cancelable) return;
      if (t.touches.length > 1 || 1 !== i) return;
      const o = s(t.composedPath()[0]);
      if (!o) return void t.preventDefault();
      const n = window.getComputedStyle(o),
        a = parseInt(n.getPropertyValue("height"), 10),
        r = t.touches ? t.touches[0].screenY : t.screenY,
        h = e <= r && 0 === o.scrollTop,
        l = e >= r && o.scrollHeight - o.scrollTop === a;
      (h || l) && t.preventDefault();
    }
    onWheel(t) {
      s(t.composedPath()[0]) || t.preventDefault();
    }
    cleanup() {
      this.pendingUpdate && (cancelAnimationFrame(this.pendingUpdate), this.pendingUpdate = null);
      const t = this.viewport;
      t && (t.removeEventListener("resize", this.onResize), this.viewport = null), window.removeEventListener("touchstart", this.onTouchstart, !1), window.removeEventListener("touchmove", this.onTouchmove, !1), window.removeEventListener("wheel", this.onWheel, {
        passive: !1
      });
    }
    attach() {
      this.fancybox.on("initLayout", this.onReady);
    }
    detach() {
      this.fancybox.off("initLayout", this.onReady), this.cleanup();
    }
  },
  Thumbs: C,
  Html: P,
  Toolbar: k,
  Image: T,
  Hash: L
};
const M = {
    startIndex: 0,
    preload: 1,
    infinite: !0,
    showClass: "fancybox-zoomInUp",
    hideClass: "fancybox-fadeOut",
    animated: !0,
    hideScrollbar: !0,
    parentEl: null,
    mainClass: null,
    autoFocus: !0,
    trapFocus: !0,
    placeFocusBack: !0,
    click: "close",
    closeButton: "inside",
    dragToClose: !0,
    keyboard: {
      Escape: "close",
      Delete: "close",
      Backspace: "close",
      PageUp: "next",
      PageDown: "prev",
      ArrowUp: "next",
      ArrowDown: "prev",
      ArrowRight: "next",
      ArrowLeft: "prev"
    },
    template: {
      closeButton: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M20 20L4 4m16 0L4 20"/></svg>',
      spinner: '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="25 25 50 50" tabindex="-1"><circle cx="50" cy="50" r="20"/></svg>',
      main: null
    },
    l10n: {
      CLOSE: "Close",
      NEXT: "Next",
      PREV: "Previous",
      MODAL: "You can close this modal content with the ESC key",
      ERROR: "Something Went Wrong, Please Try Again Later",
      IMAGE_ERROR: "Image Not Found",
      ELEMENT_NOT_FOUND: "HTML Element Not Found",
      AJAX_NOT_FOUND: "Error Loading AJAX : Not Found",
      AJAX_FORBIDDEN: "Error Loading AJAX : Forbidden",
      IFRAME_ERROR: "Error Loading Page",
      TOGGLE_ZOOM: "Toggle zoom level",
      TOGGLE_THUMBS: "Toggle thumbnails",
      TOGGLE_SLIDESHOW: "Toggle slideshow",
      TOGGLE_FULLSCREEN: "Toggle full-screen mode",
      DOWNLOAD: "Download"
    }
  },
  I = new Map();
let F = 0;
class R extends l {
  constructor(t, i = {}) {
    t = t.map(t => (t.width && (t._width = t.width), t.height && (t._height = t.height), t)), super(e(!0, {}, M, i)), this.bindHandlers(), this.state = "init", this.setItems(t), this.attachPlugins(R.Plugins), this.trigger("init"), !0 === this.option("hideScrollbar") && this.hideScrollbar(), this.initLayout(), this.initCarousel(), this.attachEvents(), I.set(this.id, this), this.trigger("prepare"), this.state = "ready", this.trigger("ready"), this.$container.setAttribute("aria-hidden", "false"), this.option("trapFocus") && this.focus();
  }
  option(t, ...e) {
    const i = this.getSlide();
    let s = i ? i[t] : void 0;
    return void 0 !== s ? ("function" == typeof s && (s = s.call(this, this, ...e)), s) : super.option(t, ...e);
  }
  bindHandlers() {
    for (const t of ["onMousedown", "onKeydown", "onClick", "onFocus", "onCreateSlide", "onSettle", "onTouchMove", "onTouchEnd", "onTransform"]) this[t] = this[t].bind(this);
  }
  attachEvents() {
    document.addEventListener("mousedown", this.onMousedown), document.addEventListener("keydown", this.onKeydown, !0), this.option("trapFocus") && document.addEventListener("focus", this.onFocus, !0), this.$container.addEventListener("click", this.onClick);
  }
  detachEvents() {
    document.removeEventListener("mousedown", this.onMousedown), document.removeEventListener("keydown", this.onKeydown, !0), document.removeEventListener("focus", this.onFocus, !0), this.$container.removeEventListener("click", this.onClick);
  }
  initLayout() {
    this.$root = this.option("parentEl") || document.body;
    let t = this.option("template.main");
    t && (this.$root.insertAdjacentHTML("beforeend", this.localize(t)), this.$container = this.$root.querySelector(".fancybox__container")), this.$container || (this.$container = document.createElement("div"), this.$root.appendChild(this.$container)), this.$container.onscroll = () => (this.$container.scrollLeft = 0, !1), Object.entries({
      class: "fancybox__container",
      role: "dialog",
      tabIndex: "-1",
      "aria-modal": "true",
      "aria-hidden": "true",
      "aria-label": this.localize("{{MODAL}}")
    }).forEach(t => this.$container.setAttribute(...t)), this.option("animated") && this.$container.classList.add("is-animated"), this.$backdrop = this.$container.querySelector(".fancybox__backdrop"), this.$backdrop || (this.$backdrop = document.createElement("div"), this.$backdrop.classList.add("fancybox__backdrop"), this.$container.appendChild(this.$backdrop)), this.$carousel = this.$container.querySelector(".fancybox__carousel"), this.$carousel || (this.$carousel = document.createElement("div"), this.$carousel.classList.add("fancybox__carousel"), this.$container.appendChild(this.$carousel)), this.$container.Fancybox = this, this.id = this.$container.getAttribute("id"), this.id || (this.id = this.options.id || ++F, this.$container.setAttribute("id", "fancybox-" + this.id));
    const e = this.option("mainClass");
    return e && this.$container.classList.add(...e.split(" ")), document.documentElement.classList.add("with-fancybox"), this.trigger("initLayout"), this;
  }
  setItems(t) {
    const e = [];
    for (const i of t) {
      const t = i.$trigger;
      if (t) {
        const e = t.dataset || {};
        i.src = e.src || t.getAttribute("href") || i.src, i.type = e.type || i.type, !i.src && t instanceof HTMLImageElement && (i.src = t.currentSrc || i.$trigger.src);
      }
      let s = i.$thumb;
      if (!s) {
        let t = i.$trigger && i.$trigger.origTarget;
        t && (s = t instanceof HTMLImageElement ? t : t.querySelector("img:not([aria-hidden])")), !s && i.$trigger && (s = i.$trigger instanceof HTMLImageElement ? i.$trigger : i.$trigger.querySelector("img:not([aria-hidden])"));
      }
      i.$thumb = s || null;
      let o = i.thumb;
      !o && s && (o = s.currentSrc || s.src, !o && s.dataset && (o = s.dataset.lazySrc || s.dataset.src)), o || "image" !== i.type || (o = i.src), i.thumb = o || null, i.caption = i.caption || "", e.push(i);
    }
    this.items = e;
  }
  initCarousel() {
    return this.Carousel = new y(this.$carousel, e(!0, {}, {
      prefix: "",
      classNames: {
        viewport: "fancybox__viewport",
        track: "fancybox__track",
        slide: "fancybox__slide"
      },
      textSelection: !0,
      preload: this.option("preload"),
      friction: .88,
      slides: this.items,
      initialPage: this.options.startIndex,
      slidesPerPage: 1,
      infiniteX: this.option("infinite"),
      infiniteY: !0,
      l10n: this.option("l10n"),
      Dots: !1,
      Navigation: {
        classNames: {
          main: "fancybox__nav",
          button: "carousel__button",
          next: "is-next",
          prev: "is-prev"
        }
      },
      Panzoom: {
        textSelection: !0,
        panOnlyZoomed: () => this.Carousel && this.Carousel.pages && this.Carousel.pages.length < 2 && !this.option("dragToClose"),
        lockAxis: () => {
          if (this.Carousel) {
            let t = "x";
            return this.option("dragToClose") && (t += "y"), t;
          }
        }
      },
      on: {
        "*": (t, ...e) => this.trigger(`Carousel.${t}`, ...e),
        init: t => this.Carousel = t,
        createSlide: this.onCreateSlide,
        settle: this.onSettle
      }
    }, this.option("Carousel"))), this.option("dragToClose") && this.Carousel.Panzoom.on({
      touchMove: this.onTouchMove,
      afterTransform: this.onTransform,
      touchEnd: this.onTouchEnd
    }), this.trigger("initCarousel"), this;
  }
  onCreateSlide(t, e) {
    let i = e.caption || "";
    if ("function" == typeof this.options.caption && (i = this.options.caption.call(this, this, this.Carousel, e)), "string" == typeof i && i.length) {
      const t = document.createElement("div"),
        s = `fancybox__caption_${this.id}_${e.index}`;
      t.className = "fancybox__caption", t.innerHTML = i, t.setAttribute("id", s), e.$caption = e.$el.appendChild(t), e.$el.classList.add("has-caption"), e.$el.setAttribute("aria-labelledby", s);
    }
  }
  onSettle() {
    this.option("autoFocus") && this.focus();
  }
  onFocus(t) {
    this.isTopmost() && this.focus(t);
  }
  onClick(t) {
    if (t.defaultPrevented) return;
    let e = t.composedPath()[0];
    if (e.matches("[data-fancybox-close]")) return t.preventDefault(), void R.close(!1, t);
    if (e.matches("[data-fancybox-next]")) return t.preventDefault(), void R.next();
    if (e.matches("[data-fancybox-prev]")) return t.preventDefault(), void R.prev();
    const i = document.activeElement;
    if (i) {
      if (i.closest("[contenteditable]")) return;
      e.matches(x) || i.blur();
    }
    if (e.closest(".fancybox__content")) return;
    if (getSelection().toString().length) return;
    if (!1 === this.trigger("click", t)) return;
    switch (this.option("click")) {
      case "close":
        this.close();
        break;
      case "next":
        this.next();
    }
  }
  onTouchMove() {
    const t = this.getSlide().Panzoom;
    return !t || 1 === t.content.scale;
  }
  onTouchEnd(t) {
    const e = t.dragOffset.y;
    Math.abs(e) >= 150 || Math.abs(e) >= 35 && t.dragOffset.time < 350 ? (this.option("hideClass") && (this.getSlide().hideClass = "fancybox-throwOut" + (t.content.y < 0 ? "Up" : "Down")), this.close()) : "y" === t.lockAxis && t.panTo({
      y: 0
    });
  }
  onTransform(t) {
    if (this.$backdrop) {
      const e = Math.abs(t.content.y),
        i = e < 1 ? "" : Math.max(.33, Math.min(1, 1 - e / t.content.fitHeight * 1.5));
      this.$container.style.setProperty("--fancybox-ts", i ? "0s" : ""), this.$container.style.setProperty("--fancybox-opacity", i);
    }
  }
  onMousedown() {
    "ready" === this.state && document.body.classList.add("is-using-mouse");
  }
  onKeydown(t) {
    if (!this.isTopmost()) return;
    document.body.classList.remove("is-using-mouse");
    const e = t.key,
      i = this.option("keyboard");
    if (!i || t.ctrlKey || t.altKey || t.shiftKey) return;
    const s = t.composedPath()[0],
      o = document.activeElement && document.activeElement.classList,
      n = o && o.contains("carousel__button");
    if ("Escape" !== e && !n) {
      if (t.target.isContentEditable || -1 !== ["BUTTON", "TEXTAREA", "OPTION", "INPUT", "SELECT", "VIDEO"].indexOf(s.nodeName)) return;
    }
    if (!1 === this.trigger("keydown", e, t)) return;
    const a = i[e];
    "function" == typeof this[a] && this[a]();
  }
  getSlide() {
    const t = this.Carousel;
    if (!t) return null;
    const e = null === t.page ? t.option("initialPage") : t.page,
      i = t.pages || [];
    return i.length && i[e] ? i[e].slides[0] : null;
  }
  focus(t) {
    if (R.ignoreFocusChange) return;
    if (["init", "closing", "customClosing", "destroy"].indexOf(this.state) > -1) return;
    const e = this.$container,
      i = this.getSlide(),
      s = "done" === i.state ? i.$el : null;
    if (s && s.contains(document.activeElement)) return;
    t && t.preventDefault(), R.ignoreFocusChange = !0;
    const o = Array.from(e.querySelectorAll(x));
    let n,
      a = [];
    for (let t of o) {
      const e = t.offsetParent,
        i = s && s.contains(t),
        o = !this.Carousel.$viewport.contains(t);
      e && (i || o) ? (a.push(t), void 0 !== t.dataset.origTabindex && (t.tabIndex = t.dataset.origTabindex, t.removeAttribute("data-orig-tabindex")), (t.hasAttribute("autoFocus") || !n && i && !t.classList.contains("carousel__button")) && (n = t)) : (t.dataset.origTabindex = void 0 === t.dataset.origTabindex ? t.getAttribute("tabindex") : t.dataset.origTabindex, t.tabIndex = -1);
    }
    t ? a.indexOf(t.target) > -1 ? this.lastFocus = t.target : this.lastFocus === e ? w(a[a.length - 1]) : w(e) : this.option("autoFocus") && n ? w(n) : a.indexOf(document.activeElement) < 0 && w(e), this.lastFocus = document.activeElement, R.ignoreFocusChange = !1;
  }
  hideScrollbar() {
    if (!v) return;
    const t = window.innerWidth - document.documentElement.getBoundingClientRect().width,
      e = "fancybox-style-noscroll";
    let i = document.getElementById(e);
    i || t > 0 && (i = document.createElement("style"), i.id = e, i.type = "text/css", i.innerHTML = `.compensate-for-scrollbar {padding-right: ${t}px;}`, document.getElementsByTagName("head")[0].appendChild(i), document.body.classList.add("compensate-for-scrollbar"));
  }
  revealScrollbar() {
    document.body.classList.remove("compensate-for-scrollbar");
    const t = document.getElementById("fancybox-style-noscroll");
    t && t.remove();
  }
  clearContent(t) {
    this.Carousel.trigger("removeSlide", t), t.$content && (t.$content.remove(), t.$content = null), t.$closeButton && (t.$closeButton.remove(), t.$closeButton = null), t._className && t.$el.classList.remove(t._className);
  }
  setContent(t, e, i = {}) {
    let s;
    const o = t.$el;
    if (e instanceof HTMLElement) ["img", "iframe", "video", "audio"].indexOf(e.nodeName.toLowerCase()) > -1 ? (s = document.createElement("div"), s.appendChild(e)) : s = e;else {
      const t = document.createRange().createContextualFragment(e);
      s = document.createElement("div"), s.appendChild(t);
    }
    if (t.filter && !t.error && (s = s.querySelector(t.filter)), s instanceof Element) return t._className = `has-${i.suffix || t.type || "unknown"}`, o.classList.add(t._className), s.classList.add("fancybox__content"), "none" !== s.style.display && "none" !== getComputedStyle(s).getPropertyValue("display") || (s.style.display = t.display || this.option("defaultDisplay") || "flex"), t.id && s.setAttribute("id", t.id), t.$content = s, o.prepend(s), this.manageCloseButton(t), "loading" !== t.state && this.revealContent(t), s;
    this.setError(t, "{{ELEMENT_NOT_FOUND}}");
  }
  manageCloseButton(t) {
    const e = void 0 === t.closeButton ? this.option("closeButton") : t.closeButton;
    if (!e || "top" === e && this.$closeButton) return;
    const i = document.createElement("button");
    i.classList.add("carousel__button", "is-close"), i.setAttribute("title", this.options.l10n.CLOSE), i.innerHTML = this.option("template.closeButton"), i.addEventListener("click", t => this.close(t)), "inside" === e ? (t.$closeButton && t.$closeButton.remove(), t.$closeButton = t.$content.appendChild(i)) : this.$closeButton = this.$container.insertBefore(i, this.$container.firstChild);
  }
  revealContent(t) {
    this.trigger("reveal", t), t.$content.style.visibility = "";
    let e = !1;
    t.error || "loading" === t.state || null !== this.Carousel.prevPage || t.index !== this.options.startIndex || (e = void 0 === t.showClass ? this.option("showClass") : t.showClass), e ? (t.state = "animating", this.animateCSS(t.$content, e, () => {
      this.done(t);
    })) : this.done(t);
  }
  animateCSS(t, e, i) {
    if (t && t.dispatchEvent(new CustomEvent("animationend", {
      bubbles: !0,
      cancelable: !0
    })), !t || !e) return void ("function" == typeof i && i());
    const s = function (o) {
      o.currentTarget === this && (t.removeEventListener("animationend", s), i && i(), t.classList.remove(e));
    };
    t.addEventListener("animationend", s), t.classList.add(e);
  }
  done(t) {
    t.state = "done", this.trigger("done", t);
    const e = this.getSlide();
    e && t.index === e.index && this.option("autoFocus") && this.focus();
  }
  setError(t, e) {
    t.error = e, this.hideLoading(t), this.clearContent(t);
    const i = document.createElement("div");
    i.classList.add("fancybox-error"), i.innerHTML = this.localize(e || "<p>{{ERROR}}</p>"), this.setContent(t, i, {
      suffix: "error"
    });
  }
  showLoading(t) {
    t.state = "loading", t.$el.classList.add("is-loading");
    let e = t.$el.querySelector(".fancybox__spinner");
    e || (e = document.createElement("div"), e.classList.add("fancybox__spinner"), e.innerHTML = this.option("template.spinner"), e.addEventListener("click", () => {
      this.Carousel.Panzoom.velocity || this.close();
    }), t.$el.prepend(e));
  }
  hideLoading(t) {
    const e = t.$el && t.$el.querySelector(".fancybox__spinner");
    e && (e.remove(), t.$el.classList.remove("is-loading")), "loading" === t.state && (this.trigger("load", t), t.state = "ready");
  }
  next() {
    const t = this.Carousel;
    t && t.pages.length > 1 && t.slideNext();
  }
  prev() {
    const t = this.Carousel;
    t && t.pages.length > 1 && t.slidePrev();
  }
  jumpTo(...t) {
    this.Carousel && this.Carousel.slideTo(...t);
  }
  isClosing() {
    return ["closing", "customClosing", "destroy"].includes(this.state);
  }
  isTopmost() {
    return R.getInstance().id == this.id;
  }
  close(t) {
    if (t && t.preventDefault(), this.isClosing()) return;
    if (!1 === this.trigger("shouldClose", t)) return;
    if (this.state = "closing", this.Carousel.Panzoom.destroy(), this.detachEvents(), this.trigger("closing", t), "destroy" === this.state) return;
    this.$container.setAttribute("aria-hidden", "true"), this.$container.classList.add("is-closing");
    const e = this.getSlide();
    if (this.Carousel.slides.forEach(t => {
      t.$content && t.index !== e.index && this.Carousel.trigger("removeSlide", t);
    }), "closing" === this.state) {
      const t = void 0 === e.hideClass ? this.option("hideClass") : e.hideClass;
      this.animateCSS(e.$content, t, () => {
        this.destroy();
      }, !0);
    }
  }
  destroy() {
    if ("destroy" === this.state) return;
    this.state = "destroy", this.trigger("destroy");
    const t = this.option("placeFocusBack") ? this.option("triggerTarget", this.getSlide().$trigger) : null;
    this.Carousel.destroy(), this.detachPlugins(), this.Carousel = null, this.options = {}, this.events = {}, this.$container.remove(), this.$container = this.$backdrop = this.$carousel = null, t && w(t), I.delete(this.id);
    const e = R.getInstance();
    e ? e.focus() : (document.documentElement.classList.remove("with-fancybox"), document.body.classList.remove("is-using-mouse"), this.revealScrollbar());
  }
  static show(t, e = {}) {
    return new R(t, e);
  }
  static fromEvent(t, e = {}) {
    if (t.defaultPrevented) return;
    if (t.button && 0 !== t.button) return;
    if (t.ctrlKey || t.metaKey || t.shiftKey) return;
    const i = t.composedPath()[0];
    let s,
      o,
      n,
      a = i;
    if ((a.matches("[data-fancybox-trigger]") || (a = a.closest("[data-fancybox-trigger]"))) && (e.triggerTarget = a, s = a && a.dataset && a.dataset.fancyboxTrigger), s) {
      const t = document.querySelectorAll(`[data-fancybox="${s}"]`),
        e = parseInt(a.dataset.fancyboxIndex, 10) || 0;
      a = t.length ? t[e] : a;
    }
    Array.from(R.openers.keys()).reverse().some(e => {
      n = a || i;
      let s = !1;
      try {
        n instanceof Element && ("string" == typeof e || e instanceof String) && (s = n.matches(e) || (n = n.closest(e)));
      } catch (t) {}
      return !!s && (t.preventDefault(), o = e, !0);
    });
    let r = !1;
    if (o) {
      e.event = t, e.target = n, n.origTarget = i, r = R.fromOpener(o, e);
      const s = R.getInstance();
      s && "ready" === s.state && t.detail && document.body.classList.add("is-using-mouse");
    }
    return r;
  }
  static fromOpener(t, i = {}) {
    let s = [],
      o = i.startIndex || 0,
      n = i.target || null;
    const a = void 0 !== (i = e({}, i, R.openers.get(t))).groupAll && i.groupAll,
      r = void 0 === i.groupAttr ? "data-fancybox" : i.groupAttr,
      h = r && n ? n.getAttribute(`${r}`) : "";
    if (!n || h || a) {
      const e = i.root || (n ? n.getRootNode() : document.body);
      s = [].slice.call(e.querySelectorAll(t));
    }
    if (n && !a && (s = h ? s.filter(t => t.getAttribute(`${r}`) === h) : [n]), !s.length) return !1;
    const l = R.getInstance();
    return !(l && s.indexOf(l.options.$trigger) > -1) && (o = n ? s.indexOf(n) : o, s = s.map(function (t) {
      const e = ["false", "0", "no", "null", "undefined"],
        i = ["true", "1", "yes"],
        s = Object.assign({}, t.dataset),
        o = {};
      for (let [t, n] of Object.entries(s)) if ("fancybox" !== t) if ("width" === t || "height" === t) o[`_${t}`] = n;else if ("string" == typeof n || n instanceof String) {
        if (e.indexOf(n) > -1) o[t] = !1;else if (i.indexOf(o[t]) > -1) o[t] = !0;else try {
          o[t] = JSON.parse(n);
        } catch (e) {
          o[t] = n;
        }
      } else o[t] = n;
      return t instanceof Element && (o.$trigger = t), o;
    }), new R(s, e({}, i, {
      startIndex: o,
      $trigger: n
    })));
  }
  static bind(t, e = {}) {
    function i() {
      document.body.addEventListener("click", R.fromEvent, !1);
    }
    v && (R.openers.size || (/complete|interactive|loaded/.test(document.readyState) ? i() : document.addEventListener("DOMContentLoaded", i)), R.openers.set(t, e));
  }
  static unbind(t) {
    R.openers.delete(t), R.openers.size || R.destroy();
  }
  static destroy() {
    let t;
    for (; t = R.getInstance();) t.destroy();
    R.openers = new Map(), document.body.removeEventListener("click", R.fromEvent, !1);
  }
  static getInstance(t) {
    if (t) return I.get(t);
    return Array.from(I.values()).reverse().find(t => !t.isClosing() && t) || null;
  }
  static close(t = !0, e) {
    if (t) for (const t of I.values()) t.close(e);else {
      const t = R.getInstance();
      t && t.close(e);
    }
  }
  static next() {
    const t = R.getInstance();
    t && t.next();
  }
  static prev() {
    const t = R.getInstance();
    t && t.prev();
  }
}
exports.Fancybox = R;
R.version = "4.0.31", R.defaults = M, R.openers = new Map(), R.Plugins = O, R.bind("[data-fancybox]");
for (const [t, e] of Object.entries(R.Plugins || {})) "function" == typeof e.create && e.create(R);
},{}],"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;
function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }
  return bundleURL;
}
function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);
    if (matches) {
      return getBaseURL(matches[0]);
    }
  }
  return '/';
}
function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');
function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    link.remove();
  };
  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }
  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"../node_modules/@fancyapps/ui/dist/fancybox.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../node_modules/swiper/swiper-bundle.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"scripts/sliders/center-slider.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.centerSlider = void 0;
var _swiperBundle = _interopRequireDefault(require("swiper/swiper-bundle"));
var _ui = require("@fancyapps/ui");
require("@fancyapps/ui/dist/fancybox.css");
require("swiper/swiper-bundle.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var centerSlider = function centerSlider() {
  var centerSlider = new _swiperBundle.default(".center-slider__wrapper", {
    centeredSlides: true,
    loop: true,
    effect: "coverflow",
    coverflowEffect: {
      rotate: 0,
      stretch: 3,
      depth: 100,
      modifier: 3,
      slideShadows: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.center-slider__button-next',
      prevEl: '.center-slider__button-prev'
    }
  });
  _ui.Fancybox.bind('[data-fancybox="gallery"]', {
    Thumbs: {
      Carousel: {
        fill: false,
        center: true
      }
    }
  });
};
exports.centerSlider = centerSlider;
},{"swiper/swiper-bundle":"../node_modules/swiper/swiper-bundle.js","@fancyapps/ui":"../node_modules/@fancyapps/ui/dist/fancybox.esm.js","@fancyapps/ui/dist/fancybox.css":"../node_modules/@fancyapps/ui/dist/fancybox.css","swiper/swiper-bundle.css":"../node_modules/swiper/swiper-bundle.css"}],"scripts/transition.js":[function(require,module,exports) {
"use strict";

var _centerSlider = require("./sliders/center-slider");
window.addEventListener("DOMContentLoaded", function () {
  (0, _centerSlider.centerSlider)();
});
},{"./sliders/center-slider":"scripts/sliders/center-slider.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51007" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","scripts/transition.js"], null)
//# sourceMappingURL=/transition.be6d462c.js.map