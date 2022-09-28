import Task from '../task/TasksClass.mjs';

let tasks = [];
export default class UI {
  static addTask() {
    // let inputText = document.querySelector('.input-text');
    if (localStorage.getItem('tasks') !== null) {
      tasks = JSON.parse(localStorage.getItem('tasks'));
      let inputTextValue = document.querySelector('.input-text').value;
      let completed = false;
      let index = tasks.length;
      const task = new Task(inputTextValue, completed, index);
      tasks.push(task);
      console.log(tasks);
      localStorage.setItem('tasks', JSON.stringify(tasks));
      document.querySelector('.input-text').value = '';
    } else {
      tasks = [];
      let inputTextValue = document.querySelector('.input-text').value;
      let completed = false;
      let index = 0;
      const task = new Task(inputTextValue, completed, index);
      tasks.push(task);
      console.log(tasks);
      localStorage.setItem('tasks', JSON.stringify(tasks));
      document.querySelector('.input-text').value = '';
    }
  }

  static removeTask(e) {
    let elementId = e.target.id;
    console.log(elementId);
  }

  static editTask(e) {}

  static renderTasks() {
    const list = document.querySelector('.list');
    tasks = JSON.parse(localStorage.getItem('tasks'));
    list.innerHTML = '';
    if (JSON.parse(localStorage.getItem('tasks')) !== null) {
      tasks.forEach((task) => {
        list.innerHTML += `<div class="item">
    <div class="item__container--checkbox-text">
    <input type="checkbox">
    <span id="${task.index}" class="editor" contentEditable="true">${task.description}</span>
    </div>
    <a class="remove" id="${task.index}"><i class="fa-solid fa-ellipsis-vertical"></i></a>
  </div>`;
      });
    }
  }
}
