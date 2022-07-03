const body = document.querySelector('body');

let ranNum1 = Math.floor(Math.random()*26)+1;

const imageName = `img/${ranNum1}.jpg`;

body.style.backgroundImage = `url(${imageName})`;