webpackJsonp([1,2],{

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_util__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__util_util__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_app_js__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles_main_scss__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles_main_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__styles_main_scss__);










__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_app_js__["a" /* default */], null), document.getElementById("main"));

console.log(__WEBPACK_IMPORTED_MODULE_2__util_util___default.a.upperCase('hello world'));

/***/ }),

/***/ 54:
/***/ (function(module, exports) {

const editText = {
  upperCase: text => {
    return text.toUpperCase();
  }
};

module.exports = editText;

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_util__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__util_util__);






class App extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'section',
      { className: 'main' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Title, { text: __WEBPACK_IMPORTED_MODULE_2__util_util___default.a.upperCase('hello world!') }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Paragraph, { text: 'Bl\xE1 bl\xE1 bl\xE1' })
    );
  }
}

var Title = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createClass({
  displayName: 'Title',

  render: function () {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'header',
      { className: 'header' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h1',
        { className: 'title' },
        this.props.text
      )
    );
  }
});

var Paragraph = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createClass({
  displayName: 'Paragraph',

  render: function () {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'article',
      { className: 'article' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        { className: 'paragraph' },
        this.props.text
      )
    );
  }
});

/* harmony default export */ __webpack_exports__["a"] = App;

/***/ }),

/***/ 83:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[180]);