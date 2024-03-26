

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

        if (task.iscompleted === false) {
            createTaskElement(task, false);

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
const newTask = document.querySelector("#newTask")
const buttonNewTask = document.querySelector("#buttonNewTask")

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

function createTaskElement({id, task, iscompleted}) {
    const li = document.createElement("li");
    const input = document.createElement("input");
    const label = document.createElement("label");


    li.classList.add("list_item")
    input.type = "checkbox"
    input.id = id
    input.checked = iscompleted
    input.addEventListener("change", ()=>{
        const index = taskList.findIndex(item => id === task.id)
        taskList[index].iscompleted = !taskList[index].iscompleted
        
    })
    label.htmlFor = id
    label.textContent = task



    li.append(input, label)

    if (iscompleted) {

        label.classList.add("iscompleted");
        const icon = document.createElement("i");
        icon.classList.add("fa-solid", "fa-trash")
        li.appendChild(icon)
    }
    list.appendChild(li)

}

taskList.forEach(task => {

    createTaskElement(task)
})



// /* funcion para agregar un elemento */
const myArray = []


function addTask() {

    const li = document.createElement("li");
    li.classList.add("list_item")


    const icon = document.createElement("i");
    const input = document.getElementById("newTask").value;
    const label = document.createElement("label");

    label.innerText = input
    const checkbox = document.createElement("input")

    checkbox.type = "checkbox"
    icon.classList.add("fa-solid", "fa-trash")
    li.appendChild(checkbox)
    li.appendChild(label)
    li.appendChild(icon)
    icon.addEventListener("click", anytask)






    document.getElementById("list").appendChild(li)

    myObject = { id: 1, task: input, iscompleted: false }

    myArray.push(myObject)
    console.log(myArray)




}
function anytask() {

}



