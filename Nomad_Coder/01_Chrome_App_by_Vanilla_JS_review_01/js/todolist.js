const toDoList = document.querySelector('#toDoListForm');
const listTextContainer = document.querySelector('#listText');
const listContainer = document.querySelector('#list');

const TODOLIST = [];

function addToDoList(event) {
    event.preventDefault();
    const todoList = listTextContainer.value;
    listTextContainer.value = '';
    console.log(todoList);
    // listContainer.appendChild(`<li>${todoList}</li>`);
    const li = document.createElement('li');
    li.innerHTML = todoList;
    listContainer.appendChild(li);
    
}

toDoList.addEventListener('submit', addToDoList);

