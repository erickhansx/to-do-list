let newArr = [];
const storeGet = () => {
  if (localStorage.getItem('tasks') === null) {
    newArr = [];
  } else {
    newArr = JSON.parse(localStorage.getItem('tasks'));
  }
  return newArr;
};

const storeAdd = (task) => {
  newArr = storeGet();
  newArr.push(task);
  localStorage.setItem('tasks', JSON.stringify(newArr));
};

export { storeAdd, storeGet };
