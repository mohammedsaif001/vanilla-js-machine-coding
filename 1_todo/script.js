document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("input-todo");
  const btn = document.querySelector(".add-todo-btn");
  const todoContainer = document.querySelector(".todo-list-container");

  let todoBeingEdited = null;

  // Adding Onclick Functionality
  btn.addEventListener("click", addTodo);

  // Event Delegation
  todoContainer.addEventListener("click", function (e) {
    console.log(e);
    if (e.target.className.includes("edit")) {
      const li = e.target.closest("li");
      const span = li.querySelector("span");

      todoBeingEdited = span;
      input.value = span.innerText;
      input.focus();
      btn.innerText = "Update";
    } else if (e.target.className.includes("delete")) {
      e.target.closest("li").remove();
    }
  });

  function addTodo() {
    let inputVal = input.value.trim();
    if (!inputVal) return;

    // Edit Todo

    if (todoBeingEdited) {
      todoBeingEdited.innerText = inputVal;
      todoBeingEdited = null;
      btn.innerText = "Add";
      input.value = "";
      return;
    }

    // Add New Todo
    const newTodo = document.createElement("li");
    newTodo.classList.add("todo");

    const editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.classList.add("btn", "btn-edit");

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.classList.add("btn", "btn-delete");

    newTodo.innerHTML = ` <span>${inputVal}</span>`;
    newTodo.appendChild(editBtn);
    newTodo.appendChild(deleteBtn);

    todoContainer.appendChild(newTodo);
    input.value = "";
  }
});
