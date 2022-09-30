import './components/addremove/style.scss';
import UI from './components/addremove/AddRemoveClass.js';
import Checkbox from './components/checkbox/CheckboxClass.js';

const reloadWindow = document.querySelector('.fa-arrows-rotate');

// Event Listener to render tasks when window loads.
window.addEventListener('DOMContentLoaded', UI.renderTasks);

// Event Listeners

// Event listener to add a Task
const inputText = document.querySelector('.input-text');
inputText.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    UI.addTask();
    UI.renderTasks();
  }
});

// Event listener to edit tasks
const list = document.querySelector('.list');
list.addEventListener('keypress', (e) => {
  if (e.target.classList.contains('editor') && e.key === 'Enter') {
    e.preventDefault();
    UI.editTask(e);
  }
});

// Event listener to show Trashcan

list.addEventListener('focusin', (e) => {
  if (e.target.classList.contains('editor')) {
    const elementId = e.target.id;
    const trashCan = document.querySelector(`.trash-${elementId}`);
    const ellipsisVertical = document.querySelector(`.ellipsis-${elementId}`);
    trashCan.classList.remove('hide');
    ellipsisVertical.classList.add('hide');
  }
});

// Event Listener to show Ellipsis

list.addEventListener('focusout', (e) => {
  if (e.target.classList.contains('editor')) {
    UI.editTask(e);
    const elementId = e.target.id;
    const trashCan = document.querySelector(`.trash-${elementId}`);
    const ellipsisVertical = document.querySelector(`.ellipsis-${elementId}`);

    setTimeout(() => {
      trashCan.classList.add('hide');
      ellipsisVertical.classList.remove('hide');
    }, 1000);
  }
});

// Event listener to remove Tasks

list.addEventListener('click', (e) => {
  UI.removeTask(e);
});

Checkbox.getCheckedBoxes();

// Event listener for Reload Icon
reloadWindow.addEventListener('click', () => {
  window.location.reload();
});

// Event Listener for change on checkbox

Checkbox.changeListener();

// Check if Webpack is currently on Development or Production mode.
if (process.env.NODE_ENV === 'production') {
  console.log('Production Mode');
} else if (process.env.NODE_ENV === 'development') {
  console.log('Development Mode');
}
