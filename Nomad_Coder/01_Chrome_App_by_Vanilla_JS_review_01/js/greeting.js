const logoutContainer = document.querySelector('#logoutButton');
const logoutBlank = document.querySelector('#logoutBlank');
const loginContainer = document.querySelector('#loginForm');
const loginText = document.querySelector('#loginText');
const welcomeContainer = document.querySelector('#welcome');


const HIDDEN_CLASSNAME = 'hidden';
const STORAGE_NAME_ID = 'username';


function loginFunction(event) {
    event.preventDefault();
    const userId = loginText.value;
    // loginText.value = '';
    localStorage.setItem(STORAGE_NAME_ID, userId);
    logoutBlank.className = HIDDEN_CLASSNAME;
    loginContainer.className = HIDDEN_CLASSNAME;
    logoutContainer.classList.remove(HIDDEN_CLASSNAME);
    welcomeContainer.classList.remove(HIDDEN_CLASSNAME);
    welcomeContainer.innerText = `hello ${userId}`;
}

function logoutFunction(){
    logoutContainer.className = HIDDEN_CLASSNAME;
    logoutBlank.classList.remove(HIDDEN_CLASSNAME);
    localStorage.removeItem(STORAGE_NAME_ID);
    loginContainer.classList.remove(HIDDEN_CLASSNAME);
    welcomeContainer.className = HIDDEN_CLASSNAME;    
}

loginContainer.addEventListener("submit", loginFunction);
logoutContainer.addEventListener("click", logoutFunction);

if(localStorage.getItem(STORAGE_NAME_ID) !== null) {
    loginContainer.className = HIDDEN_CLASSNAME;
    logoutBlank.className = HIDDEN_CLASSNAME;
    logoutContainer.classList.remove(HIDDEN_CLASSNAME);
    welcomeContainer.classList.remove(HIDDEN_CLASSNAME);
    welcomeContainer.innerText = `hello ${localStorage.getItem(STORAGE_NAME_ID)}`;
}
