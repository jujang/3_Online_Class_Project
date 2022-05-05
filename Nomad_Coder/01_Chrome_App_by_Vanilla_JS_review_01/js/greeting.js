const loginContainer = document.querySelector('#loginForm');
const loginText = document.querySelector('#loginText');
const welcomeContainer = document.querySelector('#welcome');


const STORAGE_NAME_ID = 'username';

function setLocalStorage(userId) {
    localStorage.setItem(STORAGE_NAME_ID, userId);
}

function loginFunction(event) {
    event.preventDefault();
    const userId = loginText.value;
    loginText.value = '';
    setLocalStorage(userId);
    localStorage.setItem(STORAGE_NAME_ID, userId);
    loginContainer.className = 'hidden';
    welcomeContainer.classList.remove('hidden');
    welcomeContainer.innerText = `hello ${userId}`;
}

loginContainer.addEventListener("submit", loginFunction);

if(localStorage.getItem(STORAGE_NAME_ID) !== null) {
    loginContainer.className = 'hidden';
    welcomeContainer.classList.remove('hidden');
    welcomeContainer.innerText = `hello ${localStorage.getItem(STORAGE_NAME_ID)}`;
}
