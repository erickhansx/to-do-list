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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_addremove_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/addremove/style.scss */ \"./src/components/addremove/style.scss\");\n/* harmony import */ var _components_addremove_AddRemoveClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/addremove/AddRemoveClass.js */ \"./src/components/addremove/AddRemoveClass.js\");\n\n // Event Listener to render tasks when window loads.\n\nwindow.addEventListener('DOMContentLoaded', _components_addremove_AddRemoveClass_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].renderTasks); // Event Listeners\n//Event listener to add a Task\n\nvar inputText = document.querySelector('.input-text');\ninputText.addEventListener('keydown', function (e) {\n  if (e.key == 'Enter') {\n    _components_addremove_AddRemoveClass_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addTask();\n    _components_addremove_AddRemoveClass_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].renderTasks();\n  }\n}); //Event listener to edit tasks\n\nvar list = document.querySelector('.list');\nlist.addEventListener('keypress', function (e) {\n  if (e.target.classList.contains('editor') && e.key === 'Enter') {\n    e.preventDefault();\n    _components_addremove_AddRemoveClass_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].editTask(e);\n  }\n}); //Event listener to show Trashcan\n\nlist.addEventListener('focusin', function (e) {\n  if (e.target.classList.contains('editor')) {\n    var elementId = e.target.id;\n    var trashCan = document.querySelector(\".trash-\".concat(elementId));\n    var ellipsisVertical = document.querySelector(\".ellipsis-\".concat(elementId));\n    trashCan.classList.remove('hide');\n    ellipsisVertical.classList.add('hide');\n  }\n}); //Event Listener to show Ellipsis\n\nlist.addEventListener('focusout', function (e) {\n  if (e.target.classList.contains('editor')) {\n    _components_addremove_AddRemoveClass_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].editTask(e);\n    var elementId = e.target.id;\n    var trashCan = document.querySelector(\".trash-\".concat(elementId));\n    var ellipsisVertical = document.querySelector(\".ellipsis-\".concat(elementId));\n    setTimeout(function () {\n      trashCan.classList.add('hide');\n      ellipsisVertical.classList.remove('hide');\n    }, 1000);\n  }\n}); // Event listener to remove Tasks\n\nlist.addEventListener('click', function (e) {\n  // console.log(e.target);\n  _components_addremove_AddRemoveClass_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].removeTask(e);\n}); // Check if Webpack is currently on Development or Production mode.\n\nif (false) {} else if (true) {\n  console.log('Development Mode');\n}\n\n//# sourceURL=webpack://webpack2.0/./src/index.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a385e097755243015d1a")
/******/ })();
/******/ 
/******/ }
);