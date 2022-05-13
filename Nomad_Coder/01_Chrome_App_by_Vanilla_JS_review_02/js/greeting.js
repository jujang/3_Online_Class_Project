const loginForm = document.querySelector('#loginForm');
const loginText = document.querySelector('#loginText');
const greeting = document.querySelector('#greeting');

const USERID = 'userId';


function toggleHiddenClass(element) {
    element.classList.toggle('hidden');
}

function loginFunc(event) {
    event.preventDefault();
    const inputValue = loginText.value;
    localStorage.setItem(USERID, inputValue);
    
    toggleHiddenClass(loginForm);
    toggleHiddenClass(greeting);
    greeting.innerText = `hello! ${inputValue}`;
}

loginForm.addEventListener('submit', loginFunc);


let remainId = localStorage.getItem(USERID);
if(remainId != null) {
    toggleHiddenClass(loginForm);
    toggleHiddenClass(greeting);
    greeting.innerText = `hello! ${remainId}`;
}
