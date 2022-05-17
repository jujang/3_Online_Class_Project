const body = document.querySelector("body");
const html = document.querySelector("html");


let randomNum = Math.floor(Math.random()*26)+1;

let text = `img/${randomNum}.jpg`;

body.style.backgroundImage = `url(${text})`;