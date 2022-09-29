"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatewebpack2_0"]("main",{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './components/addremove/style.scss'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './components/addremove/AddRemoveClass.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n // Event Listener to render tasks when window loads.\n\nwindow.addEventListener('DOMContentLoaded', Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './components/addremove/AddRemoveClass.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())); // Event Listeners\n// Event listener to add a Task\n\nvar inputText = document.querySelector('.input-text');\ninputText.addEventListener('keydown', function (e) {\n  if (e.key == 'Enter') {\n    console.log(document.querySelector('.input-text').value);\n    Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './components/addremove/AddRemoveClass.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();\n    Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './components/addremove/AddRemoveClass.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();\n  }\n}); // Event listener to edit tasks\n\nvar list = document.querySelector('.list');\nlist.addEventListener('keypress', function (e) {\n  if (e.target.classList.contains('editor') && e.key === 'Enter') {\n    e.preventDefault();\n    Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './components/addremove/AddRemoveClass.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(e);\n    Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './components/addremove/AddRemoveClass.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();\n  }\n}); // Event listener to show Trashcan\n\nlist.addEventListener('focusin', function (e) {\n  if (e.target.classList.contains('editor')) {\n    var elementId = e.target.id;\n    var trashCan = document.querySelector(\".trash-\".concat(elementId));\n    var ellipsisVertical = document.querySelector(\".ellipsis-\".concat(elementId));\n    trashCan.classList.remove('hide');\n    ellipsisVertical.classList.add('hide');\n  }\n}); // Event Listener to show Ellipsis\n\nlist.addEventListener('focusout', function (e) {\n  Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './components/addremove/AddRemoveClass.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(e);\n\n  if (e.target.classList.contains('editor')) {\n    var elementId = e.target.id;\n    var trashCan = document.querySelector(\".trash-\".concat(elementId));\n    var ellipsisVertical = document.querySelector(\".ellipsis-\".concat(elementId));\n    setTimeout(function () {\n      trashCan.classList.add('hide');\n      ellipsisVertical.classList.remove('hide');\n    }, 1000);\n  }\n}); // Event listener to remove Tasks\n\nlist.addEventListener('click', function (e) {\n  // console.log(e.target);\n  Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './components/addremove/AddRemoveClass.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(e);\n}); // Check if Webpack is currently on Development or Production mode.\n\nif (false) {} else if (true) {\n  console.log('Development Mode');\n}\n\n//# sourceURL=webpack://webpack2.0/./src/index.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a010597d6218b9fe5126")
/******/ })();
/******/ 
/******/ }
);