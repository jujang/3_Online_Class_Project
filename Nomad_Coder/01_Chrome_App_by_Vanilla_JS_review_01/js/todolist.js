const toDoList = document.querySelector('#toDoListForm');
const listTextContainer = document.querySelector('#listText');
const listContainer = document.querySelector('#list');

const STORAGE_TODOLIST = 'todolist';
let TODOLIST = [];

function removeToDoList(event) {
    event.target.parentElement.remove();
    console.dir(event);
    // localStorage.removeItem();
}

function saveToLocalStorage() {
    console.log(JSON.stringify(TODOLIST));
    localStorage.setItem(STORAGE_TODOLIST, JSON.stringify(TODOLIST));
}

function addToDoList(event) {
    event.preventDefault();
    const toDoThing = listTextContainer.value;
    listTextContainer.value = '';

    let object = {
        text : toDoThing,
        id : Date.now()
    }
    TODOLIST.push(object);
    saveToLocalStorage();

    const li = document.createElement('li');
    const button = document.createElement('button');
    button.addEventListener('click', removeToDoList);
    button.innerText = '❌'
    li.innerText = toDoThing + '  ';
    li.appendChild(button);
    listContainer.appendChild(li);
}

function showRemainToDoList() {
    const remainList = localStorage.getItem(STORAGE_TODOLIST);
    const li = document.createElement('li');
    const button = document.createElement('button');
    button.addEventListener('click', removeToDoList);
    button.innerText = '❌'
    li.innerText = remainList + '  ';
    li.appendChild(button);
    listContainer.appendChild(li);
} 

toDoList.addEventListener('submit', addToDoList);

let remainList = localStorage.getItem(STORAGE_TODOLIST);
if(remainList != null) {
    showRemainToDoList();
}