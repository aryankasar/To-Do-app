let taskList = document.getElementById("taskList");
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    let li = document.createElement("li");
    li.textContent = task.text;
    if (task.done) li.classList.add("done");

    let delBtn = document.createElement("button");
    delBtn.textContent = "❌";
    delBtn.onclick = () => deleteTask(index);

    li.onclick = () => toggleDone(index);
    li.appendChild(delBtn);
    taskList.appendChild(li);
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
  const taskInput = document.getElementById("taskInput");
  if (taskInput.value.trim()) {
    tasks.push({ text: taskInput.value, done: false });
    taskInput.value = "";
    renderTasks();
  }
}

function toggleDone(index) {
  tasks[index].done = !tasks[index].done;
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

renderTasks();