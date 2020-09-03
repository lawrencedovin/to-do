const form = document.querySelector("form");
const taskInput = document.querySelector("#task-input");
const tasks = document.querySelector("#tasks");

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const newTask = document.createElement("li");
  const deleteIcon = document.createElement("i");
  const taskContent = document.createElement("p");

  taskContent.innerText = taskInput.value;
  deleteIcon.classList.add("fas", "fa-times", "remove-button");
  newTask.prepend(deleteIcon);
  newTask.appendChild(taskContent);
  tasks.append(newTask);
  
  taskInput.value = '';
});

tasks.addEventListener('click', (e) => {
    if(e.target.tagName === "I") e.target.parentElement.remove();
    else if(e.target.tagName === "P") e.target.classList.toggle("strike-through");
})
