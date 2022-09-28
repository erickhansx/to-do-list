import './components/todolist/style.scss';

const tasks = [
  {
    description: 'Wash the dishes',
    completed: true,
    index: 0,
  },
  {
    description: 'Complete todo list project',
    completed: true,
    index: 0,
  },
  {
    description: 'Clean the house',
    completed: true,
    index: 0,
  },
];

tasks.forEach((task, index) => {
  task.index = index + 1;
});

const renderTasks = () => {
  const list = document.querySelector('.list');
  tasks.forEach((task) => {
    list.innerHTML += `<div class="item">
    <div class="item__container--checkbox-text">
    <input type="checkbox">
    <span>${task.description}</span>
    </div>
    <a class="remove" id="${task.index}"><i class="fa-solid fa-ellipsis-vertical"></i></a>
  </div>`;
  });
};

// Event Listener to render tasks when window loads.
window.addEventListener('DOMContentLoaded', renderTasks);

// Check if Webpack is currently on Development or Production mode.
if (process.env.NODE_ENV === 'production') {
  console.log('Production Mode');
} else if (process.env.NODE_ENV === 'development') {
  console.log('Development Mode');
}
