export default function renderTasks(tasksArr) {
  const list = document.querySelector('.list');
  list.innerHTML = '';
  if (tasksArr !== null) {
    tasksArr.forEach((task) => {
      list.innerHTML += `<div class="item">
  <div class="item__container--checkbox-text">
  <input class="checkbox" id="${task.index}" type="checkbox">
  <span id="${task.index}" class="editor" contentEditable="true">${task.description}</span>
  </div>
  <a class="anchor" id="${task.index}"><i class="hide remove trash-${task.index} fa-solid fa-trash-can" id="${task.index}"></i><i class="ellipsis-${task.index} fa-solid fa-ellipsis-vertical"></i></a>
</div>`;
    });
  }
}
