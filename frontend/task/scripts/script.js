const form = document.querySelector("form");
const taskInput = document.querySelector("input");
const taskContainer = document.querySelector(".taskContainer");

const tasks = [];

function renderTasks(listOfTasks) {
  taskContainer.textContent = "";

  listOfTasks.forEach((task) => {
    const p = document.createElement("p");
    p.textContent = task;
    taskContainer.append(p);
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  tasks.push(taskInput.value);

  renderTasks(tasks);

  taskInput.value = "";

  localStorage.setItem("usertasks", JSON.stringify(tasks));
});
