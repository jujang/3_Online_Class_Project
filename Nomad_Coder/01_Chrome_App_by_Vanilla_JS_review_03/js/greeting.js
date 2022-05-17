const loginForm = document.querySelector('#loginForm');
const loginText = document.querySelector('#loginText');
const greeting = document.querySelector('#greeting');

const LOCALID = 'username';

function greet(event) {
    event.preventDefault();
    let nickname = loginText.value;
    localStorage.setItem(LOCALID, nickname);
    greeting.innerText = `hello ${nickname}`;
    toggleHidden();
}

function toggleHidden(){
    loginForm.classList.add('hidden');
    greeting.classList.remove('hidden');
}

loginForm.addEventListener('submit', greet);


let remainID = localStorage.getItem(LOCALID);
if(remainID != null){
    greeting.innerText = `hello ${remainID}`;
    toggleHidden();
}