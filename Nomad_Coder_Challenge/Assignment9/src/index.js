const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34"
];

const button = document.querySelector('button');
const body = document.querySelector('body');


function showGradientColor(){
    let randomColor1 = Math.floor(Math.random()*colors.length);
    let randomColor2 = Math.floor(Math.random()*colors.length);
    while(randomColor2 === randomColor1) {
        randomColor2 = Math.floor(Math.random()*colors.length);
    }

    body.style.background = `linear-gradient(0.25turn, ${colors[randomColor1]}, ${colors[randomColor2]})`;
}

button.addEventListener('click', showGradientColor);
