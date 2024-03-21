

/* Los siguientes nombres de funciones son una sugerencia de funciones que necesitarás en tu programa,
sin embargo, no te limites solo a estas funciones. Crea tantas como consideres necesarias.

La estructura de cada objeto "tarea" es la siguiente:

{
  id: 1,
  title: "tarea",
  completed: false
}

// */
// const inputBox = document.getElementById("input-box");
// const listContainer = document.getElementById("list-container");



// // Función para añadir una nueva tarea
// function addTask() {
//   if (inputBox.value === "") {
//     alert("you must write something")
//   } else {
//     let li = document.createElement("li");
//     li.innerHTML = inputBox.value;
//     listContainer.appendChild(li);
//   }

// }

const options = [...document.querySelectorAll(".navItem")]
const hrAll = document.querySelector("#hrAll")
const hrActivate = document.querySelector("#hrActivate")
const hrCompleted = document.querySelector("#hrCompleted")


options[0].addEventListener("click", function () {

  hrAll.classList.remove("hidden")
  hrActivate.classList.add("hidden")
  hrCompleted.classList.add("hidden")

})

options[1].addEventListener("click", function () {

  hrAll.classList.add("hidden")
  hrActivate.classList.remove("hidden")
  hrCompleted.classList.add("hidden")

})
options[2].addEventListener("click", function () {
  hrAll.classList.add("hidden")
  hrActivate.classList.add("hidden")
  hrCompleted.classList.remove("hidden")

})


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


