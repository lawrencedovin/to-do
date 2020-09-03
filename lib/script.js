const form = document.querySelector("form");
const taskInput = document.querySelector("#task-input");
const tasks = document.querySelector("#tasks");

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const newTask = document.createElement("li");
  const deleteIcon = document.createElement("i");

  newTask.innerHTML = taskInput.value;
  deleteIcon.classList.add("fas", "fa-times", "remove-button");
  newTask.prepend(deleteIcon);
  tasks.append(newTask);
  console.log('delete' + deleteIcon.innerHTML);
  
  taskInput.value = '';
});

tasks.addEventListener('click', (e) => {
    if(e.target.tagName === "I") e.target.parentElement.remove();
    else if(e.target.tagName === "LI") e.target.classList.toggle("strike-through");
})
