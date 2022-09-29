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

eval("__webpack_require__.r(__webpack_exports__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './components/todolist/style.scss'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\nvar tasks = [{\n  description: 'Wash the dishes',\n  completed: true,\n  index: 0\n}, {\n  description: 'Complete todo list project',\n  completed: true,\n  index: 0\n}, {\n  description: 'Clean the house',\n  completed: true,\n  index: 0\n}];\ntasks.forEach(function (task, index) {\n  task.index = index + 1;\n});\n\nvar renderTasks = function renderTasks() {\n  var list = document.querySelector('.list');\n  tasks.forEach(function (task) {\n    list.innerHTML += \"<div class=\\\"item\\\">\\n    <div class=\\\"item__container--checkbox-text\\\">\\n    <input type=\\\"checkbox\\\">\\n    <span>\".concat(task.description, \"</span>\\n    </div>\\n    <a class=\\\"remove\\\" id=\\\"\").concat(task.index, \"\\\"><i class=\\\"fa-solid fa-ellipsis-vertical\\\"></i></a>\\n  </div>\");\n  });\n}; // Event Listener to render tasks when window loads.\n\n\nwindow.addEventListener('DOMContentLoaded', renderTasks); // Check if Webpack is currently on Development or Production mode.\n\nif (false) {} else if (true) {\n  console.log('Development Mode');\n}\n\n//# sourceURL=webpack://webpack2.0/./src/index.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("35ff6cfa366003158409")
/******/ })();
/******/ 
/******/ }
);