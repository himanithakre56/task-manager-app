const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", function () {

    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");

    li.innerHTML = `
        <div>
            <input type="checkbox"
                   class="complete-checkbox">

            <span class="task-text">
                ${taskText}
            </span>
        </div>

        <div class="buttons">
            <button class="edit-btn">
                Edit
            </button>

            <button class="delete-btn">
                Delete
            </button>
        </div>
    `;

    const checkbox = li.querySelector(".complete-checkbox");
    const taskSpan = li.querySelector(".task-text");
    const deleteBtn = li.querySelector(".delete-btn");
    const editBtn = li.querySelector(".edit-btn");

    checkbox.addEventListener("change", function () {

        if (checkbox.checked) {
            taskSpan.classList.add("completed");
        } else {
            taskSpan.classList.remove("completed");
        }

    });

    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

    editBtn.addEventListener("click", function () {

        const updatedTask = prompt(
            "Edit your task:",
            taskSpan.textContent
        );

        if (
            updatedTask !== null &&
            updatedTask.trim() !== ""
        ) {
            taskSpan.textContent = updatedTask;
        }

    });

    taskList.appendChild(li);

    taskInput.value = "";
});