const loginForm = document.querySelector('#loginForm');
const loginText = document.querySelector('#loginInput');
const greet = document.querySelector('#greeting');
const logoutBtn = document.querySelector('#logoutButton');

const USERNAME = 'username';



function toggleClass(){
    loginForm.classList.toggle('hidden');
    greet.classList.toggle('hidden');
}

function userLogin(event){
    event.preventDefault();
    let username = loginText.value;
    loginText.value = '';
    localStorage.setItem(USERNAME, username);
    toggleClass();
    diplayGreet();
}
function userLogout(){
    let response = confirm('Are you really going to log out?');
    if(response){
        localStorage.clear();
        toggleClass();
        ul.innerHTML = '';
    } else {

    }
}

function diplayGreet(){
    const helloBox = document.createElement('span');
    helloBox.value = '';
    helloBox.innerText = `hello ${localStorage.getItem(USERNAME)}`;
    greet.insertBefore(helloBox, greet.firstChild);
}


loginForm.addEventListener('submit', userLogin);
logoutBtn.addEventListener('click', userLogout);


function checkUserId(){
    let remainUser = localStorage.getItem(USERNAME);
    if(remainUser !== null) {
        toggleClass();
        diplayGreet();
    }
}

checkUserId();
