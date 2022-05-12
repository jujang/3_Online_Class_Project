const backgroundContainer = document.querySelector('body');

const randomNum = Math.floor(Math.random()*26)+1;
const imgText = `img/${randomNum}.jpg`;
backgroundContainer.style.backgroundImage = 'url('+imgText+')';
backgroundContainer.style.backgroundSize = 'cover';
backgroundContainer.style.backgroundPosition = 'center center';
backgroundContainer.style.backgroundAttachment = 'fixed';
