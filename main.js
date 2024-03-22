

const options = [...document.querySelectorAll(".navItem")]
const hrAll = document.querySelector("#hrAll")
const hrActivate = document.querySelector("#hrActivate")
const hrCompleted = document.querySelector("#hrCompleted")



options[0].addEventListener("click", function () {

    hrAll.classList.remove("hidden")
    hrActivate.classList.add("hidden")
    hrCompleted.classList.add("hidden")
    list.innerHTML = " "
    taskList.forEach(task => {

        createTaskElement(task, false)


    })

})

options[1].addEventListener("click", function () {

    hrAll.classList.add("hidden")
    hrActivate.classList.remove("hidden")
    hrCompleted.classList.add("hidden")
    list.innerHTML = " ";
    taskList.forEach(task => {
       
        if  (task.iscompleted === false) {
            createTaskElement(task, false);
            console.log(task.iscompleted)
        }
    });

    

})
options[2].addEventListener("click", function () {
    hrAll.classList.add("hidden")
    hrActivate.classList.add("hidden")
    hrCompleted.classList.remove("hidden")
    list.innerHTML = " ";
    taskList.forEach(task => {
        if (task.iscompleted) {
            createTaskElement(task, true);
        }
    });

})



const list = document.querySelector("#list")

const taskList = [
    { id: 1, task: "limpiar", iscompleted: true },
    { id: 2, task: "cocinar", iscompleted: false },
    { id: 3, task: "comer", iscompleted: true },
    { id: 4, task: "correr", iscompleted: false },
    { id: 5, task: "saludar", iscompleted: true },
    { id: 6, task: "enseñar", iscompleted: true },
    { id: 7, task: "leer", iscompleted: false },

];

// const all = document.querySelector("#All");
// const Completed = document.querySelector("#Completed")

function createTaskElement({ id, task, iscompleted }, hrCompleted) {
    const li = document.createElement("li");
    const input = document.createElement("input");
    const label = document.createElement("label");


    li.classList.add("list_item")
    input.type = "checkbox"
    input.id = id
    input.checked = iscompleted
    label.htmlFor = id
    label.textContent = task



    li.append(input, label)

    if (iscompleted) {

        label.classList.add("Completed");
        const icon = document.createElement("i");
        icon.classList.add("fa-solid", "fa-trash")
        li.appendChild(icon)
    }
    list.appendChild(li)

}

taskList.forEach(task => {

    createTaskElement(task)


})

all.addEventListener("click", function () {
   


})
Completed.addEventListener("click", function () {
   
});

trashIcon.addEventListener("click", function () {
    taskList = taskList.filter(item => item.id !== task.id);
    renderTasks();
});




// Función para marcar una tarea como completada o imcompleta (Puede ser la misma función)
function completeTask() {



}

// Función para borrar una tarea
function deleteTask() {

}

// Funcion para borrar todas las tareas
function deleteAll() {

}

// Función para filtrar tareas completadas
function filterCompleted() {

}

// Función para filtrar tareas incompletas
function filterUncompleted() {

}


