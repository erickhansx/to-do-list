/**
 * @jest-environment jsdom
 */
import { storeAdd, storeGet } from '../__mocks__/localStorage.js';
import renderTasksMock from '../__mocks__/renderTasks.js';
import removeTaskMock from '../__mocks__/removeTasks.js';

document.body.innerHTML = '<div class="list"><div>';

const task1 = {
  description: 'testing 1',
  completed: false,
  index: 0,
};

const task2 = {
  description: 'testing 2',
  completed: false,
  index: 1,
};

const tasksArr = [];

describe('addTask ', () => {
  test('should add a task to the list', () => {
    tasksArr.push(task1);
    expect(tasksArr).toHaveLength(1);
  });

  test('should render to UI', () => {
    renderTasksMock(tasksArr);
    expect(document.querySelectorAll('.item')).toHaveLength(1);
  });

  test('should add task to localStorage', () => {
    storeAdd(task1);
    storeAdd(task2);
    const storage = storeGet();
    expect(storage).toHaveLength(2);
  });
});
