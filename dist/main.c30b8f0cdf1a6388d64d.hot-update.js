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

/***/ "./src/components/checkbox/CheckboxClass.js":
/*!**************************************************!*\
  !*** ./src/components/checkbox/CheckboxClass.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Checkbox)\n/* harmony export */ });\n/* harmony import */ var _addremove_AddRemoveClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../addremove/AddRemoveClass.js */ \"./src/components/addremove/AddRemoveClass.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n\nvar checkboxIds = [];\n\nvar Checkbox = /*#__PURE__*/function () {\n  function Checkbox() {\n    _classCallCheck(this, Checkbox);\n  }\n\n  _createClass(Checkbox, null, [{\n    key: \"getCheckedBoxes\",\n    value: function getCheckedBoxes() {\n      var _this = this;\n\n      var clearCompleted = document.querySelector('.clear-completed');\n\n      clearCompleted.onclick = function () {\n        var markedCheckbox = document.querySelectorAll('.checkbox');\n        markedCheckbox.forEach(function (checkbox) {\n          if (checkbox.checked === true) {\n            var elementId = checkbox.id;\n            checkboxIds.push(elementId);\n          }\n        });\n\n        _this.filterTasks();\n      };\n    }\n  }, {\n    key: \"filterTasks\",\n    value: function filterTasks() {\n      var tasks = JSON.parse(localStorage.getItem('tasks'));\n      var checkboxNums = [];\n      checkboxIds.forEach(function (checkbox) {\n        return checkboxNums.push(Number(checkbox));\n      });\n      var matchedTasks = tasks.filter(function (task) {\n        return !checkboxNums.includes(task.index);\n      });\n      matchedTasks.forEach(function (task, index) {\n        task.index = index;\n        return task.index;\n      });\n      localStorage.setItem('tasks', JSON.stringify(matchedTasks));\n      _addremove_AddRemoveClass_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].renderTasks();\n      checkboxIds = [];\n    }\n  }, {\n    key: \"changeListener\",\n    value: function changeListener() {\n      var list = document.querySelector('.list');\n\n      list.onchange = function () {\n        var checkbox = document.querySelectorAll('.checkbox');\n        var tasks = JSON.parse(localStorage.getItem('tasks'));\n        checkbox.forEach(function (checkbox) {\n          var elementId = checkbox.id;\n\n          if (checkbox.checked) {\n            tasks[elementId].completed = true;\n          } else {\n            tasks[elementId].completed = false;\n          }\n        });\n        localStorage.setItem('tasks', JSON.stringify(tasks));\n      };\n    }\n  }]);\n\n  return Checkbox;\n}();\n\n\n\n//# sourceURL=webpack://webpack2.0/./src/components/checkbox/CheckboxClass.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("645e83764d6b6f574ae6")
/******/ })();
/******/ 
/******/ }
);