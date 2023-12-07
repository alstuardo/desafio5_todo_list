const taskList = document.querySelector('ul');
const taskInput = document.querySelector('input');
const btnAdd = document.querySelector('button');
const tasks = [];

btnAdd.addEventListener('click', () =>{
    if (taskInput.value === '') return

    tasks.push({id: generateId(), name: taskInput.value, isSelected: false})
    taskInput.value = ''

    render()
})

const generateId = () => Math.random().toString(36).slice(2)

const render = () => {
    taskList.innerHTML = tasks.map((task) => 
    `<li>${task.name} <button onclick='clean('${task.id}')'> Eliminar </button></li>
    
    `).join('')
}

const clean = (id) => {
const index = tasks.findIndex((task) => task.id === id)
tasks.splice(index, 1);
render();
}

render()