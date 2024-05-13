const inputTask = document.querySelector('.input-task');
const btnTask = document.querySelector('.btn-task');
const tasks = document.querySelector('.tasks');

function createLi() {
    const li = document.createElement('li')
    return li
}

inputTask.addEventListener('keypress', function(e) {
    if(e.keyCode === 13 ){
        if (!inputTask.value) return;
        createTask(inputTask.value)
    }
})

function clearInput() {
    inputTask.value = '';
    inputTask.focus();
}

function createEraseButton(li) {
    li.innerText += ' ';
    const eraseButton = document.createElement('button');
    eraseButton.innerText = 'Apagar';
    eraseButton.setAttribute('class', 'Apagar');
    eraseButton.setAttribute('title', 'Apagar esta tarefa');
    li.appendChild(eraseButton);
}

function createTask(textInput) {
    const li = createLi();
    li.innerText = textInput;
    tasks.appendChild(li);
    clearInput();
    createEraseButton(li);
    saveTasks()
};

btnTask.addEventListener('click', function() {
    if (!inputTask.value) return;
    createTask(inputTask.value)
});

document.addEventListener('click', function(e){
    const el = e.target;

    if (el.classList.contains('Apagar')) {
        el.parentElement.remove();
        saveTasks();
    }
});

function saveTasks() {
    const liTasks = tasks.querySelectorAll('li');
    const tasklist = [];

    for (let task of liTasks) {
        let textTask = task.innerText;
        textTask = textTask.replace('Apagar', '').trim();
        tasklist.push(textTask);
    }

    const tasksJSON = JSON.stringify(tasklist);
    localStorage.setItem('tasks', tasksJSON)
}

function addSavedTasks() {
    if(!localStorage.getItem('tasks')) return;
    const tasks = localStorage.getItem('tasks');
    const tasklist = JSON.parse(tasks)
    
    for (let task of tasklist) {
        createTask(task)
    }
}

addSavedTasks()