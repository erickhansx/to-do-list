/**
 * @jest-environment jsdom
 */

import { storeAdd, storeGet } from '../__mocks__/localStorage.js';

let tasksArray = [
  {
    description: 'Hello',
    completed: false,
    index: 1,
  },
  {
    description: 'Hello',
    completed: false,
    index: 2,
  },
  {
    description: 'Hello',
    completed: false,
    index: 3,
  },
];

storeAdd(tasksArray);

const editFunction = (h3, task) => {
  tasksArray[task.index - 1].description = h3;
  localStorage.setItem('tasks', JSON.stringify(tasksArray));
};

document.body.innerHTML =
  '<div id="list"><div class="line"><input type="checkbox" class="check"><h3>hello</h3><span class="options"><i class="fa-solid fa-ellipsis-vertical"></i></span><span class="delete"><i class="fa-solid fa-trash-can"></i></span></div><div class="line"><input class="check" type="checkbox"><h3>david</h3><span class="options"><i class="fa-solid fa-ellipsis-vertical"></i></span><span class="delete"><i class="fa-solid fa-trash-can"></i></span></div></div><div id="clear-all">clear all</div>';

const checkBox = document.querySelector('.check');

const editCheckbox = (task) => {
  if (checkBox.checked) {
    tasksArray = storeGet();
    tasksArray[task.index - 1].completed = true;
    storeAdd(tasksArray);
  } else {
    tasksArray = storeGet();
    tasksArray[task.index - 1].completed = false;
    storeAdd(tasksArray);
  }
};

function clearComplete() {
  let taskArr = storeGet();
  taskArr = taskArr.filter((task) => task.completed === false);
  storeAdd(taskArr);
  return taskArr;
}

checkBox.addEventListener('click', () => {
  editCheckbox(tasksArray[0]);
});

const clearAll = document.getElementById('clear-all');
clearAll.addEventListener('click', () => {
  tasksArray = clearComplete();
});

// tests
describe('Editing task description', () => {
  test('editing object from local storage', () => {
    editFunction('what', tasksArray[0]);
    expect(tasksArray[0].description).toBe('what');
  });

  test('Editing items completed status', () => {
    checkBox.click();
    expect(tasksArray[0].completed).toBe(true);
  });
});

describe('Editing task description', () => {
  test('testing clear all functionality', () => {
    clearAll.click();
    expect(tasksArray).toHaveLength(3);
  });
});
