const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];


const image = document.querySelector("#quote span:first-child");

let randomImageNum = Math.floor(Math.random()*(images.length));
const chosenImage = images[randomImageNum];

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);