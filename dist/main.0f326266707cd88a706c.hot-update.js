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

/***/ "./src/components/addremove/AddRemoveClass.js":
/*!****************************************************!*\
  !*** ./src/components/addremove/AddRemoveClass.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UI)\n/* harmony export */ });\n/* harmony import */ var _task_TasksClass_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../task/TasksClass.mjs */ \"./src/components/task/TasksClass.mjs\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n\nvar tasks = [];\n\nvar UI = /*#__PURE__*/function () {\n  function UI() {\n    _classCallCheck(this, UI);\n  }\n\n  _createClass(UI, null, [{\n    key: \"addTask\",\n    value: function addTask() {\n      // let inputText = document.querySelector('.input-text');\n      if (localStorage.getItem('tasks') !== null) {\n        tasks = JSON.parse(localStorage.getItem('tasks'));\n        var inputTextValue = document.querySelector('.input-text').value;\n        var completed = false;\n        var index = tasks.length;\n        var task = new _task_TasksClass_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"](inputTextValue, completed, index);\n        tasks.push(task);\n        console.log(tasks);\n        localStorage.setItem('tasks', JSON.stringify(tasks));\n        document.querySelector('.input-text').value = '';\n      } else {\n        tasks = [];\n        var _inputTextValue = document.querySelector('.input-text').value;\n        var _completed = false;\n        var _index = 0;\n\n        var _task = new _task_TasksClass_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"](_inputTextValue, _completed, _index);\n\n        tasks.push(_task);\n        console.log(tasks);\n        localStorage.setItem('tasks', JSON.stringify(tasks));\n        document.querySelector('.input-text').value = '';\n      }\n    }\n  }, {\n    key: \"removeTask\",\n    value: function removeTask(e) {\n      if (e.target.classList.contains('remove')) {\n        var elementId = e.target.id;\n        console.log(elementId);\n        e.target.parentElement.parentElement.remove();\n\n        var _tasks = JSON.parse(localStorage.getItem('tasks'));\n\n        console.log(_tasks);\n\n        var newTasks = _tasks.filter(function (task) {\n          return task.index != e.target.id;\n        });\n\n        _tasks = newTasks;\n        localStorage.setItem('tasks', JSON.stringify(_tasks));\n      }\n    }\n  }, {\n    key: \"editTask\",\n    value: function editTask(e) {\n      var elementId = e.target.id;\n      var tasks = JSON.parse(localStorage.getItem('tasks'));\n      tasks[elementId].description = e.target.innerText;\n      localStorage.setItem('tasks', JSON.stringify(tasks));\n    }\n  }, {\n    key: \"renderTasks\",\n    value: function renderTasks() {\n      var list = document.querySelector('.list');\n      tasks = JSON.parse(localStorage.getItem('tasks'));\n      list.innerHTML = '';\n\n      if (JSON.parse(localStorage.getItem('tasks')) !== null) {\n        tasks.forEach(function (task) {\n          list.innerHTML += \"<div class=\\\"item\\\">\\n    <div class=\\\"item__container--checkbox-text\\\">\\n    <input type=\\\"checkbox\\\">\\n    <span id=\\\"\".concat(task.index, \"\\\" class=\\\"editor\\\" contentEditable=\\\"true\\\">\").concat(task.description, \"</span>\\n    </div>\\n    <a id=\\\"\").concat(task.index, \"\\\"><i class=\\\"hide remove trash-\").concat(task.index, \" fa-solid fa-trash-can\\\" id=\\\"\").concat(task.index, \"\\\"></i><i class=\\\"ellipsis-\").concat(task.index, \" fa-solid fa-ellipsis-vertical\\\"></i></a>\\n  </div>\");\n        });\n      }\n    }\n  }]);\n\n  return UI;\n}();\n\n\n\n//# sourceURL=webpack://webpack2.0/./src/components/addremove/AddRemoveClass.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a8819013aebc6adf8af3")
/******/ })();
/******/ 
/******/ }
);