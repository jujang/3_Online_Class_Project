const loginForm = document.querySelector('#loginForm');
const loginText = document.querySelector('#loginInput');
const greet = document.querySelector('#greeting');
const greetSpace = document.querySelector('#greetSpace');
const logoutBtn = document.querySelector('#logoutButton');

const USERNAME = 'username';


function toggleClass(){
    loginForm.classList.toggle('hidden');
    greet.classList.toggle('hidden');
    todoForm.classList.toggle('hidden');
}

function userLogin(event){
    event.preventDefault();
    let username = loginText.value;
    loginText.value = '';
    localStorage.setItem(USERNAME, username);
    toggleClass();
    diplayGreet();
}

function clickSizeDown(event){
    event.target.classList.add('onClick');
}

function userLogout(){
    let response = confirm('Are you really going to log out?');
    if(response){
        localStorage.clear();
        toggleClass();
        ulPage.innerHTML = '';
    } else {

    }
}

function btnover(event){
    event.target.style.cursor = 'pointer';
}
function diplayGreet(){
    greetSpace.innerText = `hello ${localStorage.getItem(USERNAME)}    `;
    greet.insertBefore(greetSpace, greet.firstChild);
}


loginForm.addEventListener('submit', userLogin);
logoutBtn.addEventListener('mousedown', clickSizeDown);
logoutBtn.addEventListener('click', userLogout);
logoutBtn.addEventListener('mouseover', btnover);


function checkUserId(){
    let remainUser = localStorage.getItem(USERNAME);
    if(remainUser !== null) {
        toggleClass();
        diplayGreet();
    }
}

checkUserId();
