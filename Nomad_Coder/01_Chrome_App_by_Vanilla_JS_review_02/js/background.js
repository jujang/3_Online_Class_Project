const body = document.querySelector('body');
const background = document.querySelector('#background');

const imgNum = Math.floor(Math.random()*26)+1;
const imgSrc = `img/${imgNum}.jpg`;

body.style.backgroundImage = `url(${imgSrc})`;