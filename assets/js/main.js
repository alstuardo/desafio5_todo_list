//VARIABLES
const taskList = document.querySelector('#entry');
const taskInput = document.querySelector('input');
const btnAdd = document.querySelector('button');

//ARREGLO DE OBJETOS
const tasks = [
    {
        id: 1,
        name: 'wake up',
        isSelected: false
    },
    {
        id: 2,
        name: 'take a shower',
        isSelected: false
    },
    {
        id: 3,
        name: 'have breakfast',
        isSelected: false
    }
];

//BOTON AGREGAR TAREA
btnAdd.addEventListener('click', () =>{
    if (taskInput.value === '') return

    tasks.push({id: generateId(), name: taskInput.value, isSelected: false})
    taskInput.value = ''

    render()
    updateTask()
    updateTaskDone()
  });

//CONTADOR TAREAS
function updateTask() {
const taskCounter = document.querySelector('#taskCounter');
taskCounter.textContent = `Total tareas: ${tasks.length}`
} ;

//CONTADOR TAREAS REALIZADAS
function updateTaskDone() {
const taskDone = document.querySelector('#taskDone');
const Done = tasks.filter(task => task.isSelected === true);
taskDone.textContent = `Tareas realizadas: ${Done.length}`;
}

//CAMBIO DE ESTATUS CHECKBOX
const changeStatus = (id) =>{
    const taskIndex = tasks.findIndex((task) => task.id === id)
    taskIndex.isSelected = !taskIndex.isSelected
    }
    
//GENERADORES DE ID
tasks.forEach(obj => {
    let id = Math.random().toString(36).slice(2)
    obj.id = id
});

const generateId = () => Math.random().toString(36).slice(2);

//RENDERIZADOR
const render = () => {
    taskList.innerHTML = tasks.map((task) => 
    `<div class='info'><p>${task.id}</p> <p> ${task.name}</p> 
    <input id='check' type='checkbox' ${task.isSelected ? 'checked' :''} onclick='changeStatus(${task.id})'> </>
    <button onclick='clean("${task.id}")'>Eliminar</button>
    </div>
    
    `).join('');
}

//ELIMINAR
const clean = (id) => {
const index = tasks.findIndex((task) => task.id === id)
tasks.splice(index, 1);
render();
updateTask();
updateTaskDone();
}

render();
updateTask();
updateTaskDone();