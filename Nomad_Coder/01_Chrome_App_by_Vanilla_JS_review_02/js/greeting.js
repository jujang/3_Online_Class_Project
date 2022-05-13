const loginForm = document.querySelector('#loginForm');
const loginText = document.querySelector('#loginText');

const greeting = document.querySelector('#greeting');


function loginFunc(event) {
    event.preventDefault();
    let inputValue = loginText.value;

}

loginForm.addEventListener('submit', loginFunc);


