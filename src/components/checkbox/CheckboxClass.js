import UI from '../addremove/AddRemoveClass.js';

let checkboxIds = [];
export default class Checkbox {
  static getCheckedBoxes() {
    const clearCompleted = document.querySelector('.clear-completed');
    clearCompleted.onclick = () => {
      const markedCheckbox = document.querySelectorAll('.checkbox');
      markedCheckbox.forEach((checkbox) => {
        if (checkbox.checked === true) {
          const elementId = checkbox.id;
          checkboxIds.push(elementId);
        }
      });

      this.filterTasks();
    };
  }

  static filterTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    const checkboxNums = [];
    checkboxIds.forEach((checkbox) => checkboxNums.push(Number(checkbox)));
    const matchedTasks = tasks.filter(
      (task) => !checkboxNums.includes(task.index),
    );
    matchedTasks.forEach((task, index) => {
      task.index = index;
      return task.index;
    });
    localStorage.setItem('tasks', JSON.stringify(matchedTasks));
    UI.renderTasks();
    checkboxIds = [];
  }
}
