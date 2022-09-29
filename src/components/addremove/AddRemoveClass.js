import Task from '../task/TasksClass.js';

let tasks = [];
export default class UI {
  static addTask() {
    // let inputText = document.querySelector('.input-text');
    if (localStorage.getItem('tasks') !== null) {
      tasks = JSON.parse(localStorage.getItem('tasks'));
      const inputTextValue = document.querySelector('.input-text').value;
      const completed = false;
      const index = tasks.length;
      const task = new Task(inputTextValue, completed, index);
      tasks.push(task);
      localStorage.setItem('tasks', JSON.stringify(tasks));
      document.querySelector('.input-text').value = '';
    } else {
      tasks = [];
      const inputTextValue = document.querySelector('.input-text').value;
      const completed = false;
      const index = 0;
      const task = new Task(inputTextValue, completed, index);
      tasks.push(task);
      localStorage.setItem('tasks', JSON.stringify(tasks));
      document.querySelector('.input-text').value = '';
    }
  }

  static removeTask(e) {
    if (e.target.classList.contains('remove')) {
      e.target.parentElement.parentElement.remove();
      let tasks = JSON.parse(localStorage.getItem('tasks'));
      const newTasks = tasks.filter((task) => task.index != e.target.id); // eslint-disable-line
      tasks = newTasks;
      tasks.forEach((task, index) => {
        task.index = index;
      });
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }

  static clearAllCompleted() {
    // const checked = document.querySelectorAll('.checkbox');
  }

  static editTask(e) {
    const elementId = e.target.id;
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks[elementId].description = e.target.innerText;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  static renderTasks() {
    const list = document.querySelector('.list');
    tasks = JSON.parse(localStorage.getItem('tasks'));
    list.innerHTML = '';
    if (JSON.parse(localStorage.getItem('tasks')) !== null) {
      tasks.forEach((task) => {
        list.innerHTML += `<div class="item">
    <div class="item__container--checkbox-text">
    <input class="checkbox" type="checkbox">
    <span id="${task.index}" class="editor" contentEditable="true">${task.description}</span>
    </div>
    <a id="${task.index}"><i class="hide remove trash-${task.index} fa-solid fa-trash-can" id="${task.index}"></i><i class="ellipsis-${task.index} fa-solid fa-ellipsis-vertical"></i></a>
  </div>`;
      });
    }
  }
}
