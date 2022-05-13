const toDoContainer = document.querySelector('#toDoList');
const toDoThing = document.querySelector('#toDoThing');
const toDoList = document.querySelector('#list');

const TODOLIST = 'todo';
let toDoArray = [];


function showToDoThing(toDoThing){
    const li = document.createElement('li');
    li.id = toDoThing.id;
    const span = document.createElement('span');
    span.innerText = toDoThing.text;
    li.appendChild(span);
    toDoList.appendChild(li);

    const deleteButton = document.createElement('button');
    deleteButton.innerText = '❌';
    li.appendChild(deleteButton);

    deleteButton.addEventListener('click', deleteToDoThing);
}

function addToDoThing(event) {
    event.preventDefault();
    let thing = toDoThing.value + ' ';
    toDoThing.value = '';
    
    let todo = {
        text:thing,
        id: Date.now()
    }

    toDoArray.push(todo);
    localStorage.setItem(TODOLIST, JSON.stringify(toDoArray));

    showToDoThing(todo);
}

function deleteToDoThing(event) {
    const seletedli = event.target.parentElement;
    console.log(seletedli.id);
    toDoArray = toDoArray.filter((thing) => thing.id !== parseInt(seletedli.id));
    localStorage.setItem(TODOLIST, JSON.stringify(toDoArray));
    seletedli.remove();
}  

toDoContainer.addEventListener('submit', addToDoThing);

let remainTodoThings = JSON.parse(localStorage.getItem(TODOLIST));
if(remainTodoThings != null) {
    toDoArray = remainTodoThings;
    toDoArray.forEach((thing) => {
        showToDoThing(thing);
    });
}


