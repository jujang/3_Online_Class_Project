const toDoList = document.querySelector('#toDoListForm');
const listTextContainer = document.querySelector('#listText');
const listContainer = document.querySelector('#list');

const STORAGE_TODOLIST = 'todolist';
let TODOLIST = [];

function removeToDoList(event) {
    event.target.parentElement.remove();
    localStorage.removeItem(STORAGE_TODOLIST);
}

function addToDoList(event) {
    event.preventDefault();
    const toDoThing = listTextContainer.value;
    localStorage.setItem(STORAGE_TODOLIST, toDoThing);
    listTextContainer.value = '';
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
    console.log('!!');
    showRemainToDoList();
}