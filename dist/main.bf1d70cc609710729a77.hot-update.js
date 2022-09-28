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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_addremove_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/addremove/style.scss */ \"./src/components/addremove/style.scss\");\n/* harmony import */ var _components_addremove_AddRemoveClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/addremove/AddRemoveClass.js */ \"./src/components/addremove/AddRemoveClass.js\");\n\n\nvar tasks = [// {\n  //   description: 'Wash the dishes',\n  //   completed: true,\n  //   index: 0,\n  // },\n  // {\n  //   description: 'Complete todo list project',\n  //   completed: true,\n  //   index: 0,\n  // },\n  // {\n  //   description: 'Clean the house',\n  //   completed: true,\n  //   index: 0,\n  // },\n]; // tasks.forEach((task, index) => {\n//   task.index = index;\n// });\n\nvar renderTasks = function renderTasks() {\n  var list = document.querySelector('.list');\n  tasks.forEach(function (task) {\n    list.innerHTML += \"<div class=\\\"item\\\">\\n    <div class=\\\"item__container--checkbox-text\\\">\\n    <input type=\\\"checkbox\\\">\\n    <span>\".concat(task.description, \"</span>\\n    </div>\\n    <a class=\\\"remove\\\" id=\\\"\").concat(task.index, \"\\\"><i class=\\\"fa-solid fa-ellipsis-vertical\\\"></i></a>\\n  </div>\");\n  });\n}; // Event Listener to render tasks when window loads.\n\n\nwindow.addEventListener('DOMContentLoaded', _components_addremove_AddRemoveClass_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].renderTasks); // Event Listeners\n//Event listener to add a Task\n\nvar inputText = document.querySelector('.input-text');\ninputText.addEventListener('keydown', function (e) {\n  if (e.key == 'Enter') {\n    console.log(document.querySelector('.input-text').value);\n    _components_addremove_AddRemoveClass_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addTask();\n    _components_addremove_AddRemoveClass_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].renderTasks();\n  }\n}); //Event listener to Remove and edit tasks\n\nvar list = document.querySelector('.list');\nlist.addEventListener('keypress', function (e) {\n  if (e.target.classList.contains('editor') && e.key === 'Enter') {\n    e.preventDefault();\n  }\n}); // Check if Webpack is currently on Development or Production mode.\n\nif (false) {} else if (true) {\n  console.log('Development Mode');\n}\n\n//# sourceURL=webpack://webpack2.0/./src/index.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("6e707bdaf98ac4a5ea40")
/******/ })();
/******/ 
/******/ }
);