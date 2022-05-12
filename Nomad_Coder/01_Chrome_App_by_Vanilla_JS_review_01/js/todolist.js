const toDoList = document.querySelector('#toDoListForm');
const listTextContainer = document.querySelector('#listText');
const listContainer = document.querySelector('#list');

const STORAGE_TODOLIST = 'todolist';
let TODOLIST = [];

function saveToLocalStorage() {
    localStorage.setItem(STORAGE_TODOLIST, JSON.stringify(TODOLIST));
}

function removeToDoList(event) {
    const li = event.target.parentElement;
    TODOLIST = TODOLIST.filter((something) => (something.text) != li.firstChild.data);
    saveToLocalStorage();
    li.remove();
}



function showToDoList(text) {
    const li = document.createElement('li');
    li.innerText = text;
    

    const button = document.createElement('button');
    button.innerText = '❌'
    button.addEventListener('click', removeToDoList);
    

    li.appendChild(button);
    listContainer.appendChild(li);
} 


function addToDoList(event) {
    event.preventDefault();
    const toDoThing = listTextContainer.value + ' ';
    listTextContainer.value = '';
    let object = {
        text : toDoThing,
        id : Date.now()
    };
    TODOLIST.push(object);
    saveToLocalStorage();
    showToDoList(toDoThing);
}

toDoList.addEventListener('submit', addToDoList);

let remainList = JSON.parse(localStorage.getItem(STORAGE_TODOLIST));

if(remainList !== null) {
    remainList.forEach((toDoThing) => {
        showToDoList(toDoThing.text);
    });
    TODOLIST = remainList; 
}