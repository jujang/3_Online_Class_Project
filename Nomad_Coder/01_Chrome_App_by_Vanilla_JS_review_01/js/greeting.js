const logoutContainer = document.querySelector('#logoutButton');
const logoutBlank = document.querySelector('#logoutBlank');
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
    logoutBlank.className = 'hidden';
    loginContainer.className = 'hidden';
    logoutContainer.classList.remove('hidden');
    welcomeContainer.classList.remove('hidden');
    welcomeContainer.innerText = `hello ${userId}`;
}

function logoutFunction(){
    logoutContainer.className = 'hidden';
    logoutBlank.classList.remove('hidden');
    localStorage.removeItem(STORAGE_NAME_ID);
    loginContainer.classList.remove('hidden');
    welcomeContainer.className = 'hidden';    
}

loginContainer.addEventListener("submit", loginFunction);
logoutContainer.addEventListener("click", logoutFunction);

if(localStorage.getItem(STORAGE_NAME_ID) !== null) {
    loginContainer.className = 'hidden';
    logoutBlank.className = 'hidden';
    logoutContainer.classList.remove('hidden');
    welcomeContainer.classList.remove('hidden');
    welcomeContainer.innerText = `hello ${localStorage.getItem(STORAGE_NAME_ID)}`;
}
