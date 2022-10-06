import { storeGet } from "../__mocks__/localStorage";

export default function removeTask(e, ei) {
  let newArray = storeGet();
  newArray.splice(ei.index, 1);
  // e.parentElement.remove();
  let tasks = JSON.parse(localStorage.getItem("tasks"));
  const newTasks = tasks.filter((task) => task.index != e.target.id); // eslint-disable-line
  tasks = newTasks;
  tasks.forEach((task, index) => {
    task.index = index;
  });
  localStorage.setItem("tasks", JSON.stringify(newArray));
}
