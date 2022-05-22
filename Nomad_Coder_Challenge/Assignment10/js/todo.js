const todoForm = document.querySelector('#todoForm');
const todoInput = document.querySelector('#todoInput');
const ulPage = document.querySelector('#ulPage');
const TODOLIST = 'todolist';

let todoArray = [];

function saveToDo(){
    localStorage.setItem(TODOLIST, JSON.stringify(todoArray));
}

function showToDo(object){
    const ul = document.createElement('ul');
    ul.id = object.id;
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.innerText = object.text;
    const button = document.createElement('button');
    button.id = 'todoButton';
    button.innerText = '❌';
    button.addEventListener('mousedown', clickSizeDown);
    button.addEventListener('click', removeTodo);
    button.addEventListener('mouseover', btnover);
    li.appendChild(span);
    li.appendChild(button);
    ul.appendChild(li);
    ulPage.appendChild(ul);
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
    const ul = event.target.parentElement.parentElement;
    todoArray = todoArray.filter(thing => thing.id !== parseInt(ul.id));
    saveToDo();
    ul.remove();
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
