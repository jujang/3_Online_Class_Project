const todoForm = document.querySelector('#todoForm');
const todoInput = document.querySelector('#todoInput');
const ul = document.querySelector('#ul');
const TODOLIST = 'todolist';

let todoArray = [];

function saveToDo(){
    localStorage.setItem(TODOLIST, JSON.stringify(todoArray));
}

function showToDo(object){
    const li = document.createElement('li');
    li.id = object.id;
    const span = document.createElement('span');
    span.innerText = object.text;
    const button = document.createElement('button');
    button.innerText = '❌';
    button.addEventListener('click', removeTodo);
    li.appendChild(span);
    li.appendChild(button);
    ul.appendChild(li);
}

function addTodo(event){
    event.preventDefault();
    let userIdCheck = localStorage.getItem(USERNAME);
    if(userIdCheck == null){
        alert('You have to login first!');
        todoInput.value = '';
    } else {
        let thisToDoThing = todoInput.value+' ';
        todoInput.value = '';
        let todoObject = {
            text: thisToDoThing,
            id: Date.now()
        }
        todoArray.push(todoObject);
        saveToDo();
        showToDo(todoObject);
    }
}

function removeTodo(event){
    const li = event.target.parentElement;
    todoArray = todoArray.filter(thing => thing.id !== parseInt(li.id));
    saveToDo();
    li.remove();
}

todoForm.addEventListener('submit', addTodo);

function checkRemainToDO(){
    const remainToDoList = localStorage.getItem(TODOLIST);
    if(remainToDoList != null){
        todoArray = JSON.parse(remainToDoList);
        todoArray.forEach(todoThing => {
            showToDo(todoThing);
        });
    }
}

checkRemainToDO();
