//VARIABLES
const taskList = document.querySelector('#entry');
const taskInput = document.querySelector('input');
const btnAdd = document.querySelector('button');

//ARREGLO DE OBJETOS
const tasks = [
    {
        id: '',
        name: 'Wake up',
        isSelected: false
    },
    {
        id: '',
        name: 'Take a shower',
        isSelected: false
    },
    {
        id: '',
        name: 'Have breakfast',
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

  // GENERADORES DE ID
tasks.forEach(obj => {
      let id = Math.random().toString(36).slice(2)
      obj.id = id
  });
  
  const generateId = () => Math.random().toString(36).slice(2);

//CONTADOR TAREAS
function updateTask() {
const taskCounter = document.querySelector('#taskCounter');
taskCounter.textContent = `Total tareas: ${tasks.length}`
};

//CONTADOR TAREAS REALIZADAS
function updateTaskDone() {
const taskDone = document.querySelector('#taskDone');
const Done = tasks.filter(task => task.isSelected === true);
taskDone.textContent = `Tareas realizadas: ${Done.length}`;
}

const changeStatus = (id) =>{
    const taskIndex = tasks.findIndex((task) => task.id === id)
    if (tasks[taskIndex].isSelected === false){
        const newStatus = {
            id: tasks[taskIndex].id,
            name: tasks[taskIndex].name,
            isSelected: true
        }
    tasks.splice(taskIndex, 1, newStatus);
}else {
    const newStatus = {
        id: tasks[taskIndex].id,
        name: tasks[taskIndex].name,
        isSelected: false
    }
    tasks.splice(taskIndex, 1, newStatus);
}
render()
updateTask();
updateTaskDone();

};

//RENDERIZADOR
const render = () => {
    taskList.innerHTML = tasks.map((task) => 
    `<div class='info'><p>${task.id}</p> <p> ${task.name}</p> 
    <input id='check' type='checkbox' ${task.isSelected ? 'checked' :''} onclick='changeStatus("${task.id}")'>
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