const options = [...document.querySelectorAll(".navItem")];
const hrAll = document.querySelector("#hrAll");
const hrActivate = document.querySelector("#hrActivate");
const hrCompleted = document.querySelector("#hrCompleted");
const list = document.querySelector("#list");
const newTaskInput = document.querySelector("#newTask");

const taskList = JSON.parse(localStorage.getItem("taskList")) || [];

function saveTaskListToLocalStorage() {
    localStorage.setItem("taskList", JSON.stringify(taskList));
}

function updateTaskList() {
    list.innerHTML = "";
    taskList.forEach(task => {
        if (
            (options[0].classList.contains("active") || options[0].classList.contains("hidden")) ||
            (options[1].classList.contains("active") && !task.iscompleted) ||
            (options[2].classList.contains("active") && task.iscompleted)
        ) {
            createTaskElement(task);
        }
    });
}

function createTaskElement({ id, task, iscompleted }) {
    const li = document.createElement("li");
    li.classList.add("list_item");

    const input = document.createElement("input");
    input.type = "checkbox";
    input.id = id;
    input.checked = iscompleted;
    input.addEventListener("change", () => {
        const index = taskList.findIndex(item => id === item.id);
        taskList[index].iscompleted = !taskList[index].iscompleted;
        saveTaskListToLocalStorage();
        updateTaskList();
    });

    const label = document.createElement("label");
    label.htmlFor = id;
    label.textContent = task;

    li.append(input, label);

    if (iscompleted) {
        label.classList.add("iscompleted");
        const icon = document.createElement("i");
        icon.classList.add("fa-solid", "fa-trash");
        icon.addEventListener("click", () => {
            removeTask(id);
        });
        li.appendChild(icon);
    }

    list.appendChild(li);
}

function removeTask(id) {
    const index = taskList.findIndex(task => task.id === id);
    taskList.splice(index, 1);
    saveTaskListToLocalStorage();
    updateTaskList();
}

options.forEach(option => {
    option.addEventListener("click", () => {
        options.forEach(opt => opt.classList.remove("active"));
        option.classList.add("active");
        if (option.id === "all") {
            hrAll.classList.remove("hidden");
            hrActivate.classList.add("hidden");
            hrCompleted.classList.add("hidden");
        } else if (option.id === "activate") {
            hrAll.classList.add("hidden");
            hrActivate.classList.remove("hidden");
            hrCompleted.classList.add("hidden");
        } else if (option.id === "completed") {
            hrAll.classList.add("hidden");
            hrActivate.classList.add("hidden");
            hrCompleted.classList.remove("hidden");
        }
        updateTaskList();
    });
});

document.getElementById("addTaskButton").addEventListener("click", function() {
    addTask();
});

function addTask() {
    const taskText = newTaskInput.value.trim();
    if (taskText !== "") {
        const newTask = {
            id: Date.now(),
            task: taskText,
            iscompleted: false
        };
        taskList.push(newTask);
        saveTaskListToLocalStorage();
        updateTaskList();
        newTaskInput.value = "";
    } else {
        alert("Please enter a task!");
    }
}


