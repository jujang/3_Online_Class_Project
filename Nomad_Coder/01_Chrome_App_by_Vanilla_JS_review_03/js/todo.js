const todo = document.querySelector('#todo');
const todoForm = document.querySelector('#todoForm');
const todoInput = document.querySelector('#todoInput');
const ul = document.querySelector('#ul');

const localtodo = 'todolist';
let toDoList = [];


function deleteToDo(event){
    const parentElement = event.target.parentElement;
    toDoList = toDoList.filter(Thing => Thing.id != parentElement.id);
    localStorage.setItem(localtodo, JSON.stringify(toDoList));        
    event.target.parentElement.remove();
}

function showToDo(todoObject){
    const li = document.createElement('li');
    li.id = todoObject.id;
    li.innerText = todoObject.text + ' ';
    const button = document.createElement('button');
    button.innerText = '❌';
    button.addEventListener('click', deleteToDo);

    li.appendChild(button);
    ul.appendChild(li);
}

function enrollToDoThing(event) {
    event.preventDefault();
    let todoThing = todoInput.value;
    todoInput.value = '';
    let todoObject = {
        text: todoThing,
        id: Date.now()
    }
    showToDo(todoObject);
    toDoList.push(todoObject);
    localStorage.setItem(localtodo, JSON.stringify(toDoList));
}


todoForm.addEventListener('submit', enrollToDoThing);

let remainToDo = localStorage.getItem(localtodo);
if(remainToDo != null){
    toDoList = JSON.parse(remainToDo);
    toDoList.forEach(todoThing => {
        showToDo(todoThing);
    });
}