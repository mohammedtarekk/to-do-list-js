let input = document.getElementById('user-input'),
    addTaskBt = document.getElementById('add-task'),
    noTasksElement = document.querySelector('.no-tasks'),
    tasksContainer = document.querySelector('.tasks-list'),
    tasksCount = document.querySelector('.tasks-count span'),
    completedCount = document.querySelector('.completed-count span'),
    deleteBT,
    doneBT;

// Adding task
addTaskBt.onclick = function(){

    if(input.value === "")
        return;

    let newTask = document.createElement('div');
    newTask.style.transition = 'all .5s ease-in-out';
    newTask.classList.add('task');

    let taskContent = document.createElement('span');
    let text = document.createTextNode(input.value);
    taskContent.appendChild(text);
    newTask.appendChild(taskContent);

    createDeleteBT();
    newTask.appendChild(deleteBT);
    createDoneBT();
    newTask.appendChild(doneBT);

    tasksContainer.appendChild(newTask);

    input.value = "";

    calculateCounters();
};

// Removing task
function createDeleteBT(){
    deleteBT = document.createElement('i');
    deleteBT.classList.add('fas');
    deleteBT.classList.add('fa-trash-alt');

    deleteBT.addEventListener('click',function(){
        this.parentNode.remove();
        calculateCounters();
    });    
}

// Marking task as DONE
function createDoneBT(){
    doneBT = document.createElement('i');
    doneBT.classList.add('fas');
    doneBT.classList.add('fa-check');

    doneBT.addEventListener('click',function(){
        this.parentNode.classList.toggle('isDone');
        calculateCounters();
    });
}

function calculateCounters(){
    tasksCount.textContent = tasksContainer.children.length;
    
    let done = Array.from(tasksContainer.children).filter(elem => elem.classList.contains('isDone'));
    completedCount.textContent = done.length;
}